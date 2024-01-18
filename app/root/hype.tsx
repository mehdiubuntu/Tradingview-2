import React from "react";
import Image from "next/image";

const Hype = () => {
  return (
    <section className="2xl:max-container relative  bg-black    py-10 lg:px-16 xl:px-20">
      <div className="flex-row bg-transparent  p-8 ">
        <div className="text-white space-y-5 max-w-[800px] mx-auto">
          <h1 className="text-center w-full font-extrabold  md:text-5xl max-md:text-4xl lg:text-7xl ">
            Where the world does markets
          </h1>
          <p className=" text-center w-full text-2xl max-md:text-xl">
            join 50 million traders and investores taking the future into their
            own hands
          </p>
          <div className="flex justify-center  ">
            <button className="sm:p-4 lg:p-6 z-20  p-2 rounded-full border hover:bg-zinc-800 border-zinc-800  text-white ">
              Explore features
            </button>
          </div>
        </div>
        <div className="  mt-10  w-full flex justify-center mx-auto md:w-3/6 lg:w-4/6">
          <video
            src="/chart.mp4"
            autoPlay
            muted
            loop
            disablePictureInPicture
            className=" h-full w-full  object-fit z-20 "
          >
            sorry
          </video>
        </div>
      </div>
      <div
        className=" absolute bottom-0 h-3/4
         left-0 right-0 "
      >
        <Image
          src="/blure.bg.svg"
          fill={true}
          alt="?"
          className="object-cover z-10"
        />
      </div>
    </section>
  );
};

export default Hype;
