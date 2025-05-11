'use client';

import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export default function Community() {
  return (
    <div className="min-h-screen flex flex-col bg-[#ECE3DA]">
      <Navbar />

      <main className="flex-grow w-full  px-10 sm:px-14 md:px-20 lg:px-36 py-10">
        <h1 className="text-xl sm:text-2xl text-3xl font-bold mb-8">Ask the Community</h1>

        {/* Question Title */}
        <div className="mb-6">
          <label htmlFor="questionTitle" className="block text-lg font-medium mb-2">Question Title</label>
          <input
            id="questionTitle"
            type="text"
            placeholder="How do I manage my study streak?"
            className="w-full p-3 rounded-lg border border-gray-300 bg-[#EFEAE5] focus:outline-none focus:ring-2 focus:ring-black"
          />
          <p className="text-sm text-gray-600 mt-2">Be specific and imagine you're asking a question to another person.</p>
        </div>

        {/* Description */}
        <div className="mb-6">
          <label htmlFor="questionDescription" className="block text-lg font-medium mb-2">Description</label>
          <textarea
            id="questionDescription"
            rows="6"
            placeholder="Describe your problem in detail. What have you tried? What did you expect?"
            className="w-full p-3 rounded-lg bg-[#EFEAE5] border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black"
          ></textarea>
        </div>

        {/* Tags */}
        <div className="mb-6">
          <label htmlFor="tags" className="block text-lg font-medium mb-2">Tags</label>
          <input
            id="tags"
            type="text"
            placeholder="Add up to 5 tags (comma separated)"
            className="w-full p-3 rounded-lg border bg-[#EFEAE5] border-gray-300 focus:outline-none focus:ring-2 focus:ring-black"
          />
        </div>

        {/* Privacy */}
        <div className="mb-8">
          <h2 className="text-lg font-medium mb-3">Privacy</h2>
          <label className="flex items-center gap-3">
            <input type="checkbox" className="h-4 w-4" />
            <span>Notify me via email when someone comments</span>
          </label>
        </div>

        {/* Buttons */}
        <div className="flex gap-4 mb-10">
          <button className="px-6 py-2 bg-black text-white rounded-full hover:bg-gray-800 transition">Post Question</button>
          <button className="px-6 py-2 bg-white text-black border border-black rounded-full hover:bg-gray-100 transition">Save as Draft</button>
        </div>
      </main>

      <Footer />
    </div>
  );
}
