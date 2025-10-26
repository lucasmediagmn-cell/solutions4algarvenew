
'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Mail, MapPin, Clock, Send, CheckCircle, Phone, MessageSquare } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { useToast } from '@/hooks/use-toast'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

interface FormData {
  name: string
  email: string
  phone: string
  service: string
  message: string
}

const services = [
  'Limpeza Pós-Obra',
  'Pintura Interior',
  'Pintura Exterior',
  'Remodelação de Cozinha',
  'Remodelação de Casa de Banho',
  'Obras Económicas',
  'Outro (especificar na mensagem)'
]

const contactInfo = [
  {
    icon: Mail,
    title: 'Email',
    value: 'contacto@solutions4algarve.pt',
    link: 'mailto:contacto@solutions4algarve.pt',
    color: 'text-blue-600',
    bgColor: 'bg-blue-50'
  },
  {
    icon: MapPin,
    title: 'Localização',
    value: 'Algarve, Portugal',
    color: 'text-red-600',
    bgColor: 'bg-red-50'
  },
  {
    icon: Clock,
    title: 'Horário',
    value: 'Segunda-Sexta: 8h-18h',
    color: 'text-purple-600',
    bgColor: 'bg-purple-50'
  }
]

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const { toast } = useToast()
  
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
    watch
  } = useForm<FormData>()

  const selectedService = watch('service')

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true)
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      if (response.ok) {
        setIsSubmitted(true)
        reset()
        toast({
          title: "Mensagem enviada com sucesso!",
          description: "Entraremos em contacto consigo em breve.",
        })
        
        setTimeout(() => setIsSubmitted(false), 5000)
      } else {
        throw new Error('Erro ao enviar mensagem')
      }
    } catch (error) {
      toast({
        title: "Erro ao enviar mensagem",
        description: "Tente novamente ou contacte-nos diretamente.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contacto" className="bg-gradient-to-b from-slate-50 to-white section-padding">
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
            Entre em Contacto
          </h2>
          <p className="text-xl text-solutions-gray-dark max-w-3xl mx-auto leading-relaxed">
            Envie-nos uma mensagem por email e responderemos em até 24 horas. 
            Para contacto imediato, use o WhatsApp!
          </p>
        </motion.div>

        {/* Quick Contact Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
        >
          <a 
            href="https://wa.me/351920636048?text=Olá!%20Gostaria%20de%20falar%20convosco."
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button size="lg" className="w-full sm:w-auto bg-green-600 hover:bg-green-700 text-white font-bold text-lg px-10 py-7 rounded-xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
              <MessageSquare className="w-6 h-6 mr-3" />
              WhatsApp (Resposta Imediata)
            </Button>
          </a>
          
          <a href="tel:+351920636048">
            <Button size="lg" variant="outline" className="w-full sm:w-auto border-2 border-solutions-blue text-solutions-blue hover:bg-solutions-blue hover:text-white font-semibold text-lg px-10 py-7 rounded-xl transition-all duration-300">
              <Phone className="w-5 h-5 mr-2" />
              Ligar: 920 636 048
            </Button>
          </a>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-white rounded-3xl p-8 md:p-10 shadow-xl border border-gray-100"
          >
            <div className="mb-8">
              <h3 className="text-3xl font-bold text-solutions-blue mb-2">
                Envie-nos um Email
              </h3>
              <p className="text-solutions-gray-dark">
                Preencha o formulário abaixo e responderemos brevemente
              </p>
            </div>

            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12 space-y-4"
              >
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle className="w-10 h-10 text-green-600" />
                </div>
                <h4 className="text-2xl font-bold text-solutions-blue">
                  Email Enviado com Sucesso!
                </h4>
                <p className="text-solutions-gray-dark text-lg">
                  Obrigado pelo seu contacto. Responderemos em breve.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-solutions-blue mb-2">
                      Nome Completo *
                    </label>
                    <Input
                      id="name"
                      {...register('name', { required: 'Nome é obrigatório' })}
                      className={`h-12 ${errors?.name ? 'border-red-500' : 'border-gray-300'}`}
                      placeholder="O seu nome"
                    />
                    {errors?.name && (
                      <p className="text-red-500 text-sm mt-1">{errors?.name?.message}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-solutions-blue mb-2">
                      Telefone
                    </label>
                    <Input
                      id="phone"
                      type="tel"
                      {...register('phone')}
                      className="h-12 border-gray-300"
                      placeholder="+351 XXX XXX XXX"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-solutions-blue mb-2">
                    Email *
                  </label>
                  <Input
                    id="email"
                    type="email"
                    {...register('email', { 
                      required: 'Email é obrigatório',
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: 'Email inválido'
                      }
                    })}
                    className={`h-12 ${errors?.email ? 'border-red-500' : 'border-gray-300'}`}
                    placeholder="seuemail@exemplo.com"
                  />
                  {errors?.email && (
                    <p className="text-red-500 text-sm mt-1">{errors?.email?.message}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-semibold text-solutions-blue mb-2">
                    Tipo de Serviço
                  </label>
                  <Select onValueChange={(value) => setValue('service', value)} value={selectedService}>
                    <SelectTrigger className="h-12 border-gray-300">
                      <SelectValue placeholder="Seleccione um serviço" />
                    </SelectTrigger>
                    <SelectContent>
                      {services?.map((service) => (
                        <SelectItem key={service} value={service || ''}>
                          {service}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-solutions-blue mb-2">
                    Mensagem *
                  </label>
                  <Textarea
                    id="message"
                    {...register('message', { required: 'Mensagem é obrigatória' })}
                    className={`min-h-[140px] ${errors?.message ? 'border-red-500' : 'border-gray-300'}`}
                    placeholder="Descreva o seu projeto e necessidades..."
                  />
                  {errors?.message && (
                    <p className="text-red-500 text-sm mt-1">{errors?.message?.message}</p>
                  )}
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-primary w-full text-lg py-7 rounded-xl"
                >
                  {isSubmitting ? (
                    <div className="flex items-center space-x-2">
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white" />
                      <span>Enviando...</span>
                    </div>
                  ) : (
                    <>
                      <Send className="w-5 h-5 mr-2" />
                      Enviar Mensagem por Email
                    </>
                  )}
                </Button>

                <p className="text-sm text-gray-500 text-center">
                  * Campos obrigatórios. Responderemos em até 24 horas.
                </p>
              </form>
            )}
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-3xl font-bold text-solutions-blue mb-6">
                Informações de Contacto
              </h3>
              <div className="space-y-4">
                {contactInfo?.map((info, index) => {
                  const IconComponent = info?.icon
                  
                  return (
                    <div key={index} className={`flex items-center space-x-4 p-6 ${info?.bgColor || ''} rounded-2xl hover-lift transition-all duration-300`}>
                      <div className={`p-4 rounded-xl bg-white shadow-md ${info?.color || ''}`}>
                        <IconComponent className="w-6 h-6" />
                      </div>
                      <div className="flex-1">
                        <div className="font-bold text-solutions-blue text-lg">
                          {info?.title}
                        </div>
                        {info?.link ? (
                          <a 
                            href={info?.link}
                            className="text-solutions-gray-dark hover:text-solutions-gold transition-colors duration-200 font-medium"
                          >
                            {info?.value}
                          </a>
                        ) : (
                          <div className="text-solutions-gray-dark font-medium">
                            {info?.value}
                          </div>
                        )}
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>

            {/* WhatsApp Card */}
            <div className="bg-gradient-to-br from-green-600 to-green-700 rounded-3xl p-8 text-white shadow-xl">
              <MessageSquare className="w-12 h-12 mb-4" />
              <h4 className="text-2xl font-bold mb-3">
                Precisa de Resposta Imediata?
              </h4>
              <p className="text-green-100 mb-6 leading-relaxed">
                Fale connosco agora pelo WhatsApp e obtenha resposta em minutos!
              </p>
              <a 
                href="https://wa.me/351920636048?text=Olá!%20Preciso%20de%20ajuda%20urgente."
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button 
                  size="lg" 
                  className="w-full bg-white text-green-600 hover:bg-green-50 font-bold text-lg py-6 rounded-xl shadow-lg"
                >
                  <MessageSquare className="w-5 h-5 mr-2" />
                  Abrir WhatsApp
                </Button>
              </a>
            </div>

            {/* Trust Section */}
            <div className="bg-gradient-to-br from-solutions-blue to-blue-600 rounded-3xl p-8 text-white">
              <h4 className="text-2xl font-bold mb-4">
                Por Que Nos Escolher?
              </h4>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 flex-shrink-0" />
                  <span>Resposta em até 24 horas</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 flex-shrink-0" />
                  <span>Orçamento 100% gratuito</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 flex-shrink-0" />
                  <span>Profissionais experientes</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 flex-shrink-0" />
                  <span>Materiais de qualidade</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 flex-shrink-0" />
                  <span>Satisfação garantida</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
