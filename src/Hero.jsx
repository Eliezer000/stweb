import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import logo from './assets/Logopng.png';
import ArrowRight from './assets/arrow-right-svgrepo-com.svg';
import MenuIcon from './assets/menu-duo-lg-svgrepo-com.svg';
import CloseIcon from './assets/basic-cancel-close-cross-delete-exit-svgrepo-com.svg';
import CartIcon from './assets/cart.svg';
import MetaIcon from './assets/meta.svg';
import ScreenAppIcon from './assets/screenapp.svg';
import NetworkIcon from './assets/network.svg';
import CheckIcon from './assets/check.svg';

const Hero = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const servicesRef = useRef(null);

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
      {/* Header fijo con efecto blur */}
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
            <img src={ArrowRight} alt="Arrow Right" className="w-3 h-3 md:w-4 md:h-4" />
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

      {/* Menú de pantalla completa */}
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

      {/* Sección principal */}
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
          className="bg-[#1E2359] text-white px-6 py-3 md:px-8 md:py-4 rounded-full 
                     font-semibold text-sm md:text-lg transition-all duration-300 
                     hover:bg-[#2a307a] hover:shadow-lg 
                     focus:outline-none focus:ring-2 focus:ring-[#1E2359] focus:ring-opacity-50
                     mt-6 md:mt-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          whileHover={{ scale: 1.05, backgroundColor: "#2a307a" }}
          whileTap={{ scale: 0.95 }}
        >
          Ver nuestros servicios
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

      {/* Nueva sección: Nuestro servicio All-in-one */}
      <section className="min-h-screen bg-[#f7f3ed] text-[#1E2359] font-raleway px-8 md:px-16 py-20 overflow-hidden">
        <div className="max-w-[1318px] mx-auto relative">
          <motion.h2
            className="text-4xl md:text-5xl font-semibold mb-8 text-center"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Nuestro servicio All-in-one
          </motion.h2>
          <motion.p
            className="text-lg md:text-xl text-center mb-12"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Conectamos nuestros servicios principales para ofrecer una solución integral que llevará tu negocio al siguiente nivel.
          </motion.p>

          <motion.div
            className="relative"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <svg className="w-full h-auto" viewBox="0 0 800 600" fill="none" xmlns="http://www.w3.org/2000/svg">
              <motion.path
                d="M400 50 L200 250 L400 450 L600 250 L400 50"
                stroke="#1E2359"
                strokeWidth="2"
                fill="none"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2, ease: "easeInOut" }}
              />
              <motion.path
                d="M400 450 L400 550"
                stroke="#1E2359"
                strokeWidth="2"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1, ease: "easeInOut", delay: 2 }}
              />
            </svg>

            <AllInOneServiceCard
              icon={NetworkIcon}
              title="Sistema de Gestión"
              description="Automatiza y optimiza tus procesos internos"
              position="top"
            />
            <AllInOneServiceCard
              icon={ScreenAppIcon}
              title="Web y App"
              description="Crea una presencia digital impactante"
              position="left"
            />
            <AllInOneServiceCard
              icon={CartIcon}
              title="Ecommerce"
              description="Vende tus productos en línea de manera eficiente"
              position="right"
            />
            <AllInOneServiceCard
              icon={CheckIcon}
              title="Proyecto Listo"
              description="Tu negocio optimizado y listo para crecer"
              position="bottom"
            />
          </motion.div>

          <motion.div
            className="mt-16 text-center"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <h3 className="text-3xl font-semibold mb-4">¿Cómo funciona?</h3>
            <p className="text-lg mb-8">
              Nuestro enfoque integral combina estos servicios para crear una estrategia personalizada que impulsa el crecimiento de tu negocio:
            </p>
            <ol className="text-left list-decimal list-inside space-y-4">
              <li>Optimizamos tus procesos internos con nuestro Sistema de Gestión.</li>
              <li>Creamos una presencia digital atractiva con nuestro servicio de Web y App.</li>
              <li>Implementamos una plataforma de Ecommerce para maximizar tus ventas en línea.</li>
              <li>Entregamos un proyecto listo para impulsar tu negocio al siguiente nivel.</li>
            </ol>
          </motion.div>
        </div>
      </section>
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

const AllInOneServiceCard = ({ icon, title, description, position }) => {
  const positionClasses = {
    top: "absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2",
    left: "absolute top-1/2 left-0 transform -translate-x-1/2 -translate-y-1/2",
    right: "absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2",
    bottom: "absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2",
  };

  return (
    <motion.div
      className={`${positionClasses[position]} bg-white border-2 border-[#1E2359] p-4 rounded-lg flex flex-col items-center text-center w-48 sm:w-56 md:w-64`}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: 0.8 }}
    >
      <img src={icon} alt={title} className="w-12 h-12 mb-2" />
      <h3 className="text-lg font-semibold mb-1">{title}</h3>
      <p className="text-xs">{description}</p>
    </motion.div>
  );
};

export default Hero;