


## Setup

* Start mysql server `mysql.server start`
* Create database
  ```
  mysql -u root
    create database react;
    exit
  ```

## Required Software
* Java 8
* node/npm (recomended)

## Available Profiles

###### Run wih profile from commandline:
`SPRING_PROFILES_ACTIVE=<profile> ./gradlew bootrun`

_You are also able to build the application with product minification using_
`NODE_ENV=production`

## Run...

### ...the app
1. `./gradlew bootrun` or
2. Execute main method of Application (run the watch task in background to get the frontend build right in place)

### ...npm tasks
* `npm run test`
    Runs the karma test on commandline
* `npm run karma`
    Runs the karma test server on localhost:8888
* `npm run watch`
    Watches on jsx and scss files and rebuild with webpack
* `npm run package`
    Package javascript and sass files for production
* `npm run package-dev`
    Package javascript and sass files for development (including sourcemaps)
* `npm run lint`
    Runs lint tests

## Access the app
After starting the app open http://localhost:8080 use the credentials user/user.

