# Sprints

Os sprints terão tarefas divididas entre 2 equipas

### Srint 1 (29/10 - 11/11)

**Equipa A**:

 - Backend:
    - Implementar os modelos de dados do User, Subject, Topic, Question
    - CRUD APIs para Subjects (ponto de vista de gestor), Topic e Question (ponto de vista de um professor)
    - Implementar um Middleware de Role Based Access Control (roles: Manager, Coordinator, Teacher)
 - Frontend:
    - Manager dashboard com um forms para criar Subjects
    - Vista de Coordenados para adicionar topicos e questões

**Equipa B**

 - Backend:
    - Modelos para o Test, Student e StudentTest (link entre um teste gerado e um aluno)
    - Implementar gestão de alunos (operações CRUD para o Coordinator)
    - API para o Coordinator poder atribuir mais teachers a um dado Subject.
 - Frontend:
    - UI basica de gestão de alunos numa Subject
    - UI basica ainda sem funcionalidade para manuais e testes


### Sprint 2 (12/11 - 25/11)

**Equipa A**
 - Backend:
    - Implementação do Coordinator alterar as permições de um Teacher numa dada Subject
    - Adicionar upload de um Template para um Workbook através de um ficheiro word já existente
    - Criar Workbooks e editá-los. Os Workbooks tem de ter os elementos que vêm do template
 - Frontend:
    - UI para o Coordinator escolher e alterar as permissões dos teachers
    - UI para dar upload de um template (ou usar o default)
    - UI para criar e editar os manuais.

**Equipa B**
 - Backend:
    - Implementar geração de testes
    - Implementar associação de testes a alunos
    - Criar exportar notas (?, uma vez que a correção automática fica para depois, isto também poderá ficar)
    - Stats agregadas da turma (tal como o ponto a cima isto pode ter de ficar para depois)
 - Frontend:
    - Página para gerar testes (com tudo o que tinhamos falado)
    - Dashboard com as notas e estatisticas (se implementarmos essa parte)


### Sprint 3 (26/11 - 09/12)

**Ambas**
 - Backend:
    - Testar a geração dos testes
    - Adicionar validações para todas as operações (já devia estar, uma vez que se deviam adicionar no momento do desenvolvimento)
 - Frontend:
    - Certificar que a UI é fluida
    - Fazer as coisas IHC (avisar o user de erros e sucessos e etc)

Em geral polir o trabalho e certificar que fica bem feito