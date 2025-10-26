
'use client'

import { useState } from 'react'
import Image from 'next/image'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Button } from '@/components/ui/button'

const galleryItems = [
  {
    id: 1,
    image: '/casa de banho 1.jpg.webp',
    title: 'Remodelação Casa de Banho Moderna',
    category: 'Casas de Banho',
    description: 'Transformação completa com acabamentos contemporâneos'
  },
  {
    id: 2,
    image: '/casa de banho 2.jpg',
    title: 'Casa de Banho Clássica',
    category: 'Casas de Banho',
    description: 'Renovação elegante com estilo clássico'
  },
  {
    id: 3,
    image: '/casa de banho 3.jpg.webp',
    title: 'Casa de Banho Minimalista',
    category: 'Casas de Banho',
    description: 'Design clean e funcional'
  },
  {
    id: 4,
    image: '/pintura exterior casa.jpg',
    title: 'Pintura Exterior Residencial',
    category: 'Pintura',
    description: 'Renovação completa da fachada'
  },
  {
    id: 5,
    image: '/empresa pintura.jpg',
    title: 'Projeto de Pintura Interior',
    category: 'Pintura',
    description: 'Acabamentos profissionais de alta qualidade'
  },
  {
    id: 6,
    image: '/limpeza pos obra.jpg.webp',
    title: 'Limpeza Pós-Obra Completa',
    category: 'Limpeza',
    description: 'Limpeza profissional após renovação'
  }
]

export default function GallerySection() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)
  const [selectedCategory, setSelectedCategory] = useState('Todos')
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const categories = ['Todos', 'Casas de Banho', 'Pintura', 'Limpeza']

  const filteredItems = selectedCategory === 'Todos'
    ? galleryItems
    : galleryItems?.filter(item => item?.category === selectedCategory)

  const openLightbox = (id: number) => {
    setSelectedImage(id)
  }

  const closeLightbox = () => {
    setSelectedImage(null)
  }

  const navigateImage = (direction: 'prev' | 'next') => {
    if (selectedImage === null) return
    
    const currentIndex = filteredItems?.findIndex(item => item?.id === selectedImage) || 0
    let newIndex
    
    if (direction === 'next') {
      newIndex = currentIndex + 1 >= (filteredItems?.length || 0) ? 0 : currentIndex + 1
    } else {
      newIndex = currentIndex - 1 < 0 ? (filteredItems?.length || 0) - 1 : currentIndex - 1
    }
    
    setSelectedImage(filteredItems?.[newIndex]?.id || null)
  }

  const selectedItem = galleryItems?.find(item => item?.id === selectedImage)

  return (
    <section id="galeria" className="bg-solutions-gray-light section-padding">
      <div className="container-width">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-solutions-blue mb-4">
            Galeria de Projetos
          </h2>
          <p className="text-xl text-solutions-gray-dark max-w-3xl mx-auto mb-8">
            Veja alguns dos nossos trabalhos realizados. Cada projeto é único e 
            executado com o máximo cuidado e atenção aos detalhes.
          </p>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3">
            {categories?.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                className={`${
                  selectedCategory === category
                    ? 'bg-solutions-blue text-white'
                    : 'border-solutions-blue text-solutions-blue hover:bg-solutions-blue hover:text-white'
                } transition-all duration-200`}
                onClick={() => setSelectedCategory(category || '')}
              >
                {category}
              </Button>
            ))}
          </div>
        </motion.div>

        {/* Gallery Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="wait">
            {filteredItems?.map((item, index) => (
              <motion.div
                key={item?.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="group cursor-pointer"
                onClick={() => openLightbox(item?.id || 0)}
              >
                <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-lg hover-lift">
                  <Image
                    src={item?.image || ''}
                    alt={item?.title || ''}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-lg font-bold mb-2">{item?.title}</h3>
                    <p className="text-sm opacity-90">{item?.description}</p>
                  </div>

                  {/* Category Badge */}
                  <div className="absolute top-4 left-4 bg-solutions-gold text-white text-xs font-semibold px-3 py-1 rounded-full">
                    {item?.category}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Lightbox */}
        <AnimatePresence>
          {selectedImage !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
              onClick={closeLightbox}
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                className="relative max-w-4xl max-h-full"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Close Button */}
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute -top-12 right-0 text-white hover:bg-white/20 z-10"
                  onClick={closeLightbox}
                >
                  <X className="w-6 h-6" />
                </Button>

                {/* Navigation Buttons */}
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:bg-white/20 z-10"
                  onClick={() => navigateImage('prev')}
                >
                  <ChevronLeft className="w-8 h-8" />
                </Button>

                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:bg-white/20 z-10"
                  onClick={() => navigateImage('next')}
                >
                  <ChevronRight className="w-8 h-8" />
                </Button>

                {/* Image */}
                <div className="relative aspect-[4/3] max-h-[80vh] rounded-lg overflow-hidden">
                  <Image
                    src={selectedItem?.image || ''}
                    alt={selectedItem?.title || ''}
                    fill
                    className="object-contain"
                    sizes="90vw"
                  />
                </div>

                {/* Image Info */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent text-white p-6 rounded-b-lg">
                  <h3 className="text-xl font-bold mb-2">{selectedItem?.title}</h3>
                  <p className="text-solutions-gold font-medium mb-1">{selectedItem?.category}</p>
                  <p className="opacity-90">{selectedItem?.description}</p>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
