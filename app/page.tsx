'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Link from 'next/link'
import { ArrowRight, Calendar, MapPin, Users } from 'lucide-react'

const BlurElement = ({ className }: { className: string }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 2 }}
    className={`absolute rounded-full mix-blend-multiply filter blur-3xl ${className}`}
  />
)

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
      transition={{ duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] }}
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
      transition={{ duration: 1, ease: [0.6, -0.05, 0.01, 0.99] }}
      className="text-5xl font-bold mb-12 text-[#1a1a1a]"
    >
      {children}
    </motion.h2>
  )
}

export default function Home() {
  return (
    <div className="bg-white text-[#1a1a1a] text-lg relative overflow-hidden">
      {/* Subtle tri-color blur elements with reduced opacity */}
      <BlurElement className="bg-[#4AE54A] w-[800px] h-[800px] -top-[400px] -left-[300px] opacity-[0.04]" />
      <BlurElement className="bg-[#2563EB] w-[600px] h-[600px] top-[30%] -right-[200px] opacity-[0.04]" />
      <BlurElement className="bg-[#60A5FA] w-[700px] h-[700px] bottom-0 left-1/2 -translate-x-1/2 opacity-[0.04]" />
      
      {/* Additional ambient blur elements with reduced opacity */}
      <BlurElement className="bg-[#4AE54A] w-[400px] h-[400px] top-[60%] left-[10%] opacity-[0.03]" />
      <BlurElement className="bg-[#60A5FA] w-[300px] h-[300px] top-[20%] left-[50%] opacity-[0.03]" />
      <BlurElement className="bg-[#2563EB] w-[500px] h-[500px] bottom-[10%] right-[5%] opacity-[0.03]" />

      <Section id="register">
        <div className="text-center max-w-5xl mx-auto relative z-10">
          <motion.div 
            className="mb-20 space-y-8"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.6, -0.05, 0.01, 0.99] }}
          >
            <motion.h1 
              className="text-7xl sm:text-8xl font-bold text-[#1a1a1a]"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, ease: [0.6, -0.05, 0.01, 0.99] }}
            >
              FOSS Hack 2025
            </motion.h1>
            <motion.div 
              className="flex flex-col sm:flex-row items-center justify-center gap-6 text-xl text-[#1a1a1a]/70"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 1 }}
            >
              <div className="flex items-center gap-3">
                <Calendar className="w-6 h-6 text-[#1a1a1a]" />
                <span>March 15-16, 2025</span>
              </div>
              <div className="hidden sm:block text-2xl">•</div>
              <div className="flex items-center gap-3">
                <MapPin className="w-6 h-6 text-[#1a1a1a]" />
                <span>Delhi/NCR</span>
              </div>
            </motion.div>
            <Link 
              href="https://fossunited.org/dashboard/register-for-hackathon?id=o312an73dc"
              className="inline-flex items-center gap-3 bg-[#1a1a1a] text-white px-10 py-5 rounded-full text-xl font-medium hover:bg-black transition-colors duration-300"
            >
              Register Now
              <ArrowRight className="w-6 h-6" />
            </Link>
          </motion.div>
        </div>
      </Section>

      <Section id="rules">
        <div className="max-w-5xl mx-auto relative z-10">
          <AnimatedTitle>Hackathon Rules</AnimatedTitle>
          <motion.div 
            className="space-y-8 text-xl text-[#1a1a1a]/70"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 1, ease: [0.6, -0.05, 0.01, 0.99] }}
          >
            {[
              "All code must be written during the hackathon",
              "Teams can have 2-4 members",
              "Projects must be open-source and use an OSI-approved license",
              "Use of open-source libraries and frameworks is allowed",
              "Projects must be submitted before the deadline"
            ].map((rule, index) => (
              <motion.p
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 * index, duration: 0.8 }}
                className="flex items-center gap-3"
              >
                <span className="text-[#1a1a1a]">•</span> {rule}
              </motion.p>
            ))}
          </motion.div>
        </div>
      </Section>

      <Section id="coc">
        <div className="max-w-5xl mx-auto relative z-10">
          <AnimatedTitle>Code of Conduct</AnimatedTitle>
          <motion.div 
            className="prose prose-xl text-[#1a1a1a]/70"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 1, ease: [0.6, -0.05, 0.01, 0.99] }}
          >
            <p className="text-xl">We are committed to providing a harassment-free experience for everyone, regardless of:</p>
            <ul className="list-none space-y-4 text-xl">
              {[
                "Gender, gender identity, and expression",
                "Age, sexual orientation, disability",
                "Physical appearance, body size, race, ethnicity",
                "Religion (or lack thereof)",
                "Technology choices"
              ].map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 * index, duration: 0.8 }}
                  className="flex items-center gap-3"
                >
                  <span className="text-[#1a1a1a]">•</span> {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </Section>

      <Section id="links">
        <div className="max-w-5xl mx-auto relative z-10">
          <AnimatedTitle>Important Links</AnimatedTitle>
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 gap-8"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 1, ease: [0.6, -0.05, 0.01, 0.99] }}
          >
            {[
              { 
                title: "Discord Community", 
                desc: "Join our community for updates and discussions",
                url: "https://discord.gg/Dxwx99RJKH"
              },
              { 
                title: "GitHub", 
                desc: "Access our code repositories",
                url: "https://github.com/thefossclub"
              },
              { 
                title: "Telegram", 
                desc: "Join our Telegram group",
                url: "https://t.me/TheFOSSClub"
              },
            ].map((link, index) => (
              <motion.div
                key={link.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index, duration: 0.8 }}
              >
                <Link 
                  href={link.url}
                  className="p-8 rounded-xl border-2 border-[#1a1a1a]/10 hover:border-[#1a1a1a]/20 transition-colors block group bg-white/50"
                >
                  <h3 className="text-2xl font-semibold mb-3 text-[#1a1a1a] group-hover:text-[#1a1a1a] transition-colors">
                    {link.title}
                  </h3>
                  <p className="text-xl text-[#1a1a1a]/70">{link.desc}</p>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </Section>

      <Section id="team">
        <div className="max-w-6xl mx-auto relative z-10">
          <AnimatedTitle>Organizing Team</AnimatedTitle>
          <motion.div 
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 1, ease: [0.6, -0.05, 0.01, 0.99] }}
          >
            {[
              "Aruli", "Ashwany", "Diksha", "Diti",
              "Eirtty", "Gautam", "Harshvardhan", "Jayesh",
              "Nishchal", "Riyansh", "Sachin", "Satyam",
              "Shreshth", "Srijan", "Suryansh", "Tiya",
              "Vanya", "Vinay", "Lovish"
            ].map((name, i) => (
              <motion.div 
                key={i} 
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * i, duration: 0.8 }}
              >
                <motion.div 
                  className="w-24 h-24 sm:w-28 sm:h-28 mx-auto mb-4 rounded-full bg-[#1a1a1a]/5 flex items-center justify-center"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <Users className="w-10 h-10 text-[#1a1a1a]" />
                </motion.div>
                <h3 className="text-xl sm:text-2xl font-medium mb-1 text-[#1a1a1a]">{name}</h3>
                <p className="text-base sm:text-lg text-[#1a1a1a]/60">Organizer</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </Section>

      <Section id="about">
        <div className="max-w-5xl mx-auto relative z-10">
          <AnimatedTitle>About FOSS Hack</AnimatedTitle>
          <motion.div 
            className="prose prose-xl text-[#1a1a1a]/70"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 1, ease: [0.6, -0.05, 0.01, 0.99] }}
          >
            <p className="text-2xl leading-relaxed">
              FOSS Hack is Delhi/NCR's premier open-source hackathon, bringing together developers, 
              designers, and innovators to collaborate on meaningful projects.
            </p>
            <p className="text-2xl leading-relaxed">
              Our mission is to promote open-source development and provide a platform for 
              creative minds to build solutions that benefit the community.
            </p>
          </motion.div>
        </div>
      </Section>

      <motion.footer 
        className="border-t border-[#1a1a1a]/10 py-16 px-8 relative z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        <div className="max-w-5xl mx-auto text-center text-[#1a1a1a]/70">
          <p className="text-xl">&copy; 2025 FOSS Hack Delhi/NCR. All rights reserved.</p>
        </div>
      </motion.footer>
    </div>
  )
}

