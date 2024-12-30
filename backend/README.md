
### 3. Back-End README.md

```markdown
# Back-End: People from City (Node.js with Express & MongoDB)

This is a simple Node.js back-end application using Express and MongoDB to handle storing and retrieving people and their city information.

## Features
- Retrieve a list of people and their cities.
- Add a new person with their name and city.

## Instructions

### Install Dependencies

1. **Install Node.js dependencies**:
    ```bash
    npm install
    ```

### Docker Setup

1. **Build Docker Image**:
    ```bash
    docker build -t backend .
    ```

2. **Run Docker Container**:
    ```bash
    docker run -d -p 8001:3000 backend
    ```

3. **Access the Back-End**:
    Once the container is running, you can access the API through:
    ```http
    http://YOUR-HOST-IP:8001
    ```

### MongoDB Setup

The back-end connects to a MongoDB instance with the following connection string: Go to App.js to change the IP:PORT

```javascript
mongoose.connect('mongodb://mongo:27017/people-db', { useNewUrlParser: true, useUnifiedTopology: true })
