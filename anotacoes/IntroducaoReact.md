# Introdução ao React

#### ✨ O que é React?
> - Biblioteca JavaScript para desenvolvimento de aplicações front-end;
> - Aplicações são SPA (Single Page Aplication);
> - Arquitetura baseada em componentes;
> - É mantido pelo Facebook.

#### ✨ O que é Node.js?
> - É uma runtime de JavaScript;
> - Biblioteca utilizada por um compilador;
> - Construída em V8 engine (escrita em C++) da Google;
> - Possibilita criação de softwares em JS no lado do servidor.

🎯 **Runtime:** compilador que lê o arquivo JavaScript e transforma em linguagem em baixo nível.

#### ✨ O que é npm?
> - Gerenciador de pacotes do Node;
> - Possibilita utilizar bibliotecas de terceiros, instalados pelo npm;
> - Executa determinados scripts pelo npm;
> - Os módulos externos ficam salvos na pasta 'node_modules';
> - Cada novo projeto, as bibliotecas são instaladas novamente em 'node_modules'.

#### ⚙️ Instalação do Node.js e npm no Linux
> 1. sudo apt install nodejs
> 2. nodejs -v
> 3. sudo apt install npm
> 4. npm -v

#### 🛠️ Criação de projeto em React
> - npx create-react-app <nome-do-projeto>
> - cd <nome-do-projeto>
> - npm start (iniciar projeto)

🤓 **Observação:** é uma boa prática criar o nome do projeto com **" - "** nos espaços.

#### 🛠️ Criação de projeto em React com Vite
> - npm create vite@latest (escolher as opções)
> - cd <nome-do-projeto>
> - npm install
> - npm run dev (iniciar projeto)

#### 🏗️ Estrutura base
Dentro do projeto React criado, algumas pastas e arquivos são essências para seu funcionamento.

> - node_modules: dependências do projeto;
> - public: assets estáticos e HTML de inicialização;
> - src: localizado os códigos da aplicação;
> - src/index.js: arquivo de inicialização do React;
> - src/App.js: componente principal da aplicação.

# Extensões para React no VS Code

- **ES7 + React/Redux/React-Native snippets:** possibilita a criação de códigos com alguns atalhos;
- **Emmet**: extensão nativa do VS Code que ajuda a escrever HTML (não vem configurada para o React).

#### ⚙️ Configuração do Emmet no VS Code
> - File > Preferences > Settings
> - Pesquise 'Emmet'
> - Em 'Emmet:Include Languages', clique em adicionar item
> - Em 'Item' digite 'javascript' e em 'Value', 'javascriptreact'
> - Após, clique em 'Ok'
> - Por fim, reinicie o Visual Studio Code