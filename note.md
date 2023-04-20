# Dependency Injection
 - Controller
 - Provider - Service


# Features in NEST
 - nest g module {{ module name }}

 **injection**
 - in nest if use dependency injection by provide a class as provider and other class as injectable then don't need to instantiate a project of injectable class, jus put it into contructor and Nest do it for ya

 **return content type**
 - in nest type return is automatic, it's mean when return a string it Content-type will be text/html, and when return an json it will be application/json
 


# Setup Docker PostgressDB
 - first install docker and wsl lastest version
 - create a docker-compose.yml to setup for docker 
 - run the command `docker compose up -d` it's will create a container and images for the DB
 - install postgressSQL 
 - install prisma and @prisma/client
 - run `npm install prisma @prisma/client`
 - run `npx prisma init` to create a schema and .env file
 - after setup schema and .env file run `npx prisma migrate dev` to migrate the schema to PostgresSQL
    + need to start the docker server first
    + default PostgresSQL will be 5432
    + setup docker with range 5434:5432 will still run
    + it will also run `npx prisma generate`