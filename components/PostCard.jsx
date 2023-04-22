import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const PostCard = (props) => {
    return (
        <div key={props.slug} className='w-full bg-[#3E3868] rounded-lg shadow-custom p-5'>
            <Link href={`/posts/${props.slug}`}>
                <Image src={props.image}
                    alt="post-image"
                    className="rounded-lg object-cover object-center h-64"
                    width={1000}
                    height={1000}
                />
                <h5 className='font-medium mt-2 text-center text-lg xl:text-2xl lg:text-xl'>
                    {props.title}
                </h5>
                <p className='mt-2'>{props.subtitle}</p>
            </Link>
        </div>
    )
}

export default PostCard