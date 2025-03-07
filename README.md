
# **📇 Portfolio Website (React)**

🚀 A modern portfolio website built with **React**.

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

## **🐳 Running with Docker**

To run everything in **Docker**, use:

```bash
docker-compose up --build
```
The site will be available at **http://localhost:3000**.

## **📸 Screenshots**

Homepage:

![](https://github.com/user-attachments/assets/f551f109-9253-4cdc-9a42-f12f62dfbde0)

Resume Overview:

![](https://github.com/user-attachments/assets/aeacf41f-557a-454b-89ae-bdcbcdd03bc4)

Resume Skills:

![](https://github.com/user-attachments/assets/52fd3c46-8ee1-4ff6-b3bf-43ae43ef9276)

Contact:

![](https://github.com/user-attachments/assets/60138a25-45bd-446f-800f-da602bfbd538)

## **📜 License**

This project is open-source under the **MIT License**.

## **🚀 Future Enhancements**

- 📨 Add a database to store contact messages.
- 🎭 Use animations for interactive UI.
- 🏗 Deploy to **Vercel + Railway**.


