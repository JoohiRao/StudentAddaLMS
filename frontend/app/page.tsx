"use client";

import Image from "next/image";
import Navbar from "@/components/navbar";
import Cards1 from "@/components/homepage_components/homepage_card";
import Card4 from "@/components/homepage_components/homepage_card4";
import Footer from "@/components/footer";
import { ArrowRight } from "lucide-react";
// import { plusJakarta } from './fonts';
import Intro from "@/pages/intro";


export default function Home() {
  return (
    <div className="w-full min-h-screen bg-[#ECE3DA]">
      {/* Navbar should be at the top */}
      <Navbar />

      <main className="w-full px-4 sm:px-8 md:px-12 lg:px-20 xl:px-40 py-6 sm:py-4 md:py-14 lg:py-20">
        {/* Introduction to our website */}

        <Intro />
        <Cards1 />

        {/* Advertisement Section */}
        <div className="w-full mt-8 flex items-center justify-center bg-gray-100 overflow-hidden">
          <Image
            src="/home/adv1.png"
            alt="Example"
            width={500}
            height={300}
            className="w-full h-auto object-cover"
          />
        </div>

        {/* Text1 */}
        <div className="py-2 sm:py-6 md:py-8 lg:py-12 mt-4 sm:mt-6 md:mt-8 mb-4 sm:mb-6 md:mb-8">
          <h1 className="font-[Plus_Jakarta_Sans] font-semibold  sm:font-medium text-xl sm:text-3xl md:text-3.9xl lg:text-4.7xl leading-[28px] sm:leading-[36px] md:leading-[46px] lg:leading-[50px] tracking-[0.29px] text-black text-center mx-auto px-4">
            <span className="hidden sm:inline font-medium">
              Empowering minds{" "}
            </span>
            <span className="text-black font-extralight hidden sm:inline text-left">
              with seamless access to knowledge,
            </span>
            <br className="hidden sm:block md:hidden" />
            <span className="hidden sm:inline">
              {" "}
              collaborative tools, and smarter learning spaces.
            </span>
          </h1>
        </div>

        {/* Text2 */}
        <div className="w-full px-4 sm:px-6 md:px-8 lg:px-12 flex flex-col md:flex-row items-start">
          {/* Left Advertisement */}
          <div
            className="hidden  md:w-1/6 py-4 lg:flex items-center justify-center"
            style={{ height: "100%" }}
          >
            <img
              src="/home/adv2.png"
              alt="Right Advertisement"
              className="h-170 object-contain w-full"
            />
          </div>

          {/* Middle Content */}
          <div className=" py-2 sm:py-5 px-0.2 sm:px-2 w-full md:flex-grow">
            {/* Top Text Content */}
            <div className="mt-1 text-center text-black">
              <h1 className="font-[Plus_Jakarta_Sans] font-bold text-[15px] sm:text-2xl md:text-3xl leading-[13.89px] sm:leading-[63.19px] tracking-normal text-gray-900 mb-4 text-nowrap">
                Smart Libraries. Smarter Learning
              </h1>
              {/* line */}
              <div className=" w-14 sm:w-28 h-1.5 bg-[#796146] mx-auto mb-6 rounded-xl"></div>
              <p className="font-[Plus Jakarta Sans] text-[12px] sm:text-sm md:text-[1.22rem] leading-snug md:leading-[1.63rem] font-semibold text-black px-4 sm:px-6">
                More than just a library platform —{" "}
                <span className="font-semibold text-black">Student Adda</span>{" "}
                is a space to grow, learn, and connect with those chasing the
                same goals.
              </p>
            </div>

            {/* Interface Image + Text */}
            <div className="w-full py-2 md:py-8 px-4 md:px-8 lg:px-12 flex flex-col lg:flex-row items-center lg:items-start justify-between">
              {/* Image Section - First on mobile, Second on desktop */}
              <div className="relative w-full lg:w-7/12 h-auto order-1 lg:order-2">
                <div className="relative w-full">
                  <Image
                    src="/home/image (1).png"
                    alt="Library Illustration"
                    width={900}
                    height={600}
                    className="w-full h-auto object-contain"
                  />
                  {/* Blur effect overlay */}
                  <div
                    className="absolute bottom-0 right-0 w-[180px] h-[180px] md:w-[350px] md:h-[350px] pointer-events-none z-10"
                    style={{
                      background:
                        "radial-gradient(circle, rgba(255,255,255,0.3) 9%, rgba(255,255,255,0) 80%)",
                      filter: "blur(25%)",
                      boxShadow: "0 0 60px rgba(255,255,255,0.3)",
                      borderRadius: "50%",
                      mixBlendMode: "screen",
                    }}
                  />
                </div>
              </div>

              {/* Text Section - Second on mobile, First on desktop */}
              <div className="w-full sm:w-full md:w-full lg:w-5/12 mt-6 lg:mt-0 order-2 lg:order-1 text-left">
                <h2 className="font-[Plus_Jakarta_Sans] font-medium text-xl sm:text-2xl lg:text-xl xl:text-2xl leading-[1.2] tracking-normal text-gray-800 mt-4 md:mt-9  max-w-full">
                  Book seats, boost{" "}
                  <br className="hidden sm:block md:hidden lg:block" />
                  focus, and connect with{" "}
                  <br className="hidden sm:block  md:hidden lg:block" />
                  your study community{" "}
                  <br className="hidden sm:block  md:hidden lg:block" />—{" "}
                  <span className="text-[#824800] font-bold">
                    all in one place.
                  </span>
                </h2>

                <p className="font-[400] text-[12.63px] sm:text-sm lg:text-xs xl:text-sm  leading-[1.3] font-['Plus_Jakarta_Sans'] text-[#7E7E7E] mb-6 mt-3 sm:mt-6 w-full max-w-full">
                  Student Adda brings together everything you{" "}
                  <br className="hidden sm:block  md:hidden lg:hidden xl:block" />
                  need — book a seat at nearby libraries, stay{" "}
                  <br className="hidden sm:block  md:hidden lg:block lg:hidden xl:block" />
                  productive with built-in tools, and engage in{" "}
                  <br className="hidden sm:block  md:hidden lg:block lg:hidden xl:block" />
                  meaningful Q&A through our community{" "}
                  <br className="hidden sm:block  md:hidden lg:block lg:hidden xl:block" />
                  forums. Study smarter, not harder.
                </p>

                <div className="flex flex-col sm:flex-row lg:flex-col items-start gap-4 sm:gap-6 w-full">
                  <button className="bg-black text-white px-6 py-2 sm:px-7 lg:px-9 rounded-3xl text-xs sm:text-sm font-medium shadow-md hover:bg-gray-800 transition">
                    Start Exploring
                  </button>

                  {/* Experience Stats */}
                  <div className="mt-4 sm:mt-0 flex flex-row justify-start gap-4 lg:gap-8">
                    <div className="experience-item">
                      <h1 className="text-base sm:text-lg lg:text-sm xl:text-xl font-semibold text-gray-900">
                        13 Years
                      </h1>
                      <p className="text-[10px] sm:text-xs lg:text-sm text-gray-600">
                        Experience
                      </p>
                    </div>
                    <div className="experience-item">
                      <h1 className="text-base  lg:text-sm xl:text-xl font-semibold text-gray-900">
                        256+
                      </h1>
                      <p className="text-[10px] sm:text-xs lg:text-sm text-gray-600">
                        Clients
                      </p>
                    </div>
                    <div className="experience-item">
                      <h1 className="text-base  lg:text-sm xl:text-xl font-semibold text-gray-900">
                        99.8%
                      </h1>
                      <p className="text-[10px] sm:text-xs lg:text-sm text-gray-600">
                        Satisfaction
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Advertisement */}
          <div
            className="hidden lg:block md:w-1/6 py-4 flex items-center justify-center"
            style={{ height: "100%" }}
          >
            <img
              src="/home/adv2.png"
              alt="Right Advertisement"
              className="h-170 object-contain w-full"
            />
          </div>
        </div>

        {/* responsive ad1 & adv2 */}
        <div className="items-center lg:hidden">
          {/* Image visible on small screens only (mobile) */}
          <Image
            src="/home/res_adv.png"
            alt="Image for small screens"
            width={900} // Width for small screen image
            height={600} // Height for small screen image
            className="sm:hidden md:hidden lg:block" // Hide on larger screens
          />

          {/* Image visible on larger screens */}
          <Image
            src="/home/res_adv.png"
            alt="Image for large screens"
            width={900} // Width for large screen image
            height={600} // Height for large screen image
            className="hidden sm:block" // Hide on small screens, show on larger screens
          />
        </div>

        {/* Why studentAdda */}
        <div className="why py-8 md:py-12 px-4 md:px-6">
          {/* Title Section */}
          <h1 className="text-[24px] sm:text-[33px] md:text-[39px] lg:text-[45px] leading-[130%] tracking-[-0.02em] font-bold text-center text-gray-800 font-['Plus_Jakarta_Sans'] mb-4 sm:mb-5 md:mb-6">
            Why StudentAdda?
          </h1>

          {/* Line */}
          <div className="w-[90px] sm:w-[113px] h-[6px] bg-[#824800] mx-auto mb-8 rounded-[14.02px]"></div>

          <div className="w-full px-2 sm:px-4 md:px-9 flex flex-col md:flex-row items-stretch">
            {/* Left Advertisement */}
            <div
              className="hidden lg:block md:w-1/4 py-4 flex items-center justify-center"
              style={{ height: "100%" }}
            >
              <img
                src="/home/adv2.png"
                alt="Right Advertisement"
                className="h-100 object-contain w-full"
              />
            </div>

            {/* Middle Content */}
            <div className="py-4 md:py-5 px-4 sm:px-6 md:px-12 lg:px-16 w-full md:w-10/12 flex flex-col lg:flex-row gap-0 lg:gap-4 relative">
              {/* Left Image */}
              <div className="w-full lg:w-3/5 flex justify-center items-center">
                <img
                  src="/home/image5.png"
                  alt="Image 4"
                  className="h-auto w-full object-contain lg:max-h-[32rem]"
                />
              </div>

              {/* Right Content */}
              <div className="w-full lg:w-2/5 flex flex-col gap-4 mt-4 lg:mt-0">
                {/* Top row */}
                <div className="flex gap-3">
                  <img
                    src="/home/image4.png"
                    alt="Image 5"
                    className="w-1/2 object-contain"
                  />
                  <img
                    src="/home/image6.png"
                    alt="Image 6"
                    className="w-1/2 object-contain"
                  />
                </div>

                {/* Bottom row */}
                <div className="flex">
                  <img
                    src="/home/image7.png"
                    alt="Image 7"
                    className="w-full object-contain"
                  />
                </div>
              </div>
            </div>

            {/* Right Advertisement */}
            <div
              className="hidden lg:block md:w-1/4 py-4 flex items-center justify-center"
              style={{ height: "100%" }}
            >
              <img
                src="/home/adv2.png"
                alt="Right Advertisement"
                className="h-100 object-contain w-full"
              />
            </div>
          </div>
        </div>

        {/* Adv 2 */}
        <div className="w-full flex justify-center items-center p-4 md:p-15">
          <img
            src="/home/adv5.png"
            alt="Advertisement"
            className="h-auto max-h-70 object-contain"
          />
        </div>

        {/* WHAT is student Adda */}
        <div className="what px-4 py-8 md:py-16  text-center">
          {/* Heading */}
          <h1 className="text-[32px] sm:text-[36px] md:text-[41px] lg:text-[45px] leading-[36px] sm:leading-[42px] md:leading-[48.55px] tracking-[-0.04em] font-bold text-center text-gray-800 font-['Plus_Jakarta_Sans'] mb-4 sm:mb-5 md:mb-6">
            What is Student Adda
          </h1>

          {/* Underline Line */}
          <div className="w-16 h-2 bg-[#824800] mb-6 mx-auto rounded"></div>

          {/* Description */}
          <p className="text-gray-600 text-[15px] leading-[23px] tracking-[-0.04em] font-normal sm:font-semibold max-w-xs sm:max-w-lg md:max-w-2xl mx-auto mb:1 sm:mb-10 font-['Plus_Jakarta_Sans'] text-left">
            Student Adda is a smart,
            <span className="text-[#8B5716]">all-in-one platform</span> designed
            to transform how students engage with libraries and manage their
            study life. It brings together seat booking, digital library access,
            productivity tools, and a peer-driven forum — all under one clean
            and intuitive interface.
            <br />
            <span className="font-bold">
              {" "}
              Whether you're a student looking to focus better, a library owner
              managing operations, or someone who just wants a productive study
              space — Student Adda makes it effortless.
            </span>
          </p>

          {/* Image with Half Blur */}
          <div className="relative w-full max-w-xs sm:max-w-lg md:max-w-2xl lg:max-w-4xl mx-auto mt-8">
            <img
              src="/home/image9.png"
              alt="Student Adda Illustration"
              className="w-full h-auto sm:h-[200px] md:h-[300px] object-cover rounded-xl"
            />
          </div>
        </div>

        {/* Adv 3 */}
        <div className="w-full flex justify-center items-center p-4 md:p-9">
          <img
            src="/home/adv5.png"
            alt="Advertisement"
            className="h-auto max-h-89 object-contain"
          />
        </div>

        {/* Collection / features of Student Adda */}
        <div className="px-4 sm:px-8 md:px-8 lg:px-24 xl:px-44 py-12 md:py-12 w-full">
          <div className="py-8 md:py-8 lg:py-30 px-4 md:px-4 mb-12 bg-[#EFEAE5] mt-6 md:mt-6 text-black rounded-xl">
            {/* Flex row for Text + First 2 Cards */}
            <div className="flex flex-col lg:flex-row justify-between gap-6 mb-8 lg:mb-16">
              {/* Left Text Section - 30% width */}
              <div className="lg:w-[45%] lg:text-left">
                <h2 className="text-2xl md:text-2xl lg:text-4xl font-bold text-gray-800 leading-snug mb-4 font-urbanist">
                  Explore Our <br />
                  <span className="text-[#824800] text-left">
                    Standout Features
                  </span>
                </h2>

                <div className="w-32 h-2 bg-[#824800] mb-6 rounded"></div>
              </div>

              {/* Right 2 Cards - 70% width */}
              <div className="lg:w-[70%] grid grid-cols-1 gap-2 sm:gap-6 md:gap-6 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2">
                {/* Card 1 */}
                <div className="bg-white p-2 sm:p-4 md:p-4 rounded-2xl shadow-md hover:shadow-xl transition duration-300 border border-gray-100 hover:-translate-y-1 transform min-h-[50px] sm:min-h-[120px] md:min-h-[120px]">
                  {/* Flex container - row for mobile and medium, column for desktop */}
                  <div className="flex flex-row lg:flex-col items-center lg:items-start">
                    {/* Left side (mobile and medium) / Top section (desktop) */}
                    <div className="flex items-center lg:flex-col lg:items-start w-1/3 lg:w-full mb-0 lg:mb-2">
                      <div className="w-6 h-6 sm:w-8 sm:h-8 md:w-8 md:h-8 border-2 border-[#E3DBD8] rounded-full flex items-center justify-center mb-0 lg:mb-6">
                        <img
                          src="/home/icon1.png"
                          alt="Pomodoro Icon"
                          className="w-2 h-2 sm:w-3 sm:h-3 md:w-3 md:h-3 object-contain"
                        />
                      </div>

                      <h1 className="text-[10px] sm:text-sm md:text-xl font-semibold text-gray-800 ml-2 sm:ml-3 md:ml-3 lg:ml-0 lg:mt-0 lg:mb-2">
                        Pomodoro Timer
                      </h1>
                    </div>

                    {/* Right side (mobile and medium) / Bottom section (desktop) */}
                    <div className="flex flex-row lg:flex-col justify-between items-center lg:items-start w-2/3 lg:w-full">
                      <p className="text-[6px] sm:text-[9px] md:text-[12px] leading-[10px] sm:leading-tight md:leading-tight tracking-normal font-normal text-gray-600 lg:mb-4 font-['Plus_Jakarta_Sans'] mx-2 lg:mx-0 max-w-[60%] sm:max-w-[70%] md:max-w-[70%] lg:max-w-full">
                        There are many variety of passages of passages of
                        engineer's available have suffered.
                      </p>

                      <h2 className="text-black font-medium flex items-center gap-1 md:gap-1 cursor-pointer text-[6px] sm:text-[9px] md:text-[9px] lg:mt-12 md:text-[11px]">
                        Learn More
                        <ArrowRight
                          size={8}
                          className="text-black mt-0.5 md:size-6"
                        />
                      </h2>
                    </div>
                  </div>
                </div>

                {/* Card 2 */}
                <div className="bg-white p-2 sm:p-4 md:p-4 rounded-2xl shadow-md hover:shadow-xl transition duration-300 border border-gray-100 hover:-translate-y-1 transform min-h-[50px] sm:min-h-[120px] md:min-h-[120px]">
                  {/* Flex container - row for mobile and medium, column for desktop */}
                  <div className="flex flex-row lg:flex-col items-center lg:items-start">
                    {/* Left side (mobile and medium) / Top section (desktop) */}
                    <div className="flex items-center lg:flex-col lg:items-start w-1/3 lg:w-full mb-0 lg:mb-2">
                      <div className="w-6 h-6 sm:w-8 sm:h-8 md:w-8 md:h-8 border-2 border-[#E3DBD8] rounded-full flex items-center justify-center mb-0 lg:mb-6">
                        <img
                          src="/home/icon2.png"
                          alt="Pomodoro Icon"
                          className="w-2 h-2 sm:w-3 sm:h-3 md:w-3 md:h-3 object-contain"
                        />
                      </div>

                      <h1 className="text-[10px] sm:text-sm md:text-xl font-semibold text-gray-800 ml-2 sm:ml-3 md:ml-3 lg:ml-0 lg:mt-0 lg:mb-2">
                        Daily Planner
                      </h1>
                    </div>

                    {/* Right side (mobile and medium) / Bottom section (desktop) */}
                    <div className="flex flex-row lg:flex-col justify-between items-center lg:items-start w-2/3 lg:w-full">
                      <p className="text-[6px] sm:text-[9px] md:text-[12px] leading-[10px] sm:leading-tight md:leading-tight tracking-normal font-normal text-gray-600 lg:mb-4 font-['Plus_Jakarta_Sans'] mx-2 lg:mx-0 max-w-[60%] sm:max-w-[70%] md:max-w-[70%] lg:max-w-full">
                        Create daily tasks & goals
                        <br />
                        Drag-and-drop reordering
                      </p>

                      <h2 className="text-black font-medium flex items-center gap-1 md:gap-1 cursor-pointer text-[6px] sm:text-[9px] md:text-[9px] lg:mt-12 md:text-[11px]">
                        Learn More
                        <ArrowRight
                          size={8}
                          className="text-black mt-0.5 md:size-6"
                        />
                      </h2>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 3 Cards Row */}
            <div className="flex mt-[-20px] flex-col sm:flex-row md:flex-row lg:flex-row sm:flex-wrap md:flex-wrap lg:flex-nowrap gap-2 md:gap-2">
              {/* Card 3 */}
              <div className="bg-white p-2 sm:p-4 md:p-4 w-full rounded-2xl shadow-md hover:shadow-xl transition duration-300 border border-gray-100 hover:-translate-y-1 transform min-h-[50px] sm:min-h-[120px] md:min-h-[120px]">
                {/* Flex container - row for mobile and medium, column for desktop */}
                <div className="flex flex-row lg:flex-col items-center lg:items-start">
                  {/* Left side (mobile and medium) / Top section (desktop) */}
                  <div className="flex items-center lg:flex-col lg:items-start w-1/3 lg:w-full mb-0 lg:mb-2">
                    <div className="w-6 h-6 sm:w-8 sm:h-8 md:w-8 md:h-8 border-2 border-[#E3DBD8] rounded-full flex items-center justify-center mb-0 lg:mb-6">
                      <img
                        src="/home/icon3.png"
                        alt="Pomodoro Icon"
                        className="w-2 h-2 sm:w-3 sm:h-3 md:w-3 md:h-3 object-contain"
                      />
                    </div>

                    <h1 className="text-[10px] sm:text-sm md:text-xl font-semibold text-gray-800 ml-2 sm:ml-3 md:ml-3 lg:ml-0 lg:mt-0 lg:mb-2">
                      Time Tracker
                    </h1>
                  </div>

                  {/* Right side (mobile and medium) / Bottom section (desktop) */}
                  <div className="flex flex-row lg:flex-col justify-between items-center lg:items-start w-2/3 lg:w-full">
                    <p className="text-[6px] sm:text-[9px] md:text-[12px] leading-[10px] sm:leading-tight md:leading-tight tracking-normal font-normal text-gray-600 lg:mb-4 font-['Plus_Jakarta_Sans'] mx-2 lg:mx-0 max-w-[60%] sm:max-w-[70%] md:max-w-[70%] lg:max-w-full">
                      Session logging by subject/task
                      <br />
                      Analytics for weekly/monthly study time
                      <br />
                      Visual stats to stay accountable
                    </p>

                    <h2 className="text-black font-medium flex items-center gap-1 md:gap-1 cursor-pointer text-[6px] sm:text-[9px] md:text-[9px] lg:mt-12 md:text-[11px]">
                      Learn More
                      <ArrowRight
                        size={8}
                        className="text-black mt-0.5 md:size-6"
                      />
                    </h2>
                  </div>
                </div>
              </div>

              {/* Card 4 */}
              <div className="bg-white p-2 sm:p-4 md:p-4 rounded-2xl shadow-md hover:shadow-xl transition duration-300 border w-full  border-gray-100 hover:-translate-y-1 transform min-h-[50px] sm:min-h-[120px] md:min-h-[120px]">
                {/* Flex container - row for mobile and medium, column for desktop */}
                <div className="flex flex-row lg:flex-col items-center lg:items-start">
                  {/* Left side (mobile and medium) / Top section (desktop) */}
                  <div className="flex items-center lg:flex-col lg:items-start w-1/3 lg:w-full mb-0 lg:mb-2">
                    <div className="w-6 h-6 sm:w-8 sm:h-8 md:w-8 md:h-8 border-2 border-[#E3DBD8] rounded-full flex items-center justify-center mb-0 lg:mb-6">
                      <img
                        src="/home/icon4.png"
                        alt="Pomodoro Icon"
                        className="w-2 h-2 sm:w-3 sm:h-3 md:w-3 md:h-3 object-contain"
                      />
                    </div>

                    <h1 className="text-[10px] sm:text-sm md:text-xl font-semibold text-gray-800 ml-2 sm:ml-3 md:ml-3 lg:ml-0 lg:mt-0 lg:mb-2">
                      Streak Overview
                    </h1>
                  </div>

                  {/* Right side (mobile and medium) / Bottom section (desktop) */}
                  <div className="flex flex-row lg:flex-col justify-between items-center lg:items-start w-2/3 lg:w-full">
                    <p className="text-[6px] sm:text-[9px] md:text-[12px] leading-[10px] sm:leading-tight md:leading-tight tracking-normal font-normal text-gray-600 lg:mb-4 font-['Plus_Jakarta_Sans'] mx-2 lg:mx-0 max-w-[60%] sm:max-w-[70%] md:max-w-[70%] lg:max-w-full">
                      Visual streak charts (weekly/monthly)
                      <br />
                      XP or rewards-based motivation
                      <br />
                      "Don't break the chain" gamification
                    </p>

                    <h2 className="text-black font-medium flex items-center gap-1 md:gap-1 cursor-pointer text-[6px] sm:text-[9px] md:text-[9px] lg:mt-12 md:text-[11px]">
                      Learn More
                      <ArrowRight
                        size={8}
                        className="text-black mt-0.5 md:size-6"
                      />
                    </h2>
                  </div>
                </div>
              </div>

              {/* Card 5 */}
              <div className="bg-white p-2 sm:p-4 md:p-4 rounded-2xl w-full shadow-md hover:shadow-xl transition duration-300 border border-gray-100 hover:-translate-y-1 transform min-h-[50px] sm:min-h-[120px] md:min-h-[120px]">
                {/* Flex container - row for mobile and medium, column for desktop */}
                <div className="flex flex-row lg:flex-col items-center lg:items-start">
                  {/* Left side (mobile and medium) / Top section (desktop) */}
                  <div className="flex items-center lg:flex-col lg:items-start w-1/3 lg:w-full mb-0 lg:mb-2">
                    <div className="w-6 h-6 sm:w-8 sm:h-8 md:w-8 md:h-8 border-2 border-[#E3DBD8] rounded-full flex items-center justify-center mb-0 lg:mb-6">
                      <img
                        src="/home/icon5.png"
                        alt="Pomodoro Icon"
                        className="w-2 h-2 sm:w-3 sm:h-3 md:w-3 md:h-3 object-contain"
                      />
                    </div>

                    <h1 className="text-[10px] sm:text-sm md:text-xl font-semibold text-gray-800 ml-2 sm:ml-3 md:ml-3 lg:ml-0 lg:mt-0 lg:mb-2">
                      Focus Music
                    </h1>
                  </div>

                  {/* Right side (mobile and medium) / Bottom section (desktop) */}
                  <div className="flex flex-row lg:flex-col justify-between items-center lg:items-start w-2/3 lg:w-full">
                    <p className="text-[6px] sm:text-[9px] md:text-[12px] leading-[10px] sm:leading-tight md:leading-tight tracking-normal font-normal text-gray-600 lg:mb-4 font-['Plus_Jakarta_Sans'] mx-2 lg:mx-0 max-w-[60%] sm:max-w-[70%] md:max-w-[80%] lg:max-w-full">
                      Lo-fi beats, nature sounds, café ambience
                      <br />
                      Playlists optimized for focus
                      <br />
                      Timer-based playback
                    </p>

                    <h2 className="text-black font-medium flex items-center gap-1 md:gap-1 cursor-pointer text-[6px] sm:text-[9px] md:text-[9px] lg:mt-12 md:text-[11px]">
                      Learn More
                      <ArrowRight
                        size={8}
                        className="text-black mt-0.5 md:size-6"
                      />
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* FAQ & Help Center */}
          <div className="w-full mt-12 md:mt-24 px-4 py-8 sm:px-6">
            <div className="flex flex-col lg:flex-row gap-6 md:gap-10">
              {/* Left Section */}
              <div className="flex lg:flex-row flex-col gap-2 lg:w-1/2 sm:flex">
                {/* Main Image */}
                <div className="rounded-xl flex-1 flex flex-col justify-between sm:flex hidden md:hidden lg:block">
                  <img
                    src="/home/image11.png"
                    alt="Main Visual"
                    className="w-full h-[200px] sm:h-[250px] md:h-[340px] object-cover rounded-2xl shadow-md"
                  />
                  <div className="flex items-start gap-4 mt-4">
                    <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-[#824800]"></div>
                    <div>
                      <h2 className="text-sm md:text-base font-semibold text-gray-800">
                        Student Adda
                      </h2>
                      <p className="text-xs text-gray-600">
                        Your all-in-one study companion
                      </p>
                    </div>
                  </div>
                </div>

                {/* Two stacked images */}
                <div className="flex flex-col justify-between gap-4 flex-1 mt-4 lg:mt-0 sm:flex hidden md:hidden lg:block">
                  <img
                    src="/home/image12.png"
                    alt="Visual 1"
                    className="w-full h-[80px] sm:h-[100px] md:h-[120px] object-cover rounded-2xl shadow-md"
                  />
                  <img
                    src="/home/image13.png"
                    alt="Visual 2"
                    className="w-full h-[180px] sm:h-[220px] md:h-[280px] object-cover rounded-2xl shadow-md"
                  />
                </div>
              </div>

              {/* Right Section */}
              <div className="lg:w-1/2 flex flex-col gap-4 md:gap-6 mt-6 lg:mt-0">
                {/* ASK QUESTION Section */}
                <div className="flex items-center gap-1">
                  <h2 className="text-base md:text-lg font-semibold text-gray-800">
                    ASK QUESTION
                  </h2>
                  <img
                    src="/home/image14.png"
                    alt="FAQ Icon"
                    className="w-4 h-4 md:w-5 md:h-5"
                  />
                </div>

                {/* Main Title */}
                <h2 className="text-[23px] sm:text-[37.38px] leading-[44.86px] tracking-normal font-bold text-black mb-2 font-['Plus_Jakarta_Sans']">
                  FAQ and Help Center
                </h2>

                {/* Accordion */}
                <div className="rounded-xl divide-y divide-gray-200 overflow-hidden space-y-2">
                  <details className="group p-4 md:p-6 rounded-lg border border-[#796146]">
                    <summary className="cursor-pointer text-xs md:text-sm font-medium text-gray-800 flex justify-between items-center">
                      <h3 className="text-[10px] sm:text-[13.46px] leading-[20.93px] tracking-normal font-semibold text-black">
                        What is the Pomodoro Timer?
                      </h3>

                      <div className="w-5 h-5 md:w-6 md:h-6 rounded-full bg-[#796146] flex items-center justify-center ml-2 group-open:rotate-180 transition-transform">
                        <span className="text-[8px] sm:text-sm md:text-base text-white leading-none">
                          &#9650;
                        </span>{" "}
                        {/* ▲ Icon */}
                      </div>
                    </summary>
                    <p className="mt-2 text-[9px] sm:text-xs text-gray-600 transition-all duration-300">
                      A tool to help you study in focused 25-minute intervals
                      followed by short breaks.
                    </p>
                  </details>

                  <details className="group p-4 md:p-6 rounded-lg border border-[#796146]">
                    <summary className="cursor-pointer text-xs md:text-sm font-medium text-gray-800 flex justify-between items-center">
                      <h3 className="text-[10px] sm:text-[13.46px] leading-[20.93px] tracking-normal font-semibold text-black">
                        How do I borrow or return a physical book?
                      </h3>
                      <div className="w-5 h-5 md:w-6 md:h-6 rounded-full bg-[#796146] flex items-center justify-center ml-2 group-open:rotate-180 transition-transform">
                        <span className="text-[8px] sm:text-[9px] sm:text-xs md:text-base text-white leading-none">
                          &#9650;
                        </span>
                      </div>
                    </summary>
                    <p className="mt-2 text-[9px] sm:text-xs text-gray-600 transition-all duration-300">
                      Visit the library desk with your ID. To return, drop the
                      book in the return box or hand it to the librarian.
                    </p>
                  </details>

                  <details className="group p-4 md:p-6 rounded-lg border border-[#796146]">
                    <summary className="cursor-pointer text-xs md:text-sm font-medium text-gray-800 flex justify-between items-center">
                      <h3 className="text-[10px] sm:text-[13.46px] leading-[20.93px] tracking-normal font-semibold text-black">
                        How does the Pomodoro timer work?
                      </h3>
                      <div className="w-5 h-5 md:w-6 md:h-6 rounded-full bg-[#796146] flex items-center justify-center ml-2 group-open:rotate-180 transition-transform">
                        <span className="text-[8px] sm:text-sm md:text-base text-white leading-none">
                          &#9650;
                        </span>
                      </div>
                    </summary>
                    <p className="mt-2 text-[9px] sm:text-xs text-gray-600 transition-all duration-300">
                      It breaks your work into intervals (25 mins) separated by
                      short breaks (5 mins) to improve focus.
                    </p>
                  </details>
                </div>
              </div>
            </div>
          </div>

          {/* Ready to get started */}
          <div className="w-full py-8 sm:py-10 md:py-12 px-4 sm:px-6 md:px-12 text-center text-black ready_to_start">
            {/* Heading */}
            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-3 md:mb-4">
              Ready to get started?
            </h1>

            {/* Line */}
            <div className="w-12 sm:w-16 md:w-20 h-1.5 md:h-2 bg-[#824800] mx-auto mb-3 sm:mb-4 md:mb-6 rounded-full"></div>

            {/* Description */}
            <p className="max-w-1/2 sm:max-w-md md:max-w-xl lg:max-w-2xl mx-auto text-gray-600 text-xs sm:text-sm md:text-base lg:text-lg mb-4 sm:mb-6 md:mb-10 px-2">
              The IPFS file storage and sharing with collaboration solution that
              suits any industry and business size.
            </p>

            {/* Cards */}
            <div className="w-110% ">
              <Card4 />
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
