# Dependency Injection

- `@Controller` Controller
- `@Injectable` Provider - Service
- `@Module`
  + `@Global()`
  + imports
  + exports
  + controller:
  + provider:
- `@Body`


# Features in NEST

- nest g module {{ module name }}
- nest g service module {{ module name }} --no-spec

**injection**

- in nest if use dependency injection by provide a class as provider and other class as injectable then don't need to instantiate a project of injectable class, jus put it into contructor and Nest do it for ya

**return content type**

- in nest type return is automatic, it's mean when return a string it Content-type will be text/html, and when return an json it will be application/json

**Depend on the type of framework use to get the request from URL**
- nest provide a decorator `@Body() dto: any` to access the body of URL, by any framework used will be auto config by nest 




# Setup Docker PostgressDB

- first install docker and wsl lastest version
- create a docker-compose.yml to setup for docker
- run the command `docker compose up -d` it's will create a container and images for the DB
- install postgressSQL
- install prisma and @prisma/client
- run `npm install prisma @prisma/client`
- run `npx prisma init` to create a schema and .env file
- after setup schema and .env file run `npx prisma migrate dev` to migrate the schema to PostgresSQL
  - need to start the docker server first
  - default PostgresSQL will be 5432
  - setup docker with range 5434:5432 will still run
  - it will also run `npx prisma generate`
- after the setup use can import and create an instance from PismaClient
  + `import { User, Bookmark } from '@prisma/client';`

  + `import { PrismaClient } from '@prisma/client'` 
    `const prisma = new PrismaClient()`
- can run the studio to browser by `npx prisma studio`

# Use Prisma

- create a module that can access directly prima `nest g module prisma`
