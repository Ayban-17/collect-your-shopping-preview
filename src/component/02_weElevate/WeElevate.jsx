import { ButtonGroup, LeftArrow, RightArrow } from '@/component/shared/Button'
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import { useAutoAnimate } from '@formkit/auto-animate/react'
import useButton from '@/hooks/useButton'


const WeElevate = ({weElevateTextGreen, weElevateTextBlack, welcomeToCys, liveTrackingTitle, liveTrackingDescription, wideSectionTitle, wideSectionDescription, deliveredInMinutesTitle, deliveredInMinutesDescription, downloadNowText}) => {
  const [animate, setAnimate] = useState(false);
  const infoList = useRef([
    {
      title: liveTrackingTitle,
      desc: liveTrackingDescription,
      vid: '/assets/02_weElevate/live_tracking.gif',
      img: '/assets/02_weElevate/1.png',
      alt: 'live tracking',
    },
    {
      title: wideSectionTitle,
      desc: wideSectionDescription,
      vid: '/assets/02_weElevate/wide.gif',
      img: '/assets/02_weElevate/2.png',
      alt: 'wide section',
    },
    {
      title: deliveredInMinutesTitle,
      desc: deliveredInMinutesDescription,
      vid: '/assets/02_weElevate/delivered.gif',
      img: '/assets/02_weElevate/3.png',
      alt: 'delivered in minute',
    },
  ])

  const imgList = useRef([
    '/assets/02_weElevate/1.png',
    '/assets/02_weElevate/2.png',
    '/assets/02_weElevate/3.png',
  ])

  const [parent] = useAutoAnimate({ duration: 800 })
  const { next, prev } = useButton(infoList.current.length)

  const nextClick = () => {
    const temp = infoList.current.shift()
    infoList.current.push(temp)
    next()
  }

  const prevClick = () => {
    const temp = infoList.current.pop()
    infoList.current.unshift(temp)
    prev()
  }

  useEffect(()=>{
    setAnimate(true)
  },[infoList.current[0].vid])

  return (
    <section className="bg-[#EAEAEA] py-16 lg:flex lg:flex-col lg:items-center" id='features'>
      <div className=" lg:grid lg:grid-cols-5 lg:grid-rows-2 lg:max-w-[1440px]">
        <div className="px-6 lg:col-start-3 lg:col-span-3 lg:flex lg:flex-col lg:justify-center lg:px-16">
         <h1 className="text-green text-3xl capitalize font-medium mb-4 lg:text-5xl lg:tracking-wider lg:leading-[60px] lg:mt-32">{weElevateTextGreen} <span className="text-black">{weElevateTextBlack}</span></h1>
         <p className="text-[16px] leading-8 lg:text-[18.5px]  lg:pr-32 lg:leading-[35px]">{welcomeToCys}</p>
        </div>

        <div className="relative col-span-2 row-span-full flex-shrink-0 md:order-first">
          <div className={` pt-12 pb-6 lg:col-start-1 lg:row-start-1 lg:row-span-2 lg:col-span-2 lg:flex lg:justify-end lg:-mr-10 relative`}>
            <Image src={infoList.current[0].vid} alt="video" width={900} height={900} className={`lg:h-[850px] lg:w-[490px] ${animate ? "animate-fade-in":""}`}/>
            <div className={`absolute w-44 top-[500px] left-[25%] flex flex-col gap-3 lg:top-[600px] lg:w-72 lg:pr-6 lg:left-56  ${animate ? "animate-fade-in":""}`}>
              <h1 className="text-xl font-bold text-green tracking-wide lg:text-xl lg:tracking-wider lg:font-medium"> {infoList.current[0].title}</h1>
              <p className={`text-xs lg:text-sm `}>{infoList.current[0].desc}</p>
            </div>
          </div>
        </div>

        <div className="col-span-3 row-span-2 flex w-full flex-col gap-4 overflow-hidden pl-8 md:flex-row md:gap-2 md:pl-0">
          <div className="flex gap-3 md:hidden">
            <ButtonGroup next={() => nextClick()} prev={() => prevClick()} />
          </div>

          <div className="">
            <div className='flex gap-4 w-[470px] lg:w-fit lg:gap-0 lg:px-16 lg:items-center'>
              <div className="hidden md:flex" onClick={()=>setAnimate(!animate)}>
                <LeftArrow onClick={() => prevClick()} />
              </div>
              <div ref={parent} className=" flex gap-4 lg:w-full lg:gap-4 lg:px-6 lg:py-4">
                {infoList.current.map((eachInfo) => (
                  <div key={eachInfo.title} className={`relative h-[200px]`}>
                    <Image src={eachInfo.img} className="h-44 rounded-2xl object-cover object-center md:h-48 md:w-40" alt='image' width={500} height={500} />
                    <p className={`absolute top-0 p-4 text-lg leading-6 font-medium text-[13px] text-white ${animate ? "fade-in":""} `}>
                      {eachInfo.title} 
                    </p>
                  </div>
                ))}
              </div>
              <div className="hidden md:flex " onClick={()=>setAnimate(!animate)}>
                <RightArrow onClick={() => nextClick()} />
              </div>
            </div>
            <button className='bg-orange py-3 px-16 mt-8 font-medium  rounded-full text-white text-sm lg:w-fit lg:text-lg lg:ml-16 lg:mt-8'>{downloadNowText}</button>
          </div>
        </div>
      </div>
    </section>
  )

}

