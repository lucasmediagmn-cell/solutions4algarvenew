
'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X, Phone } from 'lucide-react'
import { Button } from '@/components/ui/button'

const navigation = [
  { name: 'Início', href: '#inicio' },
  { name: 'Serviços', href: '#servicos' },
  { name: 'Sobre', href: '#sobre' },
  { name: 'Galeria', href: '#galeria' },
  { name: 'Contacto', href: '#contacto' },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 100
      setScrolled(isScrolled)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      {/* Pre-header */}
      <div className="bg-white border-b border-gray-200 py-2">
        <div className="container-width">
          <div className="flex justify-center items-center text-sm text-solutions-blue">
            <Phone className="w-4 h-4 mr-2" />
            <span className="font-medium">+351 920 636 048</span>
            <span className="ml-2 text-gray-500">(*) Chamada para a rede móvel nacional</span>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header 
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled ? 'bg-solutions-blue/95 backdrop-blur-sm shadow-lg' : 'bg-solutions-blue'
        }`}
      >
        <nav className="container-width" aria-label="Global">
          <div className="flex items-center justify-between py-4">
            {/* Logo */}
            <div className="flex lg:flex-1">
              <Link href="#inicio" className="-m-1.5 p-1.5">
                <span className="sr-only">Solutions4Algarve</span>
                <div className="relative w-48 h-12">
                  <Image
                    src="/logo_novo-removebg-preview.png"
                    alt="Solutions4Algarve - Empresa de Limpeza, Renovação e Pintura no Algarve"
                    fill
                    className="object-contain"
                    priority
                  />
                </div>
              </Link>
            </div>

            {/* Mobile menu button */}
            <div className="flex lg:hidden">
              <Button
                variant="ghost"
                className="text-white hover:bg-white/10"
                onClick={() => setMobileMenuOpen(true)}
              >
                <span className="sr-only">Abrir menu principal</span>
                <Menu className="h-6 w-6" aria-hidden="true" />
              </Button>
            </div>

            {/* Desktop navigation */}
            <div className="hidden lg:flex lg:gap-x-8">
              {navigation?.map((item) => (
                <Link
                  key={item?.name || ''}
                  href={item?.href || '#'}
                  className="text-white hover:text-solutions-gold transition-colors duration-200 font-medium"
                >
                  {item?.name || ''}
                </Link>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden lg:flex lg:flex-1 lg:justify-end">
              <Link href="#contacto">
                <Button className="btn-primary">
                  <Phone className="w-4 h-4 mr-2" />
                  Pedir Orçamento
                </Button>
              </Link>
            </div>
          </div>

          {/* Mobile menu */}
          {mobileMenuOpen && (
            <div className="lg:hidden">
              <div className="fixed inset-0 z-50" />
              <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-solutions-blue px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                <div className="flex items-center justify-between">
                  <Link href="#inicio" className="-m-1.5 p-1.5">
                    <span className="sr-only">Solutions4Algarve</span>
                    <div className="relative w-40 h-10">
                      <Image
                        src="/logo_novo-removebg-preview.png"
                        alt="Solutions4Algarve - Empresa de Limpeza, Renovação e Pintura no Algarve"
                        fill
                        className="object-contain"
                      />
                    </div>
                  </Link>
                  <Button
                    variant="ghost"
                    className="text-white hover:bg-white/10"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <span className="sr-only">Fechar menu</span>
                    <X className="h-6 w-6" aria-hidden="true" />
                  </Button>
                </div>
                <div className="mt-6 flow-root">
                  <div className="-my-6 divide-y divide-white/20">
                    <div className="space-y-2 py-6">
                      {navigation?.map((item) => (
                        <Link
                          key={item?.name || ''}
                          href={item?.href || '#'}
                          className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-white/10"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {item?.name || ''}
                        </Link>
                      ))}
                    </div>
                    <div className="py-6">
                      <Link href="#contacto" onClick={() => setMobileMenuOpen(false)}>
                        <Button className="btn-primary w-full">
                          <Phone className="w-4 h-4 mr-2" />
                          Pedir Orçamento
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </nav>
      </header>
    </>
  )
}
