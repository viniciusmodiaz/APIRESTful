# API RESTful

![Generic badge](https://img.shields.io/badge/maintainer-1.0-purple.svg)
![Generic badge](https://img.shields.io/badge/version-1.0.0-orange.svg)
![Generic badge](https://img.shields.io/badge/mongoose-6.0.11-green.svg)
![Generic badge](https://img.shields.io/badge/NodeJs-14.16.0-blue.svg)
![Generic badge](https://img.shields.io/badge/express-4.17.1-blue.svg)
![Generic badge](https://img.shields.io/badge/jsonwebtoken-8.5.1-red.svg)
![Generic badge](https://img.shields.io/badge/uuid-8.3.2-yellow.svg)
![Generic badge](https://img.shields.io/badge/bcryptjs-2.4.3-yellow.svg)

## Description
Uma API RESTful de criação de sing up/sign in.

## Usage

### version 1
---

### /v1/token
It makes a request ... xxx

request example

curl -X 'GET' \
  'https://xxx' \
  -H 'accept: application/json' \
  -H 'x-consumer-system: computer' \
  -H 'x-user-id: APP' \

---

#### HEADER
values required:
- x-api-key
- consumer-key
- x-user-id


if any of these values be not passed, a bad request will be returned:
Javascript
{
  "statusCode": 400,
  "error": "Bad Request",
  "message": "Invalid request headers input"
}


## Dependencies
1. [dotenv](https://www.npmjs.com/package/dotenv)
2. [nodemon](https://www.npmjs.com/package/nodemon)

### External services

1.  [token](https://xxx)

## Local variables


SERVICE_NAME=name
NODE_ENV=development
PORT=3001
HTTPS_PORT=3002


## Running application

starting the application locally

npm start

starting the application locally for development nodemon

npm run dev


## Running tests

tests with code coverage

npm test


when developing unit tests (it will run the tests every time that a .spec file is saved and breaks in the first broken test expectation)

npm run test:watch
