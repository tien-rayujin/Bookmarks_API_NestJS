## Goal - Objective
  This project create a simple API allow user to register, login account and CRUD with their bookmarks 

## Requirement before run the app
 - Your machine must installed [postgreSQL](https://www.postgresql.org/) and [Docker](https://www.docker.com/)

## Installation

```bash
# install required package
$ npm install

# use prisma compose to setup and deloy the database
$ npm run db:dev:restart

# to run test server
$ npm run db:test:restart
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev
```

## Test

```bash
# e2e tests
$ npm run test:e2e
```

## Technologies, Frameworks, and Libraries Used in this Project
 - This project is built on the NestJS framework using pure TypeScript.
 - The [Prisma](https://www.prisma.io/) library is being used, along with the Docker Compose, to create and manage database interactions.
 - The [class-validator](https://www.npmjs.com/package/class-validator) and [class-transformer](https://www.npmjs.com/package/class-transformer) libraries are being used to work with DTOs.
 - The [argon2](https://www.npmjs.com/package/argon2) library is being used for password hashing.
 - Authentication is being implemented using [passport](https://www.passportjs.org/) with the JWT strategy.
 - Instead of the default NestJS Supertest library, the [PactumJS](https://pactumjs.github.io/) library is being used.


## Route used in this project
*Auth*:
 - POST `/signup`: required body: `{email, password}` - 201
 - POST `/signin`: required body: `{email, password}` - 200

*User*: **Authentication** required
 - GET `/users/me`: get this user information - 200
 - PATCH `/users/`: create update on this user body contains: `{email?, firstName?, lastName?}` - 201

*Bookmark*: **Authentication** required
 - GET `/bookmarks`: get owns bookmark list created by this user - 200
 - GET `/bookmarks/:id`: get bookmark of `id` - 200
 - POST `/bookmarks`: create bookmark, body contains: `{title, description?, link}` - 201
 - PATCH `/bookmarks/:id`: edit bookmark of `id`, body contains: `{title?, description?, link?}`  - 200
 - DELETE `/bookmarks/:id`: delete bookmark of `id` - 204
