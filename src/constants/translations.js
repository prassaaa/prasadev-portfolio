export const translations = {
  en: {
    // Navigation
    nav: {
      home: "Home",
      about: "About",
      services: "Services",
      projects: "Projects",
      experience: "Experience",
      contact: "Contact",
    },

    // Hero Section
    hero: {
      greeting: "Hi, I'm",
      name: "Prass",
      title: "A Developer Dedicated to Crafting",
      subtitle: "Web Solutions",
      tagline:
        "Transforming ideas into powerful digital experiences with cutting-edge technology and innovative design.",
      taglineMobile: "Transforming ideas into powerful digital experiences.",
      building: "Building",
      webApps: "Web Applications",
      viewWork: "View My Work",
      connect: "Let's Connect",
      available: "Available for freelance work",
      availableMobile: "Available for work",
    },

    // About Section
    about: {
      title: "About Me",
      subtitle:
        "Get to know me better - my background, skills, and passion for creating innovative solutions that make a difference.",
      stats: {
        years: "Years Coding",
        skills: "Skills Mastered",
        mindset: "Learning Mindset",
      },
      intro: {
        title: "Hi, I'm Prasetyo Ari Wibowo",
        description:
          "Over the last 4 years, I developed my frontend and backend dev skills to deliver dynamic and software and web applications.",
      },
      timezone: {
        title: "Time Zone",
        description:
          "I'm based in Kediri, East Java, Indonesia, and open to remote work worldwide",
      },
      collaboration: {
        title: "Do you want to start a project together?",
      },
      techstack: {
        title: "Tech Stack",
        description:
          "I specialize in a variety of languages, frameworks, and tools that allow me to build robust and scalable applications",
      },
    },

    // Services Section
    services: {
      title: "What I Offer",
      subtitle:
        "A collection of my professional services, tailored to meet the needs of modern digital projects.",
      data: [
        {
          icon: "/assets/logos/react.svg",
          title: "Interactive Frontend Development",
          description:
            "Building responsive and engaging user interfaces with modern frameworks like React, and creating immersive 3D experiences with Three.js.",
        },
        {
          icon: "/assets/logos/dotnetcore.svg",
          title: "Backend & API Development",
          description:
            "Developing robust and scalable server-side applications and APIs using .NET, ensuring secure and efficient data management.",
        },
        {
          icon: "/assets/logos/auth0.svg",
          title: "Security & System Integration",
          description:
            "Implementing secure authentication systems with Auth0, ensuring data privacy, and integrating various third-party services and APIs.",
        },
        {
          icon: "/assets/logos/blazor.svg",
          title: "Full-Stack Solutions",
          description:
            "From concept to deployment, I provide end-to-end web application development, combining frontend and backend expertise to deliver complete solutions.",
        },
      ],
    },

    // Projects Section
    projects: {
      title: "My Selected Projects",
      subtitle:
        "Explore my latest work showcasing modern web development, innovative solutions, and cutting-edge technologies.",
      featured: "Featured Project",
      stats: {
        completed: "Projects Completed",
        technologies: "Technologies Used",
        satisfaction: "Client Satisfaction",
      },
      data: [
        {
          id: 1,
          title: "E-commerce Platform",
          description:
            "Facilitates purchases from international websites like Amazon and eBay, allowing customers to shop from these sites and have products delivered domestically.",
          subDescription: [
            "Built a scalable application with ASP.NET Core MVC, integrating global platforms like Amazon for domestic delivery.",
            "Implemented secure authentication and database management using ASP.NET Core Identity and Entity Framework Core.",
            "Designed a responsive frontend with Tailwind CSS, enhancing user experience.",
            "Added payment systems, localization, and product filtering for functionality improvements.",
          ],
          href: "#",
          sourceCodeHref: "#",
          logo: "",
          image: "/assets/projects/accessories.jpg",
          tags: [
            {
              id: 1,
              name: "C#",
              path: "/assets/logos/csharp.svg",
            },
            {
              id: 2,
              name: ".Net",
              path: "/assets/logos/dotnet.svg",
            },
            {
              id: 3,
              name: "Ef Core",
              path: "/assets/logos/efcore.png",
            },
            {
              id: 4,
              name: "TailwindCSS",
              path: "/assets/logos/tailwindcss.svg",
            },
          ],
        },
        {
          id: 2,
          title: "Authentication & Authorization System",
          description:
            "A secure authentication and authorization system using Auth0 for seamless user management.",
          subDescription: [
            "Integrated Auth0 for authentication, supporting OAuth, JWT, and multi-factor authentication.",
            "Implemented role-based access control (RBAC) for fine-grained user permissions.",
            "Developed a React-based frontend with Tailwind CSS for a sleek user experience.",
            "Connected to a secure SQLite database for user data storage.",
          ],
          href: "#",
          sourceCodeHref: "#",
          logo: "",
          image: "/assets/projects/auth-system.jpg",
          tags: [
            {
              id: 1,
              name: "Auth0",
              path: "/assets/logos/auth0.svg",
            },
            {
              id: 2,
              name: "React",
              path: "/assets/logos/react.svg",
            },
            {
              id: 3,
              name: "SQLite",
              path: "/assets/logos/sqlite.svg",
            },
            {
              id: 4,
              name: "TailwindCSS",
              path: "/assets/logos/tailwindcss.svg",
            },
          ],
        },
        {
          id: 3,
          title: "Blazor Web App",
          description:
            "A modern, interactive web application built with Blazor WebAssembly and .NET Core.",
          subDescription: [
            "Developed a fully interactive Single Page Application (SPA) using Blazor WebAssembly.",
            "Implemented API interactions using .NET Core for a robust backend.",
            "Designed responsive UI components with Tailwind CSS for an enhanced UX.",
            "Integrated SQLite for efficient client-side database storage.",
          ],
          href: "#",
          sourceCodeHref: "#",
          logo: "",
          image: "/assets/projects/blazor-app.jpg",
          tags: [
            {
              id: 1,
              name: "Blazor",
              path: "/assets/logos/blazor.svg",
            },
            {
              id: 2,
              name: ".NET Core",
              path: "/assets/logos/dotnetcore.svg",
            },
            {
              id: 3,
              name: "SQLite",
              path: "/assets/logos/sqlite.svg",
            },
            {
              id: 4,
              name: "TailwindCSS",
              path: "/assets/logos/tailwindcss.svg",
            },
          ],
        },
        {
          id: 4,
          title: "C++ Game Engine",
          description:
            "A lightweight C++ game engine designed for 2D and 3D game development.",
          subDescription: [
            "Built a powerful rendering engine using OpenGL and C++.",
            "Developed a physics engine with collision detection and particle effects.",
            "Implemented a scripting system for easy game customization.",
            "Optimized performance with multi-threading and efficient memory management.",
          ],
          href: "#",
          sourceCodeHref: "#",
          logo: "",
          image: "/assets/projects/game-engine.jpg",
          tags: [
            {
              id: 1,
              name: "C++",
              path: "/assets/logos/cplusplus.svg",
            },
            {
              id: 2,
              name: "C#",
              path: "/assets/logos/csharp.svg",
            },
            {
              id: 3,
              name: "Git",
              path: "/assets/logos/git.svg",
            },
            {
              id: 4,
              name: "Microsoft",
              path: "/assets/logos/microsoft.svg",
            },
          ],
        },
        {
          id: 5,
          title: "WordPress Custom Theme",
          description:
            "A fully customizable WordPress theme optimized for performance and SEO.",
          subDescription: [
            "Developed a responsive WordPress theme using HTML5, CSS3, and JavaScript.",
            "Integrated Tailwind CSS for modern styling and UI enhancements.",
            "Optimized SEO and page speed using Vite.js for fast builds.",
            "Implemented custom widgets and plugin compatibility for extended functionality.",
          ],
          href: "#",
          sourceCodeHref: "#",
          logo: "",
          image: "/assets/projects/wordpress-theme.jpg",
          tags: [
            {
              id: 1,
              name: "WordPress",
              path: "/assets/logos/wordpress.svg",
            },
            {
              id: 2,
              name: "HTML5",
              path: "/assets/logos/html5.svg",
            },
            {
              id: 3,
              name: "CSS3",
              path: "/assets/logos/css3.svg",
            },
            {
              id: 4,
              name: "Vite.js",
              path: "/assets/logos/vitejs.svg",
            },
          ],
        },
        {
          id: 6,
          title: "Online Learning Platform",
          description:
            "A web application that allows users to enroll in courses, watch video lectures, and take quizzes.",
          subDescription: [
            "Built using Blazor WebAssembly for a seamless SPA experience.",
            "Implemented video streaming with Azure Media Services.",
            "Added a quiz system with dynamic question generation and real-time grading.",
            "Integrated Stripe API for secure payment processing.",
          ],
          href: "#",
          sourceCodeHref: "#",
          logo: "",
          image: "/assets/projects/elearning.jpg",
          tags: [
            {
              id: 1,
              name: "Blazor",
              path: "/assets/logos/blazor.svg",
            },
            {
              id: 2,
              name: "Azure",
              path: "/assets/logos/azure.svg",
            },
            {
              id: 3,
              name: "Stripe",
              path: "/assets/logos/stripe.svg",
            },
            {
              id: 4,
              name: "TailwindCSS",
              path: "/assets/logos/tailwindcss.svg",
            },
          ],
        },
      ],
    },

    // Experience Section
    experience: {
      title: "My Work Experience",
      subtitle:
        "A journey through my professional development, showcasing the diverse projects and technologies I've worked with across different industries.",
      technologiesUsed: "Technologies Used",
      achievements: "Key Achievements",
      stats: {
        years: "Years Experience",
        companies: "Companies",
        technologies: "Technologies",
      },
      data: [
        {
          title: "Freelance Developer",
          job: "Self-Employed",
          date: "2025-Present",
          status: "Current",
          icon: "/assets/logos/react.svg",
          companyIcon: "/assets/icons/freelance.svg",
          contents: [
            "Created a personal portfolio using Three.js, React, Vite, and WebAPI to showcase technical expertise.",
            "Continuously enhancing technical skills and expanding expertise in modern web development and back-end technologies.",
            "Building modern web applications with focus on performance, user experience, and cutting-edge technologies.",
          ],
          skills: [
            { name: "React", icon: "/assets/logos/react.svg" },
            { name: "Three.js", icon: "/assets/logos/javascript.svg" },
            { name: "Vite", icon: "/assets/logos/vitejs.svg" },
            { name: "TailwindCSS", icon: "/assets/logos/tailwindcss.svg" },
            { name: "JavaScript", icon: "/assets/logos/javascript.svg" },
            { name: "HTML5", icon: "/assets/logos/html5.svg" },
            { name: "CSS3", icon: "/assets/logos/css3.svg" },
          ],
          achievements: [
            "Developed interactive 3D portfolio with Three.js and React",
            "Implemented modern web development best practices",
            "Created responsive and performant user interfaces",
            "Continuously learning and adapting to new technologies",
          ],
        },
        {
          title: "Back-End Developer",
          job: "Car Manufacture",
          date: "2023-2024",
          icon: "/assets/logos/dotnetcore.svg",
          companyIcon: "/assets/icons/automotive.svg",
          contents: [
            "Engineered systems for large-scale data ingestion and analysis, ensuring efficient data processing and storage.",
            "Developed back-end systems enabling vehicle-to-cloud communication for telemetry, diagnostics, and remote control.",
            "Implemented secure APIs following ISO 26262 automotive safety standards.",
            "Ensured data privacy for customers and partners through industry-compliant protocols.",
          ],
          skills: [
            { name: ".NET Core", icon: "/assets/logos/dotnetcore.svg" },
            { name: "C#", icon: "/assets/logos/csharp.svg" },
            { name: "Azure", icon: "/assets/logos/microsoft.svg" },
            { name: "SQL Server", icon: "/assets/logos/microsoft.svg" },
            { name: "Docker", icon: "/assets/logos/git.svg" },
            { name: "REST APIs", icon: "/assets/logos/javascript.svg" },
          ],
          achievements: [
            "Built scalable vehicle-to-cloud communication systems",
            "Achieved ISO 26262 automotive safety standards compliance",
            "Delivered over-the-air updates and real-time tracking features",
            "Implemented secure data privacy protocols for enterprise clients",
          ],
        },
        {
          title: "Software Developer",
          job: "Security & Defense Projects",
          date: "2021-2023",
          icon: "/assets/logos/csharp.svg",
          companyIcon: "/assets/icons/security.svg",
          contents: [
            "Enhanced application security and developed new features, adhering to standards set by the Passive Defense Organization and National Cyberspace Center.",
            "Designed and implemented intuitive map interfaces using MapsUI, enhancing user experience and enabling seamless interactive map integration.",
            "Developed applications for industrial automation, leveraging C++ and the Fatek API for PLC communication.",
            "Enhanced responsiveness and usability of applications using Windows Forms and WPF frameworks.",
          ],
          skills: [
            { name: "C#", icon: "/assets/logos/csharp.svg" },
            { name: "C++", icon: "/assets/logos/cplusplus.svg" },
            { name: ".NET", icon: "/assets/logos/dotnet.svg" },
            { name: "WPF", icon: "/assets/logos/microsoft.svg" },
            { name: "Windows Forms", icon: "/assets/logos/microsoft.svg" },
            { name: "XML", icon: "/assets/logos/html5.svg" },
          ],
          achievements: [
            "Implemented security standards compliance for government projects",
            "Developed interactive map interfaces with MapsUI integration",
            "Created industrial automation solutions with PLC communication",
            "Executed XML to SVG conversions using X-DOM for data visualization",
          ],
        },
      ],
    },

    // Testimonials Section
    testimonials: {
      title: "Hear From My Clients",
      subtitle:
        "Real feedback from clients who trusted me with their projects. See how I've helped businesses achieve their goals through quality development.",
      result: "Result",
      stats: {
        rating: "Average Rating",
        clients: "Happy Clients",
        success: "Project Success",
      },
      data: [
        {
          name: "Sarah Chen",
          role: "Product Manager",
          company: "TechFlow Solutions",
          body: "Prasetyo delivered an exceptional e-commerce platform that exceeded our expectations. His attention to security standards and clean code architecture made the project a huge success. The integration with international payment systems was flawless.",
          img: "https://i.pravatar.cc/150?img=1",
          rating: 5,
          project: "E-commerce Platform",
          result: "40% increase in conversion rate",
        },
        {
          name: "Michael Rodriguez",
          role: "CTO",
          company: "AutoTech Industries",
          body: "Working with Prasetyo on our vehicle telemetry system was outstanding. His expertise in .NET Core and automotive standards (ISO 26262) ensured we met all compliance requirements while delivering robust real-time features.",
          img: "https://i.pravatar.cc/150?img=3",
          rating: 5,
          project: "Vehicle Telemetry System",
          result: "99.9% system uptime achieved",
        },
        {
          name: "Emily Watson",
          role: "Security Director",
          company: "DefenseCore Systems",
          body: "Prasetyo's work on our security applications was exceptional. His understanding of government compliance standards and ability to implement complex map interfaces using MapsUI made him invaluable to our defense projects.",
          img: "https://i.pravatar.cc/150?img=5",
          rating: 5,
          project: "Security & Defense Applications",
          result: "100% compliance achieved",
        },
        {
          name: "David Kim",
          role: "Startup Founder",
          company: "InnovateLab",
          body: "The authentication system Prasetyo built for us using Auth0 is rock solid. His React expertise and attention to user experience details resulted in a seamless login flow that our users love.",
          img: "https://i.pravatar.cc/150?img=7",
          rating: 5,
          project: "Authentication System",
          result: "50% reduction in support tickets",
        },
        {
          name: "Lisa Thompson",
          role: "Digital Marketing Manager",
          company: "CreativeEdge Agency",
          body: "Our WordPress site performance improved dramatically after Prasetyo's optimization work. His custom theme development and SEO implementation delivered exactly what we needed for our clients.",
          img: "https://i.pravatar.cc/150?img=9",
          rating: 4,
          project: "WordPress Custom Theme",
          result: "60% faster page load times",
        },
        {
          name: "James Wilson",
          role: "Education Director",
          company: "LearnTech Platform",
          body: "The online learning platform Prasetyo developed with Blazor and Azure integration has transformed our educational delivery. The video streaming and quiz systems work flawlessly with excellent user engagement.",
          img: "https://i.pravatar.cc/150?img=11",
          rating: 5,
          project: "Online Learning Platform",
          result: "300% increase in course completion",
        },
      ],
    },

    // Contact Section
    contact: {
      title: "Let's Talk",
      subtitle:
        "Ready to bring your ideas to life? Let's discuss your project and create something amazing together. I'm here to help turn your vision into reality.",
      stats: {
        response: "Response Time",
        consultation: "Consultation",
        satisfaction: "Satisfaction",
      },
      form: {
        title: "Get In Touch",
        description:
          "Whether you're looking to build a new website, improve your existing platform, or bring a unique project to life, I'm here to help.",
        sendTitle: "Send Message",
        sendDescription:
          "Fill out the form below and I'll get back to you soon.",
        name: "Full Name",
        email: "Email Address",
        message: "Your Message",
        send: "Send Message",
        sending: "Sending...",
      },
      info: {
        email: "Email",
        location: "Location",
        availability: "Availability",
        available: "Available for new projects",
      },
      messages: {
        success: "Your message has been sent successfully!",
        error: "Failed to send message. Please try again later.",
        templateError:
          "Template configuration error. Please check EmailJS settings.",
        authError: "Authentication error. Please check your EmailJS keys.",
      },
    },

    // Footer Section
    footer: {
      title: "Let's Stay Connected",
      subtitle:
        "Follow my journey, connect with me on social media, and let's build something amazing together.",
      brand:
        "Crafting digital experiences with passion and precision. Turning ideas into reality through code.",
      links: "Quick Links",
      contact: "Get In Touch",
      copyright: "All rights reserved.",
      made: "Made with",
      using: "using React & Three.js",
      terms: "Terms & Conditions",
      privacy: "Privacy Policy",
    },

    // Common
    common: {
      loading: "Loading...",
      readMore: "Read More",
      viewProject: "View Project",
      viewDetails: "View Details",
      liveDemo: "Live Demo",
      sourceCode: "Source Code",
      close: "Close",
      next: "Next",
      previous: "Previous",
      copyEmail: "Copy Email Address",
      emailCopied: "Email has Copied",
    },
  },

  id: {
    // Navigation
    nav: {
      home: "Beranda",
      about: "Tentang",
      services: "Layanan",
      projects: "Proyek",
      experience: "Pengalaman",
      contact: "Kontak",
    },

    // Hero Section
    hero: {
      greeting: "Halo, saya",
      name: "Prass",
      title: "Developer yang Berdedikasi Menciptakan",
      subtitle: "Solusi Web",
      tagline:
        "Mengubah ide menjadi pengalaman digital yang powerful dengan teknologi terdepan dan desain inovatif.",
      taglineMobile: "Mengubah ide menjadi pengalaman digital yang powerful.",
      building: "Membangun",
      webApps: "Aplikasi Web",
      viewWork: "Lihat Karya Saya",
      connect: "Mari Terhubung",
      available: "Tersedia untuk kerja freelance",
      availableMobile: "Tersedia untuk kerja",
    },

    // About Section
    about: {
      title: "Tentang Saya",
      subtitle:
        "Kenali saya lebih dekat - latar belakang, keahlian, dan passion saya dalam menciptakan solusi inovatif yang membuat perbedaan.",
      stats: {
        years: "Tahun Coding",
        skills: "Keahlian Dikuasai",
        mindset: "Mindset Belajar",
      },
      intro: {
        title: "Halo, saya Prasetyo Ari Wibowo",
        description:
          "Selama 4 tahun terakhir, saya mengembangkan keahlian frontend dan backend untuk menghadirkan aplikasi software dan web yang dinamis.",
      },
      timezone: {
        title: "Zona Waktu",
        description:
          "Saya berbasis di Kediri, Jawa Timur, Indonesia, dan terbuka untuk kerja remote di seluruh dunia",
      },
      collaboration: {
        title: "Apakah Anda ingin memulai proyek bersama?",
      },
      techstack: {
        title: "Tech Stack",
        description:
          "Saya mengkhususkan diri dalam berbagai bahasa, framework, dan tools yang memungkinkan saya membangun aplikasi yang robust dan scalable",
      },
    },

    // Services Section
    services: {
      title: "Layanan yang Saya Tawarkan",
      subtitle:
        "Kumpulan layanan profesional saya, yang disesuaikan untuk memenuhi kebutuhan proyek digital modern.",
      data: [
        {
          icon: "/assets/logos/react.svg",
          title: "Pengembangan Frontend Interaktif",
          description:
            "Membangun antarmuka pengguna yang responsif dan menarik dengan framework modern seperti React, dan menciptakan pengalaman 3D yang imersif dengan Three.js.",
        },
        {
          icon: "/assets/logos/dotnetcore.svg",
          title: "Pengembangan Backend & API",
          description:
            "Mengembangkan aplikasi sisi server dan API yang kuat dan dapat diskalakan menggunakan .NET, memastikan manajemen data yang aman dan efisien.",
        },
        {
          icon: "/assets/logos/auth0.svg",
          title: "Keamanan & Integrasi Sistem",
          description:
            "Menerapkan sistem otentikasi yang aman dengan Auth0, memastikan privasi data, dan mengintegrasikan berbagai layanan dan API pihak ketiga.",
        },
        {
          icon: "/assets/logos/blazor.svg",
          title: "Solusi Full-Stack",
          description:
            "Dari konsep hingga penerapan, saya menyediakan pengembangan aplikasi web end-to-end, menggabungkan keahlian frontend dan backend untuk memberikan solusi lengkap.",
        },
      ],
    },

    // Projects Section
    projects: {
      title: "Proyek Pilihan Saya",
      subtitle:
        "Jelajahi karya terbaru saya yang menampilkan pengembangan web modern, solusi inovatif, dan teknologi terdepan.",
      featured: "Proyek Unggulan",
      stats: {
        completed: "Proyek Selesai",
        technologies: "Teknologi Digunakan",
        satisfaction: "Kepuasan Klien",
      },
      data: [
        {
          id: 1,
          title: "Platform E-commerce",
          description:
            "Memfasilitasi pembelian dari situs web internasional seperti Amazon dan eBay, memungkinkan pelanggan berbelanja dari situs-situs ini dan mengirimkan produk ke dalam negeri.",
          subDescription: [
            "Membangun aplikasi yang dapat diskalakan dengan ASP.NET Core MVC, mengintegrasikan platform global seperti Amazon untuk pengiriman domestik.",
            "Menerapkan otentikasi aman dan manajemen basis data menggunakan ASP.NET Core Identity dan Entity Framework Core.",
            "Merancang frontend yang responsif dengan Tailwind CSS, meningkatkan pengalaman pengguna.",
            "Menambahkan sistem pembayaran, lokalisasi, dan pemfilteran produk untuk peningkatan fungsionalitas.",
          ],
          href: "#",
          sourceCodeHref: "#",
          logo: "",
          image: "/assets/projects/accessories.jpg",
          tags: [
            {
              id: 1,
              name: "C#",
              path: "/assets/logos/csharp.svg",
            },
            {
              id: 2,
              name: ".Net",
              path: "/assets/logos/dotnet.svg",
            },
            {
              id: 3,
              name: "Ef Core",
              path: "/assets/logos/efcore.png",
            },
            {
              id: 4,
              name: "TailwindCSS",
              path: "/assets/logos/tailwindcss.svg",
            },
          ],
        },
        {
          id: 2,
          title: "Sistem Otentikasi & Otorisasi",
          description:
            "Sistem otentikasi dan otorisasi yang aman menggunakan Auth0 untuk manajemen pengguna yang lancar.",
          subDescription: [
            "Mengintegrasikan Auth0 untuk otentikasi, mendukung OAuth, JWT, dan otentikasi multi-faktor.",
            "Menerapkan kontrol akses berbasis peran (RBAC) untuk izin pengguna yang terperinci.",
            "Mengembangkan frontend berbasis React dengan Tailwind CSS untuk pengalaman pengguna yang ramping.",
            "Terhubung ke basis data SQLite yang aman untuk penyimpanan data pengguna.",
          ],
          href: "#",
          sourceCodeHref: "#",
          logo: "",
          image: "/assets/projects/auth-system.jpg",
          tags: [
            {
              id: 1,
              name: "Auth0",
              path: "/assets/logos/auth0.svg",
            },
            {
              id: 2,
              name: "React",
              path: "/assets/logos/react.svg",
            },
            {
              id: 3,
              name: "SQLite",
              path: "/assets/logos/sqlite.svg",
            },
            {
              id: 4,
              name: "TailwindCSS",
              path: "/assets/logos/tailwindcss.svg",
            },
          ],
        },
        {
          id: 3,
          title: "Aplikasi Web Blazor",
          description:
            "Aplikasi web modern dan interaktif yang dibuat dengan Blazor WebAssembly dan .NET Core.",
          subDescription: [
            "Mengembangkan Aplikasi Halaman Tunggal (SPA) yang sepenuhnya interaktif menggunakan Blazor WebAssembly.",
            "Menerapkan interaksi API menggunakan .NET Core untuk backend yang kuat.",
            "Merancang komponen UI yang responsif dengan Tailwind CSS untuk UX yang lebih baik.",
            "Mengintegrasikan SQLite untuk penyimpanan basis data sisi klien yang efisien.",
          ],
          href: "#",
          sourceCodeHref: "#",
          logo: "",
          image: "/assets/projects/blazor-app.jpg",
          tags: [
            {
              id: 1,
              name: "Blazor",
              path: "/assets/logos/blazor.svg",
            },
            {
              id: 2,
              name: ".NET Core",
              path: "/assets/logos/dotnetcore.svg",
            },
            {
              id: 3,
              name: "SQLite",
              path: "/assets/logos/sqlite.svg",
            },
            {
              id: 4,
              name: "TailwindCSS",
              path: "/assets/logos/tailwindcss.svg",
            },
          ],
        },
        {
          id: 4,
          title: "Game Engine C++",
          description:
            "Game engine C++ ringan yang dirancang untuk pengembangan game 2D dan 3D.",
          subDescription: [
            "Membangun mesin rendering yang kuat menggunakan OpenGL dan C++.",
            "Mengembangkan mesin fisika dengan deteksi tabrakan dan efek partikel.",
            "Menerapkan sistem skrip untuk kustomisasi game yang mudah.",
            "Mengoptimalkan kinerja dengan multi-threading dan manajemen memori yang efisien.",
          ],
          href: "#",
          sourceCodeHref: "#",
          logo: "",
          image: "/assets/projects/game-engine.jpg",
          tags: [
            {
              id: 1,
              name: "C++",
              path: "/assets/logos/cplusplus.svg",
            },
            {
              id: 2,
              name: "C#",
              path: "/assets/logos/csharp.svg",
            },
            {
              id: 3,
              name: "Git",
              path: "/assets/logos/git.svg",
            },
            {
              id: 4,
              name: "Microsoft",
              path: "/assets/logos/microsoft.svg",
            },
          ],
        },
        {
          id: 5,
          title: "Tema Kustom WordPress",
          description:
            "Tema WordPress yang sepenuhnya dapat disesuaikan dan dioptimalkan untuk kinerja dan SEO.",
          subDescription: [
            "Mengembangkan tema WordPress yang responsif menggunakan HTML5, CSS3, dan JavaScript.",
            "Mengintegrasikan Tailwind CSS untuk gaya modern dan peningkatan UI.",
            "Mengoptimalkan SEO dan kecepatan halaman menggunakan Vite.js untuk build yang cepat.",
            "Menerapkan widget kustom dan kompatibilitas plugin untuk fungsionalitas yang diperluas.",
          ],
          href: "#",
          sourceCodeHref: "#",
          logo: "",
          image: "/assets/projects/wordpress-theme.jpg",
          tags: [
            {
              id: 1,
              name: "WordPress",
              path: "/assets/logos/wordpress.svg",
            },
            {
              id: 2,
              name: "HTML5",
              path: "/assets/logos/html5.svg",
            },
            {
              id: 3,
              name: "CSS3",
              path: "/assets/logos/css3.svg",
            },
            {
              id: 4,
              name: "Vite.js",
              path: "/assets/logos/vitejs.svg",
            },
          ],
        },
        {
          id: 6,
          title: "Platform Pembelajaran Online",
          description:
            "Aplikasi web yang memungkinkan pengguna mendaftar kursus, menonton video ceramah, dan mengerjakan kuis.",
          subDescription: [
            "Dibangun menggunakan Blazor WebAssembly untuk pengalaman SPA yang mulus.",
            "Menerapkan streaming video dengan Azure Media Services.",
            "Menambahkan sistem kuis dengan pembuatan pertanyaan dinamis dan penilaian real-time.",
            "Mengintegrasikan Stripe API untuk pemrosesan pembayaran yang aman.",
          ],
          href: "#",
          sourceCodeHref: "#",
          logo: "",
          image: "/assets/projects/elearning.jpg",
          tags: [
            {
              id: 1,
              name: "Blazor",
              path: "/assets/logos/blazor.svg",
            },
            {
              id: 2,
              name: "Azure",
              path: "/assets/logos/azure.svg",
            },
            {
              id: 3,
              name: "Stripe",
              path: "/assets/logos/stripe.svg",
            },
            {
              id: 4,
              name: "TailwindCSS",
              path: "/assets/logos/tailwindcss.svg",
            },
          ],
        },
      ],
    },

    // Experience Section
    experience: {
      title: "Pengalaman Kerja Saya",
      subtitle:
        "Perjalanan melalui perkembangan profesional saya, menampilkan beragam proyek dan teknologi yang telah saya kerjakan di berbagai industri.",
      technologiesUsed: "Teknologi yang Digunakan",
      achievements: "Pencapaian Utama",
      stats: {
        years: "Tahun Pengalaman",
        companies: "Perusahaan",
        technologies: "Teknologi",
      },
      data: [
        {
          title: "Pengembang Freelance",
          job: "Wiraswasta",
          date: "2025-Sekarang",
          status: "Saat ini",
          icon: "/assets/logos/react.svg",
          companyIcon: "/assets/icons/freelance.svg",
          contents: [
            "Membuat portofolio pribadi menggunakan Three.js, React, Vite, dan WebAPI untuk menunjukkan keahlian teknis.",
            "Terus meningkatkan keterampilan teknis dan memperluas keahlian dalam pengembangan web modern dan teknologi back-end.",
            "Membangun aplikasi web modern dengan fokus pada kinerja, pengalaman pengguna, dan teknologi mutakhir.",
          ],
          skills: [
            { name: "React", icon: "/assets/logos/react.svg" },
            { name: "Three.js", icon: "/assets/logos/javascript.svg" },
            { name: "Vite", icon: "/assets/logos/vitejs.svg" },
            { name: "TailwindCSS", icon: "/assets/logos/tailwindcss.svg" },
            { name: "JavaScript", icon: "/assets/logos/javascript.svg" },
            { name: "HTML5", icon: "/assets/logos/html5.svg" },
            { name: "CSS3", icon: "/assets/logos/css3.svg" },
          ],
          achievements: [
            "Mengembangkan portofolio 3D interaktif dengan Three.js dan React",
            "Menerapkan praktik terbaik pengembangan web modern",
            "Menciptakan antarmuka pengguna yang responsif dan berkinerja",
            "Terus belajar dan beradaptasi dengan teknologi baru",
          ],
        },
        {
          title: "Pengembang Back-End",
          job: "Manufaktur Mobil",
          date: "2023-2024",
          icon: "/assets/logos/dotnetcore.svg",
          companyIcon: "/assets/icons/automotive.svg",
          contents: [
            "Merekayasa sistem untuk penyerapan dan analisis data skala besar, memastikan pemrosesan dan penyimpanan data yang efisien.",
            "Mengembangkan sistem back-end yang memungkinkan komunikasi kendaraan-ke-cloud untuk telemetri, diagnostik, dan kontrol jarak jauh.",
            "Menerapkan API aman mengikuti standar keselamatan otomotif ISO 26262.",
            "Memastikan privasi data untuk pelanggan dan mitra melalui protokol yang sesuai dengan industri.",
          ],
          skills: [
            { name: ".NET Core", icon: "/assets/logos/dotnetcore.svg" },
            { name: "C#", icon: "/assets/logos/csharp.svg" },
            { name: "Azure", icon: "/assets/logos/microsoft.svg" },
            { name: "SQL Server", icon: "/assets/logos/microsoft.svg" },
            { name: "Docker", icon: "/assets/logos/git.svg" },
            { name: "REST APIs", icon: "/assets/logos/javascript.svg" },
          ],
          achievements: [
            "Membangun sistem komunikasi kendaraan-ke-cloud yang dapat diskalakan",
            "Mencapai kepatuhan standar keselamatan otomotif ISO 26262",
            "Menyampaikan pembaruan over-the-air dan fitur pelacakan real-time",
            "Menerapkan protokol privasi data yang aman untuk klien perusahaan",
          ],
        },
        {
          title: "Pengembang Perangkat Lunak",
          job: "Proyek Keamanan & Pertahanan",
          date: "2021-2023",
          icon: "/assets/logos/csharp.svg",
          companyIcon: "/assets/icons/security.svg",
          contents: [
            "Meningkatkan keamanan aplikasi dan mengembangkan fitur baru, mematuhi standar yang ditetapkan oleh Organisasi Pertahanan Pasif dan Pusat Cyberspace Nasional.",
            "Merancang dan mengimplementasikan antarmuka peta yang intuitif menggunakan MapsUI, meningkatkan pengalaman pengguna dan memungkinkan integrasi peta interaktif yang mulus.",
            "Mengembangkan aplikasi untuk otomasi industri, memanfaatkan C++ dan Fatek API untuk komunikasi PLC.",
            "Meningkatkan responsivitas dan kegunaan aplikasi menggunakan kerangka kerja Windows Forms dan WPF.",
          ],
          skills: [
            { name: "C#", icon: "/assets/logos/csharp.svg" },
            { name: "C++", icon: "/assets/logos/cplusplus.svg" },
            { name: ".NET", icon: "/assets/logos/dotnet.svg" },
            { name: "WPF", icon: "/assets/logos/microsoft.svg" },
            { name: "Windows Forms", icon: "/assets/logos/microsoft.svg" },
            { name: "XML", icon: "/assets/logos/html5.svg" },
          ],
          achievements: [
            "Menerapkan kepatuhan standar keamanan untuk proyek-proyek pemerintah",
            "Mengembangkan antarmuka peta interaktif dengan integrasi MapsUI",
            "Menciptakan solusi otomasi industri dengan komunikasi PLC",
            "Melaksanakan konversi XML ke SVG menggunakan X-DOM untuk visualisasi data",
          ],
        },
      ],
    },

    // Testimonials Section
    testimonials: {
      title: "Testimoni Klien Saya",
      subtitle:
        "Feedback nyata dari klien yang mempercayai proyek mereka kepada saya. Lihat bagaimana saya membantu bisnis mencapai tujuan mereka melalui pengembangan berkualitas.",
      result: "Hasil",
      stats: {
        rating: "Rating Rata-rata",
        clients: "Klien Puas",
        success: "Sukses Proyek",
      },
      data: [
        {
          name: "Sarah Chen",
          role: "Manajer Produk",
          company: "TechFlow Solutions",
          body: "Prasetyo memberikan platform e-commerce yang luar biasa yang melebihi harapan kami. Perhatiannya terhadap standar keamanan dan arsitektur kode yang bersih membuat proyek ini sukses besar. Integrasi dengan sistem pembayaran internasional berjalan tanpa cacat.",
          img: "https://i.pravatar.cc/150?img=1",
          rating: 5,
          project: "Platform E-commerce",
          result: "peningkatan 40% dalam tingkat konversi",
        },
        {
          name: "Michael Rodriguez",
          role: "CTO",
          company: "AutoTech Industries",
          body: "Bekerja dengan Prasetyo pada sistem telemetri kendaraan kami sangat luar biasa. Keahliannya dalam .NET Core dan standar otomotif (ISO 26262) memastikan kami memenuhi semua persyaratan kepatuhan sambil memberikan fitur real-time yang kuat.",
          img: "https://i.pravatar.cc/150?img=3",
          rating: 5,
          project: "Sistem Telemetri Kendaraan",
          result: "waktu aktif sistem 99,9% tercapai",
        },
        {
          name: "Emily Watson",
          role: "Direktur Keamanan",
          company: "DefenseCore Systems",
          body: "Pekerjaan Prasetyo pada aplikasi keamanan kami sangat luar biasa. Pemahamannya tentang standar kepatuhan pemerintah dan kemampuannya untuk mengimplementasikan antarmuka peta yang kompleks menggunakan MapsUI membuatnya sangat berharga bagi proyek pertahanan kami.",
          img: "https://i.pravatar.cc/150?img=5",
          rating: 5,
          project: "Aplikasi Keamanan & Pertahanan",
          result: "kepatuhan 100% tercapai",
        },
        {
          name: "David Kim",
          role: "Pendiri Startup",
          company: "InnovateLab",
          body: "Sistem otentikasi yang dibangun Prasetyo untuk kami menggunakan Auth0 sangat solid. Keahlian React-nya dan perhatian terhadap detail pengalaman pengguna menghasilkan alur login yang mulus yang disukai pengguna kami.",
          img: "https://i.pravatar.cc/150?img=7",
          rating: 5,
          project: "Sistem Otentikasi",
          result: "pengurangan 50% dalam tiket dukungan",
        },
        {
          name: "Lisa Thompson",
          role: "Manajer Pemasaran Digital",
          company: "CreativeEdge Agency",
          body: "Kinerja situs WordPress kami meningkat secara dramatis setelah pekerjaan optimisasi Prasetyo. Pengembangan tema kustomnya dan implementasi SEO memberikan apa yang kami butuhkan untuk klien kami.",
          img: "https://i.pravatar.cc/150?img=9",
          rating: 4,
          project: "Tema Kustom WordPress",
          result: "waktu muat halaman 60% lebih cepat",
        },
        {
          name: "James Wilson",
          role: "Direktur Pendidikan",
          company: "LearnTech Platform",
          body: "Platform pembelajaran online yang dikembangkan Prasetyo dengan integrasi Blazor dan Azure telah mengubah penyampaian pendidikan kami. Sistem streaming video dan kuis bekerja tanpa cacat dengan keterlibatan pengguna yang sangat baik.",
          img: "https://i.pravatar.cc/150?img=11",
          rating: 5,
          project: "Platform Pembelajaran Online",
          result: "peningkatan 300% dalam penyelesaian kursus",
        },
      ],
    },

    // Contact Section
    contact: {
      title: "Mari Bicara",
      subtitle:
        "Siap mewujudkan ide Anda? Mari diskusikan proyek Anda dan ciptakan sesuatu yang luar biasa bersama. Saya di sini untuk membantu mewujudkan visi Anda.",
      stats: {
        response: "Waktu Respon",
        consultation: "Konsultasi",
        satisfaction: "Kepuasan",
      },
      form: {
        title: "Hubungi Saya",
        description:
          "Baik Anda ingin membangun website baru, meningkatkan platform yang ada, atau mewujudkan proyek unik, saya di sini untuk membantu.",
        sendTitle: "Kirim Pesan",
        sendDescription:
          "Isi formulir di bawah ini dan saya akan segera menghubungi Anda kembali.",
        name: "Nama Lengkap",
        email: "Alamat Email",
        message: "Pesan Anda",
        send: "Kirim Pesan",
        sending: "Mengirim...",
      },
      info: {
        email: "Email",
        location: "Lokasi",
        availability: "Ketersediaan",
        available: "Tersedia untuk proyek baru",
      },
      messages: {
        success: "Pesan Anda telah berhasil dikirim!",
        error: "Gagal mengirim pesan. Silakan coba lagi nanti.",
        templateError:
          "Error konfigurasi template. Silakan periksa pengaturan EmailJS.",
        authError: "Error autentikasi. Silakan periksa kunci EmailJS Anda.",
      },
    },

    // Footer Section
    footer: {
      title: "Mari Tetap Terhubung",
      subtitle:
        "Ikuti perjalanan saya, terhubung dengan saya di media sosial, dan mari bangun sesuatu yang luar biasa bersama.",
      brand:
        "Menciptakan pengalaman digital dengan passion dan presisi. Mengubah ide menjadi kenyataan melalui kode.",
      links: "Tautan Cepat",
      contact: "Hubungi Saya",
      copyright: "Semua hak dilindungi.",
      made: "Dibuat dengan",
      using: "menggunakan React & Three.js",
      terms: "Syarat & Ketentuan",
      privacy: "Kebijakan Privasi",
    },

    // Common
    common: {
      loading: "Memuat...",
      readMore: "Baca Selengkapnya",
      viewProject: "Lihat Proyek",
      viewDetails: "Lihat Detail",
      liveDemo: "Demo Langsung",
      sourceCode: "Kode Sumber",
      close: "Tutup",
      next: "Selanjutnya",
      previous: "Sebelumnya",
      copyEmail: "Salin Alamat Email",
      emailCopied: "Email Telah Disalin",
    },
  },
};