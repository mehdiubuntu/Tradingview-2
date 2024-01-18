import React from "react";
import Image from "next/image";

const PageNotFound = () => {
  return (
    <>
      <div className="fixed w-full h-full ">
        <Image src={"/404.svg"} fill alt="svg" className="z-10" />
      </div>
    </>
  );
};

export default PageNotFound;
