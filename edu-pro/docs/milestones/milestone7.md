# Milestone 7

## Prototype

---

<div style={{ position: 'relative', width: '100%', height: 0, paddingTop: '56.25%', boxShadow: '0 2px 8px 0 rgba(63,69,81,0.16)', marginTop: '1.6em', marginBottom: '0.9em', overflow: 'hidden', borderRadius: '8px', willChange: 'transform' }}>
  <iframe loading="lazy" style={{ position: 'absolute', width: '100%', height: '100%', top: 0, left: 0, border: 'none', padding: 0, margin: 0 }} src="https://www.canva.com/design/DAHJuYZLjjI/5ZhlRntj3i4Vkfe52BL7yw/view?embed" allowFullScreen />
</div>
<a href="https://www.canva.com/design/DAHJuYZLjjI/5ZhlRntj3i4Vkfe52BL7yw/view?utm_content=DAHJuYZLjjI&utm_campaign=designshare&utm_medium=embeds&utm_source=link" target="_blank" rel="noopener">EduPro - MS7</a>

---

## 1. Performance

### 1.1 Load Testing with K6

Performance testing was conducted using K6 to evaluate the system under realistic load conditions. A key finding was the identification and resolution of N+1 query problems in the API, which were causing unnecessary database round-trips and degrading response times under load.

---

## 2. Scalability

### 2.1 User Limits & Architecture

Scalability tests were run with virtual user ramp-ups to validate the non-functional requirement defined in MS2: the system must handle 50 concurrent users.

| Scenario | HTTP Requests | Failed | Req/s | Avg Duration | Median | Min | Max | p90 | p95 |
|---|---|---|---|---|---|---|---|---|---|
| 0–50 VUs | 1215 | 0 | ~9.9 | 55.08ms | 43.52ms | 29.93ms | 790.29ms | 95.49ms | 137.07ms |
| 0–200 VUs | 1959 | 3 | ~9.2 | 55.04ms | 38ms | 6.24ms | 1.11s | 130.52ms | 150.63ms |

The 3 failures observed at 200 VUs are not a concern given the defined non-functional requirement of 50 concurrent users.

### 2.2 Vertical Scalability

The system benefits directly from additional hardware resources. Asynchronous I/O, PDF generation, and OMR processing all scale with available CPU and memory — more resources yield proportionally better performance.

### 2.3 Horizontal Scalability

Horizontal scaling is currently constrained by the architecture. The heavy API Docker image, combined with FastAPI's `BackgroundTasks` and zip file handling, are instance-bound, meaning simply adding more instances introduces coordination problems rather than solving them.

To address this, the proposed solution introduces a message broker for API requests and distributed services to improve throughput and reduce blocking. Additionally, MinIO is adopted as a distributed object storage layer for images and zip files, decoupling file storage from individual API instances.

---

## 3. Security

