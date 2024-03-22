
import { useState } from 'react';
import emailjs from '@emailjs/browser';
import toast, { Toaster } from 'react-hot-toast';
import { motion } from "framer-motion"

interface FormInputs {
    name:string;
    email: string;
    message: string;
};

interface ContactProps {
  title:string;
  subtitle:string;
  contactName:string;
  inputName:string;
  contactEmail:string;
  inputEmail:string;
  contactMessage:string;
  inputMessage:string;
  whatsapp:string
}

const Contact = ({title,subtitle,contactName,inputName,contactEmail,inputEmail,contactMessage,inputMessage,whatsapp}:ContactProps) => {
  const [formData, setFormData] = useState<FormInputs>({
    name:'',
    email:'',
    message:''
  })

  const [isLoading, setIsLoading] = useState(false);

  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      setIsLoading(true); // Inicia el estado de carga

      try {
        await emailjs.sendForm('puraluz_service', 'puraluz_18hg45', e.currentTarget, 'DaO7FWiE1IlCYVP4g');
        setTimeout(()=>{
          setIsLoading(false);
          toast.success('Email enviado correctamente')
          setFormData({
            name:'',
            email:'',
            message:''
          })
        },2000)
      } catch (error:any) {
         setIsLoading(false);
         toast.error(error.text)
        console.log('Error al enviar el email:', error.text);
      }

  };

  const MessageSender = ()=>{
    return (
      <>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#ffffff" fill="none">
            <path d="M21.0477 3.05293C18.8697 0.707363 2.48648 6.4532 2.50001 8.551C2.51535 10.9299 8.89809 11.6617 10.6672 12.1581C11.7311 12.4565 12.016 12.7625 12.2613 13.8781C13.3723 18.9305 13.9301 21.4435 15.2014 21.4996C17.2278 21.5892 23.1733 5.342 21.0477 3.05293Z" stroke="currentColor" stroke-width="1.5" />
            <path d="M11.5 12.5L15 9" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
        Enviar mensaje
      </>
    )
  }
  return (
    <section className="h-[100dvh] w-full py-4 bg-[#9DB2AF] mt-3" id="contact">
      <Toaster position='top-center'/>
      <motion.div className="sm:px-[2rem] flex flex-col items-center" initial={{ opacity: 0, y: -200 }} whileInView={{opacity:1,y:0}} transition={{ delay: 2, duration: 0.7 }} viewport={{ once: true }}>
        <h2 className="text-[#fffdfa] font-titleFont text-[3rem] xl:text-[3.25rem] title">{title}</h2>
        <h3 className="text-[#fffdfa90] sm:text-[14px] xl:text-[18px] text-[12px] text-center mt-2 px-[5rem] max-w-auto font-subFont font-semibold">{subtitle}</h3>
        <div className="sm:flex-row flex-col flex justify-around w-[80%] mt-6 gap-[3rem]">
          <form onSubmit={sendEmail} className="flex flex-col rounded-[15px] w-[100%]">
            <label className="text-[#fffdfa] font-semibold flex flex-col">
              {contactName}
              <input type="text" placeholder={inputName} name="user_name" value={formData.name} className="rounded-[5px] py-1 pl-2 focus:outline-none border-[1px] border-[#fffdfa] w-[100%] text-sm" id="nameInput" onChange={(e)=>{
                setFormData({...formData, name:e.target.value})
              }}/>
            </label>
            <label className="text-[#fffdfa] font-semibold mt-1 flex flex-col">
              {contactEmail}
              <input type="email" placeholder={inputEmail} className="rounded-[5px] py-1 pl-2 focus:outline-none border-[1px] border-[#fffdfa] w-[100%] text-sm" value={formData.email} id="emailInput" name="user_email" onChange={(e)=>{
                setFormData({...formData, email:e.target.value})
              }}/>
            </label>
            <label className="text-[#fffdfa] font-semibold mt-1 flex flex-col h-full">
              {contactMessage}
              <textarea placeholder={inputMessage} value={formData.message} className="text-sm rounded-[5px] text-[#000000] py-1 pl-2 h-full w-[100%] resize-none focus:outline-none border-[1px] border-[#fffdfa]" id="messageInput" name="message" onChange={(e)=>{
                setFormData({...formData, message:e.target.value})
              }}/>
            </label>
            <button className="bg-[#191919] text-white py-2 font-semibold text-lg flex cursor-pointer items-center justify-center gap-4 rounded-[5px] mt-2 disabled:pointer-events-none disabled:opacity-50 text" type='submit' disabled={!formData.name || !formData.email || !formData.message}>
              {isLoading ? <span className="loader"></span> : <MessageSender/>}
            </button>
            <div className="flex justify-between items-center mt-2">
              <div className="bg-white h-[1px] sm:w-[200px] w-[120px] inline-block"/>
              <p className="text-white font-semibold" id="midText">O</p>
              <div className="bg-white h-[1px] sm:w-[200px] w-[120px] inline-block"/>
            </div>
            <a type="button" className="bg-[#fffdfa] py-2 font-semibold text-lg flex items-center justify-center gap-4 rounded-[5px] mt-2 text-[#13700d]" href="https://wa.me/56950180241?text=Hola%20%20Dani,%20quiero%20saber%20más%20sobre%20yoga%20y%20tus%20y%20clases.%20" target="_blank" rel='noreferrer'>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 737.509 740.824" id="Whatsapp" className="w-[24px] h-[24px]"><path fill-rule="evenodd" d="M630.056 107.658C560.727 38.271 468.525.039 370.294 0 167.891 0 3.16 164.668 3.079 367.072c-.027 64.699 16.883 127.855 49.016 183.523L0 740.824l194.666-51.047c53.634 29.244 114.022 44.656 175.481 44.682h.151c202.382 0 367.128-164.689 367.21-367.094.039-98.088-38.121-190.32-107.452-259.707m-259.758 564.8h-.125c-54.766-.021-108.483-14.729-155.343-42.529l-11.146-6.613-115.516 30.293 30.834-112.592-7.258-11.543c-30.552-48.58-46.689-104.729-46.665-162.379C65.146 198.865 202.065 62 370.419 62c81.521.031 158.154 31.81 215.779 89.482s89.342 134.332 89.311 215.859c-.07 168.242-136.987 305.117-305.211 305.117m167.415-228.514c-9.176-4.591-54.286-26.782-62.697-29.843-8.41-3.061-14.526-4.591-20.644 4.592-6.116 9.182-23.7 29.843-29.054 35.964-5.351 6.122-10.703 6.888-19.879 2.296-9.175-4.591-38.739-14.276-73.786-45.526-27.275-24.32-45.691-54.36-51.043-63.542-5.352-9.183-.569-14.148 4.024-18.72 4.127-4.11 9.175-10.713 13.763-16.07 4.587-5.356 6.116-9.182 9.174-15.303 3.059-6.122 1.53-11.479-.764-16.07-2.294-4.591-20.643-49.739-28.29-68.104-7.447-17.886-15.012-15.466-20.644-15.746-5.346-.266-11.469-.323-17.585-.323-6.117 0-16.057 2.296-24.468 11.478-8.41 9.183-32.112 31.374-32.112 76.521s32.877 88.763 37.465 94.885c4.587 6.122 64.699 98.771 156.741 138.502 21.891 9.45 38.982 15.093 52.307 19.323 21.981 6.979 41.983 5.994 57.793 3.633 17.628-2.633 54.285-22.19 61.932-43.616 7.646-21.426 7.646-39.791 5.352-43.617-2.293-3.826-8.41-6.122-17.585-10.714" clip-rule="evenodd" fill="#13700d" className="color000000 svgShape"></path></svg>
              {whatsapp}
            </a>
          </form>
          <img src="/daniyogacontacto.jpg" alt="contact" width={300} height={50} className="object-cover w-[440px] sm:h-[390px] rounded-[5px]"/>
        </div> 
      </motion.div>
    </section>
  )
}

export default Contact;