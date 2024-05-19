In this setup:

- The backend service runs the Node.js backend server, exposing port 8080.
- The frontend service runs the React development server, exposing port 3000.
- The mysql service runs the MySQL database server, exposing port 3306. It depends on the backend service to ensure that the backend is up and running before initializing the database.
- Volumes are used to persist MySQL data, ensuring that data isn't lost when containers are stopped.

Make sure to replace mypassword and mydatabase with your desired MySQL root password and database name, respectively.

To run your application, navigate to the directory containing the docker-compose.yml file in your terminal, run:
docker-compose up

This will build and start all the services defined in the Docker Compose file.
