import React from 'react'

function ServiceCard({number}) {
  return (
    <div className='w-44 h-32 shadow-md flex justify-center items-center text-xl'>
      {number}
    </div>
  )
}

export default ServiceCard
