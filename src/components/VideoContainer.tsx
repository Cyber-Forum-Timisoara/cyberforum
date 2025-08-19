import React from 'react';
import video from '../images/TimCyberForum-hero.mp4';
import {SvgWvideo} from '../components/SvgWvideo';

export const VideoContainer = () => {
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

        <div className="absolute inset-0  top-[5%] h-[110%] bg-gradient-to-t from-tristesse from-100% via-tristesse via-10% to-tristesse to-100% opacity-20 z-10 scale-y-[1.1]"></div>

        <div className="relative flex z-20 flex-col items-left justify-between font-simplon-mono h-full bg-black bg-opacity-50 px-[120px] 2xl:px-[120px] xl:px-[40px] lg:px-[20px] md:px-[20px] xs:px-[10px]">
          <div className="absolute inset-0 flex justify-center z-10 mt-20">
            <SvgWvideo />
          </div>

          <div className="relative flex flex-col justify-start pt-[200px] w-2/4 z-20 lg:w-2/4 xs:w-full">
            <h1 className="text-white text-[80px] leading-[80px] font-medium pb-10 lg:text-[80px] lg:leading-[80px] md:text-[50px] md:leading-[50px] xs:text-[40px]">
              Timisoara
              <br></br>
              Cyber Forum 2025
            </h1>
            <p className="text-white text-[40px] font-medium leading-10 mt-4 lg:text-[40px] lg:leading-[40px] md:text-[24px] md:leading-[28px] xs:text-[20px] xs:leading-[26px]">
              The Rise of Cyer Culture:
              <br></br>
              People, Education & Tech
            </p>
          </div>

          <div className="relative flex flex-col justify-center items-center text-white pb-[200px] text-2xl leading-6 z-20 lg:text-xl lg:leading-6 md:text-lg xs:text-base">
            <div>October 2nd 2025</div>
            <div className=" text-center pb-[30px]">
              Iulius Congress Hall
              <br></br>
              Timișoara, România
            </div>
            <a
              href="#"
              className="bg-gradient-disabled cursor-not-allowed  whitespace-nowrap text-lg font-medium text-white px-[60px] py-[20px] lg:px-[50px] lg:py-[18px] md:px-[40px] md:py-[16px] sm:px-[30px] sm:py-[14px] transition ease-in-out delay-1500 hover:-translate-y-1 hover:scale-110 rounded-custom"
            >
              Registration opens soon
            </a>
          </div>
        </div>
      </div>
    );
};
