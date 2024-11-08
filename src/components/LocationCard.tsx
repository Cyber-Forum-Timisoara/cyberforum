import React from "react";
import pinA from '../images/pinA.svg';
import pinB from '../images/pinB.svg';
import map from '../images/map.svg';

export const LocationCard = () => {
  return (
    <div className="flex flex-wrap w-full justify-center px-[30px] py-[60px] xl:px-[30px] xs:px-[10px] bg-greyspage-1200 bg-heise-black border border-solid border-baclavas">
      <div className="flex flex-col ml:flex-row gap-y-[60px] gap-x-[60px] items-center justify-center">
        <div className="flex flex-col items-start justify-center gap-[30px]">
          <p className="font-inter text-chrome font-normal text-lg leading-[26px] max-w-[400px]">
            “Universitatea Politehnica Timisoara” is one of the largest technical universities in the Central and Eastern Europe.
          </p>
          <div className="flex items-start gap-[30px]">
            <img className="pt-1" alt="Group" src={pinA} />
            <div className="flex flex-col items-start">
              <div className="[ font-normal text-chrome text-lg leading-[26px]">
                Main Event / Workshops
              </div>
              <p className="font-simplon-mono font-medium text-white text-2xl leading-[normal] max-w-[400px]">
                Centrul de conferințe UPT Timisoara
              </p>
              <p className="font-normal text-chrome text-lg leading-[26px]">
                Bulevardul Vasile Pârvan 2, Timisoara
              </p>
            </div>
          </div>
          <div className="flex items-start gap-[30px]">
            <img className="pt-1" alt="Group" src={pinB} />
            <div className="inline-flex flex-col items-start">
              <div className="font-inter font-normal text-chrome text-lg leading-[26px]">
                Networking / Party
              </div>
              <div className="font-simplon-mono font-medium text-white text-2xl leading-[normal]">
                ARChA
              </div>
              <p className="font-inter font-normal text-chrome text-lg leading-[26px]">
                Bulevardul Mihai Viteazu 1b, Timisoara
              </p>
            </div>
          </div>
          <a
            href="https://www.google.com/maps/place/Central+Library+of+the+University+Politehnica+Timisoara/@45.7471612,21.2287439,19.51z/data=!4m6!3m5!1s0x47455d8379426181:0x19ac8b7ef5fffe7c!8m2!3d45.7472551!4d21.2290895!16s%2Fg%2F121fx50v?entry=ttu&g_ep=EgoyMDI0MTAwMi4xIKXMDSoASAFQAw%3D%3D"
            target="_blank" rel="noopener noreferrer"
            className="bg-gradient-orange font-simplon-mono text-lg font-medium text-heise-black px-8 py-1.5 flex transition ease-in-out delay-1500 hover:-translate-y-1 hover:scale-110">
            Show on maps
          </a>
        </div> 
        <img className="mt-10 md:mt-0 md:ml-10" alt="Group" src={map} />
      </div>
    </div>
  );
};
