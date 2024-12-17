import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronRight, Sparkles } from 'lucide-react';

// Importa tus imágenes SVG y PNG aquí
import ScreenAppIcon from './assets/screenapp.svg';
import NetworkIcon from './assets/network.svg';
import CartIcon from './assets/cart.svg';
import MetaIcon from './assets/meta.svg';
import ProjectMockup from './assets/Proyecto1.png';
import ProjectMockup2 from './assets/Proyecto2.png';
import ProjectMockup3 from './assets/Proyecto3.png';
import ProjectMockup4 from './assets/Proyecto4.png';

export default function SoftnovaWebsite() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [menuOpen]);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setMenuOpen(false);
  };

  const services = [
    { 
      icon: NetworkIcon, 
      title: "Sistema de Gestión Empresarial", 
      desc: "Revoluciona la eficiencia de tu empresa con nuestro sistema integral. Automatiza procesos, gestiona inventarios en tiempo real, y optimiza recursos con integraciones inteligentes que reducen costos operativos hasta un 40%."
    },
    { 
      icon: ScreenAppIcon, 
      title: "Diseño y Desarrollo de Web y Apps", 
      desc: "Transformamos tu visión en soluciones digitales innovadoras mediante el desarrollo web y movil. Caracterizadas por su diseño atractivo, rendimiento, seguridad y experiencia de usuario."
    },
    { 
      icon: CartIcon, 
      title: "E-commerce", 
      desc: "Potencia tus ventas online con nuestra plataforma e-commerce personalizada. Desde gestión avanzada de inventario hasta integración con múltiples pasarelas de pago, creamos tu tienda virtual completa."
    },
    { 
      icon: MetaIcon, 
      title: "Marketing Digital Estratégico", 
      desc: "Impulsa tu presencia digital con estrategias data-driven. Creamos y optimizamos tus campañas en Meta y Google con análisis avanzado de audiencias y metricas para maximizar tu retorno."
    }
  ];

  const projects = [
    {
      title: "Tuadrop",
      description: "Plataforma de dropshipping innovadora que conecta proveedores y vendedores en tiempo real.",
      image: ProjectMockup4,
      link: "https://www.tua.ar",
      tag: "Dropshipping App Movil - Version Web"
    },
    {
      title: "Vinos Wine Bars (EEUU)",
      description: "Sitio web elegante para una cadena de wine bars, con reservas en línea y catálogo de vinos.",
      image: ProjectMockup2,
      link: "https://www.vinoswinebars.com",
      tag: "Diseño y Desarrollo Web"
    },
    {
      title: "TuaWeb",
      description: "Plataforma de creación de sitios web drag-and-drop para emprendedores y pequeñas empresas.",
      image: ProjectMockup,
      link: "https://www.tuaweb.com",
      tag: "Diseño y Desarrollo Web"
    },
    {
      title: "Voglio",
      description: "E-commerce de moda con funcionalidades avanzadas de personalización de productos.",
      image: ProjectMockup3,
      link: "https://www.vogliofirmat.com",
      tag: "E-Commerce"
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-[#f7f3ed] text-[#1E2359] w-full font-['Helvetica Neue']">
      <header className="sticky top-0 z-50 w-full border-b border-[#1E2359]/10 bg-[#f7f3ed]/90 backdrop-blur-md transition-all duration-300" 
              style={{ height: `${Math.max(64, 96 - scrollY * 0.5)}px` }}>
        <div className="container mx-auto px-4 md:px-6 h-full flex items-center justify-between">
          <a className="flex items-center justify-center" 
             href="#inicio" 
             onClick={(e) => { e.preventDefault(); scrollToSection('inicio'); }}>
            <img 
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Logopng-tSindmcysb1dsJLuDjVxd5R5oUb05h.png" 
              alt="Softnova Logo" 
              className="h-12 w-auto transition-all duration-300" 
              style={{ height: `${Math.max(32, 48 - scrollY * 0.2)}px` }} 
            />
          </a>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {["Inicio", "Servicios", "Proyectos", "Cómo trabajamos", "Contáctanos"].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase().replace(/ /g, '-')}`}
                onClick={(e) => { e.preventDefault(); scrollToSection(item.toLowerCase().replace(/ /g, '-')); }}
                className="text-lg font-medium hover:text-[#1E2359]/70 transition-colors relative group"
              >
                {item}
                <span className="absolute left-0 right-0 bottom-0 h-0.5 bg-[#1E2359] transform scale-x-0 transition-transform duration-300 origin-left group-hover:scale-x-100"></span>
              </a>
            ))}
          </nav>
          
          <button 
            className="hidden md:inline-flex bg-[#1E2359] text-[#f7f3ed] px-6 py-3 shadow-lg hover:translate-y-[-2px] transition-all duration-300 ease-out"
            onClick={() => scrollToSection('contáctanos')}
          >
            Agendar una reunión
          </button>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-[#1E2359] z-50" 
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 bg-[#f7f3ed] z-40 transform transition-transform duration-300 ${
          menuOpen ? 'translate-x-0' : 'translate-x-full'
        } md:hidden flex flex-col`}
      >
        <div className="flex flex-col items-center justify-center h-full space-y-8 px-4">
          {["Inicio", "Servicios", "Proyectos", "Cómo trabajamos", "Contáctanos"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(/ /g, '-')}`}
              onClick={(e) => { 
                e.preventDefault(); 
                scrollToSection(item.toLowerCase().replace(/ /g, '-')); 
              }}
              className="text-xl font-medium hover:text-[#1E2359]/70 transition-colors px-4 py-2 w-full text-center"
            >
              {item}
            </a>
          ))}
          <button 
            className="bg-[#1E2359] text-[#f7f3ed] px-6 py-3 mt-4 shadow-lg hover:translate-y-[-2px] transition-all duration-300 ease-out w-full max-w-xs"
            onClick={() => { 
              scrollToSection('contáctanos'); 
              setMenuOpen(false); 
            }}
          >
            Agendar una reunión
          </button>
        </div>
      </div>

      <main className="flex-1">
        <section id="inicio" className="w-full py-24 md:py-32 lg:py-48 relative overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute w-[500px] h-[500px] -top-48 -right-48 bg-[#1E2359]/5 rounded-full blur-3xl" />
            <div className="absolute w-[500px] h-[500px] -bottom-48 -left-48 bg-[#1E2359]/5 rounded-full blur-3xl" />
          </div>
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="inline-flex items-center rounded-full border border-[#1E2359]/10 bg-[#1E2359]/5 px-4 py-1.5 text-sm">
                <span className="text-[#1E2359]">Innovación en Software</span>
                <Sparkles className="ml-2 h-4 w-4 text-[#1E2359]" />
              </div>
              <div className="space-y-2 max-w-3xl mx-auto">
                <h1 className="text-4xl font-normal sm:text-5xl md:text-6xl lg:text-7xl/none bg-clip-text text-transparent bg-gradient-to-r from-[#1E2359] to-[#1E2359]/70 leading-tight">
                  Convertimos tus ideas en software innovador
                </h1>
                <p className="mx-auto max-w-[700px] text-[#1E2359]/70 md:text-xl lg:text-2xl">
                  Desde la gestión hasta la expansión digital, creamos soluciones que impulsan tu éxito.
                </p>
              </div>
              <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 w-full md:w-auto">
                <button 
                  onClick={() => scrollToSection('contáctanos')}
                  className="w-full md:w-auto bg-[#1E2359] text-[#f7f3ed] text-lg py-4 px-8 shadow-lg hover:translate-y-[-2px] transition-all duration-300 ease-out"
                >
                  Agendar una reunión
                </button>
                <button 
                  onClick={() => scrollToSection('proyectos')}
                  className="w-full md:w-auto border-2 border-[#1E2359] text-[#1E2359] bg-[#f7f3ed] hover:bg-[#1E2359] hover:text-[#f7f3ed] text-lg py-4 px-8 transition-all duration-300 ease-out hover:translate-y-[-2px]"
                >
                  Explorar
                </button>
              </div>
            </div>
          </div>
        </section>

        <section id="servicios" className="w-full py-24 md:py-32 lg:py-48 relative overflow-hidden">
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-[#1E2359] to-[#1E2359]/70 leading-tight">
                Nuestros Servicios
              </h2>
              <p className="mt-4 text-xl text-[#1E2359]/70 max-w-3xl mx-auto">
                Soluciones tecnológicas a medida para llevar tu negocio al siguiente nivel
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {services.map((service) => (
                <div key={service.title} className="bg-white/50 backdrop-blur-sm hover:bg-white transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl p-8 border border-[#1E2359]/10">
                  <div className="w-24 h-24 rounded-lg bg-[#1E2359]/5 flex items-center justify-center mb-6 mx-auto">
                    <img src={service.icon} className="w-16 h-16" alt={service.title} />
                  </div>
                  <h3 className="text-[#1E2359] text-2xl font-semibold mb-4 text-center leading-tight">{service.title}</h3>
                  <p className="text-[#1E2359]/70 text-lg text-center leading-relaxed">{service.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="proyectos" className="w-full py-24 md:py-32 lg:py-48 bg-[#f7f3ed]">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-[#1E2359] to-[#1E2359]/70 leading-tight">
                Casos de Éxito
              </h2>
              <p className="mt-4 text-xl text-[#1E2359]/70 max-w-3xl mx-auto">
                Descubre cómo empresas ya potencian su negocio con Softnova
              </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {projects.map((project, index) => (
                <div 
                  key={project.title} 
                  className={`group relative bg-white/50 backdrop-blur-sm
                    border border-[#1E2359]/10 rounded-lg overflow-hidden 
                    ${index % 3 === 0 ? 'lg:col-span-2' : ''}`}
                >
                  <div className="p-8">
                    <span className="inline-block px-4 py-1.5 mb-6 rounded-full bg-[#1E2359]/5 text-[#1E2359] text-sm font-medium">
                      {project.tag}
                    </span>
                    <div className="flex flex-col lg:flex-row gap-8 items-center">
                      <div className="flex-1 space-y-4">
                        <h3 className="text-[#1E2359] text-2xl font-semibold leading-tight">
                          {project.title}
                        </h3>
                        <p className="text-[#1E2359]/70 text-lg leading-relaxed">
                          {project.description}
                        </p>
                        <a 
                          href={project.link}
                          className="inline-block bg-[#1E2359] text-[#f7f3ed] px-6 py-3 rounded-lg font-medium 
                            hover:translate-y-[-2px] transition-all duration-300"
                        >
                          Ver proyecto
                        </a>
                      </div>
                      <div className="w-full lg:w-1/2 aspect-[4/3] rounded-lg overflow-hidden">
                        <img 
                          src={project.image} 
                          alt={project.title}
                          className="w-full h-full object-cover object-center"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="cómo-trabajamos" className="w-full py-24 md:py-32 lg:py-48 relative overflow-hidden">
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-[#1E2359] to-[#1E2359]/70 leading-tight">
                Cómo Trabajamos
              </h2>
              <p className="mt-4 text-xl text-[#1E2359]/70 max-w-3xl mx-auto">
                Un proceso simple y efectivo para convertir tu visión en realidad
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Consulta Estratégica",
                  desc: "Comenzamos con una llamada donde escuchamos tus necesidades, analizamos tu empresa y definimos juntos el alcance, presupuesto y tiempo de implementación ideal para tu proyecto."
                },
                {
                  title: "Diseño y Desarrollo",
                  desc: "Nuestro equipo experto transforma tu visión en realidad, con un proceso iterativo de diseño, desarrollo e implementación, manteniendo revisiones constantes para asegurar tu satisfacción."
                },
                {
                  title: "Lanzamiento y Soporte",
                  desc: "Implementamos tu solución con capacitación completa para tu equipo, asegurando una transición suave. Además, proporcionamos soporte continuo para maximizar el valor de tu inversión."
                }
              ].map((step) => (
                <div key={step.title} className="bg-white/50 backdrop-blur-sm hover:bg-white transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl p-8 border border-[#1E2359]/10">
                  <h3 className="text-[#1E2359] text-2xl font-semibold mb-4">{step.title}</h3>
                  <p className="text-[#1E2359]/70 text-lg">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
  
        <section id="contáctanos" className="w-full py-24 md:py-32 lg:py-48 bg-[#1E2359] text-[#f7f3ed] relative overflow-hidden">
          <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8 bg-clip-text text-transparent bg-gradient-to-r from-[#f7f3ed] to-[#f7f3ed]/70 leading-tight">
              Impulsa tu Negocio al Siguiente Nivel
            </h2>
            <p className="mx-auto max-w-[700px] text-[#f7f3ed]/70 md:text-xl lg:text-2xl mb-12">
              ¿Listo para optimizar y automatizar tus procesos empresariales? Agenda una consulta gratuita y descubre cómo nuestras soluciones tecnológicas pueden transformar tu negocio.
            </p>
            <button className="bg-[#f7f3ed] text-[#1E2359] text-lg py-6 px-8 shadow-lg hover:translate-y-[-2px] transition-all duration-300 ease-out">
              Agendar una consulta estratégica gratuita
            </button>
          </div>
        </section>
      </main>
      <footer className="w-full py-8 bg-[#f7f3ed] text-[#1E2359] border-t border-[#1E2359]/10">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <div className="flex flex-col items-center gap-4 px-8 md:items-start md:gap-2 md:px-0">
              <a className="flex items-center justify-center" href="#">
                <img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Logopng-tSindmcysb1dsJLuDjVxd5R5oUb05h.png" alt="Softnova Logo" className="h-10 w-auto" />
              </a>
              <p className="text-center text-sm md:text-left text-[#1E2359]/70">© 2024 Softnova. Todos los derechos reservados.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}


https://freight-template.webflow.io/