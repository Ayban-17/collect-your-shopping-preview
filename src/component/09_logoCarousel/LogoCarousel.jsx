import Image from "next/image";
import styles from "./logoCarousel.module.css"

const LogoCarousel = () => {

  return (
    <section className="flex justify-center bg-grey">
        <div className="max-w-[1440px] py-10 lg:h-96 flex flex-col items-center gap-4">
            <h1 className="text-[29px] font-medium mb-6 lg:text-4xl lg:mb-0 lg:tracking-wider">As Featured In</h1>
            <div className={styles.slider}>
                <div className={styles.sliderTrack}>
                    <div className={styles.slide}>
                        <Image src="/assets/09_logoCarousel/REWE.png" width={600} height={600} alt="logo" className="w-full h-full"/>
                    </div>
                    <div className={styles.slide}>
                        <Image src="/assets/09_logoCarousel/EkoPlaza.png" width={600} height={600} alt="logo" className="w-full h-full"/>
                    </div>
                    <div className={styles.slide}>
                        <Image src="/assets/09_logoCarousel/LIDL.png" width={600} height={600} alt="logo" className="w-full h-full"/>
                    </div>
                    <div className={styles.slide}>
                        <Image src="/assets/09_logoCarousel/7Eleven.png" width={600} height={600} alt="logo" className="w-full h-full"/>
                    </div>
                    <div className={styles.slide}>
                        <Image src="/assets/09_logoCarousel/Tesco.png" width={600} height={600} alt="logo" className="w-full h-full"/>
                    </div>
                    <div className={styles.slide}>
                        <Image src="/assets/09_logoCarousel/AlbertHeijn.png" width={600} height={600} alt="logo" className="w-full h-full"/>
                    </div>
                    <div className={styles.slide}>
                        <Image src="/assets/09_logoCarousel/Kaufland.png" width={600} height={600} alt="logo" className="w-full h-full"/>
                    </div>
                    <div className={styles.slide}>
                        <Image src="/assets/09_logoCarousel/REWE.png" width={600} height={600} alt="logo" className="w-full h-full"/>
                    </div>
                    <div className={styles.slide}>
                        <Image src="/assets/09_logoCarousel/EkoPlaza.png" width={600} height={600} alt="logo" className="w-full h-full"/>
                    </div>
                    <div className={styles.slide}>
                        <Image src="/assets/09_logoCarousel/LIDL.png" width={600} height={600} alt="logo" className="w-full h-full"/>
                    </div>
                    <div className={styles.slide}>
                        <Image src="/assets/09_logoCarousel/7Eleven.png" width={600} height={600} alt="logo" className="w-full h-full"/>
                    </div>
                    <div className={styles.slide}>
                        <Image src="/assets/09_logoCarousel/Tesco.png" width={600} height={600} alt="logo" className="w-full h-full"/>
                    </div>
                    <div className={styles.slide}>
                        <Image src="/assets/09_logoCarousel/AlbertHeijn.png" width={600} height={600} alt="logo" className="w-full h-full"/>
                    </div>
                    <div className={styles.slide}>
                        <Image src="/assets/09_logoCarousel/Kaufland.png" width={600} height={600} alt="logo" className="w-full h-full"/>
                    </div>
                    <div className={styles.slide}>
                        <Image src="/assets/09_logoCarousel/REWE.png" width={600} height={600} alt="logo" className="w-full h-full"/>
                    </div>
                    <div className={styles.slide}>
                        <Image src="/assets/09_logoCarousel/EkoPlaza.png" width={600} height={600} alt="logo" className="w-full h-full"/>
                    </div>
                    <div className={styles.slide}>
                        <Image src="/assets/09_logoCarousel/LIDL.png" width={600} height={600} alt="logo" className="w-full h-full"/>
                    </div>
                    <div className={styles.slide}>
                        <Image src="/assets/09_logoCarousel/7Eleven.png" width={600} height={600} alt="logo" className="w-full h-full"/>
                    </div>
                    <div className={styles.slide}>
                        <Image src="/assets/09_logoCarousel/Tesco.png" width={600} height={600} alt="logo" className="w-full h-full"/>
                    </div>
                    <div className={styles.slide}>
                        <Image src="/assets/09_logoCarousel/AlbertHeijn.png" width={600} height={600} alt="logo" className="w-full h-full"/>
                    </div>
                    <div className={styles.slide}>
                        <Image src="/assets/09_logoCarousel/Kaufland.png" width={600} height={600} alt="logo" className="w-full h-full"/>
                    </div>
                    <div className={styles.slide}>
                        <Image src="/assets/09_logoCarousel/REWE.png" width={600} height={600} alt="logo" className="w-full h-full"/>
                    </div>
                    <div className={styles.slide}>
                        <Image src="/assets/09_logoCarousel/EkoPlaza.png" width={600} height={600} alt="logo" className="w-full h-full"/>
                    </div>
                    <div className={styles.slide}>
                        <Image src="/assets/09_logoCarousel/LIDL.png" width={600} height={600} alt="logo" className="w-full h-full"/>
                    </div>
                    <div className={styles.slide}>
                        <Image src="/assets/09_logoCarousel/7Eleven.png" width={600} height={600} alt="logo" className="w-full h-full"/>
                    </div>
                    <div className={styles.slide}>
                        <Image src="/assets/09_logoCarousel/Tesco.png" width={600} height={600} alt="logo" className="w-full h-full"/>
                    </div>
                    <div className={styles.slide}>
                        <Image src="/assets/09_logoCarousel/AlbertHeijn.png" width={600} height={600} alt="logo" className="w-full h-full"/>
                    </div>
                    <div className={styles.slide}>
                        <Image src="/assets/09_logoCarousel/Kaufland.png" width={600} height={600} alt="logo" className="w-full h-full"/>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default LogoCarousel
