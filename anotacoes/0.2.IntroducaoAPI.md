# Introdução a APIs

#### ✨ O que uma API?
> - Interface de Programação de Aplicações;
> - Uma forma simples de comunicação entre aplicações;
> - Não necessita de telas, respostas geralmente em JSON;
> - Baseadas em requisição e resposta.

#### ✨ Diferença entre REST e RESTful
> - REST (Representation State Transfer);
> - Um estilo de arquitetura, que define como as APIs devem ser criadas;
> - Seguindo todos os padrões, a API é considerada RESTful;
> - Os padrões podem ser encontradsos em "[What is a REST API](https://www.ibm.com/think/topics/rest-apis)".

#### ✨ O que é uma SPA?
> - Single Page Application;
> - É quando a aplicação possui um front-end separado do back-end.

#### ✨ Verbos HTTP
> - Os verbos HTTP fazem parte do REST;
> - Métodos: `GET`, `POST`, `PUT`, `DELETE`, `PATCH`, entre outros;
> - Cada método representa uma ação na API;
> - É importante que as funcionalidades utilizem os métodos corretos;
> - É enviado através da requisição.

#### ✨ Criando API em Express
> - Crie a pasta onde será armazenado o projeto;
> - No terminal, execute os seguintes comandos:
>   - `cd <nome-do-projeto>`
>   - `npm init -y`
>   - `npm install express nodemon`
> - No arquivo `package.json`, adicione o seguinte conteúdo dentro do json **scripts**: 
>   - `"start": "nodemon ./index.js localhost 3000"`
> - Logo após, crie o arquivo `index.js`;
> - Por fim, execute o comando `npm start`.

🤓 **Observação:** o projeto express_api possui as configurações base do Express para criação de API.

