# API RESTful

![Generic badge](https://img.shields.io/badge/maintainer-1.0-purple.svg)
![Generic badge](https://img.shields.io/badge/version-1.0.0-orange.svg)
![Generic badge](https://img.shields.io/badge/mongoose-6.0.11-green.svg)
![Generic badge](https://img.shields.io/badge/NodeJs-14.16.0-blue.svg)
![Generic badge](https://img.shields.io/badge/express-4.17.1-blue.svg)
![Generic badge](https://img.shields.io/badge/jsonwebtoken-8.5.1-red.svg)
![Generic badge](https://img.shields.io/badge/uuid-8.3.2-yellow.svg)
![Generic badge](https://img.shields.io/badge/bcryptjs-2.4.3-yellow.svg)

## Descrição
Uma API RESTful de criação de sing up/sign in.

## USo

### /v1/token


---

#### Doucmentação da API POSTMAN

https://documenter.getpostman.com/view/11073669/UV5ahGX2

## Dependencies
1. [dotenv](https://www.npmjs.com/package/dotenv)
2. [nodemon](https://www.npmjs.com/package/nodemon)

### External services

1.  [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken)

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


## Running application

starting the application locally

npm start

starting the application locally for development nodemon

npm run dev


## Running tests

tests with code coverage

npm test
