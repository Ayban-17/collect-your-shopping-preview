import { useState } from 'react'
import axios from 'axios'
import { Button } from './Button'
import { Container } from '@/components/Container'
import { toast } from 'react-toastify'
import { useTranslation } from 'next-i18next'

export function CallToAction() {
  const [email, setEmail] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')
  const { t } = useTranslation()

  let validEmail = new RegExp(
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
  )

  const notify = () =>
    toast.success('You have been added to the waitlist!', {
      position: 'bottom-right',
      theme: 'colored',
    })

  const onSubmitHandler = async (e) => {
    try {
      setIsLoading(true)

      if (!validEmail.test(email)) {
        setError('Please enter a valid email address.')
        setIsLoading(false)
        return
      }

      const data = {
        contacts: [
          {
            email: email,
          },
        ],
      }

      await axios.post(`api/contact/add_recipients`, data)
      setIsLoading(false)
      if (error) setError('')
      setEmail('')
      notify()
    } catch (error) {
      console.log('hit')
      setIsLoading(false)
      setError('Something went wrong. Please try again later.')
    }
  }
  return (
    <section id="cta" className="overflow-hidden bg-[#EAEAEA] py-12 lg:py-28">
      <Container className="flex justify-between">
        <div className="flex w-full flex-col justify-between gap-y-5 md:flex-row">
          <h2 className="text-3xl font-medium tracking-tight text-gray-900 md:justify-end md:text-4xl">
            {t('common:signupForTheWaitList')}
          </h2>
          <div className=" flex flex-col gap-y-5 md:flex-row md:gap-x-5 md:gap-y-0">
            <div className="flex flex-col">
              <input
                className="rounded-md border-none px-2"
                type="email"
                value={email}
                placeholder="your@email.com"
                onChange={(e) => setEmail(e.target.value)}
              />
              <p className="text-sm text-red-500">{error}</p>
            </div>

            <Button
              color="cyan"
              className={['flex h-10 items-center text-base']}
              onClick={() => onSubmitHandler()}
            >
              {isLoading && (
                <svg
                  className="-ml-1 mr-3 h-5 w-5 animate-spin text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    stroke-width="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
              )}
              {t('common:signupNowText')}
            </Button>
          </div>
        </div>
      </Container>
    </section>
  )
}
