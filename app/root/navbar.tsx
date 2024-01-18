"use client";

import Link from "next/link";
import React, { useState, useRef } from "react";
import { GiPaperWindmill } from "react-icons/gi";
import { ChevronRightIcon } from "@radix-ui/react-icons";
import { FaRegUser } from "react-icons/fa";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import Dropdownmenu from "../components/dropdownmenu";
import { IoReorderThree } from "react-icons/io5";
import { NavbarDropdownTitle } from "../statics/objects";
import SideBar from "../components/sidebar";
import DarkMode from "../components/darkMode";

const Navbar = () => {
  const [sidebarStatus, setSidebarStatus] = useState(false);
  const SidebarBtnRef = useRef<HTMLButtonElement>(null);

  return (
    <>
      <nav className="flex fixed  backdrop-blur-sm  w-full    z-50  justify-between p-5  items-center  ">
        <div className=" flex justify-between space-x-5 ">
          <button
            ref={SidebarBtnRef}
            onClick={() => setSidebarStatus(!sidebarStatus)}
            data-drawer-target="logo-sidebar"
            data-drawer-toggle="logo-sidebar"
            aria-controls="logo-sidebar"
            type="button"
            className=" p-1.5 rounded-full md:hidden hover:bg-zinc-800"
          >
            <IoReorderThree className=" text-2xl text-white  "></IoReorderThree>
          </button>

          <Link
            href="/"
            className=" flex items-center text-white space-x-1 font-extrabold"
          >
            <GiPaperWindmill className="text-4xl"></GiPaperWindmill>
            <p className="max-lg:hidden text-2xl ">TradingView</p>
          </Link>
        </div>
        <div className=" max-md:hidden ">
          <ul className="space-x-10 flex  items-center   ">
            {NavbarDropdownTitle.map((title) => (
              <li key={title}>
                <Dropdownmenu
                  title={title}
                  textColor={"text-white"}
                  backgroundHoverColor={"hover:bg-zinc-800"}
                ></Dropdownmenu>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex items-center space-x-6">
          <DarkMode />
          <DropdownMenu.Root>
            <DropdownMenu.Trigger asChild>
              <button className="  hover:bg-zinc-800 rounded-full outline-none  p-2 ">
                <FaRegUser className="text-white"></FaRegUser>
              </button>
            </DropdownMenu.Trigger>
            <DropdownMenu.Portal>
              <DropdownMenu.Content
                sideOffset={10}
                className="cursor-pointer min-w-[220px] bg-black text-white   border rounded-md p-1.5  will-change-[opacity,transform] "
              >
                <Link href="../authentication">
                  <DropdownMenu.Item className="text-[13px] leading-none rounded-[3px] flex items-center justify-start h-[25px] pl-5   select-none outline-none  data-[highlighted]:bg-zinc-800 space-x-2">
                    <FaRegUser className=""></FaRegUser>
                    <span>log in</span>
                  </DropdownMenu.Item>
                </Link>
                <DropdownMenu.Separator className="h-[1px] bg-slate-200  m-[5px]" />
                <DropdownMenu.Item className=" text-[13px] justify-between leading-none rounded-[3px] flex items-center h-[25px]   pl-5 select-none outline-none  data-[disabled]:text-zinc-200 data-[disabled]:pointer-events-none data-[highlighted]:bg-zinc-800">
                  <span>Dark color theme</span>
                </DropdownMenu.Item>
                <DropdownMenu.Sub>
                  <DropdownMenu.SubTrigger className="text-[13px] leading-none rounded-[3px] flex justify-between items-center h-[25px]   pl-5 select-none outline-none  data-[highlighted]:bg-zinc-800">
                    <span>Language</span>
                    <ChevronRightIcon className="group-data-[highlighted]:text-white" />
                    <DropdownMenu.Portal>
                      <DropdownMenu.SubContent
                        className="cursor-pointer min-w-[220px] bg-black text-white   border rounded-md p-1.5  will-change-[opacity,transform] "
                        sideOffset={8}
                        alignOffset={0}
                      >
                        <DropdownMenu.Item className=" group text-[13px] leading-none rounded-[3px] flex items-center justify-start h-[25px] pl-5   select-none outline-none  data-[highlighted]:bg-zinc-800 space-x-2">
                          english
                        </DropdownMenu.Item>
                        <DropdownMenu.Item className=" group text-[13px] leading-none rounded-[3px] flex items-center justify-start h-[25px] pl-5   select-none outline-none  data-[highlighted]:bg-zinc-800 space-x-2">
                          persian
                        </DropdownMenu.Item>
                      </DropdownMenu.SubContent>
                    </DropdownMenu.Portal>
                  </DropdownMenu.SubTrigger>
                </DropdownMenu.Sub>
              </DropdownMenu.Content>
            </DropdownMenu.Portal>
          </DropdownMenu.Root>
        </div>
      </nav>
      {sidebarStatus && (
        <SideBar
          SidebarBtnRef={SidebarBtnRef}
          sidebarStatus={sidebarStatus}
          setSidebarStatus={setSidebarStatus}
          Authenticated={false}
          theme="Dark"
        ></SideBar>
      )}
    </>
  );
};

export default Navbar;
