# Job Portal

## Overview

A job portal application built with Express.js, EJS, and in-memory data structures for managing user and job data. The application supports user registration, login, job posting, job application, and email confirmation.

## Features

- User registration and login system for recruiters
- Job seekers can view all jobs, job details, and apply to jobs
- Recruiters can create, update, delete, and view job postings
- Email confirmation sent to applicants after job application
- Session-based user authentication and management
- Middleware for file upload, last visit tracking, and email sending

## Project Structure

- **src/controllers/**: Contains controller files for handling business logic.
- **src/models/**: Contains model files for data handling.
- **src/middleware/**: Contains middleware files for authentication, file upload, last visit tracking, and email sending.
- **src/views/**: Contains EJS view files for rendering HTML pages.
- **src/routes/**: Contains route files for handling endpoints.
- **public/uploads/**: Directory for storing uploaded resume files.
- **app.js**: Main application file.

## Installation

1. Clone the repository.
2. Run `npm install` to install dependencies.
3. Run `npm start` to start the application.

## Usage

- Visit `/users/signup` to register a new recruiter account.
- Visit `/users/login` to log into an existing recruiter account.
- Visit `/jobs` to view all job postings.
- Visit `/jobs/:id` to view details of a specific job and apply for it.
- Recruiters can manage job postings by visiting the appropriate URLs.

## Dependencies

- Express.js
- Express-session
- EJS
- Multer
- Nodemailer
- Cookie-parser

## License

MIT License
