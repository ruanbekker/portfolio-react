
# **📇 Portfolio Website (React)**

🚀 A modern portfolio website built with **React** (frontend) and **Flask or FastAPI** (backend) for handling contact form submissions via **Mailgun**.

![Portfolio Screenshot](https://github.com/user-attachments/assets/f551f109-9253-4cdc-9a42-f12f62dfbde0)

## **📌 Features**

- 🌗 **Dark Mode Support**
- 🏗 **Modern UI with Tailwind CSS**
- 📄 **Dynamic Resume Page**
- 📩 **Contact Form**
- 🔗 **Smooth Hover Effects for Links**
- 🛠 **Dockerized for Easy Deployment**

## **🛠 Tech Stack**

### **Frontend**

- ⚛️ React (Vite)
- 🎨 Tailwind CSS
- 🌙 Dark Mode Toggle

## **📂 Project Structure**

```bash
portfolio-react/
├── Dockerfile
├── docker-compose.yaml          # Docker compose
└── src
    ├── App.jsx                  # Main react app
    ├── components               # React components
    │   ├── Contact.jsx          
    │   ├── DarkModeToggle.jsx
    │   ├── Navbar.jsx
    │   ├── Profile.jsx
    │   ├── Projects.jsx
    │   ├── Resume.jsx
    │   └── TechStack.jsx
    ├── data
    │   └── resume.json          # Resume data
    ├── index.css
    ├── main.jsx                 # Entry point
    └── public
        └── profile.png          # Profile picture
```

## **🚀 Getting Started**

### **1️⃣ Clone the Repository**

```bash
git clone https://github.com/your-username/portfolio-website.git
cd portfolio-website
```

## **🐳 Running with Docker**

To run everything in **Docker**, use:

```bash
docker-compose up --build
```
The site will be available at **http://localhost:3000**.

## **📜 License**

This project is open-source under the **MIT License**.

## **🚀 Future Enhancements**

- 📨 Add a database to store contact messages.
- 🎭 Use animations for interactive UI.
- 🏗 Deploy to **Vercel + Railway**.


