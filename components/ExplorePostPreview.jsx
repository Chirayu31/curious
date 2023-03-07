import Link from 'next/link'
import img from '../public/images/04.jpg'
import Image from 'next/image'

export default function ExplorePostPreview(props) {
    return (
        <div key={props.slug} className='w-full grid grid-cols-1 mt-12 justify-items-center'>

            <div className='box rounded-lg w-full sm:w-5/6 shadow-custom bg-[#3E3868] h-44 md:h-56 grid grid-cols-2 sm:grid-cols-3 max-sm:items-center'>
                <div className='p-2 '>
                    <Image src={img} className="rounded-lg object-cover object-center aspect-video	 h-32 sm:h-40 md:h-52" alt='' />
                </div>
                <div className='col-span-1 sm:col-span-2 pt-4 md:pl-2'>
                    <Link href={`/posts/${props.slug}`}>
                        <h3 className='font-medium text-lg sm:text-xl lg:text-2xl px-2'>
                            {props.title}
                        </h3>
                    </Link>

                    <p className='text-sm sm:text-base'>
                        {props.subtitle} - {props.date}
                    </p>
                </div>
            </div>

        </div>
    )
}
