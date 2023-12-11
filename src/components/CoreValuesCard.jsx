import Image from 'next/image'
import { useTranslation } from 'next-i18next'

const CoreValuesCard = ({
  imageUrl,
  title,
  description,
  isArrowRight = true,
  className = '',
}) => {
  const { t } = useTranslation()
  return (
    <div
      className={`border-gray shadow-3 relative z-10 flex rounded-lg border-2 bg-white py-4 px-4 sm:py-6 md:mx-6  lg:w-[28rem] ${className}  `}
    >
      <div className="mr-4 border-r-2 pr-4">
        <div className="rounded-full bg-[#E4FFEE] p-4">
          <Image
            src={imageUrl}
            width={40}
            height={40}
            className="max-w-none"
            alt="Trustworthy"
          />
        </div>
      </div>
      <div>
        <h1 className="text-xl font-semibold text-[#4CA154]">{t(title)}</h1>
        <p>{t(description)}</p>
      </div>
      {isArrowRight ? (
        <div className="absolute inset-y-0 -right-5 hidden items-center border-t-0 lg:flex">
          <div
            className="h-5 w-5 bg-[#4CA154]"
            style={{ clipPath: 'polygon(100% 50%, 0 0, 0 100%)' }}
          />
        </div>
      ) : (
        <div className="absolute inset-y-0 -left-5 hidden items-center border-t-0 lg:flex">
          <div
            className="h-5 w-5 bg-[#4CA154]"
            style={{ clipPath: 'polygon(0 50%, 100% 0, 100% 100%)' }}
          />
        </div>
      )}
    </div>
  )
}

export default CoreValuesCard
