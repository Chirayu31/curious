"use client";
import React, { useState, useEffect } from 'react';

const Typography = ({ count }) => {

    const [countdown, setCountdown] = useState('');

    useEffect(() => {
        const interval = setInterval(() => {
            const today = new Date();
            const nextSunday = new Date(today.getFullYear(), today.getMonth(), today.getDate() + (7 - today.getDay()));
            const timeRemaining = nextSunday.getTime() - today.getTime();

            if (timeRemaining < 0) {
                clearInterval(interval);
                setCountdown('00:00:00');
            } else {
                const hours = Math.floor(timeRemaining / (1000 * 60 * 60));
                const minutes = Math.floor((timeRemaining / (1000 * 60)) % 60);
                const seconds = Math.floor((timeRemaining / 1000) % 60);

                setCountdown(`${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`);
            }
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    const [hours, minutes, seconds] = countdown.split(':').map(Number);

    return (
        <div className='grid col-span-2 grid-rows-2 items-center justify-center sm:mt-20 lg:mr-20  sm:px-10'>
            <div className='typo'>
                <h1 className='font-medium max-md:text-center text-2xl sm:text-4xl xl:text-5xl lg:text-5xl px-2'>
                    Curiosity is one of the great secrets of happiness.
                </h1>
            </div>

            <div className='flex flex-col md:flex-row gap-2 w-full sm:mt-10'>

                <div>
                    <h3 className='font-medium max-md:text-center text-3xl sm:text-2xl lg:text-3xl px-2'>
                        Published
                    </h3>
                    <p className='font-medium max-md:text-center text-right text-3xl sm:text-4xl xl:text-5xl lg:text-5xl px-2 mt-2'>
                        {count}
                    </p>
                </div>

                <div className=' border border-black max-md:w-1/2 lg:mr-8'>
                    {/* middle line */}
                </div>

                <div className=' md:w-3/5'>

                    <h4 className='font-medium text-center text-lg sm:text-2xl lg:text-3xl px-2 '>
                        Next Blog Coming in
                    </h4>

                    <div className='flex flex-row gap-2 mt-2 w-full'>

                        <div className='w-full'>
                            <h3 className='font-medium text-center text-3xl sm:text-4xl xl:text-5xl lg:text-5xl px-2'>
                                {hours}
                            </h3>
                            <p className='font-medium italic text-center text-lg sm:text-xl lg:text-2xl px-2 '>
                                Hours
                            </p>
                        </div>

                        <div className=' w-full '>
                            <h3 className='font-medium text-center text-3xl sm:text-4xl xl:text-5xl lg:text-5xl px-2'>
                                {minutes}
                            </h3>
                            <p className='font-medium italic text-center text-lg sm:text-xl lg:text-2xl px-2 '>
                                Minutes
                            </p>
                        </div>

                        <div className=' w-full '>
                            <h3 className='font-medium text-center text-3xl sm:text-4xl xl:text-5xl lg:text-5xl px-2'>
                                {seconds}
                            </h3>
                            <p className='font-medium italic text-center text-lg sm:text-xl lg:text-2xl px-2 '>
                                Seconds
                            </p>
                        </div>

                    </div>


                </div>

            </div>
        </div>

    )
}

export default Typography