import { useState, useContext} from 'react'
import { Dialog } from '@headlessui/react'
import { ModalContext } from '../context/ModalContext';

const servicios = {
  clases: {
    title:'Clases',
    subTitleOne:'Descubre la Armonía',
    subtitletTwo:'Variedad para Todos',
    desOne:'Clases diseñadas para renovar mente, cuerpo y espíritu, adaptadas a tu nivel, desde principiantes hasta avanzados.',
    desTwo:'Explora con nosotros el arte del yoga con el estilo Vinyasa, para llevarte al limite y conseguir tu equilibrio perfecto en la vida.'
  },
  talleres: {
    title:'Talleres',
    subTitleOne:'Esencia del Yoga',
    subtitletTwo:'Talleres Diversos',
    desOne:'Explora la profundidad del yoga en nuestros talleres especializados, diseñados para practicar y enriquecer tu bienestar integral.',
    desTwo:'Variedad de talleres, desde la relajante meditación hasta la práctica dinámica del yoga creativo, llevando la serenidad a cada aspecto de tu vida.'
  },
  nutricion: {
    title:'Nutricion Holistica',
    subTitleOne:'Explora la Nutrición Holística',
    subtitletTwo:'Nutricion para Cuerpo y Mente',
    desOne:'Explora la nutrición holística a través de nuestros talleres especializados, adaptando cada taller y apoyo nutricional para atender tus necesidades específicas.',
    desTwo:'Sumérgete en talleres que abarcan desde la alimentación consciente hasta la planificación de comidas equilibradas.'
  }
}


