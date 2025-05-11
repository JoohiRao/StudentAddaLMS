// components/AboutUs.tsx

import Image from 'next/image';

const AboutUs = () => {
  return (
    <div className="w-full">
      {/* Background section */}
      <div className="relative w-full h-64 md:h-96">
        <Image
          src="/images/bgi.png"
          alt="Background"
          layout="fill"
          objectFit="cover"
          className="z-0"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h1 className="text-white text-4xl md:text-5xl font-bold text-center">About Us</h1>
        </div>
      </div>

      {/* Mission Section */}
      <section className="px-6 py-12 md:px-20 md:py-20 bg-white text-gray-800">
        <h2 className="text-3xl md:text-4xl font-semibold mb-6 text-center">Our Mission</h2>
        <p className="max-w-3xl mx-auto text-center text-lg leading-relaxed">
          To revolutionize the library experience by merging technology with seamless accessibility, making resources available to every student with ease and efficiency.
        </p>
      </section>

      {/* Team Section */}
      <section className="bg-gray-100 px-6 py-12 md:px-20 md:py-20">
        <h2 className="text-3xl md:text-4xl font-semibold mb-12 text-center">Meet Our Team</h2>
        <div className="flex flex-col items-center md:flex-row md:justify-center gap-10">
          <div className="max-w-sm bg-white shadow-lg rounded-lg overflow-hidden">
            <Image
              src="/images/person1.jpg"
              alt="Team Member"
              width={400}
              height={400}
              className="w-full object-cover"
            />
            <div className="p-6 text-center">
              <h3 className="text-xl font-semibold">John Doe</h3>
              <p className="text-gray-600 mt-2">Co-founder & CEO</p>
            </div>
          </div>
        </div>
      </section>

      {/* Quote/Testimonial Section */}
      <section className="bg-white px-6 py-12 md:px-20 md:py-20">
        <div className="max-w-4xl mx-auto text-center relative">
          <Image
            src="/images/quotation mark.png"
            alt="Quotation mark"
            width={80}
            height={80}
            className="mx-auto mb-4"
          />
          <p className="text-lg italic text-gray-700">
            "Student Adda changed the way I access books and resources. It's fast, efficient, and incredibly intuitive."
          </p>
          <p className="mt-4 font-semibold text-gray-800">— A Happy User</p>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
