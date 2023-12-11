import Image from 'next/image'

import { images } from '@/constants/images'
import { Container } from '@/components/Container'
import { useTranslation } from 'next-i18next'

export default function Timeline({ activities }) {
  const { t } = useTranslation()

  return (
    <section
      id="hoe-werkt-het"
      aria-label="Features for investing all your money"
      className="relative h-full bg-green-600 py-0 pt-0"
    >
      <Container className="w-full flex-col items-start justify-start gap-2 overflow-hidden pt-0 lg:grid lg:grid-flow-row-dense lg:grid-cols-2 lg:gap-8">
        <div className="mx-auto flow-root max-w-3xl pl-4">
          <h2 className="font-display mt-14 text-4xl font-medium tracking-tight text-white  sm:text-4xl">
            {t('common:flowTitle')}
          </h2>
          <ul role="list" className="mb-8 mt-8">
            {activities.map((activityItem, activityItemIdx) => (
              <li key={activityItem.id}>
                <div className="relative pb-10">
                  <div className="relative flex items-start gap-x-6">
                    <>
                      {activityItemIdx < activities.length - 1 ? (
                        <span
                          className="absolute top-10 left-5 h-5/6 w-0.5 bg-white"
                          aria-hidden="true"
                        />
                      ) : (
                        <span
                          className="absolute top-9 left-5  hidden h-4/5 w-0.5"
                          aria-hidden="true"
                        />
                      )}

                      <div className="relative">
                        {
                          <div className="flex h-10 w-10 items-center justify-center">
                            {activityItem.icon}
                          </div>
                        }
                      </div>
                      <div className="min-w-0 flex-1">
                        <div>
                          <div className="text-xl font-medium">
                            <h3 className="font-display text-white">
                              {t(activityItem.title)}
                            </h3>
                          </div>
                        </div>
                        <div className="mt-2 text-base text-white">
                          <p>{t(activityItem.comment)}</p>
                        </div>
                      </div>
                    </>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="hidden lg:flex">
          <Image
            src={images.user}
            width={750}
            height={790}
            className=" max-h-none z-50 max-w-none object-contain"
          />
        </div>
      </Container>
      <div
        className="top-0 right-0 z-10 hidden h-full w-4/12 bg-[#EAEAEA] md:absolute md:block"
        style={{
          clipPath: 'polygon(50% 0, 100% 0, 100% 100%, 0% 100%)',
        }}
      />
    </section>
  )
}
