import React, { useEffect, useState } from 'react';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Label } from '../components/ui/label';
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

      {/* Plantillas Premium */}
      <section id="plantillas" className="py-16 sm:py-20 px-4 sm:px-6 bg-slate-900/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16 space-y-3 sm:space-y-4 px-4">
            <h2 className="text-3xl sm:text-4xl font-bold text-white">Plantillas listas para usar</h2>
            <p className="text-xl sm:text-2xl text-emerald-400 font-semibold">Solo 350€ cada una</p>
            <p className="text-sm sm:text-base text-slate-400">Paga una vez, úsala para siempre. Sin mantenimiento ni cuotas ocultas.</p>
          </div>

          <div className="space-y-8 sm:space-y-12">
            {/* Plantilla 1 - Finanzas */}
            <Card className="bg-slate-900/50 border-emerald-500/20 overflow-hidden">
              <div className="grid lg:grid-cols-2 gap-6 sm:gap-8">
                <div 
                  className="aspect-video lg:aspect-auto bg-gradient-to-br from-emerald-500/10 to-teal-500/10 flex items-center justify-center"
                  style={{
                    filter: scrollY > 600 ? 'blur(0px)' : `blur(${Math.max(0, 8 - (scrollY - 400) / 50)}px)`,
                    transition: 'filter 0.5s ease-out'
                  }}
                >
                  <div className="text-center space-y-4 p-8">
                    <Calculator className="h-16 w-16 text-emerald-400 mx-auto" />
                    <p className="text-slate-400">Vista previa del dashboard de finanzas</p>
                  </div>
                </div>
                <CardContent className="p-6 sm:p-8 space-y-6">
                  <div>
                    <CardTitle className="text-xl sm:text-2xl text-white mb-4">Plantilla 1 – Finanzas personales inteligentes</CardTitle>
                    <ul className="space-y-3 text-sm sm:text-base text-slate-300">
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                        <span>Registra ingresos y gastos fácilmente</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                        <span>Dashboard visual y análisis automático en tiempo real</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                        <span>Formulario web accesible desde el móvil mediante URL</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                        <span>Todos los datos en tu propio Google Sheet personal (editable)</span>
                      </li>
                    </ul>
                  </div>
                  <div className="pt-4">
                    <div className="flex items-center gap-4 mb-4">
                      <span className="text-2xl sm:text-3xl font-bold text-emerald-400">350€</span>
                      <span className="text-sm sm:text-base text-slate-500">Pago único</span>
                    </div>
                    <div id="paypal-container-RLXCEUUQ6AJXJ" className="w-full"></div>
                  </div>
                </CardContent>
              </div>
            </Card>

            {/* Plantilla 2 - CRM */}
            <Card className="bg-slate-900/50 border-emerald-500/20 overflow-hidden">
              <div className="grid lg:grid-cols-2 gap-6 sm:gap-8">
                <div className="order-2 lg:order-1">
                  <CardContent className="p-6 sm:p-8 space-y-6">
                    <div>
                      <CardTitle className="text-xl sm:text-2xl text-white mb-4">Plantilla 2 – CRM y gestión completa</CardTitle>
                      <ul className="space-y-3 text-sm sm:text-base text-slate-300">
                        <li className="flex items-start gap-3">
                          <CheckCircle2 className="h-5 w-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                          <span>Base de datos en Google Sheets + código Apps Script + implementación web</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle2 className="h-5 w-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                          <span>Ideal para centros de estética, clínicas, talleres o negocios que gestionen citas</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle2 className="h-5 w-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                          <span>Control de pagos, clientes, agenda y facturación, todo en un solo lugar</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle2 className="h-5 w-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                          <span>Sin costes de mantenimiento ni servidores externos</span>
                        </li>
                      </ul>
                    </div>
                    <div className="pt-4">
                      <div className="flex items-center gap-4 mb-4">
                        <span className="text-2xl sm:text-3xl font-bold text-emerald-400">350€</span>
                        <span className="text-sm sm:text-base text-slate-500">Pago único</span>
                      </div>
                      <div id="paypal-container-JLD6ER6RWLBBQ" className="w-full"></div>
                    </div>
                  </CardContent>
                </div>
                <div 
                  className="order-1 lg:order-2 aspect-video lg:aspect-auto bg-gradient-to-br from-teal-500/10 to-emerald-500/10 flex items-center justify-center"
                  style={{
                    filter: scrollY > 1000 ? 'blur(0px)' : `blur(${Math.max(0, 8 - (scrollY - 800) / 50)}px)`,
                    transition: 'filter 0.5s ease-out'
                  }}
                >
                  <div className="text-center space-y-4 p-8">
                    <Users className="h-16 w-16 text-emerald-400 mx-auto" />
                    <p className="text-slate-400">Vista previa del sistema CRM</p>
                  </div>
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
      <section id="contacto" className="py-16 sm:py-20 px-4 sm:px-6 bg-slate-900/30">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12 space-y-3 sm:space-y-4 px-4">
            <h2 className="text-3xl sm:text-4xl font-bold text-white">Hablemos de tu proyecto</h2>
            <p className="text-sm sm:text-base text-slate-400">Respondo en menos de 24h</p>
          </div>
          <Card className="bg-slate-900/50 border-emerald-500/20 mx-4 sm:mx-0">
            <CardContent className="p-6 sm:p-8">
              <form action="https://formsubmit.co/konte.solutions@gmail.com" method="POST" className="space-y-6">
                <input type="hidden" name="_subject" value="Nueva consulta desde KONTE SOLUTIONS" />
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_template" value="table" />
                
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-white">Nombre</Label>
                  <Input 
                    id="name"
                    name="name"
                    type="text" 
                    required
                    className="bg-slate-950/50 border-emerald-500/20 text-white focus:border-emerald-500 transition-colors"
                    placeholder="Tu nombre completo"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-white">Correo electrónico</Label>
                  <Input 
                    id="email"
                    name="email"
                    type="email" 
                    required
                    className="bg-slate-950/50 border-emerald-500/20 text-white focus:border-emerald-500 transition-colors"
                    placeholder="tu@email.com"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message" className="text-white">Mensaje / Detalles del proyecto</Label>
                  <Textarea 
                    id="message"
                    name="message"
                    required
                    rows={6}
                    className="bg-slate-950/50 border-emerald-500/20 text-white focus:border-emerald-500 transition-colors resize-none"
                    placeholder="Cuéntame sobre tu proyecto..."
                  />
                </div>
                <Button 
                  type="submit"
                  size="lg"
                  className="w-full bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white border-0 shadow-lg shadow-emerald-500/20 transition-all duration-300 hover:shadow-emerald-500/40 font-semibold"
                >
                  Enviar mensaje
                  <Mail className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
                </Button>
              </form>
              <div className="mt-8 pt-8 border-t border-emerald-500/20 text-center">
                <p className="text-slate-400 mb-2">También puedes escribirme directamente a:</p>
                <a href="mailto:konte.solutions@gmail.com" className="text-emerald-400 hover:text-emerald-300 transition-colors font-medium">
                  konte.solutions@gmail.com
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 sm:px-6 border-t border-emerald-500/10">
        <div className="max-w-7xl mx-auto">
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-lg flex items-center justify-center">
                  <span className="text-slate-950 font-bold text-xl">K</span>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">KONTE</h3>
                  <p className="text-xs text-emerald-400 tracking-wider">SOLUTIONS</p>
                </div>
              </div>
              <p className="text-slate-400 text-sm">
                Impulsa tu negocio con soluciones inteligentes sobre Google Sheets.
              </p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Enlaces rápidos</h4>
              <ul className="space-y-2">
                <li><a href="#servicios" className="text-slate-400 hover:text-emerald-400 transition-colors text-sm">Servicios</a></li>
                <li><a href="#plantillas" className="text-slate-400 hover:text-emerald-400 transition-colors text-sm">Plantillas</a></li>
                <li><a href="#contacto" className="text-slate-400 hover:text-emerald-400 transition-colors text-sm">Contacto</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Contacto</h4>
              <a href="mailto:konte.solutions@gmail.com" className="text-slate-400 hover:text-emerald-400 transition-colors text-sm block">
                konte.solutions@gmail.com
              </a>
            </div>
          </div>
          <div className="pt-8 border-t border-emerald-500/10 text-center">
            <p className="text-slate-500 text-sm">
              © 2025 KONTE SOLUTIONS. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;