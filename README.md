# Projeto Frontend - CRUD com Sistema de Login
Este é o projeto frontend desenvolvido em Angular, que contém um CRUD com sistema de login. A seguir, estão as instruções para rodar o projeto localmente.

## Requisitos
Node.js (versão 16.10)  
Angular CLI (versão 11.2.19)  
npm (versão 7.24.0)  

## Instalação
### 1. Clonar o repositório
Clone o repositório do projeto para sua máquina local:
```
    git clone <URL_DO_REPOSITORIO>
    cd <NOME_DO_PROJETO>
```

### 2. Instalar as dependências
Para instalar as dependências do projeto, utilize o comando abaixo, sem atualizá-las:
```
    npm ci
```

### 3. Configurar ambiente do Backend
O projeto do backend está localizado em um repositório separado, é necessário clona-lo e configura-lo para que seja possível rodar a aplicação.
Link do projeto: https://github.com/julioccorreia/crud-assembly-back

### 4. Configurar o IP do Backend
O projeto frontend precisa se conectar ao backend local para funcionar corretamente. Para isso, é necessário configurar o IP do backend no arquivo de ambiente de desenvolvimento.

Abra o arquivo src/environments/environment.ts e localize a variável BASE_URL. Substitua o valor da URL pelo endereço IP local do seu backend:
```
    export const environment = {
        production: false,
        apiUrl: 'http://<SEU_IP_LOCAL>:<PORTA_DO_BACKEND>/api'
    };
```

### 5. Rodar o Projeto
Para rodar o projeto em modo de desenvolvimento, utilize o comando:
```
    ng serve
```

Isso iniciará o servidor de desenvolvimento. O projeto será acessível no navegador em:
```
    http://localhost:4200
```

## Funcionalidades
Login de usuário: Sistema de autenticação para acesso ao CRUD.
CRUD: Funcionalidades de criar, ler, atualizar e excluir registros.

## Tecnologias Utilizadas
Angular 11  
Bootstrap 5.3  
Angular Material  
