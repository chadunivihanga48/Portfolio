import React from 'react'
import { NavLink } from 'react-router-dom';
import { FaDownload } from "react-icons/fa";
import { BiUser } from "react-icons/bi";

const Sidebar = () => {
  return (
    <div className = 'w-[22%] min-h-screen bg-[#002512] flex flex-col justify-between p-8'>
      <div >
        <h2 className = 'text-[32px] font-bold text-white text-center'>Chaduni Vihanga</h2>
      </div>
      <div className = 'flex flex-col gap-4 pt-20 place-items-center uppercase text-white'>
        <NavLink to = "/" className = 'flex items-center gap-3 px-6 py-3'>
          <p className ='text-lg'>Home</p>
        </NavLink>
         <NavLink to = "/services" className = 'flex items-center gap-3 px-6 py-3'>
          <p className ='text-lg'>Services</p>
        </NavLink>
         <NavLink to = "/portfolio" className = 'flex items-center gap-3 px-6 py-3'>
          <p className ='text-lg'>Portfolio</p>
        </NavLink>
         <NavLink to = "/contact" className = 'flex items-center gap-3 px-6 py-3'>
          <p className ='text-lg'>Contact</p>
        </NavLink>
      </div>
      <button className = 'bg-green-500 rounded-full px-4 py-4 flex justify-center gap-4 font-semibold text-white'>Download CV <FaDownload /></button>
      <button><BiUser /></button>
    </div>
  )
}

export default Sidebar