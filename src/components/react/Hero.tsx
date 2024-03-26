import {useEffect} from 'react'
import { motion } from "framer-motion"

const Hero = ({firstP, secondPar, description, button}:{firstP:string, secondPar:string, description:string, button:string}) => {

  useEffect(()=>{
      const heroButt = document.querySelector('#hero-butt')
      heroButt?.addEventListener('click',()=>{
        window.scrollTo(0,2698)
      })
  },[])


  return (
    <section id="top" className="lg:h-[100dvh] md:h-auto sm:p-0 px-3 md:px-3 py-[3.5rem] md:py-[4rem] h-auto bg-[url('/mar-gray.jpg')] bg-[50%] bg-cover bg-no-repeat w-full flex justify-around items-center">
      <div className="flex sm:flex-row lg:mt-0 sm:mt-[1rem] flex-col z-10">
        <div
          className="flex flex-col justify-center items-center relative top-[2rem]"
        >
          <h2
            className="text-[#191919] font-titleFont sm:text-[3.7rem] font-bold sm:self-start lg:text-[4rem] xl:text-[4rem] 1.5xl:text-[6rem] text-[40px] title"
          >
            {firstP}
          </h2>
          <h2
            className="text-[#191919] font-titleFont sm:text-[3.7rem] font-bold sm:self-start lg:text-[4rem] xl:text-[4rem] 1.5xl:text-[6rem] text-[40px] title"
          >
            {secondPar}
          </h2>
          <p className="text-[#19191995] text-center sm:pr-[3.5rem] sm:text-left sm:self-start lg:text-[1rem] 1.5xl:text-[1.2rem] max-w-[600px] font-semibold font-subFont">{description}</p>
          <a href="#contact" className="sm:self-start px-4 py-3 mt-6 border-2 border-white sm:px-12 sm:py-4 rounded-full tracking-widest uppercase font-bold bg-white text-black hover:bg-black hover:border-black hover:text-white transition duration-200">
            {button}
          </a>
        </div>
          <img
            src="/yoga1.jpg"
            alt="hero"
            className="object-cover sm:relative rounded-lg h-[100%] 1.5xl:h-[600px] xl:h-[400px] w-[100%] 1.5xl:w-[600px] sm:w-[500px] sm:h-[350px] z-30 relative top-[3rem] sm:mt-0 mt-4"
            loading="eager"
          />
      </div>
    </section>
  )
}

export default Hero