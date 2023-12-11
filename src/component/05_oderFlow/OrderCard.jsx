import Image from "next/image"
const OrderCard = ({ title, desc, mobilePic, webPic, number, order, step }) => {
    const colors = ['#008C3C', '#65B444', '#7BC05E', '#9CD470']

    const stylings = [
      {
        mobileImg: 'h-24 w-24 border-4',
        arrowImg: 'h-6 w-4 md:h-[60px] md:w-10 md:-mt-4',
        webImg: 'h-32 w-32 lg:h-40 lg:w-40 border-[5px] lg:border-[6px]',
        outsideBorder: 'border-[14px] md:border-[20px] md:border-[24px]',
        step: 'text-sm md:text-lg lg:text-xl',
        title: 'md:text-2xl lg:text-3xl',
        desc: 'text-[9.5px] md:text-sm lg:text-[18.5px] lg:leading-7 lg:font-light',
        textContainer:
          ' border-4 md:border-8 w-[16rem] md:w-[24rem] lg:w-[28rem] p-5 gap-2 md:gap-3 lg:gap-4 rounded-xl md:p-6 lg:p-8 md:rounded-2xl lg:rounded-3xl lg:p-12 md:-mt-4 ',
        position: 'bottom-0 right-[5%] md:bottom-[10%] md:right-0 ',
      },
      {
        mobileImg: ' h-8 w-8 border-[1.2px] ',
        arrowImg: 'h-3 w-1.5 md:h-[28px] md:w-8 md:-mt-1',
        webImg: 'h-24 w-24 border-[3px]',
        outsideBorder: 'border-[4px] md:border-[12px]',
        step: 'text-[4px] md:text-xs lg:text-sm',
        title: 'text-[5px] md:text-base lg:text-lg',
        desc: 'text-[3px] md:text-[10px]',
        textContainer:
          'border-2 w-[5.5rem] md:w-[17rem] p-2 gap-[4px] md:p-6 rounded-md md:border-4 md:rounded-xl md:-mt-[8px] ',
        position: 'bottom-[50%] left-[5%] md:bottom-[30%] md:left-[10%] ',
      },
      {
        mobileImg: 'h-5 w-5 border-[1px]',
        arrowImg: 'h-[7px] w-[4.8px] md:h-[24px] md:w-7 md:-mt-1',
        webImg: 'h-14 w-14 border-[2px] ',
        outsideBorder: 'border-[3.6px] md:border-[9px]',
        step: 'text-[2.5px] md:text-[5px]',
        title: 'text-[3px] md:text-[10px]',
        desc: 'text-[2px] md:text-[5.5px]',
        textContainer:
          'border-[1.2px] w-[3.5rem] md:w-[10rem] p-[4.8px] md:p-4 md:gap-[4px] md:border-[3px] rounded-sm md:rounded-md md:-mt-[6px]',
        position: 'top-[3%] left-[45%] md:top-[1%] md:left-[42%] ',
      },
      {
        mobileImg: 'h-3 w-3 border-[1px]',
        arrowImg: 'h-[6px] w-[4.3px] md:h-[18px] md:w-5 md:-mt-1',
        webImg: 'h-12 w-12 border-[1.5px]',
        outsideBorder: 'border-[2px] md:border-[6px]',
        step: 'text-[2px] md:text-[4px]',
        title: 'text-[2.5px] md:text-[8px]',
        desc: 'text-[1.2px] md:text-[4.2px]',
        textContainer:
          'border-[1px] w-[2.5rem] md:w-[5rem] md:w-[7rem] p-1 md:p-2.5  md:gap-[3px] md:border-[3px] rounded-sm md:rounded-md ',
        position: 'top-0 left-[5%] md:-top-12 md:left-0',
      },
    ]

  
    if (order < 0) return <></>
  
    return (
         <div className={ 'absolute flex flex-col items-center ' + stylings[order].position + (order < 0 && 'hidden ')}>
          <div className="z-10 flex flex-col items-center ">
            <div style={{ borderColor: colors[number] }} className={`flex w-max rounded-full ` + stylings[order].outsideBorder} >
              <Image className={' aspect-square rounded-full border-white object-cover object-center md:hidden ' + stylings[order].mobileImg} src={mobilePic} alt="steps" width={250} height={250}/>
              <Image className={' hidden aspect-square rounded-full border-white object-cover object-center md:flex ' + stylings[order].webImg} alt="steps" src={webPic} width={250} height={250}/>
            </div>
            <svg className={stylings[order].arrowImg} viewBox="0 0 15 33" fill={colors[number]} xmlns="http://www.w3.org/2000/svg">
              <path d="M7.51172 19.1022C3.82952 19.1022 0.844504 22.0872 0.844504 25.7694C0.844504 29.4516 3.82952 32.4366 7.51172 32.4366C11.1939 32.4366 14.1789 29.4516 14.1789 25.7694C14.1789 22.0872 11.1939 19.1022 7.51172 19.1022ZM6.26162 0.267334L6.26161 25.7694L8.76182 25.7694L8.76182 0.267334L6.26162 0.267334Z" />
            </svg>
          </div>
  
          <div className={ 'flex flex-col items-center border-2 border-[#00000033] bg-white shadow-2xl ' + stylings[order].textContainer }>
            <div className="flex flex-col items-center">
              <h2 className={'text-[#171717] ' + stylings[order].step}> {step} {number + 1} </h2>
              <h1 style={{ color: colors[number] }} className={'font-medium ' + stylings[order].title} > {title} </h1>
            </div>
            <p className={'text-center text-[#171717] ' + stylings[order].desc}> {desc} </p>
          </div>
        </div>
    )
  }

  export default OrderCard;