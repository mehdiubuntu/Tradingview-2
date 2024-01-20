"use client";
import Link from "next/link";
import React, { useState } from "react";
import { GiPaperWindmill } from "react-icons/gi";
import { IoChevronBack } from "react-icons/io5";
import Image from "next/image";
import SignIn from "./signIn";
import SignUp from "./signUp";
import { Cross1Icon } from "@radix-ui/react-icons";
import OtherAuthenticatores from "./otherAuthenticatores";

const page = () => {
  const [manualSignIn, setManualSignIn] = useState(false);
  const [signUp, setSignUp] = useState(false);
  var Content;

  if (manualSignIn && !signUp) {
    Content = <SignIn></SignIn>;
  } else if (manualSignIn && signUp) {
    Content = <SignUp></SignUp>;
  } else if (!manualSignIn) {
    Content = (
      <OtherAuthenticatores
        signUp={signUp}
        setManualSignIn={setManualSignIn}
        setSignUp={setSignUp}
      ></OtherAuthenticatores>
    );
  }

  return (
    <main className="flex bg-slate-950 h-screen">
      <div className="container relative  max-md:hidden ">
        <div className=" absolute w-auto h-auto inset-y-2 inset-x-4  ">
          <Image
            src={"/skyscreaper.jpg"}
            alt="sky scriper"
            fill={true}
            className="rounded-2xl bg-contain"
          />
        </div>
        <div className="absolute bottom-24 inset-x-1/4  font-bold text-6xl">
          Look first / Then leap.
        </div>
      </div>
      <div className="container  relative mx-auto  ">
        <div className="absolute  grid grid-rows-3 grid-cols-1 text-stone-100 w-full h-full">
          <div className="flex w-full justify-between   h-20 ">
            <div className=" relative my-auto pl-16   pt-8 ">
              {manualSignIn && (
                <IoChevronBack
                  className=" absolute text-2xl  cursor-pointer "
                  onClick={() => setManualSignIn(false)}
                ></IoChevronBack>
              )}
            </div>
            <div className=" my-auto">
              <Link
                href="./root"
                className="flex p-2   justify-center font-bold text-3xl"
              >
                <GiPaperWindmill></GiPaperWindmill>
                TradingView
              </Link>
            </div>
            <div className="my-auto pr-16    pt-8">
              <Link href={"/"}>
                <Cross1Icon></Cross1Icon>
              </Link>
            </div>
          </div>
          <div className="absolute   inset-y-1/4 inset-x-1/4 space-y-4 cursor-default ">
            {Content}
          </div>
          <div className="  absolute  flex bottom-10 border-white w-full inset-x-1/3 items-center space-x-2 cursor-default ">
            {signUp ? (
              <p>Do not have an account ? </p>
            ) : (
              <p>Already have an account ?</p>
            )}
            <Link href={""} className="hover:text-sky-400 text-sky-600">
              {!signUp ? (
                <p onClick={() => setSignUp(true)}>Sign up</p>
              ) : (
                <p onClick={() => setSignUp(false)}>Sign in</p>
              )}
            </Link>
          </div>
          <div className="border absolute border-zinc-600 inset-x-4 h-0 bottom-24"></div>
        </div>
      </div>
    </main>
  );
};

export default page;
