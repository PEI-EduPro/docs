# Milestone 2

# Elaboration


## Presentation
---

---

## 1. Requirements Gathering

O Requirement gathering foi feito com muito brainstorming, diversas reuniões com o cliente para refinar os requesitos existentes e acrescentar mais alguns.

## 2. Functional Requirements

### Gerir Cadeiras (Unidades Curriculares)

- Adicionar Cadeiras

- Remover Cadeiras

- Solicitar informações obrigatórias: nome e professor regente.

- Permitir adicionar alunos e professores não regentes.

- Confirmar criação da cadeira com mensagem de sucesso.

- Atribuir / Remover Regentes

- Apresentar lista de professores disponíveis.

- Atribuir / Remover Professores

- Adicionar / Remover Alunos

- Listar alunos disponíveis ou da cadeira.

### Gerir Documentação

- Consultar Documentos

- Aceder a informação dos documentos (manual / banco de perguntas).

- Permitir download em PDF

- Editar Documentos

- Permitir edição do conteúdo

- Permissões de Professores

- Listar permissões disponíveis: gerir professores, editar documentos, gerar testes

- Permitir ativar/desativar permissões individualmente.


### Gerar Testes

- Definir parâmetros: nº de perguntas por categoria, nº total de perguntas

- Gerar QR Codes únicos.

- Criar testes por aluno.

- Criar uma matriz de respostas associada ao teste.

- Permitir download de ZIP com PDFs individuais.

- Associar Alunos a Testes (Fazer scan de QR Code e associar o nº mecanográfico)

### Corrigir Testes

- Analisar respostas com OCR.

- Associar matriz ao teste digitalizado.

- Calcular cotação.

- Exportar Notas

- Lançar Notas

- Enviar automaticamente emails com as avaliações para todos os alunos.

### Consultar Estatísticas

- Apresentar estatísticas e gráficos: média geral, distribuição de notas, taxa de sucesso, perguntas mais difíceis, etc.

## 3. Context and State of the Art (SOA)

O EduPro aproxima-se de vários sistemas mas nenhum deles contém as funcionalidades todas que nos são necessárias:

### Geração automática de testes

| Plataforma / Ferramenta | Geração Automática (IA ou Banco de Perguntas) | Customização Avançada | Exportação (.docx / PDF) |
| ----------------------- | --------------------------------------------- | --------------------- | ------------------------ |
| Moodle (core + plugins) | ⚙️                                            | ⚙️                    | ✔️                       |
| Moodle + qbank_genai    | ✔️                                            | ⚙️                    | ❌                        |
| Open edX (ORA)          | ⚙️                                            | ❌                     | ❌                        |
| ZipGrade                | ❌                                             | ❌                     | ❌                        |
| python-docx-template    | ❌                                             | ✔️                    | ✔️                       |
| ONLYOFFICE Docs         | ❌                                             | ✔️                    | ✔️                       |
| Examino                 | ✔️                                            | ❌                     | ❌                        |
| **EduPro**        | **✔️**                                        | **✔️**                | **✔️**                   |


### Correção automática com OCR

| Plataforma        | OCR Físico (ex.: testes impressos) | Correção Online Automática | Exportação Resultados     |
| ----------------- | ---------------------------------- | -------------------------- | ------------------------- |
| Moodle            | ❌                                  | ✔️                         | ✔️                        |
| ZipGrade          | ✔️                                 | ❌                          | ⚙️                        |
| Open edX          | ❌                                  | ✔️                         | ⚙️                        |
| ExamIO            | ✔️                                 | ❌                          | ⚙️                        |
| PhotoExamAI       | ✔️                                 | ❌                          | ❌                         |
| **EduPro** | **✔️**                             | **✔️**                     | **✔️ (excel, docx, pdf)** |


### Gestão curricular

| Plataforma        | Gestão de Unidades Curriculares | Gestão de Acessos (Professores/Alunos) | Histórico / Arquivo |
| ----------------- | ------------------------------- | -------------------------------------- | ------------------- |
| Moodle            | ✔️                              | ✔️                                     | ✔️                  |
| Open edX          | ✔️                              | ✔️                                     | ⚙️                  |
| ONLYOFFICE        | ❌                               | ❌                                      | ✔️                  |
| ZipGrade          |  ❌                              | ❌                                     | ❌                  |
| **EduPro** | **✔️**                          | **✔️**                                 | **✔️**              |


### Templates e Documentos

| Plataforma           | Templates Editáveis | Export `.docx`/PDF | Colaboração |
| -------------------- | ------------------- | ------------------ | ----------- |
| ONLYOFFICE Docs      |    ❌               | ✔️                 | ✔️          |
| python-docx-template | ⚙️                  | ✔️                 | ❌          |
| SuperDoc             | ⚙️                  | ✔️                 | ⚙️          |
| **EduPro**    | **✔️**                     | **✔️**             | **✔️**      |


Comparação com o estado da arte

Ferramentas como Moodle, Open edX, ZipGrade ou python-docx-template fornecem fragmentos da solução desejada. Algumas geram testes, outras corrigem automaticamente, outras permitem templates, mas nenhuma integra todo o fluxo pedagógico do ensino profissional.

A análise concorrencial demonstra uma oportunidade clara para uma plataforma completa que unifica estes processos.

## 4. Actors (Personas)

### Gestor
O utilizador responsável por criar as cadeiras curriculares e associar os regentes às mesmas.
### Regente
O utilizador responsável por gerir as suas cadeiras curriculares e os professores ligados às mesmas. 
### Docente
O utilizador responsável por ajudar o regente dentro das permissões que lhe foram dadas.
### Aluno (Indireta)
Utilizador indireto, recebe os testes gerados e devolve-os para correção.

## 5. Use Cases (High-Level)

### UC01 – Gerir Cadeiras

![alt text](ucDiagram/uc1.png)

#### UC02 – Gerir Documentação (WYP)

Editar manual

Editar banco de perguntas

Exportar documento

#### UC03 – Gerar Testes (WYP)

Definir parâmetros

Exportar ZIP

#### UC04 – Corrigir Testes (WYP)

Processar imagens com OCR

Identificar teste

Calcular cotação

Exportar notas

#### UC05 – Notas e Comunicação (WYP)

Lançar notas

Enviar emails automáticos

#### UC06 – Estatísticas e Dashboards (WYP)

Consultar métricas

#### UC07 – Autenticação e Autorização (WYP)

Login

Verificação de permissões

## 6. Non-Functional Requirements

- Suportar > 50 utilizadores concurrentes.
- Suporte a armazenamento de milhares de documentos e testes.
- Encriptação de passwords.
- RBAC (Role-Based Access Control).
- Atomicidade nas operações de edição e correção.
- Tempo de carregamento das páginas < 3 segundos em condições normais.
- Sistema compatível com navegadores modernos.
- Cumpror normas WCAG 2 
---