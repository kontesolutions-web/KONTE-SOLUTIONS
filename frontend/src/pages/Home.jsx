import React, { useEffect, useState } from 'react';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Label } from '../components/ui/label';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '../components/ui/carousel';
import { 
  Calculator, 
  Users, 
  Smartphone, 
  BarChart3, 
  Mail, 
  Zap, 
  CheckCircle2, 
  ArrowRight,
  Settings,
  TrendingUp,
  Clock,
  Shield,
  X,
  PlayCircle,
  ZoomIn
} from 'lucide-react';

const Home = () => {
  const [scrollY, setScrollY] = useState(0);

  // Estados para manejar errores de carga de imágenes
  const [logoError, setLogoError] = useState(false);
  const [footerLogoError, setFooterLogoError] = useState(false);
  const [modalVideo, setModalVideo] = useState(null);
  const [modalImage, setModalImage] = useState(null);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const services = [
    {
      image: '/images/servicio-automatizacion.png',
      title: 'Automatización & Apps Script',
      description: 'Desarrollo personalizado en Google Sheets y Apps Script. Procesos inteligentes que ahorran tiempo y eliminan errores humanos.',
      features: ['Google Sheets', 'Apps Script', 'Formularios Web']
    },
    {
      image: '/images/servicio-apps.png',
      title: 'Apps Web & AppSheet',
      description: 'Implementación de aplicaciones web profesionales sin código complejo. Ideal para CRM, gestión de citas y facturación.',
      features: ['AppSheet', 'Apps Web', 'Bases de Datos']
    },
    {
      image: '/images/servicio-dashboards.png', // Corregido el nombre de la imagen
      title: 'Dashboards & Reportes',
      description: 'Visualización de datos en tiempo real con Looker Studio. Reportes automáticos personalizados enviados directamente a tu email.',
      features: ['Looker Studio', 'Reportes', 'Análisis']
    }
  ];

  const templateImages = {
    finanzas: [
      '/images/dashboard-preview.png',
      '/images/dashboard-preview-2.png',
      '/images/dashboard-preview-3.png'
    ],
    crm: [
      '/images/crm-preview.png',
      '/images/crm-preview-2.png',
      '/images/crm-preview-3.png'
    ]
  };

  const logoImages = [
    '/images/logo-partner-1.png',
    '/images/logo-partner-2.png',
    '/images/logo-partner-3.png',
    '/images/logo-partner-4.png',
    '/images/logo-partner-5.png',
    '/images/logo-partner-6.png'
  ];

  const testimonialImages = [
    '/images/review-1.png',
    '/images/review-2.png',
    '/images/review-3.png',
    '/images/review-4.png',
    '/images/review-5.png',
    '/images/review-6.png',
    '/images/review-7.png',
    '/images/review-8.png',
    '/images/review-9.png',
    '/images/review-10.png'
  ];

  const benefits = [
    { icon: CheckCircle2, text: 'Sin costes de mantenimiento' },
    { icon: Shield, text: 'Todo en tu Google Workspace' },
    { icon: Clock, text: 'Ahorra tiempo y reduce errores' },
    { icon: TrendingUp, text: 'Escala según creces' }
  ];

  return (
    <div className="min-h-screen">
      {/* Video Modal */}
      {modalVideo && (
        <div 
          className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setModalVideo(null)}
        >
          <div 
            className="relative w-full max-w-5xl aspect-video bg-black rounded-lg shadow-2xl"
            onClick={(e) => e.stopPropagation()} // Evita que el modal se cierre al hacer clic en el video
          >
            <video 
              src={modalVideo}
              className="w-full h-full rounded-lg"
              controls
              autoPlay
              loop
            />
            <Button 
              variant="ghost" 
              size="icon" 
              className="absolute -top-12 right-0 text-white hover:text-white hover:bg-white/20 rounded-full"
              onClick={() => setModalVideo(null)}
            >
              <X className="h-8 w-8" />
            </Button>
          </div>
        </div>
      )}
      {/* Image Modal */}
      {modalImage && (
        <div 
          className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setModalImage(null)}
        >
          <div 
            className="relative max-w-7xl max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <img 
              src={modalImage}
              className="max-w-full max-h-full object-contain"
              alt="Vista ampliada"
            />
            <Button 
              variant="ghost" 
              size="icon" 
              className="absolute -top-12 right-0 text-white hover:text-white hover:bg-white/20 rounded-full"
              onClick={() => setModalImage(null)}
            >
              <X className="h-8 w-8" />
            </Button>
          </div>
        </div>
      )}
      {/* Header */}
      <header className="fixed top-0 w-full z-50 bg-slate-950/90 backdrop-blur-lg border-b border-emerald-500/10">
        <div className="max-w-[130rem] mx-auto px-6 sm:px-8 py-5 flex items-center justify-between">
          <div className="flex items-center gap-3 sm:gap-4">
            {!logoError ? (
              <img 
                src="/images/logo.png" 
                alt="KONTE Logo" 
                className="w-16 h-16 object-contain"
                onError={() => setLogoError(true)}
              />
            ) : (
              <>
                <div className="w-16 h-16 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-slate-950 font-bold text-2xl">K</span>
                </div>
                <div>
                  <h1 className="text-2xl sm:text-3xl font-bold text-white tracking-wide">KONTE</h1>
                  <p className="text-sm sm:text-base text-emerald-400 tracking-widest">SOLUTIONS</p>
                </div>
              </>
            )}
          </div>
          <nav className="md:flex items-center gap-8 lg:gap-12">
            <a href="#servicios" className="text-slate-300 hover:text-emerald-400 transition-colors text-lg font-medium">Servicios</a>
            <a href="#plantillas" className="text-slate-300 hover:text-emerald-400 transition-colors text-lg font-medium">Plantillas</a>
            <a href="#contacto" className="text-slate-300 hover:text-emerald-400 transition-colors text-lg font-medium">Contacto</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 sm:pt-40 pb-24 sm:pb-28 px-6 sm:px-8">
        <div className="max-w-[130rem] mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-32 items-center">
            {/* --- Columna Izquierda: Texto --- */}
            <div className="space-y-8 sm:space-y-10 text-left lg:text-left">
              <div className="space-y-8">
                <div className="inline-block">
                  <span className="px-4 sm:px-5 py-2 sm:py-2.5 bg-emerald-500/10 border border-emerald-500/20 rounded-full text-emerald-400 text-sm sm:text-base font-medium">
                    Automatización Inteligente
                  </span>
                </div>
                <h1 className="text-5xl sm:text-6xl lg:text-8xl font-bold text-white leading-tight">
                  Si usás{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400">
                    Google Sheets
                  </span>
                  , podemos ayudarte a ir más lejos.
                </h1>

                {/* --- Imagen para móvil --- */}
                <div 
                  className="lg:hidden relative w-full mt-8"
                  style={{
                    opacity: Math.max(0, 1 - scrollY / 300),
                    filter: `blur(${Math.min(scrollY / 50, 8)}px)`,
                    transform: `translateY(${scrollY * 0.2}px) scale(${1 + scrollY / 1000})`,
                    transition: 'opacity 0.3s ease-out, filter 0.3s ease-out, transform 0.3s ease-out',
                  }}
                >
                  <img 
                    src="/images/hero-mockup.png" 
                    alt="Mockup del dashboard de KONTE SOLUTIONS"
                    className="w-full object-contain rounded-2xl"
                    onError={(e) => e.target.style.display = 'none'}
                  />
                </div>

                <p className="text-2xl sm:text-3xl lg:text-4xl text-slate-300 leading-relaxed font-medium">
                  Soluciones inteligentes, sin costes de mantenimiento, 100% en tu entorno de Google Workspace.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-5 justify-start lg:justify-start">
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white text-xl sm:text-2xl border-0 shadow-lg shadow-emerald-500/20 transition-all duration-300 hover:shadow-emerald-500/40 hover:scale-105 font-bold py-7 sm:py-8 px-10 sm:px-12"
                  onClick={() => document.getElementById('plantillas').scrollIntoView({ behavior: 'smooth' })}
                >
                  Adquirir plantillas
                  <ArrowRight className="ml-3 h-7 w-7" />
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  className="border-2 border-emerald-500/40 text-emerald-400 text-xl sm:text-2xl hover:bg-emerald-500/10 hover:border-emerald-500 transition-all duration-300 font-bold py-7 sm:py-8 px-10 sm:px-12"
                  onClick={() => document.getElementById('contacto').scrollIntoView({ behavior: 'smooth' })}
                >
                  Proyecto personalizado
                </Button>
              </div>
              <div className="flex flex-wrap justify-start lg:justify-start gap-6 sm:gap-8 pt-6 sm:pt-8">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <benefit.icon className="h-6 w-6 sm:h-7 w-7 text-emerald-400 flex-shrink-0" />
                    <span className="text-base sm:text-lg lg:text-xl text-slate-300 font-medium">{benefit.text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* --- Columna Derecha: Imagen (solo para desktop) --- */}
            <div
              className="hidden lg:block relative w-full"
              style={{
                opacity: Math.max(0.3, 1 - scrollY / 800),
                filter: `blur(${Math.min(scrollY / 100, 8)}px)`,
                transform: `translateY(${scrollY * 0.2}px)`,
                transition: 'filter 0.3s ease-out'
              }}
            >
              <img 
                src="/images/hero-mockup.png" 
                alt="Mockup del dashboard de KONTE SOLUTIONS"
                className="w-full object-contain rounded-2xl transition-transform duration-300 lg:scale-[1.3] lg:translate-x-[0%]"
                onError={(e) => e.target.style.display = 'none'}
              />
            </div>

            {/* --- Contenido solo para móvil (debajo de la imagen) --- */}
            <div className="lg:hidden space-y-8 sm:space-y-10 max-w-5xl">
              {/* Este div está vacío en la versión de escritorio, pero en móvil contendría la descripción si quisiéramos moverla aquí. Actualmente, todo el texto ya está en la columna izquierda, que en móvil se apila arriba. */}
            </div>

          </div>
        </div>
      </section>

      {/* Carousel de Logos Infinito */}
      <section className="py-16 sm:py-24 overflow-hidden">
        <div className="mb-12 text-center">
          <p className="text-slate-400 text-base sm:text-lg font-medium"></p>
        </div>
        <div className="relative">
          <div className="flex gap-12 sm:gap-16 animate-scroll">
            {/* Duplicamos los logos para efecto infinito */}
            {[...logoImages, ...logoImages].map((logo, idx) => (
              <div key={idx} className="flex-shrink-0 w-[300px] sm:w-[500px] h-[150px] sm:h-[250px] bg-white/5 backdrop-blur-sm rounded-xl border border-slate-700/30 flex items-center justify-center p-6 sm:p-8 hover:bg-white/10 transition-colors">
                <img 
                  src={logo}
                  alt={`Partner logo ${(idx % logoImages.length) + 1}`}
                  className="w-full h-full object-contain opacity-70 hover:opacity-100 transition-opacity" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sobre mí / Servicios */}
      <section id="servicios" className="py-24 sm:py-32 px-6 sm:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-left sm:text-center mb-16 sm:mb-24 space-y-6 sm:space-y-8">
            <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white">Mis Servicios</h2>
            <p className="text-xl sm:text-2xl lg:text-3xl text-slate-300 max-w-5xl mx-auto leading-relaxed px-4 font-medium">
              Soy especialista en Google Sheets, Apps Script, AppSheet e integraciones web con bases de datos, 
              ayudando a empresas y emprendedores a digitalizar y automatizar procesos sin depender de software costoso.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
            {services.map((service, index) => {
              return (
                <Card 
                  key={index} 
                  onClick={() => document.getElementById('servicios-personalizados').scrollIntoView({ behavior: 'smooth' })}
                  className="bg-gradient-to-br from-slate-900/70 to-slate-800/50 border-2 border-emerald-500/30 hover:border-emerald-400/60 transition-all duration-300 hover:shadow-2xl hover:shadow-emerald-500/20 backdrop-blur-sm group hover:-translate-y-2 cursor-pointer"
                >
                  <CardHeader className="p-8 sm:p-10 space-y-6 items-center text-center">
                    <div className="w-full aspect-[4/3] rounded-2xl overflow-hidden group-hover:scale-125 transition-transform duration-300">
                      <img 
                        src={service.image} 
                        alt={service.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    
                    <CardTitle className="text-white text-2xl sm:text-3xl font-bold">{service.title}</CardTitle>
                    <CardDescription className="text-slate-300 text-lg sm:text-xl leading-relaxed">{service.description}</CardDescription>
                    <div className="flex flex-wrap gap-2 pt-2">
                      {service.features.map((feature, idx) => (
                        <span key={idx} className="px-4 py-1.5 bg-emerald-500/10 border border-emerald-500/30 rounded-full text-emerald-400 text-base font-medium">
                          {feature}
                        </span>
                      ))}
                    </div>
                  </CardHeader>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      

      {/* Plantillas Premium */}
      <section id="plantillas" className="py-24 sm:py-32 px-6 sm:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-left sm:text-center mb-16 sm:mb-24 space-y-6 sm:space-y-8 px-4">
            <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white">Plantillas listas para usar</h2>
            <p className="text-4xl sm:text-5xl lg:text-6xl text-emerald-400 font-bold">Solo 350€ cada una</p>
            <p className="text-lg sm:text-xl lg:text-2xl text-slate-300 font-medium">Solución sin suscripciones: una sola inversión, sin mantenimiento recurrente. Todos los datos se guardan en tu propio Google Sheets.</p>
          </div>

          <div className="space-y-10 sm:space-y-16">
            {/* Plantilla 1 - Finanzas */}
            <Card className="bg-slate-900/70 border-2 border-emerald-500/30 overflow-hidden hover:shadow-2xl hover:shadow-emerald-500/20 transition-all duration-300">
              <div>
                {/* --- IMAGEN/VIDEO ARRIBA --- */}
                <div className="bg-slate-800/50 flex items-center justify-center min-h-[50vh] lg:min-h-screen p-8">
                  <Carousel className="w-full">
                    <CarouselContent>
                      {/* Imagen principal primero */}
                      <CarouselItem>
                        <div className="p-1 cursor-pointer flex justify-center items-center h-full" onClick={() => setModalImage('/images/dashboard-preview.png')}>
                          <img 
                            src="/images/dashboard-preview.png"
                            alt="Dashboard Finanzas Principal"
                            className="w-full h-auto rounded-lg shadow-2xl "
                            onError={(e) => e.target.style.display = 'none'}
                          />
                        </div>
                      </CarouselItem>
                      {/* Vídeo en segundo lugar */}
                      <CarouselItem>
                        <div className="p-1 cursor-pointer flex justify-center items-center h-full" onClick={() => setModalVideo('/videos/plantilla-gestor-financiero.mp4')}>
                          <video 
                            src="/videos/plantilla-gestor-financiero.mp4"
                            className="w-full h-auto rounded-lg shadow-2xl"
                            autoPlay
                            loop
                            muted
                            playsInline
                          />
                        </div>
                      </CarouselItem>
                      {/* Resto de imágenes */}
                      {templateImages.finanzas.slice(1).map((img, idx) => (
                        <CarouselItem key={idx}>
                          <div className="p-1 cursor-pointer flex justify-center items-center h-full" onClick={() => setModalImage(img)}>
                            <img 
                              src={img}
                              alt={`Dashboard Finanzas ${idx + 1}`}
                              className="w-full h-auto rounded-lg shadow-2xl"
                              onError={(e) => e.target.style.display = 'none'}
                            />
                          </div>
                        </CarouselItem>
                      ))}
                    </CarouselContent>
                    <CarouselPrevious 
                      className="left-2 bg-white/90 hover:bg-white border-slate-300"
                    />
                    <CarouselNext 
                      className="right-2 bg-white/90 hover:bg-white border-slate-300"
                    />
                  </Carousel>
                </div>
                {/* --- CONTENIDO DEBAJO --- */}
                <CardContent className="p-8 sm:p-12 bg-gradient-to-br from-gray-100 to-gray-200">
                  <div className="grid md:grid-cols-2 gap-8 md:gap-12">
                    {/* Columna Izquierda: Título, Demo y Tips */}
                    <div className="space-y-8">
                      <CardTitle className="text-3xl sm:text-4xl lg:text-5xl text-slate-900 font-bold leading-tight">Plantilla de Finanzas personales inteligentes</CardTitle>
                      <div className="flex">
                        <Button 
                          className="bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white text-lg sm:text-xl border-0 shadow-lg shadow-emerald-500/20 transition-all duration-300 hover:shadow-emerald-500/40 hover:scale-105 font-bold py-6 px-8"
                          onClick={() => setModalVideo('/videos/plantilla-gestor-financiero.mp4')}
                        >
                          <PlayCircle className="mr-3 h-6 w-6" />
                          Ver Demo
                        </Button>
                      </div>
                      <ul className="space-y-4 text-lg sm:text-xl text-slate-700">
                        <li className="flex items-start gap-3">
                          <CheckCircle2 className="h-6 w-6 text-emerald-600 flex-shrink-0 mt-1" />
                          <span className="font-medium">Registra ingresos y gastos fácilmente que se vincularán directamente con tu Google Sheet</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle2 className="h-6 w-6 text-emerald-600 flex-shrink-0 mt-1" />
                          <span className="font-medium">Dashboard visual y análisis automático en tiempo real</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle2 className="h-6 w-6 text-emerald-600 flex-shrink-0 mt-1" />
                          <span className="font-medium">Formulario web accesible desde el móvil mediante URL</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle2 className="h-6 w-6 text-emerald-600 flex-shrink-0 mt-1" />
                          <span className="font-medium">Todos los datos en tu propio Google Sheet personal (editable)</span>
                        </li>
                      </ul>
                    </div>
                    {/* Columna Derecha: Precio y Botón de Pago */}
                    <div className="bg-white/50 rounded-2xl p-8 flex flex-col items-center justify-center text-center space-y-6">
                      <span className="text-5xl sm:text-6xl lg:text-7xl font-bold text-emerald-600">350€</span>
                      <span className="text-xl sm:text-2xl text-slate-600 font-semibold">Pago único</span>
                      <div className="w-full max-w-xs pt-4">
                        {/* --- INICIO BOTÓN PAYPAL PLANTILLA 1 --- */}
                        <form action="https://www.paypal.com/ncp/payment/RLXCEUUQ6AJXJ" method="post" target="_blank" style={{display:'inline-grid', justifyItems:'center', alignContent:'start', gap:'0.5rem'}}>
                          <input 
                            type="submit" 
                            value="Comprar ahora" 
                            style={{
                              textAlign: 'center',
                              border: 'none',
                              borderRadius: '0.25rem',
                              minWidth: '11.625rem',
                              padding: '0 2rem',
                              height: '2.625rem',
                              fontWeight: 'bold',
                              backgroundColor: '#FFD140',
                              color: '#000000',
                              fontFamily: '"Helvetica Neue", Arial, sans-serif',
                              fontSize: '1rem',
                              lineHeight: '1.25rem',
                              cursor: 'pointer',
                            }}
                          />
                          <img src="https://www.paypalobjects.com/images/Debit_Credit_APM.svg" alt="cards" />
                        </form>
                        {/* --- FIN BOTÓN PAYPAL --- */}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </div>
            </Card>

            {/* Plantilla 2 - CRM */}
            <Card className="bg-slate-900/70 border-2 border-emerald-500/30 overflow-hidden hover:shadow-2xl hover:shadow-emerald-500/20 transition-all duration-300">
              <div>
                {/* --- IMAGEN/VIDEO ARRIBA --- */}
                <div className="bg-slate-800/50 flex items-center justify-center min-h-[50vh] lg:min-h-screen p-8">
                  <Carousel className="w-full">
                    <CarouselContent>
                      {/* FIX: Añadido el vídeo de vista previa que faltaba */}
                      <CarouselItem>
                        <div className="p-1 cursor-pointer flex justify-center items-center h-full" onClick={() => setModalVideo('/videos/plantilla-crm.mp4')}>
                          <video 
                            src="/videos/plantilla-crm.mp4"
                            className="w-full h-auto rounded-lg shadow-2xl"
                            autoPlay
                            loop
                            muted
                            playsInline
                          />
                        </div>
                      </CarouselItem>
                      {templateImages.crm.map((img, idx) => (
                        <CarouselItem key={idx}>
                          <div className="p-1 cursor-pointer flex justify-center items-center h-full" onClick={() => setModalImage(img)}>
                            <img
                              src={img}
                              alt={`Sistema CRM ${idx + 1}`}
                              className="w-full h-auto rounded-lg shadow-2xl"
                              onError={(e) => e.target.style.display = 'none'}
                            />
                          </div>
                        </CarouselItem>
                      ))}
                    </CarouselContent>
                    <CarouselPrevious 
                      className="left-2 bg-white/90 hover:bg-white border-slate-300"
                    />
                    <CarouselNext 
                      className="right-2 bg-white/90 hover:bg-white border-slate-300"
                    />
                  </Carousel>
                </div>
                {/* --- CONTENIDO DEBAJO --- */}
                <CardContent className="p-8 sm:p-12 bg-gradient-to-br from-gray-100 to-gray-200">
                  <div className="grid md:grid-cols-2 gap-8 md:gap-12">
                    {/* Columna Izquierda: Título, Demo y Tips */}
                    <div className="space-y-8">
                      <CardTitle className="text-3xl sm:text-4xl lg:text-5xl text-slate-900 font-bold leading-tight">Plantilla 2 – CRM y gestión completa</CardTitle>
                      <div className="flex">
                        <Button 
                          className="bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white text-lg sm:text-xl border-0 shadow-lg shadow-emerald-500/20 transition-all duration-300 hover:shadow-emerald-500/40 hover:scale-105 font-bold py-6 px-8"
                          onClick={() => setModalVideo('/videos/plantilla-crm.mp4')}
                        >
                          <PlayCircle className="mr-3 h-6 w-6" />
                          Ver Demo
                        </Button>
                      </div>
                      <ul className="space-y-4 text-lg sm:text-xl text-slate-700">
                        <li className="flex items-start gap-3">
                          <CheckCircle2 className="h-6 w-6 text-emerald-600 flex-shrink-0 mt-1" />
                          <span className="font-medium">Base de datos en Google Sheets + código Apps Script + implementación web</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle2 className="h-6 w-6 text-emerald-600 flex-shrink-0 mt-1" />
                          <span className="font-medium">Ideal para centros de estética, clínicas, talleres o negocios que gestionen citas</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle2 className="h-6 w-6 text-emerald-600 flex-shrink-0 mt-1" />
                          <span className="font-medium">Control de pagos, clientes, agenda y facturación, todo en un solo lugar</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle2 className="h-6 w-6 text-emerald-600 flex-shrink-0 mt-1" />
                          <span className="font-medium">Sin costes de mantenimiento ni servidores externos</span>
                        </li>
                      </ul>
                    </div>
                    {/* Columna Derecha: Precio y Botón de Pago */}
                    <div className="bg-white/50 rounded-2xl p-8 flex flex-col items-center justify-center text-center space-y-6">
                      <span className="text-5xl sm:text-6xl lg:text-7xl font-bold text-emerald-600">350€</span>
                      <span className="text-xl sm:text-2xl text-slate-600 font-semibold">Pago único</span>
                      <div className="w-full max-w-xs pt-4">
                        {/* --- INICIO BOTÓN PAYPAL PLANTILLA 2 --- */}
                        <form action="https://www.paypal.com/ncp/payment/JLD6ER6RWLBBQ" method="post" target="_blank" style={{display:'inline-grid', justifyItems:'center', alignContent:'start', gap:'0.5rem'}}>
                          <input 
                            type="submit" 
                            value="Comprar ahora" 
                            style={{
                              textAlign: 'center',
                              border: 'none',
                              borderRadius: '0.25rem',
                              minWidth: '11.625rem',
                              padding: '0 2rem',
                              height: '2.625rem',
                              fontWeight: 'bold',
                              backgroundColor: '#FFD140',
                              color: '#000000',
                              fontFamily: '"Helvetica Neue", Arial, sans-serif',
                              fontSize: '1rem',
                              lineHeight: '1.25rem',
                              cursor: 'pointer',
                            }}
                          />
                          <img src="https://www.paypalobjects.com/images/Debit_Credit_APM.svg" alt="cards" />
                        </form>
                        {/* --- FIN BOTÓN PAYPAL --- */}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Servicios Personalizados */}
      <section id="servicios-personalizados" className="py-28 px-8">
        <div className="max-w-5xl mx-auto">
          <Card className="bg-gradient-to-br from-emerald-500/5 to-teal-500/5 border-emerald-500/30">
            <CardContent className="p-10 sm:p-16 text-left sm:text-center space-y-8">
              <h2 className="text-4xl lg:text-5xl font-bold text-white">¿Necesitas algo hecho a medida?</h2>
              <p className="text-xl lg:text-2xl text-slate-300 leading-relaxed">
                Desarrollaré para ti una solución personalizada en Google Sheets o AppSheet, 
                conectada con tus herramientas actuales y adaptada 100% a tu negocio. 
                También puedo crear dashboards profesionales en Looker Studio, con filtros interactivos, 
                segmentación avanzada y envío automático de reportes mensuales.
              </p>
              <Button 
                size="lg"
                className="bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white border-0 shadow-lg shadow-emerald-500/20 transition-all duration-300 hover:shadow-emerald-500/40 hover:scale-105"
                onClick={() => document.getElementById('contacto').scrollIntoView({ behavior: 'smooth' })}
              >
                Solicitar presupuesto personalizado
                <ArrowRight className="ml-3 h-6 w-6" />
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Carousel de Reseñas Infinito */}
      <section className="py-24 sm:py-32 overflow-hidden">
        <div className="mb-16 text-left sm:text-center space-y-6 px-6 sm:px-8">
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white">Lo que dicen nuestros clientes</h2>
          <p className="text-xl sm:text-2xl text-slate-300 font-medium">Reseñas reales de clientes satisfechos</p>
        </div>
        <div className="relative">
          <div className="flex gap-8 sm:gap-10 animate-scroll">
            {/* Duplicamos las reseñas para efecto infinito */}
            {[...testimonialImages, ...testimonialImages].map((review, idx) => (
              <div key={idx} className="flex-shrink-0 w-[300px] sm:w-[400px] aspect-[4/3] group cursor-pointer">
                <div className="relative w-full h-full transition-all duration-300 group-hover:scale-110">
                  {/* Círculo para el efecto de halo */}
                  <div className="absolute inset-0 flex items-center justify-center z-0">
                    <div className="w-1/3 h-1/3 bg-emerald-500/5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-[0_0_150px_60px_rgba(52,211,153,0.7)]"></div>
                  </div>
                  {/* Imagen de la reseña */}
                  <img 
                    src={review}
                    alt={`Reseña cliente ${(idx % testimonialImages.length) + 1}`}
                    className="relative z-10 w-full h-full object-cover rounded-2xl" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Formulario de Contacto */}
      <section id="contacto" className="py-24 sm:py-32 px-6 sm:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-left sm:text-center mb-16 sm:mb-20 space-y-6 sm:space-y-8 px-4">
            <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white">Hablemos de tu proyecto</h2>
            <p className="text-xl sm:text-2xl lg:text-3xl text-slate-300 font-medium">Respondo en menos de 24h</p>
          </div>
          <Card className="bg-slate-900/70 border-2 border-emerald-500/30 mx-4 sm:mx-0 shadow-xl">
            <CardContent className="p-8 sm:p-12">
              <form action="https://formsubmit.co/konte.solutions@gmail.com" method="POST" className="space-y-8">
                <input type="hidden" name="_subject" value="Nueva consulta desde KONTE SOLUTIONS" />
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_template" value="table" />
                
                <div className="space-y-3">
                  <Label htmlFor="name" className="text-white text-xl sm:text-2xl font-medium">Nombre</Label>
                  <Input 
                    id="name"
                    name="name"
                    type="text" 
                    required
                    className="bg-slate-950/50 border-emerald-500/20 text-white text-xl sm:text-2xl focus:border-emerald-500 transition-colors py-7"
                    placeholder="Tu nombre completo"
                  />
                </div>
                <div className="space-y-3">
                  <Label htmlFor="email" className="text-white text-xl sm:text-2xl font-medium">Correo electrónico</Label>
                  <Input 
                    id="email"
                    name="email"
                    type="email" 
                    required
                    className="bg-slate-950/50 border-emerald-500/20 text-white text-xl sm:text-2xl focus:border-emerald-500 transition-colors py-7"
                    placeholder="tu@email.com"
                  />
                </div>
                <div className="space-y-3">
                  <Label htmlFor="message" className="text-white text-xl sm:text-2xl font-medium">Mensaje / Detalles del proyecto</Label>
                  <Textarea 
                    id="message"
                    name="message"
                    required
                    rows={6}
                    className="bg-slate-950/50 border-emerald-500/20 text-white text-xl sm:text-2xl focus:border-emerald-500 transition-colors resize-none"
                    placeholder="Cuéntame sobre tu proyecto..."
                  />
                </div>
                <Button 
                  type="submit"
                  size="lg"
                  className="w-full bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white text-xl sm:text-2xl border-0 shadow-lg shadow-emerald-500/20 transition-all duration-300 hover:shadow-emerald-500/40 font-bold py-8"
                >
                  Enviar mensaje
                  <Mail className="ml-3 h-6 w-6 sm:h-7 w-7" />
                </Button>
              </form>
              <div className="mt-10 pt-10 border-t border-emerald-500/20 text-left sm:text-center">
                <p className="text-slate-300 text-lg sm:text-xl mb-4 font-medium">También puedes escribirme directamente a:</p>
                <a href="mailto:konte.solutions@gmail.com" className="text-emerald-400 hover:text-emerald-300 transition-colors text-xl sm:text-2xl font-semibold">
                  konte.solutions@gmail.com
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-24 px-6 sm:px-8 border-t border-emerald-500/10">
        <div className="max-w-7xl mx-auto">
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-12 mb-12">
            <div>
              <div className="flex items-center gap-4 mb-8">
                {!footerLogoError ? (
                  <img 
                    src="/images/logo.png" 
                    alt="KONTE Logo" 
                    className="w-16 h-16 object-contain"
                    onError={() => setFooterLogoError(true)}
                  />
                ) : (
                  <>
                    <div className="w-16 h-16 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-slate-950 font-bold text-2xl">K</span>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white">KONTE</h3>
                      <p className="text-base text-emerald-400 tracking-wider">SOLUTIONS</p>
                    </div>
                  </>
                )}
              </div>
              <p className="text-slate-300 text-lg leading-relaxed">
                Impulsa tu negocio con soluciones inteligentes sobre Google Sheets.
              </p>
            </div>
            <div>
              <h4 className="text-white text-2xl font-bold mb-8">Enlaces rápidos</h4>
              <ul className="space-y-4">
                <li><a href="#servicios" className="text-slate-300 hover:text-emerald-400 transition-colors text-lg font-medium">Servicios</a></li>
                <li><a href="#plantillas" className="text-slate-300 hover:text-emerald-400 transition-colors text-lg font-medium">Plantillas</a></li>
                <li><a href="#contacto" className="text-slate-300 hover:text-emerald-400 transition-colors text-lg font-medium">Contacto</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white text-2xl font-bold mb-8">Contacto</h4>
              <a href="mailto:konte.solutions@gmail.com" className="text-slate-300 hover:text-emerald-400 transition-colors text-lg font-medium block">
                konte.solutions@gmail.com
              </a>
            </div>
          </div>
          <div className="pt-10 border-t border-emerald-500/10 text-center sm:text-left">
            <p className="text-slate-400 text-lg">
              © 2025 KONTE SOLUTIONS. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;