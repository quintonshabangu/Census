# Census
- The project uses a Spring Boot api with a MySql database.
- The frontend is an Angular CLI project with bootstrap for styling.
- Auth0 is used to authenticate users to the Angular project.

The spring docker container is unfortunately incomplete, but the solutions can run locally.

# Running the angular app
The Angular app uses the Angular CLI project, so after installing npm you can run these commands:

```sh
$ npm install
$ ngServe
```

The app will be on port localhost:4200

#Running the spring app

Unfortunately the API does not have a container, so you will need to run the API on an IDE. 
It uses spring boot so running the project is easy
Add a springBoot run configuration (If using IntelliJ) and add the run parameter:
```sh
$ name = auth.secret value = auth0.secret 
```

- The API uses a MySql docker container
- Ensure that the container is ran before you run the API
