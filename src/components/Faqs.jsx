import Image from 'next/image'
import { useState } from 'react'
import { images } from '@/constants/images'
import { motion, AnimatePresence } from 'framer-motion'
import { useTranslation } from 'next-i18next'

const faqs = [
  {
    question: 'common:questionCYSTitle',
    answer: 'common:questionCYSDescription',
  },
  {
    question: 'common:questionFastDeliverTitle',
    answer: 'common:questionFastDeliverDescription',
  },
  {
    question: 'common:questionForgotToAddTitle',
    answer: 'common:questionForgotToAddDescription',
  },
  {
    question: 'common:questionDeliveryCostsTitle',
    answer: 'common:questionDeliveryCostsDescription',
  },
]

const UpArrow = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth="2"
    stroke="currentColor"
    className="h-6 w-6"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M19 9l-7 7-7-7"
      style={{ stroke: '#02C756' }}
    />
  </svg>
)
const DownArrow = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth="2"
    stroke="currentColor"
    className="h-6 w-6"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M5 15l7-7 7 7"
      style={{ stroke: '#02C756' }}
    />
  </svg>
)
export function Faqs() {
  const [activeIndex, setActiveIndex] = useState(null)
  const { t, i18n } = useTranslation()
  const nl = i18n.language === 'nl' ? true : false
  return (
    <section
      id="faq"
      aria-labelledby="faqs-title"
      className="grid justify-center gap-y-5 pb-20 lg:grid-cols-2 lg:pb-0"
    >
      <img src={images.faqs} className="w-full object-fill" />
      <div className="flex flex-col justify-center px-5 pt-10 md:items-center md:px-0 lg:pt-0 ">
        <h2
          id="faqs-title"
          className="text-start text-4xl font-medium tracking-tight text-gray-900 md:w-8/12"
        >
          {nl ? (
            <>
              <span className="text-green-600">
                {t('common:frequentlyAskedQuestionTitle').split(' ')[0]}{' '}
              </span>
              <span>
                {t('common:frequentlyAskedQuestionTitle').split(' ')[1]}
              </span>
            </>
          ) : (
            <>
              <span className="text-green-600">
                {t('common:frequentlyAskedQuestionTitle').split(' ')[0]}{' '}
              </span>
              <span>
                {t('common:frequentlyAskedQuestionTitle').split(' ')[1]}{' '}
                {t('common:frequentlyAskedQuestionTitle').split(' ')[2]}
              </span>
            </>
          )}
        </h2>
        <p className="text-start text-lg text-black md:w-8/12">
          {t('common:frequentlyAskedQuestionDescription')}
        </p>
        <ul role="list" className="w-12/12  mt-8 md:w-8/12">
          {faqs.map((faq, faqIndex) => (
            <li
              key={faqIndex}
              className={` ${
                faqIndex === faqs.length - 1
                  ? 'pb-0 '
                  : 'border-b border-gray-200'
              } py-3`}
            >
              <div
                className="flex cursor-pointer items-start justify-between"
                onClick={() =>
                  setActiveIndex(activeIndex === faqIndex ? null : faqIndex)
                }
              >
                <div>
                  <h3 className="text-base font-semibold leading-6 text-gray-900">
                    {t(faq.question)}
                  </h3>
                </div>
                <div className="ml-4">
                  {activeIndex !== faqIndex ? <UpArrow /> : <DownArrow />}
                </div>
              </div>
              <AnimatePresence>
                {activeIndex === faqIndex && (
                  <motion.div
                    className="mt-3 w-full overflow-clip text-gray-500"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    {t(faq.answer)}
                  </motion.div>
                )}
              </AnimatePresence>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
