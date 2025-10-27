# Milestone 2

## Endpoints needed

### Complete Endpoint Structure:

#### Authentication & Authorization

```
POST /api/auth/login
POST /api/auth/logout
GET /api/auth/check
```

#### Course Management

```
GET    /api/courses
POST   /api/courses
GET    /api/courses/:courseId
PUT    /api/courses/:courseId
DELETE /api/courses/:courseId
```

#### Subject Management

```
GET    /api/courses/:courseId/subjects
POST   /api/courses/:courseId/subjects
GET    /api/subjects/:subjectId
PUT    /api/subjects/:subjectId
DELETE /api/subjects/:subjectId
```

#### User Management

```
GET    /api/users/teachers
GET    /api/users/students
```

#### Subject-Specific Operations

```
# Teacher Management
POST   /api/subjects/:subjectId/teachers/main
DELETE /api/subjects/:subjectId/teachers/main
GET    /api/subjects/:subjectId/teachers
POST   /api/subjects/:subjectId/teachers
DELETE /api/subjects/:subjectId/teachers

# Student Management
GET    /api/subjects/:subjectId/students
POST   /api/subjects/:subjectId/students
DELETE /api/subjects/:subjectId/students

# Permission Management
GET    /api/subjects/:subjectId/teachers/:teacherId/permissions
PUT    /api/subjects/:subjectId/teachers/:teacherId/permissions
```

#### Document Management

```
# Workbooks (formerly manuals)
GET    /api/subjects/:subjectId/workbook
PUT    /api/subjects/:subjectId/workbook
GET    /api/subjects/:subjectId/workbook/pdf

# Question Banks
GET    /api/subjects/:subjectId/question-bank
PUT    /api/subjects/:subjectId/question-bank
GET    /api/subjects/:subjectId/question-bank/pdf
```

#### Test Management

```
POST   /api/subjects/:subjectId/tests/generate
GET    /api/subjects/:subjectId/tests/:testId/preview
GET    /api/subjects/:subjectId/tests/:testId/download
POST   /api/subjects/:subjectId/tests/:testId/associate
POST   /api/subjects/:subjectId/tests/:testId/grade
GET    /api/subjects/:subjectId/tests/:testId/grades/excel
PUT    /api/subjects/:subjectId/tests/:testId/grades/excel
GET    /api/subjects/:subjectId/tests/:testId/grades/docx
GET    /api/subjects/:subjectId/tests/:testId/grades/pdf
POST   /api/subjects/:subjectId/tests/:testId/grades/publish
```

#### Statistics

```
GET    /api/subjects/:subjectId/statistics/performance
GET    /api/courses/:courseId/statistics
```

### Endpoint Specification Table:

