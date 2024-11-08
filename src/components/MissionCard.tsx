import React from "react";
import { Badge } from "./Badge";


export const MissionCard = () => {
    return (
      <div className="flex flex-col lg:flex-row w-full bg-heise-black border border-solid border-baclavas">
        <div className="relative flex-1 p-[30px] flex-col pr-10 xl:p-[30px] xs:px-[10px]">
          <div className="absolute right-0 top-[10%] bottom-[10%] w-[1px] border-r-1 border-baclavas bg-baclavas"></div>
  
          <div className="w-auto">
            <Badge variant="malicious" label="Malware Detected" />
          </div>
  
          <h2 className="font-simplon-mono text-2xl leading-7 py-3 text-white">
            Increase Awareness
          </h2>
          <p className="font-inter text-lg leading-[26px] text-chrome">
            Highlight the crucial role of cybersecurity in Timisoara and the
            surrounding region, offering insights into the latest advancements and
            showcasing the newest products.
          </p>
        </div>
  
        <div className="relative flex-1 p-[30px] xl:p-[30px] xs:px-[10px] flex-col pr-10">
          <div className="absolute right-0 top-[10%] bottom-[10%] w-[1px] border-r-1 border-baclavas bg-baclavas"></div>
  
          <div className="w-auto">
            <Badge variant="low" label="Informative Indicators" />
          </div>
  
          <h2 className="font-simplon-mono text-2xl leading-7 py-3 text-white">
            Drive Growth
          </h2>
          <p className="font-inter text-lg leading-[26px] text-chrome">
            Provide a platform for companies that develop and offer cybersecurity
            products or services to showcase their offerings, network, and attract
            new business opportunities.
          </p>
        </div>
  
        <div className="relative flex-1 p-[30px] xl:p-[30px] xs:px-[10px] flex-col pr-10s">
          <div className="w-auto">
            <Badge variant="clean" label="No Threat Detected" />
          </div>
  
          <h2 className="font-simplon-mono text-2xl leading-7 py-3 text-white">
            Amplify Collaboration
          </h2>
          <p className="font-inter text-lg leading-[26px] text-chrome">
            Build a vibrant community of cybersecurity enthusiasts, including
            professionals, students, and academics, to share knowledge,
            experiences, and foster collaboration.
          </p>
        </div>
      </div>
    );
  };
  