# 🚀 Prasadev Portfolio

<div align="center">

![Portfolio Preview](https://img.shields.io/badge/Portfolio-Live-brightgreen?style=for-the-badge)
![React](https://img.shields.io/badge/React-19.0.0-61DAFB?style=for-the-badge&logo=react)
![Three.js](https://img.shields.io/badge/Three.js-0.173.0-000000?style=for-the-badge&logo=three.js)
![Vite](https://img.shields.io/badge/Vite-6.1.0-646CFF?style=for-the-badge&logo=vite)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-4.0.7-38B2AC?style=for-the-badge&logo=tailwind-css)

**A modern, interactive 3D portfolio showcasing full-stack development expertise**

[🌐 Live Demo](https://your-portfolio-url.com) • [📧 Contact](mailto:pras.ari69@gmail.com) • [💼 LinkedIn](https://linkedin.com/in/your-profile)

</div>

---

## 📚 Table of Contents

- [✨ Features](#-features)
- [🛠️ Tech Stack](#️-tech-stack)
- [🚀 Quick Start](#-quick-start)
- [📁 Project Structure](#-project-structure)
- [🎨 Key Components](#-key-components)
- [📧 Contact Setup](#-contact-setup)
- [🚀 Deployment](#-deployment)
- [📄 License](#-license)

---

## ✨ Features

### 🎨 **Interactive 3D Experience**
- **Three.js Integration** - Immersive 3D astronaut model with mouse-responsive animations
- **Smooth Animations** - GSAP-powered transitions and scroll-triggered effects
- **Responsive Design** - Optimized for all devices and screen sizes

### 💼 **Professional Showcase**
- **Dynamic Project Gallery** - Interactive project cards with detailed modal views
- **Enhanced Timeline** - Work experience with skills badges and achievements
- **Client Testimonials** - Real testimonials with star ratings and project context
- **Tech Stack Visualization** - Animated skill showcase with modern frameworks

### 🚀 **Modern Development**
- **React 19** - Latest React features with concurrent rendering
- **Vite Build Tool** - Lightning-fast development and optimized production builds
- **TailwindCSS 4.0** - Modern utility-first CSS framework
- **EmailJS Integration** - Functional contact form with email notifications

---

## 🛠️ Tech Stack

### **Frontend**
- **React 19.0.0** - Modern React with latest features
- **Three.js 0.173.0** - 3D graphics and animations
- **@react-three/fiber** - React renderer for Three.js
- **@react-three/drei** - Useful helpers for React Three Fiber
- **Motion 12.4.5** - Production-ready motion library

### **Styling & UI**
- **TailwindCSS 4.0.7** - Utility-first CSS framework
- **GSAP** - Professional-grade animation library
- **Cobe** - Interactive globe component
- **Responsive Design** - Mobile-first approach

### **Development Tools**
- **Vite 6.1.0** - Next generation frontend tooling
- **ESLint** - Code linting and formatting
- **React DevTools** - Development debugging

### **Integrations**
- **EmailJS** - Contact form email service
- **Maath** - Math utilities for 3D graphics
---

## 🚀 Quick Start

### Prerequisites
- **Node.js** (v18 or higher)
- **npm** or **yarn**

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/prassaaa/prasadev-portfolio.git
   cd prasadev-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   ```
   http://localhost:5173
   ```

---

## 📁 Project Structure

```
prasadev-portfolio/
├── public/
│   ├── assets/
│   │   ├── icons/          # SVG icons and graphics
│   │   ├── logos/          # Technology logos
│   │   └── socials/        # Social media icons
│   └── models/             # 3D model files
├── src/
│   ├── components/         # Reusable React components
│   │   ├── Timeline.jsx    # Work experience timeline
│   │   ├── Marquee.jsx     # Scrolling testimonials
│   │   ├── Globe.jsx       # Interactive 3D globe
│   │   └── ...
│   ├── sections/           # Main page sections
│   │   ├── Hero.jsx        # Landing section with 3D model
│   │   ├── About.jsx       # About me section
│   │   ├── Projects.jsx    # Project showcase
│   │   ├── Experiences.jsx # Work experience
│   │   ├── Testimonial.jsx # Client testimonials
│   │   ├── Contact.jsx     # Contact form
│   │   └── Footer.jsx      # Footer section
│   ├── constants/          # Static data and configurations
│   │   └── index.js        # Projects, experiences, testimonials
│   ├── App.jsx             # Main application component
│   ├── main.jsx            # Application entry point
│   └── index.css           # Global styles and utilities
├── package.json            # Dependencies and scripts
├── vite.config.js          # Vite configuration
├── tailwind.config.js      # TailwindCSS configuration
└── README.md               # Project documentation
```

---

## 🎨 Key Components

### **Hero Section**
- Interactive 3D astronaut model
- Animated text with gradient effects
- Mouse-responsive camera movement
- Smooth scroll indicators

### **About Section**
- Interactive globe showing location
- Draggable skill cards
- Tech stack visualization
- Professional introduction

### **Projects Section**
- Featured project spotlight
- Interactive project cards
- Modal with detailed information
- Technology tags and links

### **Experience Timeline**
- Enhanced timeline design
- Skills badges for each role
- Achievement highlights
- Company icons and branding

### **Testimonials**
- Real client testimonials
- Star rating system
- Project context and results
- Smooth marquee animation

### **Contact Form**
- EmailJS integration
- Form validation
- Success/error notifications
- Professional styling

---

## � Contact Setup

To set up the contact form with EmailJS:

1. **Create EmailJS Account**
   - Visit [EmailJS](https://www.emailjs.com/)
   - Create a free account

2. **Create Email Service**
   - Add your email service (Gmail, Outlook, etc.)
   - Note the Service ID

3. **Create Email Template**
   - Create a new template
   - Use these variables: `{{from_name}}`, `{{from_email}}`, `{{message}}`
   - Note the Template ID

4. **Get Public Key**
   - Go to Account → API Keys
   - Copy your Public Key

5. **Update Configuration**
   - Replace the IDs in `src/sections/Contact.jsx`
   - Or use environment variables

---

## 🚀 Deployment

### **Vercel (Recommended)**
```bash
npm install -g vercel
vercel
```

### **Netlify**
```bash
npm run build
# Upload dist folder to Netlify
```

### **GitHub Pages**
```bash
npm install --save-dev gh-pages
npm run build
npm run deploy
```

---

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 🙏 Acknowledgments

- **Three.js** - For amazing 3D capabilities
- **React Three Fiber** - For seamless React integration
- **TailwindCSS** - For rapid UI development
- **EmailJS** - For contact form functionality
- **Vercel** - For hosting and deployment

---

<div align="center">

**Made with ❤️ by Prasetyo Ari Wibowo**

⭐ Star this repo if you found it helpful!

</div>
