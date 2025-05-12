import React from "react";
import Navbar from "../navbar";
import { urbanist } from "@/app/fonts";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

const Hero = () => {
  return (
    <>
      <Navbar />

      <div className="w-full h-[90vh] md:px-28 flex flex-col items-center justify-center gap-3 bg-[#ECE3DA]">
        <div
          className="md:h-[53%] w-full bg-[#EFEAE5] rounded-[32px] flex items-center justify-between mt-5"
          id="up"
        >
          {/* <div></div> */}

          <div
            id="up-left"
            className=" w-[40%] h-full flex items-start justify-center flex-col gap-4 md:px-10 "
          >
            <div className={`${urbanist.className}`}>
              <h1 className="text-4xl font-light">
                <span className="font-bold text-[#796146]">Smart</span> Library{" "}
                <br />
                Management,
                <br />
                <span className="font-bold text-[#796146]">
                  {" "}
                  All in One Place
                </span>
              </h1>
            </div>

            <div className="">
              <h4>
                Manage books, seat bookings, members, and digital libraries
              </h4>
            </div>

            <div>
              <Button className="rounded-full bg-slate-950">
                Get Started <ArrowRight className="ml-2" />
              </Button>
            </div>
          </div>

          <div
            id="up-right"
            className=" w-[60%] h-full flex items-center justify-center"
          >
            <div className="h-[500px] w-[600px] ">
              <Image
                src={"/home/hero/hero.png"}
                alt="hero"
                width={600}
                height={500}
                className="object-fill  "
              />
            </div>
          </div>
        </div>

        <div className="h-[30%] w-full bg-green-400 px-10" id="down">
          {/* <div className="grid grid-cols-6 grid-rows-4 gap-4 h-full w-full">
            <div className="col-span-3 col-start-1 col-end-3 md:col-span-2 row-start-1 row-end-2 row-span-2 md:row-end-5 md:row-span-4 bg-red-400"></div>
            <div className="col-span-3 md:col-span-2 row-end-2 row-span-2 md:row-end-5 md:row-span-4 bg-blue-400"></div>
            <div className=" col-span-6 row-start-3 row-span-2 md:col-span-2 md:row-span-4 bg-orange-500"></div>
          </div> */}

          <div className="grid grid-cols-2 md:grid-cols-6 grid-rows-3 md:grid-rows-4 gap-4 h-full w-full">
            {/* Box 1 */}
            <div className="col-span-1 md:col-span-2 md:row-span-4 bg-red-400 p-4 flex flex-col items-start justify-start ">
              <div className="flex items-center justify-center w-8 h-8 bg-slate-950 rounded-full">
                <Image
                  alt="an book"
                  src={`/home/hero/bookIcon.png`}
                  width={20}
                  height={20}
                />
              </div>
              <h1 className="text-sm font-semibold leading-6 py-1">Smart Library Access</h1>
              <p className="text-[14px]">
                Search & book seats in your nearby libraries Access both
                physical and digital books Flexible membership plans with online
                payments
              </p>
            </div>

            {/* Box 2 */}
            <div className="col-span-1 md:col-span-2 md:row-span-4 bg-blue-400 p-4 flex flex-col items-start justify-start ">
              <div className="flex items-center justify-center w-8 h-8 bg-slate-950 rounded-full">
                <Image
                  alt="an book"
                  src={`/home/hero/clockIcon.png`}
                  width={20}
                  height={20}
                />
              </div>
              <h1 className="text-sm font-semibold leading-6 py-1">Built-in Study Tools</h1>
              <p className="text-[14px]">
                Pomodoro timer, habit tracker, streak logs, planner Daily
                progress tracking and productivity boosters Practice quizzes by
                topic
              </p>
            </div>

            {/* Box 3 */}
            <div className="col-span-2 md:col-span-2 md:row-span-4 bg-orange-500 p-4 flex flex-col items-start justify-start ">
              <div className="flex items-center justify-center w-8 h-8 bg-slate-950 rounded-full">
                <Image
                  alt="an book"
                  src={`/home/hero/clockIcon.png`}
                  width={20}
                  height={20}
                />
              </div>
              <h1 className="text-sm font-semibold leading-5 py-1">
                Engaging Community Features
              </h1>
              <p className="text-[14px]">
                Public forum for Q&A, discussions & study help Create or join
                study groups Share knowledge, get support, stay motivated
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
