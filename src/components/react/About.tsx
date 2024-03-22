import React from 'react'
import { motion } from 'framer-motion'

interface AboutProps {
  title: string,
  description: string
}

const About = ({title,description}:AboutProps) => {
  return (
    <section id="aboutme" className='sm:h-[100dvh] flex justify-center items-center'>
      <motion.div className="flex sm:flex-row flex-col" initial={{ opacity: 0, scale: 0.5 }} whileInView={{ opacity: 1, scale: 1 }} transition={{
        duration: 0.8,
        delay: 0.5,
        ease: [0, 0.71, 0.2, 1.01]
      }} viewport={{ once: true }}>
        <img
          src="/about.jpg"
          alt="me_about"
          width={520}
          height={100}
          className="rounded-xl shadow-2xl object-cover w-[500px] h-[450px] order-2 sm:order-1 sm:mt-0 mt-4"
          loading="lazy"
        />
        <div className="flex flex-col items-center justify-center sm:px-12 order-1 sm:order-2">
          <h2 className="text-[#9DB2AF] sm:text-[3.5rem] text-[2rem] font-titleFont font-bold pb-2 text-left title">{title}</h2>
          <p className="whitespace-pre-line text-black mt-3 text-[13px] font-subFont sm:text-[14px] max-w-[600px]">{description}</p>
        </div>
      </motion.div>
    </section>
  )
}

export default About