export default function ModalCard() {
  const {selectedService, setSelectedService, isModalOpen, setIsModalOpen} = useContext(ModalContext);


  console.log(selectedService,setSelectedService, isModalOpen, setIsModalOpen);


  return (
    <Dialog open={isModalOpen} onClose={() => setIsModalOpen(false)} className="relative z-50">
    <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
    <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
      <Dialog.Panel className="w-full h-auto max-w-md rounded-lg bg-[#9DB2AF] p-4 relative text-white">
        <Dialog.Title className="text-[#ffffff] title text-[40px]">{servicios[selectedService as keyof typeof servicios]?.title}</Dialog.Title>
        <div className="bg-white h-[1px] sm:w-full w-full inline-block"/>
        <div className="mt-3 flex flex-col">
          <strong className='text-[20px] xl:text-[24px]'>{servicios[selectedService as keyof typeof servicios]?.subTitleOne}</strong>
          <p className='text-[14px] xl:text-[18px] mt-1 sm:mt-2 w-auto'>{servicios[selectedService as keyof typeof servicios]?.desOne}</p>
          <strong className='text-[20px] xl:text-[24px] mt-1 sm:mt-3'>{servicios[selectedService as keyof typeof servicios]?.subtitletTwo}</strong>
          <p className='text-[14px] xl:text-[18px] mt-1 sm:mt-2 w-auto'>{servicios[selectedService as keyof typeof servicios]?.desTwo}</p>
          <div className="flex flex-col gap-4 mt-3 text-white">
            <p className="text-sm flex flex-col gap-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="20"
                height="20"
                color="#ffffff"
                fill="none"
              >
                <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="1.5"
                ></circle>
                <path
                  d="M12 8V12L14 14"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"></path>
              </svg>
              Duración: 60 minutos
            </p> 
            <p className="text-sm flex flex-col gap-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="20"
                height="20"
                color="#ffffff"
                fill="none"
              >
                <path
                  d="M2 18C2 16.4596 2 15.6893 2.34673 15.1235C2.54074 14.8069 2.80693 14.5407 3.12353 14.3467C3.68934 14 4.45956 14 6 14C7.54044 14 8.31066 14 8.87647 14.3467C9.19307 14.5407 9.45926 14.8069 9.65327 15.1235C10 15.6893 10 16.4596 10 18C10 19.5404 10 20.3107 9.65327 20.8765C9.45926 21.1931 9.19307 21.4593 8.87647 21.6533C8.31066 22 7.54044 22 6 22C4.45956 22 3.68934 22 3.12353 21.6533C2.80693 21.4593 2.54074 21.1931 2.34673 20.8765C2 20.3107 2 19.5404 2 18Z"
                  stroke="currentColor"
                  stroke-width="1.5"></path>
                <path
                  d="M14 18C14 16.4596 14 15.6893 14.3467 15.1235C14.5407 14.8069 14.8069 14.5407 15.1235 14.3467C15.6893 14 16.4596 14 18 14C19.5404 14 20.3107 14 20.8765 14.3467C21.1931 14.5407 21.4593 14.8069 21.6533 15.1235C22 15.6893 22 16.4596 22 18C22 19.5404 22 20.3107 21.6533 20.8765C21.4593 21.1931 21.1931 21.4593 20.8765 21.6533C20.3107 22 19.5404 22 18 22C16.4596 22 15.6893 22 15.1235 21.6533C14.8069 21.4593 14.5407 21.1931 14.3467 20.8765C14 20.3107 14 19.5404 14 18Z"
                  stroke="currentColor"
                  stroke-width="1.5"></path>
                <path
                  d="M2 6C2 4.45956 2 3.68934 2.34673 3.12353C2.54074 2.80693 2.80693 2.54074 3.12353 2.34673C3.68934 2 4.45956 2 6 2C7.54044 2 8.31066 2 8.87647 2.34673C9.19307 2.54074 9.45926 2.80693 9.65327 3.12353C10 3.68934 10 4.45956 10 6C10 7.54044 10 8.31066 9.65327 8.87647C9.45926 9.19307 9.19307 9.45926 8.87647 9.65327C8.31066 10 7.54044 10 6 10C4.45956 10 3.68934 10 3.12353 9.65327C2.80693 9.45926 2.54074 9.19307 2.34673 8.87647C2 8.31066 2 7.54044 2 6Z"
                  stroke="currentColor"
                  stroke-width="1.5"></path>
                <path
                  d="M14 6C14 4.45956 14 3.68934 14.3467 3.12353C14.5407 2.80693 14.8069 2.54074 15.1235 2.34673C15.6893 2 16.4596 2 18 2C19.5404 2 20.3107 2 20.8765 2.34673C21.1931 2.54074 21.4593 2.80693 21.6533 3.12353C22 3.68934 22 4.45956 22 6C22 7.54044 22 8.31066 21.6533 8.87647C21.4593 9.19307 21.1931 9.45926 20.8765 9.65327C20.3107 10 19.5404 10 18 10C16.4596 10 15.6893 10 15.1235 9.65327C14.8069 9.45926 14.5407 9.19307 14.3467 8.87647C14 8.31066 14 7.54044 14 6Z"
                  stroke="currentColor"
                  stroke-width="1.5"></path>
              </svg>

              {selectedService === 'clases'?'Nivel: Todos los niveles':selectedService === 'talleres'?'Nivel: Todos los niveles':'Nivel: Todos los niveles'}
            </p>
            <p className="text-sm flex flex-col gap-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="20"
                height="20"
                color="#ffffff"
                fill="none"
              >
                <path
                  d="M12 21C10.6588 21 9.88572 20.4278 8.33953 19.2834C0.221721 13.2749 1.01807 6.15294 4.53744 3.99415C7.21909 2.34923 9.55962 3.01211 10.9656 4.06801C11.5422 4.50096 11.8304 4.71743 12 4.71743C12.1696 4.71743 12.4578 4.50096 13.0344 4.06801C14.4404 3.01211 16.7809 2.34923 19.4626 3.99415C21.1812 5.04838 22.2505 7.28623 21.9494 10"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"></path>
                <path
                  d="M14 18C14 18 15 18 16 20C16 20 19.1765 15 22 14"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"></path>
              </svg>
              {selectedService === 'clases'?'Beneficios: Flexibilidad, relajación, fuerza central':selectedService === 'talleres'?'Beneficios: Armonia, relajación, creatividad':'Beneficios: Armonia corporal, relajación, mejor salud'}
            </p>
            <p className="text-sm flex flex-col gap-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="20"
                height="20"
                color="#ffffff"
                fill="none"
              >
                <path
                  d="M12 14.0466C9.7927 13.8404 7.53058 14.3187 5.57757 15.4816C4.1628 16.324 0.453365 18.0441 2.71266 20.1966C3.81631 21.248 5.04549 22 6.59087 22H13"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"></path>
                <path
                  d="M15.5 6.5C15.5 8.98528 13.4853 11 11 11C8.51472 11 6.5 8.98528 6.5 6.5C6.5 4.01472 8.51472 2 11 2C13.4853 2 15.5 4.01472 15.5 6.5Z"
                  stroke="currentColor"
                  stroke-width="1.5"></path>
                <path
                  d="M17.9992 14C16.7328 14 15.9117 14.8076 14.9405 15.102C14.5456 15.2217 14.3482 15.2815 14.2683 15.3659C14.1884 15.4502 14.165 15.5735 14.1182 15.8201C13.6174 18.4584 14.712 20.8976 17.3222 21.847C17.6027 21.949 17.7429 22 18.0006 22C18.2583 22 18.3986 21.949 18.679 21.847C21.2891 20.8976 22.3826 18.4584 21.8817 15.8201C21.8349 15.5735 21.8114 15.4502 21.7315 15.3658C21.6516 15.2814 21.4542 15.2216 21.0593 15.102C20.0878 14.8077 19.2657 14 17.9992 14Z"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"></path>
              </svg>

              {selectedService === 'clases'?'Requisitos: Ninguno, todos son bienvenidos':selectedService === 'talleres'?'Requisitos: Ninguno, todos son bienvenidos':'Requisitos: Ninguno, todos son bienvenidos'}
            </p>
          </div>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#000000" fill="none" onClick={() => setIsModalOpen(false)} className="absolute top-4 right-4 cursor-pointer">
            <path d="M19 5L5 19M5 5L19 19" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      </Dialog.Panel>
    </div>
    </Dialog>
  )
}