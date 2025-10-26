
'use client'

import Image from 'next/image'
import { ArrowRight, Palette, Brush, Home, Sparkles, Wrench, DollarSign, MessageSquare } from 'lucide-react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Button } from '@/components/ui/button'

const services = [
  {
    id: 'limpeza-pos-obra',
    title: 'Limpeza Pós-Obra',
    description: 'Serviço especializado de limpeza após obras e renovações. Removemos todos os resíduos, poeiras e deixamos o seu espaço impecável e pronto a usar.',
    image: '/limpeza pos obra.jpg.webp',
    icon: Sparkles,
    color: 'from-blue-500 to-cyan-500'
  },
  {
    id: 'pintura-exterior',
    title: 'Pintura Exterior',
    description: 'Renovação e proteção de fachadas com tintas premium. Resistência garantida ao clima do Algarve para manter a sua casa sempre bonita.',
    image: '/pintura exterior casa.jpg',
    icon: Brush,
    color: 'from-green-500 to-emerald-500'
  },
  {
    id: 'pintura-interior',
    title: 'Pintura Interior',
    description: 'Transforme os seus espaços interiores com acabamentos perfeitos. Cores vibrantes e duradouras que refletem o seu estilo pessoal.',
    image: '/empresa pintura.jpg',
    icon: Palette,
    color: 'from-purple-500 to-pink-500'
  },
  {
    id: 'remodelacao-cozinhas',
    title: 'Remodelação de Cozinhas',
    description: 'Cozinhas modernas e funcionais que aumentam o valor da sua casa. Design personalizado para aproveitar cada centímetro do espaço.',
    image: '/remodelacao de cozinha.jpg',
    icon: Home,
    color: 'from-orange-500 to-amber-500'
  },
  {
    id: 'remodelacao-casas-banho',
    title: 'Remodelação de Casas de Banho',
    description: 'Transforme a sua casa de banho num oásis de conforto. Acabamentos de luxo com materiais de primeira qualidade e design elegante.',
    image: '/casa de banho 1.jpg.webp',
    icon: Wrench,
    color: 'from-teal-500 to-cyan-500'
  },
  {
    id: 'obras-baixo-custo',
    title: 'Obras Económicas',
    description: 'Soluções inteligentes que cabem no seu orçamento. Qualidade profissional com preços justos e transparentes, sem surpresas.',
    image: '/obras a baixo custo.png.webp',
    icon: DollarSign,
    color: 'from-lime-500 to-green-600'
  }
]

export default function ServicesGrid() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  return (
    <section id="servicos" className="bg-gradient-to-b from-white to-slate-50 section-padding">
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
            Os Nossos Serviços
          </h2>
          <p className="text-xl text-solutions-gray-dark max-w-3xl mx-auto leading-relaxed">
            Soluções completas para todas as suas necessidades de obras, limpeza e renovação em todo o Algarve
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services?.map((service, index) => {
            const IconComponent = service?.icon
            
            return (
              <motion.div
                key={service?.id || index}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group bg-white rounded-2xl overflow-hidden hover-lift shadow-lg border border-gray-100 hover:border-solutions-gold/50 transition-all duration-300"
              >
                {/* Image */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={service?.image || ''}
                    alt={service?.title || ''}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  
                  {/* Gradient Overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${service?.color || ''} opacity-0 group-hover:opacity-20 transition-opacity duration-300`} />
                  
                  {/* Icon Badge */}
                  <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm rounded-full p-3 shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="w-6 h-6 text-solutions-blue" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-4">
                  <h3 className="text-2xl font-bold text-solutions-blue group-hover:text-solutions-gold transition-colors duration-300">
                    {service?.title || ''}
                  </h3>
                  
                  <p className="text-solutions-gray-dark leading-relaxed">
                    {service?.description || ''}
                  </p>
                  
                  <a 
                    href="https://wa.me/351920636048?text=Ol%C3%A1%21%20Gostaria%20de%20pedir%20um%20or%C3%A7amento%20gratuito"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-solutions-blue hover:text-solutions-gold font-semibold transition-colors duration-200 group/link"
                  >
                    Pedir Orçamento
                    <ArrowRight className="w-4 h-4 ml-2 group-hover/link:translate-x-1 transition-transform duration-200" />
                  </a>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* CTA Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="bg-gradient-to-br from-solutions-blue via-blue-600 to-solutions-blue rounded-3xl p-8 md:p-12 text-center text-white shadow-2xl relative overflow-hidden"
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 right-10 w-64 h-64 bg-white rounded-full blur-3xl" />
            <div className="absolute bottom-10 left-10 w-80 h-80 bg-solutions-gold rounded-full blur-3xl" />
          </div>

          <div className="relative z-10">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              Não encontrou o que procura?
            </h3>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Temos soluções personalizadas para cada projeto. Fale connosco e conte-nos as suas necessidades!
            </p>
            <a 
              href="https://wa.me/351920636048?text=Ol%C3%A1%21%20Gostaria%20de%20pedir%20um%20or%C3%A7amento%20gratuito"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button 
                size="lg" 
                className="bg-green-600 hover:bg-green-700 text-white font-bold text-xl px-12 py-7 rounded-xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
              >
                <MessageSquare className="w-6 h-6 mr-3" />
                Falar no WhatsApp
              </Button>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
