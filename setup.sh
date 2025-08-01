#!/bin/bash

echo "🚀 Setting up POS System..."

# Install root dependencies
echo "📦 Installing root dependencies..."
npm install

# Install backend dependencies
echo "📦 Installing backend dependencies..."
cd pos-backend
npm install
echo "✅ Backend dependencies installed!"

# Install frontend dependencies
echo "📦 Installing frontend dependencies..."
cd ../pos-frontend
npm install
echo "✅ Frontend dependencies installed!"

cd ..

echo "🎉 Setup complete!"
echo ""
echo "Next steps:"
echo "1. Configure your database URL in pos-backend/.env"
echo "2. Run 'cd pos-backend && npx prisma migrate dev' to set up the database"
echo "3. Run 'npm run dev' to start both servers"
echo ""
echo "Backend will run on: http://localhost:3001"
echo "Frontend will run on: http://localhost:3000"
