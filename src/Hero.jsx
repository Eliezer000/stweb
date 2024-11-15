import React, { useState, useEffect } from 'react'
import { Menu, X, ChevronRight, Sparkles, Instagram, Mail } from 'lucide-react'

// Importa tus imágenes SVG y PNG aquí
import ScreenAppIcon from './assets/screenapp.svg'
import NetworkIcon from './assets/network.svg'
import CartIcon from './assets/cart.svg'
import MetaIcon from './assets/meta.svg'
import ProjectMockup from './assets/Proyecto1.png'
import ProjectMockup2 from './assets/Proyecto2.png'
import ProjectMockup3 from './assets/Proyecto3.png'
import ProjectMockup4 from './assets/Proyecto4.png'
import Logo from './assets/Logopng.png'

export default function SoftnovaWebsite() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
  }, [menuOpen])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const offset = 80
      const bodyRect = document.body.getBoundingClientRect().top
      const elementRect = element.getBoundingClientRect().top
      const elementPosition = elementRect - bodyRect
      const offsetPosition = elementPosition - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
    setMenuOpen(false)
  }

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
  ]

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
  ]

  const timeline = [
    {
      year: "Paso 1",
      title: "Consulta Estratégica",
      description: "Comenzamos con una llamada donde escuchamos tus necesidades, analizamos tu empresa y definimos juntos el alcance, presupuesto y tiempo de implementación ideal para tu proyecto."
    },
    {
      year: "Paso 2",
      title: "Diseño y Desarrollo",
      description: "Nuestro equipo experto transforma tu visión en realidad, con un proceso iterativo de diseño, desarrollo e implementación, manteniendo revisiones constantes para asegurar tu satisfacción."
    },
    {
      year: "Paso 3",
      title: "Lanzamiento y Soporte",
      description: "Implementamos tu solución con capacitación completa para tu equipo, asegurando una transición suave. Además, proporcionamos soporte continuo para maximizar el valor de tu inversión."
    }
  ]

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-gray-900 via-gray-900 to-gray-800 text-white w-full font-['Helvetica Neue']">
      <style jsx global>{`
        .filter.invert {
          filter: invert(1) brightness(100);
        }
        .timeline-dot::before {
          content: '';
          position: absolute;
          left: -39px;
          top: 0;
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: #fff;
          border: 4px solid #1a1a1a;
        }
      `}</style>
      
      {/* Header con blur constante */}
      <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-gray-900/30 backdrop-blur-xl transition-all duration-300" 
              style={{ height: `${Math.max(64, 96 - scrollY * 0.5)}px` }}>
        <div className="container mx-auto px-4 md:px-6 h-full flex items-center justify-between">
          <a className="flex items-center justify-center" 
             href="#inicio" 
             onClick={(e) => { e.preventDefault(); scrollToSection('inicio'); }}>
            <img 
              src={Logo}
              alt="Softnova Logo" 
              className="h-12 w-auto transition-all duration-300" 
              style={{ height: `${Math.max(32, 48 - scrollY * 0.2)}px` }} 
            />
          </a>
          
          <nav className="hidden md:flex items-center gap-8">
            {["Inicio", "Servicios", "Proyectos", "Cómo trabajamos", "Contáctanos"].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase().replace(/ /g, '-')}`}
                onClick={(e) => { e.preventDefault(); scrollToSection(item.toLowerCase().replace(/ /g, '-')); }}
                className="text-lg font-medium hover:text-white/70 transition-colors relative group"
              >
                {item}
                <span className="absolute left-0 right-0 bottom-0 h-0.5 bg-white transform scale-x-0 transition-transform duration-300 origin-left group-hover:scale-x-100"></span>
              </a>
            ))}
          </nav>
          
          <button 
            className="hidden md:inline-flex bg-white text-gray-900 px-6 py-3 shadow-lg hover:translate-y-[-2px] transition-all duration-300 ease-out"
            onClick={() => scrollToSection('contáctanos')}
          >
            Agendar una reunión
          </button>
          
          <button 
            className="md:hidden text-white z-50" 
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      <div 
        className={`fixed inset-0 bg-gray-900 z-40 transform transition-transform duration-300 ${
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
              className="text-xl font-medium hover:text-white/70 transition-colors px-4 py-2 w-full text-center"
            >
              {item}
            </a>
          ))}
          <button 
            className="bg-white text-gray-900 px-6 py-3 mt-4 shadow-lg hover:translate-y-[-2px] transition-all duration-300 ease-out w-full max-w-xs"
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
            <div className="absolute w-[500px] h-[500px] -top-48 -right-48 bg-purple-500/20 rounded-full blur-3xl" />
            <div className="absolute w-[500px] h-[500px] -bottom-48 -left-48 bg-blue-500/20 rounded-full blur-3xl" />
            <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
          </div>
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="flex flex-col items-center space-y-4 text-center">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400 max-w-3xl mx-auto leading-tight">
                Convertimos tus ideas en software innovador
              </h1>
              <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">
                Desde la gestión hasta la expansión digital, creamos soluciones que impulsan tu éxito.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                <button 
                  onClick={() => scrollToSection('contáctanos')}
                  className="px-8 py-3 bg-white text-gray-900 rounded-full font-medium hover:bg-gray-100 transition-colors duration-200"
                >
                  Agendar una reunión
                </button>
                <button 
                  onClick={() => scrollToSection('proyectos')}
                  className="px-8 py-3 bg-gray-800 text-white border border-gray-700 rounded-full font-medium hover:bg-gray-700 transition-colors duration-200"
                >
                  Explorar
                </button>
              </div>
              <div className="grid grid-cols-3 gap-8 mt-16 w-full max-w-3xl mx-auto">
                {[
                  { label: "Proyectos Completados", value: "?+" },
                  { label: "Años de Experiencia", value: "?+" },
                  { label: "Tecnologías", value: "?+" }
                ].map((stat) => (
                  <div key={stat.label} className="text-center">
                    <div className="text-2xl md:text-3xl font-bold text-white mb-2">{stat.value}</div>
                    <div className="text-sm text-gray-400">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="servicios" className="w-full py-24 md:py-32 lg:py-48 relative overflow-hidden">
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400 leading-tight">
                Nuestros Servicios
              </h2>
              <p className="mt-4 text-xl text-gray-400 max-w-3xl mx-auto">
                Soluciones tecnológicas a medida para llevar tu negocio al siguiente nivel
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {services.map((service) => (
                <div key={service.title} className="bg-gray-800/50 backdrop-blur-sm hover:bg-gray-800 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl p-8 border border-gray-700/50 rounded-lg">
                  <div className="w-24 h-24 rounded-lg bg-gray-700/50 flex items-center justify-center mb-6 mx-auto">
                    <img src={service.icon} alt={service.title} className="w-16 h-16 filter invert" />
                  </div>
                  <h3 className="text-white text-2xl font-semibold mb-4 text-center leading-tight">{service.title}</h3>
                  <p className="text-gray-400 text-lg text-center leading-relaxed">{service.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Sección de proyectos mejorada */}
        <section id="proyectos" className="w-full py-24 md:py-32 lg:py-48 bg-gray-900">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400 leading-tight">
                Casos de Éxito
              </h2>
              <p className="mt-4 text-xl text-gray-400 max-w-3xl mx-auto">
                Descubre cómo empresas ya potencian su negocio con Softnova
              </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {projects.map((project, index) => (
                <div 
                  key={project.title} 
                  className={`group relative bg-gray-250 backdrop-blur-sm
                    border border-gray-800 rounded-lg overflow-hidden shadow-lg
                    ${index % 3 === 0 ? 'lg:col-span-2' : ''}`}
                >
                  <div className="p-8">
                    <span className="inline-block px-4 py-1.5 mb-6 rounded-full bg-gray-800 text-gray-300 text-sm font-medium">
                      {project.tag}
                    </span>
                    <div className="flex flex-col lg:flex-row gap-8 items-center">
                      <div className="flex-1 space-y-4">
                        <h3 className="text-white text-2xl font-semibold leading-tight">
                          {project.title}
                        </h3>
                        <p className="text-gray-400 text-lg leading-relaxed">
                          {project.description}
                        </p>
                        <a 
                          href={project.link}
                          className="inline-block bg-white text-gray-900 px-6 py-3 rounded-lg font-medium 
                            hover:translate-y-[-2px] transition-all duration-300"
                        >
                          Ver proyecto
                        </a>
                      </div>
                      <div className="w-full lg:w-1/2 aspect-[4/3] rounded-lg overflow-hidden border border-gray-700 shadow-lg p-4">
                        <img 
                          src={project.image} 
                          alt={project.title}
                          className="w-full h-full object-cover object-center rounded-lg"
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
            <div className="grid md:grid-cols-2 gap-12 items-start">
              <div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400 leading-tight">
                  Cómo Trabajamos
                </h2>
                <p className="mt-4 text-xl text-gray-400 max-w-3xl">
                  Un proceso simple y efectivo para convertir tu visión en realidad
                </p>
              </div>
              
              <div className="relative pl-10 border-l border-white/10">
                {timeline.map((item, index) => (
                  <div key={index} className="mb-12 relative timeline-dot">
                    <span className="text-sm font-bold text-purple-400 mb-2 block">
                      {item.year}
                    </span>
                    <h3 className="text-xl font-semibold text-white mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-400">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Sección de contacto con textos blancos */}
        <section id="contáctanos" className="w-full py-24 md:py-32 lg:py-48 bg-gray-800/50 backdrop-blur-xl text-white relative overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute w-[500px] h-[500px] -top-48 -right-48 bg-purple-500/10 rounded-full blur-3xl" />
            <div className="absolute w-[500px] h-[500px] -bottom-48 -left-48 bg-blue-500/10 rounded-full blur-3xl" />
          </div>
          
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div className="space-y-4">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400 leading-tight">
                    Impulsa tu Negocio al Siguiente Nivel
                  </h2>
                  <p className="text-xl text-gray-400">
                    ¿Listo para optimizar y automatizar tus procesos empresariales?
                  </p>
                </div>
                
                <button className="w-full sm:w-auto bg-white text-gray-900 text-lg py-4 px-8 rounded-lg shadow-lg hover:translate-y-[-2px] transition-all duration-300 ease-out flex items-center justify-center gap-2">
                  <Mail className="w-5 h-5" />
                  Agendar una consulta estratégica gratuita
                </button>

                <div className="pt-8 border-t border-white/10">
                  <p className="text-gray-400 mb-4">Síguenos en Instagram</p>
                  <a href="#" className="inline-flex items-center gap-2 text-white hover:text-purple-400 transition-colors">
                    <Instagram className="w-6 h-6" />
                    @softnova.ar
                  </a>
                </div>
              </div>

              <div className="space-y-8">
                <div className="p-8 bg-gray-900/50 backdrop-blur-sm rounded-lg border border-white/10">
                  <h3 className="text-2xl font-bold mb-4 text-white">Nuestro Compromiso</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-center gap-2">
                      <ChevronRight className="w-5 h-5 text-purple-400" />
                      Soluciones personalizadas
                    </li>
                    <li className="flex items-center gap-2">
                      <ChevronRight className="w-5 h-5 text-purple-400" />
                      Atención al detalle
                    </li>
                    <li className="flex items-center gap-2">
                      <ChevronRight className="w-5 h-5 text-purple-400" />
                      Soporte continuo
                    </li>
                    <li className="flex items-center gap-2">
                      <ChevronRight className="w-5 h-5 text-purple-400" />
                      Innovación constante
                    </li>
                  </ul>
                </div>
                
                <div className="p-8 bg-gray-900/50 backdrop-blur-sm rounded-lg border border-white/10">
                  <h3 className="text-2xl font-bold mb-4 text-white">Contáctanos</h3>
                  <p className="text-gray-300 mb-4">
                    Estamos aquí para responder a todas tus preguntas y ayudarte a impulsar tu negocio.
                  </p>
                  <a href="mailto:info@softnova.com" className="text-white hover:text-purple-400 transition-colors">
                    info@softnova.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="w-full py-8 bg-gray-900 text-white border-t border-gray-800">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <div className="flex flex-col items-center gap-4 px-8 md:items-start md:gap-2 md:px-0">
              <a className="flex items-center justify-center" href="#">
                <img src={Logo} alt="Softnova Logo" className="h-10 w-auto" />
              </a>
              <p className="text-center text-sm md:text-left text-gray-400">© 2024 Softnova. Todos los derechos reservados.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}