import Image from "next/image";
import CardNav from "@/components/CardNav";
import LightPillar from "@/components/LightPillar";
import TiltedCard from "@/components/TiltedCard";
import NeonCursor from "@/components/NeonCursor";
import CircularText from "@/components/CircularText";
import { PointerHighlight } from "@/components/ui/pointer-highlight";
import Link from "next/link";

export default function Home() {
  const items = [
    {
      label: "About",
      bgColor: "#0D0716",
      textColor: "#fff",
      links: [
        { label: "Company", ariaLabel: "About Company" },
        { label: "Careers", ariaLabel: "About Careers" }
      ]
    },
    {
      label: "Projects", 
      bgColor: "#170D27",
      textColor: "#fff",
      links: [
        { label: "Featured", ariaLabel: "Featured Projects" },
        { label: "Case Studies", ariaLabel: "Project Case Studies" }
      ]
    },
    {
      label: "Contact",
      bgColor: "#271E37", 
      textColor: "#fff",
      links: [
        { label: "Email", ariaLabel: "Email us" },
        { label: "Twitter", ariaLabel: "Twitter" },
        { label: "LinkedIn", ariaLabel: "LinkedIn" }
      ]
    }
  ];

  return (
    <div className="min-h-screen overflow-x-hidden relative">
      <NeonCursor />
      <div className="fixed inset-0 w-full h-full pointer-events-none z-0">
        <LightPillar
          topColor="#5227FF"
          bottomColor="#FF9FFC"
          intensity={1.0}
          rotationSpeed={0.3}
          glowAmount={0.005}
          pillarWidth={3.0}
          pillarHeight={0.4}
          noiseIntensity={0.5}
          pillarRotation={0}
          interactive={false}
          mixBlendMode="screen"
        />
      </div>
      <div className="relative z-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="sticky top-0 z-20">
            <CardNav
              logo="/logo.png"
              logoAlt="My Logo"
              items={items}
              baseColor="#fff"
              menuColor="#fff"
              buttonBgColor="#111"
              buttonTextColor="#fff"
              ease="power3.out"
            />
          </div>
          <div className="pt-4 grid grid-cols-1 lg:grid-cols-12 min-h-[calc(100vh-7rem)]"> 
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
                <div className="absolute -bottom-12 -left-12 z-10">
                  <CircularText
                    text="Contact ** me ** "
                    onHover="speedUp"
                    spinDuration={15}
                    className="w-[140px] h-[140px]"
                  />
                </div>
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
            
            <div className="lg:col-span-6 flex flex-col items-start justify-center gap-4 px-4 sm:px-6 lg:px-8 py-4 lg:py-0 order-2 lg:order-1">
              <h1 className="text-white text-3xl sm:text-4xl lg:text-5xl font-bold">Hi, I'm <PointerHighlight>Danendra Mahardhika.</PointerHighlight></h1>
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

              <div className="flex flex-wrap items-center gap-4 sm:gap-7 py-4 text-xs uppercase tracking-widest text-gray-300 group">
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
      </div>
    </div>
  );
}
