import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaLinkedin, FaFacebook, FaInstagram, FaEnvelope, FaPhone } from 'react-icons/fa';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Here you would typically send the form data to a server
    console.log('Form submitted:', formData);
    // Reset form after submission
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Contact Me
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold mb-4">Get in Touch</h3>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="name" className="block mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full p-2 bg-tokyo-night-bg border border-tokyo-night-accent rounded"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full p-2 bg-tokyo-night-bg border border-tokyo-night-accent rounded"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full p-2 bg-tokyo-night-bg border border-tokyo-night-accent rounded"
                  rows={4}
                ></textarea>
              </div>
              <button type="submit" className="bg-tokyo-night-accent text-tokyo-night-bg px-6 py-2 rounded hover:bg-opacity-80 transition-colors">
                Send Message
              </button>
            </form>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h3 className="text-2xl font-bold mb-4">Connect with Me</h3>
            <div className="flex space-x-4 mb-4">
              <a href="https://www.linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="text-3xl text-tokyo-night-accent hover:text-opacity-80">
                <FaLinkedin />
              </a>
              <a href="https://www.facebook.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-3xl text-tokyo-night-accent hover:text-opacity-80">
                <FaFacebook />
              </a>
              <a href="https://www.instagram.com/whynot_amjad" target="_blank" rel="noopener noreferrer" className="text-3xl text-tokyo-night-accent hover:text-opacity-80">
                <FaInstagram />
              </a>
              <a href="mailto:mamamjadali@gmail.com" className="text-3xl text-tokyo-night-accent hover:text-opacity-80">
                <FaEnvelope />
              </a>
              <a href="tel:+94752222264" className="text-3xl text-tokyo-night-accent hover:text-opacity-80">
                <FaPhone />
              </a>
            </div>
            <p>Feel free to reach out to me on any of these platforms. I'm always excited to connect with fellow developers and potential collaborators!</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;