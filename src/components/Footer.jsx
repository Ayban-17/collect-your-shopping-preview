import { Container } from '@/components/Container'
import Image from 'next/image'
import { NavLinks } from '@/components/NavLinks'
import { images } from '@/constants/images'

export function Footer() {
  return (
    <footer className="border-t border-gray-200">
      <Container className="py-10">
        <div className="mb-10">
          <div className="flex flex-col items-center justify-between gap-8 text-black md:flex-row">
            <div className="mr-36 flex">
              <Image src={images.cysLogo} height={60} width={300} alt="CYS" />
            </div>
            <div className="flex gap-8">
              <NavLinks />
            </div>
            <div className="flex gap-x-5 text-sm text-gray-700">
              <a href="mailto:info@collectyourshopping.nl">
                info@collectyourshopping.nl
              </a>
              <a href="tel:+31850806798">+31 85 080 6798</a>
            </div>
          </div>
        </div>
        <div className="flex flex-col  border-t border-gray-200 py-2  md:pt-6">
          <p className="mt-6 text-sm text-gray-500 md:mt-0">
            &copy; Copyright {new Date().getFullYear()}. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  )
}
