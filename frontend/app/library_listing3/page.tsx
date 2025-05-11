import Image from "next/image"
import Navbar from "@/components/navbar"
import { ArrowRight } from "lucide-react"
import LocationCard from "@/components/library_listing3/location"
import InputLibrary from "@/components/input"
import LibraryFeatures from "@/components/library_listing3/library_features"
import LibraryGallery from "@/components/library_listing3/library_gallery"
import LibraryRules from "@/components/library_listing3/library_rules"
import Footer from "@/components/footer"
export default function Page(){
    return (
        <div className="bg-[#ECE3DA]">
        
            <Navbar/>
            <div className="main_section relative px-[10%] bg-[#ECE3DA] min-h-screen w-full">
                <div className="p-2 py-10 mt-4  font-normal text-[45px] leading-[53.18px] tracking-[0.36px] flex items-center justify-center font-urbanist text-gray-900">
                            <span className="font-semibold mr-2">Explore</span>Libraries Near You
                </div>

                {/* input section */}

               <InputLibrary/>

                {/* library_information */}

                <div className="w-full mt-14 p-4 relative rounded-md bg-white mb-20">

                    {/* about study hub */}
                    <div className="about_image">
                        {/* image */}
                        <div className="w-full h-[40%] bg-black">
                            <Image src="/listings3/library1.png" width={1000} height={10} className="object-cover w-full rounded-md"/>

                        </div>
                        

                        {/* info part lirary */}
                        <div className="info2 absolute w-full top-[160px]  p-4 flex justify-between items-center">

                            <div className="left_part w-full">
                            <div className="flex items-center gap-3 px-4 py-2 rounded-md">
                                    {/* Open Now badge */}
                                    <div className="flex items-center gap-1 bg-white px-6 py-2 rounded-full text-sm font-medium text-green-700">
                                        <Image src="/listings3/open.png" alt="Open Icon" width={5} height={5} />
                                        Open Now
                                    </div>

                                    {/* Separator (optional) */}
                                    {/* <span className="text-gray-500">|</span> */}

                                    {/* Library Type badge */}
                                    <div className="bg-[#9DCFF3] px-6 py-2 rounded-full text-sm font-medium text-gray-800">
                                        Public Library
                                    </div>
                                </div>



                                <div className="heading">
                                    <h1 className="font-urbanist font-semibold text-[56.19px] leading-[66.41px] tracking-[0.45px] text-white">
                                        Study Hub
                                    </h1>
                                </div>

                                <div className="flex  w-full justify-between items-center">
                                        <div className="flex items-center gap-6 text-sm text-gray-800">
                                            {/* Review stars and count */}
                                            <div className="flex items-center gap-2 ">
                                                {/* Stars */}
                                                <div className="flex text-yellow-400">
                                                <span>★</span>
                                                <span>★</span>
                                                <span>★</span>
                                                <span>★</span>
                                                <span>☆</span> {/* 4 out of 5 */}
                                                </div>
                                                <p className="font-urbanist font-light text-[14.81px] leading-[17.51px] tracking-[0.12px] text-white">
                                                (128 reviews)
                                                </p>

                                            </div>

                                            {/* Visitor count */}
                                            <div>
                                                <p className="font-urbanist font-light text-[14.81px] leading-[17.51px] tracking-[0.12px] text-white">100+ Daily Visitors</p>
                                            </div>
                                        </div>

                                   {/* like */}
                                        <div className="bg-white p-4 mr-12 rounded-md top-[110px]">
                                            <Image src="/listings3/like.png" width={18} height={18}/>

                                        </div>


                                </div>
                                
                            </div>

                          
                            {/* button section */}

                           



                        </div>

                        

                    </div>

                     {/* more info in rectangular way */}

                 <div className="w-[80%] shadow-md mx-auto mt-[-30px]  scale-z-100 flex flex-wrap justify-between items-center bg-[#F5F5F5] rounded-full px-3 py-2 gap-4">
                            {/* Location */}
                            <div className="flex items-start gap-2 w-[180px] px-5">
                                <Image src="/listings3/location.png" alt="Location" width={20} height={20} />
                                <div>
                                <p className="text-sm font-semibold">University, District</p>
                                <p className="text-xs text-gray-500">2 km away</p>
                                </div>
                            </div>

                            {/* Timing */}
                            <div className="flex items-start gap-2 w-[180px]">
                                <Image src="/listings3/clock.png" alt="Time" width={20} height={20} />
                                <div>
                                <p className="text-sm font-semibold">8:00 am to 9:00 pm</p>
                                <p className="text-xs text-gray-500">Closes in 5 hours</p>
                                </div>
                            </div>

                            {/* Entry Info */}
                            <div className="flex items-start gap-2 w-[160px]">
                                <Image src="/listings3/tag.png" alt="Entry" width={20} height={20} />
                                <div>
                                <p className="text-sm font-semibold">Free Entry</p>
                                <p className="text-xs text-gray-500">Membership available</p>
                                </div>
                            </div>

                            {/* Seat Availability */}
                            <div className="flex items-center gap-2 w-[150px]">
                                <Image src="/listings3/seats.png" alt="Seats" width={20} height={20} />
                                <p className="text-sm font-light text-[#099C6F]">Seats Available</p>
                            </div>

                            {/* Book Now Button */}
                            <div className="flex items-center gap-2 text-sm px-10 py-3 rounded-full font-medium text-white bg-black cursor-pointer hover:underline">
                                Book Now
                                <ArrowRight size={18} />
                            </div>
                    </div>

                    {/* library features and all*/}

                    <div className="flex mt-2 mb-5 justify-between">

                        <div className="left_features w-[70%] ">
                            <div className="library_features">


                                <LibraryFeatures/>
                                <LibraryGallery/>
                                <LibraryRules/>
                            </div>
                        </div>

                        <div className="location_right w-[30%]  flex flex-col gap-6">
                            <LocationCard/>
                            <div className="adv border-1 flex items-center justify-center h-[700px]">Ads

                            </div>
                        </div>
                    </div>

                    



                 </div>

                
                    
                 </div>

                 <Footer/>
              
        </div>


    )
}