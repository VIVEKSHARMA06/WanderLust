# 🚀 Project  

### **Version:** 1.0.0  

<br>

## 📌 Project Description  

This project is a **full-stack web application** built using **Node.js, Express.js, and MongoDB**.  
It provides **user authentication, data management, and cloud storage capabilities**.  
The application follows a **modular and scalable architecture**, making it easy to extend and maintain.  

<br>

## 🔑 **Key Functionalities**  

- 🔐 **User authentication** (Sign-up, Login, Logout) using Passport.js  
- 📂 **File upload & cloud storage** with Cloudinary integration  
- 🎨 **Dynamic templating** using EJS  
- 💾 **Database management** with MongoDB & Mongoose  
- 🔄 **Middleware-based request handling**  
- 🛠 **Error handling & validation** using Joi  
- 📊 **Session management** with express-session and connect-mongo  

<br>


## 📁 Project Folder Structure  

```plaintext

Root/  
│── Project/  
│   ├── .gitignore                 # Files to ignore in version control  
│   ├── app.js                      # Main entry point of the application  
│   ├── cloudConfig.js               # Cloudinary configuration for file uploads  
│   ├── middleware.js                 # Custom middleware functions  
│   ├── package.json                  # Project metadata & dependencies  
│   ├── package-lock.json              # Lockfile for dependencies  
│   ├── schema.js                     # Database schema definitions  
│   ├── init/                         # Initialization scripts  
│   │   ├── data.js                  # Sample data for seeding the database  
│   │   ├── index.js                  # Initialization logic  
│   ├── models/                       # Database models (Mongoose)  
│   ├── public/                       # Static assets (CSS, JavaScript, images)  
│   ├── routes/                       # API and application routes  
│   ├── utils/                        # Helper functions and utilities  
│   ├── views/                        # EJS templates for dynamic rendering
```

<br>

## 🛠 Tech Stack

| 🚀 **Technology**   | 📜 **Description**                                        |
|---------------------|-----------------------------------------------------------|
| **Node.js**         | JavaScript runtime for server-side development            |
| **Express.js**      | Web framework for building REST APIs                      |
| **MongoDB**         | NoSQL database for storing application data               |
| **Mongoose**        | ODM (Object Data Modeling) for MongoDB                    |
| **EJS**             | Template engine for dynamic rendering                     |
| **Cloudinary**      | Cloud storage for image uploads                           |
| **Passport.js**     | Authentication middleware for Node.js                     |
| **Joi**             | Data validation framework                                 |
| **Multer**          | Middleware for handling file uploads                      |
| **Nodemon**         | Development tool for auto-reloading                       |

<br>

## 📦 Dependencies

This project uses the following **npm packages**:

- **cloudinary**: Cloud storage integration  
- **connect-flash**: Flash messages for user feedback  
- **connect-mongo**: Store session data in MongoDB  
- **dotenv**: Environment variable management  
- **ejs**: Template rendering engine  
- **express**: Web framework  
- **express-session**: Session management  
- **joi**: Schema validation  
- **method-override**: Support for PUT/DELETE requests  
- **mongoose**: MongoDB ORM  
- **multer**: File upload handling  
- **multer-storage-cloudinary**: Cloudinary storage for uploaded files  
- **passport**: Authentication middleware  
- **passport-local**: Local authentication strategy  
- **passport-local-mongoose**: Simplifies password hashing

<br>

## 🚀 Installation & Setup

### 1️⃣ Clone the repository
```sh
git clone https://github.com/your-repo/project.git
```

### 2️⃣ Navigate to the project directory
```sh
cd Project
```

### 3️⃣ Install dependencies
```sh
npm install
```

### 4️⃣ Set up environment variables
Create a .env file in the root directory and add:
```ini
MONGO_URI=your_mongodb_connection_string
CLOUDINARY_CLOUD_NAME=your_cloudinary_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
SESSION_SECRET=your_session_secret
```

### 5️⃣ Start the application
```sh
npm start
```
Or run in development mode with automatic restart:

```sh
npm run dev
```
<br>

## 🌐 API Routes

### 🔹 Authentication Routes

| 🛠 **Method** | 🔗 **Route**   | 📜 **Description**         |
|--------------|--------------|----------------------------|
| **GET**      | `/register`  | Render registration page  |
| **POST**     | `/register`  | Register a new user       |
| **GET**      | `/login`     | Render login page         |
| **POST**     | `/login`     | Authenticate user         |
| **GET**      | `/logout`    | Log out the user          |

<br>

### 🔹 File Upload Routes

| 🛠 **Method** | 🔗 **Route**  | 📜 **Description**          |
|--------------|-------------|-----------------------------|
| **GET**      | `/upload`   | Render file upload page    |
| **POST**     | `/upload`   | Upload a file to Cloudinary |

<br>


### 🔹 Data Management Routes

| 🛠 **Method**  | 🔗 **Route**   | 📜 **Description**    |
|--------------|---------------|-----------------------|
| **GET**      | `/data`       | Fetch all data       |
| **POST**     | `/data`       | Add new data         |
| **PUT**      | `/data/:id`   | Update data         |
| **DELETE**   | `/data/:id`   | Delete data         |

<br>


## 🎯 Features  

✔ **Secure Authentication** using Passport.js  

✔ **Role-based Access Control** (if applicable)  

✔ **Cloud Storage Integration** with Cloudinary  

✔ **RESTful API** for handling user requests  

✔ **Form Validation** using Joi  

✔ **Custom Error Handling** for better debugging  

✔ **EJS Templating** for dynamic frontend views  

✔ **Session Management** using MongoDB  

<br>

## 📬 Contact  
📧 **Email:** therealviveksharma@gmail.com  
🐙 **GitHub:** https://github.com/VIVEKSHARMA06  

<br>

## 🎉 Thank You!  
🚀 We appreciate your interest in this project!  
🌟 If you like it, consider giving it a **star** on GitHub.  
💡 Suggestions, feedback, and improvements are always welcome!  
<br>
Happy coding! 😊  
