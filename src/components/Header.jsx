import { AnimatePresence, motion } from 'framer-motion'
import Image from 'next/image'
import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import Link from 'next/link'
import { NavLinks } from '@/components/NavLinks'
import { Popover } from '@headlessui/react'
import { images } from '@/constants/images'
import { useTranslation } from 'next-i18next'
import { useRouter } from 'next/router'

function MenuIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M5 6h14M5 18h14M5 12h14"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function ChevronUpIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M17 14l-5-5-5 5"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function MobileNavLink({ children, ...props }) {
  return (
    <Popover.Button
      as={Link}
      className="block text-base leading-7 tracking-tight text-gray-700"
      {...props}
    >
      {children}
    </Popover.Button>
  )
}

export function Header() {
  const { t, i18n } = useTranslation()

  const router = useRouter()

  const nl = i18n.language === 'nl' ? true : false
  return (
    <header >
      <nav className="bg-white ">
        <Container className="relative z-50 flex justify-between bg-white py-8">
          <div className="relative z-10 flex w-full items-center justify-between gap-1">
            <Link href="/" aria-label="Collect Your Shopping" className="lg:ml-8">
              <Image src={images.cysLogo} width={400} height={50} alt="CYS" />
            </Link>
            <div className="hidden lg:flex lg:gap-16 lg:flex-1 lg:justify-end lg:items-center">
              <NavLinks />
              <Popover>
                {({ open }) => (
                  <>
                    <Popover.Button
                      className="relative z-10 -m-2 inline-flex items-center rounded-lg stroke-gray-900 p-2  active:stroke-gray-900 [&:not(:focus-visible)]:focus:outline-none"
                      aria-label="Toggle site navigation"
                    >
                      {nl ? (
                        <div className="text-3xl"><img
                        src="https://flagcdn.com/h20/nl.png"
                        srcSet="https://flagcdn.com/h40/nl.png 2x,
                          https://flagcdn.com/h60/nl.png 3x"
                        height="20"
                        alt="Netherlands"/> </div>
                      ) : (
                        <div className="text-3xl"><img
                        src="https://flagcdn.com/h20/gb.png"
                        srcSet="https://flagcdn.com/h40/gb.png 2x,
                          https://flagcdn.com/h60/gb.png 3x"
                        height="20"
                        className='w-8 h-5'
                        alt="England"/></div>
                      )}
                    </Popover.Button>
                    <AnimatePresence initial={false}>
                      {open && (
                        <>
                          <Popover.Panel
                            static
                            as={motion.div}
                            className="r absolute inset-x-auto top-10 z-0 w-1/12 origin-top bg-gray-50 shadow-2xl shadow-gray-900/20"
                          >
                            <div className="flex-column gap-2">
                              <div>
                                <button
                                  className={`group flex w-full flex-row items-center gap-x-2  px-2 py-2 text-base font-normal ${
                                    nl ? '' : 'bg-gray-300'
                                  }`}
                                  onClick={() => i18n.changeLanguage('en')}
                                >
                                  <div className="text-2xl">🇬🇧</div>
                                  <p className="text-sm font-normal">English</p>
                                </button>
                                <button
                                  className={`group flex w-full flex-row items-center gap-x-2  px-2 py-2 text-base font-normal ${
                                    nl ? 'bg-gray-300' : ''
                                  }`}
                                  onClick={() => {
                                    i18n.changeLanguage('nl')
                                  }}
                                >
                                  <div className="text-2xl">🇳🇱</div>
                                  <p className="text-sm font-normal">Dutch</p>
                                </button>
                              </div>
                            </div>
                          </Popover.Panel>
                        </>
                      )}
                    </AnimatePresence>
                  </>
                )}
              </Popover>
            </div>
          </div>
          <div className="flex items-center gap-6">
            <Popover className="lg:hidden">
              {({ open }) => (
                <>
                  <Popover.Button
                    className="relative z-10 -m-2 inline-flex items-center rounded-lg stroke-gray-900 p-2 hover:bg-gray-200/50 hover:stroke-gray-600 active:stroke-gray-900 [&:not(:focus-visible)]:focus:outline-none"
                    aria-label="Toggle site navigation"
                  >
                    {({ open }) =>
                      open ? (
                        <ChevronUpIcon className="h-6 w-6" />
                      ) : (
                        <MenuIcon className="h-6 w-6" />
                      )
                    }
                  </Popover.Button>
                  <AnimatePresence initial={false}>
                    {open && (
                      <>
                        <Popover.Overlay
                          static
                          as={motion.div}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          className="fixed inset-0 z-0 bg-gray-300/60 backdrop-blur"
                        />
                        <Popover.Panel
                          static
                          as={motion.div}
                          initial={{ opacity: 0, y: -32 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{
                            opacity: 0,
                            y: -32,
                            transition: { duration: 0.2 },
                          }}
                          className="absolute inset-x-0 top-0 z-0 origin-top rounded-b-2xl bg-gray-50 px-6 pb-6 pt-32 shadow-2xl shadow-gray-900/20"
                        >
                          <div className="space-y-4">
                            <MobileNavLink href="#features">
                              {t('common:features')}
                            </MobileNavLink>
                            <MobileNavLink href="#voordelen">
                              {t('common:benefits')}
                            </MobileNavLink>
                            <MobileNavLink href="#hoe-het-werkt">
                              {t('common:howItWorks')}
                            </MobileNavLink>
                            <MobileNavLink href="#faq">
                              {' '}
                              {t('common:faq')}
                            </MobileNavLink>
                          </div>
                          <div className="flex">
                            {nl ? (
                              <Button
                                onClick={() => {
                                  i18n.changeLanguage('en')
                                }}
                                color="transparant"
                                className="flex items-center gap-2 px-0"
                              >
                                <div className="text-2xl">🇳🇱</div>
                                <p className="text-sm font-normal">Dutch</p>
                              </Button>
                            ) : (
                              <Button
                                color="transparant"
                                className="flex items-center gap-2 px-0"
                                onClick={() => {
                                  i18n.changeLanguage('nl')
                                }}
                              >
                                <div className="text-2xl">🇬🇧</div>
                                <p className="text-sm font-normal">English</p>
                              </Button>
                            )}
                          </div>
                          <div className="mt-8 flex flex-col gap-4">
                            <Button href="#cta" color={'cyan'}>
                              {t('common:signupNowText')}
                            </Button>
                          </div>
                        </Popover.Panel>
                      </>
                    )}
                  </AnimatePresence>
                </>
              )}
            </Popover>
          </div>
        </Container>
      </nav>
    </header>
  )
}
