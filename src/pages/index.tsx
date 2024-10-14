import React, {useState, useEffect, useMemo} from "react";
import { HeaderBanner } from "../components/HeaderBanner";
import { Header } from '../components/Header';
import { SponsorsCard } from '../components/SponsorsCards';
import { LocationCard } from '../components/LocationCard';
import { LogoCard } from '../components/LogoCard';
import { MissionCard } from '../components/MissionCard';
import { StatisticsCard } from "../components/StatisticsCard";
import { ScheduleCard } from '../components/ScheduleCard';
import { Footer } from "../components/Footer";
import { VideoContainer } from '../components/VideoContainer';
import { VideoFooterContainer } from "../components/VideoFooterContainer";
import logo from '../images/newlogo.svg';
import sponsor from '../images/header-sponsor.svg'; 
import look from '../images/header-look.svg'; 
import location from '../images/header-location.svg'; 
import schedule from '../images/header-schedule.svg'; 
import founding from '../images/header-founding.svg'; 
import together from '../images/together.svg'; 

const Homepage = () => {

  const [stickyHeader, setStickyHeader] = useState('sticky');
  const [prevScroll, setPrevScroll] = useState(0);

  useEffect(() => {
      const handleScroll = () => {
          const currentScroll = window.scrollY;

          if (currentScroll === 0) {
              setStickyHeader('sticky');
          } else if (prevScroll > currentScroll) {
              setStickyHeader('fixed w-full translate-y-0');
          } else {
              setStickyHeader('fixed w-full -translate-y-full');
          }

          setPrevScroll(currentScroll);
      };

      window.addEventListener('scroll', handleScroll);

      return () => {
          window.removeEventListener('scroll', handleScroll);
      };
  }, [prevScroll]);

  const header = useMemo(() => {

    return <div className={`${stickyHeader} transition-transform duration-300 ease-in-out top-0 z-50 flex flex-wrap w-full items-center justify-between  text-white gap-y-2 gap-x-2 p-5 px-[120px] 2xl:px-[120px] xl:px-[40px] xs:px-[20px] md:py-10 border-b bg-tristesse border-heise-black`}>
     <a href="\"> <img className="h-8 md:h-10" alt="Group" src={logo} /></a> 

      {/* <div className="flex items-center gap-2.5 mt-3 md:mt-0">
        <div className="relative font-simplon-mono w-fit text-sm md:text-2xl font-medium text-blackwhitewhite text-center tracking-[0] leading-[normal]">
          Trust No File.
        </div>
        <a className="all-[unset] box-border inline-flex items-center justify-center px-3 py-1.5 relative rounded border border-solid border-blackwhitewhite hover:bg-gradient-orange hover:text-black hover:border-black"
        href="https://metadefender.com/" target="_blank" rel="noopener noreferrer">
          <div className="relative w-fit font-body-1 font-[number:var(--body-1-font-weight)] text-blackwhitewhite text-sm md:text-base tracking-[var(--body-1-letter-spacing)] leading-[var(--body-1-line-height)] whitespace-nowrap">
            Scan a File
          </div>
        </a>
      </div> */}

      <div className="hidden font-simplon-mono md:flex items-center justify-end gap-4 md:gap-8 mt-3 md:mt-0 scroll-smooth">
        <a href="#agenda" className="flex text-sm md:text-base hover:text-laughing-orange">Agenda</a>
        <a href="#schedule" className="flex text-sm md:text-base hover:text-laughing-orange">Schedule</a>
        <a href="#sponsors" className="flex text-sm md:text-base hover:text-laughing-orange">Sponsors</a>
        <a href="#location" className="flex text-sm md:text-base hover:text-laughing-orange">Location</a>
        <a href="#tickets" className="flex text-sm md:text-base hover:text-laughing-orange">Tickets</a>
      </div>
    </div>
  },[stickyHeader]);

  return (
    <div className="flex w-full h-full flex-col font-roboto bg-tristesse scroll-smooth">
      {header}
      <VideoContainer/>
      <div className="flex flex-wrap gap-y-5 mx-[120px] 2xl:mx-[120px] xl:mx-[40px] xs:mx-[20px]">
        <HeaderBanner text='What brings us together?' icon={together}/>
        <MissionCard/>
        
       
        <div id="agenda" className="w-full flex flex-col gap-y-5">
          <HeaderBanner text='What to look forward to?' icon={look}/>
          <StatisticsCard/>
        </div>

       
        <div id="schedule"  className="w-full flex flex-col gap-y-5">
          <HeaderBanner text='Schedule' icon={schedule}/>
          <ScheduleCard/>
        </div>

      

        <div id="sponsors"  className="w-full flex flex-col gap-y-5">
          <HeaderBanner text='Founding Sponsors' icon={founding}/>
          <SponsorsCard/>
        </div>

        
        <div id="location"  className="w-full flex flex-col gap-y-5">
          <HeaderBanner text='Where it all happens' icon={location}/>
          <LocationCard/>
        </div>

        {/* <HeaderBanner text='Sponsors' icon={sponsor}/>
        <LogoCard/> */}
      </div>

      <div>
        <VideoFooterContainer/>
        <Footer/>

      </div>
    </div>
  );
}

export default Homepage;
