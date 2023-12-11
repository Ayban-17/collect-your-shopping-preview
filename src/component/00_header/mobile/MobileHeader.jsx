
import { useState } from "react";
import Image from "next/image";
import RenderLogo from "../RenderLogo";
import SideBar from "./Sidebar";


const MobileHeader = ({setCountryCode, countryCode, navigations}) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const handleOpenSidebar = () => setIsSidebarOpen(!isSidebarOpen);
    return(
    <div className="flex justify-between p-5  fixed top-0 w-full z-50 bg-white lg:hidden ">
        <RenderLogo logoMarkStyles="w-16 h-6 lg:w-[124.955px] lg:h-[65.352px]" logoTextStyles="h-4 w-36 lg:w-[292px] lg:h-[28.421px]"/>
        <button onClick={handleOpenSidebar}>
          <Image src="/assets/00_header/menu.svg" alt="CYS Logo text" width={30} height={23}/>
        </button>
        <SideBar isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} setCountryCode={setCountryCode} countryCode={countryCode} navigations={navigations}/>
    </div>
    )
  }

export default MobileHeader;