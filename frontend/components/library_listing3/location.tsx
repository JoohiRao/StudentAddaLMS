import Image from "next/image";

export default function LocationCard() {
  return (
    <div className="mt-4 sm:mt-10">
      <h1 className="text-[20px] sm:text-xl font-semibold mb-2 sm:mb-3">Location</h1>

      <div className="bg-[#D9D9D942] p-2 rounded-md overflow-hidden" style={{ height: "250px" }}>
        {/* Find on Map (Top 50%) */}
        <div className="bg-[#E0E0E0] h-[50%] flex items-center justify-center px-4">
          <div className="flex items-center gap-2">
            <Image src="/listings3/location.png" width={16} height={16} alt="location icon" />
            <span className="text-sm font-medium">Find on Map</span>
          </div>
        </div>

        {/* University Location */}
        <div className="flex items-center gap-2 px-4 py-3">
          <Image src="/listings3/location.png" width={16} height={16} alt="location icon" />
          <span className="text-sm">University, District</span>
        </div>

        {/* Get Direction Button */}
        <div className="px-4 py-3 w-[97%] rounded-md bg-black text-white text-sm font-semibold text-center cursor-pointer hover:bg-gray-800">
          Get Directions
        </div>
      </div>
    </div>
  );
}
