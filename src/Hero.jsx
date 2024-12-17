import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { Menu, X, ChevronRight, Sparkles, Instagram, Mail } from 'lucide-react'
import { motion, useInView, AnimatePresence, useTransform, useScroll } from 'framer-motion'
import { ServiceItem } from './ServiceItem'

// Importa tus imágenes SVG y PNG aquí
import ScreenAppIcon from './assets/screenapp.svg'
import NetworkIcon from './assets/network.svg'
import CartIcon from './assets/cart.svg'
import MetaIcon from './assets/meta.svg'
import ProjectMockup from './assets/Proyecto1.png'
import ProjectMockup2 from './assets/Proyecto2.png'
import ProjectMockup3 from './assets/Proyecto3.png'
import ProjectMockup4 from './assets/Proyecto4.png'
import Logo from './assets/Logopng1.png'

function Header({ scrollToSection, menuOpen, setMenuOpen }) {
  const { scrollY } = useScroll()
  const backgroundColor = useTransform(
    scrollY,
    [0, 100],
    ["rgba(25, 37, 68, 0)", "rgba(25, 37, 68, 0.9)"]
  )
  const backdropBlur = useTransform(
    scrollY,
    [0, 100],
    ["blur(0px)", "blur(12px)"]
  )

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 border-b border-white/10"
      style={{
        backgroundColor,
        backdropFilter: backdropBlur,
      }}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-20">
          <a 
            href="#inicio"
            onClick={(e) => { 
              e.preventDefault()
              scrollToSection('inicio')
            }}
            className="relative z-50"
          >
            <img 
              src={Logo}
              alt="Softnova Logo" 
              className="h-12 w-auto transition-all duration-300"
            />
          </a>

          <nav className="hidden md:flex items-center justify-center flex-1 space-x-8">
            {["Inicio", "Servicios", "Proyectos", "Cómo trabajamos"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(/ /g, '-')}`}
                onClick={(e) => {
                  e.preventDefault()
                  scrollToSection(item.toLowerCase().replace(/ /g, '-'))
                }}
                className="text-sm font-medium text-white/90 hover:text-white transition-colors relative group"
              >
                {item}
                <span className="absolute inset-x-0 -bottom-1 h-0.5 bg-white transform scale-x-0 transition-transform duration-200 origin-left group-hover:scale-x-100" />
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center space-x-6">
            <button
              onClick={() => scrollToSection('contáctanos')}
              className="px-5 py-2.5 bg-gradient-to-r from-blue-500 to-blue-600 text-white text-sm font-medium rounded-lg hover:from-blue-600 hover:to-blue-700 transition-all duration-200 transform hover:scale-105"
            >
              Agendar una reunión
            </button>
          </div>

          <button
            className="md:hidden relative z-50 text-white"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
    </motion.header>
  )
}

Header.propTypes = {
  scrollToSection: PropTypes.func.isRequired,
  menuOpen: PropTypes.bool.isRequired,
  setMenuOpen: PropTypes.func.isRequired
}

function MobileMenu({ isOpen, onClose, scrollToSection }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-40 bg-[#192544] flex flex-col items-center justify-center"
        >
          <nav className="flex flex-col items-center space-y-8">
            {["Inicio", "Servicios", "Proyectos", "Cómo trabajamos", "Contáctanos"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(/ /g, '-')}`}
                onClick={(e) => {
                  e.preventDefault()
                  scrollToSection(item.toLowerCase().replace(/ /g, '-'))
                  onClose()
                }}
                className="text-2xl font-medium text-white/90 hover:text-white transition-colors"
              >
                {item}
              </a>
            ))}
            <button
              onClick={() => {
                scrollToSection('contáctanos')
                onClose()
              }}
              className="mt-4 px-8 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg hover:from-blue-600 hover:to-blue-700 transition-all duration-200"
            >
              Agendar una reunión
            </button>
          </nav>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

MobileMenu.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  scrollToSection: PropTypes.func.isRequired
}

