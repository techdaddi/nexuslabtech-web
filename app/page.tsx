'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, ChevronRight, Code, Zap, Cpu, BarChart3, ArrowRight, Play, Github, Linkedin, Mail, Mic, TrendingUp, Users, Rocket, Brain } from 'lucide-react';

export default function NexusWebsite() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [activeCase, setActiveCase] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const heroRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveCase((prev) => (prev + 1) % 3);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const services = [
    {
      icon: <Code className="w-12 h-12" />,
      title: "Desarrollo Web Premium",
      description: "Next.js 14, React 18, TypeScript. Sitios que cargan en menos de 1 segundo y convierten 10x más.",
      metrics: "+340% conversiones",
      tech: ["Next.js", "React", "TypeScript", "Tailwind"]
    },
    {
      icon: <Brain className="w-12 h-12" />,
      title: "Agentes IA Personalizados",
      description: "Chatbots inteligentes, automatización con N8N, análisis predictivo. IA que realmente trabaja 24/7.",
      metrics: "-70% tiempo manual",
      tech: ["OpenAI", "N8N", "LangChain", "Python"]
    },
    {
      icon: <Rocket className="w-12 h-12" />,
      title: "Apps que Escalan",
      description: "React Native, PWAs. De MVP a millones de usuarios sin reescribir código.",
      metrics: "0 a 10K users en 6 meses",
      tech: ["React Native", "Expo", "Firebase", "AWS"]
    },
    {
      icon: <TrendingUp className="w-12 h-12" />,
      title: "SEO que Convierte",
      description: "No solo tráfico, leads calificados. Posicionamiento técnico + contenido estratégico.",
      metrics: "+450% leads orgánicos",
      tech: ["Technical SEO", "Analytics", "Core Web Vitals"]
    }
  ];

  const caseStudies = [
    {
      company: "FinTech Startup",
      industry: "Servicios Financieros",
      challenge: "MVP no escalaba, necesitaban procesar 1000+ transacciones/día",
      solution: "Arquitectura serverless + React Native + IA para análisis de riesgo",
      results: [
        "100 → 10,000 usuarios en 6 meses",
        "99.9% uptime garantizado",
        "Serie A de $2M USD cerrada"
      ],
      tech: ["Next.js", "React Native", "AWS Lambda", "OpenAI"]
    },
    {
      company: "Plataforma de Inversión",
      industry: "Finanzas / Inversión",
      challenge: "Onboarding manual tardaba 48hrs, perdían 60% de leads",
      solution: "Automatización completa con IA + KYC automático + dashboard en tiempo real",
      results: [
        "48 horas → 15 minutos onboarding",
        "+180% tasa de conversión",
        "$500K MXN ahorrados en ops"
      ],
      tech: ["Next.js", "N8N", "Python", "Stripe"]
    },
    {
      company: "Startup RegTech",
      industry: "Compliance / RegTech",
      challenge: "Análisis de documentos manual, 20 horas/semana por cliente",
      solution: "Computer Vision + NLP para análisis automático de contratos y compliance",
      results: [
        "20 horas → 30 minutos análisis",
        "95% accuracy en detección",
        "10x más clientes, mismo equipo"
      ],
      tech: ["Python", "TensorFlow", "React", "PostgreSQL"]
    }
  ];

  const podcasts = [
    {
      episode: "01",
      title: "El Futuro del FinTech en México",
      guest: "CEO de Startup FinTech",
      duration: "45 min",
      topics: ["Regulación", "IA en Finanzas", "Scaling"]
    },
    {
      episode: "02", 
      title: "De 0 a 10K usuarios: Historia Real",
      guest: "CTO de Plataforma de Inversión",
      duration: "52 min",
      topics: ["Tech Stack", "Arquitectura", "Growth"]
    },
    {
      episode: "03",
      title: "Automatización: ROI Real",
      guest: "Director de Operaciones",
      duration: "38 min",
      topics: ["N8N", "Efficiency", "Cost Saving"]
    }
  ];

  const stats = [
    { number: "340%", label: "Avg. Traffic Increase", sublabel: "En 60 días" },
    { number: "12", label: "Proyectos Anuales", sublabel: "Selectivo por calidad" },
    { number: "<1s", label: "Tiempo de Carga", sublabel: "Performance garantizado" },
    { number: "450%", label: "ROI Promedio", sublabel: "En 6 meses" }
  ];

  const parallaxY = scrollY * 0.5;

  return (
    <div className="bg-black text-white min-h-screen font-sans overflow-x-hidden">
      {/* Navigation */}
      <nav className={`fixed w-full z-40 transition-all duration-500 ${scrollY > 50 ? 'bg-black/80 backdrop-blur-xl border-b border-purple-500/20' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <div className="text-2xl font-black">nexuslabtech</div>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <a href="#servicios" className="text-sm hover:text-purple-400 transition-colors">Servicios</a>
              <a href="#casos" className="text-sm hover:text-purple-400 transition-colors">Casos</a>
              <a href="#podcast" className="text-sm hover:text-purple-400 transition-colors">Podcast</a>
              <a href="https://github.com/techdaddi" target="_blank" rel="noopener noreferrer" className="text-sm hover:text-purple-400 transition-colors">GitHub</a>
              <a href="#contacto" className="px-6 py-2 bg-gradient-to-r from-purple-600 to-purple-800 rounded-full text-sm font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-all">
                Iniciar Proyecto
              </a>
            </div>

            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden">
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section ref={heroRef} className="min-h-screen relative flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: 'linear-gradient(rgba(124, 58, 237, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(124, 58, 237, 0.1) 1px, transparent 1px)',
            backgroundSize: '50px 50px',
            transform: `translateY(${parallaxY}px)`
          }} />
        </div>

        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/30 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600/30 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}} />

        <div className="relative z-10 text-center px-6 max-w-5xl">
          <div className="mb-8 inline-block px-6 py-2 bg-purple-500/10 border border-purple-500/30 rounded-full text-purple-400 text-sm backdrop-blur-sm">
            <span className="animate-pulse">●</span> Disponible para proyectos Q1 2025
          </div>
          
          <h1 className="text-5xl md:text-8xl font-black mb-6 leading-tight">
            Conectamos el futuro<br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-purple-600">
              con tu negocio
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-400 mb-12 leading-relaxed max-w-3xl mx-auto">
            Desarrollo web de vanguardia, IA y automatización. La misma tecnología que usan Tesla y Netflix, para startups y financieras mexicanas.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a href="#contacto" className="group px-8 py-4 bg-white text-black rounded-full font-bold hover:bg-purple-600 hover:text-white transition-all duration-300 flex items-center">
              Iniciar Proyecto
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="#casos" className="px-8 py-4 border-2 border-white/20 rounded-full font-bold hover:border-purple-500 hover:bg-purple-500/10 transition-all duration-300 flex items-center backdrop-blur-sm">
              <Play className="mr-2" size={20} />
              Ver Demo
            </a>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 border-y border-purple-500/20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
            {stats.map((stat, idx) => (
              <div key={idx} className="text-center group cursor-pointer">
                <div className="text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 mb-2 group-hover:scale-110 transition-transform">
                  {stat.number}
                </div>
                <div className="text-white font-semibold mb-1">{stat.label}</div>
                <div className="text-sm text-gray-500">{stat.sublabel}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="servicios" className="py-32 px-6 bg-gradient-to-b from-black to-purple-950/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-7xl font-black mb-6">
              Servicios que
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                impulsan resultados
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Stack tecnológico de las Big Tech, optimizado para el mercado mexicano
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, idx) => (
              <div key={idx} className="group relative p-8 bg-gradient-to-br from-purple-900/20 to-pink-900/20 border border-purple-500/20 rounded-3xl hover:border-purple-500/50 transition-all duration-500 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600/0 to-pink-600/0 group-hover:from-purple-600/10 group-hover:to-pink-600/10 transition-all duration-500" />
                
                <div className="relative z-10">
                  <div className="text-purple-400 mb-6 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                    {service.icon}
                  </div>
                  
                  <h3 className="text-3xl font-black mb-4">{service.title}</h3>
                  <p className="text-gray-400 mb-6 leading-relaxed">{service.description}</p>
                  
                  <div className="text-purple-400 font-bold text-xl mb-6">{service.metrics}</div>
                  
                  <div className="flex flex-wrap gap-2">
                    {service.tech.map((tech, i) => (
                      <span key={i} className="px-3 py-1 bg-purple-500/10 border border-purple-500/30 rounded-full text-xs text-purple-300">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section id="casos" className="py-32 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-7xl font-black mb-6">
              Casos de <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">Éxito Real</span>
            </h2>
            <p className="text-xl text-gray-400">Startups y financieras que transformamos</p>
          </div>

          <div className="relative">
            {caseStudies.map((study, idx) => (
              <div
                key={idx}
                className={`transition-all duration-500 ${activeCase === idx ? 'opacity-100' : 'opacity-0 absolute inset-0 pointer-events-none'}`}
              >
                <div className="grid md:grid-cols-2 gap-12 items-center">
                  <div>
                    <div className="inline-block px-4 py-2 bg-purple-500/10 border border-purple-500/30 rounded-full text-purple-400 text-sm mb-6">
                      {study.industry}
                    </div>
                    <h3 className="text-4xl font-black mb-4">{study.company}</h3>
                    
                    <div className="space-y-6 mb-8">
                      <div>
                        <div className="text-sm text-purple-400 font-semibold mb-2">DESAFÍO</div>
                        <p className="text-gray-400">{study.challenge}</p>
                      </div>
                      <div>
                        <div className="text-sm text-purple-400 font-semibold mb-2">SOLUCIÓN</div>
                        <p className="text-gray-400">{study.solution}</p>
                      </div>
                      <div>
                        <div className="text-sm text-purple-400 font-semibold mb-2">RESULTADOS</div>
                        <ul className="space-y-2">
                          {study.results.map((result, i) => (
                            <li key={i} className="flex items-center text-white font-semibold">
                              <ChevronRight className="text-purple-400 mr-2" size={20} />
                              {result}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {study.tech.map((tech, i) => (
                        <span key={i} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="relative h-96 bg-gradient-to-br from-purple-900/50 to-pink-900/50 rounded-3xl flex items-center justify-center border border-purple-500/20">
                    <div className="text-6xl font-black text-white/10">{study.company}</div>
                  </div>
                </div>
              </div>
            ))}

            <div className="flex justify-center gap-3 mt-12">
              {caseStudies.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveCase(idx)}
                  className={`h-2 rounded-full transition-all ${activeCase === idx ? 'w-12 bg-purple-500' : 'w-2 bg-white/20'}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Podcast */}
      <section id="podcast" className="py-32 px-6 bg-gradient-to-b from-purple-950/20 to-black">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <Mic className="w-16 h-16 text-purple-400 mx-auto mb-6" />
            <h2 className="text-5xl md:text-7xl font-black mb-6">
              NEXUS <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">Podcast</span>
            </h2>
            <p className="text-xl text-gray-400">Conversaciones sobre tech, startups y el futuro digital</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {podcasts.map((podcast, idx) => (
              <div key={idx} className="group p-8 bg-gradient-to-br from-purple-900/10 to-pink-900/10 border border-purple-500/20 rounded-3xl hover:border-purple-500/50 transition-all duration-300">
                <div className="text-5xl font-black text-purple-400/20 mb-4">#{podcast.episode}</div>
                <h3 className="text-2xl font-bold mb-3 group-hover:text-purple-400 transition-colors">{podcast.title}</h3>
                <p className="text-gray-400 mb-4">{podcast.guest}</p>
                <div className="text-sm text-purple-400 mb-4">{podcast.duration}</div>
                <div className="flex flex-wrap gap-2 mb-6">
                  {podcast.topics.map((topic, i) => (
                    <span key={i} className="px-3 py-1 bg-purple-500/10 rounded-full text-xs text-purple-300">
                      {topic}
                    </span>
                  ))}
                </div>
                <button className="w-full py-3 bg-purple-600/20 hover:bg-purple-600 rounded-full font-semibold transition-all flex items-center justify-center group-hover:shadow-lg group-hover:shadow-purple-500/50">
                  <Play size={20} className="mr-2" />
                  Escuchar
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GitHub Section */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <Github className="w-16 h-16 text-purple-400 mx-auto mb-6" />
            <h2 className="text-5xl md:text-7xl font-black mb-6">
              Open <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">Source</span>
            </h2>
            <p className="text-xl text-gray-400 mb-8">Contribuciones reales, código de calidad</p>
            <a href="https://github.com/techdaddi" target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-8 py-4 bg-white text-black rounded-full font-bold hover:bg-purple-600 hover:text-white transition-all">
              <Github className="mr-2" />
              github.com/techdaddi
              <ArrowRight className="ml-2" />
            </a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="contacto" className="py-32 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-5xl md:text-7xl font-black mb-8">
            Solo <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">12 proyectos</span> en 2025
          </h2>
          <p className="text-2xl text-gray-300 mb-12">
            Las consultas se cierran rápido. ¿Tu startup está lista?
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a href="mailto:hola@nexuslabtech.com" className="px-8 py-4 bg-white text-black rounded-full font-bold hover:bg-purple-600 hover:text-white transition-all flex items-center justify-center">
              <Mail className="mr-2" />
              hola@nexuslabtech.com
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-purple-500/20">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <div className="text-2xl font-black">nexuslabtech</div>
            <div className="text-sm text-gray-500">Transformación Digital © 2025</div>
          </div>
          <div className="flex gap-6">
            <a href="https://github.com/techdaddi" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-purple-400 transition-colors">
              <Github />
            </a>
            <a href="mailto:hola@nexuslabtech.com" className="text-gray-400 hover:text-purple-400 transition-colors">
              <Mail />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
