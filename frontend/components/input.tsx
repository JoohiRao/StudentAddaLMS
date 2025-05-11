import Image from 'next/image'; 

export default function InputLibrary(){
    return (
         <div className="input_section w-full p-1 px-3 rounded-full bg-white shadow-sm">
                             {/* Input and Buttons Row */}
                             <div className="flex  gap-3 items-center">
                                {/* Input Field */}
                                <Image alt='input image' src="/listings3/search.png" width={20} height={20}/>
                                <input
                                type="text"
                                placeholder="Search by library name or location"
                                className="bg-white flex-grow px-4 py-2 rounded-md w-full md:w-[300px] focus:outline-none"
                                />
        
                                {/* Buttons */}
                                <Image alt='input image' src="/listings3/separator.png" width={1} height={4}/>
                                <button className="px-4 py-2 font-extralight bg-white text-sm flex items-center gap-2 hover:bg-gray-100">
                                    <Image alt='input image' src="/listings3/filter.png" width={14} height={14}/> Filter
                                </button>
        
                                 <Image alt='input image' src="/listings3/separator.png" width={1} height={4}/>
                                <button className="px-4 py-2 bg-white text-sm flex  items-center gap-2 hover:bg-gray-100">
                                    <Image alt='input image' src="/listings3/map.png" width={14} height={14}/><span className="whitespace-nowrap font-extralight"> Map view</span>
                                </button>
        
                                <span className="text-gray-500">|</span> {/* Separator */}
                                <button className="px-4 py-2 bg-white text-sm text-gray-400 hover:bg-gray-100">Clear</button>
        
                                {/* Search Button */}
                                <button className="px-6 py-2 bg-black text-white rounded-full text-sm hover:bg-gray-900">Search</button>
                            </div>
                        </div>
    )
}