import React from 'react';
import company1 from '../images/Company1.svg';
import company2 from '../images/Company2.svg';
import company3 from '../images/Company3.svg';
import company4 from '../images/Company4.svg';
import company5 from '../images/Company5.svg';
import company0 from '../images/Company0.svg';

export const LogoCard = () => {
    return (
        <div className="flex w-full px-[120px] py-[60px] justify-center bg-heise-black border border-solid border-baclavas xs:px-[30px] sm:px-[60px] lg:px-[120px]">
            <div className="flex justify-center w-full">
                <div className="flex flex-wrap justify-center lg:justify-between gap-5 w-full">
                    <img className="w-[80px] md:w-[120px]" alt="Sponsor Logo" src={company0} />
                    <img className="w-[80px] md:w-[120px]" alt="Sponsor Logo" src={company1} />
                    <img className="w-[80px] md:w-[120px]" alt="Sponsor Logo" src={company2} />
                    <img className="w-[80px] md:w-[120px]" alt="Sponsor Logo" src={company3} />
                    <img className="w-[80px] md:w-[120px]" alt="Sponsor Logo" src={company4} />
                    <img className="w-[80px] md:w-[120px]" alt="Sponsor Logo" src={company5} />
                </div>
            </div>
        </div>
    );
};