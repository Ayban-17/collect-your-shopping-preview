import { Container } from '@/components/Container'
import Image from 'next/image'
import { useId } from 'react'
import { images } from '@/constants/images'
import { useTranslation } from 'next-i18next'
import { Button } from './Button'

// function BackgroundIllustration(props) {
//   let id = useId()

//   return (
//     <div {...props}>
//       <svg
//         viewBox="0 0 1026 1026"
//         fill="none"
//         aria-hidden="true"
//         className="absolute inset-0 h-full w-full animate-spin-slow"
//       >
//         <path
//           d="M1025 513c0 282.77-229.23 512-512 512S1 795.77 1 513 230.23 1 513 1s512 229.23 512 512Z"
//           stroke="#D4D4D4"
//           strokeOpacity="0.7"
//         />
//         <path
//           d="M513 1025C230.23 1025 1 795.77 1 513"
//           stroke={`url(#${id}-gradient-1)`}
//           strokeLinecap="round"
//         />
//         <defs>
//           <linearGradient
//             id={`${id}-gradient-1`}
//             x1="1"
//             y1="513"
//             x2="1"
//             y2="1025"
//             gradientUnits="userSpaceOnUse"
//           >
//             <stop stopColor="#06b6d4" />
//             <stop offset="1" stopColor="#06b6d4" stopOpacity="0" />
//           </linearGradient>
//         </defs>
//       </svg>
//       <svg
//         viewBox="0 0 1026 1026"
//         fill="none"
//         aria-hidden="true"
//         className="absolute inset-0 h-full w-full animate-spin-reverse-slower"
//       >
//         <path
//           d="M913 513c0 220.914-179.086 400-400 400S113 733.914 113 513s179.086-400 400-400 400 179.086 400 400Z"
//           stroke="#D4D4D4"
//           strokeOpacity="0.7"
//         />
//         <path
//           d="M913 513c0 220.914-179.086 400-400 400"
//           stroke={`url(#${id}-gradient-2)`}
//           strokeLinecap="round"
//         />
//         <defs>
//           <linearGradient
//             id={`${id}-gradient-2`}
//             x1="913"
//             y1="513"
//             x2="913"
//             y2="913"
//             gradientUnits="userSpaceOnUse"
//           >
//             <stop stopColor="#06b6d4" />
//             <stop offset="1" stopColor="#06b6d4" stopOpacity="0" />
//           </linearGradient>
//         </defs>
//       </svg>
//     </div>
//   )
// }

export function Hero() {
  const { t, i18n } = useTranslation()
  const nl = i18n.language === 'nl' ? true : false
  return (
    <div className=" bg-white lg:pt-3 ">
      <Container>
        <div className="grid lg:grid-cols-2">
          <div className="z-10 mx-auto mt-16">
            <h1
              className={`text-3xl font-medium capitalize racking-tight text-green-600 md:text-5xl  md:mb-1`}
            >
              {t('common:convenienceDelivered')}
            </h1>
            <h1 className="text-3xl font-medium tracking-tight capitalize text-orange-500 md:text-5xl md:mb-8">
              {t('common:straigntToYourDoor')}
            </h1>
            <p className="mt-6 text-base max-w-lg text-gray-600 md:leading-loose">
              <span className="font-bold">{t('common:boldTitle')}</span>{' '}
              {t('common:makeItEasyToShop')}
            </p>
            <Button
              color="cyan"
              className="lg:mt-8 lg:rounded-full lg:px-14 lg:py-3"
              href="#cta"
            >
              {t('common:downloadNowText')}
            </Button>
          </div>
          <div className="relative lg:flex lg:items-end lg:justify-end">
            {/* <img src="/assets/hero/rider.png" alt="vector" className='h-96 '/> */}
            {/* <img src="/assets/hero/phone.gif" alt="phone" className='-m-2 '/> */}
            <Image src="/assets/hero/rider.png" alt="rider" width={480}  height={300} className='absolute z-0 -left-20 -bottom-24'/>
            <Image src="/assets/hero/phone.gif" alt="phone" width={290}  height={50}  className='z-10'/>
            {/* <BackgroundIllustration className="absolute left-1/2 top-4 h-[1043px] w-[1043px] -translate-x-1/3 stroke-gray-300/70 sm:top-16 sm:-translate-x-1/2 lg:-top-16 lg:ml-12 xl:-top-14 xl:ml-0" /> */}
            {/* <div className="flex justify-center px-9 sm:mx-0 lg:absolute lg:-top-10 lg:-bottom-20  lg:h-auto  xl:-bottom-32">
              <img
                src={images.appMobilePhysical}
                width={400}
                height={600}
                className="relative z-10"
              />
            </div> */}
          </div>
        </div>
      </Container>
    </div>
  )
}
