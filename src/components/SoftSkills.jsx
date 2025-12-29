'use client';
import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SplitText from './SplitText';

gsap.registerPlugin(ScrollTrigger);

export default function SoftSkills() {
  const containerRef = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  const skills = [
    { name: 'Communication', percentage: 70 },
    { name: 'Leadership', percentage: 60 },
    { name: 'Teamwork', percentage: 75 },
    { name: 'Flexibility', percentage: 70 },
    { name: 'Problem Solving', percentage: 80 },
    { name: 'Time Management', percentage: 65 }
  ];

  const handleAnimationComplete = () => {
    console.log('All letters have animated!');
  };

  useEffect(() => {
    if (!containerRef.current || hasAnimated) return;

    const skillBars = containerRef.current.querySelectorAll('.skill-bar');
    
    ScrollTrigger.create({
      trigger: containerRef.current,
      start: 'top 85%',
      once: true,
      onEnter: () => {
        setHasAnimated(true);
        skillBars.forEach((bar, index) => {
          gsap.fromTo(bar,
            { width: '0%' },
            {
              width: `${skills[index].percentage}%`,
              duration: 1.5,
              ease: 'power3.out',
              delay: index * 0.1
            }
          );
        });
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [hasAnimated]);

  return (
    <div ref={containerRef} className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 border-t border-purple-500/20 py-20">
      <div className="w-full max-w-4xl mx-auto sm:text-center sm:px-8 mb-16">
        <h2 id="soft-skills" className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 scroll-mt-24">
            Soft Skill
        </h2>
        <p className="text-gray-400 mt-6 text-lg">
          Personal qualities that help me work effectively with others
        </p>
      </div>

      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {skills.map((skill, index) => (
          <div key={index} className="space-y-2">
            <div className="flex justify-between items-center mb-2">
              <span className="text-white font-medium text-lg">{skill.name}</span>
              <span className="text-purple-400 font-semibold">{skill.percentage}%</span>
            </div>
            <div className="w-full bg-purple-900/20 rounded-full h-3 overflow-hidden border border-purple-500/20">
              <div
                className="skill-bar h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full relative overflow-hidden"
                style={{ width: '0%' }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer"></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
