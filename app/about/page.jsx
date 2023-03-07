import Illustration from '@/components/Illustration'
import React from 'react'

const AboutPage = () => {
    return (
        <div className="w-full grid grid-cols-1 md:grid-cols-3 justify-items-between max-md:justify-items-center min-h-fit ">
            <Illustration avatar={true} />

            <div className='grid col-span-2 grid-rows-2 items-center justify-center sm:mt-20 lg:mr-20  sm:px-10'>
                <div className='typo'>
                    <h1 className='font-medium max-md:text-center text-2xl sm:text-4xl xl:text-5xl lg:text-5xl px-2'>
                        Hello! My name is Chirayu Pancholi
                    </h1>
                </div>

                <div className='flex flex-col md:flex-row gap-2 w-full sm:mt-10'>

                    <p>

                    </p>

                </div>
            </div>
        </div>
    )
}

export default AboutPage