export default WeElevate

// import Image from "next/image"
// import { useState } from 'react'
// import {ChevronLeftIcon, ChevronRightIcon} from "@heroicons/react/24/solid"
// import RenderCarousel from "./RenderCarousel"

// const [carouselData, setCarouselData] = useState([{
//   src:"/assets/02_weElevate/1.png",
//   alt:"Live Tracking",
//   title: liveTrackingTitle
// },{
//   src:"/assets/02_weElevate/2.png",
//   alt:"Wide Section",
//   title: wideSectionTitle
// },{
//   src:"/assets/02_weElevate/3.png",
//   alt:"Delivered in Minutes",
//   title: deliveredInMinutesTitle
// },])


// const handleNextButton = () => {
//   const newCarouselData = [...carouselData];
//   const lastImage = newCarouselData.pop();
//   newCarouselData.unshift(lastImage);
//   setCarouselData(newCarouselData);
// }

// return (
//   <section className="bg-[#EAEAEA] py-16 lg:flex lg:flex-col lg:items-center">
//     <div className='px-6 lg:grid lg:grid-cols-5 lg:grid-rows-2 lg:max-w-[1440px] '>
//       <div className="lg:col-start-3 lg:col-span-3 lg:flex lg:flex-col lg:justify-center lg:px-16">
//         <h1 className="text-green text-3xl capitalize font-medium mb-4 lg:text-5xl lg:tracking-wider lg:leading-[60px] lg:mt-32">{weElevateTextGreen} <span className="text-black">{weElevateTextBlack}</span></h1>
//         <p className="text-[16px] leading-8 lg:text-[18.5px]  lg:pr-32 lg:leading-[35px]">{welcomeToCys}</p>
//       </div>
//       <div className="pt-12 pb-6 lg:col-start-1 lg:row-start-1 lg:row-span-2 lg:col-span-2 lg:flex lg:justify-end  relative">
//         <Image src="/assets/02_weElevate/live_tracking.gif" alt="live Tracking" width={900} height={900} className=" lg:h-[850px] lg:w-[490px]"/>
//         <div className="absolute w-44 left-[25%] bottom-[18%] flex flex-col gap-3 lg:w-72 lg:pr-6 lg:left-44 lg:bottom-44">
//           <h1 className="text-xl font-bold text-green tracking-wide lg:text-2xl lg:tracking-wider lg:font-medium">{liveTrackingTitle}</h1>
//           <p className="text-xs lg:text-sm">{liveTrackingDescription}</p>
//         </div>
//       </div>
//       <div className="lg:row-start-2 lg:col-span-3 lg:-mt-4">
//         <div className="flex gap-6 lg:hidden">
//           <button className="w-8 h-8 border-2 border-green text-green rounded-full p-1"><ChevronLeftIcon/></button>
//           <button className="w-8 h-8 border-2  border-green text-green rounded-full p-1"><ChevronRightIcon/></button>
//         </div>
//         <div className="flex gap-4 w-[500px] lg:w-full lg:px-16 lg:items-center">
//           <button className="w-8 h-8 border-2 border-green text-green rounded-full p-1 hidden lg:inline-block"><ChevronLeftIcon/></button>
//           <RenderCarousel carouselData={carouselData}/>
//           <button className="w-8 h-8 border-2  border-green text-green rounded-full p-1 hidden lg:inline-block" onClick={handleNextButton}><ChevronRightIcon/></button>
//         </div>
//         <button className='bg-orange py-3 px-14 mt-4 font-medium  rounded-full text-white text-sm lg:w-fit lg:text-lg lg:ml-16'>{downloadNowText}</button>
//       </div>
//     </div>
//   </section>
// )

{/* <article className="relative py-8">
              <Image src="/assets/02_weElevate/1.png" alt="live tracking" width={500} height={600} className="h-44 w-36 rounded-3xl lg:w-40 lg:h-48"/>
              <h1 className="text-lg font-medium text-white  absolute top-11 left-4 capitalize lg:text-sm lg:leading-4 lg:pr-10 lg:top-12">{liveTrackingTitle}</h1>
            </article>
            <article className="relative py-8">
              <Image src="/assets/02_weElevate/2.png" alt="live tracking" width={500} height={600} className="h-44 w-36 rounded-3xl lg:w-40 lg:h-48"/>
              <h1 className="text-lg leading-6 font-medium text-white  absolute top-11 left-4 capitalize lg:text-sm lg:leading-4 lg:pr-10 lg:top-12">{wideSectionTitle}</h1>
            </article>
            <article className="relative py-8">
              <Image src="/assets/02_weElevate/3.png" alt="live tracking" width={500} height={600} className="h-44 w-36 rounded-3xl lg:w-40 lg:h-48"/>
              <h1 className="text-lg font-medium leading-6 text-white  absolute top-11 left-4 capitalize lg:text-sm lg:leading-4 lg:pr-10 lg:top-12">{deliveredInMinutesTitle}</h1>
            </article> */}