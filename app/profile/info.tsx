import React, { useEffect, useState } from "react";
import { GiPaperWindmill } from "react-icons/gi";
import TabsComponent from "./Tabs";
import axios from "axios";
import Image from "next/image";
import AvatarTemplate from "./avatar";



const Info = () => {
  // const [userGmail, setUserGmail] = useState();

  // useEffect(() => {
  //   const GetuserGmail = async () => {

  //     let userId = localStorage.getItem("userid");
  //     const gmail = await axios.get<string>(`/api/userg/`, {
  //       params: { id: userId },
  //     });
  //     setUserGmail(gmail.data);
  //   };
  return (
    <div className="h-screen w-full p-5  pt-24 lg:container mx-auto">
      <div className="flex-rows  ">
        <div className="flex-row space-y-3 border-b p-2 md:p-5 lg:p-10 ">
          <div className="  min-h-14 flex items-center ">
            <p className="text-2xl lg:text-4xl font-bold">UserName</p>
          </div>
          <div className="  flex space-x-3 ">
            <div className=" bg-slate-400  w-32 h-32 md:w-40 md:h-40 rounded-md ">
              <AvatarTemplate />
            </div>
            <div className="flex-row   max-md:items-center space-y-2   font-light text-sm">

              <div className="flex items-center space-x-2.5  text-green-500">
                <GiPaperWindmill></GiPaperWindmill>
                <p className="">online</p>
              </div>
              <div className="flex items-center space-x-2.5  text-gray-700 dark:text-stone-300">
                <GiPaperWindmill></GiPaperWindmill>
                <p>joined 3 years ago</p>
              </div>
            </div>
          </div>
          <div className="flex space-x-5 ">
            <div className="flex-row ">
              <div className="flex space-x-3 justify-center items-center">
                <p className="font-bold text-xl">0</p>
                <GiPaperWindmill className="text-gray-500" />
              </div>
              <div>
                <p className="text-gray-500 dark:text-stone-300 capitalize ">followers</p>
              </div>
            </div>
            <div className="flex-row ">
              <div className="flex space-x-3 justify-center items-center">
                <p className="font-bold text-xl">0</p>
                <GiPaperWindmill className="text-gray-500" />
              </div>
              <div><p className="text-gray-500 dark:text-stone-300 capitalize">boosts</p>
              </div>
            </div><div className="flex-row ">
              <div className="flex space-x-3 justify-center items-center">
                <p className="font-bold text-xl">0</p>
                <GiPaperWindmill className="text-gray-500" />
              </div>
              <div><p className="text-gray-500 dark:text-stone-300 capitalize">ideas</p>
              </div>
            </div><div className="flex-row ">
              <div className="flex space-x-3 justify-center items-center">
                <p className="font-bold text-xl">0</p>
                <GiPaperWindmill className="text-gray-500" />
              </div>
              <div><p className="text-gray-500 dark:text-stone-300 capitalize">scripts</p>
              </div>
            </div>
          </div>
        </div>
        <div className="  px-2 md:px-5 lg:px-10">
          <div className="  h-auto ">

            <TabsComponent />

          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;
