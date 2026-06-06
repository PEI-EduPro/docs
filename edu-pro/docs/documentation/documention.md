---
sidebar_position: 1
---

# API Documentation

## Overview

The backend is a FastAPI application with Keycloak-based authentication. All endpoints are served under the `/api` root path.

| | |
|--|--|
| Swagger UI | `/api/docs` |
| ReDoc | `/api/redoc` |
| Health check | `GET /api/health` |

All authenticated requests require:
```
Authorization: Bearer <token>
```

---

## Architecture

```
api/
├── src/
│   ├── main.py          # App entry point, router registration
│   ├── core/            # Config, DB, Keycloak client, dependencies
│   ├── models/          # SQLModel DB models + Pydantic schemas
│   ├── routers/         # HTTP route handlers
│   └── services/        # Business logic
├── alembic/             # DB migrations
└── pyproject.toml       # Dependencies (managed with uv)
```

Layers: **Routers → Services → Models**

---

## Access Control

Access is controlled by **realm roles** and **Keycloak subject groups**.

### Realm Roles

| Role | Description |
|------|-------------|
| `manager` | Platform admins — manage subjects, users, enrollments |
| `professor` | Teaching staff — subject-specific access via groups |

### Subject Groups

Each subject has a set of Keycloak groups at `/s{id}/<permission>`:

| Group | Grants |
|-------|--------|
| `/s{id}/regent` | Full control over the subject |
| `/s{id}/professors` | View professors, regent |
| `/s{id}/edit_topics` | Create / update / delete topics |
| `/s{id}/edit_questions` | Create / update / delete questions |
| `/s{id}/view_question_bank` | View all questions |
| `/s{id}/generate_exams` | Generate exams |
| `/s{id}/view_grades` | View grades |
| `/s{id}/auto_correct_exams` | Auto-correct exams |

Exam sessions also have groups:

| Group | Grants |
|-------|--------|
| `/w{exam_config_id}/regent` | Exam session regent |
| `/w{exam_config_id}/vigilant` | Vigilant during the running exam |

### Quick Reference

| Action | Manager | Regent | Professor |
|--------|:-------:|:------:|:---------:|
| Create / delete subjects | ✅ | ❌ | ❌ |
| Create users | ✅ | ❌ | ❌ |
| Add professors | ✅ | ✅ | ❌ |
| Create topics & questions | ❌ | ✅ | ⚠️ |
| Generate exams | ❌ | ✅ | ⚠️ |
| View own subjects | ✅ | ✅ | ✅ |

_⚠️ = requires specific permission group_

---

## Endpoints

### Users `/api/users`

| Method | Path | Permission | Description |
|--------|------|------------|-------------|
| GET | `/me` | Authenticated | Current user info |
| POST | `/create` | `manager` | Create a Keycloak user |
| GET | `/professors` | Authenticated | List all professors |
| GET | `/debug/token-info` | `manager` | Full decoded token (debug) |

---

### Subjects `/api/subjects`

| Method | Path | Permission | Description |
|--------|------|------------|-------------|
| POST | `/` | `manager` | Create subject + Keycloak groups |
| GET | `/` | Authenticated | List subjects the user has access to |
| GET | `/{id}` | Subject member | Get subject details |
| PUT | `/{id}` | `manager` or regent | Update (name/regent: manager only) |
| DELETE | `/{id}` | `manager` | Delete subject + Keycloak cleanup |
| GET | `/{id}/regent` | Subject member | Get subject regent |
| GET | `/{id}/professors` | `manager`, `/professors`, `/regent` | List subject professors |
| POST | `/{id}/professors` | `manager`, `/regent` | Add professor with permissions |
| PUT | `/{id}/professors/{prof_id}` | `manager`, `/regent` | Update professor permissions |
| DELETE | `/{id}/professors/{prof_id}` | `manager`, `/regent` | Remove professor |
| GET | `/{id}/topics` | `/view_question_bank`, `/regent` | Topics with question counts |
| GET | `/{id}/topics-list` | `/view_question_bank`, `/regent` | Topics list |
| GET | `/{id}/all-questions` | `/view_question_bank`, `/regent` | All topics, questions and options |

---

### Topics `/api/topics`

| Method | Path | Permission | Description |
|--------|------|------------|-------------|
| POST | `/` | `/edit_topics`, `/regent` | Create topic |
| GET | `/{id}` | Subject member | Get topic by ID |
| PUT | `/{id}` | `/edit_topics`, `/regent` | Update topic |
| DELETE | `/{id}` | `/edit_topics`, `/regent` | Delete topic |

