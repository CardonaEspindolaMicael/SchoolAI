# 🎓 ARANDU - AI-Powered Educational Platform

## 🚀 Project Overview

#  AI-Powered Educational Platform
ARANDU is a comprehensive educational management system that leverages artificial intelligence to generate personalized lesson plans and teaching guides. The platform integrates blockchain technology for secure data management and provides a complete solution for educational institutions.

### 🎯 Key Features

- **🤖 AI-Powered Lesson Generation**: Automatically creates 5-step lesson plans using Google's Gemini AI
- **📚 Comprehensive Academic Management**: Complete CRUD operations for grades, subjects, subtopics, and class assignments
- **👥 Multi-Role User System**: Support for teachers, students, and administrators with role-based permissions
- **📊 Progress Tracking**: Universal progress tracking for both teachers and students
- **📅 Smart Scheduling**: Automated class scheduling and time management
- **🔐 Blockchain Integration**: Secure data management with blockchain technology
- **📖 Interactive Documentation**: Swagger API documentation for easy integration
- **🔄 Real-time Updates**: WebSocket support for live updates

## 🏗️ Architecture

### Tech Stack

- **Backend**: Node.js with Express.js
- **Database**: PostgreSQL with Prisma ORM
- **AI Integration**: Google Gemini AI (Gemini 2.0 Flash Exp)
- **Authentication**: JWT with bcrypt
- **Documentation**: Swagger/OpenAPI 3.0
- **Blockchain**: Ethereum integration with OpenZeppelin contracts
- **File Upload**: Multer for file handling
- **Validation**: Zod schema validation

### Project Structure

```
BackFigma/
├── src/
│   ├── components/           # Feature modules
│   │   ├── AI/              # AI lesson generation
│   │   ├── aiFeedback/      # AI feedback management
│   │   ├── user/            # User management
│   │   ├── role/            # Role-based access control
│   │   ├── grade/           # Grade management
│   │   ├── subject/         # Subject management
│   │   ├── subtopic/        # Subtopic management
│   │   ├── classAssignment/ # Class assignments
│   │   ├── progress/        # Progress tracking
│   │   └── schedule/        # Scheduling system
│   ├── config/              # Configuration files
│   ├── middlewares/         # Authentication & authorization
│   ├── services/            # Business logic services
│   └── validators/          # Input validation
├── prisma/                  # Database schema & migrations
└── uploads/                 # File upload directory
```

## 🛠️ Installation & Setup

### Prerequisites

- Node.js (v18 or higher)
- PostgreSQL database
- Google Gemini AI API key
- Ethereum wallet (for blockchain features)

### 1. Clone the Repository

```bash
git clone <repository-url>
cd BackFigma
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Environment Configuration

Create a `.env` file in the root directory:

```env
# Database Configuration
DATABASE_URL="postgresql://username:password@localhost:5432/school_ai_db"

# Server Configuration
PORT=3001
NODE_ENV=development

# JWT Configuration
JWT_SECRET=your_jwt_secret_key_here

# AI Configuration
GOOGLE_GENERATIVE_AI_API_KEY=your_gemini_api_key_here

# File Upload Configuration
UPLOAD_PATH=./uploads
MAX_FILE_SIZE=5242880
```

### 4. Database Setup

```bash
# Generate Prisma client
npm run build

# Push schema to database
npx prisma db push

# (Optional) Run migrations
npx prisma migrate dev
```

### 5. Start the Application

```bash
# Development mode with auto-reload
npm run dev

# Production mode
npm start
```

The server will start on `http://localhost:3001`

## 📚 API Documentation

### Interactive Documentation

Once the server is running, access the interactive API documentation at:
```
http://localhost:3001/api-docs
```

### Core Endpoints

#### Authentication
- `POST /api-v1/auth/login` - User login
- `POST /api-v1/auth/register` - User registration

#### User Management
- `GET /api-v1/usuario` - Get all users
- `POST /api-v1/usuario` - Create new user
- `PUT /api-v1/usuario/:id` - Update user
- `DELETE /api-v1/usuario/:id` - Delete user

#### AI Features
- `POST /api-v1/ai-writing-assistant/generate-feedback/:subtopicId` - Generate AI lesson plan
- `GET /api-v1/ai-feedback` - Get AI feedback
- `PUT /api-v1/ai-feedback/:id` - Update AI feedback

#### Academic Management
- `GET /api-v1/grades` - Get all grades
- `GET /api-v1/subjects` - Get all subjects
- `GET /api-v1/subtopics` - Get all subtopics
- `GET /api-v1/class-assignments` - Get class assignments
- `GET /api-v1/progress` - Get progress tracking
- `GET /api-v1/schedules` - Get schedules

## 🤖 AI-Powered Features

### Lesson Plan Generation (This is just a demo the real one will be local)

