# Milestone 1

# Inception

## Presentation

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
  EduPro
</a>


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


## Competition

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

### Tabela Apresentação

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

## Functional Requirements

### Adicionar Cadeiras

- o sistema deve solicitar informacoes obrigatorias como nome e professor regente no momento de criacao de uma cadeira
- o sistema deve permitir adicionar informacoes como alunos e professores nao regentes no momento de criacao de uma cadeira
- o sistema deve confirmar a criacao da cadeira com mensagem de sucesso
- o sistema deve criar automaticamente um documento vazio que ira servir como manual da cadeira
- o sistema deve criar automaticamente um documento vazio que ira servir como banco de perguntas da cadeira

### Remover Cadeiras

- o sistema deve solicitar confirmacao antes de remover uma cadeira
- o sistema deve verificar se existem dados associados como manuais, documento de perguntas e dados de estatistica
- o sistema deve alertar sobre impactos da remocao (perda de dados associados)

### Atribuir Regentes A Cadeiras

- o sistema deve apresentar lista de professores disponiveis
- o sistema deve notificar o professor da atribuicao de regencia por email

### Remover Regentes A Cadeiras

- o sistema deve solicitar confirmacao antes de remover
- o sistema deve notificar o professor da remocao por email

### Atribuir Professores A Cadeiras

- o sistema deve apresentar uma lista de professores disponiveis
- o sistema deve permitir a atribuicao individual ou em lote
- o sistema deve notificar professores da atribuicao por email

### Remover Professores De Cadeiras

- o sistema deve apresentar uma lista de professores da cadeira
- o sistema deve permitir a remocao individual ou em lote
- o sistema deve solicitar a confirmacao antes de remover
- o sistema deve notificar o professor da remocao por email

### Adicionar Alunos A Cadeiras

- o sistema deve apresentar uma lista de alunos disponiveis
- o sistema deve permitir a adicao individual ou em lote

### Remover Alunos De Cadeiras

- o sistema deve apresentar uma lista de alunos da cadeira
- o sistema deve permitir a remocao individual ou em lote
- o sistema deve solicitar a confirmacao antes de remover

### Consultar Documentos Da Cadeira (manual/banco de perguntas)

- o sistema deve permitir o acesso a informacao do documento
- o sistema deve permitir download dos documentos em formato pdf

### Editar Documentos Da Cadeira (manual/banco de perguntas)

- o sistema deve permitir o acesso a informacao do documento
- o sistema deve permitir a editacao da informacao do documento
- o sistema deve solicitar confirmacao antes de efetuar as alteracoes

### Editar Permissoes Dos Professores

- o sistema deve apresentar lista de permissoes disponiveis (adicionar/remover professores da cadeira, editar documento manual/banco de perguntas, adicionar/remover alunos da cadeira, gerar testes, introduzir notas,...)
- o sistema deve realcar as permicoes que o professor em questao ja tem
- o sistema deve permitir ativar permicoes/desativar permissoes individualmente
- o sistema deve notificar o professor da alteracao de permissoes

### Gerar Testes

- o sistema deve permitir definir parametros: numero de perguntas de cada modulos incluido, nivel de dificuldade das perguntas, atribuir a cotacao de cada pergunta e selecao de estilo de ordenacao das perguntas (opcoes pre definidas)
- o sistema deve gerar codigos QR unicos para associar a cada teste
- o sistema deve gerar testes unicos para cada aluno usando algoritmo de selecao aleatoria
- o sistema deve gerar uma matriz para cada teste que tem a respetiva correcao e esta associada ao codigo QR do respetivo teste
- O sistema deve permitir uma pre-visualizacao antes da geracao final
- o sistema deve permitir fazer downloads de uma pasta zip que contem os testes individuais em formato pdf

### Associar Alunos A Testes

- o sistema deve permitir fazer scan de um codigo qr
- o sistema deve permitir associar um codigo qr a um aluno (ex.: email, numero mecanografico)

### Corrigir Testes

- o sistema deve conseguir analisar as respostas do teste
- o sistema deve conseguir fazer corresponder a matriz ao teste
- o sistema deve conseguir comparar a matriz com as respostas do teste e assim calcular a cotacao
- o sistema deve gerar um ficheiro excel com as perguntas do teste, analise das respostas, a cotacao total do teste e o aluno associado a cada teste
- o sistema deve ter um aviso para as perguntas cuja resposta foi inconclusiva no ficheiro excel gerado
- o sistema deve permitir a edicao do ficheiro excel gerado

### Exportar Notas De Testes

- o sistema deve permitir passar o ficheiro excel com os alunos, respostas dos testes e cotacoes para docx
- o sistema deve permitir passar o ficheiro docx para pdf
- o sistema deve permitir exportar o ficheiro pdf

### Lancar Notas De Testes

- o sistema deve permitir enviar por email o documento pdf com os alunos, respostas dos testes e cotacoes para todos os alunos que estao na cadeira

### Consultar Estatisticas De Desempenho Dos Alunos

- o sistema deve apresentar estatisticas e graficos de uma cadeira: media geral, distribuicao de notas, taxa de sucesso, perguntas com maior dificuldade, ...

### Consultar Cadeiras

- o sistema deve apresentar uma lista de cadeiras do professor
- o sistema deve permitir a navegacao entre paginas de cadeiras

### Log In

- o sistema deve permitir utilizadores a fazer log in com do seu email e palavra passe
- o sistema deve fornecer uma informacao de erro caso a combinacao de email e palavra passe fornecidas nao sejam validas


## Personas, Use Cases and Use Stories

### Planeamento - 1ºSemetre

| <b>OpenUP</b>       | <b>Datas</b>            |
| ------------------- | ----------------------- |
| <b>Inception</b>    | 22/10/2025 - 28/10/2025 |
| <b>Elaboration</b>  | 29/10/2025 - 18/11/2025 |
| <b>Construction</b> | 19/11/2025 - 16/12/2025 |