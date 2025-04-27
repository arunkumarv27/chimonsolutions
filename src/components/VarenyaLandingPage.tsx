/* eslint-disable */
import React, { useEffect, useRef } from 'react';

const ChimonSolutionsLandingPage = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const particlesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {

    const techIcons = [
      { name: 'Java', color: '#f89820' },
      { name: 'Python', color: '#306998' },
      { name: 'AWS', color: '#FF9900' },
      { name: 'Salesforce', color: '#00A1E0' },
      { name: 'ServiceNow', color: '#81B5A1' },
      { name: 'Workday', color: '#0066B3' },
      { name: 'Angular', color: '#DD0031' },
      { name: 'React', color: '#61DAFB' },
      { name: 'Node.js', color: '#339933' },
      { name: 'SQL', color: '#336791' },
      { name: 'Azure', color: '#0089D6' },
      { name: 'Docker', color: '#2496ED' }
    ];


    const gravity = 0.2;
    const bounce = 0.7;
    const friction = 0.99;
    interface TechIcon {
      name: string;
      color: string;
    }

    interface Icon {
      element: HTMLDivElement;
      x: number;
      y: number;
      vx: number;
      vy: number;
      width: number;
      height: number;
    }

    const icons: Icon[] = [];
    let mouseX = 0;
    let mouseY = 0;
    let isMouseDown = false;
    let interactRadius = 100;
    let animationFrameId: number;


    interface MouseEvent {
      clientX: number;
      clientY: number;
    }

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const handleMouseDown = () => {
      isMouseDown = true;
      interactRadius = 150; // Increase radius when clicked
    };

    const handleMouseUp = () => {
      isMouseDown = false;
      interactRadius = 100;
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);


    function createParticles() {
      const container = particlesRef.current;
      if (!container) return;

      for (let i = 0; i < 100; i++) {
        const particle = document.createElement('div');
        particle.classList.add('particle');


        const size = Math.random() * 3 + 2;
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;


        const x = Math.random() * window.innerWidth;
        const y = Math.random() * window.innerHeight;
        particle.style.left = `${x}px`;
        particle.style.top = `${y}px`;


        particle.style.opacity = (Math.random() * 0.5 + 0.3).toString();


        container.appendChild(particle);


        const duration = Math.random() * 20 + 10;
        particle.style.animation = `fadeInOut ${duration}s infinite alternate`;


        setInterval(() => {
          const newX = parseFloat(particle.style.left) + (Math.random() - 0.5) * 2;
          const newY = parseFloat(particle.style.top) + (Math.random() - 0.5) * 2;
          particle.style.left = `${newX}px`;
          particle.style.top = `${newY}px`;
        }, 50);
      }
    }


    interface TechIcon {
      name: string;
      color: string;
    }

    interface Icon {
      element: HTMLDivElement;
      x: number;
      y: number;
      vx: number;
      vy: number;
      width: number;
      height: number;
    }

    function createIcon(icon: TechIcon, delay: number): void {
      setTimeout(() => {
        const tech = document.createElement('div');
        tech.classList.add('tech-icon');


        tech.style.backgroundColor = icon.color;
        tech.innerText = icon.name; // Use first two letters
        tech.style.color = 'white';
        tech.style.display = 'flex';
        tech.style.justifyContent = 'center';
        tech.style.alignItems = 'center';
        tech.style.fontWeight = 'bold';


        const x = Math.random() * (window.innerWidth - 100) + 50;
        const y = -50;
        tech.style.left = `${x}px`;
        tech.style.top = `${y}px`;


        if (heroRef.current) {
          heroRef.current.appendChild(tech);
        }


        icons.push({
          element: tech,
          x,
          y,
          vx: (Math.random() - 0.5) * 5,
          vy: 0,
          width: 50,
          height: 50
        });
      }, delay);
    }


    function updateIcons() {
      icons.forEach((icon) => {

        icon.vy += gravity;


        icon.vx *= friction;
        icon.vy *= friction;


        const dx = mouseX - (icon.x + icon.width / 2);
        const dy = mouseY - (icon.y + icon.height / 2);
        const distance = Math.sqrt(dx * dx + dy * dy);


        if (distance < interactRadius) {
          const force = isMouseDown ? 2 : 1;
          icon.vx += (dx / distance) * force;
          icon.vy += (dy / distance) * force;
        }


        icon.x += icon.vx;
        icon.y += icon.vy;


        if (icon.x + icon.width > window.innerWidth) {
          icon.x = window.innerWidth - icon.width;
          icon.vx *= -bounce;
        } else if (icon.x < 0) {
          icon.x = 0;
          icon.vx *= -bounce;
        }

        if (icon.y + icon.height > window.innerHeight) {
          icon.y = window.innerHeight - icon.height;
          icon.vy *= -bounce;
        } else if (icon.y < 0) {
          icon.y = 0;
          icon.vy *= -bounce;
        }


        icon.element.style.left = `${icon.x}px`;
        icon.element.style.top = `${icon.y}px`;
      });

      animationFrameId = requestAnimationFrame(updateIcons);
    }


    createParticles();
    techIcons.forEach((icon, index) => {
      createIcon(icon, index * 300);
    });
    animationFrameId = requestAnimationFrame(updateIcons);


    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="Chimon Solutions-landing-container">
      <div className="hero-section" ref={heroRef}>
        <div className="overlay"></div>
        <div className="particles-container" ref={particlesRef}></div>
        <div className="content">
          <h1>Chimon Solutions</h1>
          <p>
            Transforming businesses through innovative IT solutions. Our expertise in Java, Python, AWS,
            Salesforce, ServiceNow, and Workday helps enterprises achieve digital excellence.
          </p>
          <button className="cta-button">Discover Our Services</button>
        </div>
      </div>

      <style>{`
        /* Styles for the container instead of the global body */
        .Chimon Solutions-landing-container {
          font-family: 'Poppins', sans-serif;
          overflow: hidden;
          background: linear-gradient(135deg, #0f0c29, #302b63, #24243e);
          color: white;
          height: 100vh;
        }
        .hero-section {
          height: 100vh;
          width: 100%;
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 1;
        }
        .content {
          text-align: center;
          z-index: 10;
          max-width: 800px;
          padding: 0 20px;
        }
        h1 {
          font-size: 4rem;
          margin-bottom: 20px;
          background: linear-gradient(90deg, #ff8a00, #e52e71);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          text-shadow: 0 0 20px rgba(255, 138, 0, 0.3);
          animation: fadeInUp 1s ease-out;
        }
        p {
          font-size: 1.2rem;
          margin-bottom: 30px;
          line-height: 1.6;
          opacity: 0;
          animation: fadeInUp 1s ease-out 0.5s forwards;
        }
        .cta-button {
          padding: 15px 30px;
          font-size: 1.1rem;
          background: linear-gradient(90deg, #ff8a00, #e52e71);
          color: white;
          border: none;
          border-radius: 50px;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
          opacity: 0;
          animation: fadeInUp 1s ease-out 1s forwards;
        }
        .cta-button:hover {
          transform: translateY(-5px);
          box-shadow: 0 15px 25px rgba(0, 0, 0, 0.3);
        }
        .overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.3);
          z-index: 2;
        }
        .particles-container {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          overflow: hidden;
          z-index: 0;
        }
        .particle {
          position: absolute;
          background: rgba(255, 255, 255, 0.5);
          border-radius: 50%;
          z-index: 1;
        }
        .tech-icon {
          position: absolute;
          width: 50px;
          height: 50px;
          z-index: 5;
          border-radius: 10px;
          filter: drop-shadow(0 0 10px rgba(255, 255, 255, 0.5));
          opacity: 0;
          animation: fadeIn 0.5s forwards;
        }
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(50px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        @keyframes fadeInOut {
          from { opacity: 1; }
          to { opacity: 0.3; }
        }
      `}</style>
    </div>
  );
};

export default Chimon SolutionsLandingPage;
