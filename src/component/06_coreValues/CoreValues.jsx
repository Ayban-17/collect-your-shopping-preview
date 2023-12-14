import { useEffect, useState } from "react"

const CoreValues = () => {
  return (
    <section className="lg:flex lg:flex-col lg:items-center">
        <img src={`${window.innerWidth <= 390? "/assets/06_coreValues/mobileBgTop.png":"/assets/06_coreValues/bgTop.png"}`} alt="bg top" className="w-full" />
            <div className="max-w-[1440px] -translate-x-[250px] lg:flex lg:justify-center lg:py-10 lg:translate-x-0">
                <div className="w-[600px] ml-10 lg:w-[1100px] animate-slide-in lg:animate-none" >
                    <video src={`${window.innerWidth <= 390? "/assets/06_coreValues/ourValuesMobile.mp4":"/assets/06_coreValues/coreValues.mp4"}`} loop muted autoPlay></video>
                </div>
            </div>
        <img src={`${window.innerWidth <= 390? "/assets/06_coreValues/mobileBgBot.png":"/assets/06_coreValues/bgBot.png"}`} alt="bg top" className="w-full"/>
    </section>
  )
}

export default CoreValues
