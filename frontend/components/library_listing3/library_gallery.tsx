import Image from "next/image";

export default function LibraryGallery() {
    const images = [
        "/listings3/library2.png",
        "/listings3/library3.png",
        "/listings3/library1.png",
    ];

    return (
        <div className="w-full p-2">
            <h1 className="font-urbanist font-semibold text-[29.17px] leading-[34.47px] tracking-[0.23px] flex items-center mb-4 ">
                Gallery
            </h1>

            <div className="bg-[#D9D9D942] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4">
                {images.map((src, index) => (
                    <div
                        key={index}
                        className={`relative w-full h-60 rounded-xl overflow-hidden ${
                            index === 2 ? "opacity-80" : ""
                        }`}
                    >
                        <Image
                            src={src}
                            alt={`Gallery Image ${index + 1}`}
                            fill
                            className="object-cover"
                        />
                        {index === 2 && (
                           <div className="absolute flex items-center justify-center text-white text-xl font-bold bg-black bg-opacity-40 bg-no-repeat">
                           Show More
                         </div>
                         
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}
