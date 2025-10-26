
'use client'

import Image from 'next/image'
import { MessageSquare, CheckCircle, Star, Clock, Shield } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const features = [
  { icon: Star, title: 'Qualidade', subtitle: 'Garantida' },
  { icon: Clock, title: 'Resposta', subtitle: '24 Horas' },
  { icon: Shield, title: 'Confiança', subtitle: 'Total' }
]

const benefits = [
  'Orçamento 100% gratuito e sem compromisso',
  'Visita ao local para avaliação detalhada',
  'Materiais de primeira qualidade',
  'Equipa experiente e profissional',
  'Preços competitivos no mercado',
  'Garantia de satisfação total'
]

export default function CTASection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-solutions-blue via-blue-700 to-solutions-blue">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/casal analisando junto bk.jpg"
          alt="Casal planeando renovação"
          fill
          className="object-cover opacity-10"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-solutions-blue/95 to-blue-700/95" />
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-10 right-10 w-64 h-64 bg-solutions-gold/20 rounded-full blur-3xl" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-white/10 rounded-full blur-3xl" />

      <div className="relative container-width section-padding">
        <div className="max-w-5xl mx-auto">
          {/* Main Content */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Pronto para Transformar o Seu Espaço?
            </h2>
            <p className="text-xl lg:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Peça o seu orçamento gratuito agora e deixe a nossa equipa especializada cuidar de tudo!
            </p>
          </motion.div>

          {/* Features Cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-3 gap-4 mb-12"
          >
            {features?.map((feature, index) => {
              const IconComponent = feature?.icon
              
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  className="text-center bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20"
                >
                  <IconComponent className="w-10 h-10 text-solutions-gold mx-auto mb-3" />
                  <div className="text-lg font-bold text-white">{feature?.title}</div>
                  <div className="text-sm text-blue-100">{feature?.subtitle}</div>
                </motion.div>
              )
            })}
          </motion.div>

          {/* Main CTA - WhatsApp Button */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-center mb-12"
          >
            <a 
              href="https://wa.me/351920636048?text=Ol%C3%A1%21%20Gostaria%20de%20pedir%20um%20or%C3%A7amento%20gratuito"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block"
            >
              <Button 
                size="lg" 
                className="bg-green-600 hover:bg-green-700 text-white font-bold text-2xl px-16 py-10 rounded-2xl shadow-2xl hover:shadow-green-500/50 transform hover:scale-105 transition-all duration-300 border-4 border-green-400"
              >
                <MessageSquare className="w-8 h-8 mr-4" />
                Fale Connosco no WhatsApp
              </Button>
            </a>
            <p className="text-blue-100 mt-4 text-lg">
              Resposta rápida e atendimento personalizado
            </p>
          </motion.div>

          {/* Benefits Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="bg-white/10 backdrop-blur-md rounded-3xl p-8 md:p-12 border border-white/20"
          >
            <h3 className="text-2xl md:text-3xl font-bold text-white text-center mb-8">
              O Que Oferecemos
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              {benefits?.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ duration: 0.4, delay: 0.8 + index * 0.1 }}
                  className="flex items-start space-x-3 bg-white/5 rounded-xl p-4"
                >
                  <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-0.5" />
                  <span className="text-white font-medium leading-relaxed">
                    {benefit || ''}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Trust Badge */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="text-center mt-8"
          >
            <p className="text-blue-100 text-lg">
              <CheckCircle className="w-5 h-5 inline-block mr-2 text-green-400" />
              Mais de 50 clientes satisfeitos em todo o Algarve
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
