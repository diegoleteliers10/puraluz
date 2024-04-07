import React, { useState } from 'react'
import toast, {Toaster} from 'react-hot-toast';

interface CardProps {
  image:string,
  brandName:string,
  discountCode:string,
  brandPageLink:string
}

const CardBenefit = ({image, brandName, discountCode, brandPageLink}:CardProps) => {


  const handleClipboard = () => {
    const code = document.querySelector('#code_text')
    if (code && code.textContent) {
      navigator.clipboard.writeText(code.textContent)
        .then(() => {
          toast.success('Copied to clipboard')
        })
        .catch((error) => {
          toast.error('Error copying to clipboard')
        })
    }
  }

  const Task01Icon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={17} height={17} color={"#ffffff"} fill={"none"} className='cursor-pointer' onClick={handleClipboard}>
      <path d="M7.99805 16H11.998M7.99805 11H15.998" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M7.5 3.5C5.9442 3.54667 5.01661 3.71984 4.37477 4.36227C3.49609 5.24177 3.49609 6.6573 3.49609 9.48836L3.49609 15.9944C3.49609 18.8255 3.49609 20.241 4.37477 21.1205C5.25345 22 6.66767 22 9.49609 22L14.4961 22C17.3245 22 18.7387 22 19.6174 21.1205C20.4961 20.241 20.4961 18.8255 20.4961 15.9944V9.48836C20.4961 6.6573 20.4961 5.24177 19.6174 4.36228C18.9756 3.71984 18.048 3.54667 16.4922 3.5" stroke="currentColor" strokeWidth="1.5" />
      <path d="M7.49609 3.75C7.49609 2.7835 8.2796 2 9.24609 2H14.7461C15.7126 2 16.4961 2.7835 16.4961 3.75C16.4961 4.7165 15.7126 5.5 14.7461 5.5H9.24609C8.2796 5.5 7.49609 4.7165 7.49609 3.75Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
    </svg>
  );


  return (
    <div className='max-w-[400px] min-w-[320px] h-[230px] relative'>
      <Toaster position='top-center'/>
      <img src={image} alt={brandName} className='object-cover w-full h-full'/>
      <section className='flex flex-col absolute bottom-0 bg-[#00000060] backdrop-blur-lg text-white w-full pl-[20px] pr-[25px] pt-[10px] pb-[12px]'>
        <a href={brandPageLink} target='_blank' rel='noreferrer' className="title text-[27px] mb-1">{brandName}</a>
        <div className='flex items-center justify-between'>
          <span className='text-[12px] font-light'>
            codigo: 
            <p className='inline-block pl-2 text-[16px] font-normal' id='code_text'>{discountCode}</p>
          </span>
          <Task01Icon/>
        </div>
      </section>
    </div>
  )
}

export default CardBenefit