'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

interface ShapeProps {
  color: string
  size: number
  left: string
  top: string
  delay?: number
}

const Shape = ({ color, size, left, top, delay = 0 }: ShapeProps) => (
  <motion.div
    className="absolute"
    style={{ left, top }}
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 0.15, scale: 1 }}
    transition={{ duration: 1.5, delay }}
  >
    <div 
      className={`${color} backdrop-blur-md`}
      style={{ width: size, height: size }}
    />
  </motion.div>
)

export const GeometricShapes = () => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  })

  return (
    <div ref={ref} className="fixed inset-0 pointer-events-none overflow-hidden">
      {inView && (
        <>
          <Shape color="bg-blue-200" size={60} left="10%" top="15%" delay={0.2} />
          <Shape color="bg-green-200" size={40} left="85%" top="25%" delay={0.4} />
          <Shape color="bg-blue-200" size={50} left="75%" top="65%" delay={0.6} />
          <Shape color="bg-green-200" size={45} left="15%" top="75%" delay={0.8} />
          <Shape color="bg-blue-200" size={35} left="45%" top="85%" delay={1} />
          <Shape color="bg-green-200" size={55} left="65%" top="5%" delay={1.2} />
        </>
      )}
    </div>
  )
}

