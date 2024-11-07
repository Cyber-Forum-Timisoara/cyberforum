import React, {useState} from "react";
import { Badge } from "./Badge";
import scan from '../images/panel-group.svg';
import janmiler from '../images/janmiler.png';
import ionutisac from '../images/ionutisac.png';
import virgils from '../images/virgils.png';
import vassilism from '../images/vassilism.png';
import adrians from '../images/adrians.png';
import gabrieldinu from '../images/gabrieldinu.png';
import valentinmuresan from '../images/valentinmuresan.png'

export const ScheduleCard = () => {

    const [selectedView, setSelectedView] = useState('presentations');
    const [selectedViewCard, setSelectedViewCard] = useState('presentations');

    const handleToggle = (view) => {
        setSelectedView(view);
    };

    const handleToggleCard2 = (view) => {
        setSelectedViewCard(view);
    };

    const toggleButton = (
        <div className="h-[58px] pt-1.5 px-1.5 bg-heise-black border gap-2 border-tired-true-blue flex justify-start items-start ">
            <button 
                className={`grow shrink basis-0 px-6 py-2 flex-col justify-start items-center  inline-flex ${selectedView === 'presentations' ? 'bg-gradient-orange text-heise-black' : 'text-chrome hover:text-white'}`}
                onClick={() => handleToggle('presentations')}
            >
                <div className="text-center text-lg lg:text-lg sm:text-sm xs:text-sm font-normal font-simplon-mono leading-relaxed ">
                    Presentations
                </div>
            </button>

            <button 
                className={`grow shrink basis-0 px-6 py-2 flex-col justify-start items-center inline-flex ${selectedView === 'workshops' ? 'bg-gradient-orange text-heise-black' : 'text-chrome hover:text-white'}`}
                onClick={() => handleToggle('workshops')}
            >
                <div className="text-center text-lg lg:text-lg sm:text-sm xs:text-sm font-normal font-simplon-mono leading-relaxed">
                    Workshops
                </div>
            </button>
        </div>
    );


    const toggleButton2 = (
        <div className="h-[58px] pt-1.5 px-1.5 bg-heise-black border gap-2 border-tired-true-blue flex justify-start items-start">
            <button 
                className={`grow shrink basis-0 px-6 py-2 flex-col justify-start items-center inline-flex ${selectedViewCard === 'presentations' ? 'bg-gradient-orange text-heise-black' : 'text-chrome hover:text-white'}`}
                onClick={() => handleToggleCard2('presentations')}
            >
                <div className="text-center text-lg lg:text-lg sm:text-sm xs:text-sm font-normal font-simplon-mono leading-relaxed">
                    Presentations
                </div>
            </button>

            <button 
                className={`grow shrink basis-0 px-6 py-2  flex-col justify-start items-center inline-flex ${selectedViewCard === 'workshops' ? 'bg-gradient-orange text-heise-black' : 'text-chrome hover:text-white'}`}
                onClick={() => handleToggleCard2('workshops')}
            >
                <div className="text-center text-lg lg:text-lg sm:text-sm xs:text-sm font-normal font-simplon-mono leading-relaxed">
                    Workshops
                </div>
            </button>
        </div>
    )

    return <div className="flex flex-col w-full gap-5 font-simplon-mono  ml:flex-row">
        <div className="flex flex-col w-full bg-heise-black p-[30px] gap-4">
            <div className="w-auto">
                <Badge label='Conference Day 1' variant='malicious'/>
            </div>
            <h2 className="font-medium text-[40px] leading-[40px] text-liliac-fields font-simplon-mono">Thursday, November 14th</h2>
            {toggleButton}
            
            <div>
            {selectedView === 'presentations' ? (
            <div>
             <div className="flex flex-row gap-4 border-b-[1px] border-dark-spell font-medium py-3">
                <div className="text-chrome  text-xl xl:text-xl xs:text-sm sm:text-sm font-medium">11:00</div>
                <div className="text-liliac-fields text-xl xl:text-xl xs:text-sm sm:text-sm font-medium">Registration & Coffee</div>
            </div>

            <div className="flex flex-row gap-4 border-b-[1px] border-dark-spell font-medium py-3">
                <div className="text-white text-xl xl:text-xl xs:text-sm sm:text-sm font-medium flex items-center">11:30</div>
                <div className="flex flex-row gap-3 items-center">
                    <div className="bg-dark-spell flex flex-row items-center h-[64px] w-[64px] min-w-[64px]">
                        <img src={adrians} alt="scan icon" ></img>
                    </div>
                    <div className="flex flex-col">
                    <div className="text-white text-xl xl:text-xl xs:text-sm sm:text-sm font-medium">Opening Remarks</div>
                    <div className="text-epicurean-orange text-base">Adrian Seceleanu <span className="text-white"> [moderator] </span></div>
                    <div className="text-liliac-fields text-sm leaning-[16px]">Editor Business Hi-Tech, Ziarul Financiar</div>
                    </div>
                </div>
            </div>

            <div className="flex flex-row gap-4 border-b-[1px] border-dark-spell font-medium py-3">
                <div className="text-white text-xl xl:text-xl xs:text-sm sm:text-sm font-medium flex items-center">12:00</div>
                <div className="flex flex-row gap-3 items-center">
                <div className="bg-dark-spell flex flex-row items-center h-[64px] w-[64px] min-w-[64px]">
                        <img src={janmiler} alt="scan icon" ></img>
                    </div>
                    <div className="flex flex-col">
                    <div className="text-white text-xl xl:text-xl xs:text-sm sm:text-sm font-medium">Evolving Sandboxes for a New Threat Landscape </div>
                    <div className="text-epicurean-orange text-base">Jan Miller</div>
                    <div className="text-liliac-fields text-sm leaning-[16px] ">CTO, Threat Intel, OPSWAT</div>
                    </div>
                </div>
            </div>

            <div className="flex flex-row gap-4 border-b-[1px] border-dark-spell font-medium py-3">
                <div className="text-white text-xl xl:text-xl xs:text-sm sm:text-sm font-medium flex items-center">12:30</div>
                <div className="flex flex-row gap-3 items-center">
                    <div className="bg-dark-spell flex flex-row items-center h-[64px] w-[64px] min-w-[64px]">
                    <img src={gabrieldinu} alt="scan icon" ></img>
                    </div>
                    <div className="flex flex-col">
                    <div className="text-white text-xl xl:text-xl xs:text-sm sm:text-sm font-medium">Keynote Session</div>
                    <div className="text-epicurean-orange text-base">Gabriel Dinu</div>
                    <div className="text-liliac-fields text-sm leaning-[16px] leading-[16px]"> Deputy Director, National Cyber Security Directorate (DNSC)</div>
                    </div>
                </div>
            </div>

            <div className="flex flex-row gap-4 border-b-[1px] border-dark-spell font-medium py-3">
                <div className="text-white text-xl xl:text-xl xs:text-sm sm:text-sm font-medium flex items-center">13:15</div>
                <div className="flex flex-row gap-3 items-center">
                    <div className="bg-dark-spell flex flex-row items-center h-[64px] w-[64px] min-w-[64px]">
                    <img src={vassilism} alt="scan icon" ></img>
                    </div>
                    <div className="flex flex-col">
                    <div className="text-white text-xl xl:text-xl xs:text-sm sm:text-sm font-medium">Keynote Session</div>
                    <div className="text-epicurean-orange text-base">Vassilis Manoussos</div>
                    <div className="text-liliac-fields text-sm leaning-[16px] leading-[16px]"> Expert Witness, Digital Evidence & Cybercrime, Visiting Lecturer @ Sheffield Hallam University, UK</div>
                    </div>
                </div>
            </div>

            <div className="flex flex-row gap-4 border-b-[1px] border-dark-spell font-medium py-3">
                <div className="text-chrome  text-xl xl:text-xl xs:text-sm sm:text-sm font-medium">14:00</div>
                <div className="text-liliac-fields text-xl xl:text-xl xs:text-sm sm:text-sm font-medium">Lunch Break</div>
            </div>

            <div className="flex flex-row gap-4 border-b-[1px] border-dark-spell font-medium py-3">
                <div className="text-white text-xl xl:text-xl xs:text-sm sm:text-sm font-medium flex items-center">15:00</div>
                <div className="flex flex-row gap-3 items-center">
                    <div className="bg-dark-spell p-3 flex flex-row items-center h-[64px] w-[64px] min-w-[64px]">
                        <img src={scan} alt="scan icon" ></img>
                    </div>
                    <div className="flex flex-col">
                    <div className="text-white text-xl xl:text-xl xs:text-sm sm:text-sm font-medium">Entrepreneurship Panel </div>
                    <div className="text-epicurean-orange text-base">How to Grow & Finance Your Cybersecurity Business</div>
                    {/* <div className="text-liliac-fields text-sm leaning-[16px] leading-[16px]">Speaker Name</div> */}
                    </div>
                </div>
            </div>

            <div className="flex flex-row gap-4 border-b-[1px] border-dark-spell font-medium py-3">
                <div className="text-white text-xl xl:text-xl xs:text-sm sm:text-sm font-medium flex items-center">16:00</div>
                <div className="flex flex-row gap-3 items-center">
                    <div className="bg-dark-spell flex flex-row items-center h-[64px] w-[64px] min-w-[64px]">
                        <img src={valentinmuresan} alt="scan icon" ></img>
                    </div>
                    <div className="flex flex-col">
                    <div className="text-white text-xl xl:text-xl xs:text-sm sm:text-sm font-medium">To paper or to pixel - this is the (cyber resilience) question!</div>
                    <div className="text-epicurean-orange text-base">Valentin Muresan</div>
                    <div className="text-liliac-fields text-sm leaning-[16px] leading-[16px]"> Timisoara Mayor's Personal advisor on Digitalization and Smart City</div>
                    </div>
                </div>
            </div>

            <div className="flex flex-row gap-4 font-medium py-3">
                <div className="text-chrome  text-xl xl:text-xl xs:text-sm sm:text-sm font-medium">17:00</div>
                <div className="text-liliac-fields text-xl xl:text-xl xs:text-sm sm:text-sm font-medium">NETWORKING PARTY - ARChA</div>
            </div>
        </div>

        ) : (
            <div>
             <div className="flex flex-row gap-4 border-b-[1px] border-dark-spell font-medium py-3">
                <div className="text-chrome  text-xl font-medium">11:00</div>
                <div className="text-liliac-fields text-xl font-medium">Coffee & Snacks</div>
            </div>

            <div className="flex flex-row gap-4 border-b-[1px] border-dark-spell font-medium py-3">
                <div className="text-chrome  text-xl font-medium">12:00</div>
                <div className="text-liliac-fields text-xl font-medium">Workshop</div>
            </div>

            <div className="flex flex-row gap-4 border-b-[1px] border-dark-spell font-medium py-3">
                <div className="text-white text-xl font-medium flex items-center">12:30</div>
                <div className="flex flex-row gap-3 items-center">
                    <div className="bg-dark-spell p-3 flex flex-row items-center h-[64px] w-[64px] min-w-[64px]">
                        <img src={scan} alt="scan icon" ></img>
                    </div>
                    <div className="flex flex-col">
                    <div className="text-white text-xl font-medium">Demo Session</div>
                    <div className="text-liliac-fields text-sm leaning-[16px] leading-[16px]">OPSWAT</div>
                    </div>
                </div>
            </div>

            <div className="flex flex-row gap-4 border-b-[1px] border-dark-spell font-medium py-3">
                <div className="text-white text-xl font-medium flex items-center">13:15</div>
                <div className="flex flex-row gap-3 items-center">
                    <div className="bg-dark-spell p-3 flex flex-row items-center h-[64px] w-[64px] min-w-[64px]">
                        <img src={scan} alt="scan icon" ></img>
                    </div>
                    <div className="flex flex-col">
                    <div className="text-white text-xl font-medium">Demo Session</div>
                    <div className="text-liliac-fields text-sm leaning-[16px] leading-[16px]">Ernst & Young
                    </div>
                    </div>
                </div>
            </div>

            <div className="flex flex-row gap-4 border-b-[1px] border-dark-spell font-medium py-3">
                <div className="text-chrome  text-xl font-medium">14:00</div>
                <div className="text-liliac-fields text-xl font-medium">Lunch Break</div>
            </div>

            <div className="flex flex-row gap-4 border-b-[1px] border-dark-spell font-medium py-3">
                <div className="text-white text-xl font-medium flex items-center">15:00</div>
                <div className="flex flex-row gap-3 items-center">
                    <div className="bg-dark-spell p-3 flex flex-row items-center h-[64px] w-[64px] min-w-[64px]">
                        <img src={scan} alt="scan icon" ></img>
                    </div>
                    <div className="flex flex-col">
                    <div className="text-white text-xl font-medium">Demo Session</div>
                    <div className="text-liliac-fields text-sm leaning-[16px] leading-[16px]">Speaker Name</div>
                    </div>
                </div>
            </div>

            <div className="flex flex-row gap-4 border-b-[1px] border-dark-spell font-medium py-3">
                <div className="text-white text-xl font-medium flex items-center">16:00</div>
                <div className="flex flex-row gap-3 items-center">
                    <div className="bg-dark-spell p-3 flex flex-row items-center h-[64px] w-[64px] min-w-[64px]">
                        <img src={scan} alt="scan icon" ></img>
                    </div>
                    <div className="flex flex-col">
                    <div className="text-white text-xl font-medium">Demo Session</div>
                    <div className="text-liliac-fields text-sm leaning-[16px] leading-[16px]">Speaker Name</div>
                    </div>
                </div>
            </div>

            <div className="flex flex-row gap-4 font-medium py-3">
                <div className="text-chrome  text-xl font-medium">17:00</div>
                <div className="text-liliac-fields text-xl font-medium">Networking</div>
            </div>
        </div>
        )}
    </div>
        </div>



        
        <div className="flex flex-col w-full bg-heise-black p-[30px] gap-8">
        <div className="w-auto">
                <Badge label='Conference Day 2' variant='malicious'/>
            </div>       
            <h2 className="font-medium text-[40px] leading-[40px] text-liliac-fields font-simplon-mono">Friday, November 15th</h2>
            {toggleButton2}
        
            {selectedViewCard === 'presentations' ? (
            <div>
                <div className="flex flex-row gap-4 border-b-[1px] border-dark-spell font-medium py-3">
                    <div className="text-chrome text-xl xl:text-xl xs:text-sm sm:text-sm font-medium">10:00</div>
                    <div className="text-liliac-fields text-xl xl:text-xl xs:text-sm sm:text-sm font-medium">Welcome Coffee</div>
                </div>

                <div className="flex flex-row gap-4 border-b-[1px] border-dark-spell font-medium py-3">
                    <div className="text-white text-xl xl:text-xl xs:text-sm sm:text-sm font-medium flex items-center">11:00</div>
                    <div className="flex flex-row gap-3 items-center">
                        <div className="bg-dark-spell flex flex-row items-center h-[64px] w-[64px] min-w-[64px]">
                            <img src={virgils} alt="scan icon" ></img>
                        </div>
                        <div className="flex flex-col">
                        <div className="text-white text-xl xl:text-xl xs:text-sm sm:text-sm font-medium">Top 10 Cybersec Challenges in 2024</div>
                        <div className="text-epicurean-orange text-base">Virgil Stănciulescu</div>
                        <div className="text-liliac-fields text-sm leaning-[16px] leading-[16px]"> Expert, IT Division, Romanian National Authority for Administration and Regulation in Communications (ANCOM)</div>
                        </div>
                    </div>
                </div>

                <div className="flex flex-row gap-4 border-b-[1px] border-dark-spell font-medium py-3">
                    <div className="text-white text-xl xl:text-xl xs:text-sm sm:text-sm font-medium flex items-center">11:45</div>
                    <div className="flex flex-row gap-3 items-center">
                        <div className="bg-dark-spell flex flex-row items-center h-[64px] w-[64px] min-w-[64px]">
                            <img src={ionutisac} alt="scan icon" ></img>
                        </div>
                        <div className="flex flex-col">
                        <div className="text-white text-xl xl:text-xl xs:text-sm sm:text-sm font-medium">Keynote Sessios</div>
                        <div className="text-epicurean-orange text-base">Ionut Isac</div>
                        <div className="text-liliac-fields text-sm leaning-[16px] leading-[16px]"> Director of CyberSecurity & Emerging Technologies, Ernst & Young</div>
                        </div>
                    </div>
                </div>

                <div className="flex flex-row gap-4 border-b-[1px] border-dark-spell font-medium py-3">
                    <div className="text-chrome  text-xl xl:text-xl xs:text-sm sm:text-sm font-medium">12:30</div>
                    <div className="text-liliac-fields text-xl xl:text-xl xs:text-sm sm:text-sm font-medium">Lunch Break</div>
                </div>

                <div className="flex flex-row gap-4 border-b-[1px] border-dark-spell font-medium py-3">
                    <div className="text-white text-xl xl:text-xl xs:text-sm sm:text-sm font-medium flex items-center">13:30</div>
                    <div className="flex flex-row gap-3 items-center">
                        <div className="flex flex-col">
                        <div className="text-white text-xl xl:text-xl xs:text-sm sm:text-sm font-medium">Education Panel</div>
                        <div className="text-epicurean-orange text-base">How to Grow your Career in Cybersecurity</div>
                        <div className="text-liliac-fields text-sm leaning-[16px] leading-[16px]"> 
                            Claudiu Brândaș <span className="text-white"> [Professor of Business Information Systems Development, West University of Timisoara] </span>  
                            <br></br> Radu Ticiu <span className="text-white"> [Co-Founder, CoderDojo Timisoara] </span>  
                            <br></br> Bogdan Groza  <span className="text-white"> [Professor of Information Security, Politehnica University of Timisoara] </span>  
                            <br></br> Cristina Iordaiche <span className="text-white"> [Computer Science Teacher, Grigore Moisil Highschool, Timisoara ] </span>  
                            <br></br> Anca Dragomir  <span className="text-white"> [Manager of IT & Communications Department, Hidroelectrica] </span>  
                            <br></br> Valentin Mureșan <span className="text-white"> [Timisoara Mayor's Personal Advisor on Digitalization & Smart City] </span> 
                            <br></br> Cristian Driga <span className="text-white"> [enior Cybersecurity Manager, Romanian National Cybersecurity Directorate (DNSC)] </span> 
                            </div>
                        </div>
                    </div>
                </div>

              

                <div className="flex flex-row gap-4 border-b-[1px] border-dark-spell font-medium py-3">
                    <div className="text-chrome  text-xl xl:text-xl xs:text-sm sm:text-sm font-medium">15:00</div>
                    <div className="text-liliac-fields text-xl xl:text-xl xs:text-sm sm:text-sm font-medium">Closing Remarks</div>
                </div>

                <div className="flex flex-row gap-4 font-medium py-3">
                    <div className="text-chrome  text-xl xl:text-xl xs:text-sm sm:text-sm font-medium">15:30</div>
                    <div className="text-liliac-fields text-xl xl:text-xl xs:text-sm sm:text-sm font-medium">Networking</div>
                </div>
            </div>
            ) : (
                <div>
                <div className="flex flex-row gap-4 border-b-[1px] border-dark-spell font-medium py-3">
                   <div className="text-chrome  text-xl font-medium">11:00</div>
                   <div className="text-liliac-fields text-xl font-medium">Coffee & Snacks</div>
               </div>
   
               <div className="flex flex-row gap-4 border-b-[1px] border-dark-spell font-medium py-3">
                   <div className="text-chrome  text-xl font-medium">12:00</div>
                   <div className="text-liliac-fields text-xl font-medium">Workshop</div>
               </div>
   
               <div className="flex flex-row gap-4 border-b-[1px] border-dark-spell font-medium py-3">
                   <div className="text-white text-xl font-medium flex items-center">12:30</div>
                   <div className="flex flex-row gap-3 items-center">
                        <div className="bg-dark-spell p-3 flex flex-row items-center h-[64px] w-[64px] min-w-[64px]">
                            <img src={scan} alt="scan icon" ></img>
                        </div>
                       <div className="flex flex-col">
                       <div className="text-white text-xl font-medium">Demo Session</div>
                       <div className="text-liliac-fields text-sm leaning-[16px] leading-[16px]">OPSWAT</div>
                       </div>
                   </div>
               </div>
   
               <div className="flex flex-row gap-4 border-b-[1px] border-dark-spell font-medium py-3">
                   <div className="text-white text-xl font-medium flex items-center">13:15</div>
                   <div className="flex flex-row gap-3 items-center">
                        <div className="bg-dark-spell p-3 flex flex-row items-center h-[64px] w-[64px] min-w-[64px]">
                            <img src={scan} alt="scan icon" ></img>
                        </div>
                       <div className="flex flex-col">
                       <div className="text-white text-xl font-medium">Demo Session</div>
                       <div className="text-liliac-fields text-sm leaning-[16px] leading-[16px]">Speaker Name</div>
                       </div>
                   </div>
               </div>
   
               <div className="flex flex-row gap-4 border-b-[1px] border-dark-spell font-medium py-3">
                   <div className="text-chrome  text-xl font-medium">14:00</div>
                   <div className="text-liliac-fields text-xl font-medium">Lunch Break</div>
               </div>
   
               <div className="flex flex-row gap-4 border-b-[1px] border-dark-spell font-medium py-3">
                   <div className="text-white text-xl font-medium flex items-center">15:00</div>
                   <div className="flex flex-row gap-3 items-center">
                        <div className="bg-dark-spell p-3 flex flex-row items-center h-[64px] w-[64px] min-w-[64px]">
                            <img src={scan} alt="scan icon" ></img>
                        </div>
                       <div className="flex flex-col">
                       <div className="text-white text-xl font-medium">Demo Session</div>
                       <div className="text-liliac-fields text-lg leading-[16px]">Speaker Name</div>
                       </div>
                   </div>
               </div>
   
               <div className="flex flex-row gap-4 border-b-[1px] border-dark-spell font-medium py-3">
                   <div className="text-white text-xl font-medium flex items-center">16:00</div>
                   <div className="flex flex-row gap-3 items-center">
                        <div className="bg-dark-spell p-3 flex flex-row items-center h-[64px] w-[64px] min-w-[64px]">
                            <img src={scan} alt="scan icon" ></img>
                        </div>
                       <div className="flex flex-col">
                       <div className="text-white text-xl font-medium">Demo Session</div>
                       <div className="text-liliac-fields text-lg leading-[16px]">Speaker Name</div>
                       </div>
                   </div>
               </div>
   
               <div className="flex flex-row gap-4 font-medium py-3">
                   <div className="text-chrome  text-xl font-medium">17:00</div>
                   <div className="text-liliac-fields text-xl font-medium">Networking</div>
               </div>
           </div>
            )}

        </div>
    </div>
}