# POS System

A modern Point of Sale (POS) system built with separate backend and frontend architectures.

## Architecture

- **Backend (`pos-backend/`)**: Node.js/Express API server with Prisma ORM
- **Frontend (`pos-frontend/`)**: Next.js 15 React application with TypeScript

## Features

- 🔐 User authentication and authorization
- 👥 Role-based access (Manager/Cashier)
- 📦 Product management
- 🏷️ Category management
- 🛒 Sales and cart functionality
- 📊 Dashboard and analytics
- 🎨 Modern UI with Tailwind CSS and shadcn/ui
- 🌙 Dark/Light mode support

## Project Structure

```
pos-app/
├── pos-backend/          # Backend API server
│   ├── src/
│   │   ├── api/          # Routes and controllers
│   │   ├── config/       # Database configuration
│   │   ├── middleware/   # Authentication middleware
│   │   └── services/     # Business logic
│   ├── prisma/           # Database schema and migrations
│   └── app.js           # Main server file
├── pos-frontend/         # Frontend Next.js app
│   ├── app/             # Next.js app directory
│   ├── components/      # Reusable UI components
│   ├── lib/             # Utilities and helpers
│   └── public/          # Static assets
└── package.json         # Root package.json for workspace management
```

## Quick Start

### Prerequisites

- Node.js 18+ and npm
- Database (PostgreSQL/MySQL/SQLite)

### Installation

1. **Install all dependencies:**
   ```bash
   npm run install:all
   ```

2. **Set up the backend:**
   ```bash
   cd pos-backend
   cp .env .env.local  # Copy and configure your environment variables
   # Edit .env.local with your database URL and JWT secret
   npx prisma migrate dev
   npx prisma generate
   ```

3. **Set up the frontend:**
   ```bash
   cd ../pos-frontend
   # .env.local is already configured to connect to backend on port 3001
   ```

### Development

**Run both backend and frontend simultaneously:**
```bash
npm run dev
```

This will start:
- Backend API server on [http://localhost:3001](http://localhost:3001)
- Frontend application on [http://localhost:3000](http://localhost:3000)

**Or run them separately:**
```bash
# Backend only
npm run dev:backend

# Frontend only
npm run dev:frontend
```

## API Endpoints

### Authentication
- `POST /user/` - Create user
- `POST /user/login` - User login
- `POST /user/logout` - User logout
- `GET /user/manager` - Test manager role access

### Categories
- `POST /category/create` - Create category

### Products
- `POST /product/create` - Create product

## Environment Variables

### Backend (pos-backend/.env)
```env
PORT=3001
FRONT_END=http://localhost:3000
DATABASE_URL="your_database_connection_string"
JWT_SECRET="your_jwt_secret"
```

### Frontend (pos-frontend/.env.local)
```env
NEXT_PUBLIC_API_URL=http://localhost:3001
NEXT_PUBLIC_APP_NAME=POS System
```

## Build for Production

```bash
npm run build
```

## Technologies Used

### Backend
- Node.js & Express.js
- Prisma ORM
- JWT Authentication
- bcryptjs for password hashing
- CORS support

### Frontend
- Next.js 15 (App Router)
- TypeScript
- Tailwind CSS
- shadcn/ui components
- React Query for state management
- React Hook Form with Zod validation

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request
