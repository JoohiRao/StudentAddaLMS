import Image from 'next/image'; 

export default function InputLibrary(){
    return (
         <div className="input_section w-full p-1 px-1 sm:px-3 rounded-full  bg-white rounded-full shadow-sm">
                             {/* Input and Buttons Row */}
                             <div className="flex gap-0 sm:gap-3 items-center">
                                {/* Input Field */}
                                <Image src="/listings3/search.png" alt="search image" width={20} height={20}/>
                                <input
                                type="text"
                                placeholder="Search by library name or location"
                                className="bg-white text-[10px] sm:text-[20px] grow px-2 py-1  sm:px-4 sm:py-2 rounded-md w-full md:w-[300px] focus:outline-none"
                                />
        
                                {/* Buttons */}
                                <Image src="/listings3/separator.png" width={1} alt="search image" height={4} className='hidden sm:inline'/>
                                <button className="px-4 py-2 font-extralight bg-white text-sm flex items-center gap-2 hover:bg-gray-100 hidden sm:inline">
                                    <Image src="/listings3/filter.png" width={14} alt="search image" height={14}/> Filter
                                </button>
        
                                 <Image src="/listings3/separator.png" alt="search image" width={1} height={4} className='hidden sm:inline'/>
                                <button className="px-4 py-2 bg-white text-sm flex  items-center gap-2 hover:bg-gray-100 hidden sm:inline">
                                    <Image src="/listings3/map.png" alt="search image" width={14} height={14}/><span className="whitespace-nowrap font-extralight hidden sm:inline"> Map view</span>
                                </button>
        
                                <span className="text-gray-500 hidden sm:inline">|</span> {/* Separator */}
                                <button className="px-4 py-2 bg-white text-sm text-gray-400 hover:bg-gray-100 hidden sm:inline">Clear</button>
        
                                {/* Search Button */}
                                <button className="px-4 py-1 sm:px-6 sm:py-2 bg-black text-white rounded-full text-[10px] sm:text-sm hover:bg-gray-900">Search</button>
                            </div>
                        </div>
    )
}