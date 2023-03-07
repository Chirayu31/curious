import React from 'react'
import Illustration from './Illustration'
import Typography from './Typography'

const Home = ({ count, children }) => {
  return (
    <>
      <div className="w-full grid grid-cols-1 md:grid-cols-3 justify-items-between max-md:justify-items-center min-h-fit ">
        <Illustration />
        <Typography count={count} />
        {/* Post Preview <div>{children}</div> */}
      </div>

      <p className='max-md:hidden mt-52 w-full text-center 
      font-medium text-[#7D77A7] text-lg sm:text-xl lg:text-2xl px-2 '>Scroll Down</p>

      <div className="mt-16 recent-post-bar w-full m-auto grid grid-cols-2 justify-items-center">
        <h3 className='font-medium text-sm sm:text-lg xl:text-2xl lg:text-xl'>Recent posts</h3>
        <p className='font-medium text-sm sm:text-lg text-[#7D77A7]'>View All</p>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-12 sm:mx-10 mt-12 mb-12'>
        {children}
      </div>

    </>
  )
}

export default Home
