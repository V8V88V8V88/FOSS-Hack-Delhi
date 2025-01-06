'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Link from 'next/link'
import { ArrowRight, Calendar, MapPin, Users } from 'lucide-react'

const Section = ({ children, id }: { children: React.ReactNode; id: string }) => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.2,
  })

  return (
    <motion.section
      id={id}
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="min-h-screen flex items-center justify-center p-8 relative"
    >
      {children}
    </motion.section>
  )
}

const AnimatedTitle = ({ children }: { children: React.ReactNode }) => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.5,
  })

  return (
    <motion.h2
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="text-4xl font-bold mb-8 text-[#1a1a1a]"
    >
      {children}
    </motion.h2>
  )
}

const BlurElement = ({ className }: { className: string }) => (
  <div className={`absolute rounded-full mix-blend-multiply filter blur-3xl opacity-30 ${className}`} />
)

export default function Home() {
  return (
    <div className="bg-white text-[#1a1a1a]">
      <BlurElement className="bg-[#4AE54A] w-[500px] h-[500px] -top-40 -left-40" />
      <BlurElement className="bg-[#2563EB] w-[400px] h-[400px] top-[60%] -right-20" />
      <BlurElement className="bg-[#60A5FA] w-[600px] h-[600px] bottom-0 left-1/2 -translate-x-1/2" />

      <Section id="register">
        <div className="text-center max-w-4xl mx-auto">
          <motion.div 
            className="mb-16 space-y-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1 
              className="text-6xl sm:text-7xl font-bold text-[#1a1a1a]"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              FOSS Hack 2025
            </motion.h1>
            <motion.div 
              className="flex flex-col sm:flex-row items-center justify-center gap-4 text-lg text-gray-600"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                <span>March 15-16, 2025</span>
              </div>
              <div className="hidden sm:block">•</div>
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5" />
                <span>Delhi/NCR</span>
              </div>
            </motion.div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 bg-[#1a1a1a] text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-black transition-colors duration-200"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Register Now
              <ArrowRight className="w-5 h-5" />
            </motion.button>
          </motion.div>
        </div>
      </Section>

      <Section id="rules">
        <div className="max-w-4xl mx-auto">
          <AnimatedTitle>Hackathon Rules</AnimatedTitle>
          <motion.div 
            className="space-y-6 text-gray-600"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <p>• All code must be written during the hackathon</p>
            <p>• Teams can have 2-4 members</p>
            <p>• Projects must be open-source and use an OSI-approved license</p>
            <p>• Use of open-source libraries and frameworks is allowed</p>
            <p>• Projects must be submitted before the deadline</p>
          </motion.div>
        </div>
      </Section>

      <Section id="coc">
        <div className="max-w-4xl mx-auto">
          <AnimatedTitle>Code of Conduct</AnimatedTitle>
          <motion.div 
            className="prose prose-lg text-gray-600"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <p>We are committed to providing a harassment-free experience for everyone, regardless of:</p>
            <ul className="list-disc list-inside space-y-2">
              <li>Gender, gender identity, and expression</li>
              <li>Age, sexual orientation, disability</li>
              <li>Physical appearance, body size, race, ethnicity</li>
              <li>Religion (or lack thereof)</li>
              <li>Technology choices</li>
            </ul>
          </motion.div>
        </div>
      </Section>

      <Section id="links">
        <div className="max-w-4xl mx-auto">
          <AnimatedTitle>Important Links</AnimatedTitle>
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            {[
              { title: "Discord Community", desc: "Join our community for updates and discussions" },
              { title: "GitHub Repository", desc: "Access resources and submit your projects" },
              { title: "Schedule", desc: "View the complete event timeline" },
              { title: "Resources", desc: "Helpful tools and documentation" },
            ].map((link, index) => (
              <motion.div
                key={link.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index, duration: 0.5 }}
              >
                <Link href="#" className="p-6 rounded-xl border border-gray-200 hover:border-gray-300 transition-colors block">
                  <h3 className="text-xl font-semibold mb-2">{link.title}</h3>
                  <p className="text-gray-600">{link.desc}</p>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </Section>

      <Section id="team">
        <div className="max-w-4xl mx-auto">
          <AnimatedTitle>Organizing Team</AnimatedTitle>
          <motion.div 
            className="grid grid-cols-2 sm:grid-cols-3 gap-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <motion.div 
                key={i} 
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * i, duration: 0.5 }}
              >
                <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gray-100 flex items-center justify-center">
                  <Users className="w-8 h-8 text-gray-400" />
                </div>
                <h3 className="font-medium">Organizer {i}</h3>
                <p className="text-sm text-gray-600">Role</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </Section>

      <Section id="about">
        <div className="max-w-4xl mx-auto">
          <AnimatedTitle>About FOSS Hack</AnimatedTitle>
          <motion.div 
            className="prose prose-lg text-gray-600"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <p>
              FOSS Hack is Delhi/NCR's premier open-source hackathon, bringing together developers, 
              designers, and innovators to collaborate on meaningful projects.
            </p>
            <p>
              Our mission is to promote open-source development and provide a platform for 
              creative minds to build solutions that benefit the community.
            </p>
          </motion.div>
        </div>
      </Section>

      <motion.footer 
        className="border-t border-gray-100 py-12 px-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="max-w-4xl mx-auto text-center text-gray-600">
          <p>&copy; 2025 FOSS Hack Delhi/NCR. All rights reserved.</p>
        </div>
      </motion.footer>
    </div>
  )
}

