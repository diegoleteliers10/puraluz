import React, { useState } from "react";
import ModalCard from "./ModalCard";
import { ModalContext } from "../context/ModalContext";



export default function Servicios() {

  const [selectedService, setSelectedService] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);


  return (
    <ModalContext.Provider value={{ selectedService, setSelectedService, isModalOpen, setIsModalOpen }}>
      <section
        className="w-[100%] sm:h-[100dvh] sm:px-3 h-auto bg-cover bg-no-repeat xl:py-[2.5rem] flex gap-3"
        id="services"
      >
        <div className="flex flex-col w-full gap-3">
          <div className="relative w-full h-full group cursor-pointer" onClick={() => {setSelectedService('nutricion');setIsModalOpen(true)}}>
            <div
              className="absolute inset-0 bg-[url('/nutricionyogadani.jpg')] bg-cover bg-[30%]"
            >
            </div>
            <div
              className="absolute inset-0 bg-[#fffdfa] bg-opacity-50 group-hover:bg-opacity-20 duration-200"
            >
            </div>
            <div className="absolute inset-0 flex justify-center items-center">
              <h2
                className="text-black font-titleFont font-semibold text-[1.5rem] title group-hover:scale-[1.5] duration-200"
              >
                Nutricion Holistica
              </h2>
            </div>
          </div>
          <div className="relative w-full h-full group cursor-pointer" onClick={() => {setSelectedService('talleres');setIsModalOpen(true)}}>
            <div
              className="absolute inset-0 bg-[url('/talleresdaniyoga.jpg')] bg-cover bg-[40%]"
            >
            </div>
            <div
              className="absolute inset-0 bg-[#fffdfa] bg-opacity-50 group-hover:bg-opacity-20 duration-200"
            >
            </div>
            <div className="absolute inset-0 flex justify-center items-center">
              <h2
                className="text-black font-titleFont font-semibold text-[1.5rem] title group-hover:scale-[1.5] duration-200"
              >
                Talleres
              </h2>
            </div>
          </div>
        </div>
        <div className="relative w-full h-full group cursor-pointer" onClick={() => {setSelectedService('clases');setIsModalOpen(true)}}>
          <div
            className="absolute inset-0 bg-[url('/yogaclasesdani.jpg')] bg-cover bg-[40%]"
          >
          </div>
          <div
            className="absolute inset-0 bg-[#fffdfa] bg-opacity-50 group-hover:bg-opacity-20 duration-200"
          >
          </div>
          <div className="absolute inset-0 flex justify-center items-center">
            <h2
              className="text-black font-titleFont font-semibold text-[1.5rem] title group-hover:scale-[1.5] duration-200"
            >
              Clases
            </h2>
          </div>
        </div>
        <ModalCard/>
      </section>
    </ModalContext.Provider>
  );
}
