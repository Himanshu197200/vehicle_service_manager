# Vehicle Service Manager

A robust backend application for managing vehicle service records, built with TypeScript, Express, and MongoDB.

## Features

*   **User Authentication**: Secure Signup and Login using JWT (JSON Web Tokens).
*   **Service Management**: Full CRUD operations for vehicle service records.
*   **Search & Pagination**: Efficient data retrieval with search capabilities and pagination support.
*   **Secure Routes**: Middleware-protected endpoints ensuring only authorized access.
*   **Global Error Handling**: Centralized error management for consistent API responses.
*   **OOP Architecture**: Clean and maintainable code structure using classes and interfaces.

## Tech Stack

*   **Language**: TypeScript
*   **Runtime**: Node.js
*   **Framework**: Express.js
*   **Database**: MongoDB (with Mongoose ODM)
*   **Authentication**: JSON Web Token (JWT) & Bcryptjs

## Project Structure

```
src/
├── controllers/    # Request handlers
├── middlewares/    # Auth and Error middlewares
├── models/         # Mongoose schemas and interfaces
├── repositories/   # Database interaction layer
├── routes/         # API route definitions
├── services/       # Business logic layer
├── utils/          # Utility classes (e.g., ApiFeatures)
├── app.ts          # Express app configuration
└── server.ts       # Entry point
```

## Getting Started

### Prerequisites

*   Node.js (v14 or higher)
*   MongoDB installed and running locally

### Installation

1.  Clone the repository:
    ```bash
    git clone https://github.com/Himanshu197200/vehicle_service_manager.git
    cd vehicle_service_manager
    ```

2.  Install dependencies:
    ```bash
    npm install
    ```

3.  Set up environment variables:
    Create a `.env` file in the root directory and add:
    ```env
    PORT=8000
    MONGODB_URL=mongodb+srv://himanshumishra4926_db_user:mongodb%401972@cluster0.fzr4p48.mongodb.net/
    JWT_SECRET=your_super_secret_key
    ```

## Running the App

Start the development server:

```bash
npm run dev
```

The server will start on `http://localhost:8000`.

## API Endpoints

### Authentication

*   `POST /auth/register` - Register a new user
*   `POST /auth/login` - Login and receive a token

### Services (Protected)

*   `GET /services` - Get all services (supports `?search` and `?page`)
*   `POST /services` - Create a new service record
*   `GET /services/:id` - Get a specific service by ID
*   `PUT /services/:id` - Update a service record
*   `DELETE /services/:id` - Delete a service record

**Note:** Protected routes require the `Authorization` header with a Bearer token:
`Authorization: Bearer <your_token>`

