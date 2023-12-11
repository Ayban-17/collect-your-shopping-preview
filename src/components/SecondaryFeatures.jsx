import { Container } from '@/components/Container'
import { images } from '@/constants/images'
import Image from 'next/image'
import { useTranslation } from 'next-i18next'

const features = [
  {
    name: 'common:featureConvenienceTitle',
    description: 'common:featureConvenienceDescription',
    icon: images.convenience,
  },
  {
    name: 'common:featureEarnMoneyTitle',
    description: 'common:featureEarnMoneyDescription',
    icon: images.earn,
  },
  {
    name: 'common:featurePickupDeliverTitle',
    description: 'common:featurePickupDeliverDescription',
    icon: images.variety,
  },
]

export function SecondaryFeatures() {
  const { t } = useTranslation()
  return (
    <section
      id="voordelen"
      aria-label="Features for building a portfolio"
      className="py-20"
    >
      <Container>
        <div className="max-w-2xl sm:text-center">
          <h2 className="text-left text-3xl font-medium tracking-tight text-gray-900">
            {t('common:featureTitle')}
          </h2>
        </div>
        <ul
          role="list"
          className="mx-auto mt-6 grid max-w-2xl grid-cols-1 gap-6 text-sm sm:grid-cols-2 md:gap-y-10 lg:max-w-none lg:grid-cols-3"
        >
          {features.map((feature) => (
            <li
              key={feature.name}
              className="cursor-pointer rounded-2xl border border-gray-200  p-8  transition-all duration-300 ease-in-out hover:-translate-y-1 hover:scale-105 hover:bg-[#ddddd9]"
            >
              <Image
                src={feature.icon}
                width={46}
                height={46}
                alt={feature.name}
              />
              <h3 className="mt-6 text-lg font-semibold text-gray-900">
                {t(feature.name)}
              </h3>
              <p className="mt-2 text-sm text-gray-700 md:text-base">
                {t(feature.description)}
              </p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
