'use client';
import { useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger, useGSAP);

const SplitText = ({
  text,
  className = '',
  delay = 100,
  duration = 0.6,
  ease = 'power3.out',
  splitType = 'chars',
  from = { opacity: 0, y: 40 },
  to = { opacity: 1, y: 0 },
  threshold = 0.1,
  rootMargin = '-100px',
  textAlign = 'center',
  tag = 'p',
  onLetterAnimationComplete
}) => {
  const ref = useRef(null);
  const [chars, setChars] = useState([]);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    if (text) {
      // Split text into characters
      const characters = text.split('').map((char, index) => ({
        char: char === ' ' ? '\u00A0' : char,
        index
      }));
      setChars(characters);
      
      // Small delay to ensure DOM is ready
      setTimeout(() => {
        setIsReady(true);
      }, 100);
    }
  }, [text]);

  useGSAP(() => {
    if (!ref.current || chars.length === 0 || !isReady) return;

    const elements = ref.current.querySelectorAll('.split-char');
    if (elements.length === 0) return;

    // Set initial state
    gsap.set(elements, from);

    // Force ScrollTrigger to recalculate
    ScrollTrigger.refresh();

    // Animate on scroll
    const trigger = ScrollTrigger.create({
      trigger: ref.current,
      start: 'top 80%',
      once: true,
      onEnter: () => {
        gsap.to(elements, {
          ...to,
          duration,
          ease,
          stagger: delay / 1000,
          onComplete: () => {
            onLetterAnimationComplete?.();
          }
        });
      }
    });

    return () => {
      trigger.kill();
    };
  }, {
    dependencies: [chars, delay, duration, ease, JSON.stringify(from), JSON.stringify(to), isReady],
    scope: ref
  });

  // Refresh ScrollTrigger when component mounts and after layout
  useEffect(() => {
    if (isReady) {
      const timer = setTimeout(() => {
        ScrollTrigger.refresh();
      }, 200);
      return () => clearTimeout(timer);
    }
  }, [isReady]);

  const style = {
    textAlign,
    wordWrap: 'break-word'
  };

  const containerClasses = `split-parent inline-block ${className}`;

  const renderContent = () => (
    <span ref={ref} style={style} className={containerClasses}>
      {chars.map((item, index) => (
        <span
          key={index}
          className="split-char inline-block"
          style={{ display: 'inline-block' }}
        >
          {item.char}
        </span>
      ))}
    </span>
  );

  switch (tag) {
    case 'h1':
      return <h1 className={containerClasses}>{renderContent()}</h1>;
    case 'h2':
      return <h2 className={containerClasses}>{renderContent()}</h2>;
    case 'h3':
      return <h3 className={containerClasses}>{renderContent()}</h3>;
    case 'h4':
      return <h4 className={containerClasses}>{renderContent()}</h4>;
    case 'h5':
      return <h5 className={containerClasses}>{renderContent()}</h5>;
    case 'h6':
      return <h6 className={containerClasses}>{renderContent()}</h6>;
    default:
      return <div className={containerClasses}>{renderContent()}</div>;
  }
};

export default SplitText;
