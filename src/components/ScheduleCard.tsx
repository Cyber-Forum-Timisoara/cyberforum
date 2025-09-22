import React, {useState} from "react";
import { Badge } from "./Badge";
import scan from '../images/panel-group.svg';
import janmiler from "../images/janm.png";
import jennyradcliffe from "../images/jenny.png";
import adi from "../images/adi.png";
import tudor from "../images/tudor.png";
import adrians from "../images/adriansec.png";
import panelGroup from "../images/panel-group.svg";
import placeHolder from "../images/placeholder.png";
import alexbertea from "../images/alexbertea.png";
import georgedragusin from "../images/george.png";
import ioancalauz from "../images/ioan-calauz 1.svg";
import andreeajebelean from "../images/andreea-jebelean 1.svg";
import matiemacsinga from "../images/matei-macsinga 1.svg";
import yugoneumorni from "../images/yugo-neumorni.svg";
import sebastian2 from "../images/sebastian-ciceu-2.svg";
import jackmadine from "../images/jack-madine.svg";

export const ScheduleCard = () => {
  return (
    <div className="flex flex-col w-full gap-5 font-simplon-mono  ml:flex-row">
      <div className="flex flex-col w-full bg-heise-black p-[20px] xl:p-[30px] xs:px-[10px] gap-8">
        <h2 className="font-medium text-[40px] leading-[40px] text-liliac-fields font-simplon-mono">
          Thursday, October 2nd
        </h2>

        <div>
          <div>
            <div className="flex flex-row gap-4 border-b-[1px] border-dark-spell font-medium py-3">
              <div className="text-chrome  text-xl xl:text-xl xs:text-sm sm:text-sm font-medium">
                08:30
              </div>
              <div className="text-liliac-fields text-xl xl:text-xl xs:text-sm sm:text-sm font-medium">
                Welcome guests, Coffee & Networking
              </div>
            </div>

            <div className="flex flex-row gap-4 border-b-[1px] border-dark-spell font-medium ">
              <div className="text-white text-xl xl:text-xl xs:text-sm sm:text-sm font-medium flex items-center">
                09:30
              </div>
              <div className="flex flex-row gap-3 items-center">
                <div className=" flex flex-row items-center h-[130px] w-[130px] min-w-[64px]">
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
                    Editor Business Hi-Tech @ Ziarul Financiar
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-row gap-4 border-b-[1px] border-dark-spell font-medium">
              <div className="text-white text-xl xl:text-xl xs:text-sm sm:text-sm font-medium flex items-center">
                09:45
              </div>
              <div className="flex flex-row gap-3 items-center">
                <div className=" relative flex items-center h-[94px] w-[150px] min-w-[150px]">
                  <img
                    src={janmiler}
                    alt="Jan Miller"
                    className="absolute left-0 top-0 w-[94px] h-[94px] rounded-full z-10 shadow-lg"
                  />
                  <img
                    src={jackmadine}
                    alt="Alex Bertea"
                    className="absolute left-9 top-0 w-[94px] h-[94px] rounded-full z-20 shadow-lg"
                  />
                </div>
                <div className="flex flex-col">
                  <div className="text-white text-xl xl:text-xl xs:text-sm sm:text-sm font-medium">
                    Threat Landscape Insights & Zero-Day Detection Pipeline{" "}
                  </div>
                  <div className="text-epicurean-orange text-base">
                    Jan Miller • Jack Madine
                  </div>
                  <div className="text-liliac-fields text-sm leaning-[16px] ">
                    CTO, Threat Analysis @ OPSWAT • Senior Product Manager @
                    OPSWAT
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-row gap-4 border-b-[1px] border-dark-spell font-medium">
              <div className="text-white text-xl xl:text-xl xs:text-sm sm:text-sm font-medium flex items-center">
                10:45{" "}
              </div>
              <div className="flex flex-row gap-3 items-center">
                <div className=" flex flex-row items-center h-[130px] w-[130px] min-w-[130px]">
                  <img src={adi} alt="Adrian Smales" />
                </div>
                <div className="flex flex-col">
                  <div className="text-white text-xl xl:text-xl xs:text-sm sm:text-sm font-medium">
                    Hacking the Human Heart: Pacemaker Forensics{" "}
                  </div>
                  <div className="text-epicurean-orange text-base">
                    Dr. Adrian Smales
                  </div>
                  <div className="text-liliac-fields text-sm leaning-[16px] leading-[16px]">
                    {" "}
                    Data Instructor, Researcher{" "}
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-row gap-4 border-b-[1px] border-dark-spell font-medium py-3">
              <div className="text-white text-xl xl:text-xl xs:text-sm sm:text-sm font-medium flex items-center">
                11:15
              </div>
              <div className="flex flex-row gap-3 items-center">
                <div className=" relative flex items-center h-[94px] w-[150px] min-w-[150px]">
                  <img
                    src={sebastian2}
                    alt="Jan Miller"
                    className="absolute left-0 top-0 w-[94px] h-[94px] rounded-full z-10 shadow-lg"
                  />
                  <img
                    src={ioancalauz}
                    alt="Alex Bertea"
                    className="absolute left-9 top-0 w-[94px] h-[94px] rounded-full z-20 shadow-lg"
                  />
                </div>
                <div className="flex flex-col">
                  <div className="text-white text-xl xl:text-xl xs:text-sm sm:text-sm font-medium">
                    Industrial Cybersecurity: Safeguarding Operations through a
                    Defense-in-Depth Strategy
                  </div>
                  <div className="text-epicurean-orange text-base">
                    Sebastian Ciceu @ Emerson • Ioan Calauz @ Emerson
                  </div>
                  <div className="text-liliac-fields text-sm leaning-[16px] leading-[16px]">
                    {" "}
                    Principal Engineer – Infrastructure & Cybersecurity
                    Solutions at Emerson • Manager - European Software
                    Deployment Center at Emerson
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-row gap-4 border-b-[1px] border-dark-spell font-medium py-3">
              <div className="text-chrome  text-xl xl:text-xl xs:text-sm sm:text-sm font-medium">
                11:45
              </div>
              <div className="text-liliac-fields text-xl xl:text-xl xs:text-sm sm:text-sm font-medium">
                Coffee Break
              </div>
            </div>

            <div className="flex flex-row gap-4 border-b-[1px] border-dark-spell font-medium">
              <div className="text-white text-xl xl:text-xl xs:text-sm sm:text-sm font-medium flex items-center">
                11:45
              </div>
              <div className="flex flex-row gap-3 items-center">
                <div className=" relative flex items-center h-[94px] w-[150px] min-w-[150px]">
                  <img
                    src={janmiler}
                    alt="Jan Miller"
                    className="absolute left-0 top-0 w-[94px] h-[94px] rounded-full z-10 shadow-lg"
                  />
                  <img
                    src={alexbertea}
                    alt="Alex Bertea"
                    className="absolute left-9 top-0 w-[94px] h-[94px] rounded-full z-20 shadow-lg"
                  />
                </div>
                <div className="flex flex-col">
                  <div className="text-white text-xl xl:text-xl xs:text-sm sm:text-sm font-medium">
                    Threat Landscape in Romania
                  </div>
                  <div className="text-epicurean-orange text-base">
                    Alex Bertea @ ProVision • Jan Miller @ OPSWAT
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-row gap-4 border-b-[1px] border-dark-spell font-medium">
              <div className="text-white text-xl xl:text-xl xs:text-sm sm:text-sm font-medium flex items-center">
                12:45
              </div>
              <div className="flex flex-row gap-3 items-center">
                <div className=" flex flex-row items-center h-[130px] w-[130px] min-w-[64px]">
                  <img src={yugoneumorni} alt="Yugo Neumorni" />
                </div>
                <div className="flex flex-col">
                  <div className="text-white text-xl xl:text-xl xs:text-sm sm:text-sm font-medium">
                    The energy-sector threat: How to address cybersecurity
                    vulnerabilities
                  </div>
                  <div className="text-epicurean-orange text-base">
                    Yugo Neumorni
                  </div>
                  <div className="text-liliac-fields text-sm leaning-[16px] leading-[16px]">
                    {" "}
                    President @ CIO Council
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-row gap-4 border-b-[1px] border-dark-spell font-medium py-3">
              <div className="text-chrome  text-xl xl:text-xl xs:text-sm sm:text-sm font-medium">
                13:15
              </div>
              <div className="text-liliac-fields text-xl xl:text-xl xs:text-sm sm:text-sm font-medium">
                Lunch Break
              </div>
            </div>

            <div className="flex flex-row gap-4 border-b-[1px] border-dark-spell font-medium">
              <div className="text-white text-xl xl:text-xl xs:text-sm sm:text-sm font-medium flex items-center">
                14:00
              </div>
              <div className="flex flex-row gap-3 items-center">
                <div className=" relative flex items-center h-[94px] w-[150px] min-w-[150px]">
                  <img
                    src={andreeajebelean}
                    alt="andrea"
                    className="absolute left-0 top-0 w-[94px] h-[94px] rounded-full z-10 shadow-lg"
                  />
                  <img
                    src={matiemacsinga}
                    alt="matei"
                    className="absolute left-9 top-0 w-[94px] h-[94px] rounded-full z-20 shadow-lg"
                  />
                </div>
                <div className="flex flex-col">
                  <div className="text-white text-xl xl:text-xl xs:text-sm sm:text-sm font-medium">
                    Panel about education paths in cybersecurity{" "}
                  </div>
                  <div className="text-epicurean-orange text-base">
                    Andreea Jebelean @ OPSWAT • Matei Macsinga @ OPSWAT
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-row gap-4 border-b-[1px] border-dark-spell font-medium">
              <div className="text-white text-xl xl:text-xl xs:text-sm sm:text-sm font-medium flex items-center">
                15:00
              </div>
              <div className="flex flex-row gap-3 items-center">
                <div className=" flex flex-row items-center h-[130px] w-[130px] min-w-[64px]">
                  <img src={tudor} alt="Tudor Damian" />
                </div>
                <div className="flex flex-col">
                  <div className="text-white text-xl xl:text-xl xs:text-sm sm:text-sm font-medium">
                    AI Ate My Brain: Rebuilding Critical Thinking in
                    Cybersecurity
                  </div>
                  <div className="text-epicurean-orange text-base">
                    Tudor Damian
                  </div>
                  <div className="text-liliac-fields text-sm leaning-[16px] leading-[16px]">
                    {" "}
                    Cybersecurity & Cloud Advisor @ D3 Cyber
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-row gap-4 border-b-[1px] border-dark-spell font-medium py-3">
              <div className="text-chrome  text-xl xl:text-xl xs:text-sm sm:text-sm font-medium">
                15:45
              </div>
              <div className="text-liliac-fields text-xl xl:text-xl xs:text-sm sm:text-sm font-medium">
                Coffee Break
              </div>
            </div>

            <div className="flex flex-row gap-4 border-b-[1px] border-dark-spell font-medium">
              <div className="text-white text-xl xl:text-xl xs:text-sm sm:text-sm font-medium flex items-center">
                16:15
              </div>
              <div className="flex flex-row gap-3 items-center">
                <div className=" flex flex-row items-center h-[130px] w-[130px] min-w-[130px]">
                  <img src={georgedragusin} alt="panel icon" />
                </div>
                <div className="flex flex-col">
                  <div className="text-white text-xl xl:text-xl xs:text-sm sm:text-sm font-medium">
                    To be or not to be compliant…that’s the (CEO’s) question
                  </div>
                  <div className="text-epicurean-orange text-base">
                    George Dragusin @ ProVision
                  </div>
                  <div className="text-liliac-fields text-sm leaning-[16px] leading-[16px]">
                    {" "}
                    Cyber Advisor @ ProVision
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-row gap-4 border-b-[1px] border-dark-spell font-medium">
              <div className="text-white text-xl xl:text-xl xs:text-sm sm:text-sm font-medium flex items-center">
                16:45
              </div>
              <div className="flex flex-row gap-3 items-center">
                <div className=" flex flex-row items-center h-[130px] w-[130px] min-w-[64px]">
                  <img src={jennyradcliffe} alt="Jenny Radcliffe" />
                </div>
                <div className="flex flex-col">
                  <div className="text-white text-xl xl:text-xl xs:text-sm sm:text-sm font-medium">
                    The People Hacker
                  </div>
                  <div className="text-epicurean-orange text-base">
                    Jenny Radcliffe
                  </div>
                  <div className="text-liliac-fields text-sm leaning-[16px] leading-[16px]">
                    {" "}
                    {/* Timisoara Mayor's Personal advisor on Digitalization and
                    Smart City */}
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-row gap-4 border-b-[1px] border-dark-spell font-medium">
              <div className="text-white text-xl xl:text-xl xs:text-sm sm:text-sm font-medium flex items-center">
                17:45
              </div>
              <div className="flex flex-row gap-3 items-center">
                <div className=" flex flex-row items-center h-[130px] w-[130px] min-w-[64px]">
                  <img src={adrians} alt="Adrian Seceleanu" />
                </div>
                <div className="flex flex-col">
                  <div className="text-white text-xl xl:text-xl xs:text-sm sm:text-sm font-medium">
                    Closing Remarks
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

            <div className="flex flex-row gap-4 font-medium py-3">
              <div className="text-chrome  text-xl xl:text-xl xs:text-sm sm:text-sm font-medium">
                18:30
              </div>
              <div className="text-liliac-fields text-xl xl:text-xl xs:text-sm sm:text-sm font-medium">
                NETWORKING PARTY
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};