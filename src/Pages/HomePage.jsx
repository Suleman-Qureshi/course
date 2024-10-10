import React from 'react'
import img1 from '../assets/photo-1529158062015-cad636e205a0.avif'
import NavBar from '../Components/Navigation/NavBAr'
import bgImg from '../assets/banner-desk.png'
import { RiNumber1 } from "react-icons/ri";
import { RiNumber2 } from "react-icons/ri";
import { RiNumber3 } from "react-icons/ri";
import { IoLocationSharp } from "react-icons/io5";
import { IoMailOpen } from "react-icons/io5";
import { FaPhoneVolume } from "react-icons/fa";
import Footer from '../Components/Footer/Footer';
import Services from '../Components/Section/Services';
function HomePage() {
  return (
    <>
    <NavBar/>
    <section id='Home' className='w-screen h-screen'>
    <div className={`relative top-28 w-screen h-[25rem] bg-[url(${bgImg})] bg-blend-darken flex px-24 items-center justify-between text-white`} style={{"background":`rgba(0,0,0,0.7) url(${bgImg}) no-repeat right/cover`}}>

    <div className='flex flex-col gap-3'>
   <h1 className='text-6xl font-light'>Lorem <span className='text-sky-700'>Ispum</span><br />Dolar</h1>
   <p className='text-lg font-light'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt</p>
    </div>
    <div className='flex flex-col gap-8 font-light text-lg mr-20'>
      <div className='flex gap-2 items-center'>
        <div className='bg-sky-700 p-1 rounded-full'><RiNumber1/> </div>
        <p>Lorem ipsum dolor sit amet.</p>
      </div>
      <div className='flex gap-2 items-center'>
        <div className='bg-sky-700 p-1 rounded-full'><RiNumber2 /> </div>
        <p>Lorem ipsum dolor sit amet.</p>
      </div>
      <div className='flex gap-2 items-center'>
        <div className='bg-sky-700 p-1 rounded-full'><RiNumber3 /> </div>
        <p>Lorem ipsum dolor sit amet.</p>
      </div>
    </div>
    </div>
    </section>
    <section id='About' className='gap-12 w-screen h-screen flex px-24 py-6  justify-between items-center font-light overflow-y-hidden'>
      <div className='w-1/2 h-full flex flex-col gap-4'> 
      <h1 className='text-3xl font-light'>About, <span className='text-sky-700'>ipsum dolor.</span></h1>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias modi amet eum iure libero vitae officia, at ipsum porro consequuntur reiciendis, laboriosam itaque quos! Laborum ex rerum nostrum quod sunt expedita rem illum accusamus eveniet iure. Modi molestiae commodi velit dicta dolore aliquid quidem perspiciatis, tempora laboriosam, aperiam qui. Dolor.</p>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias modi amet eum iure libero vitae officia, at ipsum porro consequuntur reiciendis, laboriosam itaque quos! Laborum ex rerum nostrum quod sunt expedita rem illum accusamus eveniet iure. Modi molestiae commodi velit dicta dolore aliquid quidem perspiciatis, tempora laboriosam, aperiam qui. Dolor.</p>
      <p>Laborum ex rerum nostrum quod sunt expedita rem illum accusamus eveniet iure.</p>
      </div> 
      <div className='w-1/2 h-full flex justify-end'><img src={img1} alt="" className='h-full' /></div>
    </section>
    <Services/>
    <section id='booking' className='w-screen h-screen px-24 py-12 font-light'>
      <div className='w-full h-full border border-sky-700 rounded-md flex'>
        <div className='w-1/2 h-full  flex items-center overflow-hidden'><img src={img1} className='w-full' /></div>
        <div className='w-1/2 h-full flex flex-col justify-center items-center gap-4 px-24'>
        <div className='flex flex-col text-center'>
        <h1 className='text-sky-700 text-3xl'>Lorem ipsum dolor <br />sit amet.</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum, dolor?</p>
        <p></p>
        </div>
        <div className='flex gap-8'>
          <div className='flex flex-col gap-1'>
            <label htmlFor="name">Name:</label>
            <input type="text" className='w-full border rounded-md p-1' />
          </div>
          <div className='flex flex-col gap-1'>
            <label htmlFor="name">Name:</label>
            <input type="text" className='w-full border rounded-md p-1' />
          </div>
        </div>
        <div>
          <button className='border border-sky-700 w-24 h-10 text-sky-700 hover:bg-sky-700 hover:text-white duration-150 hover:duration-150'>Submit</button>
        </div>
        </div>
      </div>
    </section>
    <section id='Contact' className='w-screen h-[70vh] text-white bg-slate-900 border-t-4 border-t-sky-500 px-24 py-24 flex justify-between font-light'>
     <div className='flex flex-col gap-4 '>
      <h5 className='text-3xl '>CONTACT DETAILS</h5>
      <div className='flex gap-4 mx-2'>
      <IoLocationSharp className='text-3xl text-sky-700'/>
      <p className='text-lg'>Loaction, City abc</p>
      </div>
      <div className='flex gap-4 mx-2'>
      <IoMailOpen className='text-3xl text-sky-700'/>
      <p className='text-lg'>123@example.com</p>
      </div>
      <div className='flex gap-4 mx-2'>
      <FaPhoneVolume className='text-3xl text-sky-700'/>
      <p className='text-lg'>+1 234 56789</p>
      </div>
     </div>
     <div className='flex flex-col gap-4 text-center w-1/2 '>
      <h5 className='text-3xl'>WORKING HOURS</h5>
      <p className=''>Monday-Sunday : 10:00 am - 7:00 pm</p>
     </div>
    </section>
    <Footer/>
    </>
  )
}

export default HomePage
