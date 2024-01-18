import Image from "next/image";
import React from "react";
import { GiPaperWindmill } from "react-icons/gi";

const Guide = () => {
  return (
    <section className="flexCenter w-full flex-col pb-[100px]">
      <div className="padding-container max-container w-full pb-24">
        <GiPaperWindmill className=" h-6 w-6"></GiPaperWindmill>

        <p className="uppercase regular-18 -mt-1 mb-3 text-green-500">
          We are here for you
        </p>
        <div className="flex flex-wrap justify-between gap-5 lg:gap-10">
          <h2 className="bold-40 lg:bold-64 xl:max-w-[390px]">
            Guide You to Profit
          </h2>
          <p className="regular-16 text-gray-30 xl:max-w-[520px]">
            Only with the hilink application you will no longer get lost and get
            lost again, because we already support offline maps when there is no
            internet connection in the field. Invite your friends, relatives and
            friends to have fun in the wilderness through the valley and reach
            the top of the mountain
          </p>
        </div>
      </div>

      <div className="flexCenter max-container relative rounded-2xl w-full">
        <Image
          src="/about-bannerwebp.png"
          alt="rock"
          width={1440}
          height={580}
          className="w-full object-cover object-center rounded-3xl"
        />

        <div className="absolute flex bg-white py-8 pl-5 pr-7 gap-3 rounded-3xl border shadow-md md:left-[15%] ">
          <div className="flexBetween flex-col">
            <div className="flex w-full flex-col">
              <p className="regular-16 text-gray-20 max-md:text-center ">
                Whatever the trade
              </p>

              <p className="bold-40   mt-2 max-md:text-center">
                Look first /<br></br> Then leap.
              </p>
            </div>
            <button className=" mt-3 mx-auto inset-x-1/4 p-4 rounded-full border bg-stone-100  hover:bg-gray-200  border-none ">
              Here's why
            </button>

            <div className="flex w-full flex-col"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Guide;
