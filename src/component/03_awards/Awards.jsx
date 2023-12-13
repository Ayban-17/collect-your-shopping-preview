import Image from "next/image"

const Awards = ({starsText, mobileUxAwardText, featuredByAppleText}) => {
  return (
    <section className="lg:flex lg:flex-col lg:items-center ">
      <Image src="/assets/03_awards/bg_awards.png" alt="gifs" height={600} width={500} className="w-full"/>
        <div className="max-w-[1440px] flex justify-center gap-8 px-6 -mt-10 lg:justify-center lg:gap-44 lg:w-full lg:-mt-36">
          <div className="flex flex-col  w-32 items-center lg:w-44 ">
            <Image src="/assets/03_awards/stars.gif" alt="gifs" height={600} width={500} className="w-20 h-10 lg:w-40 lg:h-20"/>
            <p className="text-[10px] font-medium text-center lg:text-[19px] ">{starsText}</p>
          </div>
          <div className="flex flex-col  w-32 items-center lg:w-44 ">
            <Image src="/assets/03_awards/Mobile_Ux.gif" alt="gifs" height={600} width={500} className="w-20 h-10 lg:w-[130px] lg:h-20"/>
            <p className="text-[10px] font-medium text-center lg:text-xl ">{mobileUxAwardText}</p>
          </div>
          <div className="flex flex-col  w-32 items-center lg:w-56 ">
            <Image src="/assets/03_awards/feather_white_bg.gif" alt="gifs" height={600} width={500} className="w-10 h-10 lg:w-20 lg:h-20"/>
            <p className="text-[10px] font-medium text-center lg:text-xl  ">{featuredByAppleText}</p>
          </div>
        </div>
    </section>
  )
}

export default Awards
