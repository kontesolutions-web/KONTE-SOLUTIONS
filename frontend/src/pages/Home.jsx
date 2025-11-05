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
  Shield
} from 'lucide-react';

const Home = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const services = [
    {
      icon: Calculator,
      title: 'Automatización & Apps Script',
      description: 'Desarrollo personalizado en Google Sheets y Apps Script. Procesos inteligentes que ahorran tiempo y eliminan errores humanos.',
      features: ['Google Sheets', 'Apps Script', 'Formularios Web']
    },
    {
      icon: Smartphone,
      title: 'Apps Web & AppSheet',
      description: 'Implementación de aplicaciones web profesionales sin código complejo. Ideal para CRM, gestión de citas y facturación.',
      features: ['AppSheet', 'Apps Web', 'Bases de Datos']
    },
    {
      icon: BarChart3,
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
      {/* Header */}
      <header className="fixed top-0 w-full z-50 bg-slate-950/90 backdrop-blur-lg border-b border-emerald-500/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2 sm:gap-3">
            <img 
              src="/images/logo.png" 
              alt="KONTE Logo" 
              className="w-12 h-12 object-contain"
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.nextElementSibling.style.display = 'flex';
              }}
            />
            <div className="w-12 h-12 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-lg flex items-center justify-center flex-shrink-0" style={{display: 'none'}}>
              <span className="text-slate-950 font-bold text-xl">K</span>
            </div>
            <div>
              <h1 className="text-xl sm:text-2xl font-bold text-white tracking-wide">KONTE</h1>
              <p className="text-xs sm:text-sm text-emerald-400 tracking-widest">SOLUTIONS</p>
            </div>
          </div>
          <nav className="hidden md:flex items-center gap-6 lg:gap-8">
            <a href="#servicios" className="text-slate-300 hover:text-emerald-400 transition-colors text-base font-medium">Servicios</a>
            <a href="#plantillas" className="text-slate-300 hover:text-emerald-400 transition-colors text-base font-medium">Plantillas</a>
            <a href="#contacto" className="text-slate-300 hover:text-emerald-400 transition-colors text-base font-medium">Contacto</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-24 sm:pt-32 pb-16 sm:pb-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="space-y-6 sm:space-y-8">
              <div className="inline-block">
                <span className="px-3 sm:px-4 py-1.5 sm:py-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full text-emerald-400 text-xs sm:text-sm font-medium">
                  Automatización Inteligente
                </span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white leading-tight">
                Automatiza tu negocio con{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400">
                  Google Sheets
                </span>
              </h1>
              <p className="text-xl sm:text-2xl lg:text-3xl text-slate-300 leading-relaxed font-medium">
                Soluciones inteligentes, sin costes de mantenimiento, 100% en tu entorno de Google Workspace.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-5">
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white text-lg sm:text-xl border-0 shadow-lg shadow-emerald-500/20 transition-all duration-300 hover:shadow-emerald-500/40 hover:scale-105 font-bold py-6 sm:py-7 px-8 sm:px-10"
                  onClick={() => document.getElementById('plantillas').scrollIntoView({ behavior: 'smooth' })}
                >
                  Adquirir plantillas
                  <ArrowRight className="ml-2 h-6 w-6" />
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  className="border-2 border-emerald-500/40 text-emerald-400 text-lg sm:text-xl hover:bg-emerald-500/10 hover:border-emerald-500 transition-all duration-300 font-bold py-6 sm:py-7 px-8 sm:px-10"
                  onClick={() => document.getElementById('contacto').scrollIntoView({ behavior: 'smooth' })}
                >
                  Proyecto personalizado
                </Button>
              </div>
              <div className="flex flex-wrap gap-5 sm:gap-7 pt-4 sm:pt-6">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <benefit.icon className="h-5 w-5 sm:h-6 sm:w-6 text-emerald-400 flex-shrink-0" />
                    <span className="text-sm sm:text-base lg:text-lg text-slate-300 font-medium">{benefit.text}</span>
                  </div>
                ))}
              </div>
            </div>
            <div 
              className="relative"
              style={{
                opacity: Math.max(0.3, 1 - scrollY / 800),
                filter: `blur(${Math.min(scrollY / 100, 8)}px)`,
                transform: `translateY(${scrollY * 0.2}px)`,
                transition: 'filter 0.3s ease-out'
              }}
            >
              <div className="aspect-video bg-gradient-to-br from-emerald-500/10 to-teal-500/10 rounded-2xl border border-emerald-500/20 backdrop-blur-sm flex items-center justify-center">
                <div className="text-center space-y-4">
                  <div className="w-24 h-24 mx-auto bg-gradient-to-br from-emerald-400 to-teal-500 rounded-2xl flex items-center justify-center">
                    <span className="text-slate-950 font-bold text-4xl">K</span>
                  </div>
                  <p className="text-slate-400 text-sm">Dashboard mockup aquí</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sobre mí / Servicios */}
      <section id="servicios" className="py-16 sm:py-24 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-20 space-y-4 sm:space-y-6">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white">Mis Servicios</h2>
            <p className="text-lg sm:text-xl lg:text-2xl text-slate-300 max-w-4xl mx-auto leading-relaxed px-4 font-medium">
              Soy especialista en Google Sheets, Apps Script, AppSheet e integraciones web con bases de datos, 
              ayudando a empresas y emprendedores a digitalizar y automatizar procesos sin depender de software costoso.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card 
                  key={index} 
                  className="bg-gradient-to-br from-slate-900/70 to-slate-800/50 border-2 border-emerald-500/30 hover:border-emerald-400/60 transition-all duration-300 hover:shadow-2xl hover:shadow-emerald-500/20 backdrop-blur-sm group hover:-translate-y-2"
                >
                  <CardHeader className="p-6 sm:p-8 space-y-4">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-emerald-500/30 to-teal-500/30 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 border border-emerald-500/20">
                      <Icon className="h-8 w-8 sm:h-10 sm:w-10 text-emerald-400" />
                    </div>
                    
                    <CardTitle className="text-white text-xl sm:text-2xl font-bold">{service.title}</CardTitle>
                    <CardDescription className="text-slate-300 text-base sm:text-lg leading-relaxed">{service.description}</CardDescription>
                    <div className="flex flex-wrap gap-2 pt-2">
                      {service.features.map((feature, idx) => (
                        <span key={idx} className="px-3 py-1 bg-emerald-500/10 border border-emerald-500/30 rounded-full text-emerald-400 text-sm font-medium">
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

      {/* Carousel de Logos Infinito */}
      <section className="py-12 sm:py-16 overflow-hidden bg-slate-900/20">
        <div className="mb-8 text-center">
          <p className="text-slate-400 text-sm sm:text-base font-medium">Confían en nuestras soluciones</p>
        </div>
        <div className="relative">
          <div className="flex gap-8 sm:gap-12 animate-scroll">
            {/* Duplicamos los logos para efecto infinito */}
            {[...logoImages, ...logoImages].map((logo, idx) => (
              <div key={idx} className="flex-shrink-0 w-[200px] sm:w-[400px] h-[100px] sm:h-[200px] bg-white/5 backdrop-blur-sm rounded-xl border border-slate-700/30 flex items-center justify-center p-4 sm:p-6 hover:bg-white/10 transition-colors">
                <img 
                  src={logo}
                  alt={`Partner logo ${(idx % logoImages.length) + 1}`}
                  className="w-full h-full object-contain opacity-70 hover:opacity-100 transition-opacity"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    const parent = e.target.parentElement;
                    if (!parent.querySelector('.placeholder-text')) {
                      const placeholder = document.createElement('div');
                      placeholder.className = 'placeholder-text text-slate-500 text-center text-sm';
                      placeholder.innerHTML = `Logo ${(idx % logoImages.length) + 1}<br/><span class="text-xs">400x200px</span>`;
                      parent.appendChild(placeholder);
                    }
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Plantillas Premium */}
      <section id="plantillas" className="py-16 sm:py-24 px-4 sm:px-6 bg-slate-900/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-20 space-y-4 sm:space-y-6 px-4">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white">Plantillas listas para usar</h2>
            <p className="text-3xl sm:text-4xl lg:text-5xl text-emerald-400 font-bold">Solo 350€ cada una</p>
            <p className="text-base sm:text-lg lg:text-xl text-slate-300 font-medium">Paga una vez, úsala para siempre. Sin mantenimiento ni cuotas ocultas.</p>
          </div>

          <div className="space-y-10 sm:space-y-16">
            {/* Plantilla 1 - Finanzas */}
            <Card className="bg-slate-900/70 border-2 border-emerald-500/30 overflow-hidden hover:shadow-2xl hover:shadow-emerald-500/20 transition-all duration-300">
              <div className="grid lg:grid-cols-2 gap-0">
                <div 
                  className="aspect-video lg:aspect-auto bg-slate-800/50 flex items-center justify-center p-8"
                  style={{
                    filter: scrollY > 600 ? 'blur(0px)' : `blur(${Math.max(0, 8 - (scrollY - 400) / 50)}px)`,
                    transition: 'filter 0.5s ease-out'
                  }}
                >
                  <Carousel className="w-full max-w-xl">
                    <CarouselContent>
                      {templateImages.finanzas.map((img, idx) => (
                        <CarouselItem key={idx}>
                          <div className="p-1">
                            <img 
                              src={img}
                              alt={`Dashboard Finanzas ${idx + 1}`}
                              className="w-full h-auto rounded-lg shadow-2xl"
                              onError={(e) => {
                                if (idx === 0) {
                                  e.target.parentElement.parentElement.parentElement.parentElement.parentElement.innerHTML = `
                                    <div class="text-center space-y-4 py-12">
                                      <div class="w-20 h-20 mx-auto bg-emerald-500/20 rounded-full flex items-center justify-center">
                                        <svg class="h-10 w-10 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                                        </svg>
                                      </div>
                                      <p class="text-slate-300 text-lg font-medium">Vista previa del dashboard de finanzas</p>
                                      <p class="text-slate-400 text-sm">Coloca tus capturas en /images/</p>
                                    </div>
                                  `;
                                }
                              }}
                            />
                          </div>
                        </CarouselItem>
                      ))}
                    </CarouselContent>
                    <CarouselPrevious className="left-2 bg-white/90 hover:bg-white border-slate-300" />
                    <CarouselNext className="right-2 bg-white/90 hover:bg-white border-slate-300" />
                  </Carousel>
                </div>
                <CardContent className="p-8 sm:p-12 space-y-8 flex flex-col justify-center bg-gradient-to-br from-gray-100 to-gray-200">
                  <div className="text-center lg:text-left">
                    <CardTitle className="text-3xl sm:text-4xl lg:text-5xl text-slate-900 mb-8 font-bold leading-tight">Plantilla 1 – Finanzas personales inteligentes</CardTitle>
                    <ul className="space-y-5 text-lg sm:text-xl lg:text-2xl text-slate-700">
                      <li className="flex items-start gap-4 text-center lg:text-left justify-center lg:justify-start">
                        <CheckCircle2 className="h-7 w-7 sm:h-8 sm:w-8 text-emerald-600 flex-shrink-0 mt-1" />
                        <span className="font-medium">Registra ingresos y gastos fácilmente</span>
                      </li>
                      <li className="flex items-start gap-4 text-center lg:text-left justify-center lg:justify-start">
                        <CheckCircle2 className="h-7 w-7 sm:h-8 sm:w-8 text-emerald-600 flex-shrink-0 mt-1" />
                        <span className="font-medium">Dashboard visual y análisis automático en tiempo real</span>
                      </li>
                      <li className="flex items-start gap-4 text-center lg:text-left justify-center lg:justify-start">
                        <CheckCircle2 className="h-7 w-7 sm:h-8 sm:w-8 text-emerald-600 flex-shrink-0 mt-1" />
                        <span className="font-medium">Formulario web accesible desde el móvil mediante URL</span>
                      </li>
                      <li className="flex items-start gap-4 text-center lg:text-left justify-center lg:justify-start">
                        <CheckCircle2 className="h-7 w-7 sm:h-8 sm:w-8 text-emerald-600 flex-shrink-0 mt-1" />
                        <span className="font-medium">Todos los datos en tu propio Google Sheet personal (editable)</span>
                      </li>
                    </ul>
                  </div>
                  <div className="pt-8">
                    <div className="flex items-center gap-5 mb-8 justify-center">
                      <span className="text-5xl sm:text-6xl lg:text-7xl font-bold text-emerald-600">350€</span>
                      <span className="text-xl sm:text-2xl text-slate-600 font-semibold">Pago único</span>
                    </div>
                    <div className="flex justify-center">
                      <div id="paypal-container-RLXCEUUQ6AJXJ" className="w-full max-w-md"></div>
                    </div>
                  </div>
                </CardContent>
              </div>
            </Card>

            {/* Plantilla 2 - CRM */}
            <Card className="bg-slate-900/70 border-2 border-emerald-500/30 overflow-hidden hover:shadow-2xl hover:shadow-emerald-500/20 transition-all duration-300">
              <div className="grid lg:grid-cols-2 gap-0">
                <div className="order-2 lg:order-1">
                  <CardContent className="p-8 sm:p-12 space-y-8 flex flex-col justify-center bg-gradient-to-br from-gray-100 to-gray-200">
                    <div className="text-center lg:text-left">
                      <CardTitle className="text-3xl sm:text-4xl lg:text-5xl text-slate-900 mb-8 font-bold leading-tight">Plantilla 2 – CRM y gestión completa</CardTitle>
                      <ul className="space-y-5 text-lg sm:text-xl lg:text-2xl text-slate-700">
                        <li className="flex items-start gap-4 text-center lg:text-left justify-center lg:justify-start">
                          <CheckCircle2 className="h-7 w-7 sm:h-8 sm:w-8 text-emerald-600 flex-shrink-0 mt-1" />
                          <span className="font-medium">Base de datos en Google Sheets + código Apps Script + implementación web</span>
                        </li>
                        <li className="flex items-start gap-4 text-center lg:text-left justify-center lg:justify-start">
                          <CheckCircle2 className="h-7 w-7 sm:h-8 sm:w-8 text-emerald-600 flex-shrink-0 mt-1" />
                          <span className="font-medium">Ideal para centros de estética, clínicas, talleres o negocios que gestionen citas</span>
                        </li>
                        <li className="flex items-start gap-4 text-center lg:text-left justify-center lg:justify-start">
                          <CheckCircle2 className="h-7 w-7 sm:h-8 sm:w-8 text-emerald-600 flex-shrink-0 mt-1" />
                          <span className="font-medium">Control de pagos, clientes, agenda y facturación, todo en un solo lugar</span>
                        </li>
                        <li className="flex items-start gap-4 text-center lg:text-left justify-center lg:justify-start">
                          <CheckCircle2 className="h-7 w-7 sm:h-8 sm:w-8 text-emerald-600 flex-shrink-0 mt-1" />
                          <span className="font-medium">Sin costes de mantenimiento ni servidores externos</span>
                        </li>
                      </ul>
                    </div>
                    <div className="pt-8">
                      <div className="flex items-center gap-5 mb-8 justify-center">
                        <span className="text-5xl sm:text-6xl lg:text-7xl font-bold text-emerald-600">350€</span>
                        <span className="text-xl sm:text-2xl text-slate-600 font-semibold">Pago único</span>
                      </div>
                      <div className="flex justify-center">
                        <div id="paypal-container-JLD6ER6RWLBBQ" className="w-full max-w-md"></div>
                      </div>
                    </div>
                  </CardContent>
                </div>
                <div 
                  className="order-1 lg:order-2 aspect-video lg:aspect-auto bg-slate-800/50 flex items-center justify-center p-8"
                  style={{
                    filter: scrollY > 1000 ? 'blur(0px)' : `blur(${Math.max(0, 8 - (scrollY - 800) / 50)}px)`,
                    transition: 'filter 0.5s ease-out'
                  }}
                >
                  <Carousel className="w-full max-w-xl">
                    <CarouselContent>
                      {templateImages.crm.map((img, idx) => (
                        <CarouselItem key={idx}>
                          <div className="p-1">
                            <img 
                              src={img}
                              alt={`Sistema CRM ${idx + 1}`}
                              className="w-full h-auto rounded-lg shadow-2xl"
                              onError={(e) => {
                                if (idx === 0) {
                                  e.target.parentElement.parentElement.parentElement.parentElement.parentElement.innerHTML = `
                                    <div class="text-center space-y-4 py-12">
                                      <div class="w-20 h-20 mx-auto bg-emerald-500/20 rounded-full flex items-center justify-center">
                                        <svg class="h-10 w-10 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                        </svg>
                                      </div>
                                      <p class="text-slate-300 text-lg font-medium">Vista previa del sistema CRM</p>
                                      <p class="text-slate-400 text-sm">Coloca tus capturas en /images/</p>
                                    </div>
                                  `;
                                }
                              }}
                            />
                          </div>
                        </CarouselItem>
                      ))}
                    </CarouselContent>
                    <CarouselPrevious className="left-2 bg-white/90 hover:bg-white border-slate-300" />
                    <CarouselNext className="right-2 bg-white/90 hover:bg-white border-slate-300" />
                  </Carousel>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Servicios Personalizados */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <Card className="bg-gradient-to-br from-emerald-500/5 to-teal-500/5 border-emerald-500/30">
            <CardContent className="p-12 text-center space-y-6">
              <h2 className="text-3xl font-bold text-white">¿Necesitas algo hecho a medida?</h2>
              <p className="text-lg text-slate-300 leading-relaxed">
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
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Formulario de Contacto */}
      <section id="contacto" className="py-16 sm:py-24 px-4 sm:px-6 bg-slate-900/30">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12 sm:mb-16 space-y-4 sm:space-y-6 px-4">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white">Hablemos de tu proyecto</h2>
            <p className="text-lg sm:text-xl lg:text-2xl text-slate-300 font-medium">Respondo en menos de 24h</p>
          </div>
          <Card className="bg-slate-900/70 border-2 border-emerald-500/30 mx-4 sm:mx-0 shadow-xl">
            <CardContent className="p-6 sm:p-10">
              <form action="https://formsubmit.co/konte.solutions@gmail.com" method="POST" className="space-y-6">
                <input type="hidden" name="_subject" value="Nueva consulta desde KONTE SOLUTIONS" />
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_template" value="table" />
                
                <div className="space-y-3">
                  <Label htmlFor="name" className="text-white text-base sm:text-lg font-medium">Nombre</Label>
                  <Input 
                    id="name"
                    name="name"
                    type="text" 
                    required
                    className="bg-slate-950/50 border-emerald-500/20 text-white text-base sm:text-lg focus:border-emerald-500 transition-colors py-6"
                    placeholder="Tu nombre completo"
                  />
                </div>
                <div className="space-y-3">
                  <Label htmlFor="email" className="text-white text-base sm:text-lg font-medium">Correo electrónico</Label>
                  <Input 
                    id="email"
                    name="email"
                    type="email" 
                    required
                    className="bg-slate-950/50 border-emerald-500/20 text-white text-base sm:text-lg focus:border-emerald-500 transition-colors py-6"
                    placeholder="tu@email.com"
                  />
                </div>
                <div className="space-y-3">
                  <Label htmlFor="message" className="text-white text-base sm:text-lg font-medium">Mensaje / Detalles del proyecto</Label>
                  <Textarea 
                    id="message"
                    name="message"
                    required
                    rows={6}
                    className="bg-slate-950/50 border-emerald-500/20 text-white text-base sm:text-lg focus:border-emerald-500 transition-colors resize-none"
                    placeholder="Cuéntame sobre tu proyecto..."
                  />
                </div>
                <Button 
                  type="submit"
                  size="lg"
                  className="w-full bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white text-lg sm:text-xl border-0 shadow-lg shadow-emerald-500/20 transition-all duration-300 hover:shadow-emerald-500/40 font-bold py-7"
                >
                  Enviar mensaje
                  <Mail className="ml-2 h-5 w-5 sm:h-6 sm:w-6" />
                </Button>
              </form>
              <div className="mt-8 pt-8 border-t border-emerald-500/20 text-center">
                <p className="text-slate-300 text-base sm:text-lg mb-3 font-medium">También puedes escribirme directamente a:</p>
                <a href="mailto:konte.solutions@gmail.com" className="text-emerald-400 hover:text-emerald-300 transition-colors text-lg sm:text-xl font-semibold">
                  konte.solutions@gmail.com
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-4 sm:px-6 border-t border-emerald-500/10">
        <div className="max-w-7xl mx-auto">
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10 mb-10">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <img 
                  src="/images/logo.png" 
                  alt="KONTE Logo" 
                  className="w-12 h-12 object-contain"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextElementSibling.style.display = 'flex';
                  }}
                />
                <div className="w-12 h-12 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-lg flex items-center justify-center" style={{display: 'none'}}>
                  <span className="text-slate-950 font-bold text-xl">K</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">KONTE</h3>
                  <p className="text-sm text-emerald-400 tracking-wider">SOLUTIONS</p>
                </div>
              </div>
              <p className="text-slate-300 text-base leading-relaxed">
                Impulsa tu negocio con soluciones inteligentes sobre Google Sheets.
              </p>
            </div>
            <div>
              <h4 className="text-white text-xl font-bold mb-6">Enlaces rápidos</h4>
              <ul className="space-y-3">
                <li><a href="#servicios" className="text-slate-300 hover:text-emerald-400 transition-colors text-base font-medium">Servicios</a></li>
                <li><a href="#plantillas" className="text-slate-300 hover:text-emerald-400 transition-colors text-base font-medium">Plantillas</a></li>
                <li><a href="#contacto" className="text-slate-300 hover:text-emerald-400 transition-colors text-base font-medium">Contacto</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white text-xl font-bold mb-6">Contacto</h4>
              <a href="mailto:konte.solutions@gmail.com" className="text-slate-300 hover:text-emerald-400 transition-colors text-base font-medium block">
                konte.solutions@gmail.com
              </a>
            </div>
          </div>
          <div className="pt-8 border-t border-emerald-500/10 text-center">
            <p className="text-slate-400 text-base">
              © 2025 KONTE SOLUTIONS. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;