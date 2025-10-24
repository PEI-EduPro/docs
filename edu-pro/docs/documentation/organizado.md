---
sidebar_position: 2
---

# Personas, Use Cases and Use Stories

## Planeamento - 1ºSemetre

| <b>OpenUP</b>       | <b>Datas</b>            |
| ------------------- | ----------------------- |
| <b>Inception</b>    | 22/10/2025 - 28/10/2025 |
| <b>Elaboration</b>  | 29/10/2025 - 18/11/2025 |
| <b>Construction</b> | 19/11/2025 - 16/12/2025 |

---

# Inception

## Visão do Projeto

O EduPro é um sistema de gestão e avaliação de unidades curriculares. Com objetivo de ajudar a organização das cadeiras, geração e correção automática de testes e a criação de manuais de apoio.

---

## Personas

- Gestor
- Regente
- Docente
- Aluno (Indireta)

---

### Gestor

#### User Stories

Como Gestor quero <b>adicionar/remover cadeiras</b> para <u>organizar o curso e definir a oferta formativa</u>.  
Como Gestor quero <b>atribuir/remover regentes a cadeiras</b> para que <u>atualizar a regência da cadeira</u>.  
Como Gestor quero <b>atribuir/remover professores a cadeiras</b> para que <u>ajustar a equipa docente conforme necessário</u>.

#### Use Cases

- Adicionar cadeiras
- Remover cadeira
- Atribuir regentes a cadeiras
- Remover regentes de cadeiras
- Atribuir docentes a cadeiras
- Remover docentes de cadeiras
- Criar o template de cada cadeira

---

### Regente

#### User Stories

Como Regente quero <b>adicionar/remover módulos</b> para <u>atualizar os objetivos da cadeira</u>.  
Como Regente quero <b>adicionar/remover perguntas</b> para <u>ir de encontro com os objetivos da cadeira</u>.  
Como Regente quero <b>atribuir/remover docentes à cadeira</b> para <u>manter a equipa de docentes atualizada</u>.  
Como Regente quero <b>editar permissões dos docentes da cadeira</b> para <u>poder personalizar o que cada docente pode fazer</u>.  
Como Regente quero <b>adicionar/remover alunos à cadeira</b> para <u>manter a lista de alunos atualizada</u>.  
Como Regente quero <b>gerar testes</b> para <u>garantir que cada aluno tem um teste único</u>.  
Como Regente quero <b>exportar notas de testes</b> para <u>ter uma lista organizada do aproveitamento de cada estudante</u>.  
Como Regente quero <b>consultar estatísticas de desempenho dos alunos</b> para <u>entender as suas dificuldades</u>.  
Como Regente quero <b>gerar manuais</b> para <u>garantir material de estudo aos meus alunos</u>.

##### Extras

Como Regente quero <b>lançar notas de testes</b> para que <u>os alunos sejam notificados do seu aproveitamento por e-mail</u>.

#### Use Cases

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

##### Extras

- Lançar notas de testes

---

### Docente

#### User Stories

Como Docente quero <b>consultar cadeiras</b> para <u>ver se houve alterações no material da cadeira</u>.  
Como Docente quero <b>consultar o banco de perguntas da cadeira</b> para <u>ver a que tipo de questões os alunos são sujeitos</u>.  
Como Docente quero <b>associar alunos a testes</b> para <u>agilizar o processo de correção</u>.

#### Use Cases

- Consultar cadeiras
- Consultar banco de perguntas da cadeira
- Associar alunos a testes

---

### Aluno (Indireta)

#### Descrição

Utiliza os manuais e os resultados gerados pela aplicação.

---
