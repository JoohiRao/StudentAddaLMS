"use client"
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import InputLibrary from "@/components/input";
import { ChevronDown } from "lucide-react";
import LibraryCard from "@/components/library_listing1/librarycard";
import Filter from "@/components/library_listing1/filter";

export default function AllLibraries() {
  return (
    <div className="bg-[#ECE3DA]">
      <Navbar />

      <div className="main_section relative px-4 md:px-[10%] bg-[#ECE3DA] min-h-screen w-full">
        {/* Header */}
        <div className="p-2 py-10 mt-4 text-center text-[32px] md:text-[45px] leading-[1.2] tracking-[0.36px] font-urbanist text-gray-900">
          <span className="font-semibold">Explore </span>Libraries Near You
        </div>

        <InputLibrary />

        {/* Filter and Content Section */}
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Left Filter */}
          

          <Filter/>

          {/* Right Content */}
          <div className="w-full lg:w-[70%] p-4">
            {/* Top Header */}
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
              <p className="font-urbanist font-medium text-[18px]">1,2314 Results</p>

              <div className="flex items-center space-x-2">
                <p className="text-sm font-urbanist">Sort by</p>
                <div className="relative flex items-center">
                  <select className="bg-transparent border px-4 py-2 rounded text-sm font-urbanist text-gray-700 cursor-pointer">
                    <option>Newest</option>
                    <option>Medium</option>
                    <option>Oldest</option>
                  </select>
                  <ChevronDown className="ml-[-24px]" />
                </div>
              </div>
            </div>

            {/* Cards */}
            <LibraryCard />

            {/* Pagination */}
            <div className="flex flex-wrap space-x-2 mt-6">
              {[1, 2, 3, 4, 5].map((page, index) => (
                <button
                  key={index}
                  className={`w-10 h-10 rounded-full border flex items-center justify-center font-urbanist font-medium text-[16px]
                    ${page === 1 ? 'bg-black text-white' : 'bg-transparent text-gray-500 hover:text-black hover:border-black'}
                    ${page > 3 ? 'opacity-50' : ''}`}
                >
                  {page}
                </button>
              ))}

              <button className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center text-gray-500 hover:text-black">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
