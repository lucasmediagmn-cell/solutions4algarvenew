
'use client'

import { MessageCircle } from 'lucide-react'
import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

export default function WhatsAppButton() {
  const [isVisible, setIsVisible] = useState(false)
  const [pulse, setPulse] = useState(true)

  useEffect(() => {
    // Show button after a short delay
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 1000)

    // Stop pulsing after 10 seconds
    const pulseTimer = setTimeout(() => {
      setPulse(false)
    }, 10000)

    return () => {
      clearTimeout(timer)
      clearTimeout(pulseTimer)
    }
  }, [])

  if (!isVisible) return null

  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="fixed bottom-6 right-6 z-50"
    >
      <a
        href="https://wa.me/351920636048?text=Ol%C3%A1%21%20Gostaria%20de%20pedir%20um%20or%C3%A7amento%20gratuito"
        target="_blank"
        rel="noopener noreferrer"
        className="group relative block"
      >
        {/* Pulsing Ring */}
        {pulse && (
          <span className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-75" />
        )}
        
        {/* Main Button */}
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="relative flex items-center justify-center w-16 h-16 bg-green-600 hover:bg-green-700 text-white rounded-full shadow-2xl hover:shadow-green-500/50 transition-all duration-300"
        >
          <MessageCircle className="w-8 h-8" />
          
          {/* Notification Badge */}
          <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-xs font-bold rounded-full flex items-center justify-center border-2 border-white">
            1
          </span>
        </motion.div>

        {/* Tooltip */}
        <div className="absolute right-full top-1/2 -translate-y-1/2 mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
          <div className="bg-gray-900 text-white text-sm font-medium px-4 py-2 rounded-lg whitespace-nowrap shadow-xl">
            Fale connosco no WhatsApp
            <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 rotate-45 w-2 h-2 bg-gray-900" />
          </div>
        </div>
      </a>
    </motion.div>
  )
}
