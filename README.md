# API RESTful

![Generic badge](https://img.shields.io/badge/api-1.0-purple.svg)
![Generic badge](https://img.shields.io/badge/nodemon-2.0.14-orange.svg)
![Generic badge](https://img.shields.io/badge/mongoose-6.0.11-green.svg)
![Generic badge](https://img.shields.io/badge/NodeJs-14.16.0-blue.svg)
![Generic badge](https://img.shields.io/badge/express-4.17.1-blue.svg)
![Generic badge](https://img.shields.io/badge/jsonwebtoken-8.5.1-red.svg)
![Generic badge](https://img.shields.io/badge/uuid-8.3.2-yellow.svg)
![Generic badge](https://img.shields.io/badge/bcryptjs-2.4.3-yellow.svg)

## Descrição
Uma API RESTful de criação de sing up/sign in.

### token/jsonwebtoken
Authorization: Bearer {{token}}

---

#### Doucmentação da API no POSTMAN

https://documenter.getpostman.com/view/11073669/UV5ahGX2

## Dependencies
1. [dotenv](https://www.npmjs.com/package/dotenv)
2. [nodemon](https://www.npmjs.com/package/nodemon)
3. [bcryptjs](https://www.npmjs.com/package/bcryptjs)
4. [chai](https://www.npmjs.com/package/chai)
5. [uuid](https://www.npmjs.com/package/uuid)
6. [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken)

## Local variables


APP_NAME=API
DB_CONNECTION=mongodb
DB_HOST=127.0.0.1
DB_PORT=27017
DB_DATABASE=api
APP_PORT=3000
APP_SERVER=localhost:
TOKEN_EXPIRES=1800
SECRET=680f5df3acca979aea7ca3cb7cacff01


## Inicializado API

Instalação das dependências 

``` bash
 npm i
```

Iniciando aplicação localmente

npm start

Iniciando aplicação localmente em modo desenvolvimento no nodemon

npm run dev


## Inicializado Testes

npm test
