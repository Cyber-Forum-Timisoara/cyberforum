import React, { useState, useEffect, useMemo } from "react";
import { navigate } from "gatsby";
import { HeaderBanner } from "../components/HeaderBanner";
import { SponsorsCard } from "../components/SponsorsCards";
import { LocationCard } from "../components/LocationCard";
import { LogoCard } from "../components/LogoCard";
import { MissionCard } from "../components/MissionCard";
import { StatisticsCard } from "../components/StatisticsCard";
import { Footer } from "../components/Footer";
import { VideoContainer } from "../components/VideoContainer";
import { VideoFooterContainer } from "../components/VideoFooterContainer";
import logo from "../images/newlogo.svg";
import sponsor from "../images/header-sponsor.svg";
import look from "../images/header-look.svg";
import location from "../images/header-location.svg";
import schedule from "../images/header-schedule.svg";
import founding from "../images/header-founding.svg";
import together from "../images/together.svg";
import adrians from "../images/adrians.png";
import janmiler from "../images/janmiler.webp";
import gabrieldinu from "../images/gabrieldinu.png";
import vassilism from "../images/vassilism.png";
import valentinmuresan from "../images/valentinmuresan.png";
import virgils from "../images/virgils.png";
import panelGroup from "../images/panel-group.svg";

