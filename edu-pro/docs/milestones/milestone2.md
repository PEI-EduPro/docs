# Milestone 2

# Elaboration


## Presentation
---

---

Elaboration
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

- Definir parâmetros: nº de perguntas por módulo, dificuldade, cotação, estilo de ordenação.

- Gerar QR Codes únicos.

- Criar testes por aluno usando seleção aleatória.

- Criar uma matriz de respostas associada ao QR Code.

- Permitir download de ZIP com PDFs individuais.

- Associar Alunos a Testes

- Fazer scan de QR Code.

- Associar QR Code a aluno (nº mecanográfico).

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

EduPro insere-se num ecossistema onde diversas plataformas oferecem funcionalidades isoladas, porém nenhuma apresenta uma solução integrada que cobre:

geração automática de testes,

correção automática com OCR,

gestão curricular,

criação e edição de documentos com templates,

planeamento UFCD,

dashboard analítico.

Comparação com o estado da arte

Ferramentas como Moodle, Open edX, ZipGrade ou python-docx-template fornecem fragmentos da solução desejada. Algumas geram testes, outras corrigem automaticamente, outras permitem templates, mas nenhuma integra todo o fluxo pedagógico do ensino profissional.

A análise concorrencial demonstra uma oportunidade clara para uma plataforma completa que unifica estes processos.

## 4. Actors (Personas)


## 5. Use Cases (High-Level)

Use cases organized by domain:

UC01 – Gerir Cadeiras

Criar cadeira

Editar cadeira

Associar professores/alunos

Remover cadeira

Consultar documentos

UC02 – Gerir Documentação

Editar manual

Editar banco de perguntas

Exportar documento

UC03 – Gerar Testes

Definir parâmetros

Criar versões personalizadas

Gerar QR Codes

Exportar ZIP

UC04 – Corrigir Testes

Processar imagens com OCR

Identificar matriz

Calcular cotação

Exportar Excel

UC05 – Notas e Comunicação

Exportar avaliações

Lançar notas

Enviar emails automáticos

UC06 – Estatísticas e Dashboards

Consultar métricas

Visualizar gráficos

Identificar padrões

UC07 – Autenticação e Autorização

Login

Verificação de permissões

Gestão de perfis

## 6. Non-Functional Requirements
Suportar > 50 users concurrents

Performance

Tempo de resposta inferior a 500ms para operações comuns.

Capacidade de processar múltiplos testes (OCR) em paralelo.

Availability

Uptime ≥ 99%.

Recuperação rápida após falhas.

Scalability

Suporte a múltiplas escolas e cadeiras.

Suporte a armazenamento de milhares de documentos e testes.

Encriptação de passwords (hash + salt).

Uso de HTTPS.

RBAC (Role-Based Access Control).

Logs de auditoria.



Atomicidade nas operações de edição e correção.

Controlo de versões de documentos.



Suporte a formatos DOCX, PDF, XLSX.

---
---
---
### Personas

- Gestor
- Regente
- Docente
- Aluno (Indireta)
---

#### Gestor

##### User Stories

Como Gestor quero <b>adicionar/remover cadeiras</b> para <u>organizar o curso e definir a oferta formativa</u>.  
Como Gestor quero <b>atribuir/remover regentes a cadeiras</b> para que <u>atualizar a regência da cadeira</u>.  
Como Gestor quero <b>atribuir/remover professores a cadeiras</b> para que <u>ajustar a equipa docente conforme necessário</u>.

##### Use Cases

- Adicionar cadeiras
- Remover cadeira
- Atribuir regentes a cadeiras
- Remover regentes de cadeiras
- Atribuir docentes a cadeiras
- Remover docentes de cadeiras
- Criar o template de cada cadeira

---

#### Regente

##### User Stories

Como Regente quero <b>adicionar/remover módulos</b> para <u>atualizar os objetivos da cadeira</u>.  
Como Regente quero <b>adicionar/remover perguntas</b> para <u>ir de encontro com os objetivos da cadeira</u>.  
Como Regente quero <b>atribuir/remover docentes à cadeira</b> para <u>manter a equipa de docentes atualizada</u>.  
Como Regente quero <b>editar permissões dos docentes da cadeira</b> para <u>poder personalizar o que cada docente pode fazer</u>.  
Como Regente quero <b>adicionar/remover alunos à cadeira</b> para <u>manter a lista de alunos atualizada</u>.  
Como Regente quero <b>gerar testes</b> para <u>garantir que cada aluno tem um teste único</u>.  
Como Regente quero <b>exportar notas de testes</b> para <u>ter uma lista organizada do aproveitamento de cada estudante</u>.  
Como Regente quero <b>consultar estatísticas de desempenho dos alunos</b> para <u>entender as suas dificuldades</u>.  
Como Regente quero <b>gerar manuais</b> para <u>garantir material de estudo aos meus alunos</u>.

###### Extras

Como Regente quero <b>lançar notas de testes</b> para que <u>os alunos sejam notificados do seu aproveitamento por e-mail</u>.

##### Use Cases

- Adicionar módulos
- Remover módulos
- Adicionar perguntas
- Remover perguntas
- Atribuir docentes à cadeira
- Remover docentes da cadeira
- Editar permissões dos docentes da cadeira
- Adicionar alunos à cadeira
- Remover alunos da cadeira
- Gerar testes
- Exportar notas de testes
- Consultar estatísticas de desempenho dos alunos
- Gerar manuais

###### Extras

- Lançar notas de testes

---