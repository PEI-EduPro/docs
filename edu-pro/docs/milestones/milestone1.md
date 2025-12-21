# Milestone 1

# Inception

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
    src="https://www.canva.com/design/DAG2nf65WnQ/bFwFt0jPPUD1dnM6OXKbSA/view?embed"
    allowFullScreen
  ></iframe>
</div>
<a
  href="https://www.canva.com/design/DAG2nf65WnQ/bFwFt0jPPUD1dnM6OXKbSA/view?utm_content=DAG2nf65WnQ&utm_campaign=designshare&utm_medium=embeds&utm_source=link"
  target="_blank"
  rel="noopener"
>
  EduPro - MS1
</a>

---

## 1. Background

Educational and professional training institutions require tools that integrate the creation, management, and evaluation of pedagogical content. Currently, exam preparation, UFCD (Short-Duration Training Unit) planning, and manual production are carried out in dispersed systems with heavy reliance on manual processes.
 
This results in inefficiencies, work duplication, and failures in documentation standardization.
EduPro aims to address these gaps by offering an integrated solution for teachers and coordinators, from creating exams with automatic grading to planning and standardizing pedagogical content. The platform seeks to transform fragmented traditional processes into a unified, efficient, and scalable experience

## 2. Problem Statement

- **Disperse** systems needed to create, manage and evaluate exams.
- **Inefficiency**, **duplicate** work and uniformization problems due to **manual** processes

## 3. Objectives

EduPro has the following objectives:

- **Automate** the production of tests by using a question database.
- Allow **custom builds** for each test batch.
- Uniquely identify each test with QR codes.
- **Automate** the production of workbooks through templates.
- **Grade** tests automatically with the usage of OCR software.
- Allow teachers to share their workbooks and **templates**.
- Store produced educational material.
- Send emails automatically to the graded student.
- **Generate** answers to questions with LLMs.

## 4. Expected Results

- **Complete Web Platform for Training Management**

- **Functional Automatic Grading System**

- **Structured Question Bank**

- **Standardized and Reusable Templates**

- **UFCD Planning Tools**

- **Analytical Dashboard**


## 5. Competition

| Project / Tool / Repository          | Generation & Automatic Correction | Course & Access Management | Template / Export `.docx` | Import `.docx` |
| ------------------------------------ | :-------------------------------: | :------------------------: | :-----------------------: | :------------: |
| **Moodle (core + plugins)**          |               ⚙️                |             ✔️             |            ✔️             |       ✔️       |
| **Moodle – qbank_genai (AI)**        |               ✔️                |             ⚙️             |            ❌             |       ❌       |
| **Moodle – qtype_proforma**          |               ✔️                |             ⚙️             |            ❌             |       ❌       |
| **Open edX (ORA / autograders)**     |               ⚙️                |             ✔️             |            ❌             |       ❌       |
| **Jupyter / nbgrader**               |               ✔️                |             ✖️             |            ❌             |       ❌       |
| **GitHub Classroom + Autograding**   |               ✔️                |             ⚙️             |            ❌             |       ❌       |
| **matcom/autoexam**                  |               ✔️                |             ✖️             |            ❌             |       ❌       |
| **Automatic MC graders (various)**   |               ✔️                |             ✖️             |            ❌             |       ❌       |
| **ONLYOFFICE Docs / DocumentServer** |               ❌                |             ❌             |            ✔️             |       ✔️       |
| **SuiteNumérique Docs**              |               ❌                |             ❌             |            ✔️             |       ⚙️       |
| **Tiptap + export-docx**             |               ❌                |             ❌             |            ✔️             |       ⚙️       |
| **python-docx-template**             |               ❌                |             ❌             |            ⚙️             |       ✔️       |
| **editor-to-docx**                   |               ❌                |             ❌             |            ✔️             |       ⚙️       |
| **SuperDoc**                         |               ❌                |             ❌             |            ✔️             |       ✔️       |
| **ExamIO**                           |               ✔️                |             ❌             |            ❌             |       ❌       |
| **ZipGrade**                         |               ✔️                |             ❌             |            ❌             |       ❌       |
| **Examino**                          |               ✔️                |             ⚙️             |            ❌             |       ❌       |
| **PhotoExamAI**                      |               ✔️                |             ❌             |            ❌             |       ❌       |

### Presentation Table

