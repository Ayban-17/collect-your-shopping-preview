import Image from "next/image"
import Question from "./Question"
import { useEffect, useState } from "react"


const Faqs = ({frequentlyTitle, askedQuestionsTitle, frequentlyAskedQuestionDescription, faqs}) => {
  return (
    <section className="flex flex-col items-center" id="faq">
        <img src="/assets/10_faqs/curve.png" alt="faq" className="w-full"/>
        <div className="max-w-[1440px] px-8 py-10 lg:grid lg:grid-cols-2 lg:grid-rows-8 lg:pt-52 lg:pb-32 lg:relative">
            <div className="lg:col-start-2 lg:flex lg:flex-col lg:-mt-[35px]">
                <h1 className="text-[30px] capitalize leading-9 tracking-wide font-medium lg:normal-case lg:text-4xl lg:mb-1 lg:mt-8 lg:tracking-wider"><span className="text-green">{frequentlyTitle}</span> {askedQuestionsTitle}</h1>
                <h2 className="text-[15.5px] tracking-wide mb-8 mt-4 lg:mt-0 lg:text-[20px] lg:font-light lg:tracking-tighter ">{frequentlyAskedQuestionDescription}</h2>
            </div>

            <div className=" rounded-2xl mb-8 overflow-hidden lg:rounded-3xl lg:col-start-1 lg:row-span-2 lg:row-start-1 lg:w-[500px] lg:h-[500px]">
                <Image src="/assets/10_faqs/faqs.png" height={600} width={600} alt="faq" className="lg:hidden"/>
                <Image src="/assets/10_faqs/faqsWeb.jpg" height={600} width={600} alt="faq" className="hidden rounded-2xl mb-8 lg:h-[600px] lg:w-600px] lg:block lg:col-start-1 lg:row-span-2 lg:row-start-1 lg:object-cover"/>
            </div>

            <div className="lg:flex lg:flex-col lg:gap-2 lg:absolute lg:left-1/2 lg:top-80 lg:h-[390px] overflow-hidden">
                {faqs.map(({question, answer}, index)=>(
                        <Question question={question} answer={answer} key={index}/>
                ))}
            </div>   
        </div>
    </section>
  )
}

export default Faqs
