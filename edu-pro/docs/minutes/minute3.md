---
sidebar_position: 3
---

# Meeting 3

## Informação da Reunião

**Data:** 13/10/2025  
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


1. Redefinir requesitos:     
    - Criar uma **tabela `Cursos`** com relação *many-to-many* para **UC (Unidades Curriculares)**.
    - Cada **professor** tem os seus próprios manuais.
    - O professor pode **associar os seus manuais** às cadeiras que quiser.
    - Quando um professor **deixa de lecionar** uma cadeira, **os seus manuais são removidos** dessa associação.
    - A preocupação com **escalabilidade** (duplicação de manuais, etc.) só será relevante quando o sistema tiver uma grande dimensão (ex.: 100 cadeiras, 2500 manuais).
    - Será necessário um **módulo de Account Management (AM)**.  
    - Não será utilizado o **Keycloak**.  
    - Os utilizadores terão uma **área de conta** com funcionalidades **colaborativas**, permitindo interação em tempo real (semelhante ao Figma, Canva ou VS Code Live Share).
    - O **autor dos manuais** não tem visibilidade sobre as perguntas.
    - As **categorias das perguntas** não precisam de estar diretamente associadas aos manuais.
    - Cada categoria terá uma **dificuldade associada**.
    - Discussão sobre **pontuação e mapeamento de valores** (detalhes pendentes).
    - Integração com **LLM** prevista para o **2º semestre**.
    - Possibilidade de envio de **e-mail com vídeo e áudio** ao comunicar a nota do aluno.
    - Preparar um **microsite**, **apresentações**, **arquiteturas**, **atas** e **registos fotográficos**.
    - Descrição do projeto em uma frase: **“Sistema de Gestão de Conteúdos e Avaliação de Unidades Curriculares.”**

---

## Notas Adicionais

- Será utilizado o **Supabase**, que fornece um *backend completo*.  
- Realizar um **levantamento do estado da arte** e criar uma **tabela comparativa** (referência: *goauthentik.io*, rodapé da página).  
- A Marta está revoltada. 😃

---

*Ata redigida por: Tiago Coelho