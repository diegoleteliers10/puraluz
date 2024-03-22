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
    <section id="top" className="sm:h-[100dvh] h-auto bg-[url('/mar-gray.jpg')] bg-cover bg-no-repeat bg-[50%] w-full flex justify-around items-center">
      <div className="flex z-10 mt-[2rem]">
        <div
          className="flex flex-col justify-center items-center relative top-[2rem]"
        >
          <h2
            className="text-[#191919] font-titleFont sm:text-[3.7rem] font-bold sm:self-start xl:text-[5rem] text-[40px] title"
          >
            {firstP}
          </h2>
          <h2
            className="text-[#191919] font-titleFont sm:text-[3.7rem] font-bold sm:self-start xl:text-[5rem] text-[40px] title"
          >
            {secondPar}
          </h2>
          <p className="text-[#19191995] text-center sm:pr-[3.5rem] sm:text-left sm:self-start xl:text-[1.5rem] max-w-[600px] font-semibold font-subFont">{description}</p>
          <a href="#contact" className="sm:self-start px-4 py-3 mt-6 border-2 border-white sm:px-12 sm:py-4 rounded-full tracking-widest uppercase font-bold bg-white text-black hover:bg-black hover:border-black hover:text-white transition duration-200">
            {button}
          </a>
        </div>
        {/* <div className="border-white border-4 border-dotted p-2 rounded-lg sm:mt-0 mt-[2rem]"> */}
          <img
            src="/yoga1.jpg"
            alt="hero"
            className="object-cover sm:relative rounded-lg h-[100%] w-[100%] sm:w-[500px] sm:h-[350px] z-30 relative top-[3rem]"
            loading="eager"
          />
        {/* </div> */}
      </div>
    </section>
  )
}

export default Hero