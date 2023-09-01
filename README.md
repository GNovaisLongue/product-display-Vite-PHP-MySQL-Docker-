# Vite + PHP + MySQL + Docker

Simple test project running on docker.

## With Docker

Simply execute `docker compose up --build` to build and start the project.
If you want to stop and remove everything associated to this project from your docker, execute `docker compose down -v --rmi 'all'`

## Without Docker

- cd into the `backend` folder then use the following command to install composer dependencies:

```bash
  composer install
```

- cd into the `vite` folder then use the following command to install node dependencies:

```bash
  npm install
```

- To simply access the frontend without any data or access to the database, simply execute the following command:

```bash
  npm run dev
```

- In order to have the MySQL running locally and connected with the backend, it will be required to run an APACHE server containing the backend files. Make sure the ports on the frontend, backend and MySQL are matching.
