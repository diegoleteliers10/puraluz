import React from 'react'
import { motion } from 'framer-motion'

interface AboutProps {
  title: string,
  description: string
}

const About = ({title,description}:AboutProps) => {
  return (
    <section id="aboutme" className='sm:h-[100dvh] md:h-auto lg:h-[100dvh] md:py-[2rem] flex justify-center items-center sm:p-0 px-4 md:px-4 py-[1rem] w-full xl:h-[100dvh]'>
      <motion.div className="flex lg:flex-row flex-col md:flex-col" initial={{ opacity: 0, scale: 0.5 }} whileInView={{ opacity: 1, scale: 1 }} transition={{
        duration: 0.8,
        delay: 0.5,
        ease: [0, 0.71, 0.2, 1.01]
      }} viewport={{ once: true }}>
        <img
          src="/about.jpg"
          alt="me_about"
          width={520}
          height={100}
          className="rounded-xl shadow-2xl object-cover lg:w-[500px] md:w-full h-[450px] order-2 lg:order-1 md:order-2 sm:mt-0 mt-4 md:mt-4 1.5xl:w-[600px] 1.5xl:h-[700px]"
          loading="lazy"
        />
        <div className="flex flex-col items-center justify-center sm:px-12 order-1 lg:order-2 md:order-1">
          <h2 className="text-[#9DB2AF] sm:text-[3.5rem] text-[2rem] font-titleFont font-bold pb-2 text-left title 1.5xl:text-[6rem]">{title}</h2>
          <p className="whitespace-pre-line text-black mt-3 text-[13px] font-subFont sm:text-[14px] max-w-[600px] 2xl:text-[1.2rem]">{description}</p>
        </div>
      </motion.div>
    </section>
  )
}

export default About