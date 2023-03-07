import Image from 'next/image'
import img from '../public/images/04.jpg'
import Markdown from 'markdown-to-jsx'

const Post = ({ post }) => {
    return (
        <div className='flex justify-center mt-8'>
            <div className="box shadow-custom pb-3 mb-3 w-5/6 rounded-lg bg-[#3E3868]">
                <Image src={img} className="rounded-lg object-cover object-center aspect-video h-32 sm:h-40 md:h-52" alt='' />

                <h1 className='font-medium mt-2 text-center text-3xl sm:text-2xl lg:text-3xl px-2'>
                    {post.data.title}
                </h1>

                <hr className='my-2 mx-2 border border-[#7D77A7]' />

                <article className="max-w-none px-2 prose prose-invert lg:prose-xl">
                    <Markdown>
                        {post.content}
                    </Markdown>
                </article>
            </div>
        </div>

    )
}

export default Post