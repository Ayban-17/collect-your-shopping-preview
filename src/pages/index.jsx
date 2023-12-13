import { useEffect, useState } from 'react'
import Head from 'next/head'

import useFetchContents from "@/hooks/useFetchContents";

import Header from '@/component/00_header/Header'
import Hero from '@/component/01_hero/Hero';
import WeElevate from '@/component/02_weElevate/WeElevate';
import Awards from '@/component/03_awards/Awards';
import WhyCollect from '@/component/04_whyCollect/WhyCollect';
import OrderFlow from '../component/05_oderFlow/OrderFlow';
import Footer  from '@/component/12_footer/Footer';
import DownloadApp from '@/component/11_downloadApp/DownloadApp';
import Faqs from '@/component/10_faqs/Faqs';
import LogoCarousel from '@/component/09_logoCarousel/LogoCarousel';
import Testimonials from '../component/08_testimonials/Testimonials';
import Screenshots from '@/component/07_screenshots/Screenshots';
import CoreValues from '@/component/06_coreValues/CoreValues';



export default function Home() {
  const {getContents, contents, loading} = useFetchContents(); 
  const [countryCode, setCountryCode] = useState("gb");

  useEffect(()=>{
    getContents(countryCode);
  },[countryCode])
  

if(loading){
  return <p>The page is Loading</p>
}else{
  return (
    <div className=" bg-white">
          <Head> 
            <title>{contents.title}</title>
          </Head>
          <div className='relative overflow-x-hidden  '>
            <Header setCountryCode={setCountryCode} contents={contents} countryCode={countryCode}/>
            <Hero {...contents}/>
            <WeElevate {...contents}/>
            <Awards {...contents}/>
            <WhyCollect {...contents}/>
            <OrderFlow {...contents}/>
            <CoreValues {...contents}/>
            <Screenshots {...contents}/>
            <Testimonials {...contents}/>
            <LogoCarousel {...contents}/>
            <Faqs {...contents}/>
            <DownloadApp {...contents}/>
            <Footer {...contents}/>
          </div>
    </div>
  );
}
}

