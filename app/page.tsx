"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import Link from "next/link"
import { ArrowRight, Calendar, MapPin, Users } from "lucide-react"
import { Suspense } from "react"
import dynamic from "next/dynamic"
import Image from "next/image"
import { LocalhostSection } from "@/components/localhost-section"
import { CountdownTimer } from "@/components/countdown-timer"
import type React from "react" // Import React

const DynamicGeometricShapes = dynamic(
  () => import("@/components/geometric-shapes").then((mod) => mod.GeometricShapes),
  {
    ssr: false,
  },
)

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

interface Sponsor {
  name: string;
  logo: string;
}

const SponsorTier = ({
  title,
  sponsors,
  bgColor,
}: {
  title: string;
  sponsors: Sponsor[];
  bgColor: string;
}) => (
  <div className={`${bgColor} rounded-xl p-6 mb-8`}>
    <h3 className="text-2xl font-semibold mb-4 text-[#1a1a1a]">{title} Sponsors</h3>
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
      {sponsors.map((sponsor, index) => (
        <motion.div
          key={index}
          className="bg-white/80 p-4 rounded-xl flex items-center justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 * index, duration: 0.8 }}
        >
          <Image
            src={sponsor.logo}
            width={160}
            height={80}
            alt={`${title} Sponsor ${sponsor.name}`}
            className="max-w-full h-auto"
          />
        </motion.div>
      ))}
    </div>
  </div>
)

export default function Home() {
  return (
    <div className="bg-white text-[#1a1a1a] text-lg relative overflow-hidden">
      {/* Blur elements with updated colors */}
      <BlurElement className="bg-[#4AE54A]/40 w-[800px] h-[800px] -top-[400px] -left-[300px] opacity-[0.15]" />
      <BlurElement className="bg-[#60A5FA]/40 w-[600px] h-[600px] top-[30%] -right-[200px] opacity-[0.15]" />
      <BlurElement className="bg-[#4AE54A]/40 w-[700px] h-[700px] bottom-0 left-1/2 -translate-x-1/2 opacity-[0.15]" />

      {/* Geometric shapes */}
      <Suspense fallback={<div>Loading...</div>}>
        <DynamicGeometricShapes />
      </Suspense>

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
              className="flex flex-col sm:flex-row items-center justify-center gap-6 text-xl text-[#1a1a1a]/60"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 1 }}
            >
              <div className="flex items-center gap-3">
                <Calendar className="w-6 h-6 text-[#1a1a1a]" />
                <span>February 22-23, 2025</span>
              </div>
              <div className="hidden sm:block text-2xl">•</div>
              <div className="flex items-center gap-3">
                <MapPin className="w-6 h-6 text-[#1a1a1a]" />
                <span>
                  <a href="https://maps.app.goo.gl/fi57g51gy84YohzP8">Delhi Technical Campus</a>
                </span>
              </div>
            </motion.div>
            <Link
              href="https://fossunited.org/hack/fosshack25/host/delhi"
              className="inline-flex items-center gap-3 bg-[#1a1a1a] text-white px-10 py-5 rounded-full text-xl font-medium hover:bg-black transition-colors duration-300"
            >
              Register Now
              <ArrowRight className="w-6 h-6" />
            </Link>
            <div className="mt-12 max-w-4xl mx-auto w-full">
              <CountdownTimer />
            </div>
          </motion.div>
        </div>
      </Section>

      {/* Add after the register Section and before rules Section */}
      <Section id="venue">
        <LocalhostSection />
      </Section>

      <Section id="rules">
        <div className="max-w-5xl mx-auto relative z-10">
          <AnimatedTitle>Hackathon Rules & Regulations</AnimatedTitle>
          <motion.div
            className="space-y-8 text-xl text-[#1a1a1a]/60"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 1, ease: [0.6, -0.05, 0.01, 0.99] }}
          >
            {[
              "All code must be written during the hackathon",
              "Teams can have 2-4 members",
              "Projects must be open-source and use an OSI-approved license",
              "Use of open-source libraries and frameworks is allowed",
              "Projects must be submitted before the deadline",
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
            className="prose prose-xl text-[#1a1a1a]/60"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 1, ease: [0.6, -0.05, 0.01, 0.99] }}
          >
            <p className="text-xl">
              We are committed to providing a harassment-free experience for everyone, regardless of:
            </p>
            <ul className="list-none space-y-4 text-xl">
              {[
                "Gender, gender identity, and expression",
                "Age, sexual orientation, disability",
                "Physical appearance, body size, race, ethnicity",
                "Religion (or lack thereof)",
                "Technology choices",
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
      <p className="text-xl mt-6 font-semibold">
        Reporting Code of Conduct Violations
      </p>
      <p className="text-xl">
        If you are being harassed, notice that someone else is being harassed, or come across a violation of the code of conduct, please contact a volunteer/organiser immediately. Participants can call <b>8979843626</b> or email <a href="mailto:fossclub@proton.me" className="underline">fossclub@proton.me</a> for any reports or queries. All reporters will remain anonymous.
      </p>
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
                title: "Discord Server",
                desc: "Join our community for discussions",
                url: "https://discord.gg/Dxwx99RJKH",
              },
              {
                title: "Telegram Group",
                desc: "Join our telegram group",
                url: "https://t.me/TheFOSSClub",
              },
              {
                title: "WhatsApp Group",
                desc: "Access our whatsApp group",
                url: "https://chat.whatsapp.com/JSGCKlaB4YSDJkEDg6ImSL",
              },
              {
                title: "LinkTree",
                desc: "Access all our links",
                url: "https://linktr.ee/thefossclub",
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

      <Section id="sponsors">
  <div className="max-w-5xl mx-auto relative z-10">
    <AnimatedTitle>Our Sponsors</AnimatedTitle>
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2, duration: 1, ease: [0.6, -0.05, 0.01, 0.99] }}
    >
      {/* Platinum Tier (Empty) */}
      <SponsorTier title="Platinum" sponsors={[]} bgColor="bg-[#8B5CF6]/20" />

      {/* Gold Tier (The Linux Foundation Only) */}
      <SponsorTier
        title="Gold"
        sponsors={[
          {
            name: "The Linux Foundation",
            logo: "/linux.png",
          },
        ]}
        bgColor="bg-[#F59E0B]/20"
      />

      {/* Silver Tier (Empty) */}
      <SponsorTier title="Silver" sponsors={[]} bgColor="bg-[#9CA3AF]/20" />
    </motion.div>
  </div>
