import React, {useState} from "react";
import { Badge } from "./Badge";
import scan from '../images/scan.svg';

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
        <div className="flex flex-col w-full bg-heise-black p-[30px] gap-8">
            <div className="w-auto">
                <Badge label='Conference Day 1' variant='malicious'/>
            </div>
            <h2 className="font-medium text-[40px] leading-[40px] text-liliac-fields font-simplon-mono">Friday, November 15th</h2>
            {toggleButton}
            
            <div>
            {selectedView === 'presentations' ? (
            <div>
             <div className="flex flex-row gap-8 border-b-[1px] border-dark-spell font-medium py-3">
                <div className="text-chrome  text-2xl font-medium">11:00</div>
                <div className="text-liliac-fields text-2xl font-medium">Registration & Coffee</div>
            </div>

            <div className="flex flex-row gap-8 border-b-[1px] border-dark-spell font-medium py-3">
                <div className="text-chrome  text-2xl font-medium">12:00</div>
                <div className="text-liliac-fields text-2xl font-medium">Opening ceremony</div>
            </div>

            <div className="flex flex-row gap-8 border-b-[1px] border-dark-spell font-medium py-3">
                <div className="text-white text-2xl font-medium flex items-center">12:30</div>
                <div className="flex flex-row gap-3 items-center">
                    <div className="bg-dark-spell p-3">
                    <img src={scan} alt="scan icon"></img>
                    </div>
                    <div className="flex flex-col">
                    <div className="text-white text-2xl font-medium">Panel Name</div>
                    <div className="text-liliac-fields text-lg leading-[26px]">Speaker Name</div>
                    </div>
                </div>
            </div>

            <div className="flex flex-row gap-8 border-b-[1px] border-dark-spell font-medium py-3">
                <div className="text-white text-2xl font-medium flex items-center">13:15</div>
                <div className="flex flex-row gap-3 items-center">
                    <div className="bg-dark-spell p-3">
                    <img src={scan} alt="scan icon"></img>
                    </div>
                    <div className="flex flex-col">
                    <div className="text-white text-2xl font-medium">Panel Name</div>
                    <div className="text-liliac-fields text-lg leading-[26px]">Speaker Name</div>
                    </div>
                </div>
            </div>

            <div className="flex flex-row gap-8 border-b-[1px] border-dark-spell font-medium py-3">
                <div className="text-chrome  text-2xl font-medium">14:00</div>
                <div className="text-liliac-fields text-2xl font-medium">Lunch Break</div>
            </div>

            <div className="flex flex-row gap-8 border-b-[1px] border-dark-spell font-medium py-3">
                <div className="text-white text-2xl font-medium flex items-center">15:00</div>
                <div className="flex flex-row gap-3 items-center">
                    <div className="bg-dark-spell p-3">
                    <img src={scan} alt="scan icon"></img>
                    </div>
                    <div className="flex flex-col">
                    <div className="text-white text-2xl font-medium">Panel Name</div>
                    <div className="text-liliac-fields text-lg leading-[26px]">Speaker Name</div>
                    </div>
                </div>
            </div>

            <div className="flex flex-row gap-8 border-b-[1px] border-dark-spell font-medium py-3">
                <div className="text-white text-2xl font-medium flex items-center">16:00</div>
                <div className="flex flex-row gap-3 items-center">
                    <div className="bg-dark-spell p-3">
                    <img src={scan} alt="scan icon"></img>
                    </div>
                    <div className="flex flex-col">
                    <div className="text-white text-2xl font-medium">Panel Name</div>
                    <div className="text-liliac-fields text-lg leading-[26px]">Speaker Name</div>
                    </div>
                </div>
            </div>

            <div className="flex flex-row gap-8 border-b-[1px] border-dark-spell font-medium py-3">
                <div className="text-chrome  text-2xl font-medium">17:00</div>
                <div className="text-liliac-fields text-2xl font-medium">Networking</div>
            </div>
        </div>

        ) : (
            <div>
             <div className="flex flex-row gap-8 border-b-[1px] border-dark-spell font-medium py-3">
                <div className="text-chrome  text-2xl font-medium">11:00</div>
                <div className="text-liliac-fields text-2xl font-medium">Registration & Coffee</div>
            </div>

            <div className="flex flex-row gap-8 border-b-[1px] border-dark-spell font-medium py-3">
                <div className="text-chrome  text-2xl font-medium">12:00</div>
                <div className="text-liliac-fields text-2xl font-medium">Workshop</div>
            </div>

            <div className="flex flex-row gap-8 border-b-[1px] border-dark-spell font-medium py-3">
                <div className="text-white text-2xl font-medium flex items-center">12:30</div>
                <div className="flex flex-row gap-3 items-center">
                    <div className="bg-dark-spell p-3">
                    <img src={scan} alt="scan icon"></img>
                    </div>
                    <div className="flex flex-col">
                    <div className="text-white text-2xl font-medium">Workshop Name</div>
                    <div className="text-liliac-fields text-lg leading-[26px]">Speaker Name</div>
                    </div>
                </div>
            </div>

            <div className="flex flex-row gap-8 border-b-[1px] border-dark-spell font-medium py-3">
                <div className="text-white text-2xl font-medium flex items-center">13:15</div>
                <div className="flex flex-row gap-3 items-center">
                    <div className="bg-dark-spell p-3">
                    <img src={scan} alt="scan icon"></img>
                    </div>
                    <div className="flex flex-col">
                    <div className="text-white text-2xl font-medium">Workshop Name</div>
                    <div className="text-liliac-fields text-lg leading-[26px]">Speaker Name</div>
                    </div>
                </div>
            </div>

            <div className="flex flex-row gap-8 border-b-[1px] border-dark-spell font-medium py-3">
                <div className="text-chrome  text-2xl font-medium">14:00</div>
                <div className="text-liliac-fields text-2xl font-medium">Lunch Break</div>
            </div>

            <div className="flex flex-row gap-8 border-b-[1px] border-dark-spell font-medium py-3">
                <div className="text-white text-2xl font-medium flex items-center">15:00</div>
                <div className="flex flex-row gap-3 items-center">
                    <div className="bg-dark-spell p-3">
                    <img src={scan} alt="scan icon"></img>
                    </div>
                    <div className="flex flex-col">
                    <div className="text-white text-2xl font-medium">Workshop Name</div>
                    <div className="text-liliac-fields text-lg leading-[26px]">Speaker Name</div>
                    </div>
                </div>
            </div>

            <div className="flex flex-row gap-8 border-b-[1px] border-dark-spell font-medium py-3">
                <div className="text-white text-2xl font-medium flex items-center">16:00</div>
                <div className="flex flex-row gap-3 items-center">
                    <div className="bg-dark-spell p-3">
                    <img src={scan} alt="scan icon"></img>
                    </div>
                    <div className="flex flex-col">
                    <div className="text-white text-2xl font-medium">Workshop Name</div>
                    <div className="text-liliac-fields text-lg leading-[26px]">Speaker Name</div>
                    </div>
                </div>
            </div>

            <div className="flex flex-row gap-8 border-b-[1px] border-dark-spell font-medium py-3">
                <div className="text-chrome  text-2xl font-medium">17:00</div>
                <div className="text-liliac-fields text-2xl font-medium">Networking</div>
            </div>
        </div>
        )}
    </div>
        </div>


        
        <div className="flex flex-col w-full bg-heise-black p-[30px] gap-8">
        <div className="w-auto">
                <Badge label='Conference Day 2' variant='malicious'/>
            </div>       
            <h2 className="font-medium text-[40px] leading-[40px] text-liliac-fields font-simplon-mono">Saturday, November 16th</h2>
            {toggleButton2}
        
            {selectedViewCard === 'presentations' ? (
            <div>
                <div className="flex flex-row gap-8 border-b-[1px] border-dark-spell font-medium py-3">
                    <div className="text-chrome  text-2xl font-medium">10:00</div>
                    <div className="text-liliac-fields text-2xl font-medium">Coffee & Snacks</div>
                </div>

                <div className="flex flex-row gap-8 border-b-[1px] border-dark-spell font-medium py-3">
                    <div className="text-white text-2xl font-medium flex items-center">11:00</div>
                    <div className="flex flex-row gap-3 items-center">
                        <div className="bg-dark-spell p-3">
                        <img src={scan} alt="scan icon"></img>
                        </div>
                        <div className="flex flex-col">
                        <div className="text-white text-2xl font-medium">Panel Name</div>
                        <div className="text-liliac-fields text-lg leading-[26px]">Speaker Name</div>
                        </div>
                    </div>
                </div>

                <div className="flex flex-row gap-8 border-b-[1px] border-dark-spell font-medium py-3">
                    <div className="text-white text-2xl font-medium flex items-center">11:45</div>
                    <div className="flex flex-row gap-3 items-center">
                        <div className="bg-dark-spell p-3">
                        <img src={scan} alt="scan icon"></img>
                        </div>
                        <div className="flex flex-col">
                        <div className="text-white text-2xl font-medium">Panel Name</div>
                        <div className="text-liliac-fields text-lg leading-[26px]">Speaker Name</div>
                        </div>
                    </div>
                </div>

                <div className="flex flex-row gap-8 border-b-[1px] border-dark-spell font-medium py-3">
                    <div className="text-chrome  text-2xl font-medium">12:30</div>
                    <div className="text-liliac-fields text-2xl font-medium">Lunch Break</div>
                </div>

                <div className="flex flex-row gap-8 border-b-[1px] border-dark-spell font-medium py-3">
                    <div className="text-white text-2xl font-medium flex items-center">13:30</div>
                    <div className="flex flex-row gap-3 items-center">
                        <div className="bg-dark-spell p-3">
                        <img src={scan} alt="scan icon"></img>
                        </div>
                        <div className="flex flex-col">
                        <div className="text-white text-2xl font-medium">Panel Name</div>
                        <div className="text-liliac-fields text-lg leading-[26px]">Speaker Name</div>
                        </div>
                    </div>
                </div>

                <div className="flex flex-row gap-8 border-b-[1px] border-dark-spell font-medium py-3">
                    <div className="text-white text-2xl font-medium flex items-center">14:30</div>
                    <div className="flex flex-row gap-3 items-center">
                        <div className="bg-dark-spell p-3">
                        <img src={scan} alt="scan icon"></img>
                        </div>
                        <div className="flex flex-col">
                        <div className="text-white text-2xl font-medium">Panel Name</div>
                        <div className="text-liliac-fields text-lg leading-[26px]">Speaker Name</div>
                        </div>
                    </div>
                </div>

                <div className="flex flex-row gap-8 border-b-[1px] border-dark-spell font-medium py-3">
                    <div className="text-chrome  text-2xl font-medium">15:15</div>
                    <div className="text-liliac-fields text-2xl font-medium">Closing Remarks</div>
                </div>

                <div className="flex flex-row gap-8 border-b-[1px] border-dark-spell font-medium py-3">
                    <div className="text-chrome  text-2xl font-medium">15:30</div>
                    <div className="text-liliac-fields text-2xl font-medium">Networking</div>
                </div>


            </div>
            ) : (
                <div>
                <div className="flex flex-row gap-8 border-b-[1px] border-dark-spell font-medium py-3">
                   <div className="text-chrome  text-2xl font-medium">11:00</div>
                   <div className="text-liliac-fields text-2xl font-medium">Registration & Coffee</div>
               </div>
   
               <div className="flex flex-row gap-8 border-b-[1px] border-dark-spell font-medium py-3">
                   <div className="text-chrome  text-2xl font-medium">12:00</div>
                   <div className="text-liliac-fields text-2xl font-medium">Workshop</div>
               </div>
   
               <div className="flex flex-row gap-8 border-b-[1px] border-dark-spell font-medium py-3">
                   <div className="text-white text-2xl font-medium flex items-center">12:30</div>
                   <div className="flex flex-row gap-3 items-center">
                       <div className="bg-dark-spell p-3">
                       <img src={scan} alt="scan icon"></img>
                       </div>
                       <div className="flex flex-col">
                       <div className="text-white text-2xl font-medium">Workshop Name</div>
                       <div className="text-liliac-fields text-lg leading-[26px]">Speaker Name</div>
                       </div>
                   </div>
               </div>
   
               <div className="flex flex-row gap-8 border-b-[1px] border-dark-spell font-medium py-3">
                   <div className="text-white text-2xl font-medium flex items-center">13:15</div>
                   <div className="flex flex-row gap-3 items-center">
                       <div className="bg-dark-spell p-3">
                       <img src={scan} alt="scan icon"></img>
                       </div>
                       <div className="flex flex-col">
                       <div className="text-white text-2xl font-medium">Workshop Name</div>
                       <div className="text-liliac-fields text-lg leading-[26px]">Speaker Name</div>
                       </div>
                   </div>
               </div>
   
               <div className="flex flex-row gap-8 border-b-[1px] border-dark-spell font-medium py-3">
                   <div className="text-chrome  text-2xl font-medium">14:00</div>
                   <div className="text-liliac-fields text-2xl font-medium">Lunch Break</div>
               </div>
   
               <div className="flex flex-row gap-8 border-b-[1px] border-dark-spell font-medium py-3">
                   <div className="text-white text-2xl font-medium flex items-center">15:00</div>
                   <div className="flex flex-row gap-3 items-center">
                       <div className="bg-dark-spell p-3">
                       <img src={scan} alt="scan icon"></img>
                       </div>
                       <div className="flex flex-col">
                       <div className="text-white text-2xl font-medium">Workshop Name</div>
                       <div className="text-liliac-fields text-lg leading-[26px]">Speaker Name</div>
                       </div>
                   </div>
               </div>
   
               <div className="flex flex-row gap-8 border-b-[1px] border-dark-spell font-medium py-3">
                   <div className="text-white text-2xl font-medium flex items-center">16:00</div>
                   <div className="flex flex-row gap-3 items-center">
                       <div className="bg-dark-spell p-3">
                       <img src={scan} alt="scan icon"></img>
                       </div>
                       <div className="flex flex-col">
                       <div className="text-white text-2xl font-medium">Workshop Name</div>
                       <div className="text-liliac-fields text-lg leading-[26px]">Speaker Name</div>
                       </div>
                   </div>
               </div>
   
               <div className="flex flex-row gap-8 border-b-[1px] border-dark-spell font-medium py-3">
                   <div className="text-chrome  text-2xl font-medium">17:00</div>
                   <div className="text-liliac-fields text-2xl font-medium">Networking</div>
               </div>
           </div>
            )}

        </div>
    </div>
}