# Milestone 2

# Elaboration


## Presentation
---
<div
  style={{
    position: 'relative',
    width: '100%',
    height: 0,
    paddingTop: '56.25%',
    boxShadow: '0 2px 8px 0 rgba(63,69,81,0.16)',
    marginTop: '1.6em',
    marginBottom: '0.9em',
    overflow: 'hidden',
    borderRadius: '8px',
    willChange: 'transform',
  }}
>
  <iframe
    loading="lazy"
    style={{
      position: 'absolute',
      width: '100%',
      height: '100%',
      top: 0,
      left: 0,
      border: 'none',
      padding: 0,
      margin: 0,
    }}
    src="https://www.canva.com/design/DAG4oPfDu7M/dpny4MS-WTN2L_mDFgEo0Q/view?embed"
    allowFullScreen
  ></iframe>
</div>

<a
  href="https://www.canva.com/design/DAG4oPfDu7M/dpny4MS-WTN2L_mDFgEo0Q/view?utm_content=DAG4oPfDu7M&utm_campaign=designshare&utm_medium=embeds&utm_source=link"
  target="_blank"
  rel="noopener"
>
  EduPro - MS2
</a>

---

## 1. Requirements Gathering

The requirement gathering was done through extensive brainstorming and multiple meetings with the client to refine existing requirements and add new ones.

## 2. Functional Requirements

### Manage Courses (Curricular Units)

- Add Courses

- Remove Courses

- Request mandatory information: name and regent professor.

- Allow adding students and non-regent professors.

- Confirm course creation with success message.

- Assign / Remove Regents

- Present list of available professors.

- Assign / Remove Professors

- Add / Remove Students

- List available students or course students.

### Manage Documentation

- View Documents

- Access document information (manual / question bank).

- Allow PDF download

- Edit Documents

- Allow content editing

- Professor Permissions

- List available permissions: manage professors, edit documents, generate tests

- Allow enabling/disabling permissions individually.

### Generate Tests

- Define parameters: number of questions per category, total number of questions

- Generate unique QR Codes.

- Create tests per student.

- Create an answer matrix associated with the test.

- Allow ZIP download with individual PDFs.

- Associate Students with Tests (Scan QR Code and associate student number)

### Correct Tests

- Analyze answers with OCR.

- Associate matrix with digitized test.

- Calculate scoring.

- Export Grades

- Submit Grades

- Automatically send emails with evaluations to all students.

### View Statistics

- Present statistics and charts: general average, grade distribution, success rate, most difficult questions, etc.

## 3. Context and State of the Art (SOA)

EduPro approaches several systems but none of them contain all the functionalities we need:

### Automatic test generation

| Platform / Tool         | Automatic Generation (AI or Question Bank) | Advanced Customization | Export (.docx / PDF) |
| ----------------------- | ------------------------------------------ | ---------------------- | -------------------- |
| Moodle (core + plugins) | ⚙️                                         | ⚙️                     | ✔️                   |
| Moodle + qbank_genai    | ✔️                                         | ⚙️                     | ❌                    |
| Open edX (ORA)          | ⚙️                                         | ❌                      | ❌                    |
| ZipGrade                | ❌                                          | ❌                      | ❌                    |
| python-docx-template    | ❌                                          | ✔️                     | ✔️                   |
| ONLYOFFICE Docs         | ❌                                          | ✔️                     | ✔️                   |
| Examino                 | ✔️                                         | ❌                      | ❌                    |
| **EduPro**              | **✔️**                                     | **✔️**                 | **✔️**               |

### Automatic correction with OCR

| Platform          | Physical OCR (e.g.: printed tests) | Automatic Online Correction | Results Export            |
| ----------------- | ---------------------------------- | --------------------------- | ------------------------- |
| Moodle            | ❌                                  | ✔️                          | ✔️                        |
| ZipGrade          | ✔️                                 | ❌                           | ⚙️                        |
| Open edX          | ❌                                  | ✔️                          | ⚙️                        |
| ExamIO            | ✔️                                 | ❌                           | ⚙️                        |
| PhotoExamAI       | ✔️                                 | ❌                           | ❌                         |
| **EduPro**        | **✔️**                             | **✔️**                      | **✔️ (excel, docx, pdf)** |

### Curricular management

