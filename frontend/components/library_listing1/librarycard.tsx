"use client";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

const libraries = [
  {
    id: 1,
    name: "Central Library",
    location: "Downtown, New York",
    hours: "8:00 am to 9:00 pm",
    seats: "25 Seats Available",
    membership: "Paid",
    open: true,
    reviews: 128,
    features: ["Wifi", "AC"],
    image: "/listings1/lib1.png",
  },
  {
    id: 2,
    name: "Westside Reading Hall",
    location: "West End, New York",
    hours: "9:00 am to 10:00 pm",
    seats: "18 Seats Available",
    membership: "Free",
    open: false,
    reviews: 92,
    features: ["Wifi"],
    image: "/listings1/lib2.png",
  },
  {
    id: 3,
    name: "BookNest Library",
    location: "Brooklyn",
    hours: "10:00 am to 8:00 pm",
    seats: "12 Seats Available",
    membership: "Paid",
    open: true,
    reviews: 75,
    features: ["Wifi", "Snacks"],
    image: "/listings1/lib3.png",
  },
  {
    id: 4,
    name: "Knowledge Hub",
    location: "Harlem",
    hours: "7:00 am to 7:00 pm",
    seats: "20 Seats Available",
    membership: "Free",
    open: true,
    reviews: 101,
    features: ["AC"],
    image: "/listings1/lib4.png",
  },
  {
    id: 5,
    name: "Metro Study Lounge",
    location: "Queens",
    hours: "9:00 am to 9:00 pm",
    seats: "30 Seats Available",
    membership: "Paid",
    open: false,
    reviews: 58,
    features: ["Wifi"],
    image: "/listings1/lib1.png",
  },
  {
    id: 6,
    name: "Scholar's Retreat",
    location: "Bronx",
    hours: "6:00 am to 8:00 pm",
    seats: "10 Seats Available",
    membership: "Free",
    open: true,
    reviews: 64,
    features: ["Wifi", "AC"],
    image: "/listings1/lib2.png",
  },
];

export default function LibraryCard() {
  return (
    <div className="gap-4">
      {libraries.map((lib) => (
        <div key={lib.id} className="w-full bg-white  p-4 rounded-lg mt-5  shadow-sm">
          <div className="flex  md:flex-row gap-4">
            {/* Left Image & Status */}
            <div className="relative   w-90 h-20">
              <Image
                src={lib.image}
                alt={lib.name}
               width={270} height={150}
                className=" rounded-md"
              />
              {lib.open && (
                <div className="absolute bottom-[-11%] left-2 bg-white text-black px-2 py-1 text-xs rounded-md">
                  Open Now
                </div>
              )}
              <div className="absolute top-2 right-[-4] w-8 h-8 bg-white rounded-full flex items-center justify-center shadow">
                <Image
                  src="/listings3/like.png"
                  alt="like"
                  width={20}
                  height={20}
                />
              </div>
            </div>

            {/* Right Content */}
            <div className="flex  justify-between w-full">
            <div className="flex flex-col gap-2">
  <h1 className="text-lg font-semibold">{lib.name}</h1>

  {/* Location and Reviews */}
  <div className="flex items-center text-sm text-gray-600 gap-2">
    <Image
      src="/listings3/location.png"
      alt="location"
      width={14}
      height={14}
    />
    <p>{lib.location}</p>
  </div>
    <p className="text-sm text-gray-500">({lib.reviews} reviews)</p>

  {/* Features */}
  <div className="flex gap-3 text-sm text-gray-700">
    {lib.features.map((feat, index) => (
      <div key={index} className="flex items-center gap-1">
        <Image
          src="/listings3/wifi.png"
          alt={feat}
          width={14}
          height={14}
        />
        <p>{feat}</p>
      </div>
    ))}
  </div>
</div>


              {/* Availability & Action  this is right to right side */}
              {/* Availability & Action */}
<div className="flex flex-col gap-2 mt-4 text-sm items-end">
  <div className="rounded-md bg-gray-100 px-3 py-1">
    {lib.hours}
  </div>
  <div className="rounded-md bg-green-100 text-green-700 px-3 py-1">
    {lib.seats}
  </div>
  <div
    className={`rounded-md px-3 py-1 ${
      lib.membership === "Free"
        ? "bg-blue-100 text-blue-700"
        : "bg-yellow-100 text-yellow-700"
    }`}
  >
    {lib.membership}
  </div>
  <button className="flex items-center gap-1 bg-black text-white px-3 py-1 rounded-md">
    View <ArrowRight size={16} />
  </button>
</div>

            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
