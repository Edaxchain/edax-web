import React from 'react'
import Hero from '@/app/pages/main/Hero'
import Roadmap from '@/app/pages/main/Roadmap'
import Partners from '@/app/pages/about/Partners'

export default function LandingPage() {
  return (
   
   <main className="flex min-h-screen flex-col py-12">
      <Hero />
      
      
      <Roadmap />
      
      <Partners />
    </main>
  )
}
