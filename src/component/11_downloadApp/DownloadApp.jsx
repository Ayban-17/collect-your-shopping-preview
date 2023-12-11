import { DownloadAppButton } from "../shared/Button"


const DownloadApp = () => {
  return (
    <section className="bg-[#EAEAEA] lg:flex lg:justify-center">
        <div className="max-w-[1440px] lg:h-[350px] lg:grid lg:grid-cols-2 lg:grid-rows-[100px_100px] lg:px-20">
            <video src="/assets/11_downloadApp/rider.mp4" alt="rider" autoPlay loop muted className=" lg:col-start-2 lg:row-span-2 lg:-mt-[118px] opacity-95"></video>
           <div className="lg:flex lg:flex-col lg:gap-3 lg:-mt-14 lg:ml-24">
                <div className="flex flex-col items-center mt-4 lg:items-start lg:mr-6">
                    <h1 className="text-[29px] font-medium lg:text-4xl lg:font-normal lg:tracking-wide">Download</h1>
                    <h1 className="text-[29px] font-medium text-center self-center px-16  lg:self-start lg:px-0 lg:text-4xl lg:font-normal lg:tracking-wide"><span className="text-green">Collect Your Shopping </span>App!</h1>
                </div>
                <div className="flex flex-col  gap-6 items-center pt-7 pb-14 lg:flex-row ">
                    <DownloadAppButton icon="/assets/11_downloadApp/apple.svg" avail="Available on the" store="Apple Store"/>
                    <DownloadAppButton icon="/assets/11_downloadApp/google.svg" avail="Android App on" store="Google Play"/>
                </div>
           </div>
        </div>
    </section>
  )
}

export default DownloadApp
