# Milestone 3

## Construction

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
    src="https://www.canva.com/design/DAG7kVZJNyc/SDxyC0OdV0u5lMhklfaCDg/view?embed"
    allowFullScreen
  ></iframe>
</div>

<a
  href="https://www.canva.com/design/DAG7kVZJNyc/SDxyC0OdV0u5lMhklfaCDg/view?utm_content=DAG7kVZJNyc&utm_campaign=designshare&utm_medium=embeds&utm_source=link"
  target="_blank"
  rel="noopener"
>
  EduPro - MS3
</a>

---

##

## 1. Change of Focus

Following discussions with our client after the previous milestone, we pivoted our development focus to deliver a localhost-based product with automated exam generation capabilities. This strategic shift required suspending KeyCloak authentication implementation to prioritize core functionality delivery within the project timeline.

### 1.1 Strategic Pivot Rationale

The decision to change focus was driven by:
- **Client Priority**: Immediate need for exam generation functionality over authentication
- **Timeline Constraints**: Limited development time requiring focused effort on core features
- **Deployment Simplicity**: Localhost deployment reduces infrastructure complexity
- **MVP Approach**: Delivering essential functionality first, authentication as future enhancement

### 1.2 Core Objectives Restructuring

Our development efforts were redirected toward the following primary objectives:

#### 1.2.1 Question Bank Management
- **Question Creation Interface**: Web-based form for creating multiple-choice questions
- **Topic Organization**: Hierarchical structure for organizing questions by subject and topic
- **Question Import System**: Moodle XML import functionality for migrating existing question banks
- **Question Validation**: Ensure question format compliance and completeness

#### 1.2.2 Exam Configuration System
- **Configuration Templates**: Pre-defined exam structures based on client requirements
- **Topic Selection**: Interface for selecting which topics to include in exams
- **Question Distribution**: Configure number of questions per topic
- **Exam Variants**: Support for generating multiple exam versions

#### 1.2.3 Automated Exam Generation
- **Question Randomization**: Random selection of questions from configured topics
- **Option Shuffling**: Randomize answer options to prevent pattern recognition
- **Multiple Variants**: Generate different exam versions with same difficulty level
- **LaTeX Integration**: Use client-provided templates for professional formatting

#### 1.2.4 Solution Generation & Export
- **Answer Key Creation**: Automatic generation of solution files for each exam variant
- **Export Functionality**: Package exams and solutions into downloadable ZIP files
- **Template Compliance**: Ensure output matches client's institutional formatting requirements
- **Quality Assurance**: Validation checks for exam completeness and accuracy

#### 1.2.5 User Interface Development
- **Subject Management**: Create and manage curricular units (UCs)
- **Question Bank Interface**: Browse, search, and manage questions
- **Exam Creation Workflow**: Step-by-step exam generation process
- **File Management**: Upload, download, and organize exam-related files

### 1.3 Technical Implementation Focus

The restructured objectives required implementing:
- **Backend API**: FastAPI-based REST API for data management
- **Database Layer**: PostgreSQL with SQLModel for type-safe data operations
- **Frontend Interface**: React-based web application for user interactions
- **PDF Generation**: LaTeX-to-PDF conversion for professional exam formatting
- **File Processing**: Moodle XML parsing and ZIP file creation

## Construction

### 2.1 Architecture Implementation

**Backend Development (FastAPI)**
- Implemented RESTful API with FastAPI framework
- Database models using SQLModel for type safety
- PostgreSQL integration with connection pooling
- Service layer architecture for business logic separation

**Frontend Development (React + TypeScript)**
- React application with TypeScript for type safety
- TanStack Router for client-side routing
- Tailwind CSS for responsive UI design
- Component-based architecture with reusable UI elements

**Database Schema**
- User management system
- Subject and topic hierarchical structure
- Question bank with multiple-choice options
- Exam configuration and generation tracking
- Workbook management for organizing content

### 2.2 Core Features Developed

**Question Management System**
- CRUD operations for questions and answer options
- Topic-based organization and filtering
- Moodle XML import functionality for question migration
- Question validation and format checking

**Exam Generation Engine**
- Configurable exam templates
- Random question selection algorithms
- Answer option shuffling for exam variants
- LaTeX template integration for PDF generation

**User Interface Components**
- Subject (UC) management dashboard
- Question bank browser with search and filters
- Exam creation wizard with step-by-step workflow
- File upload/download functionality

### 2.3 Technical Infrastructure

**Containerization**
- Docker Compose setup for local development
- Separate containers for API, web, and database
- Nginx reverse proxy configuration
- Environment-based configuration management

**Development Workflow**
- Git-based version control with feature branches
- Automated testing scripts for API endpoints
- Development and production Docker configurations
- GitHub integration with pull request templates

### 2.4 Key Deliverables Completed

- ✅ Localhost deployment with Docker Compose
- ✅ Question bank management interface
- ✅ Moodle XML import functionality
- ✅ Exam configuration system
- ✅ PDF generation with LaTeX templates
- ✅ Multi-variant exam generation
- ✅ Solution file generation
- ✅ ZIP export functionality