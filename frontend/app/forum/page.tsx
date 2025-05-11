'use client';

import Navbar from '@/components/navbar';
import { Plus } from 'lucide-react';
import Image from 'next/image';
import Feedback from '@/components/feedback/feedback';
import Footer from '@/components/footer';

export default function Forum() {
  return (
    <div className="min-h-screen bg-[#ECE3DA]">
      <Navbar />
      
      <div className="w-full mx-auto px-3 sm:px-4 md:px-6 py-4 sm:py-6">
        {/* Title */}
        <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-center text-gray-800 mb-4 sm:mb-6 px-2">
          India's Smartest Student Forum — Built by You
        </h1>
        
        {/* Ask Question Section */}
        <div className="flex flex-col sm:flex-row gap-3 items-center mb-6 px-4 sm:px-6 md:px-10 lg:px-20 xl:px-48">
          <input
            type="text"
            placeholder="Ask a question or start a topic..."
            className="flex-grow px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-black bg-white w-full"
          />
          <button className="flex items-center justify-center gap-2 px-4 py-2 bg-black text-white rounded-full hover:bg-gray-900 transition w-full sm:w-auto">
            <Plus size={18} />
            <span className="whitespace-nowrap">Ask Question</span>
          </button>
        </div>
        
        {/* Tabs: Hot, New, Top */}
        <div className="flex items-center justify-center gap-2 sm:gap-3 mb-6">
          {['Hot', 'New', 'Top'].map((tab) => (
            <button
              key={tab}
              className="px-3 sm:px-4 py-1 sm:py-2 bg-white rounded-full text-xs sm:text-sm font-medium hover:bg-gray-100 shadow-sm"
            >
              {tab}
            </button>
          ))}
        </div>
        
        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-6 sm:mb-8 px-2">
          {[
            { icon: 'study.png', label: 'Study & Productivity' },
            { icon: 'tool.png', label: 'Tools & Tech' },
            { icon: 'mental.png', label: 'Mental Health' },
            { icon: 'creative.png', label: 'Creative & Fun' },
            { icon: 'career.png', label: 'Career & Exams' },
          ].map((item) => (
            <div
              key={item.label}
              className="flex items-center gap-1 sm:gap-2 px-2 sm:px-3 md:px-4 py-1 sm:py-2 bg-[#EFEAE5] rounded-full text-xs sm:text-sm font-medium hover:bg-gray-100 shadow-sm mb-2"
            >
              <Image 
                src={`/forums/${item.icon}`} 
                width={16} 
                height={16} 
                alt={item.label}
                className="w-3 h-3 sm:w-4 sm:h-4"
              />
              <span className="truncate">{item.label}</span>
            </div>
          ))}
        </div>
        
        {/* Forum Feed Section */}
        <div className="flex flex-col  md:flex-row items-start lg:items-start justify-between gap-2 lg:gap-6">
          {/* Advertisement Left - Hidden on mobile/tablet */}
           <div className="flex hidden md:block justify-center my-4">
              <div className="bg-white p-2 rounded-lg shadow-sm">
                <Image 
                  src="/home/adv2.png" 
                  width={200} 
                  height={10} 
                  alt="ad"
                  className="w-full object-contain"
                />
                <p className="text-xs text-center text-gray-400 mt-1">Advertisement</p>
              </div>
            </div>
          
          {/* Feedback / Forum Card - Centered on mobile, left on desktop */}
          <div className="w-full md:w-4/6 lg:w-4/6 flex ">
            <Feedback />
             </div>
            
          
          
          
          {/* Advertisement Right - Hidden on mobile/tablet */}
           <div className="flex hidden md:block justify-center my-4">
              <div className="bg-white p-2 rounded-lg shadow-sm">
                <Image 
                  src="/home/adv2.png" 
                  width={200} 
                  height={10} 
                  alt="ad"
                  className="w-full object-contain"
                />
                <p className="text-xs text-center text-gray-400 mt-1">Advertisement</p>
              </div>
            </div>
         
        </div>
      </div>
      
      <Footer />
    </div>
  );
}