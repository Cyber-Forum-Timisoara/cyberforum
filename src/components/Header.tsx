import React from "react";
import logo from '../images/Group.svg';

export const Header = () => {
  return (
    <div className="flex flex-wrap w-full items-center justify-between text-white gap-y-2 gap-x-2 p-5 px-[120px] 2xl:px-[120px] xl:px-[40px] xs:px-[20px] md:py-10 border-b bg-heise-black border-heise-black">
      <img className="h-8 md:h-10" alt="Group" src={logo} />

      <div className="flex items-center gap-2.5 mt-3 md:mt-0">
        <div className="relative w-fit text-sm md:text-2xl [font-family:'Simplon_Mono-Medium',Helvetica] font-medium text-blackwhitewhite text-center tracking-[0] leading-[normal]">
          Trust No File.
        </div>
        <a
          className="all-[unset] box-border inline-flex items-center justify-center px-3 py-1.5 relative flex-[0_0_auto] rounded border border-solid border-blackwhitewhite"
          href="https://metadefender.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="relative w-fit mt-[-1.00px] font-body-1 font-[number:var(--body-1-font-weight)] text-blackwhitewhite text-sm md:text-base tracking-[var(--body-1-letter-spacing)] leading-[var(--body-1-line-height)] whitespace-nowrap">
            Scan a File
          </div>
        </a>
      </div>

      <div className="hidden md:flex items-center justify-end gap-4 md:gap-8 mt-3 md:mt-0">
        <div className="flex text-sm md:text-base">About</div>
        <div className="flex text-sm md:text-base">Highlights</div>
        <div className="flex text-sm md:text-base">Agenda</div>
        <div className="flex text-sm md:text-base">Partners</div>
        <div className="flex text-sm md:text-base">Venue</div>
        <div className="flex text-sm md:text-base">Editions</div>
        <div className="flex text-sm md:text-base">Tickets</div>
      </div>
    </div>
  );
};
