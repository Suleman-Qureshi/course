import React from 'react'
import ServiceCard from '../Card/ServiceCard'

function Services() {
  return (
    <section id='Services' className='w-screen h-screen gap-6 px-24 py-6 flex flex-col items-center text-center font-light'>
    <div className='flex flex-col gap-4'>
  <h1 className='text-3xl font-light'>OUR<span className='text-sky-700'>SERVICES</span></h1>
<p className='mx-36'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt aliquam maxime iste numquam possimus ab deserunt aspernatur, tempora blanditiis est?Lorem ipsum, dolor sit amet cour adipisicing elit. Incidunt aliquam maxime </p>
    </div>
    <div className='mx-24 rounded-md border-2 border-slate-700 flex flex-col gap-1 p-1'>
      <div className='flex gap-1'>
     <ServiceCard number={1}/>
     <ServiceCard number={2}/>
     <ServiceCard number={3}/>
     <ServiceCard number={4}/>
      </div>
      <div className='flex gap-1'>
     <ServiceCard number={5}/>
     <ServiceCard number={6}/>
     <ServiceCard number={7}/>
     <ServiceCard number={8}/>
      </div>
    </div>
  </section>
  )
}

export default Services
