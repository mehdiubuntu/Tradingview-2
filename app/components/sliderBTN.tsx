"use client";
import React from "react";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

interface prop {
  Direction: String;
  ElementID: string;
  BgColor: String;
}

const SliderBTN = ({ Direction, ElementID, BgColor }: prop) => {
  const slideLeft = () => {
    var slider = document.getElementById(ElementID);
    slider!.scrollLeft = slider!.scrollLeft - 500;
  };
  const slideRight = () => {
    var slider = document.getElementById(ElementID);
    slider!.scrollLeft = slider!.scrollLeft + 500;
  };
  return (
    <button
      onClick={Direction === "left" ? slideLeft : slideRight}
      className="  p-2 text-black dark:text-white bg-white  dark:bg-zinc-800  rounded-full  shadow-lg border  border-none  hover:text-sky-600"
    >
      {Direction === "left" ? (
        <MdChevronLeft className=" size-8  font-extrabold"></MdChevronLeft>
      ) : (
        <MdChevronRight className=" size-8  font-extrabold"></MdChevronRight>
      )}
    </button>
  );
};

export default SliderBTN;
