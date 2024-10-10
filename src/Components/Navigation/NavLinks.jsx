import React from 'react'
import {NavLink } from 'react-router-dom'

function NavLinks() {
  return (
<>
  <NavLink to={'/'} className={({isActive})=>`${isActive?'bg-blue-100':'bg-transparent'} flex justify-center items-center relative w-[70px] h-4/5 hover:bg-[#2179b5] text-center hover:text-white duration-300 after:absolute after:top-100 border-t-[#2179b5] after:duration-150 hover:after:top-[94px] hover:after:border-x-[35px] after:rounded-full hover:after:rounded-none hover:after:border-x-transparent hover:after:duration-300 cursor-pointer hover:after:border-t-[20px] hover:after:border-t-[#2179b5] hover:duration-250`}>Home</NavLink>
  <a href='#About' className={` flex justify-center items-center relative w-[150px] h-4/5 hover:bg-[#2179b5] text-center hover:text-white duration-300 after:absolute after:top-100 border-t-[#2179b5] after:duration-150 hover:after:top-[104px] hover:after:border-x-[75px] after:rounded-full hover:after:rounded-none hover:after:border-x-transparent hover:after:duration-300 cursor-pointer hover:after:border-t-[20px] hover:after:border-t-[#2179b5] hover:duration-250`}>About The Doctor</a>
  <a href='#Services' className={`flex justify-center items-center relative w-[90px] h-4/5 hover:bg-[#2179b5] text-center hover:text-white duration-300 after:absolute after:top-100 border-t-[#2179b5] after:duration-150 hover:after:top-[104px]  hover:after:border-x-[45px] after:rounded-full hover:after:rounded-none hover:after:border-x-transparent hover:after:duration-300 cursor-pointer hover:after:border-t-[20px] hover:after:border-t-[#2179b5] hover:duration-250`}>Services</a>
  <NavLink to={'/'} className={({isActive})=>`${isActive?'bg-transparent':'bg-transparent'} flex justify-center items-center relative w-[100px] h-4/5 hover:bg-[#2179b5] text-center hover:text-white duration-300 after:absolute after:top-100 border-t-[#2179b5] after:duration-150 hover:after:top-[104px]  hover:after:border-x-[50px] after:rounded-full hover:after:rounded-none hover:after:border-x-transparent hover:after:duration-300 cursor-pointer hover:after:border-t-[20px] hover:after:border-t-[#2179b5] hover:duration-250`}>Testimonials</NavLink>
  <NavLink to={'/'} className={({isActive})=>`${isActive?'bg-transparent':'bg-transparent'} flex justify-center items-center relative w-[90px] h-4/5 hover:bg-[#2179b5] text-center hover:text-white duration-300 after:absolute after:top-100 border-t-[#2179b5] after:duration-150 hover:after:top-[104px]  hover:after:border-x-[45px] after:rounded-full hover:after:rounded-none hover:after:border-x-transparent hover:after:duration-300 cursor-pointer hover:after:border-t-[20px] hover:after:border-t-[#2179b5] hover:duration-250`}>Contact</NavLink>
  <a href='#booking' className={` flex justify-center items-center relative w-[155px] h-4/5 hover:bg-[#2179b5] text-center hover:text-white duration-300 after:absolute after:top-100 border-t-[#2179b5] after:duration-150 hover:after:top-[104px]  hover:after:border-x-[77px] after:rounded-full hover:after:rounded-none hover:after:border-x-transparent hover:after:duration-300 cursor-pointer hover:after:border-t-[20px] hover:after:border-t-[#2179b5] hover:duration-250`}>Book Appoinment</a>
</>
  )
}

export default NavLinks