---

### Questions `/api/questions`

| Method | Path | Permission | Description |
|--------|------|------------|-------------|
| POST | `/` | `/edit_questions`, `/regent` | Create questions (batch) |
| POST | `/{subject_id}/XML` | `/edit_questions`, `/regent` | Import questions from XML |
| GET | `/{id}` | `/view_question_bank`, `/regent` | Get question |
| GET | `/{id}/question-options` | `/view_question_bank`, `/regent` | Get question options |
| PUT | `/{id}` | `/edit_questions`, `/regent` | Update question |
| DELETE | `/{id}` | `/edit_questions`, `/regent` | Delete question |

---

### Question Options `/api/question-options`

| Method | Path | Permission | Description |
|--------|------|------------|-------------|
| POST | `/` | `/edit_questions`, `/regent` | Create options (batch) |
| PUT | `/{id}` | `/edit_questions`, `/regent` | Update option |
| DELETE | `/{id}` | `/edit_questions`, `/regent` | Delete option |

---

### Exams `/api/exams`

**Configuration & generation**

| Method | Path | Permission | Description |
|--------|------|------------|-------------|
| POST | `/generate` | `/generate_exams`, `/regent` | Generate exams — returns ZIP |
| POST | `/generate_async` | `/generate_exams`, `/regent` | Start async generation, returns config immediately |
| GET | `/subject/{subject_id}/configs` | Subject member | List exam configs for a subject |
| GET | `/config/{id}` | `/regent` | Full exam config details |
| GET | `/config/{id}/status` | `/regent` | Poll async generation status |
| GET | `/config/{id}/download` | `/regent` | Download generated ZIP |
| DELETE | `/config/{id}` | `/regent` | Delete config (`preparing` or `sent` state only) |

**Student list**

| Method | Path | Permission | Description |
|--------|------|------------|-------------|
| POST | `/exam/{id}/student_list` | `/regent` | Upload student list CSV |
| GET | `/exam/{id}/student_list` | `/regent`, `/w{id}/regent`, `/w{id}/vigilant` | Get student list |

**Exam info & correction**

| Method | Path | Permission | Description |
|--------|------|------------|-------------|
| GET | `/{exam_config_id}/all_exams_info` | `/regent` | All exams with grade, capture, and correction status |
| GET | `/{exam_id}/exam_info` | `/regent` | Single exam info |
| POST | `/{exam_id}/correct_by_hand_job` | `/regent` | Manual correction via answer grid |
| GET | `/{exam_config_id}/grades_report` | `/regent` | Download grades PDF (`completed`/`sent` state) |

**Exam session**

| Method | Path | Permission | Description |
|--------|------|------------|-------------|
| PATCH | `/{id}/session/start` | `/regent` | Start session (`preparing` → `running`) |
| PATCH | `/{id}/session/close` | `/regent` | Close session, process associations |
| GET | `/{id}/session/info` | `/w{id}/regent`, `/w{id}/vigilant` | Full session info |
| GET | `/{id}/session/metrics` | `/w{id}/regent`, `/w{id}/vigilant` | Real-time metrics |
| POST | `/{id}/session/student_to_exam` | `/w{id}/regent`, `/w{id}/vigilant` | Associate student ↔ exam via QR |
| POST | `/{id}/session/evaluate` | `/regent` | OMR evaluate batch of captured exams |
| POST | `/{id}/session/notify-students` | `/regent` | Email grades to students (`completed` state) |
| GET | `/{id}/session/submitted_count` | `/regent` | Count of captured (submitted) exams |
| PATCH | `/{id}/vigilantes` | `/regent` | Update vigilant list |
| GET | `/professor/my-exam-sessions` | `professor` role | Sessions where professor is regent or vigilant |

---

### Warnings `/api/warnings`

| Method | Path | Permission | Description |
|--------|------|------------|-------------|
| GET | `/{exam_config_id}` | `/regent` | Get warnings + filtered student list |
| POST | `/{exam_config_id}/resolve` | `/regent` | Resolve warnings with new exam→student assignments |

---

## Exam State Machine

```
preparing → running → warning_handling → validation → completed → sent
```

| State | Meaning |
|-------|---------|
| `preparing` | Exams generated, session not yet started |
| `running` | Session in progress — students being associated to exams |
| `warning_handling` | Session closed, OMR processing, resolve conflicts |
| `validation` | Results ready for manual review / correction |
| `completed` | All exams validated |
| `sent` | Grades emailed to students |
