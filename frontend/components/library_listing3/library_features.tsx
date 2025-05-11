import Image from "next/image";

export default function LibraryFeatures() {
    const features = [
        { image: "/listings3/wifi.png", text: "Wifi" },
        { image: "/listings3/cafe.png", text: "Cafe" },
        { image: "/listings3/zone.png", text: "Quiet zone" },
        { image: "/listings3/printer.png", text: "Printing" },
        { image: "/listings3/ac.png", text: "AC" },
        { image: "/listings3/comfort.png", text: "Comfort Chair" },
        { image: "/listings3/accessibility.png", text: "Accessibility" },
        { image: "/listings3/comfort.png", text: "Locker rooms" },
    ];

    return (
        <div className=" py-3 px-4">
            <h1 className="font-urbanist mb-3 font-semibold text-[29.17px] leading-[34.47px] tracking-[0.23px] flex items-center">
            Library Features
            </h1>

            <div className="max-w-6xl mx-auto grid grid-cols-1  sm:grid-cols-2 md:grid-cols-4 gap-6">
                {features.map((item, index) => (
                    <div key={index} className="bg-[#D9D9D942] shadow-md rounded-xl p-4 flex flex-col items-center text-center">
                        <div className="w-14 h-14  flex items-center justify-center relative mb-3 rounded-full overflow-hidden">
                            <Image
                                src={item.image}
                                alt={item.text}
                               width={23} height={23}
                                className="object-contain"
                            />
                        </div>
                        <p className="font-urbanist font-semibold text-[14.58px] leading-[17.23px] tracking-[0.12px] flex items-center justify-center text-center">
                                    {item.text}
                                    </p>

                    </div>
                ))}
            </div>
        </div>
    );
}
