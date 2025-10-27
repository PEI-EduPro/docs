---
sidebar_position: 2
---

# Meeting 2

## Informação da Reunião

**Data:** 06/10/2025  
**Hora:** 12:35

---

## Presentes

- João Almeida
- Vicente Barros
- Tiago Coelho
- Gonçalo Fonseca
- Marta Condeço
- Pedro Martins
- Vasco Pereira

**Ausentes:**

---

## Ordem de Trabalhos

1. Requesitos definidos:
    - O aluno realiza o exame em papel.  
    - O professor digitaliza e corrige o exame na plataforma.  
    - A plataforma envia um e-mail ao aluno com a nota.  
    - Um ficheiro PDF é gerado por cada teste.  
    - Deve existir suporte para **importação e exportação em XML**.  
    - O professor considera excelente a funcionalidade do Flutter que faz associação automática, mas sugeriu o uso de uma **PWA (Progressive Web App)**.  
    - O sistema deve seguir uma **arquitetura em camadas**.  
    - Será possível **gerar LaTeX e converter em PDF**.  
    - Usar **Python com FastAPI** em vez de Django, pois ao final do curso há domínio sólido em **Java** e **Python**.  
    - Será utilizado um **módulo de OCR local**, em vez de um serviço Cloud.  
    - O sistema deve considerar **múltiplos utilizadores** (estimativa: 10 professores, podendo chegar a 50).  
    - Deve ser possível **mapear funções a permissões específicas** (ex.: “Adicionar pergunta” com permissões configuráveis por professor).  
    - O professor deixou claro que o sistema **não deve ser uma plataforma de e-learning**.  
    - Pretende-se **integrar uma interface com um LLM**, que gere conteúdos com base em slides ou tópicos — por exemplo, gerar testes ou manuais para alunos.
    - O **manual** será um ficheiro DOCX com campos preenchíveis e **formatação rígida** (título, subtítulo, corpo de texto, etc.).  
    - Possível necessidade de **acesso pela secretaria**.  
    - Poderá existir um ficheiro de configuração (ex.: definir que as imagens são sempre centradas).
    - Podemos definir num ficheiro config tipo "as imagens são sempre centradas".  

---

## Notas Adicionais

- Fazer User Stories (com use cases), requisitos funcionais e não-funcionais, depois temos arquitetura.

---

*Ata redigida por: Tiago Coelho