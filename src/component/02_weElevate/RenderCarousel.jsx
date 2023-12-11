import Image from "next/image"
import { useAutoAnimate } from '@formkit/auto-animate/react';

const RenderCarousel = ({carouselData}) => {
    const [parent] = useAutoAnimate({ duration: 800, enterAnimation: "slide-in-left" });
  return (
    <div className="flex gap-4 transition-all duration-1000">
        {
            carouselData.map(({src, alt, title}, index)=>(
                <article  key={index} className="relative py-8 " >
                    <Image src={src} alt={alt} width={500} height={600} className="h-44 w-36 rounded-3xl lg:w-40 lg:h-48"/>
                    <h1 className="text-lg leading-6 font-medium text-white  absolute top-11 left-4 capitalize lg:text-sm lg:leading-4 lg:pr-10 lg:top-12">{title}</h1>
                </article>
            ))
        }
    </div>
  )
}

export default RenderCarousel
