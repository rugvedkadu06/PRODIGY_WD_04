 // Smooth Cursor
      const cursor = document.getElementById("cursor");
      let mouseX = 0,
        mouseY = 0,
        posX = 0,
        posY = 0;

      document.addEventListener("mousemove", (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
      });

      function animateCursor() {
        posX += (mouseX - posX) * 0.2;
        posY += (mouseY - posY) * 0.2;
        cursor.style.left = posX + "px";
        cursor.style.top = posY + "px";
        requestAnimationFrame(animateCursor);
      }
      animateCursor();

      // tsParticles
      tsParticles.load("tsparticles", {
        background: { color: "#0a0a0a" },
        fullScreen: { enable: false },
        fpsLimit: 60,
        particles: {
          number: { value: 60 },
          color: { value: ["#ffd600", "#f1f1f1", "#ffffff"] },
          shape: { type: "circle" },
          opacity: { value: 0.5 },
          size: { value: { min: 1, max: 4 } },
          move: { enable: true, speed: 1, outModes: "out" },
          links: {
            enable: true,
            distance: 120,
            color: "#ffd600",
            opacity: 0.4,
            width: 1,
          },
        },
        interactivity: {
          events: {
            onHover: { enable: true, mode: "repulse" },
            onClick: { enable: true, mode: "push" },
          },
          modes: {
            repulse: { distance: 100 },
            push: { quantity: 4 },
          },
        },
        detectRetina: true,
      });

      // Projects Data
      const projects = [
        {
          title: "HealthFYI Dashboard",
          desc: "Track health, fitness, and nutrition in a modern web UI.",
          link: "https://healthfyi.rugvddev.site/",
          label: "View Project →",
        },
        {
          title: "Anonymous Polls",
          desc: "Create anonymous polls and get honest feedback.",
          link: "https://anonymouspolls.rugvddev.site/",
          label: "Try it →",
        },
        {
          title: "GoatPad Text Editor",
          desc: "Collaborative online text/code editor with sync features.",
          link: "https://github.com/rugvedkadu06/GoatPad_TextEditor",
          label: "GitHub →",
        },
        {
          title: "Text Summarizer",
          desc: "Summarize long content using AI in seconds.",
          link: "https://txtsummarizr.rugvddev.site/",
          label: "Try it →",
        },
        {
          title: "StudyBuddy AI Bot",
          desc: "AI assistant for students: help, tips, and academic answers.",
          link: "https://studybuddy-frontend.onrender.com/",
          label: "Try Bot →",
        },
        {
          title: "BlinkFast Flutter App",
          desc: "Modern e-commerce app for seamless product browsing.",
          link: "#",
          label: "In Progress →",
        },
      ];

      // Render Projects
      const container = document.getElementById("projects-container");

      projects.forEach((proj, i) => {
        const div = document.createElement("div");
        div.className =
          "project-card bg-zinc-900 border border-techYellow rounded-lg p-6 cursor-pointer";
        div.style.animation = `fadeInUp 0.6s ease forwards`;
        div.style.animationDelay = i * 0.1 + "s";

        div.innerHTML = `
          <h4 class="text-xl font-semibold gradient-text mb-3">${proj.title}</h4>
          <p class="text-gray-300 mb-5 leading-relaxed">${proj.desc}</p>
          <a href="${proj.link}" target="_blank" class="text-techYellow hover:underline font-semibold text-sm">${proj.label}</a>
        `;
        container.appendChild(div);
      });
            tailwind.config = {
        theme: {
          fontFamily: {
            sans: ["Poppins", "sans-serif"],
          },
          extend: {
            colors: {
              techYellow: "#ffd600",
              techDark: "#0a0a0a",
              techLight: "#f1f1f1",
            },
            animation: {
              "fade-in-up": "fadeInUp 0.7s ease forwards",
            },
            keyframes: {
              fadeInUp: {
                "0%": { opacity: 0, transform: "translateY(15px)" },
                "100%": { opacity: 1, transform: "translateY(0)" },
              },
            },
            transitionProperty: {
              'height': 'height',
              'spacing': 'margin, padding',
            },
          },
        },
      };