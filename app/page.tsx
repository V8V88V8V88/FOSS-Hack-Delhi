'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Link from 'next/link'

const Section = ({ children, id }: { children: React.ReactNode; id: string }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <motion.section
      id={id}
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen flex items-center justify-center p-8"
    >
      {children}
    </motion.section>
  )
}

const BlurElement = ({ className }: { className: string }) => (
  <div className={`absolute rounded-full mix-blend-multiply filter blur-xl opacity-70 ${className}`} />
)

export default function Home() {
  return (
    <div className="bg-white text-gray-800">
      <BlurElement className="bg-blue-300 w-72 h-72 top-20 -left-20" />
      <BlurElement className="bg-purple-300 w-96 h-96 top-40 -right-20" />
      <BlurElement className="bg-pink-300 w-64 h-64 bottom-20 left-20" />

      <Section id="register">
        <div className="text-center">
          <h1 className="text-6xl font-bold mb-8">FOSS Hack 2025 Delhi/NCR</h1>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gray-800 text-white px-8 py-3 rounded-full text-xl font-semibold hover:bg-gray-700 transition-colors"
          >
            Register Now
          </motion.button>
        </div>
      </Section>

      <Section id="rules">
        <h2 className="text-4xl font-bold mb-4">Rules</h2>
        <p className="text-xl">Participate fairly and ethically in our open-source hackathon.</p>
      </Section>

      <Section id="coc">
        <h2 className="text-4xl font-bold mb-4">Code of Conduct</h2>
        <p className="text-xl">Respect, inclusivity, and collaboration are our core values.</p>
      </Section>

      <Section id="links">
        <h2 className="text-4xl font-bold mb-4">Important Links</h2>
        <div className="flex space-x-4">
          <Link href="#" className="text-blue-600 hover:underline">GitHub</Link>
          <Link href="#" className="text-blue-600 hover:underline">Discord</Link>
          <Link href="#" className="text-blue-600 hover:underline">Schedule</Link>
        </div>
      </Section>

      <Section id="team">
        <h2 className="text-4xl font-bold mb-4">Our Team</h2>
        <p className="text-xl">Meet the passionate organizers behind FOSS Hack 2025.</p>
      </Section>

      <Section id="about">
        <h2 className="text-4xl font-bold mb-4">About FOSS Hack</h2>
        <p className="text-xl">Empowering innovation through open-source collaboration.</p>
      </Section>

      <footer className="bg-gray-100 text-center py-8">
        <p>&copy; 2025 FOSS Hack Delhi/NCR. All rights reserved.</p>
      </footer>
    </div>
  )
}
