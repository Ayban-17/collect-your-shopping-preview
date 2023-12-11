import Image from "next/image";

const RenderLogo =({logoMarkStyles, logoTextStyles})=> {
    return(
      <div className="flex items-center lg:pl-4">
        <Image src="/assets/00_header/logo_mark.png" alt="CYS Logo" width={63} height={28} className={logoMarkStyles}/>
        <Image src="/assets/00_header/logo_text.png" alt="CYS Logo text" width={400} height={16} className={logoTextStyles}/>
      </div>
    )
  }

export default RenderLogo;