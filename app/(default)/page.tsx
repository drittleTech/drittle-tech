export const metadata = {
  title: 'Drittle tech',
  description: 'Landing page',
}

import Hero from '@/components/hero'
import Features from '@/components/features'
import Services from '@/components/services'
import Projects from '@/components/projects'
import ContactusBanner from '@/components/contactusBanner'

export default function Home() {
  return (
    <>
      <Hero />
      <Projects />
      <Services/>
      <Features />
      <ContactusBanner />
    </>
  )
}

