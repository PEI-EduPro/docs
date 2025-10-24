# Functional Requirements

## Adicionar Cadeiras

- o sistema deve solicitar informacoes obrigatorias como nome e professor regente no momento de criacao de uma cadeira
- o sistema deve permitir adicionar informacoes como alunos e professores nao regentes no momento de criacao de uma cadeira
- o sistema deve confirmar a criacao da cadeira com mensagem de sucesso
- o sistema deve criar automaticamente um documento vazio que ira servir como manual da cadeira
- o sistema deve criar automaticamente um documento vazio que ira servir como banco de perguntas da cadeira

## Remover Cadeiras

- o sistema deve solicitar confirmacao antes de remover uma cadeira
- o sistema deve verificar se existem dados associados como manuais, documento de perguntas e dados de estatistica
- o sistema deve alertar sobre impactos da remocao (perda de dados associados)

## Atribuir Regentes A Cadeiras

- o sistema deve apresentar lista de professores disponiveis
- o sistema deve notificar o professor da atribuicao de regencia por email

## Remover Regentes A Cadeiras

- o sistema deve solicitar confirmacao antes de remover
- o sistema deve notificar o professor da remocao por email

## Atribuir Professores A Cadeiras

- o sistema deve apresentar uma lista de professores disponiveis
- o sistema deve permitir a atribuicao individual ou em lote
- o sistema deve notificar professores da atribuicao por email

## Remover Professores De Cadeiras

- o sistema deve apresentar uma lista de professores da cadeira
- o sistema deve permitir a remocao individual ou em lote
- o sistema deve solicitar a confirmacao antes de remover
- o sistema deve notificar o professor da remocao por email

## Adicionar Alunos A Cadeiras

- o sistema deve apresentar uma lista de alunos disponiveis
- o sistema deve permitir a adicao individual ou em lote

## Remover Alunos De Cadeiras

- o sistema deve apresentar uma lista de alunos da cadeira
- o sistema deve permitir a remocao individual ou em lote
- o sistema deve solicitar a confirmacao antes de remover

## Consultar Documentos Da Cadeira (manual/banco de perguntas)

- o sistema deve permitir o acesso a informacao do documento
- o sistema deve permitir download dos documentos em formato pdf

## Editar Documentos Da Cadeira (manual/banco de perguntas)

- o sistema deve permitir o acesso a informacao do documento
- o sistema deve permitir a editacao da informacao do documento
- o sistema deve solicitar confirmacao antes de efetuar as alteracoes

## Editar Permissoes Dos Professores

- o sistema deve apresentar lista de permissoes disponiveis (adicionar/remover professores da cadeira, editar documento manual/banco de perguntas, adicionar/remover alunos da cadeira, gerar testes, introduzir notas,...)
- o sistema deve realcar as permicoes que o professor em questao ja tem
- o sistema deve permitir ativar permicoes/desativar permissoes individualmente
- o sistema deve notificar o professor da alteracao de permissoes

## Gerar Testes

- o sistema deve permitir definir parametros: numero de perguntas de cada modulos incluido, nivel de dificuldade das perguntas, atribuir a cotacao de cada pergunta e selecao de estilo de ordenacao das perguntas (opcoes pre definidas)
- o sistema deve gerar codigos QR unicos para associar a cada teste
- o sistema deve gerar testes unicos para cada aluno usando algoritmo de selecao aleatoria
- o sistema deve gerar uma matriz para cada teste que tem a respetiva correcao e esta associada ao codigo QR do respetivo teste
- O sistema deve permitir uma pre-visualizacao antes da geracao final
- o sistema deve permitir fazer downloads de uma pasta zip que contem os testes individuais em formato pdf

## Associar Alunos A Testes

- o sistema deve permitir fazer scan de um codigo qr
- o sistema deve permitir associar um codigo qr a um aluno (ex.: email, numero mecanografico)

## Corrigir Testes

- o sistema deve conseguir analisar as respostas do teste
- o sistema deve conseguir fazer corresponder a matriz ao teste
- o sistema deve conseguir comparar a matriz com as respostas do teste e assim calcular a cotacao
- o sistema deve gerar um ficheiro excel com as perguntas do teste, analise das respostas, a cotacao total do teste e o aluno associado a cada teste
- o sistema deve ter um aviso para as perguntas cuja resposta foi inconclusiva no ficheiro excel gerado
- o sistema deve permitir a edicao do ficheiro excel gerado

## Exportar Notas De Testes

- o sistema deve permitir passar o ficheiro excel com os alunos, respostas dos testes e cotacoes para docx
- o sistema deve permitir passar o ficheiro docx para pdf
- o sistema deve permitir exportar o ficheiro pdf

## Lancar Notas De Testes

- o sistema deve permitir enviar por email o documento pdf com os alunos, respostas dos testes e cotacoes para todos os alunos que estao na cadeira

## Consultar Estatisticas De Desempenho Dos Alunos

- o sistema deve apresentar estatisticas e graficos de uma cadeira: media geral, distribuicao de notas, taxa de sucesso, perguntas com maior dificuldade, ...

## Consultar Cadeiras

- o sistema deve apresentar uma lista de cadeiras do professor
- o sistema deve permitir a navegacao entre paginas de cadeiras

## Log In

- o sistema deve permitir utilizadores a fazer log in com do seu email e palavra passe
- o sistema deve fornecer uma informacao de erro caso a combinacao de email e palavra passe fornecidas nao sejam validas
