import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface CareerCardProps {
  title: string;
  description: string;
  icon: string;
  path: string;
}

const Inspiration: React.FC = () => {
  const navigate = useNavigate();
  const [isAnimating, setIsAnimating] = useState(false);

  const careers: CareerCardProps[] = [
    {
      title: 'App Developer',
      description: 'Build mobile applications for iOS and Android platforms',
      icon: '📱',
      path: '/careers/app-developer'
    },
    {
      title: 'Cloud Engineer',
      description: 'Design and maintain cloud infrastructure and services',
      icon: '☁️',
      path: '/careers/cloud-engineer'
    },
    {
      title: 'Prompt Engineer',
      description: 'Specialize in crafting effective AI prompts and interactions',
      icon: '🤖',
      path: '/careers/prompt-engineer'
    },
    {
      title: 'Data Scientist',
      description: 'Extract insights from complex datasets using statistical methods',
      icon: '📊',
      path: '/careers/data-scientist'
    },
    {
      title: 'DevOps Engineer',
      description: 'Bridge development and operations with automation tools',
      icon: '🛠️',
      path: '/careers/devops-engineer'
    },
    {
      title: 'UX Designer',
      description: 'Create intuitive and user-friendly digital experiences',
      icon: '🎨',
      path: '/careers/ux-designer'
    },
    {
      title: 'Cybersecurity Specialist',
      description: 'Protect systems and networks from digital attacks',
      icon: '🔒',
      path: '/careers/cybersecurity'
    },
    {
      title: 'Blockchain Developer',
      description: 'Build decentralized applications and smart contracts',
      icon: '⛓️',
      path: '/careers/blockchain'
    },
    {
      title: 'AI/ML Engineer',
      description: 'Develop machine learning models and AI solutions',
      icon: '🧠',
      path: '/careers/ai-engineer'
    },
    {
      title: 'Full Stack Developer',
      description: 'Work on both frontend and backend systems',
      icon: '💻',
      path: '/careers/fullstack'
    },
    {
      title: 'AI Music Producer',
      description: 'Create music using artificial intelligence tools and techniques',
      icon: '🎵',
      path: '/careers/ai-music-producer'
    },
    {
      title: 'Video AI Producer',
      description: 'Generate and edit videos using AI-powered tools and algorithms',
      icon: '🎬',
      path: '/careers/video-ai-producer'
    }
  ];

  const handleCardClick = (path: string) => {
    setIsAnimating(true);
    setTimeout(() => {
      navigate(path);
      setIsAnimating(false);
    }, 300);
  };

  return (
    <div className={`container mx-auto px-4 py-8 transition-all duration-300 ${isAnimating ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}`}>
      <h1 className="text-3xl font-bold text-center mb-8">Tech Career Paths</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {careers.map((career, index) => (
          <div 
            key={index}
            onClick={() => handleCardClick(career.path)}
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 cursor-pointer border border-gray-200 hover:border-blue-500 transform hover:-translate-y-1"
          >
            <div className="p-6">
              <div className="text-4xl mb-4">{career.icon}</div>
              <h2 className="text-xl font-semibold mb-2 text-gray-800">{career.title}</h2>
              <p className="text-gray-600">{career.description}</p>
              <div className="mt-4 text-blue-500 font-medium transition-all duration-300 hover:text-blue-700 hover:translate-x-1">
                Learn more →
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Inspiration;