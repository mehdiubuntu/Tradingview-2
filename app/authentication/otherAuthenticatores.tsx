import Link from "next/link";
import React, { Dispatch, SetStateAction } from "react";
import {
  FaApple,
  FaFacebook,
  FaLinkedin,
  FaTwitter,
  FaYahoo,
} from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { MdOutlineMail } from "react-icons/md";

interface props {
  setSignUp: Dispatch<SetStateAction<boolean>>;
  signUp: boolean;
  setManualSignIn: Dispatch<SetStateAction<boolean>>;
}

const OtherAuthenticatores = ({
  setSignUp,
  signUp,
  setManualSignIn,
}: props) => {
  return (
    <>
      {!signUp ? (
        <div
          className="text-center font-bold text-lg"
          onClick={() => setSignUp(false)}
        >
          Sign in
        </div>
      ) : (
        <div
          className="text-center font-bold text-lg"
          onClick={() => setSignUp(true)}
        >
          Sign up
        </div>
      )}
      <div className=" grid grid-cols-4 grid-rows-2 gap-4  ">
        <Link
          href={"../api/auth/signin"}
          className="border flex p-2 justify-center gap-x-1 rounded-md col-span-2  border-zinc-600   hover:bg-zinc-800 hover:border-none  "
        >
          <FcGoogle className="text-2xl"></FcGoogle>
          Google
        </Link>
        <Link
          href={""}
          className="border flex p-2 justify-center gap-x-1 col-span-2 border-zinc-600 rounded-md  hover:bg-zinc-800 hover:border-none   "
        >
          <FaFacebook className="text-blue-800 text-2xl "></FaFacebook>
          Facebook
        </Link>
        <Link
          href={""}
          className=" flex border p-2 justify-center border-zinc-600 rounded-md  hover:bg-zinc-800 hover:border-none  "
        >
          <FaTwitter className="  text-sky-400 text-2xl   "></FaTwitter>
        </Link>
        <button className="border flex p-2 justify-center border-zinc-600 rounded-md  hover:bg-zinc-800 hover:border-none">
          <FaYahoo className="text-purple-800 text-2xl"></FaYahoo>
        </button>
        <Link
          href={""}
          className="border flex p-2 justify-center  border-zinc-600 rounded-md  hover:bg-zinc-800 hover:border-none "
        >
          <FaApple className="text-stone-100 text-2xl "></FaApple>
        </Link>
        <Link
          href={""}
          className="border flex p-2 justify-center border-zinc-600 rounded-md  hover:bg-zinc-800 hover:border-none "
        >
          <FaLinkedin className="text-sky-800 text-2xl"></FaLinkedin>
        </Link>
      </div>
      <div className=" flex space-x-3 items-center ">
        <div className=" border border-zinc-600 w-full h-0"></div>
        <span className="text-zinc-700">or</span>
        <div className="border border-zinc-600 w-full h-0"></div>
      </div>

      <button
        onClick={() => setManualSignIn(true)}
        className="border flex gap-x-2  rounded-md p-2 w-full  justify-center  border-zinc-600  hover:bg-zinc-800 hover:border-none "
      >
        <MdOutlineMail className="text-2xl "></MdOutlineMail>
        Email
      </button>
    </>
  );
};

export default OtherAuthenticatores;
