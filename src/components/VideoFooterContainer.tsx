import React from 'react';
import video from '../images/TimCyberForum-hero.mp4';
import scanCity from '../images/scanCity.svg';

export const VideoFooterContainer = () => {
    return (
        <div className="relative h-[1000px] w-full overflow-hidden">
            <video 
                className="absolute top-0 left-0 w-full h-full object-cover" 
                autoPlay 
                loop 
                muted 
                playsInline
                preload="auto"
            >
                <source src={video} type="video/mp4" />
            </video>

            <div className="absolute inset-0 top-[5%] h-[110%] bg-gradient-to-t from-tristesse from-100% via-tristesse via-10% to-tristesse to-100% opacity-20 z-10 scale-y-[1.1]"></div>
            
            <div className="relative flex z-20 flex-col items-left justify-between font-simplon-mono h-full bg-black bg-opacity-50 px-[120px] 2xl:px-[120px] xl:px-[40px] lg:px-[20px] md:px-[20px] xs:px-[10px]">

                <div className="relative flex flex-col align-middle items-center pt-[200px] z-20">
                    <img src={scanCity} alt="Centered SVG" className=""/>
                    <div className="flex flex-col justify-center py-10 items-center z-20">
                        <p className="text-white text-[40px] font-medium leading-10 lg:text-[30px] lg:leading-[30px] md:text-[24px] md:leading-[28px] xs:text-[20px] xs:leading-[26px] text-center">
                            Fostering cybersecurity 
                            <br />
                            innovation and leadership 
                            <br />
                            in our region
                        </p>
                    </div>
                </div>

                <div className='relative flex flex-col justify-center items-center text-white pb-[200px] text-2xl leading-6 z-20 lg:text-xl lg:leading-6 md:text-lg xs:text-base'>
                    <div>November 14th-15th</div>
                    <div className='text-center pb-[30px]'>
                        Centrul de conferințe UPT 
                        <br />
                        Timisoara, Romania
                    </div>
                    <a
                        href="https://oveit.com/hub/event/cyber-forum-timisoara-r3Oawy7w?theme=dark" target="_blank" rel="noopener noreferrer"
                        className="bg-gradient-orange whitespace-nowrap text-lg font-medium text-heise-black px-[60px] py-[20px] lg:px-[50px] lg:py-[18px] md:px-[40px] md:py-[16px] sm:px-[30px] sm:py-[14px] xs:px-[20px] xs:py-[7px] transition ease-in-out delay-1500 hover:-translate-y-1 hover:scale-110 rounded-custom"
                    >
                       Buy your ticket now
                    </a>
                </div>
            </div>
        </div>
    );
};
