import React from 'react'
import { Typewriter } from 'react-simple-typewriter';
import portfolio1 from '../assets/portfolio1-Photoroom.png'
import my from '../assets/WhatsApp Image 2026-06-28 at 20.14.04-Photoroom (1).png'

const Home = () => {
  return (
    <div className= 'max-w-5xl w-full mx-auto grid md:grid-cols-2 gap-10 items-center mt-20'>
      {/* left content */}
      <div>
        <h1 className= 'text-6xl font-bold text-white mt-10'>Hi! I'm <span>Chaduni, </span>
        <br/>
        <span className = 'text-green-400'>
          <Typewriter
          words={['Web Developer', 'UI/UX Designer']} 
          loop
          cursor
          cursorStyle='|'
          typeSpeed={70}
          deleteSpeed={50}
          delaySpeed={100}
          />
          </span>
          </h1>
          <p className = 'text-gray-300 mt-4 leading-relaxed'>I build visually captivating, user-friendly websites and web apps that transform your idea into seamless, engaging digital experiences.</p>
          <div className = 'mt-6 flex gap-8'>
            <button className = 'bg-green-600 hover:bg-green-800 transition px-6 py-3 rounded-lg text-white font-medium'>Contact Me</button>
              <button className = 'bg-gray-600 hover:bg-gray-800 transition px-6 py-3 rounded-lg text-white font-medium'>Download CV</button>
          </div>
      </div>

      {/*Right content */}
      <div className = 'relative flex justify-center'>
        {/* bg image */}
        <img src= {portfolio1} alt= "" className= 'absolute w-115 h-115 rounded-full object-cover mt-12 opacity-90'/>

        {/*main profile image */}
        <img src= {my} alt= "" className= 'relative w-100 h-100 object-cover '/>
      </div>
    </div>
  )
}

export default Home