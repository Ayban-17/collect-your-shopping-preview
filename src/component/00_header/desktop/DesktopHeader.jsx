import Link from "next/link"
import RenderLogo from "../RenderLogo"
import LanguageSwitcher from "../LanguageSwitcher"

const DesktopHeader = ({setCountryCode, navigations, countryCode }) => {
  if(navigations){
    return (
      <div className="hidden max-w-6xl w-full lg:flex lg:justify-between lg:items-center lg:px-8 ">
        <RenderLogo logoMarkStyles="w-16 h-6 lg:w-[124.955px] lg:h-[65.352px]" logoTextStyles="h-4 w-36 lg:w-[292px] lg:h-[28.421px]"/>
        <div className="flex gap-12 items-center text-base">
              {navigations.map(({name, href}, index)=>(
                <Link href={href} key={index}><span className="rounded-lg text-lg text-gray-700 hover:text-green-600" >{name}</span></Link>
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
