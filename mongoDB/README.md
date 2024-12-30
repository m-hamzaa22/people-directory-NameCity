# MongoDB Setup for Microservices Architecture

This document provides instructions for setting up MongoDB as part of the microservices architecture. MongoDB is used as the database to store data for the back-end (People from City app).

## Prerequisites

- Docker (for local setup)
- Kubernetes (for cloud/deployment setup)
- MongoDB Docker image (`mongo:7.0-jammy`)
  
## MongoDB Docker Setup (Local Development)

### 1. Pull the MongoDB Docker Image

You can pull the official MongoDB Docker image from Docker Hub:

```bash
docker pull mongo:7.0-jammy
