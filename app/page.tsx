"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Link from "next/link";
import { ArrowRight, Calendar, MapPin, Users } from "lucide-react";
import { Suspense } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import { LocalhostSection } from "@/components/localhost-section";
import { CountdownTimer } from "@/components/countdown-timer";

const DynamicGeometricShapes = dynamic(
  () =>
    import("@/components/geometric-shapes").then((mod) => mod.GeometricShapes),
  {
    ssr: false,
  },
);

const BlurElement = ({ className }: { className: string }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 2 }}
    className={`absolute rounded-full mix-blend-multiply filter blur-3xl ${className}`}
  />
);

const Section = ({
  children,
  id,
}: {
  children: React.ReactNode;
  id: string;
}) => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });

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
  );
};

const AnimatedTitle = ({ children }: { children: React.ReactNode }) => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.5,
  });

  return (
    <motion.h2
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 1, ease: [0.6, -0.05, 0.01, 0.99] }}
      className="text-5xl font-bold mb-12 text-foreground"
    >
      {children}
    </motion.h2>
  );
};

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
    <h3 className="text-2xl font-semibold mb-4 text-foreground">
      {title} Sponsors
    </h3>
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
      {sponsors.map((sponsor, index) => (
        <motion.div
          key={index}
          className="bg-background/80 p-4 rounded-xl flex items-center justify-center"
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
);
const WhySponsorUs = () => (
  <div className="space-y-8 text-foreground/90 text-lg md:text-xl leading-relaxed max-w-4xl mx-auto">
    <p className="text-2xl font-medium text-center mb-10">
      Sponsoring{" "}
      <span className="text-[var(--accent-green)]">FOSS Hack 2026</span> is a
      unique opportunity to align your brand with innovation, creativity, and
      impactful problem-solving.
    </p>

    <div className="grid md:grid-cols-2 gap-8">
      <div className="glass p-6 rounded-2xl border border-[var(--accent-green)]/20 hover:border-[var(--accent-green)]/40 transition-all duration-300">
        <h4 className="text-xl font-semibold mb-3 cyan">
          1. Enhanced Brand Exposure
        </h4>
        <p>
          Gain strong visibility among a focused audience of students,
          developers, professionals, and industry leaders through on-site
          engagement and massive digital reach.
        </p>
      </div>

      <div className="glass p-6 rounded-2xl border border-[var(--accent-purple)]/20 hover:border-[var(--accent-purple)]/40 transition-all duration-300">
        <h4 className="text-xl font-semibold mb-3 neon-purple">
          2. Alignment with Open-Source Innovation
        </h4>
        <p>
          Associate your brand with an event that actively promotes open-source
          technologies, collaborative development, and socially impactful
          solutions.
        </p>
      </div>

      <div className="glass p-6 rounded-2xl border border-[var(--accent-cyan)]/20 hover:border-[var(--accent-cyan)]/40 transition-all duration-300">
        <h4 className="text-xl font-semibold mb-3 neon-cyan">
          3. Meaningful Networking Opportunities
        </h4>
        <p>
          Engage directly with developers, designers, entrepreneurs, and tech
          advocates — building long-term professional connections.
        </p>
      </div>

      <div className="glass p-6 rounded-2xl border border-[var(--accent-green)]/20 hover:border-[var(--accent-green)]/40 transition-all duration-300">
        <h4 className="text-xl font-semibold mb-3 neon-cyan">
          4. Commitment to Community & Education
        </h4>
        <p>
          Support an initiative that nurtures technical learning, empowers young
          innovators, and strengthens the open-source ecosystem.
        </p>
      </div>

      <div className="glass p-6 rounded-2xl border border-[var(--accent-purple)]/20 hover:border-[var(--accent-purple)]/40 transition-all duration-300 md:col-span-2">
        <h4 className="text-xl font-semibold mb-3 neon-purple">
          5. Platform to Showcase Expertise
        </h4>
        <p>
          Participate through mentorship, speaking sessions, product demos, or
          custom challenges — with direct interaction and high visibility for
          your offerings.
        </p>
      </div>
    </div>

    <p className="text-center text-lg mt-10 italic opacity-90">
      Sponsors receive comprehensive promotion across social media, event
      branding, website, and on-ground presence — a real investment in
      open-source, talent, and the future.
    </p>
  </div>
);
export default function Home() {
  return (
    <div className="bg-background text-foreground text-lg relative overflow-hidden">
      {/* Blur elements with updated colors */}
      <BlurElement className="bg-[var(--accent-green)]/40 w-[800px] h-[800px] -top-[400px] -left-[300px] opacity-[0.15]" />
      <BlurElement className="bg-[var(--accent-cyan)]/40 w-[600px] h-[600px] top-[30%] -right-[200px] opacity-[0.15]" />
      <BlurElement className="bg-[var(--accent-green)]/40 w-[700px] h-[700px] bottom-0 left-1/2 -translate-x-1/2 opacity-[0.15]" />

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
              className="text-7xl sm:text-8xl font-bold text-foreground"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, ease: [0.6, -0.05, 0.01, 0.99] }}
            >
              FOSS Hack 2026
            </motion.h1>
            <motion.div
              className="flex flex-col sm:flex-row items-center justify-center gap-6 text-xl text-foreground/60"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 1 }}
            >
              <div className="flex items-center gap-3">
                <Calendar className="w-6 h-6 text-foreground" />
                <span>March 1-31, 2026</span>
              </div>
              <div className="hidden sm:block text-2xl">•</div>
              <div className="flex items-center gap-3">
                <MapPin className="w-6 h-6 text-foreground" />
                <span>
                  <a href="https://www.openstreetmap.org/node/7835031256#map=19/28.474677/77.476482">
                    Delhi Technical Campus, Greater Noida
                  </a>
                </span>
              </div>
            </motion.div>
            <Link
              href="https://fossunited.org/dashboard/register-for-hackathon?id=1hdcnkbtmk"
              className="inline-flex items-center gap-3 bg-foreground text-background px-10 py-5 rounded-full text-xl font-medium hover:bg-foreground/90 transition-colors duration-300"
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
            className="space-y-8 text-xl text-foreground/60"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.2,
              duration: 1,
              ease: [0.6, -0.05, 0.01, 0.99],
            }}
          >
            {[
              "Evaluation based on code commits during the event",
              "No external APIs allowed as core features",
              "Project must have a valid FOSS license",
              "Cash prize split among winners at jury's discretion",
              "No blockchain, web3, or crypto projects",
            ].map((rule, index) => (
              <motion.p
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 * index, duration: 0.8 }}
                className="flex items-center gap-3"
              >
                <span className="text-foreground">•</span> {rule}
              </motion.p>
            ))}
          </motion.div>
        </div>
      </Section>

      <Section id="coc">
        <div className="max-w-5xl mx-auto relative z-10">
          <AnimatedTitle>Code of Conduct</AnimatedTitle>
          <motion.div
            className="prose prose-xl text-foreground/60"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.2,
              duration: 1,
              ease: [0.6, -0.05, 0.01, 0.99],
            }}
          >
            <p className="text-xl">
              We are committed to providing a harassment-free experience for
              everyone, regardless of:
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
                  <span className="text-foreground">•</span> {item}
                </motion.li>
              ))}
            </ul>
            <p className="text-xl mt-6 font-semibold">
              Reporting Code of Conduct Violations
            </p>
            <p className="text-xl">
              If you are being harassed, notice that someone else is being
              harassed, or come across a violation of the code of conduct,
              please contact a volunteer/organiser immediately. Participants can
              call <b>+91 9354424599</b> or email{" "}
              <a href="mailto:fossclub@proton.me" className="underline">
                fossclub@proton.me
              </a>{" "}
              for any reports or queries. All reporters will remain anonymous.
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
            transition={{
              delay: 0.2,
              duration: 1,
              ease: [0.6, -0.05, 0.01, 0.99],
            }}
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
                  className="p-8 rounded-xl border-2 border-foreground/10 hover:border-foreground/20 transition-colors block group bg-background/50"
                >
                  <h3 className="text-2xl font-semibold mb-3 text-foreground group-hover:text-foreground/90 transition-colors">
                    {link.title}
                  </h3>
                  <p className="text-xl text-foreground/70">{link.desc}</p>
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
            transition={{
              delay: 0.2,
              duration: 1,
              ease: [0.6, -0.05, 0.01, 0.99],
            }}
          >
            {/* Platinum Tier (Empty) */}
            <SponsorTier
              title="Platinum"
              sponsors={[]}
              bgColor="bg-gradient-to-br from-cyan-200/30 via-cyan-300/20 to-transparent backdrop-blur-sm border border-gray-400/30"
            />

            <SponsorTier
              title="Gold"
              sponsors={[]}
              bgColor="bg-gradient-to-br from-yellow-500/25 via-yellow-400/15 to-transparent backdrop-blur-sm border border-yellow-400/30"
            />

            <SponsorTier
              title="Silver"
              sponsors={[]}
              bgColor="bg-gradient-to-br from-gray-400/25 via-gray-300/15 to-transparent backdrop-blur-sm border border-gray-400/30"
            />
          </motion.div>
        </div>
      </Section>
      <Section id="why-sponsor">
        <div className="max-w-5xl mx-auto relative z-10">
          <AnimatedTitle>Why Sponsor Us?</AnimatedTitle>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.9 }}
          >
            <WhySponsorUs />
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
            transition={{
              delay: 0.2,
              duration: 1,
              ease: [0.6, -0.05, 0.01, 0.99],
            }}
          >
            {[
              { name: "Tanmay Maheshwari", title: "Lead Organizer" },
              { name: "Sanjam Kaur", title: "Management" },
              { name: "Jayesh Bisht", title: "Management" },
              {
                name: "Avneesh Kumar",
                title: "Community Partners & Campus Ambassadors Head",
              },
              { name: "Kartik Gupta", title: "Community Partner" },
              { name: "Harshit Vashisht", title: "Campus Ambassador" },
              { name: "Manya Yadav", title: "PR & Outreach Head" },
              { name: "Aditya Mishra", title: "PR" },
              {
                name: "Ishita Kaushik",
                title: "Social Media / Photos / Videos Head",
              },
              { name: "Adarsh", title: "Social Media & Shoot & Edit" },
              { name: "Satyam Raj", title: "Photography" },
              { name: "Anmol Upadhyay", title: "Videography" },
              {
                name: "Nitya Kapoor",
                title: "Graphics & Content Writing Head",
              },
              { name: "Aditya Sachdeva", title: "Graphics" },
              { name: "Jayesh Bisht", title: "Content Writing" },
              { name: "Avneesh Kumar", title: "Graphics Support" },
              {
                name: "Bhumi Aggarwal",
                title: "Logistics, Food & Vendor Head",
              },
              { name: "Aditya Singh", title: "Logistics" },
              { name: "Krish Gupta", title: "Food Management" },
              { name: "Dishant", title: "Food Support" },
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
                  <Users className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                </motion.div>
                <h3 className="text-lg sm:text-xl font-medium mb-1 text-white">
                  {member.name}
                </h3>
                <p className="text-sm text-white/60">{member.title}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </Section>
      <Section id="about">
        <div className="max-w-5xl mx-auto relative z-10">
          <AnimatedTitle>About FOSS Hack</AnimatedTitle>
          <motion.div
            className="prose prose-xl text-foreground/60"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.2,
              duration: 1,
              ease: [0.6, -0.05, 0.01, 0.99],
            }}
          >
            <p className="text-2xl leading-relaxed">
              FOSS Hack 2026 is the sixth edition of FOSS Hack, a hybrid
              hackathon to promote Free and Open Source Software by bringing
              together students and professionals to build or extend FOSS
              projects.
            </p>
            <p className="text-2xl leading-relaxed">
              With a prize pool of ₹5,00,000, our mission is to foster
              open-source development and provide a platform for creative minds
              to build solutions that benefit the community.
            </p>
          </motion.div>
        </div>
      </Section>

      <motion.footer
        className="border-t border-foreground/10 py-16 px-8 relative z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        <div className="max-w-5xl mx-auto text-center text-foreground/70">
          <p className="text-xl">
            &copy; 2026 FOSS Hack Delhi-NCR. All rights reserved.
          </p>
        </div>
      </motion.footer>
    </div>
  );
}
