import Image from 'next/image'
import img from '../public/images/04.jpg'
import Markdown from 'markdown-to-jsx'

const Post = ({ post }) => {
    return (
        <div className='flex justify-center mt-12'>
            <div className="box pb-3 mb-3 w-5/6 ">
                <Image src={img} className="rounded-lg object-cover object-center aspect-video h-32 sm:h-40 md:h-52" alt='' />

                <h1 className='font-medium mt-4 font-bold text-center text-3xl sm:text-3xl lg:text-4xl px-2'>
                    {post.data.title}
                </h1>



                <article className="px-2 prose lg:prose-xl mx-auto prose-invert">
                    <Markdown>
                        {post.content}
                    </Markdown>
                </article>
            </div>
        </div>

    )
}

export default Post