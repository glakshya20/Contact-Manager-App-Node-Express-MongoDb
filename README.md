# 📇 Contact Manager API

A full-featured backend REST API built with **Node.js**, **Express.js**, and **MongoDB** that handles user registration, login, authentication (via JWT), and contact management with full CRUD operations. Includes secure password hashing and centralized error handling using Express middleware.

---

## 🚀 Features

- 🌐 **Express.js** server with modular routing
- 🔐 **User Authentication** (Register & Login)
- 🛡️ **JWT**-based secure route protection
- 🔒 **Password Hashing** with bcrypt
- 📦 **MongoDB** for data persistence (via Mongoose)
- 📋 **CRUD** for contacts (Create, Read, Update, Delete)
- ⚙️ **Middleware** for error handling & token validation
- ---

## 🧱 Tech Stack

- **Backend:** Node.js, Express.js
- **Database:** MongoDB (Mongoose ODM)
- **Auth:** JWT, bcrypt
- **Tools:** Thunder Client for API testing, dotenv for env config

---
## 📁 Project Structure

mycontacts-backend/
│
├── config/
│ └── dbConnection.js # MongoDB connection setup

│

├── controllers/
│ ├── contactController.js # Handles contact CRUD logic
│ └── userController.js # Handles auth logic
│

├── middleware/
│ ├── validateTokenHandler.js # JWT validation
│ └── errorHandler.js # Central error handler

│

├── models/
│ ├── contactModel.js
│ └── userModel.js
│

├── routes/
│ ├── contactRoutes.js
│ └── userRoutes.js
│

├── .env
├── server.js
└── package.json

📮 API Endpoints
| Method | Endpoint              | Description         |
| ------ | --------------------- | ------------------- |
| POST   | `/api/users/register` | Register new user   |
| POST   | `/api/users/login`    | Login and get token |

📇 Contact Routes (Protected)
| Method | Endpoint            | Description        |
| ------ | ------------------- | ------------------ |
| GET    | `/api/contacts`     | Get all contacts   |
| POST   | `/api/contacts`     | Create new contact |
| GET    | `/api/contacts/:id` | Get single contact |
| PUT    | `/api/contacts/:id` | Update a contact   |
| DELETE | `/api/contacts/:id` | Delete a contact   |





```bash
git clone https://github.com/glakshya20/Contact-Manager-App-Node-Express-MongoDb
cd Contact-Manager-App-Node-Express-MongoDb
Install Dependencies:
npm install

create .env file for PORT , MONGO_URI and JWT_SCRET_KEY
TO run the server:
npm run dev