| Platform          | Curricular Units Management | Access Management (Professors/Students) | History / Archive |
| ----------------- | --------------------------- | -------------------------------------- | ----------------- |
| Moodle            | ✔️                          | ✔️                                     | ✔️                |
| Open edX          | ✔️                          | ✔️                                     | ⚙️                |
| ONLYOFFICE        | ❌                           | ❌                                      | ✔️                |
| ZipGrade          | ❌                           | ❌                                     | ❌                |
| **EduPro**        | **✔️**                      | **✔️**                                 | **✔️**            |

### Templates and Documents

| Platform             | Editable Templates | Export `.docx`/PDF | Collaboration |
| -------------------- | ------------------ | ------------------ | ------------- |
| ONLYOFFICE Docs      | ❌                  | ✔️                 | ✔️            |
| python-docx-template | ⚙️                 | ✔️                 | ❌             |
| SuperDoc             | ⚙️                 | ✔️                 | ⚙️            |
| **EduPro**           | **✔️**             | **✔️**             | **✔️**        |

Comparison with the state of the art

Tools like Moodle, Open edX, ZipGrade or python-docx-template provide fragments of the desired solution. Some generate tests, others correct automatically, others allow templates, but none integrates the entire pedagogical flow of professional education.

The competitive analysis demonstrates a clear opportunity for a complete platform that unifies these processes.

## 4. Actors (Personas)

### Manager
The user responsible for creating curricular courses and associating regents to them.

### Regent
The user responsible for managing their curricular courses and the professors linked to them.

### Professor
The user responsible for helping the regent within the permissions given to them.

### Student (Indirect)
Indirect user, receives generated tests and returns them for correction.

## 5. Use Cases (High-Level)

### UC01 – Manage Courses

**Primary Actor:** Manager, Regent
**Goal:** Create, modify, and manage curricular courses and their associated users
**Main Flow:**
1. User accesses course management interface
2. System displays available courses and management options
3. User can create new courses with mandatory information (name, regent)
4. User can assign/remove regents and professors
5. User can add/remove students to/from courses
6. System confirms actions with success messages

#### UC02 – Manage Documentation

**Primary Actor:** Regent, Professor
**Goal:** Create, edit, and manage course documentation including manuals and question banks
**Main Flow:**
1. User accesses documentation management
2. System displays available documents (manuals, question banks)
3. User can edit document content with collaborative features
4. User can export documents in PDF format
5. System saves changes and maintains version history

#### UC03 – Generate Tests

**Primary Actor:** Regent, Professor (with permissions)
**Goal:** Create customized tests from question banks with automated distribution
**Main Flow:**
1. User defines test parameters (questions per category, total questions)
2. System generates unique QR codes for each student
3. System creates individual test PDFs with answer matrices
4. User can download ZIP file containing all test materials
5. Students scan QR codes to associate with their tests

#### UC04 – Correct Tests

**Primary Actor:** Regent, Professor
**Goal:** Automatically process and grade physical test submissions using OCR
**Main Flow:**
1. User uploads scanned test images
2. System processes images using OCR technology
3. System identifies test using QR codes or student information
4. System matches answers against stored answer matrix
5. System calculates scores and generates grade reports
6. User can export results in multiple formats

#### UC05 – Grades and Communication

**Primary Actor:** Regent, Professor
**Goal:** Manage and communicate student grades efficiently
**Main Flow:**
1. User reviews calculated grades from corrected tests
2. User can manually adjust grades if necessary
3. System launches grades to student records
4. System automatically sends personalized emails to students with their evaluations
5. System maintains grade history and audit trail

#### UC06 – Statistics and Dashboards

**Primary Actor:** Regent, Professor, Manager
**Goal:** Access comprehensive analytics and performance metrics
**Main Flow:**
1. User accesses statistics dashboard
2. System displays various metrics: class averages, grade distributions, success rates
3. User can filter data by course, time period, or student groups
4. System identifies most difficult questions and learning gaps
5. User can export statistical reports for further analysis

#### UC07 – Authentication and Authorization

**Primary Actor:** All Users
**Goal:** Secure access control with role-based permissions
**Main Flow:**
1. User attempts to access system
2. System prompts for authentication credentials
3. System verifies user identity and role
4. System grants access based on user permissions (Manager, Regent, Professor)
5. System logs user activities for security audit

## 6. Non-Functional Requirements

- Support > 50 concurrent users.
- Support storage of thousands of documents and tests.
- Password encryption.
- RBAC (Role-Based Access Control).
- Atomicity in editing and correction operations.
- Page loading time < 3 seconds under normal conditions.
- System compatible with modern browsers.
- Comply with WCAG 2 standards 
---