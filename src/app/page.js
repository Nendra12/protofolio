'use client';
import { useState, useEffect, useRef } from 'react';
import Image from "next/image";
import CardNav from "@/components/CardNav";
import LightPillar from "@/components/LightPillar";
import TiltedCard from "@/components/TiltedCard";
import NeonCursor from "@/components/NeonCursor";
import CircularText from "@/components/CircularText";
import { PointerHighlight } from "@/components/ui/pointer-highlight";
import Link from "next/link";
import SplitText from "@/components/SplitText";
import SoftSkills from "@/components/SoftSkills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

export default function Home() {
  const [showNav, setShowNav] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [scrollTimeout, setScrollTimeout] = useState(null);
  const [isDesktop, setIsDesktop] = useState(false);
  const lenisRef = useRef(null);

  // Lenis Smooth Scroll
  useEffect(() => {
    const loadLenis = async () => {
      const Lenis = (await import('lenis')).default;
      
      const lenis = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        orientation: 'vertical',
        gestureOrientation: 'vertical',
        smoothWheel: true,
        wheelMultiplier: 1,
        smoothTouch: false,
        touchMultiplier: 2,
        infinite: false,
      });

      lenisRef.current = lenis;

      function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
      }

      requestAnimationFrame(raf);

      // Handle smooth scroll for anchor links
      const handleAnchorClick = (e) => {
        const target = e.target.closest('a');
        if (!target) return;
        
        const href = target.getAttribute('href');
        if (href && href.startsWith('#')) {
          e.preventDefault();
          const targetElement = document.querySelector(href);
          if (targetElement) {
            lenis.scrollTo(targetElement, {
              offset: -100, // Offset for navbar
              duration: 1.5,
              easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t))
            });
          }
        }
      };

      document.addEventListener('click', handleAnchorClick);

      return () => {
        document.removeEventListener('click', handleAnchorClick);
      };
    };

    loadLenis();

    return () => {
      if (lenisRef.current) {
        lenisRef.current.destroy();
      }
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Clear existing timeout
      if (scrollTimeout) {
        clearTimeout(scrollTimeout);
      }
      
      // Detect scroll UP (ke atas) - hide navbar
      if (currentScrollY < lastScrollY && currentScrollY > 10) {
        setShowNav(false);
      }
      
      // Show navbar after user stops scrolling (with drop animation)
      const timeout = setTimeout(() => {
        setShowNav(true);
      }, 150);
      
      setScrollTimeout(timeout);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (scrollTimeout) {
        clearTimeout(scrollTimeout);
      }
    };
  }, [lastScrollY, scrollTimeout]);

  // Check if device is desktop
  useEffect(() => {
    const checkIsDesktop = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };

    checkIsDesktop();
    window.addEventListener('resize', checkIsDesktop);

    return () => window.removeEventListener('resize', checkIsDesktop);
  }, []);

  const items = [
    {
      label: "About",
      bgColor: "#0D0716",
      textColor: "#fff",
      links: [
        { label: "About Me", href: "#about", ariaLabel: "About Me" }
      ]
    },
    {
      label: "Skills",
      bgColor: "#170D27",
      textColor: "#fff",
      links: [
        { label: "Hard Skills", href: "#hard-skills", ariaLabel: "Hard Skills" },
        { label: "Soft Skills", href: "#soft-skills", ariaLabel: "Soft Skills" }
      ]
    },
    {
      label: "Projects", 
      bgColor: "#1E0D27",
      textColor: "#fff",
      links: [
        { label: "My Projects", href: "#projects", ariaLabel: "My Projects" }
      ]
    },
    {
      label: "Contact",
      bgColor: "#271E37", 
      textColor: "#fff",
      links: [
        { label: "Contact Me", href: "#contact", ariaLabel: "Contact Me" }
      ]
    }
  ];
  
  const handleAnimationComplete = () => {
    console.log('All letters have animated!');
  };

  return (
    <div className="min-h-screen overflow-hidden relative w-full">
      {isDesktop && <NeonCursor />}
      <div className="relative z-10" style={{ backgroundColor: "#0a0a0a" }}>
        <div 
          className={`fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-purple-500/20 transition-all ${
            showNav 
              ? 'duration-[300ms] ease-[cubic-bezier(0.34,1.56,0.64,1)] translate-y-0 opacity-100' 
              : 'duration-300 ease-in -translate-y-full opacity-0'
          }`}
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <CardNav
              logo="/logo.png"
              logoAlt="My Logo"
              items={items}
              baseColor="#0a0a0a"
              menuColor="#fff"
              buttonBgColor="#111"
              buttonTextColor="#fff"
              ease="power3.out"
            />
          </div>
        </div>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" style={{ background: "radial-gradient(circle,rgba(221, 0, 255, 1) 0%, rgba(10, 10, 10, 1) 36%, rgba(10, 10, 10, 1) 100%)" }}>
          <div className="pt-24 grid grid-cols-1 lg:grid-cols-12 min-h-[calc(100vh-7rem)]"> 
            <div className="lg:col-span-6 flex items-center justify-center min-h-[400px] lg:h-screen py-4 lg:py-0 order-1 lg:order-2 mt-16 lg:mt-0">
              <div className="relative scale-75 sm:scale-90 lg:scale-100">
                <div className="absolute inset-0 rounded-3xl animate-[spin_15s_linear_infinite] h-[400px] w-[300px] opacity-50" 
                     style={{ 
                       background: 'linear-gradient(90deg, #5227FF, #FF9FFC, #5227FF, #FF9FFC)',
                       padding: '3px',
                       WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                       WebkitMaskComposite: 'xor',
                       maskComposite: 'exclude'
                     }}>
                </div>
                {/* <div className="absolute -bottom-12 -left-12 z-10">
                  <CircularText
                    text="Contact ** m e ** "
                    onHover="speedUp"
                    spinDuration={15}
                    className="w-[118px] h-[118px]"
                  />
                </div> */}
                <TiltedCard
                  imageSrc="/profile.jpg"
                  altText="Danendra Mahardhika"
                  captionText="Danendra Mahardhika"
                  containerHeight="400px"
                  containerWidth="300px"
                  imageHeight="400px"
                  imageWidth="300px"
                  rotateAmplitude={10}
                  scaleOnHover={1.05}
                  showMobileWarning={false}
                  showTooltip={false}
                  displayOverlayContent={false}
                />  
              </div>
            </div> 
            
            <div className="lg:col-span-6 flex flex-col items-start justify-center gap-4 sm:px-6 lg:px-8 py-4 lg:py-0 order-2 lg:order-1">
              <h1 id="about" className="text-white text-3xl sm:text-4xl lg:text-5xl font-bold scroll-mt-24">Hi, I'm <PointerHighlight>Danendra Mahardhika.</PointerHighlight></h1>
              <p className="text-base sm:text-lg leading-relaxed max-w-lg">
                <span className="text-white">
                  A passionate
                </span>{" "}
                <span className="text-purple-400 font-medium">
                  Informatics Engineering
                </span>{" "}
                <span className="text-white">
                  student who enjoys building
                </span>{" "}
                <span className="text-purple-400 font-medium">
                  clean and modern web applications
                </span>{" "}
                <span className="text-white">
                  products. I focus on
                </span>{" "}
                <span className="text-purple-400 font-medium">
                  web development, UI design,
                </span>{" "}
                <span className="text-white">
                  and problem-solving through
                </span>{" "}
                <span className="text-purple-400 font-medium">
                  code.
                </span>
              </p>
              <Link
                href="https://docs.google.com/document/d/1L2-1BPRHvvFwz80BkzEkhkp9-FbInhcKYlOICjazaU0/edit?usp=sharing"
                target="_blank"
                className="w-[150px] bg-white h-[50px] my-3 flex items-center justify-center rounded-xl cursor-pointer relative overflow-hidden transition-all duration-500 ease-in-out shadow-md hover:scale-105 hover:shadow-lg before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-[#5227FF] before:to-[#FF9FFC] before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-xl hover:before:left-0 text-black hover:text-white font-semibold"
              >
                My Resume
              </Link>

              <div className="flex flex-wrap items-center gap-4 py-4 sm:gap-7 sm:text-xs text-[10px] uppercase tracking-widest text-gray-300 group">
                <a
                  href="linkedin.com/in/nendra12"
                  target="_blank"
                  className="flex items-center gap-1 transition-all duration-300 hover:text-white group-hover:opacity-40 hover:!opacity-100"
                >
                  LinkedIn
                  <span className="text-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-3">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                    </svg>
                  </span>
                </a>

                <a
                  href="https://github.com/Nendra12"
                  target="_blank"
                  className="flex items-center gap-1 transition-all duration-300 hover:text-white group-hover:opacity-40 hover:!opacity-100"
                >
                  GitHub
                  <span className="text-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-3">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                    </svg>
                  </span>
                </a>

                <a
                  href="https://www.instagram.com/nendra.05"
                  target="_blank"
                  className="flex items-center gap-1 transition-all duration-300 hover:text-white group-hover:opacity-40 hover:!opacity-100"
                >
                  Instagram
                  <span className="text-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-3">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                    </svg>
                  </span>
                </a>

                <a
                  href="mailto:mahardhika658@gmail.com"
                  className="flex items-center gap-1 transition-all duration-300 hover:text-white group-hover:opacity-40 hover:!opacity-100"
                >
                  Gmail
                  <span className="text-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-3">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                    </svg>
                  </span>
                </a>
              </div>
            </div> 
          </div>
        </div>
        
        <div className="relative" style={{ backgroundColor: "#0a0a0a" }}>
          {/* Marquee Section */}
          <div className="py-4 sm:py-6 md:py-8 overflow-hidden border-y border-purple-500 relative opacity-60">
            <div className="absolute inset-y-0 left-0 w-20 sm:w-32 md:w-40 bg-gradient-to-r from-black/80 to-transparent z-10 pointer-events-none"></div>
            <div className="absolute inset-y-0 right-0 w-20 sm:w-32 md:w-40 bg-gradient-to-l from-black/80 to-transparent z-10 pointer-events-none"></div>
            
            <div className="relative opacity-50">
              <div className="marquee-wrapper">
                <div className="marquee-content">
                {[...Array(3)].map((_, idx) => (
                  <div key={idx} className="flex items-center gap-8 sm:gap-12 md:gap-16 lg:gap-20">
                    <div className="flex items-center gap-2">
                      <span className="text-lg sm:text-xl md:text-2xl font-bold text-white whitespace-nowrap">JavaScript</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-lg sm:text-xl md:text-2xl font-bold text-white whitespace-nowrap">PHP</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-lg sm:text-xl md:text-2xl font-bold text-white whitespace-nowrap">HTML</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-lg sm:text-xl md:text-2xl font-bold text-white whitespace-nowrap">CSS</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-lg sm:text-xl md:text-2xl font-bold text-white whitespace-nowrap">React</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-lg sm:text-xl md:text-2xl font-bold text-white whitespace-nowrap">Next.js</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-lg sm:text-xl md:text-2xl font-bold text-white whitespace-nowrap">Python</span>
                    </div>
                    <div className="flex items-center gap-2 mr-8 sm:mr-12 md:mr-16 lg:mr-[50px]">
                      <span className="text-lg sm:text-xl md:text-2xl font-bold text-white whitespace-nowrap">C++</span>
                    </div>
                  </div>
                ))}
                </div>
              </div>
            </div>
          </div>
          
          {/* Skills and Tech Stack Section */}
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 min-h-screen">
            <div className="w-full max-w-4xl mx-auto sm:text-center sm:px-8 mb-16">
              <h2 id="hard-skills" className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 scroll-mt-24">
                Hard Skill & Tech Stack
              </h2>
              <p className="text-gray-400 mt-6 text-lg">Technologies and tools I use to build web projects</p>
            </div>

            {/* Skills Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              
              {/* Frontend Development */}
              <div className="group bg-white/5 backdrop-blur-sm border border-purple-500/20 rounded-xl p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-white">Frontend Development</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {[
                    { name: 'React', icon: 'devicon-react-original colored' },
                    { name: 'Next.js', icon: 'devicon-nextjs-plain colored' },
                    { name: 'Tailwind CSS', icon: 'devicon-tailwindcss-original colored' },
                    { name: 'Bootstrap', icon: 'devicon-bootstrap-plain colored' },
                    { name: 'JavaScript', icon: 'devicon-javascript-plain colored' },
                    { name: 'HTML/CSS', icon: 'devicon-html5-plain colored' }
                  ].map((tech, idx) => (
                    <span key={idx} className="px-3 py-1.5 bg-purple-500/10 text-purple-300 rounded-lg text-sm border border-purple-500/20 hover:border-purple-500/40 transition-colors flex items-center gap-1.5">
                      <i className={tech.icon}></i>
                      {tech.name}
                    </span>
                  ))}
                </div>
              </div>

              {/* Backend Development */}
              <div className="group bg-white/5 backdrop-blur-sm border border-purple-500/20 rounded-xl p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-white">Backend Development</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {[
                    { name: 'Node.js', icon: 'devicon-nodejs-plain-wordmark colored' },
                    { name: 'PHP', icon: 'devicon-php-plain colored' },
                    { name: 'Laravel', icon: 'devicon-laravel-plain colored' },
                    { name: 'Express.js', icon: 'devicon-express-original' },
                    { name: 'REST API', icon: 'devicon-postman-plain colored' }
                  ].map((tech, idx) => (
                    <span key={idx} className="px-3 py-1.5 bg-purple-500/10 text-purple-300 rounded-lg text-sm border border-purple-500/20 hover:border-purple-500/40 transition-colors flex items-center gap-1.5">
                      <i className={tech.icon}></i>
                      {tech.name}
                    </span>
                  ))}
                </div>
              </div>

              {/* Machine Learning & Data Science */}
              <div className="group bg-white/5 backdrop-blur-sm border border-purple-500/20 rounded-xl p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-white">ML & Data Science</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {[
                    { name: 'Python', icon: 'devicon-python-plain colored' },
                    { name: 'TensorFlow', icon: 'devicon-tensorflow-original colored' },
                    { name: 'Pandas', icon: 'devicon-pandas-plain' },
                    { name: 'NumPy', icon: 'devicon-numpy-plain colored' },
                    { name: 'Scikit-learn', icon: 'devicon-scikitlearn-plain colored' }
                  ].map((tech, idx) => (
                    <span key={idx} className="px-3 py-1.5 bg-purple-500/10 text-purple-300 rounded-lg text-sm border border-purple-500/20 hover:border-purple-500/40 transition-colors flex items-center gap-1.5">
                      <i className={tech.icon}></i>
                      {tech.name}
                    </span>
                  ))}
                </div>
              </div>

              {/* Database */}
              <div className="group bg-white/5 backdrop-blur-sm border border-purple-500/20 rounded-xl p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-white">Database</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {[
                    { name: 'MySQL', icon: 'devicon-mysql-plain colored' },
                    { name: 'PostgreSQL', icon: 'devicon-postgresql-plain colored' }
                  ].map((tech, idx) => (
                    <span key={idx} className="px-3 py-1.5 bg-purple-500/10 text-purple-300 rounded-lg text-sm border border-purple-500/20 hover:border-purple-500/40 transition-colors flex items-center gap-1.5">
                      <i className={tech.icon}></i>
                      {tech.name}
                    </span>
                  ))}
                </div>
              </div>

              {/* Tools & Workflow - Full Width */}
              <div className="group md:col-span-2 bg-white/5 backdrop-blur-sm border border-purple-500/20 rounded-xl p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-white">Tools & Workflow</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {[
                    { name: 'Git', icon: 'devicon-git-plain colored' },
                    { name: 'GitHub', icon: 'devicon-github-original' },
                    { name: 'VS Code', icon: 'devicon-vscode-plain colored' },
                    { name: 'Figma', icon: 'devicon-figma-plain colored' },
                    { name: 'Postman', icon: 'devicon-postman-plain colored' },
                    { name: 'npm', icon: 'devicon-npm-original-wordmark colored' }
                  ].map((tech, idx) => (
                    <span key={idx} className="px-3 py-1.5 bg-purple-500/10 text-purple-300 rounded-lg text-sm border border-purple-500/20 hover:border-purple-500/40 transition-colors flex items-center gap-1.5">
                      <i className={tech.icon}></i>
                      {tech.name}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          </div>
          {/* Soft Skills Section */}
          <SoftSkills />

          {/* Projects Section */}
          <Projects />
          
          <Contact />
          
          {/* Footer */}
          <footer className="border-t border-purple-500/20 py-8 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <p className="text-center text-gray-400 text-sm">
                © 2025 Danendra Mahardhika. All rights reserved.
              </p>
            </div>
          </footer>
          
        </div>        
      </div>
    </div>
  );
}
