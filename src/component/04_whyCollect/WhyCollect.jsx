import { ButtonGroup } from '@/component/shared/Button'
import { useAutoAnimate } from '@formkit/auto-animate/react'
import useButton from '@/hooks/useButton'
import Image from "next/image"
import { useState, useEffect } from 'react'


const WhyCollect = ({featureTitle, featureConvenienceTitle, featureConvenienceDescription, featureWideVarietyTitle, featureWideVarietyDescription, featureContributeTitle, featureContributeDescription, whyText}) => {
  const [animate, setAnimate] = useState(false);  
  const [parent] = useAutoAnimate({ duration: 800 })
  const infoList = [
        {
          title: featureConvenienceTitle,
          desc: featureConvenienceDescription,
          vid: '/assets/04_whyCollect/convenience.mp4',
        },
        {
          title: featureWideVarietyTitle,
          desc: featureWideVarietyDescription,
          vid:'/assets/04_whyCollect/wide_variety.mp4',
        },
        {
          title: featureContributeTitle,
          desc: featureContributeDescription,
          vid: '/assets/04_whyCollect/contribute.mp4',
        },
      ]
    
      const { currentlySelected, next, prev, changeCurrent } = useButton(
        infoList.length
      )   
      
      useEffect(()=>{
        setAnimate(true)
      },[infoList[currentlySelected].vid])

      return (
        <section className="lg:flex lg:flex-col lg:items-center relative">
            <div className={`max-w-[1920px] px-8 pt-10 pb-16 lg:grid lg:grid-cols-[18%_32%_1fr] lg:grid-rows-2 lg:pt-56 lg:px-0 lg:pb-10 `}>
                <Image src="/assets/04_whyCollect/circle.svg" alt="circle" height={900} width={200} className=" hidden lg:flex lg:absolute lg:left-0 lg:top-36  lg:z-0 lg:h-[800px]"/>
                <video loop muted reload="none" autoPlay="inView" playsInline  className={`rounded-5xl lg:col-start-3 lg:row-span-2 lg:row-start-2 lg:-mt-60 lg:h-[530px] ${animate? "animate-fade-in":""} `} src={infoList[currentlySelected].vid}>
                    <source alt="vidAlt" type="video/mp4"/>
                    <p>Video Alternative</p>
                </video>
                <div className="flex justify-end my-8 lg:flex-col lg:justify-start lg:row-start-1 lg:col-start-2 lg:col-span-2 lg:gap-8 lg:ml-5 ">
                    <div>
                        <h1 className="text-3xl leading-[48px] w-44 font-medium lg:w-full lg:text-5xl lg:tracking-wider lg:mb-2">{whyText}</h1>
                        <h1 className="text-3xl leading-[48px] w-44 font-medium lg:w-full lg:text-5xl lg:tracking-wider">{featureTitle}</h1> 
                    </div>
                    <p className={` flex-1 text-right text-[140px] leading-[150px] pr-4 font-semibold bg-gradient-to-b from-greenAccent to-white bg-clip-text text-transparent lg:text-left lg:text-[210px] lg:mt-10 lg:pt-3 lg:pl-3 ${animate? "animate-fade-in":""} `}>{currentlySelected + 1}</p>
                </div>
                <div className="mb-8 h-64 flex flex-col justify-between lg:col-start-2 lg:row-start-2 lg:h-[288px] lg:ml-5 " ref={parent}>
                    <h2 className={`text-xl text-green font-semibold mb-3 lg:text-[30px] lg:tracking-wide lg:font-medium lg:pr-6 ${animate? "animate-fade-in":""} `}>{infoList[currentlySelected].title}</h2>
                    <p className={`text-base leading-7 tracking-wide lg:text-[18px] lg:pr-[67px] lg:mt-6 ${animate? "animate-fade-in":""} `}>{infoList[currentlySelected].desc}</p>
                    <div className="flex gap-6 mt-7 justify-self-end lg:mt-8 lg:gap-10 relative z-10 " onClick={()=>setAnimate(!animate)}>
                        <ButtonGroup navigation="dots" list={infoList} {...{ prev, next, changeCurrent, currentlySelected }}/>
                    </div>
                </div>
            </div>
            <Image src="/assets/04_whyCollect/circle_mobile.svg" alt="Circle" height={500} width={500} className="h-[200px] w-[200px] absolute right-0 bottom-0 z-0 lg:hidden"/>
        </section>
      )

}

export default WhyCollect




// return (
//     <section className="flex justify-center py-10 md:py-16 lg:pb-20 lg:pt-64 border-2">
//       <div className="flex w-full flex-col gap-8 px-8 md:flex-row-reverse md:gap-12 md:pr-0 lg:gap-20 lg:pl-0 border-2">

//         <video src={infoList[currentlySelected].vid} className=" h-[14rem] w-full overflow-hidden rounded-[2rem] object-cover object-center md:h-[32rem] md:w-[50vw]  lg:h-[36rem] border-2" preload="none" autoPlay="inView" playsInline loop muted >
//           <source alt="vidAlt" type="video/mp4" />
//         </video>

//         <div className="flex flex-col gap-4 md:max-w-lg  md:-mr-16 border-2">
//           <div className="flex md:flex-col">
//             <div className="flex flex-col text-3xl font-medium tracking-tight md:text-4xl">
//                 <h1 className="text-3xl leading-[48px] w-44 font-medium lg:w-full lg:text-5xl ">{whyText}</h1>
//                 <h1 className="text-3xl leading-[48px] w-44 font-medium lg:w-full lg:text-5xl ">{featureTitle}</h1> 
//             </div>
//             <span className="h-[144px] overflow-visible bg-gradient-to-b from-[#A6FB89] to-[#A6FB89]/0 bg-clip-text text-[8rem] font-extrabold tracking-tight text-transparent md:hidden">
//               {currentlySelected + 1}
//             </span>
//           </div>

//           <div className="flex flex-col gap-10  md:gap-8 ">
//             <div className="flex flex-col gap-2 md:gap-4">
//               <span className="hidden flex-1 text-right text-[140px] leading-[150px] pr-4 font-semibold bg-gradient-to-b from-greenAccent to-white bg-clip-text text-transparent lg:text-left lg:text-[150px] md:block ">
//                 {currentlySelected + 1}
//               </span>
//               <h2 className="text-lg font-bold text-[#008C3C] md:text-2xl md:font-medium">
//                 {infoList[currentlySelected].title}
//               </h2>
//               <p className="text-[##171717] ">
//                 {infoList[currentlySelected].desc}
//               </p>
//             </div>
//             <div className="flex gap-5">
//               <ButtonGroup
//                 navigation="dots"
//                 list={infoList}
//                 {...{ prev, next, changeCurrent, currentlySelected }}
//               />
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   )