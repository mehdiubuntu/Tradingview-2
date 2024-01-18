"use client";
import Image from "next/image";
import Link from "next/link";
import "../globals.css";
import { BsRocketTakeoff } from "react-icons/bS";
import { FaRocketchat } from "react-icons/fa";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

const Idea = () => {
  const slideLeft = () => {
    var slider = document.getElementById("sliderx");
    slider!.scrollLeft = slider!.scrollLeft - 500;
  };
  const slideRight = () => {
    var slider = document.getElementById("sliderx");
    slider!.scrollLeft = slider!.scrollLeft + 500;
  };
  return (
    <section className="2xl:max-container relative   p-4 py-10 lg:mb-10 lg:py-10   xl:px-20 md:px-5 lg:px-16">
      <div className="flex-row   space-y-3">
        <div className="pb-4">
          <Link href={"/"}>
            <p className="font-bold text-3xl hover:text-blue-800">
              Trade ideas
            </p>
          </Link>
        </div>
        <div className="relative">
          <div className="absolute left-6 top-1/3 z-20">
            <button
              onClick={slideLeft}
              className="  p-2 bg-white rounded-full  shadow-lg border   hover:text-sky-600"
            >
              <MdChevronLeft className=" size-8  font-extrabold"></MdChevronLeft>
            </button>
          </div>
          <div
            id="sliderx"
            className="flex items-center p-1   space-x-4 rounded-xl h-96 md:h-[400px]  min-lg:h-[450px] xl:h-[400px] overflow-x-auto hide-scrollbar scroll-smooth  "
          >
            <Mocknews></Mocknews>
            <Mocknews></Mocknews>
            <Mocknews></Mocknews>
            <Mocknews></Mocknews>
            <Mocknews></Mocknews>
            <Mocknews></Mocknews>
          </div>
          <div className="absolute right-6 top-1/3 z-20 ">
            <button
              onClick={slideRight}
              className="  p-2 bg-white rounded-full animate-bounce-x  shadow-lg border  hover:text-sky-600"
            >
              <MdChevronRight className=" size-8  font-extrabold"></MdChevronRight>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Idea;

const Mocknews = () => {
  return (
    <div className="hover:bg-gray-100 p-2 rounded-2xl flex-row  space-y-2 justify-center h-full min-w-64 md:min-w-72 lg:min-w-96 ">
      <div className="relative w-full h-full        ">
        <div className="relative w-full border  rounded-xl h-2/5 lg:h-3/5 shadow-md ">
          <Image
            src={"/pexels-jane-doan-1024248.jpg"}
            fill={true}
            alt="?"
            className=" absolute border-none rounded-xl "
          ></Image>
        </div>
        <div className="capitalize  regular-16 text-gray-30 xl:max-w-[520px] ">
          {" "}
          Riven Update :bottom appears in for 2
        </div>
        <div className="text-sm  first-letter:capitalize">
          i thik finaly we made our bottm for wave 2 today .as you all may ...
        </div>
        <div className="flex-row lg:flex lg:justify-between space-y-3  absolute bottom-0 inset-x-0 ">
          <div className=" w-full">
            <p className="text-xs text-slate-700 first-letter:capitalize">
              by Tsuth
            </p>
            <p className="text-xs text-slate-700 first-letter:capitalize">
              Updated 4 hours ago
            </p>
          </div>
          <div className="w-full flex  space-x-2 lg:justify-end justify-start  ">
            <button className="border flex items-center  border-zinc-300  space-x-2 p-2 justify-between hover:bg-zinc-300 rounded-md">
              <BsRocketTakeoff className="text-2xl text-slate-800"></BsRocketTakeoff>

              <p>30</p>
            </button>

            <button className=" flex items-center  space-x-2 p-2 justify-between hover:bg-zinc-300 rounded-md hover:border-none">
              <FaRocketchat className="text-2xl text-slate-800"></FaRocketchat>

              <p>30</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
