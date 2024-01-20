"use client";
import Image from "next/image";
import React, { useState } from "react";
import { IoSearchOutline } from "react-icons/io5";
import Searchbar from "../components/searchbar";

const First = () => {
  const [searchTrigger, isSearchTrigger] = useState(false);
  return (
    <>
      <Searchbar trigger={searchTrigger} setTrigger={isSearchTrigger} />
      <section className="2xl:max-container relative   bg-black h-screen  py-10 lg:px-16 xl:px-20 z-10 ">
        <Image
          quality={100}
          src={"/man.webp"}
          alt="man"
          fill={true}
          className=" object-cover -z-10  w-auto h-auto"
        />

        <div className="flex-row  w-full   max-md:mt-56 md:mt-36 lg:mt-32 space-y-5 pl-5 md:pl-12 lg:pl-16  ">
          <div className=" text-white tracking-wider  font-bold text-3xl md:text-5xl lg:text-7xl ">
            Look first/ <br />
            Then leap.
          </div>
          <div className=" text-white md:text-xl   ">
            the best trades require research .
          </div>
          <button
            onClick={() => isSearchTrigger(true)}
            className="  flex  text-xl md:text-2xl  p-3 lg:px-10 lg:p-6  md:p-4 space-x-2 items-center  rounded-full  
            bg-white text-gray-800  hover:text-black "
          >
            <IoSearchOutline></IoSearchOutline>
            <span>Search markets here</span>
          </button>
        </div>
      </section>
    </>
  );
};

export default First;
