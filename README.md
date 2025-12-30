# 👗 Fashion Adda – Premium Fashion E-Commerce Store (Frontend)

**Fashion Adda** is a modern and responsive fashion e-commerce web application frontend built with **React** and **Tailwind CSS**.  
It provides a smooth and engaging shopping experience and communicates with a secure **Spring Boot REST API** backend.

---

## 🖼️ User Interface (Screenshots)

🔗 **UI Preview:**  
https://drive.google.com/file/d/1V44Tc7tooDNMmkS_HdBXael-0NTEAbau/view?usp=drive_link

---

## 🚀 Features

### 👤 User Side
- **Secure Authentication:** User registration and login using JWT-based authentication.
- **Interactive UI:** Clean, modern design with Tailwind CSS and smooth UI components.
- **Product Discovery:** Search and browse the latest fashion products easily.
- **Shopping Cart:** Add/remove products and manage quantities seamlessly.
- **Checkout & Payments:** Razorpay integration for secure online payments.
- **Order History:** View and track previous orders.

---

### 🛡️ Admin Side
- **Product Management:** Add, update, and delete fashion products.
- **Inventory Control:** Manage product listings efficiently from the admin panel.

---

## 🛠️ Tech Stack

| Layer      | Technology |
|-----------|-----------|
| Frontend  | React.js, Tailwind CSS, Lucide Icons, Carousel Components |
| Backend   | Spring Boot, Spring Security, JWT |
| Database  | MySQL, Hibernate / Spring Data JPA |
| Payment   | Razorpay Payment Gateway |
| Build     | NPM, Maven |

---

## 📂 Project Structure

Fashion-Adda/
├── frontend/ # React application (UI & Client-side logic)
│ ├── src/
│ ├── public/
│ └── package.json
│
└── backend/ # Spring Boot application (REST API & Security)
├── src/
└── pom.xml


## ⚙️ Installation & Setup

### 1️⃣ Prerequisites
- Node.js (v14+)
- Java JDK 17 or higher
- MySQL Server
- Maven

---

### 2️⃣ Backend Setup
1. Navigate to the `backend` folder.
2. Update `src/main/resources/application.properties` with your database details:

```properties
spring.datasource.url=jdbc:mysql://localhost:3306/fashion_adda_db
spring.datasource.username=your_username
spring.datasource.password=your_password
spring.jpa.hibernate.ddl-auto=update
Run the backend:

bash
Copy code
mvn spring-boot:run
3️⃣ Frontend Setup
Navigate to the frontend folder:

backend Repo: https://github.com/Jitendra-Kumar7078/e-commerce-backend (Pull this repo for project setup)


bash
Copy code
cd frontend
Install dependencies:

bash
Copy code
npm install
Start the development server:

bash
Copy code
npm start
Open in browser:


http://localhost:5454
🔐 Security
JWT-based authentication using Spring Security.

Admin dashboard is restricted to ADMIN role users.

Checkout and order features are secured for authenticated users.

💳 Payment Integration
Integrated with Razorpay Payment Gateway.

Requires RAZORPAY_KEY_ID and RAZORPAY_KEY_SECRET configuration in the backend.

Enables secure and real-time payment processing.

📌 Future Enhancements
Wishlist functionality

Product reviews & ratings

Order tracking system

Deployment on cloud platforms (Vercel / Render)

Improved admin analytics dashboard

👨‍💻 Author
Jitendra Kumar
-the_mahaveer's_umpire

GitHub: https://github.com/Jitendra-Kumar7078

LinkedIn: https://www.linkedin.com/in/jitendra-kumar-b5a208323/

⭐ Support
If you like this project, please give it a ⭐ on GitHub!
