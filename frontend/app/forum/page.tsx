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

      <div className="w-full mx-auto px-4 py-6">
        {/* Title */}
        <h1 className="text-2xl sm:text-3xl font-bold flex items-center justify-center text-gray-800 mb-6">
          India's Smartest Student Forum — Built by You
        </h1>

        {/* Ask Question Section */}
        <div className="flex flex-col sm:flex-row gap-3 items-center mb-6 px-48">
          <input
            type="text"
            placeholder="Ask a question or start a topic..."
            className="flex-grow flex px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 justify-center items-center focus:ring-black bg-white w-full sm:w-auto"
          />


          <button className="flex items-center gap-2 px-4 py-2 bg-black text-white rounded-full hover:bg-gray-900 transition">
            <Plus size={18} />
            Ask Question
          </button>
        </div>

        {/* Tabs: Hot, New, Top */}
        <div className="flex items-center justify-center gap-3 mb-6">
          {['Hot', 'New', 'Top'].map((tab) => (
            <button
              key={tab}
              className="px-4 py-2 flex items-center justify-center bg-white rounded-full text-sm font-medium hover:bg-gray-100 shadow-sm"
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center mt-10 gap-3 mb-8">
          {[
            { icon: 'study.png', label: 'Study & Productivity' },
            { icon: 'tool.png', label: 'Tools & Tech' },
            { icon: 'mental.png', label: 'Mental Health' },
            { icon: 'creative.png', label: 'Creative & Fun' },
            { icon: 'career.png', label: 'Career & Exams' },
          ].map((item) => (
            <div
              key={item.label}
              className="flex items-center gap-2 px-4 py-2 bg-white rounded-full text-sm font-medium hover:bg-gray-100 shadow-sm"
            >
              <Image src={`/forums/${item.icon}`} width={16} height={16} alt={item.label} />
              <span>{item.label}</span>
            </div>
          ))}
        </div>

        {/* Forum Feed Section */}
        <div className=" flex items-center justify-between ">
          {/* Advertisement Top */}
          <div className="flex justify-center items-center">
            <Image src="/home/adv2.png" width={200} height={10} alt="ad" />
          </div>

          {/* Feedback / Forum Card */}
          <Feedback />

          {/* Advertisement Bottom */}
          <div className="flex justify-center">
            <Image src="/home/adv2.png" width={200} height={10} alt="ad" />
          </div>
        </div>
      </div>

      <Footer/>
    </div>
  );
}
