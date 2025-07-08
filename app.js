document.querySelector(".main").addEventListener(
  "wheel",
  function (event) {
    event.preventDefault();
    this.scrollBy({
      top: event.deltaY * 2, // Reduce la velocidad del desplazamiento
      behavior: "smooth",
    });
  },
  { passive: false }
);

document.addEventListener("DOMContentLoaded", function () {
  const elements = document.querySelectorAll(".fade"); // Selecciona todos los elementos con fade

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          entry.target.classList.remove("hidden");
        } else {
          entry.target.classList.remove("visible");
          entry.target.classList.add("hidden");
        }
      });
    },
    { threshold: 0.3 }
  );

  elements.forEach((el) => observer.observe(el)); // Observa cada elemento con .fade
});

document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll("section[id]"); // Secciones con ID
  const navLinks = document.querySelectorAll(".nav__link"); // Links del menú

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          let id = entry.target.id; // Obtener el ID de la sección en pantalla

          // Remover la clase 'active' de todos los enlaces
          navLinks.forEach((link) =>
            link.classList.remove("nav__link--active")
          );

          // Agregar la clase 'active' al enlace correspondiente
          let activeLink = document.querySelector(`.nav__link[href="#${id}"]`);
          if (activeLink) activeLink.classList.add("nav__link--active");
        }
      });
    },
    { threshold: 0.6 } // Se activa cuando el 60% de la sección está en pantalla
  );

  // Observar cada sección
  sections.forEach((section) => observer.observe(section));
});

tsParticles
  .load("tsparticles", {
    particles: {
      number: {
        value: 150,
      },
      color: {
        value: "#fff",
      },
      shape: {
        type: "circle",
      },
      opacity: {
        value: 0.5,
      },
      size: {
        value: 1,
      },
      links: {
        enable: true,
        distance: 150,
        color: "666",
        opacity: 0.4,
      },
      move: {
        enable: true,
        speed: 1,
      },
    },
    interactivity: {
      events: {
        onHover: {
          enable: true,
          mode: "repulse",
        },
      },
    },
    background: {
      color: "#transparent",
    },
  })
  .then(() => {
    console.log("tsParticles cargado correctamente");
  })
  .catch((error) => {
    console.error("Error cargando tsParticles:", error);
  });
