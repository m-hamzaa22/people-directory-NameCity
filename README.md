# Microservices Architecture with Front-End, Back-End, and MongoDB and kubernetes

This project sets up a simple microservices architecture involving a front-end, back-end, and MongoDB database, all running in Docker containers and deployed on Kubernetes.

## Project Structure

- **Front-End**: A simple HTML, CSS, and JavaScript front-end that interacts with the back-end service to display and add people to a city.
- **Back-End**: A Node.js application with Express and MongoDB that manages data for people in cities.
- **MongoDB**: A database to store people data.
- **Docker**: Dockerfiles for both the front-end and back-end to containerize the services.
- **Kubernetes**: Configuration to deploy the microservices on a Kubernetes cluster.

## Setup Instructions

1. **Clone the repository**:
    ```bash
    git clone https://github.com/m-hamzaa22/people-directory-NameCity.git
    cd people-directory-NameCity
    ```

2. **Build and run the Docker containers**:
    - Front-End:
        ```bash
        docker build -t frontend ./frontend
        docker run -d -p 80:80 frontend
        ```
    - Back-End:
        ```bash
        docker build -t backend ./backend
        docker run -d -p 3000:3000 backend
        ```

3. **Kubernetes Deployment**:
    Follow the instructions in the `k8s` folder to deploy the application on a Kubernetes cluster.

4. **Access the application**:
    - Front-End: `http://<your-k8s-loadbalancer-ip>:80`
    - Back-End: `http://<your-k8s-loadbalancer-ip>:3000`
