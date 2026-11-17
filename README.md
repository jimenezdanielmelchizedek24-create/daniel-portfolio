# Daniel Jimenez — Personal Portfolio

A personal portfolio website developed to showcase my creative work, professional background, technical skills, and projects. The application also includes a database-powered contact management system that allows visitors to submit inquiries and the administrator to manage submitted messages through a private dashboard.

## Features

### Portfolio Website
- Personal introduction and professional background
- About Me section
- Technical and creative skills
- Projects and experience
- Contact information and social media links
- Interactive contact form

### Contact Management System
- Submit contact inquiries through the portfolio website
- Store inquiries in a MySQL database
- Retrieve and view submitted inquiries
- Update inquiry statuses
- Delete inquiries
- Administrator login and protected dashboard

## Technologies Used

### Frontend
- React.js
- JavaScript
- HTML5
- CSS3
- Webpack
- Babel

### Backend
- Node.js
- Express.js
- JavaScript (ES Modules)

### Database and ORM
- MySQL
- Prisma ORM v7
- Prisma MariaDB Driver Adapter

### Authentication and Security
- bcryptjs for password hashing
- JSON Web Token (JWT) for administrator authentication
- Environment variables using dotenv

## Application Architecture

The application follows a client-server architecture.

1. **Frontend:** React provides the portfolio interface, contact form, and administrator dashboard.
2. **Backend:** Express.js handles API requests and application logic.
3. **ORM:** Prisma ORM manages database operations between the backend and MySQL.
4. **Database:** MySQL stores submitted contact inquiries and their associated information.

## Database Configuration

The application uses a MySQL database named:

`daniel_portfolio`

### Message Model

The database contains a `Message` model with the following fields:

| Field | Type | Description |
|---|---|---|
| id | Int | Primary key |
| name | String | Sender's full name |
| email | String | Sender's email address |
| subject | String | Inquiry subject |
| message | String | Inquiry content |
| status | String | Inquiry status |
| createdAt | DateTime | Date the inquiry was created |
| updatedAt | DateTime | Date the inquiry was last updated |

### Inquiry Statuses

- `NEW` — Newly submitted inquiry
- `READ` — Inquiry has been reviewed
- `ARCHIVED` — Inquiry has been archived

## CRUD Operations

The application demonstrates all four fundamental database operations using Prisma ORM.

| Operation | HTTP Method | Endpoint | Prisma Operation |
|---|---|---|---|
| Create | POST | `/api/messages` | `prisma.message.create()` |
| Read | GET | `/api/messages` | `prisma.message.findMany()` |
| Update | PATCH | `/api/messages/:id` | `prisma.message.update()` |
| Delete | DELETE | `/api/messages/:id` | `prisma.message.delete()` |

The create operation is publicly accessible through the contact form. The read, update, and delete operations require administrator authentication.

## Installation and Setup

### Prerequisites

Make sure the following software is installed:

- Node.js and npm
- MySQL Server
- Visual Studio Code
- Git

### 1. Clone the Repository

```bash
git clone YOUR_GITHUB_REPOSITORY_URL
```

Navigate into the project directory:

```bash
cd daniel-portfolio
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Create the MySQL Database

Open your MySQL client and execute:

```sql
CREATE DATABASE daniel_portfolio;
```

### 4. Configure Environment Variables

Create a `.env` file in the project root directory.

Add the following configuration:

```env
DATABASE_URL="mysql://root:YOUR_MYSQL_PASSWORD@localhost:3306/daniel_portfolio"

DB_PASSWORD=YOUR_MYSQL_PASSWORD

ADMIN_USERNAME=daniel
ADMIN_PASSWORD_HASH=YOUR_BCRYPT_PASSWORD_HASH
JWT_SECRET=YOUR_RANDOM_JWT_SECRET
```

Replace the placeholder values with your local database credentials and generated authentication secrets.

**Security Note:** Never upload your `.env` file, database password, password hash, or JWT secret to a public GitHub repository.

### 5. Generate the Prisma Client

```bash
npx prisma generate
```

### 6. Run Database Migrations

```bash
npx prisma migrate dev
```

This applies the database migrations and creates the required tables.

### 7. Start the Backend Server

Open a terminal and execute:

```bash
npm run server:dev
```

The backend API will run at:

`http://localhost:5000`

### 8. Start the Frontend Development Server

Open another terminal and execute:

```bash
npm start
```

The portfolio website will be available at:

`http://localhost:3000`

The administrator dashboard can be accessed at:

`http://localhost:3000/admin`

## API Endpoints

| Method | Endpoint | Description | Access |
|---|---|---|---|
| GET | `/` | API health check | Public |
| POST | `/api/auth/login` | Administrator login | Public |
| POST | `/api/messages` | Submit an inquiry | Public |
| GET | `/api/messages` | Retrieve inquiries | Admin |
| PATCH | `/api/messages/:id` | Update inquiry status | Admin |
| DELETE | `/api/messages/:id` | Delete an inquiry | Admin |

Administrator endpoints require a valid JWT authentication token.

## Available Scripts

| Command | Description |
|---|---|
| `npm start` | Start the React development server |
| `npm run server:dev` | Start the backend with automatic restart |
| `npm run server` | Start the backend server |
| `npm run build` | Build the frontend for production |

## Project Structure

```text
daniel-portfolio/
│
├── public/
│   └── index.html
│
├── src/
│   ├── admin/
│   │   ├── components/
│   │   ├── pages/
│   │   │   ├── AdminLogin.jsx
│   │   │   └── AdminDashboard.jsx
│   │   └── styles/
│   │       ├── AdminLogin.css
│   │       └── AdminDashboard.css
│   │
│   ├── components/
│   ├── assets/
│   ├── styles/
│   ├── generated/
│   │   └── prisma/
│   ├── App.jsx
│   ├── index.js
│   └── index.css
│
├── server/
│   ├── config/
│   │   └── prisma.mjs
│   ├── middleware/
│   │   └── auth.mjs
│   ├── routes/
│   │   ├── authRoutes.mjs
│   │   └── messageRoutes.mjs
│   └── index.mjs
│
├── prisma/
│   ├── migrations/
│   └── schema.prisma
│
├── .env
├── .gitignore
├── babel.config.json
├── package.json
├── prisma7.config.ts
└── webpack.config.js
```

*Note: The project structure above summarizes the main application files. Additional components, styles, and assets may be present.*

## Data Persistence

Contact inquiries are stored in the MySQL database using Prisma ORM.

Submitted records remain in the database even after the frontend or backend development servers are stopped and restarted.

The administrator can retrieve, update, and delete stored inquiries through the dashboard.

## Author

**Daniel Melchizedek A. Jimenez**

BS Information Technology Student  
Major in Animation and Motion Graphics

Laguna State Polytechnic University  
Siniloan Campus, Laguna, Philippines

## License

This project was developed for academic and personal portfolio purposes.