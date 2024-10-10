import React from 'react'
import { Link } from 'react-router-dom'
import NavLinks from './NavLinks'

function NavBar() {
  return (
    <nav className='fixed w-screen px-24 py-10 shadow-sm shadow-slate-300 bg-white flex justify-between items-center z-30'>
        <Link className='font-bold text-3xl'>Logo</Link>
        <div className='flex justify-center h-full items-start absolute right-24 text-slate-900 gap-1 font-light text-sm'>
        <NavLinks/>
        </div>
    </nav>
  )
}

export default NavBar
