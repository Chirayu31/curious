import Link from "next/link"

const NavBar = () => {
    return (
        <div
            className="navbar flex flex-row justify-between mt-10 px-4 sm:px-10 lg:ml-16 "
        >
            <div className='branding '>
                <Link href='/'>
                    <h1 className=" font-semibold text-xl sm:text-2xl xl:text-4xl lg:text-3xl ">
                        Curious
                    </h1>
                </Link>
            </div>
            <div className="link-grp flex flex-row justify-between md:mr-16">
                <Link href='/explore'>
                    <p className="px-3 sm:px-8 md:px-10 lg:px-16 font-medium text-sm sm:text-lg xl:text-2xl lg:text-xl">
                        Explore
                    </p>
                </Link>
                <Link href='https://github.com/Chirayu31'>
                    <p className=" sm:px-8 md:px-10 lg:px-16 font-medium text-sm sm:text-lg xl:text-2xl lg:text-xl">
                        About Me
                    </p>
                </Link>
            </div>
        </div>
    )
}

export default NavBar