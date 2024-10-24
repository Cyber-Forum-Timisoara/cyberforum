import React from "react";
import facebook from '../images/Facebook.svg';
import linkedin from '../images/linkedin.svg';
import youtube from '../images/youtube.svg';
import Twitter from '../images/Twitter.svg';
import Instagram from '../images/Instagram.svg';

export const Footer = () => {
    return (
        <div className="w-full px-4 md:px-16 py-[100px] bg-void flex-col justify-start items-start gap-2.5 inline-flex">
            <div className="self-stretch h-16 flex-col justify-start items-center gap-5 flex">
                <div className="self-stretch px-px justify-between items-center flex flex-col md:flex-row">
                    <div className="h-4 justify-start items-center gap-10 flex flex-col md:flex-row">
                        <div className="justify-start items-start gap-6 flex">
                            <div className="text-chrome text-sm font-normal font-inter">Code of Conduct</div>
                            <div className="text-chrome text-sm font-normal font-inter">Privacy Policy</div>
                        </div>
                    </div>
                    <div className="justify-start items-start gap-6 flex mt-4 md:mt-0">
                        <a href="https://www.facebook.com/people/Timisoara-Cyber-Forum/61566370995014/" target="_blank" rel="noopener noreferrer">
                            <img src={facebook} alt="Facebook" />
                        </a>
                        {/* <a href="https://www.x.com/opswat" target="_blank" rel="noopener noreferrer">
                            <img src={Twitter} alt="Twitter" />
                        </a>
                        <a href="https://www.linkedin.com/company/opswat" target="_blank" rel="noopener noreferrer">
                            <img src={linkedin} alt="LinkedIn" />
                        </a> */}
                        {/* <a href="https://www.youtube.com/@OpswatInc" target="_blank" rel="noopener noreferrer">
                            <img src={youtube} alt="YouTube" />
                        </a> */}
                        <a href="https://www.instagram.com/cyberforum.tm/" target="_blank" rel="noopener noreferrer">
                            <img src={Instagram} alt="Instagram" />
                        </a>
                    </div>
                </div>
                <div className="self-stretch h-4 flex-col justify-start items-start gap-5 flex md:items-start xs:items-center">
                    <div className="text-chrome text-sm font-normal font-inter">© Timisoara CyberForum 2024. All rights reserved.</div>
                </div>
            </div>
        </div>
    );
}
