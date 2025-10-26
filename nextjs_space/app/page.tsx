
import Header from '@/components/header'
import HeroSection from '@/components/hero-section'
import FeatureBadges from '@/components/feature-badges'
import AboutSection from '@/components/about-section'
import ServicesPresentation from '@/components/services-presentation'
import ServicesGrid from '@/components/services-grid'
import GallerySection from '@/components/gallery-section'
import BenefitsSection from '@/components/benefits-section'
import CTASection from '@/components/cta-section'
import ContactForm from '@/components/contact-form'
import Footer from '@/components/footer'
import WhatsAppButton from '@/components/whatsapp-button'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <FeatureBadges />
      <AboutSection />
      <ServicesPresentation />
      <ServicesGrid />
      <GallerySection />
      <BenefitsSection />
      <CTASection />
      <ContactForm />
      <Footer />
      <WhatsAppButton />
    </main>
  )
}
