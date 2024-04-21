# News Aggregator

## Installation and Setup Instructions

1. Clone the repo
    ```bash
    git clone https://github.com/JeremiahAmir/innoscripta_test
    ```
2. Install dependencies:
    ```bash
    cd frontend
    npm install
    ```
3. Run the project
    ```bash
    npm start
    ```
4. Run production build
    ```bash
    npm build
    npm start
    ```
5. Application served at http://localhost:3000

## Docker setup

1. For running application with docker first build the docker image:
    ```bash
    docker-compose build
    ```
2. Up the docker container:
   ```bash
   docker-compose up
   ```
3. Application served at http://localhost:3002

## Tech stack

-   [React](https://react.dev/)
-   [TypeScript](https://www.typescriptlang.org/)
-   [ReactStrap](https://reactstrap.github.io/)