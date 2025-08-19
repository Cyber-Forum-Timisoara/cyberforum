import React, {useState} from "react";
import { Badge } from "./Badge";
import scan from '../images/panel-group.svg';
import janmiler from '../images/janmiler.webp';
import ionutisac from '../images/ionutisac.png';
import virgils from '../images/virgils.png';
import vassilism from '../images/vassilism.png';
import adrians from '../images/adrians.png';
import gabrieldinu from '../images/gabrieldinu.png';
import valentinmuresan from '../images/valentinmuresan.png'

export const ScheduleCard = () => {

    const [selectedView, setSelectedView] = useState('presentations');
    const [selectedViewCard, setSelectedViewCard] = useState('presentations');

    const handleToggle = (view: string) => {
      setSelectedView(view);
    };

    const handleToggleCard2 = (view: string) => {
      setSelectedViewCard(view);
    };

    const toggleButton = (
      <div className="h-[58px] pt-1.5 px-1.5 bg-heise-black border gap-2 border-tired-true-blue flex justify-start items-start ">
        <button
          className={`grow shrink basis-0 px-6 py-2 flex-col justify-start items-center  inline-flex ${
            selectedView === "presentations"
              ? "bg-gradient-orange text-heise-black"
              : "text-chrome hover:text-white"
          }`}
          onClick={() => handleToggle("presentations")}
        >
          <div className="text-center text-lg lg:text-lg sm:text-sm xs:text-xs font-normal font-simplon-mono leading-relaxed ">
            Presentations
          </div>
        </button>

        <button
          className={`grow shrink basis-0 px-6 py-2 flex-col justify-start items-center inline-flex ${
            selectedView === "workshops"
              ? "bg-gradient-orange text-heise-black"
              : "text-chrome hover:text-white"
          }`}
          onClick={() => handleToggle("workshops")}
        >
          <div className="text-center text-lg lg:text-lg sm:text-sm xs:text-xs font-normal font-simplon-mono leading-relaxed">
            Workshops
          </div>
        </button>
      </div>
    );

    const toggleButton2 = (
      <div className="h-[58px] pt-1.5 px-1.5 bg-heise-black border gap-2 border-tired-true-blue flex justify-start items-start">
        <button
          className={`grow shrink basis-0 px-6 py-2 flex-col justify-start items-center inline-flex ${
            selectedViewCard === "presentations"
              ? "bg-gradient-orange text-heise-black"
              : "text-chrome hover:text-white"
          }`}
          onClick={() => handleToggleCard2("presentations")}
        >
          <div className="text-center text-lg lg:text-lg sm:text-sm xs:text-xs font-normal font-simplon-mono leading-relaxed">
            Presentations
          </div>
        </button>

        <button
          className={`grow shrink basis-0 px-6 py-2  flex-col justify-start items-center inline-flex ${
            selectedViewCard === "workshops"
              ? "bg-gradient-orange text-heise-black"
              : "text-chrome hover:text-white"
          }`}
          onClick={() => handleToggleCard2("workshops")}
        >
          <div className="text-center text-lg lg:text-lg sm:text-sm xs:text-xs font-normal font-simplon-mono leading-relaxed">
            Workshops
          </div>
        </button>
      </div>
    );

    return (
      <div className="flex flex-col w-full gap-5 font-simplon-mono">
        <div className="flex flex-col w-full bg-heise-black p-[30px] xl:p-[30px] xs:px-[10px] gap-8">
          <h2 className="font-medium text-[40px] leading-[40px] text-liliac-fields font-simplon-mono">
            Thursday, October 2nd
          </h2>

          <div className="flex flex-col items-center justify-center py-20">
            <div className="mb-8 transform hover:scale-110 transition-all duration-500 ease-in-out">
              <img
                src={scan}
                alt="Scan icon"
                className="w-24 h-24 md:w-32 md:h-32 opacity-80 hover:opacity-100 transition-opacity duration-200 animate-scan-pulse"
              />
            </div>
            <div className="text-white text-4xl font-medium text-center mb-4 animate-fade-in">
              Coming Soon
            </div>
            <div className="text-liliac-fields text-xl text-center max-w-md">
              We're working on an exciting agenda. Stay tuned for updates!
            </div>
          </div>
        </div>
      </div>
    );
}