The platform uses Google's Gemini AI to automatically generate comprehensive 5-step lesson plans:

1. **Engaging Introduction** (10-15 minutes)
2. **Core Concept Development** (20-25 minutes)
3. **Practice and Application** (20-25 minutes)
4. **Assessment and Feedback** (10-15 minutes)
5. **Closure and Reflection** (5-10 minutes)

### Example AI Generation

```bash
curl -X POST \
  http://localhost:3001/api-v1/ai-writing-assistant/generate-feedback/123e4567-e89b-12d3-a456-426614174000 \
  -H 'Content-Type: application/json' \
  -H 'Authorization: Bearer YOUR_JWT_TOKEN'
```

Response includes:
- Detailed step-by-step lesson plan
- Time allocations for each activity
- Required materials
- Student activities
- Success indicators

## 🔐 Authentication & Authorization

The platform implements JWT-based authentication with role-based access control:

### Roles
- **Admin**: Full system access
- **Teacher**: Class management and AI generation
- **Student**: Progress tracking and assignments

### Protected Routes
Most endpoints require authentication. Include the JWT token in the Authorization header:
```
Authorization: Bearer <your_jwt_token>
```

## 📊 Database Schema

The platform uses a comprehensive PostgreSQL schema with the following main entities:

- **Users**: User accounts with roles
- **Grades**: Academic grade levels
- **Subjects**: Course subjects
- **Subtopics**: Specific learning topics
- **ClassAssignments**: Teacher-class assignments
- **Progress**: Learning progress tracking
- **Schedules**: Class scheduling
- **AIFeedback**: AI-generated lesson plans

## 🚀 Available Scripts

```bash
# Development
npm run dev          # Start with nodemon and auto-reload

# Production
npm start           # Start production server
npm run build       # Generate Prisma client and push schema
npm run build-prod  # Deploy database migrations

# Database
npx prisma studio   # Open Prisma Studio for database management
npx prisma generate # Generate Prisma client
npx prisma db push  # Push schema changes to database
```

## 🧪 Testing the API

### Quick Test with cURL

```bash
# 1. Register a new user
curl -X POST http://localhost:3001/api-v1/auth/register \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test Teacher",
    "email": "teacher@test.com",
    "password": "password123"
  }'

# 2. Login
curl -X POST http://localhost:3001/api-v1/auth/login \
  -H "Content-Type: application/json" \
  -d '{
    "email": "teacher@test.com",
    "password": "password123"
  }'

# 3. Use the returned JWT token for authenticated requests
curl -X GET http://localhost:3001/api-v1/subjects \
  -H "Authorization: Bearer YOUR_JWT_TOKEN"
```

## 🔧 Configuration Options

### AI Model Settings
- **Model**: Gemini 2.0 Flash Exp
- **Temperature**: 0.8 (balanced creativity)
- **Max Tokens**: 8192 (comprehensive responses)
- **Retry Attempts**: 3 (automatic retry on failure)

### File Upload Settings
- **Max File Size**: 5MB
- **Supported Formats**: Images, documents
- **Upload Directory**: `./uploads`

## 🐛 Troubleshooting

### Common Issues

1. **Database Connection Error**
   - Verify PostgreSQL is running
   - Check DATABASE_URL in .env file
   - Ensure database exists

2. **AI Generation Fails**
   - Verify GOOGLE_GENERATIVE_AI_API_KEY is set
   - Check API key permissions
   - Monitor API rate limits

3. **JWT Authentication Issues**
   - Verify JWT_SECRET is set
   - Check token expiration
   - Ensure proper Authorization header format

### Logs
Check the console output for detailed error messages and debugging information.


## 📄 License

This project is created for educational purposes as part of a Hack2Build.

## 👨‍💻 Team

- **Developer**: [Micael Cardona Espindola]
- **Hackathon**: [Hack2Build]
- **Date**: [8/23/2025]

- **Developer**: [Diego Oliver Barrido]
- **Hackathon**: [Hack2Build]
- **Date**: [8/23/2025]

- **Developer**: [Moises Cisneros]
- **Hackathon**: [Hack2Build]
- **Date**: [8/23/2025]

## 🎉 What We Built

This hackathon project demonstrates:

- **AI Integration**: Seamless integration with Google's Gemini AI for educational content generation
- **Modern Architecture**: Clean, scalable Node.js backend with Prisma ORM
- **Security**: JWT authentication and role-based access control
- **Documentation**: Comprehensive API documentation with Swagger
- **Database Design**: Well-structured PostgreSQL schema for educational data
- **Blockchain Ready**: Infrastructure for blockchain integration
- **Real-time Features**: WebSocket support for live updates
- **File Management**: Secure file upload and management system

The platform successfully combines cutting-edge AI technology with traditional educational management, creating a powerful tool for modern education.

---