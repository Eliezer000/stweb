import React, { useState } from 'react';
import logo from './assets/Logopng.png';
import ArrowRight from './assets/arrow-right-svgrepo-com.svg';
import MenuIcon from './assets/menu-duo-lg-svgrepo-com.svg';
import CloseIcon from './assets/basic-cancel-close-cross-delete-exit-svgrepo-com.svg'; // Asegúrate de que estas rutas sean correctas

const Hero = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="min-h-screen bg-[#f7f3ed] text-[#1E2359] font-raleway relative">
      {/* Header adaptado */}
      <header className="flex justify-between items-center w-full max-w-[1318px] py-5 px-4 md:py-10 mx-auto relative z-10">
        {/* Logo responsive */}
        <img src={logo} alt="Logo" className="h-8 sm:h-10 md:h-16 lg:h-20" />

        {/* Botón "Agendar ahora" responsive */}
        <button
          className="absolute left-1/2 transform -translate-x-1/2 border-2 border-[#1E2359] text-[#1E2359] bg-transparent px-3 py-2 sm:px-4 sm:py-2 md:px-6 md:py-2 rounded-full 
                     font-semibold text-xs sm:text-sm md:text-lg transition-all duration-300 
                     hover:bg-[#1E2359] hover:text-white hover:shadow-lg flex items-center space-x-2
                     focus:outline-none focus:ring-2 focus:ring-[#1E2359] focus:ring-opacity-50"
        >
          <span>Agendar ahora</span>
          <img src={ArrowRight} alt="Arrow Right" className="w-3 h-3 md:w-4 md:h-4" />
        </button>

        {/* Ícono del menú con ajuste responsive */}
        <button onClick={toggleMenu} className="z-20">
          <img src={menuOpen ? CloseIcon : MenuIcon} alt="Menu Icon" className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8" />
        </button>
      </header>

      {/* Menú de pantalla completa */}
      {menuOpen && (
        <div className="fixed inset-0 bg-[#f7f3ed] text-[#1E2359] flex flex-col items-center justify-center space-y-4 md:space-y-8 z-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl">Servicios</h2>
          <h2 className="text-2xl sm:text-3xl md:text-4xl">Proyectos</h2>
          <h2 className="text-2xl sm:text-3xl md:text-4xl">Contacto</h2>
          {/* Ícono de cruz para cerrar el menú */}
          <button onClick={toggleMenu} className="absolute top-5 right-5">
            <img src={CloseIcon} alt="Close Menu" className="h-6 w-6 md:h-8 md:w-8" />
          </button>
        </div>
      )}

      {/* Sección principal con ajustes responsivos */}
      <main className="flex flex-col items-center justify-center h-[calc(100vh-80px)] text-center px-4">
        {/* Texto SOFTNOVA adaptado */}
        <h1 className=" text-[5rem] sm:text-[7rem] md:text-[8rem] lg:text-[239.435px] leading-none text-[#1E2359] mb-4">
          SOFTNOVA
        </h1>

        {/* Subtítulo (responsive y alineado correctamente) */}
        <h2 className="font-Hola text-[1.25rem] sm:text-[1.75rem] md:text-[2rem] lg:text-[45.487px] leading-normal text-[#1E2359]">
          Soluciones empresariales integrales
        </h2>

        {/* Botón "Ver nuestros servicios" responsive */}
        <button
          className="bg-[#1E2359] text-white px-5 py-3 sm:px-6 sm:py-3 md:px-8 md:py-4 rounded-full 
                     font-semibold text-sm md:text-lg transition-all duration-300 
                     hover:bg-[#2a307a] hover:shadow-lg 
                     focus:outline-none focus:ring-2 focus:ring-[#1E2359] focus:ring-opacity-50
                     transform hover:scale-105 mt-6 md:mt-10"
        >
          Ver nuestros servicios
        </button>
      </main>
    </div>
  );
};

export default Hero;
