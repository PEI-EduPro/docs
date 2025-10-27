# Milestone 1

# EduPro – Plataforma de Gestão de Exames e Conteúdos Formativos


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


# Competition

| Projeto / Ferramenta / Repositório   | Geração & Correção Automática | Gestão de Cadeiras & Acessos | Template / Export `.docx` | Import `.docx` |
| ------------------------------------ | :---------------------------: | :--------------------------: | :-----------------------: | :------------: |
| **Moodle (core + plugins)**          |              ⚙️               |              ✔️              |            ✔️             |       ✔️       |
| **Moodle – qbank_genai (AI)**        |              ✔️               |              ⚙️              |            ❌             |       ❌       |
| **Moodle – qtype_proforma**          |              ✔️               |              ⚙️              |            ❌             |       ❌       |
| **Open edX (ORA / autograders)**     |              ⚙️               |              ✔️              |            ❌             |       ❌       |
| **Jupyter / nbgrader**               |              ✔️               |              ✖️              |            ❌             |       ❌       |
| **GitHub Classroom + Autograding**   |              ✔️               |              ⚙️              |            ❌             |       ❌       |
| **matcom/autoexam**                  |              ✔️               |              ✖️              |            ❌             |       ❌       |
| **Automatic MC graders (vários)**    |              ✔️               |              ✖️              |            ❌             |       ❌       |
| **ONLYOFFICE Docs / DocumentServer** |              ❌               |              ❌              |            ✔️             |       ✔️       |
| **SuiteNumérique Docs**              |              ❌               |              ❌              |            ✔️             |       ⚙️       |
| **Tiptap + export-docx**             |              ❌               |              ❌              |            ✔️             |       ⚙️       |
| **python-docx-template**             |              ❌               |              ❌              |            ⚙️             |       ✔️       |
| **editor-to-docx**                   |              ❌               |              ❌              |            ✔️             |       ⚙️       |
| **SuperDoc**                         |              ❌               |              ❌              |            ✔️             |       ✔️       |
| **ExamIO**                           |              ✔️               |              ❌              |            ❌             |       ❌       |
| **ZipGrade**                         |              ✔️               |              ❌              |            ❌             |       ❌       |
| **Examino**                          |              ✔️               |              ⚙️              |            ❌             |       ❌       |
| **PhotoExamAI**                      |              ✔️               |              ❌              |            ❌             |       ❌       |

# Tabela Apresentação

| Projeto / Ferramenta / Repositório   | Geração Automática de Testes | Correção Automática (OCR / Online) | Gestão de Cadeiras & Acessos | Template / Export `.docx` | Import `.docx` |
| ------------------------------------ | :--------------------------: | :--------------------------------: | :--------------------------: | :-----------------------: | :------------: |
| **Moodle (core + plugins)**          |              ⚙️              |                 ✔️                 |              ✔️              |            ✔️             |       ✔️       |
| **Moodle – qbank_genai (AI)**        |              ✔️              |                 ⚙️                 |              ⚙️              |            ❌             |       ❌       |
| **Open edX (ORA / autograders)**     |              ⚙️              |                 ✔️                 |              ✔️              |            ❌             |       ❌       |
| **ONLYOFFICE Docs / DocumentServer** |              ❌              |                 ❌                 |              ❌              |            ✔️             |       ✔️       |
| **python-docx-template**             |              ❌              |                 ❌                 |              ❌              |            ⚙️             |       ✔️       |

---

- Moodle (core + plugins): Plataforma que suporta geração e correção de testes. Sendo também possível a gestão de UC's

- Moodle (qbank_genai): Plugin do Moodle que usa IA para gerar perguntas e correção de escolhas múltiplas feita pelo Moodle.

- Open edX: Plataforma MOOC usada em universidades com suporte a automatização e geração/correção de testes

- ONLYOFFICE Docs: Editor colaborativo online que permite a utilização de templates predefinidos para edição de .docx

- python-docx-template: Biblioteca Python para gerar documentos a partir de templates .docx
