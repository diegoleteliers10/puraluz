import React from 'react'
import {yogaImages} from '../../../utils/index'
import { ImagesParallax } from '../ui/ImagesParallax'

interface BetweenProps {
    frase: string
}

const Between = ({frase}:BetweenProps) => {
  return (
    <section className="w-full mb-[3rem] flex justify-center lg:p-0 px-4 py-[1rem]">
        <h2 className="text-[#9DB2AF] font-titleFont font-bold sm:text-[2.6rem] text-center text-[1.5rem] 1.5xl:text-[3rem] frase">{frase}</h2>
    </section>
  )
}

export default Between