| Endpoint                                            | Method | Input                          | Output                 | Description                                |
| --------------------------------------------------- | ------ | ------------------------------ | ---------------------- | ------------------------------------------ |
| **Authentication**                                  |        |                                |                        |                                            |
| `/api/auth/login`                                   | POST   | `{email, password}`            | `{token, user}`        | User login                                 |
| `/api/auth/logout`                                  | POST   | `{token}`                      | `{message}`            | User logout                                |
| `/api/auth/check`                                   | GET    | `{token}`                      | `{user, isValid}`      | Validate token                             |
| **Course Management**                               |        |                                |                        |                                            |
| `/api/courses`                                      | GET    | -                              | `[{course}]`           | List all courses                           |
| `/api/courses`                                      | POST   | `{name, description}`          | `{course}`             | Create new course                          |
| `/api/courses/:id`                                  | GET    | -                              | `{course}`             | Get course details                         |
| `/api/courses/:id`                                  | PUT    | `{name, description}`          | `{course}`             | Update course                              |
| `/api/courses/:id`                                  | DELETE | -                              | `{message}`            | Delete course                              |
| **Subject Management**                              |        |                                |                        |                                            |
| `/api/courses/:id/subjects`                         | GET    | -                              | `[{subject}]`          | List course subjects                       |
| `/api/courses/:id/subjects`                         | POST   | `{name, mainteacher}`          | `{subject, workbooks}` | Create subject with auto-created workbooks |
| `/api/subjects/:id`                                 | GET    | -                              | `{subject}`            | Get subject details                        |
| `/api/subjects/:id`                                 | PUT    | `{name, ...}`                  | `{subject}`            | Update subject                             |
| `/api/subjects/:id`                                 | DELETE | `{confirmation}`               | `{message, impact}`    | Delete subject with confirmation           |
| **User Management**                                 |        |                                |                        |                                            |
| `/api/users/teachers`                               | GET    | -                              | `[{teacher}]`          | List available teachers                    |
| `/api/users/students`                               | GET    | -                              | `[{student}]`          | List available students                    |
| **teacher Management**                              |        |                                |                        |                                            |
| `/api/subjects/:id/teachers/main`                   | POST   | `{teacherId}`                  | `{message}`            | Assign main teacher + email                |
| `/api/subjects/:id/teachers/main`                   | DELETE | `{confirmation}`               | `{message}`            | Remove main teacher + email                |
| `/api/subjects/:id/teachers`                        | GET    | -                              | `[{teacher}]`          | List subject teachers                      |
| `/api/subjects/:id/teachers`                        | POST   | `{teacherIds[]}`               | `{message}`            | Batch assign teachers + emails             |
| `/api/subjects/:id/teachers`                        | DELETE | `{teacherIds[], confirmation}` | `{message}`            | Batch remove teachers + emails             |
| **Student Management**                              |        |                                |                        |                                            |
| `/api/subjects/:id/students`                        | GET    | -                              | `[{student}]`          | List subject students                      |
| `/api/subjects/:id/students`                        | POST   | `{studentIds[]}`               | `{message}`            | Batch add students                         |
| `/api/subjects/:id/students`                        | DELETE | `{studentIds[], confirmation}` | `{message}`            | Batch remove students                      |
| **Permission Management**                           |        |                                |                        |                                            |
| `/api/subjects/:id/teachers/:teacherId/permissions` | GET    | -                              | `{available, current}` | Get permissions                            |
| `/api/subjects/:id/teachers/:teacherId/permissions` | PUT    | `{permissions[]}`              | `{message}`            | Update permissions + email                 |
| **Document Management**                             |        |                                |                        |                                            |
| `/api/subjects/:id/workbook`                        | GET    | -                              | `{workbook}`           | Get workbook content                       |
| `/api/subjects/:id/workbook`                        | PUT    | `{content, confirmation}`      | `{workbook}`           | Update workbook                            |
| `/api/subjects/:id/workbook/pdf`                    | GET    | -                              | `PDF file`             | Download workbook PDF                      |
| `/api/subjects/:id/question-bank`                   | GET    | -                              | `{questionBank}`       | Get question bank                          |
| `/api/subjects/:id/question-bank`                   | PUT    | `{content, confirmation}`      | `{questionBank}`       | Update question bank                       |
| `/api/subjects/:id/question-bank/pdf`               | GET    | -                              | `PDF file`             | Download question bank PDF                 |
| **Test Management**                                 |        |                                |                        |                                            |
| `/api/subjects/:id/tests/generate`                  | POST   | `{params, preview?}`           | `{test, zipUrl}`       | Generate tests with QR codes               |
| `/api/subjects/:id/tests/:testId/preview`           | GET    | -                              | `{preview}`            | Preview test before generation             |
| `/api/subjects/:id/tests/:testId/download`          | GET    | -                              | `ZIP file`             | Download generated tests                   |
| `/api/subjects/:id/tests/:testId/associate`         | POST   | `{qrCode, studentId}`          | `{message}`            | Associate test with student                |
| `/api/subjects/:id/tests/:testId/grade`             | POST   | -                              | `{results}`            | Auto-grade tests                           |
| `/api/subjects/:id/tests/:testId/grades/excel`      | GET    | -                              | `Excel file`           | Export grades to Excel                     |
| `/api/subjects/:id/tests/:testId/grades/excel`      | PUT    | `{grades}`                     | `{message}`            | Edit grades in Excel                       |
| `/api/subjects/:id/tests/:testId/grades/docx`       | GET    | -                              | `DOCX file`            | Convert to DOCX                            |
| `/api/subjects/:id/tests/:testId/grades/pdf`        | GET    | -                              | `PDF file`             | Convert to PDF                             |
| `/api/subjects/:id/tests/:testId/grades/publish`    | POST   | -                              | `{message}`            | Email grades to students                   |
| **Statistics**                                      |        |                                |                        |                                            |
| `/api/subjects/:id/statistics/performance`          | GET    | -                              | `{stats, graphs}`      | Student performance stats                  |
| `/api/courses/:id/statistics`                       | GET    | -                              | `{stats, graphs}`      | Course-wide statistics                     |
