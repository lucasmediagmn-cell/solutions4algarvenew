
'use client'

import Image from 'next/image'
import { CheckCircle, Users, Award, Clock, Target, MessageSquare } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const commitments = [
  'Profissionalismo em cada projeto',
  'Preços competitivos no mercado',
  'Materiais de primeira qualidade',
  'Cumprimento rigoroso de prazos',
  'Orçamentos 100% gratuitos',
  'Equipa experiente e dedicada'
]

const stats = [
  { icon: Users, value: '50+', label: 'Projetos Concluídos', color: 'from-blue-500 to-cyan-500' },
  { icon: Award, value: '5.0★', label: 'Avaliação Média', color: 'from-amber-500 to-orange-500' },
  { icon: Clock, value: '24h', label: 'Tempo de Resposta', color: 'from-green-500 to-emerald-500' }
]

export default function AboutSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  return (
    <section id="sobre" className="bg-gradient-to-b from-white to-slate-50 section-padding">
      <div className="container-width">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-6xl font-bold text-solutions-blue mb-6">
            Sobre a Solutions4Algarve
          </h2>
          <p className="text-xl text-solutions-gray-dark max-w-4xl mx-auto leading-relaxed">
            Empresa especializada em <span className="font-bold text-solutions-blue">limpeza, renovação e pintura</span> em 
            todo o Algarve. Transformamos espaços com qualidade profissional e dedicação total.
          </p>
        </motion.div>

        {/* Stats Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid md:grid-cols-3 gap-6 mb-16"
        >
          {stats?.map((stat, index) => {
            const IconComponent = stat?.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                className={`relative overflow-hidden bg-gradient-to-br ${stat?.color || ''} rounded-2xl p-8 text-center text-white shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105`}
              >
                <IconComponent className="w-12 h-12 mx-auto mb-4 opacity-90" />
                <div className="text-5xl font-bold mb-2">{stat?.value || ''}</div>
                <div className="text-sm font-semibold uppercase tracking-wide opacity-90">
                  {stat?.label || ''}
                </div>
                {/* Decorative circle */}
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-white/10 rounded-full" />
              </motion.div>
            )
          })}
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Images */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-6"
          >
            <div className="grid grid-cols-2 gap-4">
              <div className="relative aspect-square rounded-2xl overflow-hidden shadow-lg col-span-2">
                <Image
                  src="/obras.png"
                  alt="Profissional trabalhando em projeto de renovação"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              
              <div className="relative aspect-square rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src="/emrpesa de pintores.png"
                  alt="Equipamentos profissionais"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
              </div>
              
              <div className="bg-gradient-to-br from-solutions-blue to-blue-600 rounded-2xl p-6 flex flex-col justify-center items-center text-white">
                <Target className="w-12 h-12 mb-3" />
                <div className="text-3xl font-bold mb-1">100%</div>
                <div className="text-sm text-center font-medium">Satisfação Garantida</div>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-3xl font-bold text-solutions-blue mb-6">
                O Nosso Compromisso
              </h3>
              <div className="grid grid-cols-1 gap-3">
                {commitments?.map((commitment, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ duration: 0.4, delay: 0.7 + index * 0.05 }}
                    className="flex items-center space-x-3 bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition-all duration-300 hover:translate-x-2"
                  >
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <span className="text-solutions-gray-dark font-medium">
                      {commitment || ''}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8 border-l-4 border-solutions-blue">
              <h4 className="text-xl font-bold text-solutions-blue mb-3">
                Porque Escolher-nos?
              </h4>
              <p className="text-solutions-gray-dark leading-relaxed mb-6">
                Somos especialistas com anos de experiência no mercado algarvio. 
                Oferecemos soluções completas em Faro, Albufeira, Portimão, Lagos, 
                Tavira, Olhão e toda a região do Algarve com garantia de qualidade 
                e preços competitivos.
              </p>
              <a 
                href="https://wa.me/351920636048?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20os%20vossos%20serviços."
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button size="lg" className="w-full bg-green-600 hover:bg-green-700 text-white font-bold rounded-xl">
                  <MessageSquare className="w-5 h-5 mr-2" />
                  Falar no WhatsApp
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
