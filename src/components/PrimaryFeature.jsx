import { images } from '@/constants/images'
import Image from 'next/image'
import { Container } from '@/components/Container'
import { useTranslation } from 'next-i18next'

const PrimaryFeature = () => {
  const { t } = useTranslation()
  const features = [
    {
      name: 'common:liveTrackingTitle',
      description: 'common:liveTrackingDescription',
      icon: images.product,
    },
    {
      name: 'common:wideSectionTitle',
      description: 'common:wideSectionDescription',
      icon: images.basket,
    },
    {
      name: 'common:deliveredInMinutesTitle',
      description: 'common:deliveredInMinutesDescription',
      icon: images.deliverIcon,
    },
  ]

  return (
    <section
      id="features"
      aria-label="Features for investing all your money"
      className=" bg-white pb-4 md:pb-0"
    >
      <div
        style={{
          clipPath: 'polygon(0 15%, 100% 0, 100% 100%, 0% 100%)',
        }}
        className="bg-[#EAEAEA] py-24"
      >
        <Container className="mt-14 md:mt-20">
          <div className="grid items-center justify-between gap-8 lg:grid-cols-12 lg:gap-16 xl:gap-28">
            <div className="z-20 col-span-6">
              <img
                src={images.deliveryGuy}
                width={950}
                height={767}
                className="lg:-ml-16 lg:max-w-none z-40 "
              />
            </div>
            <ul className="col-span-6 grid gap-y-4">
              {features.map((feature) => (
                <li
                  className="z-10 cursor-pointer rounded-2xl  bg-white px-6 py-10"
                  key={feature.name}
                >
                  <h3 className="mb-2 text-lg font-semibold text-green-600">
                    <div className="text-left">{t(feature.name)}</div>
                  </h3>
                  <div className="flex items-start gap-x-16">
                    <p className="text-sm text-gray-700 md:text-base">
                      {t(feature.description)}
                    </p>
                    <Image
                      src={feature.icon}
                      width={40}
                      height={40}
                      className="max-w-none"
                      alt="Feature"
                    />
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </div>
    </section>
  )
}

export default PrimaryFeature
