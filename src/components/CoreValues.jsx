import { useEffect, useState } from 'react'
import { images } from '@/constants/images'
import ReactPlayer from 'react-player'
import CoreValuesCard from './CoreValuesCard'
import { useTranslation } from 'next-i18next'

const CoreValues = () => {
  const [hydrated, setHydrated] = useState(false)
  const { t } = useTranslation()

  useEffect(() => {
    setHydrated(true)
  }, [])

  return (
    <section
      id="core-values"
      aria-labelledby="values-title"
      className="mx-auto flex max-w-[90rem] items-center justify-center overflow-visible bg-white py-14 px-6"
    >
      <div className="h-full flex-1">
        <div className="mb-3 flex items-center md:mb-14  md:justify-center">
          <h1 className="text-3xl font-medium text-[#171717] sm:text-5xl lg:mx-12">
            {t('common:coreValues').split(' ')[0]}&nbsp;
            <span className="text-[#4CA154]">
              {t('common:coreValues').split(' ')[1]}
            </span>
            &nbsp;{t('common:coreValues').split(' ')[2]}
          </h1>
        </div>
        <div className="items-flex-start relative flex flex-col justify-between gap-4 sm:gap-10 md:flex-row md:items-center">
          <div className="flex flex-col gap-4 sm:gap-10">
            <CoreValuesCard
              imageUrl={images.innovative}
              title="common:innovativeTitle"
              description="common:innovativeDescription"
              isArrowRight={true}
            />
            <CoreValuesCard
              imageUrl={images.sustainable}
              title="common:sustainableTitle"
              description="common:sustainableDescription"
              className="lg:-translate-x-10 lg:transform"
              isArrowRight={true}
            />
            <CoreValuesCard
              imageUrl={images.inclusive}
              title="common:inclusivityTitle"
              description="common:inclusivityDescription"
              isArrowRight={true}
            />
          </div>
          <div className="absolute inset-0 hidden items-center justify-center lg:flex">
            <div className="h-[30rem] w-[30rem]">
              {hydrated && (
                <ReactPlayer
                  url={images.cysValues}
                  playing={true}
                  loop={true}
                  muted={true}
                  width="100%"
                  height="100%"
                />
              )}
            </div>
          </div>
          <div className="flex flex-col gap-4 overflow-visible sm:gap-10">
            <CoreValuesCard
              imageUrl={images.responsible}
              title="common:trustworthyTitle"
              description="common:trustworthyDescription"
              isArrowRight={false}
            />
            <CoreValuesCard
              imageUrl={images.adventurous}
              title="common:adventurousTitle"
              description="common:adventurousDescription"
              isArrowRight={false}
              className="lg:translate-x-10 lg:transform"
            />
            <CoreValuesCard
              imageUrl={images.positive}
              title="common:positiveTitle"
              description="common:positiveDescription"
              isArrowRight={false}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default CoreValues
