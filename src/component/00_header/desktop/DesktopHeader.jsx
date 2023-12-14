import Link from "next/link"
import RenderLogo from "../RenderLogo"
import LanguageSwitcher from "../LanguageSwitcher"

const DesktopHeader = ({setCountryCode, navigations, countryCode }) => {
  if(navigations){
    return (
      <div className="hidden max-w-6xl w-full md:flex md:justify-between md:items-center lg:px-8 ">
        <RenderLogo logoMarkStyles="w-16 h-6 lg:w-[119.955px] lg:h-[60.352px]" logoTextStyles="h-4 w-36 lg:w-[270px] lg:h-[28.421px]"/>
        <div className="flex gap-8 md:gap-5 items-center text-base">
              {navigations.map(({name, href}, index)=>(
                <Link href={href} key={index}><span className="rounded-lg text-lg text-gray-700 hover:text-green" >{name}</span></Link>
              ))}
              <LanguageSwitcher setCountryCode={setCountryCode} countryCode={countryCode}/>
          </div> 
      </div>
    )
  }else{
    console.log(navigations)
  }
}

export default DesktopHeader
