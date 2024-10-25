import React from 'react';
import { motion } from 'framer-motion';

const experiences = [
  {
title: 'Marketing Team Member',
company: 'Old Royalists Engineering Professionals Association - OREPA',
period: 'Jan 2024 - Present',
description: 'Led efforts to promote associations events and initiatives through content creation for newsletters and social media. Managed event campaigns and member engagement while working on brand management and building partnerships to strengthen the engineering community network.'
},
{
title: 'Webmaster',
company: 'ITUM Computer Society',
period: 'May 2024 - Present',
description: 'Managing technical aspects and web presence of the society.',
},
{
title: 'Graphic Design Specialist',
company: 'ITUM English Club',
period: 'Nov 2023 - Aug 2024',
description: 'Created visually compelling flyers, brochures, and digital content to promote club events and initiatives. Collaborated with marketing team to ensure designs aligned with brand identity and effectively communicated key messages.',
},
{
title: 'Member',
company: 'Gavel Club of Institute of Technology, University of Moratuwa',
period: 'Jan 2024 - Present',
description: 'Active member focusing on public speaking skills development.',
},
{
title: 'Proprietor',
company: 'Maple Enterprises',
period: 'Feb 2023 - Present',
description: 'Leading business operations with focus on client relationship management and business development.',
},
{
title: 'Member',
company: 'Majlis-Ul-Islam, University of Moratuwa',
period: 'Dec 2022 - Aug 2024',
description: 'Contributed to cultural awareness and community engagement initiatives.',
}
  // Add more experiences here
];

const skillLevels = [
  { skill: 'Flutter', level: 90 },
  { skill: 'React Native', level: 85 },
  { skill: 'JavaScript', level: 92 },
  { skill: 'Python', level: 88 },
  { skill: 'Node.js', level: 87 },
];

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 bg-tokyo-night-bg bg-opacity-50">
      <div className="container mx-auto px-4">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Experience
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">Professional Journey</h3>
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                className="mb-6"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <h4 className="text-xl font-bold">{exp.title}</h4>
                <p className="text-tokyo-night-accent">{exp.company}</p>
                <p className="text-sm">{exp.period}</p>
                <p className="mt-2">{exp.description}</p>
              </motion.div>
            ))}
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-4">Skill Levels</h3>
            {skillLevels.map((skill, index) => (
              <motion.div
                key={skill.skill}
                className="mb-4"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="flex justify-between mb-1">
                  <span>{skill.skill}</span>
                  <span>{skill.level}%</span>
                </div>
                <div className="w-full bg-tokyo-night-bg rounded-full h-2.5">
                  <motion.div
                    className="bg-tokyo-night-accent h-2.5 rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.level}%` }}
                    transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                  ></motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;