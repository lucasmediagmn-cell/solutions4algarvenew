
'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { Phone, MessageSquare, CheckCircle, Star, Award } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'

const benefits = [
  'Orçamento 100% Gratuito',
  'Equipa Profissional Experiente',
  'Materiais de Primeira Qualidade',
  'Resposta em 24 Horas'
]

export default function HeroSection() {
  const [currentBenefitIndex, setCurrentBenefitIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBenefitIndex((prevIndex) => (prevIndex + 1) % benefits?.length || 0)
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section id="inicio" className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50 pt-24 md:pt-32">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      
      {/* Decorative Blobs */}
      <div className="absolute top-20 right-0 w-72 h-72 bg-solutions-gold/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 left-0 w-96 h-96 bg-solutions-blue/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      
      <div className="container-width section-padding relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[600px]">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Trust Badges */}
            <div className="flex flex-wrap gap-3">
              <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm border border-solutions-gold/20">
                <Star className="w-4 h-4 text-solutions-gold fill-solutions-gold" />
                <span className="text-sm font-semibold text-solutions-blue">5.0 Avaliação</span>
              </div>
              <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm border border-solutions-blue/20">
                <Award className="w-4 h-4 text-solutions-blue" />
                <span className="text-sm font-semibold text-solutions-blue">+50 Projetos</span>
              </div>
            </div>

            <div className="space-y-6">
              <h1 className="text-5xl lg:text-7xl font-bold text-solutions-blue leading-tight">
                Obras no Algarve?
                <span className="block gradient-text mt-2">Nós Tratamos!</span>
              </h1>
              
              <p className="text-xl lg:text-2xl text-solutions-gray-dark leading-relaxed">
                Empresa especializada em <span className="font-bold text-solutions-blue">limpeza, renovação e pintura</span> em todo o Algarve. 
                Transformamos o seu espaço com qualidade profissional garantida.
              </p>
            </div>

            {/* Rotating Benefits */}
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 border-l-4 border-green-500 rounded-lg p-4">
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0" />
                <motion.span
                  key={currentBenefitIndex}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="text-lg font-semibold text-gray-800"
                >
                  {benefits?.[currentBenefitIndex] || ''}
                </motion.span>
              </div>
            </div>

            {/* CTA Buttons - WhatsApp Emphasis */}
            <div className="space-y-4">
              <a 
                href="https://wa.me/351920636048?text=Ol%C3%A1%21%20Gostaria%20de%20pedir%20um%20or%C3%A7amento%20gratuito"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full sm:w-auto"
              >
                <Button size="lg" className="w-full sm:w-auto bg-green-600 hover:bg-green-700 text-white font-bold text-lg px-10 py-7 rounded-xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
                  <MessageSquare className="w-6 h-6 mr-3" />
                  Pedir Orçamento no WhatsApp
                </Button>
              </a>
              
              <div className="flex flex-col sm:flex-row gap-3">
                <a href="tel:+351920636048" className="flex-1">
                  <Button size="lg" variant="outline" className="w-full border-2 border-solutions-blue text-solutions-blue hover:bg-solutions-blue hover:text-white font-semibold text-lg px-6 py-6 rounded-xl transition-all duration-300">
                    <Phone className="w-5 h-5 mr-2" />
                    920 636 048
                  </Button>
                </a>
                
                <a href="#contacto" className="flex-1">
                  <Button size="lg" variant="outline" className="w-full border-2 border-gray-300 text-gray-700 hover:bg-gray-100 font-semibold text-lg px-6 py-6 rounded-xl transition-all duration-300">
                    Enviar Email
                  </Button>
                </a>
              </div>
            </div>

            <p className="text-sm text-gray-500 flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-600" />
              Resposta garantida em 24 horas • Orçamento gratuito
            </p>
          </motion.div>

          {/* Hero Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative lg:scale-110"
          >
            <div className="relative aspect-square rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="/casal analisando junto bk.jpg"
                alt="Casal analisando projetos de renovação em casa"
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
              
              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-tr from-solutions-blue/30 via-transparent to-solutions-gold/20" />
              
              {/* Floating Stats Card */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1 }}
                className="absolute bottom-8 left-8 right-8 bg-white/95 backdrop-blur-md rounded-2xl p-6 shadow-2xl border border-white/50"
              >
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-3xl font-bold text-solutions-blue">100%</div>
                    <div className="text-xs text-gray-600 font-medium mt-1">Satisfação</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-solutions-gold">24h</div>
                    <div className="text-xs text-gray-600 font-medium mt-1">Resposta</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-green-600">5.0★</div>
                    <div className="text-xs text-gray-600 font-medium mt-1">Avaliação</div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-8 -right-8 w-32 h-32 bg-solutions-gold/30 rounded-full blur-2xl" />
            <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-solutions-blue/20 rounded-full blur-2xl" />
          </motion.div>
        </div>
      </div>

      {/* Decorative Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-16 md:h-20 fill-current text-white">
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"></path>
        </svg>
      </div>
    </section>
  )
}
