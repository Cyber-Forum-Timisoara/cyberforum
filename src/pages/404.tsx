import React from "react";

const NotFound = () => {
    return (
        <div className='flex justify-center items-center h-full'>
            <div className='text-5xl sm:text-5xl md:text-5xl lg:text-7xl font-bold'>
                <div className='flex flex-col justify-center sm:flex-row pb-5'>
                    <span className='text-bitcoin text-center sm:text-left'>
                        404
                    </span>
                </div>
                <div className='flex text-2xl placeholder-shown sm:text-2xl md:text-3xl lg:text-4xl text-center w-full sm:w-3/4 md:w-2/3 lg:w-[630px] mx-auto'>
                    We are sorry, we can’t find the page that you are looking
                    for
                </div>
                <div className='inline-block text-[16px] text-center font-normal w-full'>
                    Go back to&nbsp;{' '}
                    <a to='/' className='underline'>
                        Cyber Forum
                    </a>
                </div>
            </div>
        </div>
    );
};

export default NotFound;
