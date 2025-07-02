import { IoMenu } from "react-icons/io5";

const Navbar = () => {
    return (
        <div className="flex items-center w-[90vw] max-w-[1260px] justify-between mx-auto bg-[#1a1a1a] p-5 mt-5 rounded-4xl">
            <div>
                <h1 className="text-lg sm:text-2xl text-white font-semibold">Zaldera</h1>
            </div>
            <div className="md:flex hidden items-center gap-10 text-white/60 md:text-xs lg:text-[15px]">
                <p className="cursor-pointer hover:text-white duration-300">Home</p>
                <p className="cursor-pointer hover:text-white duration-300">Pricing</p>
                <p className="cursor-pointer hover:text-white duration-300">NewsRoom</p>
                <p className="cursor-pointer hover:text-white duration-300">Features</p>
                <p className="cursor-pointer hover:text-white duration-300">Contact Us</p>
            </div>
            <div className="text-white block md:hidden"><IoMenu className="size-6" /></div>
            <button className="py-2 px-6 text-lg  rounded-4xl cursor-pointer hover:bg-gray-500/70 hover:text-white duration-300 text-white/80 bg-gray-500/40">Free Trial</button>
        </div>
    )
}

export default Navbar