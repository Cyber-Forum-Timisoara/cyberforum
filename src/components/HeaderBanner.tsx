
import React from "react"

export const HeaderBanner = ({ text, icon }) => {
    return (
        <div className="flex flex-wrap items-center font-simplon-mono font-medium w-full p-[30px] xl:p-[30px] xs:px-[10px] gap-3 bg-baclavas">
           { icon && <div className="bg-darkicon-spell p-3 flex-shrink-0">
                <img src={icon} alt="Icon" />
            </div>}
            <p className="font-medium text-[40px] lg:text-[40px] xs:text-[25px] align-top text-white flex-1 sm:text-left sm:w-full">
                {text}
            </p>
        </div>
    );
}