The security testing strategy for EduPro was built around the tooling recommended by the [OWASP](https://owasp.org) community. OWASP publishes guidance on which tools best cover each testing category — SAST, SCA, and DAST — and we selected our toolchain accordingly:

- **Aikido** for SAST and SCA: covers static code analysis and dependency vulnerability scanning, both categories explicitly recommended by OWASP for identifying issues before runtime.
- **OWASP ZAP** for DAST: the reference tool for dynamic testing listed on the OWASP website, used to probe the running application for vulnerabilities that only manifest at runtime, such as missing security headers.
- **GitHub CodeQL** and the **GitHub Security Bot**: integrated directly into the repository to provide continuous SAST and automated dependency alerts on every push and pull request, ensuring vulnerabilities are caught as early as possible in the development workflow.

This combination ensures coverage across the full spectrum — from insecure code patterns and vulnerable dependencies, to runtime HTTP-level weaknesses.

---

### 3.1 Authentication & Authorization

- **JWT** tokens are issued and validated by Keycloak.
- **RBAC** is enforced via Keycloak groups.
- Passwords are stored using **Argon2**, a memory-hard hashing algorithm.

### 3.2 SAST/SCA — Aikido

Static Application Security Testing and Software Composition Analysis was performed using **Aikido**. All findings have been resolved.

| Severity | Finding | Component | Resolved |
|---|---|---|---|
| Critical | Using blacklisted XML parsing function | `pdf_generator.py` | ✅ |
| High | Accidental exposure of sensitive info possible | `urllib3` | ✅ |
| High | 3rd party GitHub Actions should be pinned | `ci.yml` | ✅ |
| Medium | Potential file inclusion attack via reading file | `utils.py`, `exam.py` + 1 other | ✅ |
| Medium | Dependency vulnerability | `authlib` | ✅ |
| Medium | Dependency vulnerability | `python-multipart` | ✅ |
| Low | Cross-site request forgery (CSRF) possible | `authlib` | ✅ |
| Low | Cross-site request forgery (CSRF) possible | `authlib` | ✅ |
| Low | Dependency vulnerability | `lxml` | ✅ |
| Low | Dependency vulnerability | `jwcrypto` | ✅ |
| Low | Attacker can abuse lack of operation restrictions in memory | `cryptography` | ✅ |

All findings were triaged and resolved by May 17th, 2026. No open Aikido alerts remain.

---

### 3.3 SAST — GitHub CodeQL & Security Bot

**CodeQL** was enabled on the repository and ran automatically on every pull request to `dev`. All alerts have been resolved.

| Severity | Finding | Resolved |
|---|---|---|
| Medium | Information exposure through an exception (×4) | ✅ |
| Medium | Workflow does not contain permissions (×5) | ✅ |

The exception exposure findings were fixed by catching exceptions without leaking internal details to API responses. The workflow permission findings were resolved by adding explicit `permissions` blocks to the CI/CD workflow files, following the principle of least privilege.

The **GitHub Security Bot** flagged additional instances of sensitive information being leaked through application logs. All reported occurrences were identified and resolved across the relevant pull requests.

---

### 3.4 DAST — OWASP ZAP

Dynamic Application Security Testing was performed using **OWASP ZAP** against the running application. ZAP identified two missing HTTP response headers:

| Alert | Risk | Resolution |
|---|---|---|
| `X-Content-Type-Options` missing | Low | Added header with value `nosniff` |
| `Cross-Origin-Resource-Policy` missing | Low | Added header with value `same-origin` |

Both findings were resolved by adding a security headers middleware to the FastAPI application:

```python
class SecurityHeadersMiddleware(BaseHTTPMiddleware):
    async def dispatch(self, request, call_next):
        response = await call_next(request)
        response.headers["X-Content-Type-Options"] = "nosniff"
        response.headers["Cross-Origin-Resource-Policy"] = "same-origin"
        return response

app.add_middleware(SecurityHeadersMiddleware)
```

- **`X-Content-Type-Options: nosniff`** — prevents browsers from MIME-sniffing a response away from the declared content type.
- **`Cross-Origin-Resource-Policy: same-origin`** — restricts cross-origin resource loading, mitigating Spectre-style side-channel attacks.

After applying the fix, ZAP reported no remaining alerts.

---

### 3.5 OWASP Top 10 (2025)

| # | Category | How EduPro addresses it |
|---|---|---|
| A01 | Broken Access Control | RBAC enforced via Keycloak groups; all API routes require a valid JWT with the appropriate role. SSRF is not applicable — no user-controlled URLs are fetched server-side. |
| A02 | Security Misconfiguration | GitHub Actions workflows lacked explicit `permissions` blocks — flagged by CodeQL and fixed. Security headers (`X-Content-Type-Options`, `Cross-Origin-Resource-Policy`) were missing — flagged by ZAP and added via FastAPI middleware. |
| A03 | Software Supply Chain Failures | All flagged dependency vulnerabilities (`urllib3`, `authlib`, `lxml`, `jwcrypto`, `python-multipart`, `cryptography`) resolved via Aikido SCA. Third-party GitHub Actions pinned to specific versions after Aikido alert. `pip audit` and `npm audit` run continuously with no known vulnerabilities. |
| A04 | Cryptographic Failures | Passwords hashed with Argon2; all traffic is HTTPS-only via Nginx SSL termination; JWTs are short-lived and signed by Keycloak. |
| A05 | Injection | SQLModel/SQLAlchemy parameterizes all queries. Blacklisted XML parsing function in `pdf_generator.py` flagged by Aikido and replaced with a safe alternative. React escapes HTML by default, preventing XSS. |
| A06 | Insecure Design | File inclusion vulnerabilities in `utils.py` and `exam.py` identified by Aikido and fixed. Exam workflow enforces state transitions server-side. |
| A07 | Authentication Failures | Authentication fully delegated to Keycloak (OAuth2 + JWT); Argon2 password storage; no custom auth logic. |
| A08 | Software or Data Integrity Failures | CD pipeline deploys only from `main` after passing CI. Third-party GitHub Actions pinned after Aikido finding. |
| A09 | Security Logging and Alerting Failures | Sensitive information leaking into logs flagged by the GitHub Security Bot and resolved across multiple PRs. Exception details leaking into API responses flagged by CodeQL and fixed. |
| A10 | Mishandling of Exceptional Conditions | Information exposure through exceptions in `waiting_room.py` flagged by CodeQL (×4) and fixed by catching exceptions without leaking internal details to responses. |

---

## 4. AI Models & Algorithm Validation

### 4.1 Dataset

100 exam copies were printed and distributed across multiple students to collect a diverse set of marks and writing instruments, providing a realistic and varied validation dataset.

### 4.2 Static OMR vs. CNN OMR

| | Static OMR (Old) | CNN OMR (New) |
|---|---|---|
| **Approach** | Pixel percentage thresholds | Convolutional Neural Network |
| **Empty** | < 30 black pixels | CNN classification |
| **Selected** | ≥ 20% black pixels | CNN classification |
| **Erased** | ≥ 85% black pixels | CNN classification |
| **Validation** | None | Stratified 5-Fold Group Cross-Validation |

### 4.3 Metrics Comparison

**Static OMR (Old)**

| Class | Precision | Recall | F1-Score |
|---|---|---|---|
| Empty | 0.8999 | 0.8853 | 0.8926 |
| Selected | 0.6539 | 0.7842 | 0.7131 |
| Erased | 0.6248 | 0.3845 | 0.4761 |

Overall Accuracy: **0.7939** — Total Detection Errors: **1649**

**CNN OMR (New)**

| Class | Precision | Recall | F1-Score |
|---|---|---|---|
| Empty | 0.9958 | 0.9981 | 0.9969 |
| Selected | 0.9932 | 0.9488 | 0.9705 |
| Erased | 0.8989 | 0.9819 | 0.9386 |

Overall Accuracy: **0.9819 (+23.68%)** — Total Detection Errors: **145 (−91.21%)**

Macro Avg Precision: 0.9626 (+32.55%) | Recall: 0.9763 (+42.59%) | F1-Score: 0.9687 (+39.60%)

### 4.4 Error Analysis

The CNN model's main misclassification source is selected cells being classified as erased. The primary causes are:

- "Alpha"-style marks
- Bold crosses
- Abstract or unconventional shapes

The model is also penalized for misclassifying true erased cells, as erased is the minority class in the dataset.

---

## 5. Software Project Management

### 5.1 Sprint Review

85% of the tasks defined for this sprint were completed. The remaining 15% were missed due to mismanagement of priorities — specifically, SUS evaluation and end-to-end testing were planned but moved to the next sprint.

### 5.2 CI/CD Pipeline & Workflow

**Branching & Review:**
- New code must be implemented in a dedicated branch with a descriptive name.
- The branch must pass all existing tests and include new tests covering the changes.
- A pull request is submitted and requires approval from the PM and at least one other developer before merging to `dev`.
- The `dev` branch is periodically promoted to `main`.
- Pull Request count: **117 closed** by May 18th, 2026.

**CI Pipeline** — triggered on every push and pull request to `main` and `dev`:
1. Spins up a PostgreSQL service container for the test run.
2. Builds all Docker images.
3. Runs Alembic migrations and verifies they are up to date (`alembic upgrade head && alembic check`) — the pipeline fails if any unapplied migrations exist.
4. Runs the full test suite via `run_tests.sh`:
   - Starts an **isolated** Docker environment (separate DB on port 5433, Keycloak on port 8081) to prevent interference with development instances.
   - Runs **unit tests** against an in-memory configuration.
   - Runs **integration tests** against the isolated Docker services, appending coverage results.
   - Produces a combined `coverage.xml` report.

**SonarQube Pipeline** — triggered on every push and pull request to `main` and `dev`:
- Runs the full test suite with coverage enabled.
- Submits results to a self-hosted SonarQube instance for static analysis, code quality gates, and reliability checks.

**CD Pipeline** — triggered on every push to `main`:
- Runs on a **self-hosted Linux runner** (the production server).
- Deploys the updated stack in-place via `docker compose up -d --build`.
- No critical bugs have been detected in production to date.

All third-party GitHub Actions are pinned to specific commit SHAs to prevent supply chain attacks.
