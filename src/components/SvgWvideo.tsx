import React from "react";
import video from '../images/TimCyberForum-hero.mp4';
import svgMask from '../images/shapeCF.svg';


export const SvgWvideo = ( ) => {
    return  <div 
    className="absolute inset-0 z-10 h-[500px] " 
    style={{
        maskImage: `url(${svgMask})`,
        WebkitMaskImage: `url(${svgMask})`,
        maskSize: 'contain',
        maskRepeat: 'no-repeat',
        maskPosition: 'center',
        WebkitMaskSize: 'contain',
        WebkitMaskRepeat: 'no-repeat',
        WebkitMaskPosition: 'center',
    }}
>
    <video 
        className="w-full h-full object-cover"
        autoPlay 
        loop 
        muted
    >
        <source src={video} type="video/mp4" />
    </video>
</div>
}