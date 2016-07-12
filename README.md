


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
* node/ npm
* Gulp `npm install -g gulp`

## Available Profiles

###### Run wih profile from commandline:
`SPRING_PROFILES_ACTIVE=<profile> ./gradlew bootrun`


## Run...

### ...the app
1. `./gradlew bootrun` or
2. Execute main method of Application

### ...watch tasks
Make sure you run the application with profile developer, to disable thymeleaf caching.

To get all changes with an F5, just use gulp watch. This task will watch on the jsx and scss files.
The html files in templates are reloaded if you are recompiling (CTRL + F9 for IntelliJ)

## Access the app
After starting the app open http://localhost:8080 use the credentials user/user.

