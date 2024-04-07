import type { langProps } from './types';

export const navigations = [
  {
    name: {es:'Inicio',en:'Home'},
    path: '#top'
  },
  {
    name:{es:'Sobre mi', en:'About me'},
    path:'#aboutme'
  },
  {
    name: {es:'Servicios',en:'Services'},
    path: '#services'
  },
  {
    name:{es:'Contacto',en:'Contact'},
    path:'#contact'
  }
]

export const lang:langProps = {
  hero:{
    en:{
      fpar:' Do Yoga,',
      spar:'Be yourself',
      par:'Explore total harmony through yoga. With gentle asanas and conscious breathing, release tensions to attain inner peace. This practical method, accessible to all, provides benefits for both physical and mental well-being. Begin your journey towards balance and discover serenity through yoga.',
      butt:'Book Now'
    },
    es: {
      fpar:'Haz Yoga,',
      spar:'Se Tu Mismo',
      par:'Explora la armonía total a través del yoga. Con asanas suaves y respiración consciente, libera tensiones para alcanzar la paz interior. Este método práctico, accesible para todos, brinda beneficios tanto para el bienestar físico como mental. Inicia tu viaje hacia el equilibrio y descubre la serenidad a través del yoga.',
      butt:'Agenda Ahora'
    }
  },
  about:{
    es:{
      title:'Acerca De Mi',
      description:'¡Hola! Soy Daniela Guerrero. Conocí el yoga desde pequeña, aunque no lo practicaba. Solo conocía el mantra "om" y los saludos al sol. Desde chica siempre me interesó todo el mundo "espiritual" o "esotérico" gracias a mi papá, quien siempre iba coleccionándome cuarzos o le preguntaba sobre el tema de las vidas pasadas. Mi recorrido por el yoga fue por muchos estilos, hasta que llegué al Vinyasa Yoga y Ashtanga. \n \n En cierto momento de ansiedad me apegué al yoga practicándolo todos los días, entendiendo cada parte del yoga, como la respiración, la conexión del mat y yo, y aprendí la meditación y la historia del yoga. Luego decidí dejar mi carrera profesional e irme 100% como instructora de yoga, donde creé mi estudio llamado PuraLuz, este llamado así debido a uno de mis tatuajes y debido a que desde chica me decían eres pura luz. Por lo que quise transimitir eso a cada persona, ya que cada uno me parece un puntito de luz en el universo.'
    },
    en:{
      title:'Know About Me',
      description:`Hi! I'm Daniela Guerrero. I knew yoga since I was a little girl, although I didn't practice it. I only knew the mantra "om" and sun salutations. Since I was a child I was always interested in the "spiritual" or "esoteric" world thanks to my dad, who was always collecting quartz or asking him about past lives. My journey through yoga went through many styles, until I came to Vinyasa Yoga and Ashtanga. \n \n At a certain point of anxiety I became attached to yoga by practicing it every day, understanding every part of yoga, such as breathing, the connection of the mat and myself, and I learned meditation and the history of yoga. Then I decided to leave my professional career and go 100% as a yoga instructor, where I created my studio called PuraLuz, so called because of one of my tattoos and because since I was a child I was told you are pure light. So I wanted to transmit that to each person, since each one seems to me a little dot of light in the universe.`
    }
  },
  between:{
    es:{
      frase:'"Eres luz, eres magia, eres oscuridad, eres todo eso que uno necesita en la vida."'
    },
    en:{
      frase:'"You are light, you are magic, you are darkness, you are all that one needs in life."'
    }
  },
  contact:{
    en:{
      title:"Let’s connect!",
      subtitle:"Find out how I can help you achieve your individual wellness goals and be a part of your journey to a healthier, more balanced life. I'm here to provide personalized guidance and be your partner on this journey to holistic wellness - I look forward to meeting you and collaborating with you in building a personalized path to health and happiness!",
      contactName:"Name",
      inputName:"Enter your name",
      contactEmail:"Email",
      inputEmail:"Enter your email",
      contactMessage:"Message",
      inputMessage:"Enter your message",
      whatsapp:'Chat on Whatsapp'
    },
    es:{
      title:"¡Conectemos!",
      subtitle:"Descubre cómo puedo ayudarte a alcanzar tus metas individuales de bienestar y ser parte de tu camino hacia una vida más saludable y equilibrada. Estoy aquí para proporcionarte orientación personalizada y ser tu compañero en este viaje hacia el bienestar integral. ¡Espero con entusiasmo conocerte y colaborar contigo en la construcción de un camino de salud y felicidad personalizado!",
      contactName:"Nombre",
      inputName:"Ingresa tu nombre",
      contactEmail:"Email",
      inputEmail:"Ingresa tu email",
      contactMessage:"Mensaje",
      inputMessage:"Ingresa tu mensaje",
      whatsapp:"Escribeme en Whatsapp"
    }
  }
}

export const yogaImages = [
  "/daniyoga2.jpg",
  "/daniyoga3.jpg",
  "/daniyoga4.jpg",
  "/daniyoga5.jpg",
  "/daniyoga6.jpg",
  "/daniyoga7.jpg"
]

interface ObjInputs {
    name:string;
    email: string;
    message: string;
};

export const verifyObj = (obj:ObjInputs)=>{
  if (obj.name === '' && obj.email === '' && obj.message === '') return true
  return false
}

export const benefits  = [
  {
    image:'/BenefitImages/MaliBeneficio.png',
    brandName:'Mali', 
    discountCode:'Puraluz_mali', 
    brandPageLink:'https://www.malishop.cl/'
  }
]