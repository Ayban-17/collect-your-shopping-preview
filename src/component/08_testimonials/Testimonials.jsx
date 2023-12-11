import Image from "next/image"
import style from "./styles.module.css"
import { useEffect, useState } from "react"

const Testimonials = () => {
    const [animate, setAnimate] = useState("")
    const [currentActiveIndex, setCurrentActiveIndex] = useState(0)
    const [testimonials, setTestimonials] = useState([{
        id:1,
        imgMob:"/assets/08_testimonials/texting.jpg",
        imgWeb:"/assets/08_testimonials/textingWeb.jpg",
        name:"Nienka van de Ven",
        address:"Eindhoven, The Netherelands"
    },{
        id:2,
        imgMob:"/assets/08_testimonials/drinking.jpg",
        imgWeb:"/assets/08_testimonials/drinkingWeb.jpg",
        name:"Peter de Jung",
        address:"Amsterdam, The Netherelands"
    },{
        id:3,
        imgMob:"/assets/08_testimonials/shopping.jpg",
        imgWeb:"/assets/08_testimonials/shoppingWeb.jpg",
        name:"Jan van Kesteren",
        address:"Amsterdam, The Netherelands"
    }])

    useEffect(()=>{
        const rotateTestimonials = () => {
            const temp = testimonials.pop()
            testimonials.unshift(temp);
            setTestimonials([...testimonials])
        }
        setInterval(()=>{
            rotateTestimonials();
            setCurrentActiveIndex(testimonials[0].id)
            // setTimeout(()=>{
            //     setAnimate("animate-fade-in")
            //     setTimeout(()=>{
            //         setAnimate("animate-fade-out");
            //         setTimeout(()=>{
            //             setAnimate("");
            //         },1000)
            //     },2000)
            // },3000)
        },4000)
    },[])



  return (
    <section className="relative overflow-hidden flex flex-col items-center">
        <img src="/assets/08_testimonials/bg.png" alt="bg" className="relative z-10 w-full"/>
        <video src="/assets/08_testimonials/circleTop.mp4" autoPlay loop muted className={"absolute -top-6 right-0 z-0 w-56 lg:w-[600px] lg:-right-52 "+style.topCircle}></video>
        <div className="max-w-[1440px] -mt-36 px-10 lg:flex lg:flex-col lg:items-center lg:gap-10 lg:-mt-[700px] lg:mb-10">
            <div className="lg:mb-10 relative z-10">
                <h1 className="text-[29px] font-medium text-center mb-8 tracking-wide lg:text-4xl lg:tracking-wide lg:mb-1">Client Testimonials</h1>
                <p className="hidden lg:block lg:text-center lg:px-60">Dive into the joy of satisfied customers in our Testimonial section. Read about seamless shopping, timely deliveries, and exceptional service, as clients share their positive experiences with CYS.</p>
            </div>
            <div className="h-[580px] shadow-3xl rounded-2xl  lg:overflow-visible lg:h-full lg:w-[1440px] lg:flex lg:justify-center relative z-10 ">
                <div className={`flex flex-col gap-32 lg:h-full lg:flex-row lg:translate-x-[1180px] lg:gap-10 ${style.testimonialContainer}`}>
                    {
                        testimonials.map(({imgMob, imgWeb, name, address},index)=>(
                            <article className={`rounded-xl overflow-hidden relative z-10 bg-white shadow-2xl lg:grid lg:grid-cols-2 lg:h-[560px] lg:w-[1085px] ${style.testimonial} `} key={index}>
                                <Image src={`${window.innerWidth <= 390? imgMob:imgWeb}`} height={800} width={800} alt="testimonial" className=" w-full h-full object-cover" />
                                <div className="p-6 flex flex-col gap-6 lg:px-[125px] lg:py-16 lg:gap-16">
                                    <img src="/assets/08_testimonials/quote.svg" alt="quote"  className="w-7 h-7 lg:w-12 lg:h-12"/>
                                    <p className="text-base font-light">I can't believe how Collect Your Shopping App has transformed my life! As a busy professional, I've always struggled to find the time to do my grocery shopping. But with this incredible app, I've found the perfect solution!</p>
                                    <div className="flex flex-col gap-2">
                                        <h3 className="text-base">{name}</h3>
                                        <p className="text-base text-[#a5a5a5]">{address}</p>
                                    </div>
                                </div>
                            </article>
                        ))
                    }
                </div>
            </div>
            <div className="relative z-10 flex  gap-3 justify-end py-10 lg:gap-4">
                <div className={`w-2 h-2 ${currentActiveIndex === 1? "bg-green":" bg-[#B9B9B9]"}  rounded-full lg:w-3 lg:h-3`}></div>
                <div className={`w-2 h-2 ${currentActiveIndex === 2? "bg-green":" bg-[#B9B9B9]"}  rounded-full lg:w-3 lg:h-3`}></div>
                <div className={`w-2 h-2 ${currentActiveIndex === 3? "bg-green":" bg-[#B9B9B9]"}  rounded-full lg:w-3 lg:h-3`}></div>
            </div>
        </div>
        <video src="/assets/08_testimonials/circleBot.mp4" autoPlay loop muted className={"absolute bottom-0 left-0 z-0 w-64 lg:w-96 " +style.botCircle}></video>
    </section>
  )
}

export default Testimonials
