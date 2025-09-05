
# Technical Evaluation API

> **A complete RESTful API built with Node.js and NestJS fulfilling all technical requirements**

A production-ready REST API developed with NestJS that demonstrates full-stack development capabilities including CRUD operations, JWT authentication, database integration, comprehensive testing, and complete documentation.

## 📋 **Technical Requirements Fulfilled**

This project successfully implements all specified requirements:

### ✅ **RESTful API with NestJS**
- **Resource**: Products (complete CRUD operations)
- **Framework**: Node.js with NestJS
- **Architecture**: Modular, scalable, and maintainable structure

### ✅ **Database Integration**
- **Database**: MySQL with TypeORM
- **Schema Design**: Clean, normalized database schema
- **Entities**: Product and User entities with proper relationships
- **Async Queries**: Full async/await implementation for all database operations
- **Auto-sync**: Database synchronization enabled for development

### ✅ **JWT Authentication**
- **Protected Routes**: All CRUD operations require authentication
- **Public Routes**: Login and registration endpoints
- **Global Guard**: JWT authentication applied globally with @Public decorator override
- **Token Management**: Secure JWT token generation and validation

### ✅ **Testing**
- **Unit Tests**: Controller and service unit tests with mocking
- **Integration Tests**: E2E tests for complete API workflows
- **Framework**: Jest testing framework
- **Coverage**: Test coverage reporting included

### ✅ **API Documentation**
- **Swagger/OpenAPI**: Complete API documentation
- **Interactive**: Live API explorer at `/api` endpoint
- **Detailed**: All endpoints, schemas, and examples documented

### ✅ **Code Quality**
- **ESLint**: Configured and applied
- **Prettier**: Code formatting enforced
- **File Structure**: Clean, modular architecture
- **TypeScript**: Full type safety implementation
- **Clean Code**: Maintainable and readable codebase

## 🚀 Features

- **Complete CRUD API**: Create, Read, Update, Delete operations for Products
- **JWT Authentication**: Secure login/registration with token-based auth
- **MySQL Database**: Production-ready database with TypeORM
- **Swagger Documentation**: Interactive API documentation
- **Comprehensive Testing**: Unit and E2E tests
- **Code Quality**: ESLint + Prettier configured
- **Environment Configuration**: Configurable via environment variables
- **Error Handling**: Proper exception handling and error responses

## 📋 Prerequisites

- Node.js (v18 or higher)
- pnpm (v8 or higher)
- MySQL (v8 or higher)

## 🔧 Installation

1. **Clone the repository**
```bash
git clone https://github.com/jeffercbs/technical-evaluation.git
cd technical-evaluation
```

2. **Install dependencies**
```bash
pnpm install
```

3. **Configure environment variables**
```bash
# Create .env file in the project root
cp .env.example .env
```

Configure the variables in `.env`:
```env
DB_USER=your_username
DB_PASSWORD=your_password
DB_HOST=localhost
DB_PORT=3306
DB_DB=technical_evaluation
```

4. **Configure database**
```sql
CREATE DATABASE technical_evaluation;
```

## 🚀 Usage

### Development
```bash
# Development mode with hot reload
pnpm run start:dev

# Debug mode
pnpm run start:debug
```

### Production
```bash
# Build project
pnpm run build

# Run in production
pnpm run start:prod
```

### Testing
```bash
# Unit tests
pnpm run test

# Tests in watch mode
pnpm run test:watch

# Tests with coverage
pnpm run test:cov

# E2E tests
pnpm run test:e2e
```

## 📚 API Documentation

Once the server is started, Swagger documentation will be available at:
```
http://localhost:3000/api
```

## 🔗 Endpoints

### Authentication
- `POST /auth/register` - Register new user
- `POST /auth/login` - User login
- `GET /auth/profile` - Get user profile (requires authentication)

### Products
- `GET /products` - List all products
- `GET /products/:id` - Get product by ID
- `POST /products` - Create new product (requires authentication)
- `PATCH /products/:id` - Update product (requires authentication)
- `DELETE /products/:id` - Delete product (requires authentication)

## 📝 Usage Examples

### User Registration
```bash
curl -X POST http://localhost:3000/auth/register \
  -H "Content-Type: application/json" \
  -d '{
    "username": "testuser",
    "password": "password123"
  }'
```

### Login
```bash
curl -X POST http://localhost:3000/auth/login \
  -H "Content-Type: application/json" \
  -d '{
    "username": "testuser",
    "password": "password123"
  }'
```

### Create Product
```bash
curl -X POST http://localhost:3000/products \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer YOUR_JWT_TOKEN" \
  -d '{
    "name": "Example Product",
    "price": 29.99,
    "description": "Product description",
    "imageUrl": "https://example.com/image.jpg"
  }'
```

