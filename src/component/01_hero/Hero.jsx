import Image from 'next/image'
import React from 'react'

const Hero = ({convenienceDelivered, straigntToYourDoor, makeItEasyToShop, downloadNowText }) => {
  return (
    <section className='flex flex-col items-center relative mt-16 lg:mt-0'>
       <div className='max-w-7xl mb-10 grid grid-cols-1 lg:grid-cols-[700px_1fr] lg:z-10 lg:mb-0'>
        <div className='flex mt-6 mb-16 lg:col-start-2 lg:-ml-56'>
            <Image src="/assets/01_hero/rider1.png" alt="rider" width={600} height={700} className='h-72 w-72 self-end -mb-16 -ml-12 lg:h-[540px] lg:w-[490px] lg:-mb-[115px]'/>      
            <Image src="/assets/01_hero/phone.gif" alt="Phone" quality={100} width={600} height={700} className='h-86 w-40 -ml-14 lg:h-[670px] lg:w-[300px] lg:-ml-[90px]'/>    
        </div> 
        <div className='px-7 mb-4 lg:row-start-1 lg:flex lg:flex-col lg:gap-6 lg:mt-20 '>
            <h1 className='text-3xl mb-4  text-green font-medium capitalize pr-4 lg:pr-0 lg:text-[52px] lg:mb-0 lg:leading-[55px]'>{convenienceDelivered} <span className='text-orange tlg:ext-[45px]s'>{straigntToYourDoor}</span></h1>
            <p className='leading-loose text-base  mb-4 lg:mb-0  lg:text-xl lg:leading-8 lg:pr-24'>{makeItEasyToShop}</p>
            <button className='bg-orange py-3 px-14 rounded-full text-white text-sm lg:w-fit lg:text-lg lg:font-medium'>{downloadNowText}</button>
        </div>
      </div>
      <img src="/assets/01_hero/mobile-bg.svg" alt="background" className='w-full lg:-mt-80 lg:z-0' />
    </section>
  )
}
export default Hero
