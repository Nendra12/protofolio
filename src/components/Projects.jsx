'use client';
import Image from 'next/image';
import SplitText from './SplitText';

export default function Projects() {
  const handleAnimationComplete = () => {
      console.log('All letters have animated!');
  }   

  const projects = [
    {
      id: 1,
      title: 'Fixpoint',
      description: 'A Laravel-based building materials e-commerce platform that allows users to browse, purchase, and manage construction material products online.',
      image: '/p1.png',
      tags: ['Laravel', 'Tailwind CSS', 'MySQL'],
      liveUrl: '#',
      githubUrl: 'https://github.com/Nendra12/fixpoint.git',
      bg: '#FF923D'
    },
    {
      id: 2,
      title: 'GPX Store',
      description: 'A Laravel-based e-commerce platform that allows users to browse, purchase, and manage products online.',
      image: '/p2.png',
      tags: ['Laravel', 'Tailwind CSS', 'MySQL'],
      liveUrl: '#',
      githubUrl: 'https://github.com/Nendra12/Gpx-Store.git',
      bg: '#575DFF'
    },
    {
      id: 3,
      title: 'On The Sport',
      description: 'Sports News Website.',
      image: '/p3.png',
      tags: ['Laravel', 'Laravel Reverb', 'Tailwind CSS', 'MySQL'],
      liveUrl: '#',
      githubUrl: 'https://github.com/Nendra12/OnTheSport.git',
      bg: '#CC3535'
    },
    {
      id: 4,
      title: 'Cari Kost',
      description: 'A web platform that helps users search and discover available boarding houses near the Universitas Trunojoyo Madura campus, with details on location, facilities, and contact information.',
      image: '/p4.jpg',
      tags: ['PHP Native','Tailwind CSS', 'MySQL'],
      liveUrl: '#',
      githubUrl: 'https://github.com/Nendra12/Cari_kost.git',
      bg: '#B58267'
    },
    {
      id: 5,
      title: 'Cashier Management Application Desktop',
      description: 'A desktop-based application that assists cashiers in managing customer orders, processing transactions, and handling daily sales operations.',
      image: '/p5.jpg',
      tags: ['Python', 'Qt6', 'Sqlite'],
      liveUrl: '#',
      githubUrl: 'https://github.com/Nendra12/OnTheSport.git',
      bg: '#B0B0B0'

    },
    {
      id: 6,
      title: 'Sharjah Museum of Islamic Civilization',
      description: 'A tourism website that presents detailed information about the Sharjah Museum of Islamic Civilization, including its history, exhibitions, and visitor information.',
      image: '/p7.jpg',
      tags: ['HTML', 'CSS', 'Javascript'],
      liveUrl: '#',
      githubUrl: '#',
      bg: '#71BD44'
    },
    {
      id: 7,
      title: 'Indo Waroeng Prasmanan (IWP)',
      description: 'A culinary website for Indo Waroeng Prasmanan that showcases its buffet (prasmanan) concept and provides features such as table reservations, catering services, and menu information.',
      image: '/p6.jpg',
      tags: ['HTML', 'CSS', 'Javascript'],
      liveUrl: '#',
      githubUrl: 'https://github.com/Nendra12/iwp.git',
      bg: '#FAD746'
    },
    {
      id: 8,
      title: 'Ular Tangga Game',
      description: 'A Snakes and Ladders game that can switch between 2D and 3D modes.',
      image: '/p8.jpg',
      tags: ['C++'],
      liveUrl: '#',
      githubUrl: '#',
      bg: '#6E74FF'
    }
  ];

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10 border-t border-purple-500/20 py-20">
      <div className="w-full max-w-4xl mx-auto sm:text-center sm:px-8 mb-16">
        <h2 id="projects" className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 scroll-mt-24">
          My Projects
        </h2>
        <p className="text-gray-400 text-lg">
          Showcase of my recent work and personal projects
        </p>
      </div>
 
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-7xl mx-auto group">
        {projects.map((project) => (
          <div
            key={project.id}
            className="project-card rounded-xl overflow-hidden transition-all duration-500 cursor-pointer bg-white/5 border border-purple-500/20 flex flex-col justify-between hover:brightness-110  group-hover:opacity-40 hover:!opacity-100"
          >
          {/* Project Image */}
          <div>
            <div className="relative h-48 sm:h-56 md:h-64 lg:h-72 overflow-hidden rounded-xl" style={{ background: project.bg }}>
              <div className="absolute inset-0 z-1"></div>
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="scale-[0.85] shadow-xl rounded-xl object-cover transition-transform duration-700 ease-out hover:scale-[0.87]"
                sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 50vw, 33vw"
              />
            </div>


            {/* Project Info */}
            <div className="px-6 pt-6">
              <h3 className="text-xl font-bold text-white mb-3 hover:text-purple-400 transition-colors">
                {project.title}
              </h3>
              <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                {project.description}
              </p>

              {/* Tech Tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="px-2 py-1 bg-purple-500/10 text-purple-300 rounded text-xs border border-purple-500/20"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Buttons */}
            </div>
          </div>
            
            <div className="flex gap-3 px-6 pb-6">
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-4 py-2 bg-purple-500/10 text-purple-300 rounded-lg border border-purple-500/20 hover:border-purple-500/40 hover:bg-purple-500/20 transition-all duration-300 hover:scale-105"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                <span className="text-sm font-medium">GitHub</span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
