# Census
- The project uses a Spring Boot api with a MySql database.
- The frontend is an Angular CLI project with bootstrap for styling.
- Auth0 is used to authenticate users to the Angular project.

# Running the containers
- Once you have installed Docker, you can run the command on the project root:
```sh
docker-container up --build
```
- this command will run the Angular app, Spring API app and create a local MySQL instance

The Angular app will be on port localhost:4200
The Spring app will be on port localhost:8080
