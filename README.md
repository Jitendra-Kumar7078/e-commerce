👗 Fashion Adda - Premium Fashion E-commerce Store
Fashion Adda is a full-stack e-commerce web application designed for a seamless shopping experience. It features a modern, responsive UI built with React and Tailwind CSS, backed by a powerful and secure Spring Boot REST API.

🚀 Features
👤 User Side
Secure Authentication: User registration and login powered by JWT (JSON Web Tokens) and Spring Security.

Interactive UI: High-quality product carousels and a clean layout using Tailwind CSS.

Product Discovery: Easy-to-use search functionality to find the latest fashion trends.

Shopping Cart: Add/remove items and manage quantities effortlessly.

Checkout & Payments: Integrated with Razorpay for secure and smooth transactions.

Order History: Users can track and view their previous fashion purchases.

🛡️ Admin Side
Product Management: Add, update, or delete fashion products from the inventory.

🛠️ Tech StackLayerTechnologyFrontendReact.js, Tailwind CSS, Lucide Icons, Carousel ComponentsBackendJava, Spring Boot, Spring Security, JWTDatabaseMySQL, Hibernate / Spring Data JPAPaymentRazorpay GatewayBuild ToolMaven, NPM

Fashion-Adda/
├── frontend/             # React application (Tailwind & UI)
│   ├── src/
│   ├── public/
│   └── package.json
└── backend/              # Spring Boot application (API & Security)
    ├── src/
    └── pom.xml


    ⚙️ Installation & Setup
1. Prerequisites
Node.js (v14+)

Java JDK 17 or higher

MySQL Server

Maven

2. Backend Setup
Navigate to the backend folder.

Update src/main/resources/application.properties with your MySQL credentials:

Properties

spring.datasource.url=jdbc:mysql://localhost:3306/fashion_adda_db //(use database name whatever you created in your Server or local machine)
spring.datasource.username=your_username
spring.datasource.password=your_password
spring.jpa.hibernate.ddl-auto=update

Run the application:

Bash

mvn spring-boot:run

3. Frontend Setup
Navigate to the frontend folder:

Bash

cd frontend

Install dependencies:

Bash

npm install

Start the development server:

Bash

npm start

🔐 Security
The application uses Spring Security with JWT to protect sensitive routes. The Admin dashboard is only accessible to users with the ADMIN role, while the checkout process is secured for registered USERS.

💳 Payment Integration
This project uses the Razorpay API for payment processing. To use it, ensure you have your RAZORPAY_KEY_ID and RAZORPAY_KEY_SECRET configured in the backend environment.

Order Tracking: Monitor and manage customer orders in real-time.

