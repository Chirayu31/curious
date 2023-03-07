"use client";
import Image from 'next/image'
import { useEffect, useRef } from 'react'
import VanillaTilt from 'vanilla-tilt'
import header from '../public/images/header.jpg'
import img from '../public/images/avatar.jpg'

const Illustration = ({ avatar }) => {

    const tiltRef = useRef(null)

    useEffect(() => {
        if (tiltRef.current) {
            VanillaTilt.init(tiltRef.current, {
                max: 30,
                speed: 600,
                perspective: 1500,
                glare: true,
                'max-glare': 0.5,
            });
        }
    }, []);

    return (

        <div className="max-w-90 max-h-90 ">
            <div className="circle1 w-48 h-48 sm:w-72 sm:h-72 border-[3px] border-[#423B71] rounded-full sm:mt-8 sm:ml-28" ></div>
            <div className="circle2 w-40 h-40 sm:w-60 sm:h-60 border-[3px] border-[#423B71] rounded-full -mt-36 -ml-4 sm:-mt-40 sm:ml-16"></div>
            <Image
                src={avatar ? img : header}
                className=' rounded-t-[150px] rounded-b-[50px] w-[160px] h-[206px] sm:w-[285px] sm:h-[348px] object-cover object-right shadow-custom -mt-[210px] ml-4 sm:-mt-[360px] sm:ml-20'
                ref={tiltRef} alt='Curious Homepage Image'
            />
        </div>


    )
}

export default Illustration