| Project / Tool / Repository          | Automatic Test Generation | Automatic Correction (OCR / Online) | Course & Access Management | Template / Export `.docx` | Import `.docx` |
| ------------------------------------ | :-----------------------: | :---------------------------------: | :------------------------: | :-----------------------: | :------------: |
| **Moodle (core + plugins)**          |            ⚙️             |                 ✔️                  |             ✔️             |            ✔️             |       ✔️       |
| **Moodle – qbank_genai (AI)**        |            ✔️             |                 ⚙️                  |             ⚙️             |            ❌             |       ❌       |
| **Open edX (ORA / autograders)**     |            ⚙️             |                 ✔️                  |             ✔️             |            ❌             |       ❌       |
| **ONLYOFFICE Docs / DocumentServer** |            ❌             |                 ❌                  |             ❌             |            ✔️             |       ✔️       |
| **python-docx-template**             |            ❌             |                 ❌                  |             ❌             |            ⚙️             |       ✔️       |

---

- Moodle (core + plugins): Platform that supports test generation and correction. Course management is also possible

- Moodle (qbank_genai): Moodle plugin that uses AI to generate questions and multiple choice correction done by Moodle.

- Open edX: MOOC platform used in universities with support for automation and test generation/correction

- ONLYOFFICE Docs: Online collaborative editor that allows the use of predefined templates for .docx editing

- python-docx-template: Python library to generate documents from .docx templates

## 6. Functional Requirements

### Add Courses

- The system must request mandatory information such as name and regent professor when creating a course
- The system must allow adding information such as students and non-regent professors when creating a course
- The system must confirm course creation with a success message
- The system must automatically create an empty document that will serve as the course manual
- The system must automatically create an empty document that will serve as the course question bank

### Remove Courses

- The system must request confirmation before removing a course
- The system must verify if there is associated data such as manuals, question documents and statistical data
- The system must alert about removal impacts (loss of associated data)

### Assign Regents to Courses

- The system must present a list of available professors
- The system must notify the professor of the regent assignment by email

### Remove Regents from Courses

- The system must request confirmation before removing
- The system must notify the professor of the removal by email

### Assign Professors to Courses

- The system must present a list of available professors
- The system must allow individual or batch assignment
- The system must notify professors of the assignment by email

### Remove Professors from Courses

- The system must present a list of course professors
- The system must allow individual or batch removal
- The system must request confirmation before removing
- The system must notify the professor of the removal by email

### Add Students to Courses

- The system must present a list of available students
- The system must allow individual or batch addition

### Remove Students from Courses

- The system must present a list of course students
- The system must allow individual or batch removal
- The system must request confirmation before removing

### View Course Documents (manual/question bank)

- The system must allow access to document information
- The system must allow downloading documents in PDF format

### Edit Course Documents (manual/question bank)

- The system must allow access to document information
- The system must allow editing of document information
- The system must request confirmation before making changes

### Edit Professor Permissions

- The system must present a list of available permissions (add/remove course professors, edit manual/question bank documents, add/remove course students, generate tests, enter grades,...)
- The system must highlight the permissions that the professor in question already has
- The system must allow activating/deactivating permissions individually
- The system must notify the professor of permission changes

### Generate Tests

- The system must allow defining parameters: number of questions from each included module, difficulty level of questions, assign scoring for each question and select question ordering style (predefined options)
- The system must generate unique QR codes to associate with each test
- The system must generate unique tests for each student using random selection algorithm
- The system must generate a matrix for each test that has the respective correction and is associated with the respective test's QR code
- The system must allow a preview before final generation
- The system must allow downloading a zip folder containing individual tests in PDF format

### Associate Students with Tests

- The system must allow scanning a QR code
- The system must allow associating a QR code with a student (e.g.: email, student number)

### Correct Tests

- The system must be able to analyze test answers
- The system must be able to match the matrix to the test
- The system must be able to compare the matrix with test answers and thus calculate the score
- The system must generate an Excel file with test questions, answer analysis, total test score and the student associated with each test
- The system must have a warning for questions whose answer was inconclusive in the generated Excel file
- The system must allow editing of the generated Excel file

### Export Test Grades

- The system must allow converting the Excel file with students, test answers and scores to docx
- The system must allow converting the docx file to PDF
- The system must allow exporting the PDF file

### Submit Test Grades

- The system must allow sending by email the PDF document with students, test answers and scores to all students in the course

### View Student Performance Statistics

- The system must present statistics and graphs for a course: general average, grade distribution, success rate, most difficult questions, ...

### View Courses

- The system must present a list of the professor's courses
- The system must allow navigation between course pages

### Log In

- The system must allow users to log in with their email and password
- The system must provide error information if the provided email and password combination is not valid


## 7. Personas, Use Cases and User Stories

### Planning - 1st Semester

| <b>OpenUP</b>       | <b>Dates</b>             |
| ------------------- | ------------------------ |
| <b>Inception</b>    | 22/10/2025 - 28/10/2025 |
| <b>Elaboration</b>  | 29/10/2025 - 18/11/2025 |
| <b>Construction</b> | 19/11/2025 - 16/12/2025 |