function AnimatedSection({ children, className }) {
  const ref = React.useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5 }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

AnimatedSection.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string
}

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
      number: "01",
      title: "Sistema de Gestión Empresarial",
      description: "Revoluciona la eficiencia de tu empresa con nuestro sistema integral.",
      details: [
        "Imagina tu empresa operando con la precisión de un reloj suizo. Nuestro sistema de gestión empresarial hace exactamente eso, transformando el caos en armonía operativa.",
        "Olvídate de las hojas de cálculo dispersas y los procesos manuales. Te ofrecemos una solución que centraliza toda tu operación en un solo lugar, accesible desde cualquier dispositivo.",
        "Nuestros clientes han experimentado una reducción del 40% en sus costos operativos y un aumento del 60% en la productividad de sus equipos.",
        "La automatización inteligente no solo ahorra tiempo, sino que también elimina errores costosos. Cada proceso está diseñado para maximizar la eficiencia y minimizar el desperdicio."
      ]
    },
    {
      number: "02",
      title: "Diseño y Desarrollo Web y Apps",
      description: "Transformamos tu visión en soluciones digitales innovadoras.",
      details: [
        "Tu presencia digital es tu ventana al mundo. Creamos experiencias web y móviles que no solo impresionan, sino que convierten visitantes en clientes leales.",
        "Cada píxel, cada interacción está cuidadosamente diseñada para reflejar la esencia de tu marca y conectar con tu audiencia de manera significativa.",
        "Nuestras soluciones digitales no son solo hermosas por fuera; están construidas sobre una base técnica sólida que garantiza velocidad, seguridad y escalabilidad.",
        "Desde startups hasta empresas establecidas, hemos ayudado a numerosos negocios a destacar en el mundo digital con soluciones personalizadas que generan resultados tangibles."
      ]
    },
    {
      number: "03",
      title: "E-commerce",
      description: "Potencia tus ventas online con nuestra plataforma e-commerce personalizada.",
      details: [
        "El comercio electrónico no se trata solo de vender productos; se trata de crear una experiencia de compra que tus clientes amarán y querrán repetir.",
        "Nuestra plataforma e-commerce está diseñada para maximizar conversiones, con un proceso de compra fluido y herramientas de marketing integradas que impulsan las ventas.",
        "Imagina tener el control total de tu negocio en la palma de tu mano: gestión de inventario, análisis de ventas, y procesamiento de pedidos, todo en tiempo real.",
        "Con integraciones de pago seguras y una experiencia de usuario optimizada, tu tienda online estará lista para conquistar el mercado digital."
      ]
    },
    {
      number: "04",
      title: "Optimización SEO",
      description: "Mejora tu visibilidad online y alcanza a tu audiencia ideal.",
      details: [
        "El SEO no es solo sobre rankings; es sobre conectar con las personas correctas en el momento adecuado cuando buscan tus servicios.",
        "Nuestro enfoque integral de SEO combina técnicas avanzadas de optimización con contenido estratégico que resuena con tu audiencia y los motores de búsqueda.",
        "Implementamos las últimas prácticas en SEO técnico, optimización de contenido y construcción de autoridad para asegurar resultados sostenibles.",
        "Hemos ayudado a empresas a multiplicar su tráfico orgánico y generar leads cualificados de manera constante a través de estrategias SEO probadas."
      ]
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

  const commonBg = "bg-gradient-to-br from-gray-900 via-[#1e2a4a] to-[#192544]"

  return (
    <div className={`flex flex-col min-h-screen bg-[#192544] text-white w-full font-['Helvetica Neue']`}>
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
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
          100% { transform: translateY(0px); }
        }
        .floating {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>

      <Header 
        scrollToSection={scrollToSection}
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
      />
      <MobileMenu 
        isOpen={menuOpen}
        onClose={() => setMenuOpen(false)}
        scrollToSection={scrollToSection}
      />

      <main className="flex-1">
        <section id="inicio" className="w-full py-24 md:py-32 lg:py-48 relative overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute w-[500px] h-[500px] -top-48 -right-48 bg-blue-500/20 rounded-full blur-3xl" />
            <div className="absolute w-[500px] h-[500px] -bottom-48 -left-48 bg-blue-500/20 rounded-full blur-3xl" />
            <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
          </div>
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="flex flex-col items-center space-y-4 text-center">
              <AnimatedSection>
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-400 max-w-3xl mx-auto leading-tight">
                  Convertimos tus ideas en software innovador
                </h1>
              </AnimatedSection>
              <AnimatedSection>
                <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
                  Desde la gestión hasta la expansión digital, creamos soluciones que impulsan tu éxito.
                </p>
              </AnimatedSection>
              <AnimatedSection>
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
              </AnimatedSection>
              <AnimatedSection>
                <div className="grid grid-cols-3 gap-8 mt-16 w-full max-w-3xl mx-auto">
                  {[
                    { label: "Proyectos Completados", value: "50+" },
                    { label: "Años de Experiencia", value: "5+" },
                    { label: "Tecnologías", value: "20+" }
                  ].map((stat) => (
                    <div key={stat.label} className="text-center">
                      <div className="text-2xl md:text-3xl font-bold text-white mb-2">{stat.value}</div>
                      <div className="text-sm text-gray-400">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        <section id="servicios" className="w-full py-24 md:py-32 relative overflow-hidden">
          <div className="container mx-auto px-4 md:px-6">
            <AnimatedSection className="mb-16">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-400">
                Nuestros Servicios
              </h2>
              <p className="mt-4 text-xl text-gray-400">
                Soluciones tecnológicas a medida para llevar tu negocio al siguiente nivel
              </p>
            </AnimatedSection>

            <AnimatedSection className="mt-12">
              <div className="space-y-0">
                {services.map((service) => (
                  <ServiceItem
                    key={service.number}
                    number={service.number}
                    title={service.title}
                    description={service.description}
                    details={service.details}
                  />
                ))}
              </div>
            </AnimatedSection>
          </div>
        </section>

        <section id="proyectos" className="w-full py-24 md:py-32">
          <div className="container mx-auto px-4 md:px-6">
            <AnimatedSection className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-400">
                Casos de Éxito
              </h2>
              <p className="mt-4 text-xl text-gray-400">
                Descubre cómo empresas ya potencian su negocio con Softnova
              </p>
            </AnimatedSection>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {projects.map((project, index) => (
                <AnimatedSection
                  key={project.title}
                  className={`group relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm
                    border border-gray-700/50 rounded-lg overflow-hidden shadow-lg
                    ${index % 3 === 0 ? 'lg:col-span-2' : ''}`}
                >
                  <div className="p-8">
                    <span className="inline-block px-4 py-1.5 mb-6 rounded-full bg-blue-500/10 text-blue-400 text-sm font-medium">
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
                          className="inline-block bg-white/10 text-white px-6 py-3 rounded-lg font-medium
                          hover:bg-white/20 transition-colors duration-200"
                        >
                          Ver proyecto
                        </a>
                      </div>
                      <div className="w-full lg:w-1/2 aspect-[4/3] rounded-lg overflow-hidden border border-gray-700/50 shadow-lg p-4">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover object-center rounded-lg"
                        />
                      </div>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        <section id="cómo-trabajamos" className={`w-full py-24 md:py-32 lg:py-48 relative overflow-hidden ${commonBg}`}>
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="grid md:grid-cols-2 gap-12 items-start">
              <div>
                <AnimatedSection>
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-900 leading-tight">
                    Cómo Trabajamos
                  </h2>
                </AnimatedSection>
                <AnimatedSection>
                  <p className="mt-4 text-xl text-gray-300 max-w-3xl">
                    Un proceso simple y efectivo para convertir tu visión en realidad
                  </p>
                </AnimatedSection>
              </div>

              <AnimatedSection>
                <div className="relative pl-10 border-l border-white/10">
                  {timeline.map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.8, delay: 0.2 * (index + 1) }}
                      className="mb-12 relative timeline-dot"
                    >
                      <span className="text-sm font-bold text-blue-400 mb-2 block">
                        {item.year}
                      </span>
                      <h3 className="text-xl font-semibold text-white mb-2">
                        {item.title}
                      </h3>
                      <p className="text-gray-300">
                        {item.description}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        <section id="contáctanos" className={`w-full py-24 md:py-32 lg:py-48 ${commonBg} text-white relative overflow-hidden`}>
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute w-[500px] h-[500px] -top-48 -right-48 bg-blue-500/10 rounded-full blur-3xl" />
            <div className="absolute w-[500px] h-[500px] -bottom-48 -left-48 bg-blue-500/10 rounded-full blur-3xl" />
          </div>

          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <AnimatedSection>
                <div className="space-y-8">
                  <div className="space-y-4">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-900 leading-tight">
                      Impulsa tu Negocio al Siguiente Nivel
                    </h2>
                    <p className="text-xl text-gray-300">
                      ¿Listo para optimizar y automatizar tus procesos empresariales?
                    </p>
                  </div>

                  <button className="w-full sm:w-auto bg-white text-gray-900 text-lg py-4 px-8 rounded-lg shadow-lg hover:translate-y-[-2px] transition-all duration-300 ease-out flex items-center justify-center gap-2">
                    <Mail className="w-5 h-5" />
                    Agendar una consulta estratégica gratuita
                  </button>

                  <div className="pt-8 border-t border-white/10">
                    <p className="text-gray-300 mb-4">Síguenos en Instagram</p>
                    <a href="#" className="inline-flex items-center gap-2 text-white hover:text-blue-400 transition-colors">
                      <Instagram className="w-6 h-6" />
                      @softnova.ar
                    </a>
                  </div>
                </div>
              </AnimatedSection>

              <AnimatedSection>
                <div className="space-y-8">
                  <div className="p-8 bg-gradient-to-br from-gray-800 to-gray-900 backdrop-blur-sm rounded-lg border border-white/10">
                    <h3 className="text-2xl font-bold mb-4 text-white">Nuestro Compromiso</h3>
                    <ul className="space-y-2 text-gray-300">
                      <li className="flex items-center gap-2">
                        <ChevronRight className="w-5 h-5 text-blue-400" />
                        Soluciones personalizadas
                      </li>
                      <li className="flex items-center gap-2">
                        <ChevronRight className="w-5 h-5 text-blue-400" />
                        Atención al detalle
                      </li>
                      <li className="flex items-center gap-2">
                        <ChevronRight className="w-5 h-5 text-blue-400" />
                        Soporte continuo
                      </li>
                      <li className="flex items-center gap-2">
                        <ChevronRight className="w-5 h-5 text-blue-400" />
                        Innovación constante
                      </li>
                    </ul>
                  </div>

                  <div className="p-8 bg-gradient-to-br from-gray-800 to-gray-900 backdrop-blur-sm rounded-lg border border-white/10">
                    <h3 className="text-2xl font-bold mb-4 text-white">Contáctanos</h3>
                    <p className="text-gray-300 mb-4">
                      Estamos aquí para responder a todas tus preguntas y ayudarte a impulsar tu negocio.
                    </p>
                    <a href="mailto:info@softnova.com" className="text-white hover:text-blue-400 transition-colors">
                      info@softnova.com
                    </a>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>
      </main>

      <footer className="w-full py-8 border-t border-white/10">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <div className="flex flex-col items-center gap-4 px-8 md:items-start md:gap-2 md:px-0">
              <a className="flex items-center justify-center" href="#">
                <img src={Logo} alt="Softnova Logo" className="h-16 w-auto" />
              </a>
              <p className="text-center text-sm md:text-left text-gray-400">
                © 2024 Softnova. Todos los derechos reservados.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

