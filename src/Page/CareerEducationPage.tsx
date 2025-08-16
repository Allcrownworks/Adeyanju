import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

interface CareerDetails {
  title: string;
  description: string;
  icon: string;
  path: string;
  steps: string[];
  resources: string[];
  salaryRange: string;
  skills: string[];
}

const CareerEducationPage: React.FC = () => {
  const { careerId } = useParams();
  const navigate = useNavigate();
  const [career, setCareer] = useState<CareerDetails | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading data
    setTimeout(() => {
      const careerData = getCareerData(careerId || '');
      setCareer(careerData);
      setIsLoading(false);
    }, 500);
  }, [careerId]);

  const getCareerData = (id: string): CareerDetails => {
    const careerMap: Record<string, CareerDetails> = {
      'app-developer': {
        title: 'App Developer',
        description: 'Build mobile applications for iOS and Android platforms',
        icon: '📱',
        path: '/careers/app-developer',
        steps: [
          'Learn programming fundamentals',
          'Choose a platform (iOS/Android)',
          'Master relevant languages (Swift, Kotlin, etc.)',
          'Build portfolio projects',
          'Apply for internships or junior positions'
        ],
        resources: [
          'Apple Developer Documentation',
          'Android Developer Guides',
          'Udacity Mobile Developer Nanodegree',
          'Flutter Documentation'
        ],
        salaryRange: '$60,000 - $130,000',
        skills: ['Mobile frameworks', 'UI/UX principles', 'API integration', 'Performance optimization']
      },
      'cloud-engineer': {
        title: 'Cloud Engineer',
        description: 'Design and maintain cloud infrastructure and services',
        icon: '☁️',
        path: '/careers/cloud-engineer',
        steps: [
          'Learn cloud computing fundamentals',
          'Get certified in AWS/Azure/GCP',
          'Master infrastructure as code (Terraform)',
          'Learn containerization and orchestration',
          'Build cloud architecture projects'
        ],
        resources: [
          'AWS Certified Solutions Architect',
          'Google Cloud Certification',
          'Terraform documentation',
          'Kubernetes official docs'
        ],
        salaryRange: '$90,000 - $160,000',
        skills: ['Cloud platforms', 'Networking', 'Security', 'Automation']
      },
      'prompt-engineer': {
        title: 'Prompt Engineer',
        description: 'Specialize in crafting effective AI prompts and interactions',
        icon: '🤖',
        path: '/careers/prompt-engineer',
        steps: [
          'Study natural language processing',
          'Master various AI models and their capabilities',
          'Develop testing methodologies for prompts',
          'Build a portfolio of effective prompts',
          'Stay updated with AI advancements'
        ],
        resources: [
          'OpenAI API documentation',
          'Prompt engineering guides',
          'Natural language processing courses',
          'AI model research papers'
        ],
        salaryRange: '$80,000 - $150,000',
        skills: ['NLP', 'Creative writing', 'Testing methodologies', 'AI systems']
      },
      'data-scientist': {
        title: 'Data Scientist',
        description: 'Extract insights from complex datasets using statistical methods',
        icon: '📊',
        path: '/careers/data-scientist',
        steps: [
          'Learn statistics and mathematics',
          'Master Python/R for data analysis',
          'Study machine learning algorithms',
          'Work on real-world datasets',
          'Develop communication skills for insights'
        ],
        resources: [
          'Kaggle competitions',
          'Fast.ai courses',
          'TensorFlow/PyTorch documentation',
          'Data science blogs'
        ],
        salaryRange: '$85,000 - $150,000',
        skills: ['Statistics', 'Machine learning', 'Data visualization', 'SQL']
      },
      'devops-engineer': {
        title: 'DevOps Engineer',
        description: 'Bridge development and operations with automation tools',
        icon: '🛠️',
        path: '/careers/devops-engineer',
        steps: [
          'Learn Linux/Unix systems',
          'Master CI/CD pipelines',
          'Study infrastructure as code',
          'Learn monitoring and logging',
          'Get cloud platform certifications'
        ],
        resources: [
          'Docker documentation',
          'Kubernetes official docs',
          'Terraform learning',
          'AWS/GCP/Azure certifications'
        ],
        salaryRange: '$95,000 - $170,000',
        skills: ['Automation', 'Cloud platforms', 'Containerization', 'Scripting']
      },
      'ux-designer': {
        title: 'UX Designer',
        description: 'Create intuitive and user-friendly digital experiences',
        icon: '🎨',
        path: '/careers/ux-designer',
        steps: [
          'Study human psychology and behavior',
          'Learn design principles and tools',
          'Master prototyping tools',
          'Conduct user research',
          'Build a strong design portfolio'
        ],
        resources: [
          'NN/g UX courses',
          'Figma/Sketch tutorials',
          'Don Norman books',
          'UX design blogs'
        ],
        salaryRange: '$70,000 - $140,000',
        skills: ['User research', 'Wireframing', 'Prototyping', 'Usability testing']
      },
      'cybersecurity': {
        title: 'Cybersecurity Specialist',
        description: 'Protect systems and networks from digital attacks',
        icon: '🔒',
        path: '/careers/cybersecurity',
        steps: [
          'Learn networking fundamentals',
          'Study operating system security',
          'Get security certifications',
          'Practice ethical hacking',
          'Stay updated with threats'
        ],
        resources: [
          'CompTIA Security+',
          'CEH certification',
          'OSCP training',
          'Security blogs'
        ],
        salaryRange: '$90,000 - $160,000',
        skills: ['Network security', 'Penetration testing', 'Risk assessment', 'Cryptography']
      },
      'blockchain': {
        title: 'Blockchain Developer',
        description: 'Build decentralized applications and smart contracts',
        icon: '⛓️',
        path: '/careers/blockchain',
        steps: [
          'Learn cryptography basics',
          'Master Solidity or other blockchain languages',
          'Understand consensus mechanisms',
          'Build DApps',
          'Study DeFi and NFT concepts'
        ],
        resources: [
          'Ethereum documentation',
          'Solidity tutorials',
          'Blockchain developer courses',
          'Web3.js docs'
        ],
        salaryRange: '$100,000 - $180,000',
        skills: ['Smart contracts', 'DApp development', 'Cryptography', 'Web3']
      },
      'ai-engineer': {
        title: 'AI/ML Engineer',
        description: 'Develop machine learning models and AI solutions',
        icon: '🧠',
        path: '/careers/ai-engineer',
        steps: [
          'Master Python and math fundamentals',
          'Study machine learning algorithms',
          'Learn deep learning frameworks',
          'Work on real-world projects',
          'Stay updated with research'
        ],
        resources: [
          'TensorFlow/PyTorch docs',
          'Fast.ai courses',
          'Machine learning books',
          'Research papers'
        ],
        salaryRange: '$110,000 - $190,000',
        skills: ['Deep learning', 'Neural networks', 'Data preprocessing', 'Model deployment']
      },
      'fullstack': {
        title: 'Full Stack Developer',
        description: 'Work on both frontend and backend systems',
        icon: '💻',
        path: '/careers/fullstack',
        steps: [
          'Learn HTML/CSS/JavaScript',
          'Master a frontend framework',
          'Learn backend development',
          'Understand databases',
          'Build full projects'
        ],
        resources: [
          'MDN Web Docs',
          'React/Vue/Angular docs',
          'Node.js learning',
          'Database tutorials'
        ],
        salaryRange: '$80,000 - $150,000',
        skills: ['Frontend frameworks', 'Backend development', 'APIs', 'Database management']
      },
      'ai-music-producer': {
        title: 'AI Music Producer',
        description: 'Create music using artificial intelligence tools and techniques',
        icon: '🎵',
        path: '/careers/ai-music-producer',
        steps: [
          'Learn music theory and composition',
          'Study digital audio workstations (DAWs)',
          'Master AI music tools (Amper, AIVA, etc.)',
          'Experiment with neural synthesis',
          'Build a portfolio of AI-assisted tracks'
        ],
        resources: [
          'Introduction to Music Information Retrieval',
          'Magenta Studio documentation',
          'AI Music Generation courses on Coursera',
          'OpenAI Jukebox resources'
        ],
        salaryRange: '$50,000 - $120,000',
        skills: ['Music theory', 'AI tools', 'Sound design', 'Mixing/mastering']
      },
      'video-ai-producer': {
        title: 'Video AI Producer',
        description: 'Generate and edit videos using AI-powered tools and algorithms',
        icon: '🎬',
        path: '/careers/video-ai-producer',
        steps: [
          'Learn traditional video editing',
          'Master AI video tools (Runway, Synthesia, etc.)',
          'Study computer vision basics',
          'Experiment with generative video models',
          'Develop automated editing workflows'
        ],
        resources: [
          'Adobe Premiere Pro tutorials',
          'Runway ML documentation',
          'Deepfake ethics courses',
          'Computer vision fundamentals'
        ],
        salaryRange: '$55,000 - $125,000',
        skills: ['Video editing', 'AI tools', 'Storytelling', 'Automation']
      }
    };

    return careerMap[id] || {
      title: 'Career Not Found',
      description: 'The requested career path does not exist.',
      steps: [],
      resources: [],
      salaryRange: 'N/A',
      skills: []
    };
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8 animate-fadeIn">
      <button 
        onClick={() => navigate(-1)}
        className="mb-6 flex items-center text-blue-500 hover:text-blue-700 transition-colors duration-300"
      >
        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
        </svg>
        Back to Careers
      </button>

      <div className="bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="p-8">
          <h1 className="text-3xl font-bold mb-4">{career?.title}</h1>
          <p className="text-lg text-gray-700 mb-6">{career?.description}</p>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-semibold mb-4 text-blue-600">How to Become One</h2>
              <ol className="space-y-3">
                {career?.steps.map((step, index) => (
                  <li key={index} className="flex items-start">
                    <span className="flex-shrink-0 bg-blue-100 text-blue-600 rounded-full h-6 w-6 flex items-center justify-center mr-3">
                      {index + 1}
                    </span>
                    <span>{step}</span>
                  </li>
                ))}
              </ol>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-blue-600">Key Skills</h2>
              <div className="flex flex-wrap gap-2">
                {career?.skills.map((skill, index) => (
                  <span key={index} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                    {skill}
                  </span>
                ))}
              </div>

              <h2 className="text-2xl font-semibold mt-6 mb-4 text-blue-600">Salary Range</h2>
              <p className="text-lg font-medium">{career?.salaryRange}</p>

              <h2 className="text-2xl font-semibold mt-6 mb-4 text-blue-600">Learning Resources</h2>
              <ul className="space-y-2">
                {career?.resources.map((resource, index) => (
                  <li key={index} className="flex items-start">
                    <svg className="flex-shrink-0 h-5 w-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>{resource}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CareerEducationPage;