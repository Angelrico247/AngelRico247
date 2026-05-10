import React from 'react';
import { motion } from 'framer-motion';

const Data = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, 
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.6, ease: "easeOut" } 
    },
  };

  return (
    <motion.div 
      className="home__data"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.h1 className="home__tittle" variants={itemVariants}>
        Angel Rico
      </motion.h1>

      <motion.h3 className="home__subtitle" variants={itemVariants}>
        FullStack Developer & UI/UX Designer
      </motion.h3>

      <motion.a 
        href="https://www.linkedin.com/in/miguel-angel-rico-castillo-741487237/" 
        className="button button--flex"
        variants={itemVariants}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}   
      >
        Contact  
        <motion.i 
          className="contact--button uil uil-message"
          animate={{ x: [0, 5, 0] }} el icono
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        />
      </motion.a>
    </motion.div>
  );
};

export default Data;