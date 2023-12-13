import Image from "next/image"
import Link from "next/link"

import LanguageSwitcher from "../LanguageSwitcher";

const SideBar = ({isSidebarOpen, setIsSidebarOpen, setCountryCode, navigations, countryCode}) => {
    const closeSidebar = () => setIsSidebarOpen(false);
    if(navigations){
      return(
        <aside className={`absolute top-0  ${isSidebarOpen? "right-0":"-right-96 "} h-screen bg-white w-5/6 flex flex-col transition-[right] duration-700 ease-in-out z-50`}>
          <Image src="/assets/00_header/x_menu.svg" alt="Close Menu Button" width={25} height={25} className=" self-end mt-6 mr-6" onClick={closeSidebar}/>
          <div className="flex flex-col mt-16 px-10  gap-5">
              {navigations.map(({name,href}, index)=>(
                <Link href={href} key={index}><span className="rounded-lg text-base text-gray-700 hover:text-green">{name}</span></Link>
              ))}
          </div>
          <LanguageSwitcher setCountryCode={setCountryCode} countryCode={countryCode}/>
        </aside>
      )
    }
  }

  export default SideBar;
