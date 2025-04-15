# Hospital Appointment System

A full-stack application for managing hospital appointments.

## Local Development

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file based on `.env.example`
4. Run the development server:
   ```bash
   npm run dev
   ```

## Deployment on Render

1. Create a new Web Service on Render
2. Connect your GitHub repository
3. Configure the following environment variables in Render:
   - `MONGODB_URI`: Your MongoDB connection string
   - `JWT_SECRET`: A secure secret key for JWT
   - `NODE_ENV`: Set to "production"
   - `PORT`: Will be set automatically by Render

4. Deploy the application

## Features

- User Authentication
- Appointment Booking
- Department Management
- Real-time Availability

## Tech Stack

- Backend: Node.js, Express
- Database: MongoDB
- Authentication: JWT
- Frontend: HTML, CSS, JavaScript