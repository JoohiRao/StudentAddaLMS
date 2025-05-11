import Image from "next/image";

export default function LibraryRules() {
    const rules = [
        {
            image: "/listings3/id.png",
            heading: "Id Required",
            paragraph: "Valid government id for entry",
        },
        {
            image: "/listings3/food.png",
            heading: "No Food",
            paragraph: "Food allowed only in cafeteria",
        },
        {
            image: "/listings3/time.png",
            heading: "Time limit",
            paragraph: "4 hour max session",
        },
        {
            image: "/listings3/queit.png",
            heading: "Quiet",
            paragraph: "Maintain silence in study area",
        },
        {
            image: "/listings3/phone.png",
            heading: "No phones",
            paragraph: "Call allowed only outside ",
        },
        {
            image: "/listings3/cancel.png",
            heading: "Cancellation",
            paragraph: "Only allowed 2 hours before",
        },
    ];

    return (
        <div className="w-full p-2">
            <h1 className="font-urbanist font-semibold text-[29.17px] leading-[34.47px] tracking-[0.23px] flex items-center mb-4">
                Library Rules
            </h1>

            <div className=" w-full p-4 grid grid-cols-1 md:grid-cols-2 gap-4 rounded-xl">
                {rules.map((rule, index) => (
                    <div key={index} className="flex items-start gap-2 bg-white p-4 rounded-lg">
                        <div className="w-16 h-16 relative">
                            <Image
                                src={rule.image}
                                alt={rule.heading}
                                width={30} height={30}
                                className="object-contain"
                            />
                        </div>
                        <div className="text">
                        <h2 className="font-urbanist font-semibold text-[19.26px] leading-[22.76px] tracking-[0.15px] flex items-center">
                                {rule.heading}
                                </h2>

                                <p className="font-urbanist font-normal text-[14.77px] leading-[17.46px] tracking-[0.12px] flex items-center text-gray-700 mt-1">
                                {rule.paragraph}
                                </p>

                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
