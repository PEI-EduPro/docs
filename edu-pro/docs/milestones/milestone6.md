# Milestone 6

## Prototype

---

<div style={{ position: 'relative', width: '100%', height: 0, paddingTop: '56.25%', boxShadow: '0 2px 8px 0 rgba(63,69,81,0.16)', marginTop: '1.6em', marginBottom: '0.9em', overflow: 'hidden', borderRadius: '8px', willChange: 'transform' }}>
  <iframe loading="lazy" style={{ position: 'absolute', width: '100%', height: '100%', top: 0, left: 0, border: 'none', padding: 0, margin: 0 }} src="https://www.canva.com/design/DAHIWEMDOMU/-NyZ_6r-DK2YfmyXGPx0GA/view?embed" allowFullScreen />
</div>
<a href="https://www.canva.com/design/DAHIWEMDOMU/-NyZ_6r-DK2YfmyXGPx0GA/view?utm_content=DAHIWEMDOMU&utm_campaign=designshare&utm_medium=embeds&utm_source=link" target="_blank" rel="noopener">EduPro - MS6</a>

---

## 1. Legal Requirements

This milestone focused on a thorough legal and compliance review of EduPro, covering GDPR obligations, security posture, licensing, and conditions of use.

---

### 1.1 GDPR & Data Privacy

EduPro processes several categories of personal data, including student names, emails, and student numbers (stored in Keycloak and PostgreSQL), exam answers and grades (PostgreSQL), scanned answer-sheet images (Docker volume), and application logs.

The current implementation has GDPR gaps that must be addressed before any live deployment with real student data:

- No privacy notice is shown to users.
- No consent mechanism exists.
- No email verification is in place.
- Scanned images are stored indefinitely with no anonymization.
- No audit trail exists over who creates curricular units.  

**Retention obligations:** Portuguese law requires grades to be kept for a minimum of 10 years. Scanned answer-sheet images should be deleted 30–60 days after the appeal period ends.

---

### 1.2 Security Gaps

The security review identified several high-risk findings:

- No brute force protection on authentication endpoints.
- No password policy enforced.
- CORS is configured with a wildcard (`*`), allowing any origin.
- Logs contain usernames and roles without any retention or redaction policy.
- Any authenticated user is automatically assigned the professor role, bypassing access control.

---

### 1.3 Licensing & Intellectual Property

The technology stack is composed almost entirely of MIT, Apache 2.0, and BSD licensed components, with no GPL or AGPL dependencies. This means EduPro can be distributed as either a proprietary or open-source product without legal barriers.

---

### 1.4 Third-Party & Interoperability Risks

- **PostgreSQL 18-alpine** is a pre-release version, introducing operational risk.
- **BeautifulSoup4** is vulnerable to XML parsing attacks if used with untrusted input.
- **OpenCV** accepts untrusted image uploads and has a history of CVEs; no automated updates are in place for Keycloak.
- CSV import assumes Unix line breaks, making it brittle for files generated on Windows.
- Schema changes currently require dropping the entire database — no migration tooling exists.
- The flat Keycloak group structure makes the native Keycloak UI unusable for group management.

---

### 1.5 Technical Debt

- The curricular unit creator's Keycloak ID is stored as a dummy value.
- Student name, number, and email are stored as raw JSON blobs, making them impossible to query efficiently.
- No unit tests exist for the OMR (Optical Mark Recognition) grading pipeline.

---

### 1.6 Brittle Components

- Token expiration during an active exam session results in a 401 error with no refresh mechanism.
- Keycloak partial state can leave some students not added to their groups.
- The OMR pipeline is vulnerable to path traversal via unsanitised filenames.

---

## 2. SWOT Analysis

| Strengths | Weaknesses |
| --- | --- |
| Solid auth + permissions | No DB migrations, broken audit trail |
| Self-hosted, no external trackers | Auto-professor role assignment |
| Full exam workflow | GDPR features absent |
| Modern stack (FastAPI + React) | JSON blob data model |

| Opportunities | Threats |
|---|---|
| Institutional adoption (EU sovereignty) | OpenCV CVEs |
| Integration with student information systems | GDPR enforcement risk |
| Grade analytics and notifications | Keycloak version drift |
| Multi-institution deployment | Unmaintainable OMR pipeline |

---

## 3. PESTEL Analysis

- **Political** — EU digital sovereignty push; Portuguese public sector digitalization initiatives.
- **Economic** — Cost advantage over commercial tools; maintenance cost is higher due to accumulated technical debt.
- **Social** — Academic integrity concerns; accessibility has not been addressed.
- **Technological** — OMR pipeline is fragile.
- **Environmental** — Runs on existing institutional servers (low footprint); partial reduction of paper-based processes.
- **Legal** — GDPR gaps, 10-year grade retention obligation, European Accessibility Act compliance required.

---

## 4. Conditions of Use & Liability

- **Who may use** — Enrolled students, academic staff, and managers.
- **Permitted uses** — Exam generation, scanning, and grading within official curricular units.
- **Prohibited** — Sharing credentials or exporting student data outside the platform.
- **Liability** — The institution is not liable for OMR grading errors; students may request manual review.
- **Retention** — Grades are kept for 10 years; scanned images are deleted after the appeal period.
- **Jurisdiction** — Portuguese law, CNPD as the supervisory authority.

---

## 5. Critical Fixes Required

1. Add a privacy notice visible to all users.
2. Implement a consent mechanism.
