import React from 'react'
import {yogaImages} from '../../../utils/index'
import { ImagesParallax } from '../ui/ImagesParallax'

interface BetweenProps {
    frase: string
}

const Between = ({frase}:BetweenProps) => {
  return (
    <section className="w-full mb-[3rem] flex justify-center">
        <h2 className="text-[#9DB2AF] font-titleFont font-bold text-[2.6rem] frase">{frase}</h2>
    </section>
  )
}

export default Between

