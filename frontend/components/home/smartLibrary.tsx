import React from "react";
import { Separator } from "../ui/separator";
import Image from "next/image";
import { Button } from "../ui/button";
import Link from "next/link";

const SmartLibrary = () => {
  return (
    <section className="w-full h-[100vh] bg-[#ECE3DA] flex flex-col justify-center items-center px-20">
      <div id="up" className="text-center">
        <p className="text-2xl ">
          "<span className="font-bold">Empowering minds </span>with seamless
          access to knowledge, <br /> collaborative tools, and{" "}
          <span className="font-bold">smarter learning spaces.</span>"
        </p>
      </div>

      <div id="down" className=" w-[90%] text-center mt-8 flex flex-col justify-center items-center">
        <div className="flex flex-col justify-center items-center gap-2">
          <h1 className="font-semibold text-2xl">
            Smart Libraries. Smarter Learning
          </h1>
          <div className="bg-black h-1 w-1/12 " />
          <p className="font-light text-xs">
            More than just a library platform — Student Adda is a space to grow,
            learn, and connect with those chasing the same goals.
          </p>
        </div>

        <div className="w-full h-full flex justify-center items-center mt-5 ">
          <div className="w-[35%] h-full p-8 flex flex-col justify-center items-start gap-4">
            
            <p className="text-start font-semibold leading-5 ">
              Book seats, boost focus, <br /> and connect with your <br /> study
              community <br />
              <span>— all in one place.</span>
            </p>

            {/* <Separator className="bg-black h-[2px] w-1/4 " /> */}

            <div>
              <p className="font-light text-xs mt-2 text-start">
                Student Adda brings together everything you need — book a seat
                at nearby libraries, stay productive with built-in tools, and
                engage in meaningful Q&A through our community forums. Study
                smarter, not harder.
              </p>
            </div>

            
            <Button className="rounded-full bg-slate-950 py-4">
              <Link href={"/dashboard"} className="text-white">
                Start Exploring
              </Link>
            </Button>

            <div className="flex justify-center items-center gap-4 text-nowrap">

              <div className="text-start">
                <h1 className="font-semibold text-lg ">13 Years</h1>
                <p className="text-xs">Experience</p>
              </div>
              
              <div className="text-start">
                <h1 className="font-semibold text-lg ">256+</h1>
                <p className="text-xs">Client</p>
              </div>

              <div className="text-start">
                <h1 className="font-semibold text-lg ">98.3&</h1>
                <p className="text-xs">Satisfaction</p>
              </div>

            </div>
          </div>

          <div className=" h-full flex justify-center items-center relative p-5">
            <Image
              src={`/home/image.png`}
              alt="an illustration of user dashboard"
              width={1020}
              height={400}
              className="object-contain border-2  w-full h-full "
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SmartLibrary;
