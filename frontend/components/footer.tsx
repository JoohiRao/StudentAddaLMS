'use client';


export default function Footer() {
  return (
    <footer className="w-full bg-[#796146] text-white font-jakarta px-4 sm:px-6 py-6">
      {/* Top Section */}
      <div className="max-w-full mx-9 flex flex-col md:flex-row justify-between gap-16 md:gap-28 mb-1 sm:mb-6 items-center md:items-start text-center md:text-left">
        {/* Logo and Tagline */}
        <div className="flex flex-col items-center md:items-start w-full md:w-2/5">
          <img
            src="/home/logo2.png"
            alt="Footer Visual"
            className="rounded-xl w-48 h-8 object-cover"
          />
          <p className="text-sm tracking-wide font-light mt-2 sm:mt-5 md:text-[16px]">
            Smart Libraries. Smarter Learning.
          </p>
        </div>
        
        {/* Quick Links, Resources, Company */}
        <div className="w-full md:w-5/5 lg:2/5 grid sm:grid-cols-2 md:grid-cols-3 gap-6 text-center md:text-left">
          {/* Quick Links */}
          <div>
            <h2 className="text-base sm:text-lg font-semibold mb-2">Quick Links</h2>
            <ul className="space-y-1 text-[12px] sm:text-sm md:text-[14px] lg:text-sm">
              <li>Home</li>
              <li>About Us</li>
              <li>Features</li>
              <li>Library Listings</li>
              <li>Community Forum</li>
              <li>Blog</li>
              <li>FAQ & Help Center</li>
            </ul>
          </div>
          
          {/* Resources */}
          <div>
            <h2 className="text-base sm:text-lg font-semibold mb-2">Resources</h2>
            <ul className="space-y-1 text-[12px] sm:text-sm md:text-[14px] lg:text-sm">
              <li>Seat Booking</li>
              <li>E-Library</li>
              <li>Book Inventory</li>
              <li>Productivity Tools</li>
              <li>Quizzes</li>
            </ul>
          </div>
          
          {/* Company */}
          <div>
            <h2 className="text-base sm:text-lg font-semibold mb-2">Company</h2>
            <ul className="space-y-1 text-[12px] sm:text-sm md:text-[14px] lg:text-sm">
              <li>Our Story</li>
              <li>Mission & Vision</li>
              <li>The Team</li>
              <li>Careers</li>
              <li>Contact Us</li>
            </ul>
          </div>
        </div>
      </div>
      
      {/* Divider */}
      <div className="w-full border-t my-4 border-[#E3DBD8]"></div>
      
      {/* Bottom Section */}
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-6 justify-between items-center md:items-start text-center md:text-left">
        {/* Email Input */}
        <div className="w-full flex justify-center md:justify-start">
          <div className="flex max-w-md w-full">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 bg-white text-black text-sm placeholder-gray-400 outline-none rounded-l-md"
            />
            <button className="bg-black text-white px-4 py-2 rounded-r-md hover:bg-gray-700 transition font-semibold text-sm">
              Subscribe
            </button>
          </div>
        </div>
        
        {/* Social Icons */}
        <div className="flex gap-4 justify-center">
          <img src="/home/face.png" alt="Facebook" className="w-5 h-5 object-contain" />
          <img src="/home/tweet.png" alt="Twitter" className="w-5 h-5 object-contain" />
          <img src="/home/linked.png" alt="LinkedIn" className="w-5 h-5 object-contain" />
        </div>
      </div>
      
      {/* Bottom Links */}
      <div className="mt-6 flex flex-wrap justify-center items-center text-center text-[12px] sm:text-sm tracking-wide font-light gap-4">
        <a href="">Privacy Policy</a>
        <a href="">Terms Of Use</a>
        <a href="">Sales and Refunds</a>
        <a href="">Legal</a>
      </div>
    </footer>
  );
}