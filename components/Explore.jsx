"use client";
import React, { useState } from 'react'
import ExplorePostPreview from './ExplorePostPreview';

const Explore = ({ postMetaData }) => {

    const [query, setQuery] = useState('')

    const postPreviews = postMetaData
        .filter(post => post.title.toLowerCase().includes(query.toLowerCase()) === true)
        .map(post => (
            <ExplorePostPreview key={post.slug} {...post} />
        ))


    return (
        <div>
            <div className='w-full flex justify-center mt-12'>
                <input type="text" className='w-5/6 max-w-[500px] h-10 px-2 bg-transparent outline-none text-lg sm:text-xl border-b-2' name="search" required placeholder='Search here ...' onChange={e => setQuery(e.target.value)} autoComplete="off" />
            </div>

            <div className='w-full grid grid-cols-1 mt-12 justify-items-center'>
                {postPreviews}
            </div>
        </div>
    )
}

export default Explore