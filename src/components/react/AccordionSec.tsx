import React from 'react'
import {Accordion, AccordionItem} from "@nextui-org/react";

const AccordionSec = () => {
  return (
    <Accordion className='mt-3'>
      <AccordionItem key="1" aria-label="Cuales son los precios?" title="Cuales son los precios?">
        Por ahora no tenemos precios fijos, ya que recien estamos partiendo. Mas a futuro tendremos ya valores mas estables por hora de clases.
      </AccordionItem>
      <AccordionItem key="2" aria-label="¿Estas certificada?" title="¿Estas certificada?">
        Si. Cuento con certificaciones de instructora profesional de yoga.
      </AccordionItem>
      <AccordionItem key="3" aria-label="¿Es para todas las edades?" title="¿Es para todas las edades?">
        Absolutamente que si. Y no solo para las edades, si no que para todos los niveles de yoga.
      </AccordionItem>
    </Accordion>
  )
}

export default AccordionSec