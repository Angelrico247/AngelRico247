import React from "react";
import { motion } from "framer-motion"; //
import "./skills.css";
import imagenes from "../imagenes";

const Skills = () => {
  // Definimos la "receta" de animación para el contenedor
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1, // Las tarjetas aparecen con 0.1s de diferencia
      },
    },
  };

  // Definimos cómo se mueve cada tarjeta individual
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  const myStack = [
    { name: "HTML", img: imagenes.html },
    { name: "CSS", img: imagenes.css },
    { name: "JavaScript", img: imagenes.js },
    { name: "React", img: imagenes.react },
    { name: "Bootstrap", img: imagenes.bootstrap },
    { name: "Sass", img: imagenes.sass },
    { name: "Tailwind", img: imagenes.tailwind },
    { name: "Figma", img: imagenes.figma },
    { name: "Typescript", img: imagenes.tp },
    { name: "Jquery", img: imagenes.jquery },
    { name: "Php", img: imagenes.php },
    { name: "Python", img: imagenes.python },
    { name: "Cs", img: imagenes.cs },
    { name: "Sql", img: imagenes.sql },
  ];

  return (
    <section className="skills section" id="skills">
      <div className="skills__container">
        <h2 className="section__title">Skills</h2>
        <span className="section__subtitle">Stack</span>
      </div>

      <motion.div
        className="frontend__container"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="frontend">
          {myStack.map((skill, index) => (
            <motion.div
              key={index}
              className="skill__box"
              variants={itemVariants}
              whileHover={{
                scale: 1.05,
                translateY: -5,
                transition: { duration: 0.2 },
              }}
            >
              <img
                className="img__skill"
                src={skill.img}
                loading="lazy"
                alt={skill.name}
              />
              <h3 className="skill__title">{skill.name}</h3>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Skills;
