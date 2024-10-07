import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import logo from './assets/Logopng.png';
import { ArrowDown, ArrowRight } from 'lucide-react';
import MenuIcon from './assets/menu-duo-lg-svgrepo-com.svg';
import CloseIcon from './assets/basic-cancel-close-cross-delete-exit-svgrepo-com.svg';
import CartIcon from './assets/cart.svg';
import MetaIcon from './assets/meta.svg';
import ScreenAppIcon from './assets/screenapp.svg';
import NetworkIcon from './assets/network.svg';
import SEOIcon from './assets/seo.svg';
import HostingIcon from './assets/hosting.svg';
import mercadoLibre from './assets/mercadolibre.svg';
import wordpress from './assets/wordpress.svg';
import tiendaNube from './assets/tiendanube.svg';
import phpIcon from './assets/php.svg';
import jsIcon from './assets/javascript.svg';
import githubIcon from './assets/github.svg';

const Hero = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const servicesRef = useRef(null);
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const scrollToServices = () => {
    servicesRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#f7f3ed] text-[#1E2359] font-raleway relative">
      {/* Header */}
      <motion.header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'bg-[#f7f3ed]/80 backdrop-blur-md' : ''
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex justify-between items-center w-full max-w-[1318px] py-5 px-4 md:py-10 mx-auto relative">
          <motion.img
            src={logo}
            alt="Logo"
            className="h-8 sm:h-10 md:h-16 lg:h-20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          />

          <button
            className="absolute left-1/2 transform -translate-x-1/2 border-2 border-[#1E2359] text-[#1E2359] bg-transparent px-3 py-2 sm:px-4 sm:py-2 md:px-6 md:py-2 rounded-full 
                       font-semibold text-xs sm:text-sm md:text-lg transition-all duration-300 
                       hover:bg-[#1E2359] hover:text-white hover:shadow-lg flex items-center space-x-2
                       focus:outline-none focus:ring-2 focus:ring-[#1E2359] focus:ring-opacity-50"
          >
            <span>Agendar ahora</span>
            <ArrowRight className="w-3 h-3 md:w-4 md:h-4" />
          </button>

          <motion.button
            onClick={toggleMenu}
            className="z-20"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <img
              src={menuOpen ? CloseIcon : MenuIcon}
              alt="Menu Icon"
              className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8"
            />
          </motion.button>
        </div>
      </motion.header>

      {/* Full-screen menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="fixed inset-0 bg-[#f7f3ed] text-[#1E2359] flex flex-col items-center justify-center z-40"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.3 }}
          >
            {['Servicios', 'Proyectos', 'Contacto'].map((item, index) => (
              <motion.h2
                key={item}
                className="text-2xl sm:text-3xl md:text-4xl cursor-pointer mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                whileHover={{ scale: 1.1 }}
              >
                {item}
              </motion.h2>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main section */}
      <motion.main
        className="flex flex-col items-center justify-center min-h-screen text-center px-4 pt-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.h1
          className="font-coolvetica text-[5rem] sm:text-[7rem] md:text-[8rem] lg:text-[239.435px] leading-none text-[#1E2359] mb-4"
          initial={{ y: -50 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          SOFTNOVA
        </motion.h1>

        <motion.h2
          className="font-raleway text-[1.25rem] sm:text-[1.75rem] md:text-[2rem] lg:text-[45.487px] leading-normal text-[#1E2359]"
          initial={{ y: 50 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          Soluciones empresariales integrales
        </motion.h2>

        <motion.button
          onClick={scrollToServices}
          className="border-[#1E2359] text-[#1E2359] bg-transparent px-6 py-3 md:px-8 md:py-4 rounded-full 
                     font-semibold text-sm md:text-lg transition-all duration-300 
                     hover:bg-[#2a307a] hover:text-white hover:shadow-lg 
                     focus:outline-none focus:ring-2 focus:ring-[#1E2359] focus:ring-opacity-50
                     mt-6 md:mt-10 flex items-center space-x-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <span>Explorar</span>
          <ArrowDown className="w-4 h-4" />
        </motion.button>
      </motion.main>
      {/* Sección de servicios */}
      <section ref={servicesRef} className="min-h-screen bg-[#f7f3ed] text-[#1E2359] font-raleway px-8 md:px-16 py-20">
        <div className="max-w-[1318px] mx-auto">
          <motion.h2
            className="text-4xl md:text-5xl font-semibold mb-2 text-left"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            Ver nuestros servicios
          </motion.h2>
          <motion.p
            className="text-lg md:text-xl text-left mb-8"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Descubre cómo nuestros servicios pueden ayudarte a optimizar y mejorar tu negocio.
          </motion.p>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <ServiceCard
              icon={NetworkIcon}
              title="Sistema de Gestión"
              items={[
                "Automatización de procesos",
                "Optimización de recursos",
                "Gestión de equipos"
              ]}
            />
            <ServiceCard
              icon={ScreenAppIcon}
              title="Desarrollo y diseño de Web y Apps"
              items={[
                "Desarrollo full-stack",
                "Diseño responsive",
                "Experiencia de usuario"
              ]}
            />
            <ServiceCard
              icon={CartIcon}
              title="Ecommerce"
              items={[
                "Carrito de compras",
                "Pasarelas de pago",
                "Gestión de inventarios"
              ]}
            />
            <ServiceCard
              icon={MetaIcon}
              title="Publicidad en Meta y Google Ads"
              items={[
                "Campañas en redes sociales",
                "Optimización SEO",
                "Análisis de métricas"
              ]}
            />
          </motion.div>
        </div>
      </section>
      {/* Projects section */}
      <section className="min-h-screen bg-[#f7f3ed] text-[#1E2359] font-raleway px-8 md:px-16 py-20">
        <div className="max-w-[1318px] mx-auto">
          <motion.h2
            className="text-4xl md:text-5xl font-semibold mb-2 text-center"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Ya funcionan con softnova
          </motion.h2>
          <motion.p
            className="text-lg md:text-xl text-center mb-12"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Descubre algunos de los proyectos que hemos completado y cómo hemos ayudado a nuestros clientes a alcanzar sus objetivos.
          </motion.p>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            {projects.map((project, index) => (
              <ProjectCard
                key={index}
                project={project}
                onClick={() => setSelectedProject(project)}
              />
            ))}
          </motion.div>
        </div>
      </section>
      {/* Nueva Sección: Herramientas gratuitas para desarrolladores */}
      {/* Nueva Sección: Herramientas gratuitas para desarrolladores */}
      <section className="py-20 px-4 bg-[#f7f3ed] flex">
        {/* Texto y logos en la izquierda */}
        <div className="w-1/3 pr-10">
          <h2 className="text-4xl font-bold mb-6">Herramientas gratuitas para desarrolladores</h2>
          <div className="flex flex-wrap space-x-4 mb-8">
            <img src={mercadoLibre} alt="Mercado Libre" className="w-12 h-12" />
            <img src={wordpress} alt="WordPress" className="w-12 h-12" />
            <img src={tiendaNube} alt="Tienda Nube" className="w-12 h-12" />
            <img src={phpIcon} alt="PHP" className="w-12 h-12" />
            <img src={jsIcon} alt="JavaScript" className="w-12 h-12" />
            <img src={githubIcon} alt="GitHub" className="w-12 h-12" />
          </div>
          {/* Pasadores debajo del texto */}
          <div className="flex space-x-4">
            <button className="w-10 h-10 bg-blue-600 text-white rounded-full">←</button>
            <button className="w-10 h-10 bg-blue-600 text-white rounded-full">→</button>
          </div>
        </div>

        {/* Tarjetas en la derecha */}
        <div className="w-2/3 flex overflow-x-auto space-x-6">
          <div className="bg-white shadow-lg rounded-lg p-6 w-80 flex-shrink-0">
            <img src={phpIcon} alt="PHP" className="w-20 h-20 mb-4" />
            <h3 className="text-2xl font-bold mb-4">Plugin PHP</h3>
            <p className="mb-4">Este plugin facilita la integración con APIs modernas y mejora la eficiencia en el backend.</p>
            <a href="https://github.com/plugin-php" className="text-blue-600">Ver en GitHub</a>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6 w-80 flex-shrink-0">
            <img src={jsIcon} alt="JavaScript" className="w-20 h-20 mb-4" />
            <h3 className="text-2xl font-bold mb-4">Biblioteca JS</h3>
            <p className="mb-4">Una herramienta completa para manejar DOM y mejorar la experiencia de usuario.</p>
            <a href="https://github.com/lib-js" className="text-blue-600">Ver en GitHub</a>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6 w-80 flex-shrink-0">
            <img src={wordpress} alt="WordPress" className="w-20 h-20 mb-4" />
            <h3 className="text-2xl font-bold mb-4">Extensión WordPress</h3>
            <p className="mb-4">Mejora tu sitio WordPress con esta extensión que optimiza SEO y rendimiento.</p>
            <a href="https://github.com/ext-wordpress" className="text-blue-600">Ver en GitHub</a>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6 w-80 flex-shrink-0">
            <img src={githubIcon} alt="GitHub" className="w-20 h-20 mb-4" />
            <h3 className="text-2xl font-bold mb-4">Integración GitHub</h3>
            <p className="mb-4">Automatiza tus flujos de trabajo con esta integración avanzada para GitHub Actions.</p>
            <a href="https://github.com/integration-github" className="text-blue-600">Ver en GitHub</a>
          </div>
        </div>
      </section>
      {/* Project details modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white rounded-lg p-8 max-w-2xl w-full"
              initial={{ scale: 0.9, y: 50 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 50 }}
            >
              <h3 className="text-2xl font-bold mb-4">{selectedProject.title}</h3>
              <img src={selectedProject.image} alt={selectedProject.title} className="w-full h-64 object-cover rounded-lg mb-4" />
              <p className="text-lg mb-4">{selectedProject.description}</p>
              <div className="flex justify-between items-center">
                <a
                  href={selectedProject.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#1E2359] text-white px-4 py-2 rounded-full font-semibold hover:bg-[#2a307a] transition-colors"
                >
                  Ver proyecto
                </a>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="text-[#1E2359] font-semibold hover:underline"
                >
                  Cerrar
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
const ServiceCard = ({ icon, title, items }) => (
  <motion.div
    className="border-2 border-[#1E2359] p-8 rounded-lg flex flex-col items-center"
    whileHover={{ scale: 1.05 }}
    transition={{ duration: 0.3 }}
  >
    <img src={icon} alt={title} className="w-20 h-20 mb-6" />
    <h3 className="text-3xl font-semibold mb-4">{title}</h3>
    <ul className="text-lg space-y-2">
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  </motion.div>
);
const ProjectCard = ({ project, onClick }) => (
  <motion.div
    className="bg-white rounded-lg overflow-hidden shadow-lg cursor-pointer"
    whileHover={{ scale: 1.05 }}
    transition={{ duration: 0.3 }}
    onClick={onClick}
  >
    <div className="relative h-48">
      <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
        <p className="text-white text-lg font-semibold">Ver detalles</p>
      </div>
    </div>
    <div className="p-4">
      <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
      <p className="text-sm line-clamp-2">{project.description}</p>
    </div>
  </motion.div>
);

const projects = [
  {
    title: "Proyecto 1",
    description: "Descripción detallada del proyecto 1. Aquí puedes explicar los objetivos, desafíos y resultados del proyecto.",
    image: "/placeholder.svg?height=300&width=400",
    link: "https://proyecto1.com"
  },
  {
    title: "Proyecto 2",
    description: "Descripción detallada del proyecto 2. Destaca las características únicas y el impacto que tuvo en el negocio del cliente.",
    image: "/placeholder.svg?height=300&width=400",
    link: "https://proyecto2.com"
  },
  {
    title: "Proyecto 3",
    description: "Descripción detallada del proyecto 3. Menciona las tecnologías utilizadas y cómo se adaptaron a las necesidades específicas del cliente.",
    image: "/placeholder.svg?height=300&width=400",
    link: "https://proyecto3.com"
  },
];

export default Hero;
  


