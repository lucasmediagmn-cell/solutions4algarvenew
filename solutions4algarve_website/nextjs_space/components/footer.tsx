
'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Phone, Mail, MapPin, Clock, Star } from 'lucide-react'

const footerLinks = {
  empresa: [
    { name: 'Sobre Nós', href: '#sobre' },
    { name: 'Contactos', href: '#contacto' },
    { name: 'Orçamento Grátis', href: '#contacto' }
  ],
  servicos: [
    { name: 'Limpeza Pós-Obra', href: '#servicos' },
    { name: 'Pintura Interior', href: '#servicos' },
    { name: 'Pintura Exterior', href: '#servicos' },
    { name: 'Remodelação Cozinhas', href: '#servicos' },
    { name: 'Remodelação Casas Banho', href: '#servicos' },
    { name: 'Obras Baixo Custo', href: '#servicos' }
  ]
}

const contactDetails = [
  {
    icon: Phone,
    title: 'Telefone',
    value: '+351 920 636 048',
    link: 'tel:+351920636048'
  },
  {
    icon: Mail,
    title: 'Email',
    value: 'contacto@solutions4algarve.pt',
    link: 'mailto:contacto@solutions4algarve.pt'
  },
  {
    icon: MapPin,
    title: 'Localização',
    value: 'Algarve, Portugal'
  },
  {
    icon: Clock,
    title: 'Horário',
    value: 'Seg-Sex: 8h-18h'
  }
]

export default function Footer() {
  return (
    <footer className="bg-solutions-blue text-white">
      {/* Main Footer */}
      <div className="container-width py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1 space-y-6">
            <div className="relative w-48 h-12">
              <Image
                src="/logo_novo-removebg-preview.png"
                alt="Solutions4Algarve - Empresa de Limpeza, Renovação e Pintura no Algarve"
                fill
                className="object-contain"
                sizes="200px"
              />
            </div>
            
            <p className="text-sm leading-relaxed opacity-90">
              Empresa líder em limpeza, renovação e pintura no Algarve. 
              Servimos toda a região: Faro, Albufeira, Portimão, Lagos, Tavira, Olhão. 
              Qualidade, profissionalismo e preços competitivos garantidos.
            </p>

            <div className="flex items-center space-x-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} className="w-4 h-4 fill-solutions-gold text-solutions-gold" />
              ))}
              <span className="text-sm ml-2 opacity-90">5.0 Avaliação</span>
            </div>
          </div>

          {/* Empresa Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Empresa</h3>
            <div className="space-y-3">
              {footerLinks?.empresa?.map((link) => (
                <Link
                  key={link?.name || ''}
                  href={link?.href || '#'}
                  className="block text-sm opacity-90 hover:opacity-100 hover:text-solutions-gold transition-colors duration-200"
                >
                  {link?.name || ''}
                </Link>
              ))}
            </div>
          </div>

          {/* Serviços Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Serviços</h3>
            <div className="space-y-3">
              {footerLinks?.servicos?.map((link) => (
                <Link
                  key={link?.name || ''}
                  href={link?.href || '#'}
                  className="block text-sm opacity-90 hover:opacity-100 hover:text-solutions-gold transition-colors duration-200"
                >
                  {link?.name || ''}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact Details */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Contactos</h3>
            <div className="space-y-4">
              {contactDetails?.map((contact, index) => {
                const IconComponent = contact?.icon
                
                return (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="flex-shrink-0 p-2 bg-white/10 rounded-lg">
                      <IconComponent className="w-4 h-4 text-solutions-gold" />
                    </div>
                    <div>
                      <div className="text-xs font-medium text-solutions-gold mb-1">
                        {contact?.title}
                      </div>
                      {contact?.link ? (
                        <a 
                          href={contact?.link}
                          className="text-sm opacity-90 hover:opacity-100 hover:text-solutions-gold transition-colors duration-200"
                        >
                          {contact?.value}
                        </a>
                      ) : (
                        <div className="text-sm opacity-90">{contact?.value}</div>
                      )}
                    </div>
                  </div>
                )
              })}
            </div>

            <p className="text-xs opacity-70 mt-4">
              (*) Chamada para a rede móvel nacional
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-white/20">
        <div className="container-width py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm opacity-90">
              &copy; {new Date().getFullYear()} Solutions4Algarve. Todos os direitos reservados.
            </div>
            
            <div className="flex items-center space-x-6">
              <Link 
                href="#contacto" 
                className="text-sm opacity-90 hover:opacity-100 hover:text-solutions-gold transition-colors duration-200"
              >
                Orçamento Grátis
              </Link>
              <Link 
                href="#servicos" 
                className="text-sm opacity-90 hover:opacity-100 hover:text-solutions-gold transition-colors duration-200"
              >
                Serviços
              </Link>
              <a 
                href="tel:+351920636048"
                className="text-sm opacity-90 hover:opacity-100 hover:text-solutions-gold transition-colors duration-200"
              >
                920 636 048
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
