import React from 'react';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';
import { FaSun, FaMoon } from 'react-icons/fa';

interface HeaderProps {
  theme: 'dark' | 'light';
  toggleTheme: () => void;
}

const Header: React.FC<HeaderProps> = ({ theme, toggleTheme }) => {
  return (
    <motion.header
      className="fixed w-full z-10 bg-tokyo-night-bg bg-opacity-90 backdrop-blur-sm"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold gradient-text">MA</div>
        <nav>
          <ul className="flex space-x-6">
            {['About', 'Skills', 'Projects', 'Experience', 'Contact'].map((item) => (
              <li key={item}>
                <Link
                  to={item.toLowerCase()}
                  smooth={true}
                  duration={500}
                  className="cursor-pointer hover:text-tokyo-night-accent transition-colors"
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <button onClick={toggleTheme} className="p-2 rounded-full hover:bg-tokyo-night-accent transition-colors">
          {theme === 'dark' ? <FaSun /> : <FaMoon />}
        </button>
      </div>
    </motion.header>
  );
};

export default Header;