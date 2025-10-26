
'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Phone, MessageSquare, CheckCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

export default function ServicesPresentation() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  return (
    <section className="bg-solutions-gray-light section-padding">
      <div className="container-width">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <h2 className="text-4xl lg:text-5xl font-bold text-solutions-blue leading-tight">
                Obras de limpeza, renovação e pintura
              </h2>
              <h3 className="text-2xl font-semibold text-solutions-gold">
                Deixe as suas obras com os profissionais
              </h3>
              <p className="text-lg text-solutions-gray-dark leading-relaxed">
                Na Solutions4Algarve, oferecemos uma gama completa de serviços para 
                transformar o seu espaço. Desde limpezas profissionais até renovações 
                completas e trabalhos de pintura, temos a experiência e os recursos 
                necessários para superar as suas expectativas.
              </p>
            </div>

            <div className="space-y-3">
              {[
                'Limpeza profissional pós-obra',
                'Renovações de cozinhas e casas de banho',
                'Pintura interior e exterior',
                'Remodelações completas'
              ].map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-center space-x-3"
                >
                  <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0" />
                  <span className="text-lg font-medium text-solutions-blue">
                    {service || ''}
                  </span>
                </motion.div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="#contacto">
                <Button size="lg" className="btn-secondary w-full sm:w-auto">
                  <Phone className="w-5 h-5 mr-2" />
                  Pedir Orçamento
                </Button>
              </Link>
              
              <a 
                href="https://wa.me/351920636048?text=Olá, gostaria de saber mais sobre os vossos serviços."
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button size="lg" variant="outline" className="btn-outline w-full sm:w-auto">
                  <MessageSquare className="w-5 h-5 mr-2" />
                  WhatsApp
                </Button>
              </a>
            </div>

            <p className="text-sm text-gray-500">
              (**) Chamada para a rede móvel nacional
            </p>
          </motion.div>

          {/* Phone Mockup */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative aspect-[3/4] max-w-sm mx-auto">
              <Image
                src="/telefone na mao.png"
                alt="Telefone com site Solutions4Algarve responsivo"
                fill
                className="object-contain hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-solutions-gold/20 rounded-full blur-xl animate-pulse" />
              <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-solutions-blue/20 rounded-full blur-xl animate-pulse" style={{ animationDelay: '1s' }} />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
