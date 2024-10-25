import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ProjectDetails from './ProjectDetails';

const projects = [
  {
    "title": "GrillinHill Restaurant Platform",
    "description": "A modern restaurant website with online reservation and ordering capabilities",
    "longDescription": "A comprehensive restaurant management solution featuring online reservations, menu management, and payment processing. Built with vanilla JavaScript, PHP, and HTML/CSS, the platform offers a seamless dining experience from booking to payment.",
    "image": "src/assets/img1.png",
    "techStack": [
        "HTML/CSS",
        "JavaScript",
        "PHP",
        "JSON"
    ],
    "features": [
        "Online table reservations",
        "Digital menu with cart functionality",
        "Payment processing integration",
        "Event booking system",
        "Catering service management"
    ],
    "challenges": [
        "Implementing a secure payment gateway",
        "Creating a responsive cart system",
        "Optimizing the reservation system for high traffic",
        "Managing real-time table availability"
    ],
    "demoLink": "https://grillinhill.com",
    "githubLink": "https://github.com/yourusername/grillinhill",
    "category": "Web",
    "screenshots": [
        "src/assets/grillnhill/about.png",
        "src/assets/grillnhill/list.png",
        "src/assets/grillnhill/pay.png",
        "src/assets/grillnhill/contact.png"
    ]
  },
  {
    title: 'SEYONI - Home Services Management System',
    description: 'Mobile app connecting service seekers with reliable service providers',
    longDescription: 'A comprehensive home services management platform built with Flutter and Node.js. Features include real-time service booking, provider tracking, secure payments, and emergency assistance. The platform streamlines the connection between service seekers and providers through an intuitive mobile interface.',
    image: 'src/assets/seyoni.png',
    techStack: ['Flutter', 'Node.js', 'MongoDB', 'Microsoft Azure'],
    features: [
      'Real-time service tracking',
      'In-app messaging',
      'Payment processing', 
      'Emergency assistance'
    ],
    challenges: [
      'Implementing real-time location tracking',
      'Building secure payment gateway',
      'Managing service scheduling system'
    ],
    demoLink: 'https://demo-link-2.com',
    githubLink: 'https://github.com/yourusername/seyoni',
    category: 'Mobile',
    screenshots: [
      'src/assets/seyoni/home.jpg',
      'src/assets/seyoni/chat.jpg',
      'src/assets/seyoni/form.jpg',
      'src/assets/seyoni/profile.jpg'
    ]
 },
];

const Projects: React.FC = () => {
  const [filter, setFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(project => project.category === filter);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <motion.h2
          className="section-title text-4xl font-bold mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Projects
        </motion.h2>
        
        <motion.div
          className="mb-8 flex justify-center space-x-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {['All', 'Web', 'Mobile'].map((category) => (
            <motion.button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-6 py-3 rounded-full transition-all duration-300 ${
                filter === category ? 'btn-primary' : 'card'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              className="project-card card rounded-lg overflow-hidden shadow-lg"
              variants={itemVariants}
              whileHover={{ y: -10, transition: { duration: 0.2 } }}
              onClick={() => setSelectedProject(project)}
            >
              <motion.img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-48 object-cover"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                <p className="mb-4 text-secondary">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.techStack.map((tech) => (
                    <span 
                      key={tech} 
                      className="skill-tag"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <motion.button 
                  className="btn-primary px-6 py-3 rounded-full w-full font-semibold"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setSelectedProject(project)}
                >
                  View Details
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <AnimatePresence>
          {selectedProject && (
            <ProjectDetails
              project={selectedProject}
              onClose={() => setSelectedProject(null)}
            />
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Projects;