const TCF2024Archive = () => {
  const [stickyHeader, setStickyHeader] = useState("sticky");
  const [prevScroll, setPrevScroll] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;

      if (currentScroll === 0) {
        setStickyHeader("sticky");
      } else if (prevScroll > currentScroll) {
        setStickyHeader("fixed w-full translate-y-0");
      } else {
        setStickyHeader("fixed w-full -translate-y-full");
      }

      setPrevScroll(currentScroll);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScroll]);

  // Add smooth scroll with offset for header
  // Add smooth scroll with offset for header
  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;

      if (currentScroll === 0) {
        setStickyHeader("sticky");
      } else if (prevScroll > currentScroll) {
        setStickyHeader("fixed w-full translate-y-0");
      } else {
        setStickyHeader("fixed w-full -translate-y-full");
      }

      setPrevScroll(currentScroll);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScroll]);

  const header = useMemo(() => {
    return (
      <div
        className={`${stickyHeader} transition-transform duration-300 ease-in-out top-0 z-50 flex flex-wrap w-full items-center justify-between  text-white gap-y-2 gap-x-2 p-5 px-[120px] 2xl:px-[120px] xl:px-[40px] xs:px-[20px] md:py-10 border-b bg-tristesse border-heise-black`}
      >
        <a href="\">
          {" "}
          <img className="h-8 md:h-10" alt="Group" src={logo} />
        </a>

        <div className="hidden font-simplon-mono md:flex items-center justify-end gap-4 md:gap-8 mt-3 md:mt-0">
          <a
            href="#about"
            className="flex text-sm md:text-base hover:text-laughing-orange"
          >
            About
          </a>
          <a
            href="#highlights"
            className="flex text-sm md:text-base hover:text-laughing-orange"
          >
            Highlights
          </a>
          <a
            href="#schedule"
            className="flex text-sm md:text-base hover:text-laughing-orange"
          >
            Agenda
          </a>
          <a
            href="#sponsors"
            className="flex text-sm md:text-base hover:text-laughing-orange"
          >
            Partners
          </a>
          <a
            href="#location"
            className="flex text-sm md:text-base hover:text-laughing-orange"
          >
            Venue
          </a>
          <a
            href="\"
            className="flex text-sm md:text-base hover:text-laughing-orange"
          >
            Current Edition
          </a>
        </div>
      </div>
    );
  }, [stickyHeader]);

  // Archive banner component
  const ArchiveBanner = () => (
    <div className="w-full bg-gradient-orange text-heise-black py-4 px-[120px] 2xl:px-[120px] xl:px-[40px] xs:px-[20px]">
      <div className="text-center font-simplon-mono text-lg">
        This page contains information from Timisoara CyberForum 2024. For
        current speakers, agenda, and registration details, please visit our{" "}
        <a
          href="/"
          onClick={() => {
            navigate("/");
          }}
          className="underline hover:text-white transition-colors"
        >
          current conference page
        </a>
        .
      </div>
    </div>
  );

  // Modified ScheduleCard for 2024
  const ScheduleCard2024 = () => {
    return (
      <div className="flex flex-col w-full gap-5 font-simplon-mono  ml:flex-row">
        <div className="flex flex-col w-full bg-heise-black p-[30px] xl:p-[30px] xs:px-[10px] gap-8">
          <div className="w-auto">
            <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-red-100 text-red-800">
              Conference Day 1
            </div>
          </div>
          <h2 className="font-medium text-[40px] leading-[40px] text-liliac-fields font-simplon-mono">
            Thursday, November 14th, 2024
          </h2>

          <div>
            <div>
              <div className="flex flex-row gap-4 border-b-[1px] border-dark-spell font-medium py-3">
                <div className="text-chrome  text-xl xl:text-xl xs:text-sm sm:text-sm font-medium">
                  11:00
                </div>
                <div className="text-liliac-fields text-xl xl:text-xl xs:text-sm sm:text-sm font-medium">
                  Registration & Coffee
                </div>
              </div>

              <div className="flex flex-row gap-4 border-b-[1px] border-dark-spell font-medium py-3">
                <div className="text-white text-xl xl:text-xl xs:text-sm sm:text-sm font-medium flex items-center">
                  11:30
                </div>
                <div className="flex flex-row gap-3 items-center">
                  <div className="bg-dark-spell flex flex-row items-center h-[64px] w-[64px] min-w-[64px]">
                    <img src={adrians} alt="Adrian Seceleanu" />
                  </div>
                  <div className="flex flex-col">
                    <div className="text-white text-xl xl:text-xl xs:text-sm sm:text-sm font-medium">
                      Opening Remarks
                    </div>
                    <div className="text-epicurean-orange text-base">
                      Adrian Seceleanu{" "}
                      <span className="text-white"> [moderator] </span>
                    </div>
                    <div className="text-liliac-fields text-sm leaning-[16px]">
                      Editor Business Hi-Tech, Ziarul Financiar
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-row gap-4 border-b-[1px] border-dark-spell font-medium py-3">
                <div className="text-white text-xl xl:text-xl xs:text-sm sm:text-sm font-medium flex items-center">
                  12:00
                </div>
                <div className="flex flex-row gap-3 items-center">
                  <div className="bg-dark-spell flex flex-row items-center h-[64px] w-[64px] min-w-[64px]">
                    <img src={janmiler} alt="Jan Miller" />
                  </div>
                  <div className="flex flex-col">
                    <div className="text-white text-xl xl:text-xl xs:text-sm sm:text-sm font-medium">
                      Evolving Sandboxes for a New Threat Landscape{" "}
                    </div>
                    <div className="text-epicurean-orange text-base">
                      Jan Miller
                    </div>
                    <div className="text-liliac-fields text-sm leaning-[16px] ">
                      CTO, Threat Intel, OPSWAT
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-row gap-4 border-b-[1px] border-dark-spell font-medium py-3">
                <div className="text-white text-xl xl:text-xl xs:text-sm sm:text-sm font-medium flex items-center">
                  12:30
                </div>
                <div className="flex flex-row gap-3 items-center">
                  <div className="bg-dark-spell flex flex-row items-center h-[64px] w-[64px] min-w-[64px]">
                    <img src={gabrieldinu} alt="Gabriel Dinu" />
                  </div>
                  <div className="flex flex-col">
                    <div className="text-white text-xl xl:text-xl xs:text-sm sm:text-sm font-medium">
                      Securing Essential Services: A Guide to NIS 2 Directive
                      Transposition in Romanian Legislation
                    </div>
                    <div className="text-epicurean-orange text-base">
                      Gabriel Dinu
                    </div>
                    <div className="text-liliac-fields text-sm leaning-[16px] leading-[16px]">
                      {" "}
                      Deputy Director, National Cyber Security Directorate
                      (DNSC)
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-row gap-4 border-b-[1px] border-dark-spell font-medium py-3">
                <div className="text-white text-xl xl:text-xl xs:text-sm sm:text-sm font-medium flex items-center">
                  13:15
                </div>
                <div className="flex flex-row gap-3 items-center">
                  <div className="bg-dark-spell flex flex-row items-center h-[64px] w-[64px] min-w-[64px]">
                    <img src={vassilism} alt="Vassilis Manoussos" />
                  </div>
                  <div className="flex flex-col">
                    <div className="text-white text-xl xl:text-xl xs:text-sm sm:text-sm font-medium">
                      After Cybercrime... What happens to Cybercriminals?
                    </div>
                    <div className="text-epicurean-orange text-base">
                      Vassilis Manoussos
                    </div>
                    <div className="text-liliac-fields text-sm leaning-[16px] leading-[16px]">
                      {" "}
                      Expert Witness, Digital Evidence & Cybercrime, Visiting
                      Lecturer @ Sheffield Hallam University, UK
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-row gap-4 border-b-[1px] border-dark-spell font-medium py-3">
                <div className="text-chrome  text-xl xl:text-xl xs:text-sm sm:text-sm font-medium">
                  14:00
                </div>
                <div className="text-liliac-fields text-xl xl:text-xl xs:text-sm sm:text-sm font-medium">
                  Lunch Break
                </div>
              </div>

              <div className="flex flex-row gap-4 border-b-[1px] border-dark-spell font-medium py-3">
                <div className="text-white text-xl xl:text-xl xs:text-sm sm:text-sm font-medium flex items-center">
                  15:00
                </div>
                <div className="flex flex-row gap-3 items-center">
                  <div className="bg-dark-spell p-3 flex flex-row items-center h-[64px] w-[64px] min-w-[64px]">
                    <img src={panelGroup} alt="panel icon" />
                  </div>
                  <div className="flex flex-col">
                    <div className="text-white text-xl xl:text-xl xs:text-sm sm:text-sm font-medium">
                      Entrepreneurship Panel{" "}
                    </div>
                    <div className="text-epicurean-orange text-base">
                      How to Grow & Finance Your Cybersecurity Business
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-row gap-4 border-b-[1px] border-dark-spell font-medium py-3">
                <div className="text-white text-xl xl:text-xl xs:text-sm sm:text-sm font-medium flex items-center">
                  16:00
                </div>
                <div className="flex flex-row gap-3 items-center">
                  <div className="bg-dark-spell flex flex-row items-center h-[64px] w-[64px] min-w-[64px]">
                    <img src={valentinmuresan} alt="Valentin Muresan" />
                  </div>
                  <div className="flex flex-col">
                    <div className="text-white text-xl xl:text-xl xs:text-sm sm:text-sm font-medium">
                      To paper or to pixel - this is the (cyber resilience)
                      question!
                    </div>
                    <div className="text-epicurean-orange text-base">
                      Valentin Muresan
                    </div>
                    <div className="text-liliac-fields text-sm leaning-[16px] leading-[16px]">
                      {" "}
                      Timisoara Mayor's Personal advisor on Digitalization and
                      Smart City
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-row gap-4 font-medium py-3">
                <div className="text-chrome  text-xl xl:text-xl xs:text-sm sm:text-sm font-medium">
                  17:00
                </div>
                <div className="text-liliac-fields text-xl xl:text-xl xs:text-sm sm:text-sm font-medium">
                  NETWORKING PARTY - ARChA
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col w-full bg-heise-black p-[30px] xl:p-[30px] xs:px-[10px] gap-8">
          <div className="w-auto">
            <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-red-100 text-red-800">
              Conference Day 2
            </div>
          </div>
          <h2 className="font-medium text-[40px] leading-[40px] text-liliac-fields font-simplon-mono">
            Friday, November 15th, 2024
          </h2>
          <div>
            <div className="flex flex-row gap-4 border-b-[1px] border-dark-spell font-medium py-3">
              <div className="text-chrome text-xl xl:text-xl xs:text-sm sm:text-sm font-medium">
                10:00
              </div>
              <div className="text-liliac-fields text-xl xl:text-xl xs:text-sm sm:text-sm font-medium">
                Welcome Coffee
              </div>
            </div>

            <div className="flex flex-row gap-4 border-b-[1px] border-dark-spell font-medium py-3">
              <div className="text-white text-xl xl:text-xl xs:text-sm sm:text-sm font-medium flex items-center">
                11:00
              </div>
              <div className="flex flex-row gap-3 items-center">
                <div className="bg-dark-spell flex flex-row items-center h-[64px] w-[64px] min-w-[64px]">
                  <img src={virgils} alt="Virgil Stănciulescu" />
                </div>
                <div className="flex flex-col">
                  <div className="text-white text-xl xl:text-xl xs:text-sm sm:text-sm font-medium">
                    Top 10 Cybersec Challenges in 2024
                  </div>
                  <div className="text-epicurean-orange text-base">
                    Virgil Stănciulescu
                  </div>
                  <div className="text-liliac-fields text-sm leaning-[16px] leading-[16px]">
                    {" "}
                    Expert, IT Division, Romanian National Authority for
                    Administration and Regulation in Communications (ANCOM)
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-row gap-4 border-b-[1px] border-dark-spell font-medium py-3">
              <div className="text-white text-xl xl:text-xl xs:text-sm sm:text-sm font-medium flex items-center">
                11:45
              </div>
              <div className="flex flex-row gap-3 items-center">
                <div className="bg-dark-spell p-3 flex flex-row items-center h-[64px] w-[64px] min-w-[64px]">
                  <img src={panelGroup} alt="panel icon" />
                </div>
                <div className="flex flex-col">
                  <div className="text-white text-xl xl:text-xl xs:text-sm sm:text-sm font-medium">
                    A Journey into Data Protection & Privacy
                  </div>
                  <div className="text-epicurean-orange text-base">
                    Stephane ROBILLIARD
                  </div>
                  <div className="text-liliac-fields text-sm leaning-[16px] leading-[16px]">
                    Cloud Security Architect, E&Y
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-row gap-4 border-b-[1px] border-dark-spell font-medium py-3">
              <div className="text-chrome  text-xl xl:text-xl xs:text-sm sm:text-sm font-medium">
                12:30
              </div>
              <div className="text-liliac-fields text-xl xl:text-xl xs:text-sm sm:text-sm font-medium">
                Lunch Break
              </div>
            </div>

            <div className="flex flex-row gap-4 border-b-[1px] border-dark-spell font-medium py-3">
              <div className="text-white text-xl xl:text-xl xs:text-sm sm:text-sm font-medium flex items-center">
                13:30
              </div>
              <div className="flex flex-row gap-3 items-center">
                <div className="flex flex-col">
                  <div className="text-white text-xl xl:text-xl xs:text-sm sm:text-sm font-medium">
                    Education Panel
                  </div>
                  <div className="text-epicurean-orange text-base">
                    How to Grow your Career in Cybersecurity
                  </div>
                  <div className="text-liliac-fields text-sm leaning-[16px] leading-[16px]">
                    Claudiu Brândaș{" "}
                    <span className="text-white">
                      {" "}
                      [Professor of Business Information Systems Development,
                      West University of Timisoara]{" "}
                    </span>
                    <br></br> Radu Ticiu{" "}
                    <span className="text-white">
                      {" "}
                      [Co-Founder, CoderDojo Timisoara]{" "}
                    </span>
                    <br></br> Bogdan Groza{" "}
                    <span className="text-white">
                      {" "}
                      [Professor of Information Security, Politehnica University
                      of Timisoara]{" "}
                    </span>
                    <br></br> Cristina Iordaiche{" "}
                    <span className="text-white">
                      {" "}
                      [Computer Science Teacher, Grigore Moisil Highschool,
                      Timisoara ]{" "}
                    </span>
                    <br></br> Anca Dragomir{" "}
                    <span className="text-white">
                      {" "}
                      [Manager of IT & Communications Department,
                      Hidroelectrica]{" "}
                    </span>
                    <br></br> Valentin Mureșan{" "}
                    <span className="text-white">
                      {" "}
                      [Timisoara Mayor's Personal Advisor on Digitalization &
                      Smart City]{" "}
                    </span>
                    <br></br> Cristian Driga{" "}
                    <span className="text-white">
                      {" "}
                      [Senior Cybersecurity Manager, Romanian National
                      Cybersecurity Directorate (DNSC)]{" "}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-row gap-4 border-b-[1px] border-dark-spell font-medium py-3">
              <div className="text-chrome  text-xl xl:text-xl xs:text-sm sm:text-sm font-medium">
                15:00
              </div>
              <div className="text-liliac-fields text-xl xl:text-xl xs:text-sm sm:text-sm font-medium">
                Closing Remarks
              </div>
            </div>

            <div className="flex flex-row gap-4 font-medium py-3">
              <div className="text-chrome  text-xl xl:text-xl xs:text-sm sm:text-sm font-medium">
                15:30
              </div>
              <div className="text-liliac-fields text-xl xl:text-xl xs:text-sm sm:text-sm font-medium">
                Networking
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="flex w-full h-full flex-col font-roboto bg-tristesse scroll-smooth">
      {header}
      <ArchiveBanner />
      <VideoContainer year="2024" location="Centrul de conferințe UPT" />
      <div
        id="about"
        className="flex flex-wrap gap-y-5 mx-[120px] 2xl:mx-[120px] xl:mx-[40px] xs:mx-[20px]"
      >
        <HeaderBanner text="What brings us together?" icon={together} />
        <MissionCard />

        <div id="highlights" className="w-full flex flex-col gap-y-5">
          <HeaderBanner text="What to look forward to?" icon={look} />
          <StatisticsCard />
        </div>

        <div id="schedule" className="w-full flex flex-col gap-y-5">
          <HeaderBanner text="Schedule" icon={schedule} />
          <ScheduleCard2024 />
        </div>

        <div id="sponsors" className="w-full flex flex-col gap-y-5">
          <HeaderBanner text="Founding Sponsors" icon={founding} />
          <SponsorsCard />
        </div>

        <div id="location" className="w-full flex flex-col gap-y-5">
          <HeaderBanner text="Where it all happens" icon={location} />
          <LocationCard />
        </div>

        <HeaderBanner text="Sponsors" icon={sponsor} />
        <LogoCard />
      </div>

      <div>
        <VideoFooterContainer location="Centrul de conferințe UPT" />
        <Footer />
      </div>
    </div>
  );
};

export default TCF2024Archive;
