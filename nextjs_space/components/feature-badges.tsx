
'use client'

import { useState } from 'react'
import { Building2, Euro, Clock, ShieldCheck } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const features = [
  {
    id: 'company',
    title: 'A empresa',
    icon: Building2,
    content: {
      title: 'Solutions4Algarve',
      description: 'Empresa especializada em serviços de limpeza, renovação e pintura no Algarve. Com anos de experiência, oferecemos soluções completas para tornar o seu espaço mais bonito e funcional.',
      highlights: ['Equipa experiente', 'Materiais de qualidade', 'Atendimento personalizado']
    }
  },
  {
    id: 'cost',
    title: 'Quanto custa?',
    icon: Euro,
    content: {
      title: 'Orçamentos Transparentes',
      description: 'Oferecemos orçamentos detalhados e competitivos sem custos ocultos. Todos os nossos orçamentos são gratuitos e sem compromisso.',
      highlights: ['Orçamento gratuito', 'Preços competitivos', 'Sem custos ocultos']
    }
  },
  {
    id: 'timing',
    title: 'Cumprimento de prazos',
    icon: Clock,
    content: {
      title: 'Pontualidade Garantida',
      description: 'Comprometemo-nos a cumprir os prazos estabelecidos. Planeamos cada projeto com atenção aos detalhes para assegurar a entrega no tempo combinado.',
      highlights: ['Prazos respeitados', 'Planeamento detalhado', 'Comunicação constante']
    }
  },
  {
    id: 'quality',
    title: 'Garantia de qualidade',
    icon: ShieldCheck,
    content: {
      title: 'Qualidade Assegurada',
      description: 'Todos os nossos trabalhos têm garantia de qualidade. Utilizamos apenas materiais de primeira linha e técnicas profissionais comprovadas.',
      highlights: ['Garantia em todos os trabalhos', 'Materiais premium', 'Técnicas profissionais']
    }
  }
]

export default function FeatureBadges() {
  const [activeFeature, setActiveFeature] = useState('cost')

  const activeContent = features?.find(f => f?.id === activeFeature)

  return (
    <section className="bg-white py-8 border-b">
      <div className="container-width">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Feature Tabs */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
            {features?.map((feature) => {
              const IconComponent = feature?.icon
              const isActive = activeFeature === feature?.id
              
              return (
                <motion.button
                  key={feature?.id || ''}
                  onClick={() => setActiveFeature(feature?.id || '')}
                  className={`p-4 rounded-lg border-2 transition-all duration-300 text-left ${
                    isActive
                      ? 'bg-solutions-blue border-solutions-blue text-white shadow-lg'
                      : 'bg-white border-gray-200 hover:border-solutions-blue/30 hover:shadow-md'
                  }`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="flex items-center space-x-2 mb-2">
                    <IconComponent className={`w-5 h-5 ${isActive ? 'text-solutions-gold' : 'text-solutions-blue'}`} />
                  </div>
                  <div className={`text-sm font-medium ${isActive ? 'text-white' : 'text-solutions-blue'}`}>
                    {feature?.title || ''}
                  </div>
                </motion.button>
              )
            })}
          </div>

          {/* Content Display */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeFeature}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm"
            >
              <h3 className="text-2xl font-bold text-solutions-blue mb-3">
                {activeContent?.content?.title || ''}
              </h3>
              <p className="text-gray-900 mb-4 leading-relaxed">
                {activeContent?.content?.description || ''}
              </p>
              <div className="space-y-2">
                {activeContent?.content?.highlights?.map((highlight, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-solutions-gold rounded-full" />
                    <span className="text-sm font-medium text-gray-900">
                      {highlight || ''}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
