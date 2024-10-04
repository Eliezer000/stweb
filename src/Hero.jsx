import React, { useState } from 'react';
import { motion } from 'framer-motion';
import logo from './assets/Logopng.png';
import ArrowRight from './assets/arrow-right-svgrepo-com.svg';
import ArrowDown from './assets/arrow-down-svgrepo-com.svg';
import MenuIcon from './assets/menu-duo-lg-svgrepo-com.svg';
import CloseIcon from './assets/basic-cancel-close-cross-delete-exit-svgrepo-com.svg';

const Hero = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const scrollToServices = () => {
    const servicesSection = document.getElementById('services');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <div className="min-h-screen bg-[#f7f3ed] text-[#1E2359] font-dan relative">
        <header className="fixed top-0 left-0 right-0 bg-[#f7f3ed] z-50">
          <div className="flex justify-between items-center w-full max-w-[1318px] py-5 px-4 md:py-10 mx-auto">
            <img src={logo} alt="Logo" className="h-8 sm:h-10 md:h-16 lg:h-20" />
            <button
              className="border-2 border-[#1E2359] text-[#1E2359] bg-transparent px-3 py-2 sm:px-4 sm:py-2 md:px-6 md:py-2 rounded-full 
                         font-semibold text-xs sm:text-sm md:text-lg transition-all duration-300 
                         hover:bg-[#1E2359] hover:text-white hover:shadow-lg flex items-center space-x-2
                         focus:outline-none focus:ring-2 focus:ring-[#1E2359] focus:ring-opacity-50"
            >
              <span>Agendar ahora</span>
              <img src={ArrowRight} alt="Arrow Right" className="w-3 h-3 md:w-4 md:h-4" />
            </button>
            <button onClick={toggleMenu} className="z-20">
              <img src={menuOpen ? CloseIcon : MenuIcon} alt="Menu Icon" className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8" />
            </button>
          </div>
        </header>

        {menuOpen && (
          <div 
            className="fixed inset-0 bg-[#f7f3ed] text-[#1E2359] flex flex-col items-center justify-center space-y-4 md:space-y-8 z-40"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl">Servicios</h2>
            <h2 className="text-2xl sm:text-3xl md:text-4xl">Proyectos</h2>
            <h2 className="text-2xl sm:text-3xl md:text-4xl">Contacto</h2>
            <button onClick={toggleMenu} className="absolute top-5 right-5">
              <img src={CloseIcon} alt="Close Menu" className="h-6 w-6 md:h-8 md:w-8" />
            </button>
          </div>
        )}

        <main className="flex flex-col items-center justify-center h-screen text-center px-4 pt-20">
          <motion.h1 
            className="font-coolvetica text-[5rem] sm:text-[7rem] md:text-[8rem] lg:text-[239.435px] leading-none text-[#1E2359] mb-4"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            SOFTNOVA
          </motion.h1>

          <motion.h2 
            className="font-dan text-[1.25rem] sm:text-[1.75rem] md:text-[2rem] lg:text-[45.487px] leading-normal text-[#1E2359]"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Soluciones empresariales integrales
          </motion.h2>

          <motion.button
            className="bg-[#1E2359] text-white px-5 py-3 sm:px-6 sm:py-3 md:px-8 md:py-4 rounded-full 
                       font-semibold text-sm md:text-lg transition-all duration-300 
                       hover:bg-[#2a307a] hover:shadow-lg 
                       focus:outline-none focus:ring-2 focus:ring-[#1E2359] focus:ring-opacity-50
                       transform hover:scale-105 mt-6 md:mt-10 flex items-center space-x-2"
            onClick={scrollToServices}
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <span>Ver nuestros servicios</span>
            <img src={ArrowDown} alt="Arrow Down" className="w-3 h-3 md:w-4 md:h-4" />
          </motion.button>
        </main>
      </div>

      <section id="services" className="min-h-screen bg-[#f7f3ed] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-dan text-[#1E2359] mb-12 text-center">Nuestros servicios</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {['Sistema de gestión', 'Desarrollo y diseño de webs y apps', 'Ecommerce', 'Ads'].map((service, index) => (
              <motion.div 
                key={index}
                className="bg-white p-6 rounded-lg shadow-lg"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <h3 className="text-xl font-semibold mb-4 text-[#1E2359]">{service}</h3>
                <ul className="space-y-2 text-[#1E2359]">
                  <li>Característica 1</li>
                  <li>Característica 2</li>
                  <li>Característica 3</li>
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;