# API Endpoints

The UnityClubXtra project provides the following API endpoints for interacting with the application. All endpoints are relative to the base API URL (e.g., `https://your-api-url.com/api`).

## User Endpoints

### Register a New User

- **Endpoint:** `POST /api/users/register`
- **Description:** Register a new user.
- **Request Body:**
  ```json
  {
    "username": "example_user",
    "email": "user@example.com",
    "password": "secure_password"
  }
