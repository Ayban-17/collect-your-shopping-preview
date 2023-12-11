import DesktopHeader from "./desktop/DesktopHeader"
import MobileHeader from "./mobile/MobileHeader"


const Header = ({setCountryCode, countryCode, contents}) => {
  return (
    <header className="lg:flex lg:justify-center lg:py-8 lg:bg-white lg:z-50">
        <MobileHeader setCountryCode={setCountryCode} {...contents} countryCode={countryCode}/>
        <DesktopHeader setCountryCode={setCountryCode} {...contents} countryCode={countryCode}/>
    </header>
  )
}

export default Header
