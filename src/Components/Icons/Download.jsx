import React from 'react'
import { FaApple } from "react-icons/fa";
import playStoreIcon from '../../assets/logos/google-play.png'
import windowsIcon from '../../assets/logos/Windows.png'

function Download({type="as"}) {
  return (
    <div className='px-3 h-10 bg-white rounded-full border border-slate-400 flex items-center gap-1 pl-1 cursor-pointer group'>
        {
            type=='ps'?<img src={playStoreIcon} className='w-5 ml-2 scale-100 group-hover:scale-110 group-hover:duration-200 duration-200' />:
            type=='win'?<img src={windowsIcon} className='w-7 group-hover:scale-110 group-hover:duration-200 duration-200' />:
            <FaApple className='text-slate-700 text-2xl group-hover:scale-110 group-hover:duration-200 duration-200' />
        }
      <div className='flex flex-col text-slate-500 leading-tight'>
        <p className='text-[9px] font-bold'>Download on the</p>
        <p className='text-sm font-bold text-slate-700'>Apple Store</p>
      </div>
    </div>
  )
}

export default Download

