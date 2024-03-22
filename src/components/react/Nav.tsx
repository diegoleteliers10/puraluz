
import { useEffect, useState } from 'react';
import { navigations } from '../../../utils/index';

const Nav = () => {
  const [isOpen,setIsOpen]=useState(false);

  return (
    <nav className='w-full flex sm:flex-col flex-row justify-between px-4 pb-2 items-center absolute top-0 z-30 first:mx-auto bg-[#19191950]' id="nav">
        <a href='/' className={` font-titleFont text-[3rem] font-normal cursor-pointer text-[#ffffff] text-center h-[74px] title`} id="logo_text">Puraluz</a>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="40" height="40" fill="none" className='flex sm:hidden cursor-pointer' color='#ffffff' onClick={()=>{setIsOpen(true)}}>
            <path d="M4 8.5L20 8.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M4 15.5L20 15.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
        <ul className={`hidden sm:flex [&>li>a]:px-8 [&>li>a]:font-subFont [&>li>a]:py-1 [&>li>a]:text-[15px] [&>li>a]:text-[#ffffff] hover:[&>li>a]:border-b-[#ffffff] hover:[&>li>a]:border-b-[2px]`} id="anchors">
          {navigations.map((navigation) => (
            <li className="" id="black" key={navigation.name.es}>
              <a href={navigation.path} className="font-bold">{navigation.name.es}</a>
            </li>
          ))}
        </ul>
        {isOpen && (
              <div className='w-[100vw] h-[100%] z-30 flex flex-col justify-start items-end fixed top-0 left-0 sm:hidden bg-[rgb(23,64,73)] overflow-y-hidden'>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="40" height="40" color="#ffffff" fill="none" className=' sm:hidden mt-[15px] mr-[15px] cursor-pointer' onClick={()=>{setIsOpen(false)}}>
                      <path d="M19 5L5 19M5 5L19 19" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                  <ul className='w-full text-center'>
                    {navigations.map((navigation) => (
                      <li className="py-[1.2rem] px-12 active:bg-[#ffffff30] duration-200" id="black" key={navigation.name.es}>
                        <a href={navigation.path} className="font-semibold text-[3rem]" onClick={()=>{setIsOpen(false)}}>{navigation.name.es}</a>
                      </li>
                    ))}
                  </ul>
              </div>
        )}
    </nav>
  );
};

export default Nav;