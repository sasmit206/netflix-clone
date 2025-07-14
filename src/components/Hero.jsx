import React from "react";

const Hero = () => {
  return (
    <section className="relative h-[80vh] w-full">
      {/* Background image */}
      <img
        src="https://image.tmdb.org/t/p/original/uC6TTUhPpQCmgldGyYveKRAu8JN.jpg"
        alt="Background"
        className="w-full h-full object-cover"
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/10" />

      {/* Content */}
      <div className="absolute bottom-16 left-6 md:left-12 max-w-xl space-y-4 text-white">
        <h1 className="text-4xl md:text-6xl font-bold">Breaking Bad</h1>
        <p className="text-sm md:text-lg text-gray-200">
          A chemistry teacher turned meth kingpin fights to protect his empire
          and his family.
        </p>

        <div className="flex space-x-4">
          <button className="bg-white text-black px-6 py-2 rounded font-semibold hover:bg-gray-200 transition">
            ▶ Play
          </button>
          <button className="bg-gray-700 text-white px-6 py-2 rounded font-semibold hover:bg-gray-600 transition">
            ℹ More Info
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
