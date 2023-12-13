import Image from "next/image";
import { useEffect, useState } from "react";

const options = [{
    flag:"https://flagcdn.com/h20/nl.png",
    language:"Dutch",
    code:"nl",
},{
    flag:"https://flagcdn.com/h20/gb.png",
    language:"English",
    code:"gb"
}]

const LanguageSwitcher = ({setCountryCode, countryCode}) =>{

    const [isOpen, setIsOpen] = useState(false);
    const [chosenLanguage, setChosenLanguage] = useState({code:"nl", language:"Dutch"});

    const isOptionOpen = isOpen ? true : false;

    const handleOpenOptions = () => {
        setIsOpen(!isOpen);
    }

    const handleSetCountryCode = (code) => {
        setCountryCode(code)
        setIsOpen(false)
    }

    useEffect(()=>{
        switch(countryCode){
            case "nl":
                setChosenLanguage({code:"nl", language:"Dutch"})
                break;
            case "gb":
                setChosenLanguage({code:"gb", language:"English"})
                break;
            case "us":
                setChosenLanguage({code:"us", language:"English (US)"})
                break;
            default:
                setChosenLanguage({code:"nl", language:"Dutch"})
                break;
        }
    },[countryCode])

    return(
      <div className="mt-4 flex flex-col gap-3 lg:mt-0 lg:relative z-50">
        <div className={` py-3 px-10 flex  gap-4 items-center ${isOptionOpen? "bg-[#EAEAEA]":"bg-white"} lg:bg-white lg:gap-1 lg:px-0`}  >
          <img src={`https://flagcdn.com/h40/${chosenLanguage.code}.png`} alt={chosenLanguage.language} className="w-7 h-5"/> 
          <p className="lg:hidden">{chosenLanguage.language} </p>
          <Image src={`/assets/00_header/${!isOpen? "dropdown_icon.svg":"goUp_icon.png"}`} alt="Drop down Icon" width={30} height={30} className="cursor-pointer" onClick={handleOpenOptions}/>
        </div>
        <div className={` overflow-hidden transition-[height] ease-in-out duration-1000 bg-white ${isOptionOpen ? "h-38 ":"h-0"} lg:absolute lg:top-14 lg:right-0 lg:rounded-xl lg:shadow-[0px_0px_40px_-15px_rgba(0,0,0,0.3)] lg:w-40`}>
        {
            options.map(({flag, language, code}, index)=>(
                <div className="py-3 px-10 flex gap-2 items-center hover:bg-[rgb(234,234,234)] lg:px-5 lg:pl-7" key={index} onClick={() => handleSetCountryCode(code)} >
                    <img src={flag} alt={language} className="w-7 h-4"/> 
                    <p className="text-base lg:text-xs ">{language}</p>
                </div>
            ))
        }
        </div>
      </div>
    )
  }

  export default LanguageSwitcher;