import React from "react";
import { Badge } from "./Badge";
import participant from '../images/users.svg';
import workshops from '../images/workshops.svg';
import nis from '../images/nis.svg';
import tracks from '../images/tracks.svg';
import panels from '../images/panels.svg'; 
import expo from '../images/expo.svg';
import network from '../images/network.svg';
import days from '../images/calendar.svg';

const statsData = [
    { id: 1, img: participant, text: "300+ participants" },
    { id: 2, img: days, text: "2 Days" },
    { id: 3, img: tracks, text: "2 Experience Tracks" },
    { id: 4, img: network, text: "Networking Event" },
    { id: 5, img: expo, text: "Expo Area" },
    { id: 6, img: nis, text: "NIS 2 Deep Dive" },
    { id: 7, img: workshops, text: "Workshops" },
    { id: 8, img: panels, text: "Panels" },
    
  ];
  
  export const StatisticsCard = () => {
    return (
      <div className="flex flex-wrap w-full p-[30px] bg-heise-black border border-solid border-baclavas">
        <div className="flex flex-col gap-5 w-full">
          <div className="w-auto">
            <Badge label="Sensitive Data Found" variant="low" />
          </div>
          <p className="text-lg leading-[26px] text-liliac-fields font-inter">309 items detected</p>
  
          <div className="grid grid-cols-1 ml:grid-cols-2 lg:grid-cols-3 3xl:grid-cols-4 gap-4">
            {statsData.map((stat) => (
              <div key={stat.id} className="flex bg-dark-spell gap-3 py-2 px-3 items-center">
                <img src={stat.img} alt={stat.text} />
                <span className="font-simplon-mono font-medium text-white text-2xl leading-7 whitespace-nowrap mt-1 lg:text-2xl xs:text-xl">{stat.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };