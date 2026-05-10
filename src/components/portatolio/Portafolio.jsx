import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Modal from '../modal/Modal';
import "./portafolio.css";

// 1. Definimos el arreglo de proyectos para que no marque error
const projects = [
  { 
    id: 1, 
    title: "Landing Page (Confidencial)", 
    description: "Desarrollo de landing page de alto impacto con animaciones avanzadas y enfoque en conversión para una empresa de Desarrollo de software confidencial.", 
    stack: ["React", "Tailwind", "Framer Motion"],
    url: "https://hiveky.com",
    img: "ruta/a/tu/imagen1.png" 
  },
  { 
    id: 2, 
    title: "Educational POS (Confidencial)", 
    description: "Sistema integral de punto de venta para gestión educativa con backend en FastAPI y base de datos relacional para Universidad confidencial", 
    stack: ["FastAPI", "React", "SQLAlchemy"],
    url: "#",
    img: "ruta/a/tu/imagen2.png"
  },
  { 
    id: 3, 
    title: "Web Service completo (Confidencial)", 
    description: "Desarrollo de una infraestructura robusta de Web Services y APIs diseñadas para el consumo de terceros. El sistema abarca desde la gestión de bases de datos y procesamiento de información, hasta la implementación de servicios de chat y notificaciones push en tiempo real mediante Firebase para una empresa confidencial", 
    stack: [".NET", "Firebase", "C#"],
    url: "#",
    img: "ruta/a/tu/imagen3.png"
  }
];

const Portafolio = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section className="portafolio section" id="portafolio">
      <h2 className="section__title">Portafolio</h2>
      <span className="section__subtitle">Proyectos destacados</span>

      <div className="cards__container">
        {/* Ahora 'projects' ya está definido y el .map funcionará correctamente */}
        {projects.map((project) => (
          <motion.div 
            key={project.id}
            className="card"
            layoutId={`card-${project.id}`}
            onClick={() => setSelectedProject(project)}
          >
            <div className="card__img" style={{ backgroundImage: `url(${project.img})` }}></div>
            <div className="card__content">
              <h3>{project.title}</h3>
            </div>
          </motion.div>
        ))}
      </div>

      <Modal 
  isOpen={!!selectedProject} 
  onClose={() => setSelectedProject(null)}
  layoutId={selectedProject ? `card-${selectedProject.id}` : null}
>
  {selectedProject && (
    <div className="modal__body">
      <h3 className="section__title" style={{ marginBottom: '0.5rem' }}>
        {selectedProject.title}
      </h3>
      
      <p className="modal__description">
        {selectedProject.description}
      </p>

      <div className="modal__stack">
        {selectedProject.stack.map(tech => (
          <span key={tech} className="stack__tag">{tech}</span>
        ))}
      </div>

      <a href={selectedProject.url} target="_blank" rel="noreferrer" className="button">
        Visitar sitio
      </a>
    </div>
  )}
</Modal>
    </section>
  );
};

export default Portafolio;