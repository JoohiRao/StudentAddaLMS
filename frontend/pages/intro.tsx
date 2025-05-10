import Image from "next/image"
import { Urbanist } from "next/font/google";

export default function Intro(){
  return (

    <div className="flex items-center justify-center px-4 sm:px-6 md:px-8">
    <div className="relative w-full bg-[#EFEAE5] rounded-2xl shadow-lg p-4 sm:p-6 md:p-8 lg:p-12 flex flex-row items-center gap-4 sm:gap-6 md:gap-8 lg:gap-16 mt-6 sm:mt-8 md:mt-16 lg:mt-20">
{/* Left Section - Same layout for all devices */}
      <div className="w-[90%] p-2 sm:p-3 md:p-4 text-left flex flex-col items-start z-10">
      <h1 className="font-[Urbanist] font-light text-xl sm:text-2xl md:text-3xl lg:text-5xl leading-tight tracking-[0.38px] text-black mb-2 sm:mb-3 md:mb-4">
    <span className="text-[#796146] font-semibold">Smart</span> Library
    <br />
    Management
    <br />
    <span className="text-[#796146] font-semibold">All in One Place</span>
  </h1>
      
  <p className="font-[Plus_Jakarta_Sans] font-light text-xs sm:text-sm md:text-base lg:text-lg leading-snug tracking-[0.13px] text-black mb-3 sm:mb-4 md:mb-6 mt-1 sm:mt-2 md:mt-3 lg:mt-5 text-left">
    Manage books, seat bookings,
    <br />
    members, and digital libraries.
  </p>
      
  <button className="bg-black text-white px-4 sm:px-6 md:px-8 lg:px-12 py-1.5 sm:py-2 md:py-2.5 rounded-full text-xs sm:text-sm md:text-base font-light leading-tight flex items-center gap-1 sm:gap-2 hover:bg-gray-900 transition">
    Get Started
  </button>
</div>
    
{/* Image Section - Consistent across all devices */}
<div className="absolute  top-[1rem] right-[-3.2rem] sm:top-[-4rem] md:top-[2rem] md:right-[-6.3rem] lg:top-[-6rem] lg:right-[-11rem] w-50 sm:w-95 md:w-100 lg:w-160 z-0">
  <Image
    src="/home/image1.png"
    alt="Library Illustration"
    width={900}
    height={900}
    className="w-full h-auto object-contain " 
  />
</div>
</div>
</div>
  )
}