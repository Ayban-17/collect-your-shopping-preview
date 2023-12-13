import React from 'react'
import RenderLogo from '../00_header/RenderLogo'
import Link from 'next/link'

const Footer = ({navigations}) => {
  return (
    <footer className='p-10 flex justify-center '>
      <div className='max-w-[1440px] lg:grid lg:grid-cols-2 lg:grid-rows-[180px_10px_50px] lg:w-full'>
        <div className='flex justify-center lg:pl-32 lg:justify-start'>
          <RenderLogo logoMarkStyles="w-24 h-10 lg:w-[124.955px] lg:h-[65.352px]" logoTextStyles="h-6 w-[200px] lg:w-[292px] lg:h-[28.421px]"/>
        </div>

        <p className='mt-4 text-center text-base lg:col-start-1 lg:row-start-3 lg:text-start lg:pl-36'>© Copyright 2023. All rights reserved.</p>
        
        <hr className='hidden lg:block lg:col-span-2 lg:row-start-2'/>
        <div className='flex flex-col py-10 gap-2 items-center lg:col-start-2 lg:row-start-1 lg:items-start lg:pl-56'>
          {navigations.map(({name,href}, index)=>(
            <Link href={href} key={index}><span className="rounded-lg text-base text-gray-700 hover:text-green font-semibold">{name}</span></Link>
          ))}
        </div>

        <div className='flex flex-col items-center lg:items-start lg:pl-56 lg:col-start-2 lg:row-start-3 lg:justify-center lg:pt-4'>
          <p className=''>info@collectyourshopping.nl</p>
          <p className=''>+31 85 080 6798</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
