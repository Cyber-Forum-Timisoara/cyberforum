import React from "react";
import { Badge } from "./Badge";
import opswatlogo from '../images/opswatlogo.svg';
import poli from '../images/politehnica.png';
import dnsc from "../images/dnsc.svg";
import prow from "../images/prow.svg";

const sponsorsData = [
  {
    id: 1,
    status: "No Threat Detected",
    logo: opswatlogo,
    isTextLogo: false,
    p1: "OPSWAT protects critical infrastructure. Established in 2002, in San Francisco, CA, it employs more than 850 people, 80 of which in its Timisoara office.",
    p2: "Our goal is to eliminate malware and zero-day attacks. We believe that every file and every device pose a threat. Threats must be addressed at all locations at all times—at entry, at exit, and at rest. Our products focus on threat prevention and process creation for secure data transfer and safe device access. The result is productive systems that minimize risk of compromise.",
    p3: "That's why 98% of U.S. nuclear power facilities trust OPSWAT for cybersecurity and compliance.",
  },
  {
    id: 2,
    status: "No Threat Detected",
    logo: dnsc,
    isTextLogo: false,
    p1: "DNSC (formerly CERT-RO) is the Romanian national cyber security and incident response team.",
    p2: "DNSC is a specialized body of the central public administration, subordinate to the Government and in coordination to the Prime Minister, having responsibilities regarding the cyber security of the national civil cyber space.",
    p3: "DNSC is responsible for preventing, analyzing, identifying and reacting to cyber incidents. It is responsible for elaborating and distributing public policies for prevention and counteracting the incidents that occur within national cyber infrastructures.",
  },
  {
    id: 3,
    status: "No Threat Detected",
    logo: poli,
    isTextLogo: false,
    p1: '"Universitatea Politehnica Timisoara" is one of the largest technical universities in the Central and Eastern Europe.',
    p2: "Established in 1920, shortly after the union of Romanian territories, in a European context marked by the redefinition of states and by the aftermath of World War I, the Polytechnic School in Timisoara - as was originally called - was the answer to one of the requirements of the Romanian society of the time, namely the formation of engineers.",
    p3: "Its 10 faculties provide education programs to approximately 13,500 students, under the guidance of nearly 700 teachers and 500 auxiliary and administrative staff.",
  },
  {
    id: 4,
    status: "Community Partner",
    logo: prow,
    isTextLogo: false,
    p1: "PROW is a community-driven platform that connects product managers and professionals from the product management landscape.",
    p2: "Born from the desire to empower Romanian prowfessionals and the regional community, PROW bridges the gap between local talent and the global product management landscape.",
    p3: "PROW welcomes everyone who has an enthusiasm for creating outstanding digital products, from newbies in development and design to seasoned product managers and marketers. We are your point of contact for exclusive industry insights, priceless relationships, and the inspiration to advance your product's vision.",
  },
  {
    id: 5,
    status: "Media Partner",
    logo: "tion.ro",
    isTextLogo: true,
    p1: "Tion is a leading technology media outlet focused on innovation and digital transformation in Romania.",
    p2: "Tion provides comprehensive coverage of the tech industry, cybersecurity developments, and digital trends, helping businesses and professionals stay informed about the latest technological advances.",
    p3: "Tion's mission is to connect the Romanian tech community through quality journalism, in-depth analysis, and coverage of key industry events and conferences.",
  },
  {
    id: 6,
    status: "Media Partner",
    logo: "expressdebanat.ro",
    isTextLogo: true,
    p1: "Express de Banat is the leading regional media outlet covering news, business, and technology developments in the Banat region.",
    p2: "With a strong focus on local innovation and community development, we provide comprehensive coverage of cybersecurity events, tech conferences, and business initiatives in Timisoara and surrounding areas.",
    p3: "Our platform connects the local community with national and international technology trends, supporting the growth of the regional tech ecosystem.",
  },
];

export const SponsorsCard = () => {
  // Split sponsors into two rows
  const firstRow = sponsorsData.slice(0, 3);
  const secondRow = sponsorsData.slice(3, 6);

  return (
    <div className="flex flex-col w-full gap-5">
      {/* First Row */}
      <div className="flex flex-row lg:flex-row sm:flex-col xs:flex-col w-full gap-5">
        {firstRow.map((sponsor) => (
          <div
            key={sponsor.id}
            className="flex flex-col items-center gap-y-3 p-[30px] xl:p-[30px] xs:px-[10px] w-full bg-heise-black border border-solid border-baclavas"
          >
            <div className="self-start">
              <Badge variant="clean" label={sponsor.status} />
            </div>
            <div className="flex items-center justify-center p-9">
              {sponsor.isTextLogo ? (
                <div className="flex items-center justify-center min-h-[90px] max-h-[90px] max-w-[248px] w-full">
                  <h3 className="text-white font-simplon-mono font-medium text-2xl md:text-3xl text-center leading-tight">
                    {sponsor.logo}
                  </h3>
                </div>
              ) : (
                <img
                  className="w-full min-h-[90px] max-h-[90px] max-w-[248px]"
                  alt="Sponsor Logo"
                  src={sponsor.logo}
                />
              )}
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

      {/* Second Row */}
      <div className="flex flex-row lg:flex-row sm:flex-col xs:flex-col w-full gap-5">
        {secondRow.map((sponsor) => (
          <div
            key={sponsor.id}
            className="flex flex-col items-center gap-y-3 p-[30px] xl:p-[30px] xs:px-[10px] w-full bg-heise-black border border-solid border-baclavas"
          >
            <div className="self-start">
              <Badge variant="clean" label={sponsor.status} />
            </div>
            <div className="flex items-center justify-center p-9">
              {sponsor.isTextLogo ? (
                <div className="flex items-center justify-center min-h-[90px] max-h-[90px] max-w-[248px] w-full">
                  <h3 className="text-white font-simplon-mono font-medium text-2xl md:text-3xl text-center leading-tight">
                    {sponsor.logo}
                  </h3>
                </div>
              ) : (
                <img
                  className="w-full min-h-[90px] max-h-[90px] max-w-[248px]"
                  alt="Sponsor Logo"
                  src={sponsor.logo}
                />
              )}
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
    </div>
  );
};
