import React from 'react';
import { motion } from 'framer-motion'; // Importamos Framer
import "./about.css";
import CV_Rico_Castillo_Miguel_Angel from "../../assets/CV_Rico_Castillo_Miguel_Angel.pdf";

const About = () => {
  return (
    <section className="about section" id="about">
      <motion.h2 
        className="section__title"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        About me
      </motion.h2>
      <span className="section__subtitle">My Introduction</span>

      <div className="about__container container grid">
        {/* Imagen: Entra desde la izquierda */}
        <motion.div 
          className="about__img"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        ></motion.div>

        <div className="about__data">
          <motion.p 
            className="about__description"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Soy un desarrollador <strong>Full-Stack con ojo de diseñador UI/UX que no se queda quieto</strong>. 
            Mi trabajo se centra en unificar una estética visual impecable con sistemas backend robustos 
            para crear aplicaciones web modernas, rápidas y centradas en el usuario.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <a download="" href={CV_Rico_Castillo_Miguel_Angel} className="button button--flex">
              Download CV
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About;