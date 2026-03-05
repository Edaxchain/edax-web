import React from 'react'
import Hero from '@/app/components/Hero'
import Roadmap from './components/Roadmap'

export default function LandingPage() {
  return (
   
   <main className="flex min-h-screen flex-col">
      <Hero />
      
      {/* วาง Roadmap ต่อจาก Hero ได้เลย */}
      <Roadmap />
      
      {/* ส่วนอื่นๆ เช่น Products หรือ Support ที่คุณทำไว้ */}
    </main>
  )
}