### List Products
```bash
curl -X GET http://localhost:3000/products \
  -H "Authorization: Bearer YOUR_JWT_TOKEN"
```

## 🏗️ **Database Schema Design**

The application uses a clean, normalized MySQL database schema:

### **Products Table**
```sql
CREATE TABLE product (
  id VARCHAR(36) PRIMARY KEY,           -- UUID primary key
  name VARCHAR(255) NOT NULL,           -- Product name
  price DECIMAL(10,2) NOT NULL,         -- Product price with 2 decimal precision
  description TEXT NOT NULL,            -- Product description
  imageUrl VARCHAR(500) NOT NULL,       -- Product image URL
  createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);
```

### **Users Table**
```sql
CREATE TABLE user (
  id VARCHAR(36) PRIMARY KEY,           -- UUID primary key
  username VARCHAR(255) UNIQUE NOT NULL, -- Unique username
  password VARCHAR(255) NOT NULL,       -- User password (should be hashed in production)
  createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);
```

## 🏗️ **Project Structure**

```
src/
├── auth/                 # Authentication module
│   ├── auth.controller.ts    # Auth controller
│   ├── auth.service.ts       # Auth service
│   ├── auth.guard.ts         # JWT Guard
│   └── auth.decorator.ts     # @Public decorator
├── products/             # Products module
│   ├── dto/                  # Data Transfer Objects
│   ├── entities/             # TypeORM entities
│   ├── products.controller.ts
│   └── products.service.ts
├── users/                # Users module
│   ├── dto/
│   ├── entities/
│   └── users.service.ts
├── database/             # Database configuration
│   ├── database.module.ts
│   └── database.provider.ts
├── app.module.ts         # Main module
├── main.ts              # Entry point
└── constans.ts          # Global constants
```

```

## � **Authentication & Security**

### **JWT Implementation**
- **Algorithm**: HS256 (HMAC with SHA-256)
- **Token Expiration**: 60 seconds (configurable)
- **Global Protection**: All endpoints protected by default
- **Public Routes**: Marked with `@Public()` decorator

### **Security Features**
- **Global Guards**: Automatic JWT validation on all routes
- **Environment Variables**: Sensitive data stored in .env files
- **Error Handling**: Secure error messages without data leakage
- **CORS**: Cross-origin resource sharing enabled

### **Protected Endpoints**
- `GET /products` - Requires valid JWT
- `POST /products` - Requires valid JWT
- `PATCH /products/:id` - Requires valid JWT
- `DELETE /products/:id` - Requires valid JWT
- `GET /auth/profile` - Requires valid JWT

### **Public Endpoints**
- `POST /auth/register` - User registration
- `POST /auth/login` - User authentication

## 🧪 **Testing Strategy**

### **Unit Tests**
Located in: `src/**/*.spec.ts`
```bash
# Run unit tests
pnpm run test

```


## 📚 **API Documentation**

### **Swagger/OpenAPI Integration**
- **URL**: `http://localhost:3000/api`
- **Interactive**: Live API testing interface
- **Complete Documentation**: All endpoints, schemas, and examples
- **Auto-generated**: Synchronized with code changes

### **API Endpoints Documentation**

#### **Authentication Endpoints**
```typescript
POST /auth/register
POST /auth/login
GET  /auth/profile
```

#### **Products CRUD Endpoints**
```typescript
GET    /products      // List all products
GET    /products/:id  // Get product by ID
POST   /products      // Create new product
PATCH  /products/:id  // Update product
DELETE /products/:id  // Delete product

## 🗄️ Data Models

### User
```typescript
{
  id: string (UUID)
  username: string
  password: string
  createdAt: Date
  updatedAt: Date
}
```

### Product
```typescript
{
  id: string (UUID)
  name: string
  price: number (decimal 10,2)
  description: string
  imageUrl: string
  createdAt: Date
  updatedAt: Date
}
```

### **Prettier Configuration**
- **Auto-formatting**: Code formatting on save
- **Consistent Style**: Enforced across the entire codebase
- **Integration**: Works with ESLint for optimal code quality

### **TypeScript Configuration**
- **Strict Mode**: Full type safety enabled
- **Path Mapping**: Clean import paths with `@/` alias
- **Decorators**: Experimental decorators enabled for NestJS

### **File Structure Standards**
```
src/
├── auth/                 # Authentication module
│   ├── dto/              # Data Transfer Objects
│   ├── guards/           # Route guards
│   ├── decorators/       # Custom decorators
│   └── *.spec.ts         # Unit tests
├── products/             # Products module
│   ├── dto/              # DTOs for product operations
│   ├── entities/         # TypeORM entities
│   └── *.spec.ts         # Unit tests
├── users/                # Users module
├── database/             # Database configuration
└── common/               # Shared utilities
```

## 🚀 **Quick Start Guide**

### **1. Prerequisites**
```bash
# Required software
Node.js >= 18.0.0
pnpm >= 8.0.0
MySQL >= 8.0.0
```

### **2. Installation**
```bash
# Clone repository
git clone <repository-url>
cd technical-evaluation

