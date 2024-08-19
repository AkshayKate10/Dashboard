This is Task-Dashboard for managing user tasks.

## Steps to Run using local server

### `npm start`

Runs UI on this application Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### `npm run server`

Runs Server of this application on port:5000

## Steps to Run using Docker

- To create docker image

### `docker build -t task-dashboard:1 .`

- To run docker image

### `docker run -p 8000:8000 -p 5000:5000 task-dashboard:1`

Application is running on [http://localhost:8000](http://localhost:8000)
