import React from 'react';
import { motion } from 'framer-motion';
import { FaFileDownload, FaEye, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const About: React.FC = () => {
  const developerProfile = {
    name: "Mohamed Amjad",
    role: "Full Stack | Mobile Developer",
    email: "mamamjadali@gmail.com",
    expertise: "Mobile & Web Development",
    currentFocus: "Flutter & React Native Development",
    tagline: "Turning Ideas into Reality with Clean Code",
    socialLinks: {
      github: "https://github.com/amjad0202",
      linkedin: "https://www.linkedin.com/in/mohamedamjad/",
      twitter: "https://twitter.com/yourusername"
    }
  };

  const handleDownloadCV = () => {
    window.open('/cv.pdf', '_blank');
  };

  const handleViewCV = () => {
    window.open('/cv.pdf?view=true', '_blank');
  };

  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <motion.h2
          className="section-title text-4xl font-bold mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          About Me
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            className="flex flex-col items-center justify-center"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="profile-image mb-8 floating">
              <img src="src\assets\profile2.jpg" alt={developerProfile.name} />
            </div>
            <div className="flex gap-4 mb-6">
              <motion.a
                href={developerProfile.socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl hover:text-dark-accent transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaGithub />
              </motion.a>
              <motion.a
                href={developerProfile.socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl hover:text-dark-accent transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaLinkedin />
              </motion.a>
              <motion.a
                href={developerProfile.socialLinks.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl hover:text-dark-accent transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaTwitter />
              </motion.a>
            </div>
            <div className="flex gap-4">
              <motion.button
                onClick={handleDownloadCV}
                className="cv-button"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaFileDownload /> Download CV
              </motion.button>
              <motion.button
                onClick={handleViewCV}
                className="cv-button"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaEye /> View CV
              </motion.button>
            </div>
          </motion.div>

          <motion.div
            className="card p-8 rounded-lg"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h3 className="text-3xl font-bold mb-6 highlight-text">{developerProfile.name}</h3>
            <p className="text-xl mb-4 text-secondary">{developerProfile.role}</p>
            <div className="space-y-4 text-left">
              <p className="mb-4">
                <span className="font-semibold">Email:</span>{' '}
                <span className="text-secondary">{developerProfile.email}</span>
              </p>
              <p className="mb-4">
                <span className="font-semibold">Expertise:</span>{' '}
                <span className="text-secondary">{developerProfile.expertise}</span>
              </p>
              <p className="mb-4">
                <span className="font-semibold">Current Focus:</span>{' '}
                <span className="text-secondary">{developerProfile.currentFocus}</span>
              </p>
              <p className="text-lg italic">"{developerProfile.tagline}"</p>
            </div>
            <div className="mt-8">
              <h4 className="text-xl font-bold mb-4">Core Skills</h4>
              <div className="flex flex-wrap gap-2">
                {['React', 'Flutter', 'Node.js', 'TypeScript', 'Firebase'].map((skill) => (
                  <motion.span
                    key={skill}
                    className="skill-tag"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;