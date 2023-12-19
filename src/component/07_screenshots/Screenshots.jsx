import Image from "next/image"
import { useState, useRef, useEffect } from 'react'
import {useAutoAnimate} from '@formkit/auto-animate/react'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid'

const Screenshots = ({screenshots, awesomeScreenshotTitle, awesomeScreenshotDesc}) => {
    const [currentActiveIndex, setCurrentActiveIndex] = useState(4)
    const [animate, setAnimate] = useState("")
    const [focus, setFocus] = useState(screenshots)
    const [parent, enableAnimations] = useAutoAnimate(/* optional config */)

    const handleNext = () => {
        const newFocus = [...focus];
        const lastItem = newFocus.pop();
        newFocus.unshift(lastItem);
        setFocus(newFocus);
        setCurrentActiveIndex(newFocus[3].id)
        setAnimate("animate-fade-in")
        setTimeout(()=>{
            setAnimate("")
        }, 500)
    }

    const handlePrev = () => {
        const newFocus = [...focus];
        const firstItem = newFocus.shift();
        newFocus.push(firstItem);
        setFocus(newFocus);
        setCurrentActiveIndex(newFocus[3].id)
    }

    return (
    <section className="bg-grey flex flex-col items-center">
        <div className="max-w-[1440px] px-8">
            <div className="mb-8 lg:flex lg:flex-col lg:gap-6">
                <h1 className="text-center text-[29px] font-medium px-20 lg:text-4xl lg:tracking-wider">{awesomeScreenshotTitle}</h1>
                <p className="hidden lg:block lg:text-center lg:px-72">{awesomeScreenshotDesc}</p>
            </div>

            <div className=" relative lg:py-16 lg:flex lg:items-center lg:justify-center lg:gap-4">
                <Image src="/assets/07_screenshots/Mobile.png" alt="phone frame" height={800} width={500} className="w-64 h-[490px] absolute left-1/2 -translate-x-1/2 z-10 lg:w-[300px] lg:h-[590px]"/>
                <button className="w-8 h-8 border-2 border-green text-green  hover:text-orange hover:border-orange rounded-full p-1  hidden lg:inline-block lg:mx-8" onClick={handlePrev}><ChevronLeftIcon/></button>
                <div className="-translate-x-[335px] flex items-center gap-8 md:-translate-x-[138px] lg:translate-x-[1px]  lg:gap-5" ref={parent}>
                    <Image src={`/assets/07_screenshots/${focus[0].img}.png`} alt="screenshot" height={800} width={500} className={`w-60 h-[410px] blur-sm opacity-60  lg:w-48 hidden ${animate}`}/>
                    <Image src={`/assets/07_screenshots/${focus[1].img}.png`} alt="screenshot" height={800} width={500} className={`w-60 h-[410px] blur-sm opacity-60  lg:w-48 ${animate}`}/>
                    <Image src={`/assets/07_screenshots/${focus[2].img}.png`} alt="screenshot" height={800} width={500} className={`w-60 h-[410px] blur-sm opacity-60  lg:w-48 ${animate}`}/>
                    <Image src={`/assets/07_screenshots/${focus[3].img}.png`} alt="screenshot" height={800} width={500} className={`w-60 h-[460px] mt-4 lg:h-[550px] lg:w-64 lg:mt-0 lg:mx-4 ${animate}`}/>
                    <Image src={`/assets/07_screenshots/${focus[4].img}.png`} alt="screenshot" height={800} width={500} className={`w-60 h-[410px] blur-sm opacity-60  lg:w-48 ${animate}`}/>
                    <Image src={`/assets/07_screenshots/${focus[5].img}.png`} alt="screenshot" height={800} width={500} className={`w-60 h-[410px] blur-sm opacity-60  lg:w-48 ${animate}`}/>
                    <Image src={`/assets/07_screenshots/${focus[6].img}.png`} alt="screenshot" height={800} width={500} className={`w-60 h-[410px] blur-sm opacity-60  lg:w-48 ${animate} hidden`}/>
                </div>
                <button className="w-8 h-8 border-2  border-green text-green  hover:text-orange hover:border-orange  rounded-full p-1  hidden lg:inline-block lg:mx-8" onClick={handleNext}><ChevronRightIcon/></button>
            </div>

            <div className="flex flex-col gap-2 py-8" >
                <h1 className="text-center text-green font-semibold text-lg">{focus[3].title}</h1>
                <p className="text-center px-6 text-base font-light lg:px-[250px] lg:h-20 lg:text-sm ">{focus[3].desc}</p>
                <div className="flex gap-3 justify-center items-center py-8 lg:gap-4 lg:-mt-10">
                    <button className="w-8 h-8 border-2 border-green text-green rounded-full p-1  lg:hidden" onClick={handlePrev}><ChevronLeftIcon/></button>
                    <div className={`w-2 h-2 ${currentActiveIndex === 4? "bg-green":" bg-[#B9B9B9]"}  rounded-full lg:w-[10px] lg:h-[10px]`}></div>
                    <div className={`w-2 h-2 ${currentActiveIndex === 3? "bg-green":" bg-[#B9B9B9]"}  rounded-full lg:w-[10px] lg:h-[10px]`}></div>
                    <div className={`w-2 h-2 ${currentActiveIndex === 2? "bg-green":" bg-[#B9B9B9]"}  rounded-full lg:w-[10px] lg:h-[10px]`}></div>
                    <div className={`w-2 h-2 ${currentActiveIndex === 1? "bg-green":" bg-[#B9B9B9]"}  rounded-full lg:w-[10px] lg:h-[10px]`}></div>
                    <div className={`w-2 h-2 ${currentActiveIndex === 7? "bg-green":" bg-[#B9B9B9]"}  rounded-full lg:w-[10px] lg:h-[10px]`}></div>
                    <div className={`w-2 h-2 ${currentActiveIndex === 6? "bg-green":" bg-[#B9B9B9]"}  rounded-full lg:w-[10px] lg:h-[10px]`}></div>
                    <div className={`w-2 h-2 ${currentActiveIndex === 5? "bg-green":" bg-[#B9B9B9]"}  rounded-full lg:w-[10px] lg:h-[10px]`}></div>
                    <button className="w-8 h-8 border-2  border-green text-green rounded-full p-1  lg:hidden" onClick={handleNext}><ChevronRightIcon/></button>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Screenshots

// [
// {
//     id:1,
//     img:"Order-Details",
//     title:"Order Details",
//     desc:"Access the secifics with Order Details, Dive into a comprehensive overview of your purchase, from item specifics to delivery updates. Stay informed and in control as you track your order seamlessly through this feature"
// },{
//     id:2,
//     img:"Driver-Details",
//     title:"Driver Details",
//     desc:"Embark on a seamless journey by joining our driver community. Experience hassle free registration and unlock a world of opportunities as you sign up to become a valued part of the CYS delivery team"
// },{
//     id:3,
//     img:"Account-Driver",
//     title:"Driver Account",
//     desc:"Empower out driver with the Driver Account Feature, now enhanced with CYS credit points. A rewarding experience awaits as drivers mnage their accounts seamlessly while accruing credit points, ensuring a mutually beneficial journey for both drivers and customers."
// },{
//     id:4,
//     img:"Home",
//     title:"Home Screen",
//     desc:"Welcome to the heart of CYS Shopping! The Home screen is your gateway to a world of choices, promotions, and personalized recommendations. Embrace convenience right from the start."
// },{
//     id:5,
//     img:"Store-Opened",
//     title:" Open Store",
//     desc:"Step into a virtual marketplace as you experience a store opened through our app. Immerse yourself in a user-friendly interface, where every aisle is just a tap away"
// },{
//     id:6,
//     img:"Item-Opened",
//     title:"Open Item",
//     desc:"Elevate your shopping through experience by diving deep into individual items. Our Item Opened feature provides a closer look, allowing you to make informed decisions and discover the details that matters most to you"
// },{
//     id:7,
//     img:"Cart-Checkout",
//     title:"Cart Checkout",
//     desc:"Effortlesly finalize your order with a streamline cart checkout. Confirm selections, choose your payment, and seal the deal - making your desired products just a click away."
// }
// ]