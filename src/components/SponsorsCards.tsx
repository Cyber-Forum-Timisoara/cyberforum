import React from "react";
import { Badge } from "./Badge";
import opswatlogo from '../images/opswatlogo.svg';
import poli from '../images/politehnica.png';
import dnsc from '../images/dnsc.svg'

const sponsorsData = [
  {
    id: 1,
    status: "No Threat Detected",
    logo: opswatlogo,
    p1: "OPSWAT protects critical infrastructure. Established in 2002, in San Francisco, CA, it employs more than 850 people, 80 of which in its Timisoara office.",
    p2: 'Our goal is to eliminate malware and zero-day attacks. We believe that every file and every device pose a threat. Threats must be addressed at all locations at all times—at entry, at exit, and at rest. Our products focus on threat prevention and process creation for secure data transfer and safe device access. The result is productive systems that minimize risk of compromise.',
    p3: 'That’s why 98% of U.S. nuclear power facilities trust OPSWAT for cybersecurity and compliance.'
  },
  {
    id: 2,
    status: "No Threat Detected",
    logo: dnsc,
    p1: "DNSC (formerly CERT-RO) is the Romanian national cyber security and incident response team.",
    p2: 'DNSC is a specialized body of the central public administration, subordinate to the Government and in coordination to the Prime Minister, having responsibilities regarding the cyber security of the national civil cyber space.',
    p3: 'DNSC is responsible for preventing, analyzing, identifying and reacting to cyber incidents. It is responsible for elaborating and distributing public policies for prevention and counteracting the incidents that occur within national cyber infrastructures.'
  },
  {
    id: 3,
    status: "No Threat Detected",
    logo: poli,
    p1: "Universitatea Politehnica Timisoara” is one of the largest technical universities in the Central and Eastern Europe.",
    p2: 'Established in 1920, shortly after the union of Romanian territories, in a European context marked by the redefinition of states and by the aftermath of World War I, the Polytechnic School in Timisoara - as was originally called - was the answer to one of the requirements of the Romanian society of the time, namely the formation of engineers.',
    p3: 'Its 10 faculties provide education programs to approximately 13,500 students, under the guidance of nearly 700 teachers and 500 auxiliary and administrative staff.'
  }
];

export const SponsorsCard = () => {
  return (
    <div className="flex flex-row lg:flex-row sm:flex-col xs:flex-col w-full gap-5 ">
    {sponsorsData.map((sponsor) => (
      <div key={sponsor.id} className="flex flex-col items-center gap-y-3 p-[30px] xl:p-[30px] xs:px-[10px] w-full bg-heise-black border border-solid border-baclavas">
        <div className="self-start">
          <Badge variant="clean" label={sponsor.status}/>
        </div>
        <div className="flex items-center p-9">
          <img className="w-full min-h-[90px] max-h-[90px] max-w-[248px]" alt="Sponsor Logo" src={sponsor.logo} />
        </div>
        <div className="font-inter text-chrome font-normal text-[16px]">
          <p>{sponsor.p1}</p>
          <br />
          <p>{sponsor.p2}</p>   
          <br />  
          <p>{sponsor.p3}</p>
        </div>
      </div>
    ))}
  </div>
  );
};
