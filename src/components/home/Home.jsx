import React from 'react';
import { motion } from 'framer-motion'; // Importamos motion
import Social from './Social';
import "./home.css";
import Data from './Data';

const Home = () => {
  return (
    <section className="home section" id="home">
        <div className="home__container container grid">
            <div className="home__content grid">
                {/* 1. Las redes sociales entran desde la izquierda */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                >
                    <Social/>
                </motion.div>
                
                {/* 2. La imagen con efecto de flotación y entrada suave */}
                <motion.div 
                  className="home__img"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ 
                    opacity: 1, 
                    scale: 1,
                    // Efecto de flotación infinita
                    y: [0, -15, 0] 
                  }}
                  transition={{ 
                    duration: 0.8,
                    y: {
                      repeat: Infinity,
                      duration: 4,
                      ease: "easeInOut"
                    }
                  }}
                ></motion.div>

                {/* 3. El texto (Data) entra desde la derecha o abajo */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <Data/>
                </motion.div>
            </div>
        </div>
    </section>
  )
}

export default Home;