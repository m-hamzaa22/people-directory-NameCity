# Front-End: People from City

This is a simple front-end application built with HTML, CSS, and JavaScript that interacts with the back-end service to display and add people to a city.

## Features
- View a list of people and their cities.
- Add a new person with their name and city.

## Instructions

### Docker Setup

1. **Build Docker Image**:
    ```bash
    docker build -t frontend .
    ```

2. **Run Docker Container**:
    ```bash
    docker run -d -p 8000:80 frontend
    ```

3. **Access the Front-End**:
    Once the container is running, you can access the application through your browser:
    ```http
    http://YourHOSTIP:8000
    ```

### Updating Back-End URL

To make the front-end interact with your back-end, update the `backendURL` variable in the `script` tag:

```javascript
const backendURL = 'http://your-backend-url'; // Replace with your backend URL or IP address
