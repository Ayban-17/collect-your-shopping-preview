import { AnimatePresence, motion } from 'framer-motion'
import Link from 'next/link'
import { useState } from 'react'
import { useTranslation } from 'next-i18next'

export function NavLinks() {
  let [hoveredIndex, setHoveredIndex] = useState(null)
  const { t } = useTranslation()

  return [
    [t('common:features'), '#features'],
    [t('common:benefits'), '#voordelen'],
    [t('common:howItWorks'), '#hoe-werkt-het'],
    [t('common:faq'), '#faq'],
  ].map(([label, href], index) => (
    <Link
      key={label}
      href={href}
      className="  rounded-lg  py-2 text-base text-gray-700 hover:text-green-600"
    >
      <AnimatePresence>
        {hoveredIndex === index && (
          <motion.span
            className="absolute inset-0 rounded-lg bg-gray-100"
            layoutId="hoverBackground"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 0.15 } }}
            exit={{
              opacity: 0,
              transition: { duration: 0.15, delay: 0.2 },
            }}
          />
        )}
      </AnimatePresence>
      <span className="relative z-10">{label}</span>
    </Link>
  ))
}
