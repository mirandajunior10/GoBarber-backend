# GoBarber-backend
Backend do projeto GoBarber 
<p align="center" >
<img align="center" src="/assets/banner.svg" />
<a href="https://www.linkedin.com/in/jorlan-miranda-624b9610b/"><img src="https://img.shields.io/badge/LinkedIn-Jorlan%20Miranda-blue"></a>
</p>
<h1 align="center">GoBarber</h1>
<p align="center">Tornando o mundo melhor colaborando com a coleta de resíduos</p>

<h5 align="center"> 🚀 Projeto em andamento 🚀 </h5>

Tabela de conteúdos
=================
<!--ts-->
   * [Funcionalidades](#funcionalidades)
   * [Tecnologias utilizadas](#tecnologias-utilizadas)
   * Instalação
      * [Pré requisitos](#pré-requisitos)
      * [Server](#server)
      * [Web](#web)
      * [Mobile](#mobile)
<!--te-->

## Tecnologias utilizadas
- [x] Typescript
- [x] NodeJS
- [x] PostgreSQL
- [x] TypeORM
- [x] Express
- [x] CORS
- [x] Multer
- [x] Express Async Errors
- [x] date-fns
- [x] bcryptjs
- [x] crypto

## Instalação

### Pré-requisitos
Você precisa ter instalado em sua máquina as seguintes ferramentas:
- [Git](https://git-scm.com)
- [Node.js](https://nodejs.org/en/) 
- [Docker](https://www.docker.com/) 

### 🎲 Clonando o repositório

```bash
# Clone este repositório
$ git clone <https://github.com/mirandajunior10/GoBarber-backend>

```
### 🚦 Configurando e rodando o servidor

```bash
# Acesse a pasta server no terminal/cmd
$ cd server

# Instale as dependências
$ npm install
ou
$ yarn install

# Criar o banco de dados
$ npm run typeorm migration:run

ou
$ yarn typeorm migration:run
```

```bash
# Executar o servidor
$ npm run dev:server
ou 
$ yarn dev:server

# O servidor inciará na porta:3000 - acesse <http://localhost:3000>

```

### 🌐 Rotas
🚨 É imprescindível ter executado os passos anteriores e estar com o servidor executando 🚨

#### Rotas públicas

### POST `/users/`

Este método recebe o nome, email e senha do usuário para criação...

```json
{
  "name": "João",
  "email": "João@email.com",
  "password": "123456"
  
}
```

| Campo         | Tipo   |
| ------------- | ------ |
| name          | String |
| email         | String |
| password      | String |

...cria o usuário no banco de dados e retorna seus dados.

```json
{
  "name": "Jorlan Miranda",
  "email": "jorlanjr@gmail.com",
  "id": "16c511c8-bb6e-4d7c-b12c-8c2e22d18ff5",
  "created_at": "2020-09-03T05:40:18.921Z",
  "updated_at": "2020-09-03T05:40:18.921Z"
}
```

| Campo       | Tipo    |
| ----------- | ------- |
| id          | uuid    |
| name        | String  |
| email       | String  |
| created_at  | Date    |
| updated_at  | Date    |

### POST `/sessions/`

Este método recebe o email e senha do usuário para autenticação...

```json
{
  "email": "João@email.com",
  "password": "123456"
  
}
```

| Campo         | Tipo   |
| ------------- | ------ |
| email         | String |
| password      | String |

...cria a sessão autenticada por JWT e retorna seus dados.

```json
{
  "user": {
    "id": "16c511c8-bb6e-4d7c-b12c-8c2e22d18ff5",
    "name": "Jorlan Miranda",
    "email": "jorlanjr@gmail.com",
    "avatar": "d1c2af27975d3bba8066-photo-1542838132-92c53300491e.jfif",
    "created_at": "2020-09-03T05:40:18.921Z",
    "updated_at": "2020-09-04T04:10:28.439Z"
  },
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE1OTk1MDQ1NjIsImV4cCI6MTU5OTU5MDk2Miwic3ViIjoiMTZjNTExYzgtYmI2ZS00ZDdjLWIxMmMtOGMyZTIyZDE4ZmY1In0.wD2vATBGITYSSGDsNex9nWZpbCX4bzIXPww9GEFI_Ak"
}
```

- Session

| Campo                | Tipo       |
| -------------------- | ---------- |
| user                 | User       |
| token                | string     |

- User

| Campo       | Tipo    |
| ----------- | ------- |
| id          | uuid    |
| name        | String  |
| email       | String  |
| avatar      | String  |
| created_at  | Date    |
| updated_at  | Date    |


### O campo token deve ser utilizado nas rotas abaixo, ou elas retornarão erro de autenticação. O token tem duração de um dia.

---

## Rotas privadas

### PATCH `/users/avatar`

Este método recebe o arquivo da foto, altera o avatar do usuário no banco de dados...

```json
{
  "id": "16c511c8-bb6e-4d7c-b12c-8c2e22d18ff5",
  "name": "Jorlan Miranda",
  "email": "jorlanjr@gmail.com",
  "avatar": "5854bfe3743d06e3cbf9-photo-1542838132-92c53300491e.jfif",
  "created_at": "2020-09-03T05:40:18.921Z",
  "updated_at": "2020-09-07T22:04:50.391Z"
}
```

| Campo       | Tipo    |
| ----------- | ------- |
| id          | uuid    |
| name        | String  |
| email       | String  |
| avatar      | String  |
| created_at  | Date    |
| updated_at  | Date    |

### POST `/appointments`

Este método recebe um id do provedor de serviço (apenas outro usuário, qualquer usuário pode ser um prestador de serviço), um data para agendamento...

```json
{
	"provider_id": "53879588-75b0-4d27-85c2-ced7b3931168",
	"date": "{% now 'iso-8601', '' %}"
}
```

| Campo       | Tipo    |
| ----------- | ------- |
| provider_id | uuid    |
| name        | Date    |

...E retorna dados do agendamento

```json
{
  "provider_id": "16c511c8-bb6e-4d7c-b12c-8c2e22d18ff5",
  "date": "2020-09-07T19:00:00.000Z",
  "id": "53f2adda-258f-4cde-aed7-d787cc50a774",
  "created_at": "2020-09-07T22:09:53.856Z",
  "updated_at": "2020-09-07T22:09:53.856Z"
}
```

| Campo       | Tipo    |
| ----------- | ------- |
| provider_id | uuid    |
| date        | Date    |
| id          | uuid    |
| created_at  | Date    |
| updated_at  | Date    |

### GET `/appointments`

Este método retorna os agendamentos do usuário autenticado

```json
[
  {
    "id": "53f2adda-258f-4cde-aed7-d787cc50a774",
    "provider_id": "16c511c8-bb6e-4d7c-b12c-8c2e22d18ff5",
    "date": "2020-09-07T19:00:00.000Z",
    "created_at": "2020-09-07T22:09:53.856Z",
    "updated_at": "2020-09-07T22:09:53.856Z"
  }
]
```

| Campo       | Tipo    |
| ----------- | ------- |
| provider_id | uuid    |
| date        | Date    |
| id          | uuid    |
| created_at  | Date    |
| updated_at  | Date    |


<h3 align="center">
💻 Em desenvolvimento por: Jorlan Miranda
</h3>
