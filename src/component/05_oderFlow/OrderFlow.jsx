import useButton from '@/hooks/useButton'
import { useEffect, useState } from 'react'
import Image from 'next/image'
import { ButtonGroup } from '@/component/shared/Button'
import OrderCard from './OrderCard'
//NOTE START CREATING FROM FOOTER AS IT IS THE EASIEST AMONG THE REMAINDER COMPONENTS
const OrderFlow = ({orderFlowTitle, orderFlowDescription, orderStep, orderPlacementTitle, orderPlacementDescription, orderProcessingTitle, orderProcessingDescription, orderDeliveryTitle, orderDeliveryDescription, orderCompletionTitle, orderCompletionDescription}) => {
  const [animate, setAnimate] = useState(false); 
  const infoList = [
    {
      title: orderPlacementTitle,
      desc: orderPlacementDescription,
      webPic: '/assets/05_orderFlow/step1.png',
      mobilePic: '/assets/05_orderFlow/step1.png',
      mobileBg: '/assets/05_orderFlow/road1&3.png',
      webBg: '/assets/05_orderFlow/road_1.png',
    },
    {
      title: orderProcessingTitle,
      desc: orderProcessingDescription,
      webPic: '/assets/05_orderFlow/step2.png',
      mobilePic: '/assets/05_orderFlow/step2.png',
      mobileBg: '/assets/05_orderFlow/road2&4.png',
      webBg: '/assets/05_orderFlow/road_2.png',
    },
    {
      title: orderDeliveryTitle,
      desc: orderDeliveryDescription,
      webPic: '/assets/05_orderFlow/step3.png',
      mobilePic: '/assets/05_orderFlow/step3.png',
      mobileBg: '/assets/05_orderFlow/road1&3.png',
      webBg: '/assets/05_orderFlow/road_3.png',
    },
    {
      title: orderCompletionTitle,
      desc: orderCompletionDescription,
      webPic: '/assets/05_orderFlow/step4.png',
      mobilePic: '/assets/05_orderFlow/step4.png',
      mobileBg: '/assets/05_orderFlow/road2&4.png',
      webBg: '/assets/05_orderFlow/road_4.png',
    },
  ]
  const { currentlySelected, next, prev, changeCurrent } = useButton(
    infoList.length
  )
  const [currentBg, setCurrentBg] = useState('')

  useEffect(() => {
    if (typeof window !== 'undefined') {
      if (window.innerWidth > 768) {
        setCurrentBg(infoList[currentlySelected].webBg)
      } else {
        setCurrentBg(infoList[currentlySelected].mobileBg)
      }
    }
    setAnimate(true)
  }, [currentlySelected])



  return (
    <section className="flex justify-center bg-[#EAEAEA] px-4 py-10 lg:py-20">
      <div className="flex max-w-[1440px]  flex-col gap-16 bg-contain bg-bottom bg-no-repeat ">
        <div className="flex flex-col items-center gap-4 lg:gap-8">
          <h1 className="text-3xl font-medium tracking-tight md:text-5xl md:tracking-wider">
            {orderFlowTitle}
          </h1>
          <p className="px-16 leading-7 text-center text-[#171717]">
            {orderFlowDescription}
          </p>
        </div>
        <div className="flex flex-col gap-16 md:relative md:gap-0 lg:w-[1200px] ">
          <div className={`relative lg:w-full`}>
            <Image width={768} height={1000} alt="road" className={`relative  w-full object-cover  object-center md:hidden `} src={infoList[currentlySelected].mobileBg} />
            <Image width={1500} height={750} alt="road" className={`relative hidden w-full object-cover object-center md:block `} src={infoList[currentlySelected].webBg} />
            
              {infoList.map((eachInfo, index) => (
                <article className={``} key={eachInfo.title}>
                  <OrderCard
                    {...eachInfo}
                    number={index}
                    step={orderStep}
                    order={index - currentlySelected}
                  />
                 </article>
              ))}
           
            
          </div>

          <div className="bottom-[5%] left-[5%] flex gap-5 self-center md:absolute md:self-start" onClick={()=>setAnimate(!animate)}>
            <ButtonGroup
              navigation="number"
              list={infoList}
              {...{ prev, next, changeCurrent, currentlySelected }}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default OrderFlow
