
import React from "react"

export const HeaderBanner = ({ text, icon }) => {
    return (
        <div className="flex flex-wrap items-center font-simplon-mono font-medium w-full p-[30px] gap-3 bg-baclavas">
            <div className="bg-darkicon-spell p-3 flex-shrink-0">
                <img src={icon} alt="Icon" />
            </div>
            <p className="font-medium text-[40px] lg:text-[40px] xs:text-[30px] align-top text-white flex-1 sm:text-left sm:w-full">
                {text}
            </p>
        </div>
    );
}