</Section>



      <Section id="team">
        <div className="max-w-6xl mx-auto relative z-10">
          <AnimatedTitle>Team</AnimatedTitle>
          <motion.div
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 1, ease: [0.6, -0.05, 0.01, 0.99] }}
          >
            {[
              { name: "Vaibhav", title: "Lead Organizer" },
              { name: "Vaibhav", title: "Graphics Head" },
              { name: "Ashwany", title: "Media Head" },
              { name: "Vanya", title: "Social Media Head" },
              { name: "Nishchal", title: "Decoration Head" },
              { name: "Sachin", title: "Community Partners Head" },
              { name: "Riyansh", title: "Campus Ambassador Head" },
              { name: "Sanjam", title: "Content Wriiting" },
              { name: "Diti", title: "Auditorium Work" },
              { name: "Vaibhav", title: "Logistics Work" },
              { name: "Suryansh", title: "Event Handeling" },
              { name: "Satyam", title: "Tasks Master" },
              { name: "Nishchal", title: "Mess Handeling" },
              { name: "Shresth", title: "Discpline" },
              { name: "Jayesh", title: "Registration Desk" },
            ].map((member, i) => (
              <motion.div
                key={i}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * i, duration: 0.8 }}
              >
                <motion.div
                  className="w-20 h-20 sm:w-24 sm:h-24 mx-auto mb-4 rounded-full bg-[#1a1a1a]/5 flex items-center justify-center"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <Users className="w-8 h-8 sm:w-10 sm:h-10 text-[#1a1a1a]" />
                </motion.div>
                <h3 className="text-lg sm:text-xl font-medium mb-1 text-[#1a1a1a]">{member.name}</h3>
                <p className="text-sm text-[#1a1a1a]/60">{member.title}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </Section>

      <Section id="about">
        <div className="max-w-5xl mx-auto relative z-10">
          <AnimatedTitle>About FOSS Hack</AnimatedTitle>
          <motion.div
            className="prose prose-xl text-[#1a1a1a]/60"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 1, ease: [0.6, -0.05, 0.01, 0.99] }}
          >
            <p className="text-2xl leading-relaxed">
              FOSS Hack is Delhi-NCR's premier open-source hackathon, bringing together developers, designers, and
              innovators to collaborate on meaningful projects.
            </p>
            <p className="text-2xl leading-relaxed">
              Our mission is to promote open-source development and provide a platform for creative minds to build
              solutions that benefit the community.
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
          <p className="text-xl">&copy; 2025 FOSS Hack Delhi-NCR. All rights reserved.</p>
        </div>
      </motion.footer>
    </div>
  )
}