# Install dependencies
pnpm install
```

### **3. Environment Setup**
```bash
# Copy environment template
cp .env.dev .env

# Configure your .env file
DB_USER=your_mysql_username
DB_PASSWORD=your_mysql_password
DB_HOST=localhost
DB_PORT=3306
DB_DB=technical_evaluation
```

### **4. Database Setup**
```sql
-- Create database
CREATE DATABASE technical_evaluation;

-- Tables will be auto-created by TypeORM synchronize
```

### **5. Run Application**
```bash
# Development mode
pnpm run start:dev

# Production mode
pnpm run build
pnpm run start:prod
```

### **6. Access Points**
- **API**: `http://localhost:3000`
- **Swagger Documentation**: `http://localhost:3000/api`
- **Health Check**: `http://localhost:3000` (returns "Hello World!")

## 🧪 **Testing the API**

### **Authentication Flow**
```bash
# 1. Register a new user
curl -X POST http://localhost:3000/auth/register \
  -H "Content-Type: application/json" \
  -d '{"username": "testuser", "password": "testpass123"}'

# Response: {"access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."}

# 2. Login (alternative)
curl -X POST http://localhost:3000/auth/login \
  -H "Content-Type: application/json" \
  -d '{"username": "testuser", "password": "testpass123"}'
```

### **Products CRUD Operations**
```bash
# Create Product (requires JWT)
curl -X POST http://localhost:3000/products \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer YOUR_JWT_TOKEN" \
  -d '{
    "name": "Sample Product",
    "price": 29.99,
    "description": "A great product for testing",
    "imageUrl": "https://example.com/image.jpg"
  }'

# Get All Products (requires JWT)
curl -X GET http://localhost:3000/products \
  -H "Authorization: Bearer YOUR_JWT_TOKEN"

# Get Product by ID (requires JWT)
curl -X GET http://localhost:3000/products/{product-id} \
  -H "Authorization: Bearer YOUR_JWT_TOKEN"

# Update Product (requires JWT)
curl -X PATCH http://localhost:3000/products/{product-id} \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer YOUR_JWT_TOKEN" \
  -d '{"price": 39.99}'

# Delete Product (requires JWT)
curl -X DELETE http://localhost:3000/products/{product-id} \
  -H "Authorization: Bearer YOUR_JWT_TOKEN"
```

## �️ **Technology Stack**

| Category | Technology | Purpose |
|----------|------------|---------|
| **Framework** | NestJS | Node.js framework for scalable server-side applications |
| **Language** | TypeScript | Type-safe JavaScript with modern features |
| **Database** | MySQL | Relational database for data persistence |
| **ORM** | TypeORM | Object-relational mapping with entity management |
| **Authentication** | JWT | JSON Web Tokens for stateless authentication |
| **Documentation** | Swagger/OpenAPI | Interactive API documentation |
| **Testing** | Jest | JavaScript testing framework |
| **E2E Testing** | Supertest | HTTP assertion library for testing |
| **Linting** | ESLint | Code quality and style enforcement |
| **Formatting** | Prettier | Code formatting and consistency |
| **Environment** | dotenv | Environment variable management |

## 📦 **Available Scripts**

```bash
# Development
pnpm run start:dev      # Start in development mode with hot reload
pnpm run start:debug    # Start in debug mode
pnpm run start          # Start in production mode

# Building
pnpm run build          # Build for production

# Testing
pnpm run test          # Run unit tests

# Code Quality
pnpm run lint          # Run ESLint
pnpm run format        # Format code with Prettier
```

## 📊 **Project Metrics**

- **Total Endpoints**: 8 (3 auth + 5 products)
- **Database Tables**: 2 (users, products)
- **Test Coverage**: Unit + Integration tests
- **Code Quality**: ESLint + Prettier configured
- **Documentation**: 100% API coverage with Swagger

## 🎯 **Compliance Verification**

### **✅ Requirement Checklist**

- [x] **RESTful API with Node.js/NestJS**: Complete CRUD operations for Products
- [x] **MySQL Database Integration**: TypeORM with proper schema design
- [x] **JWT Authentication**: Secure authentication for protected routes
- [x] **Unit Tests**: Controller and service tests with Jest
- [x] **Integration Tests**: E2E tests covering complete workflows
- [x] **Swagger Documentation**: Complete API documentation at `/api`
- [x] **ESLint/Prettier**: Code quality tools configured and applied
- [x] **Clean Architecture**: Modular structure with clear separation
- [x] **Setup Documentation**: Comprehensive README for clean environment setup