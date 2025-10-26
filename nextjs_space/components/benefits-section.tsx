
'use client'

import { Shield, Clock, Award, Users, ThumbsUp, Wrench, Star, CheckCircle } from 'lucide-react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const benefits = [
  {
    icon: Shield,
    title: 'Garantia de Qualidade',
    description: 'Todos os nossos trabalhos têm garantia. Utilizamos apenas materiais de primeira linha e técnicas profissionais.',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    icon: Clock,
    title: 'Cumprimento de Prazos',
    description: 'Respeitamos o seu tempo. Planeamento rigoroso e execução eficiente para entregar no prazo combinado.',
    color: 'from-purple-500 to-pink-500'
  },
  {
    icon: Award,
    title: 'Profissionais Certificados',
    description: 'Equipa experiente com formação contínua. Conhecimento técnico e dedicação em cada projeto.',
    color: 'from-orange-500 to-amber-500'
  },
  {
    icon: Users,
    title: 'Atendimento Personalizado',
    description: 'Escutamos as suas necessidades e oferecemos soluções adaptadas ao seu projeto e orçamento.',
    color: 'from-green-500 to-emerald-500'
  },
  {
    icon: ThumbsUp,
    title: 'Satisfação Garantida',
    description: 'A sua satisfação é a nossa prioridade. Mais de 50 clientes satisfeitos comprovam a nossa qualidade.',
    color: 'from-teal-500 to-cyan-500'
  },
  {
    icon: Wrench,
    title: 'Equipamento Profissional',
    description: 'Ferramentas e tecnologia de última geração para resultados impecáveis e acabamentos perfeitos.',
    color: 'from-indigo-500 to-purple-500'
  }
]

const stats = [
  { value: '50+', label: 'Projetos Concluídos', icon: CheckCircle },
  { value: '100%', label: 'Clientes Satisfeitos', icon: ThumbsUp },
  { value: '24h', label: 'Tempo de Resposta', icon: Clock },
  { value: '5.0★', label: 'Avaliação Média', icon: Star }
]

export default function BenefitsSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  return (
    <section className="bg-white section-padding">
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
            Por Que Escolher a Solutions4Algarve?
          </h2>
          <p className="text-xl text-solutions-gray-dark max-w-3xl mx-auto leading-relaxed">
            Somos a escolha certa para transformar o seu espaço com qualidade, profissionalismo e confiança
          </p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {stats?.map((stat, index) => {
            const IconComponent = stat?.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                className="bg-gradient-to-br from-solutions-blue to-blue-600 rounded-2xl p-6 text-center text-white shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105"
              >
                <IconComponent className="w-10 h-10 mx-auto mb-3 text-solutions-gold" />
                <div className="text-4xl font-bold mb-2">{stat?.value || ''}</div>
                <div className="text-sm text-blue-100 font-medium">{stat?.label || ''}</div>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits?.map((benefit, index) => {
            const IconComponent = benefit?.icon
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                className="group bg-gradient-to-br from-white to-slate-50 rounded-2xl p-8 border border-gray-200 hover:border-solutions-gold/50 hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                {/* Icon with Gradient Background */}
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${benefit?.color || ''} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <IconComponent className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-2xl font-bold text-solutions-blue mb-4 group-hover:text-solutions-gold transition-colors duration-300">
                  {benefit?.title || ''}
                </h3>
                
                <p className="text-solutions-gray-dark leading-relaxed">
                  {benefit?.description || ''}
                </p>
              </motion.div>
            )
          })}
        </div>

        {/* Trust Badge Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="mt-16 bg-gradient-to-r from-green-50 to-emerald-50 border-l-4 border-green-500 rounded-2xl p-8 md:p-12"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex-1">
              <h3 className="text-3xl font-bold text-solutions-blue mb-4">
                Compromisso com a Excelência
              </h3>
              <p className="text-lg text-solutions-gray-dark leading-relaxed">
                Cada projeto é tratado com o máximo cuidado e atenção aos detalhes. 
                A nossa missão é superar as suas expectativas e transformar a sua visão em realidade.
              </p>
            </div>
            <div className="flex items-center gap-4">
              <div className="text-center">
                <Star className="w-16 h-16 text-solutions-gold fill-solutions-gold mx-auto mb-2" />
                <div className="text-2xl font-bold text-solutions-blue">5.0</div>
                <div className="text-sm text-gray-600">Avaliação</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
