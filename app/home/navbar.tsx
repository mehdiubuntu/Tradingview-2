"use client";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { GiPaperWindmill } from "react-icons/gi";
import { ChevronRightIcon } from "@radix-ui/react-icons";
import { FaRegUser } from "react-icons/fa";
import { usePathname } from "next/navigation";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import ToggleButton from "../components/toggleBtn";
import * as Avatar from "@radix-ui/react-avatar";

import Dropdownmenu from "../components/dropdownmenu";
import Searchbar from "../components/searchbar";
import { NavbarDropdownTitle } from "../statics/objects";
import { IoSearchOutline, IoReorderThree } from "react-icons/io5";
import SideBar from "../components/sidebar";
import prisma from "@/prisma/client";

import axios from "axios";
import { string } from "zod";
import DarkMode from "../components/darkMode";
interface x {
  id: number;
}
const Navbar = () => {
  const [userGmail, setUserGmail] = useState<string>("");
  useEffect(() => {
    const GetuserGmail = async () => {
      ///////////////////////////////////////////
      // const gmail = await axios.get<string>(`/api/user/${id}`, {
      //   params: { id: 3, name: "mehdi", family: "mohseni" },
      // });
      ///////////////////////////////////////////

      let userId = localStorage.getItem("userid");

      const gmail = await axios.get<string>(`/api/userg/`, {
        params: { id: userId, name: "mehdi" },
      });

      ////////////////////////////////////////////////////
      // const gmail = await axios.get(
      //   `/api/user/${id}?name=mahin&family=naderipour`
      // );
      // console.log(gmail);
      /////////////////////////////////////////
      setUserGmail(gmail.data);
      localStorage.setItem("gmail", `${gmail.data}`)
    };
    GetuserGmail();
  }, []);
  const currentpath = usePathname();
  const [searchTrigger, isSearchTrigger] = useState(false);
  const SidebarBtnRef = useRef<HTMLButtonElement>(null);
  const [sidebarStatus, setSidebarStatus] = useState(false);
  //   sidebarStatus
  //   ? (document.body.style.overflow = "hidden")
  //   : (document.body.style.overflow = "auto");
  // searchTrigger
  //   ? (document.body.style.overflow = "hidden")
  //   : (document.body.style.overflow = "auto");
  return (
    <>
      <Searchbar
        trigger={searchTrigger}
        setTrigger={isSearchTrigger}
      ></Searchbar>
      <nav className="flex fixed  bg-white w-full border-b  space-x-3  z-40  justify-between p-5  items-center  dark:bg-black ">
        <div className=" flex justify-between space-x-5 ">
          <button
            title="SearchBTN"
            ref={SidebarBtnRef}
            onClick={() => setSidebarStatus(!sidebarStatus)}
            data-drawer-target="logo-sidebar"
            data-drawer-toggle="logo-sidebar"
            aria-controls="logo-sidebar"
            className=" p-1.5 rounded-full md:hidden hover:bg-zinc-200 text-black dark:text-white dark:hover:bg-zinc-800"
          >
            <IoReorderThree className=" text-2xl   "></IoReorderThree>
          </button>

          <Link
            href="/"
            className=" flex items-center text-black dark:text-white space-x-1 font-extrabold"
          >
            <GiPaperWindmill className="text-4xl"></GiPaperWindmill>
            <p className="max-lg:hidden text-2xl ">TradingView</p>
          </Link>
        </div>
        <div className="flex max-sm:justify-end  justify-between space-x-5 items-center max-lg:grow max-sm:grow ">
          <div className=" sm:w-3/4 transition-all sm:mx-auto    ">
            <button
              onClick={() => isSearchTrigger(true)}
              className="  flex w-full lg:w-56  text-lg  p-1 sm:pl-3  space-x-2 items-center  rounded-full   
            sm:bg-slate-100 text-slate-800 hover:text-slate-950 hover:bg-slate-200   max-sm:dark:hover:bg-zinc-800 "
            >
              <IoSearchOutline className="max-sm:dark:text-white"></IoSearchOutline>
              <span className="max-sm:hidden  font-light">Search</span>
            </button>
          </div>

          <div className=" max-lg:hidden ">
            <ul className="space-x-5 flex  items-center   ">
              {NavbarDropdownTitle.map((title) => (
                <li key={title}>
                  <Dropdownmenu
                    title={title}
                    textColor={"text-black"}
                    backgroundHoverColor={"hover:bg-zinc-200"}
                  ></Dropdownmenu>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="flex items-center space-x-6">
          <DarkMode />
          <DropdownMenu.Root>
            <DropdownMenu.Trigger asChild>
              <Avatar.Root className="bg-blackA1 cursor-pointer inline-flex h-[45px] w-[45px] select-none items-center justify-center overflow-hidden rounded-full align-middle">
                <Avatar.Image
                  className="h-full w-full rounded-[inherit] object-cover"
                  src="https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?&w=128&h=128&dpr=2&q=80"
                  //src={session?.user?.image!}
                  alt="?"
                ></Avatar.Image>
                <Avatar.Fallback
                  className="text-violet-500 leading-1 flex h-full w-full items-center justify-center bg-zinc-200 font-medium"
                  delayMs={600}
                >
                  {userGmail.charAt(0).toUpperCase()}
                </Avatar.Fallback>
              </Avatar.Root>
            </DropdownMenu.Trigger>
            <DropdownMenu.Portal>
              <DropdownMenu.Content
                sideOffset={5}
                className="cursor-pointer z-50 min-w-[220px] border bg-white dark:bg-black rounded-md p-[5px]  will-change-[opacity,transform] data-[side=top]:animate-slideDownAndFade data-[side=right]:animate-slideLeftAndFade data-[side=bottom]:animate-slideUpAndFade data-[side=left]:animate-slideRightAndFade"
              >
                {" "}
                <DropdownMenu.Item className="text-[13px] leading-none rounded-[3px] flex space-x-2 items-center h-[50px] px-[5px] relative pl-[25px] select-none outline-none data-[disabled]:text-cyan-800 data-[disabled]:pointer-events-none data-[highlighted]:bg-slate-100 dark:data-[highlighted]:bg-zinc-800">
                  <Avatar.Root className="bg-blackA1  inline-flex h-[40px] w-[40px] select-none items-center justify-center overflow-hidden rounded-full align-middle">
                    <Avatar.Image
                      className="h-full w-full rounded-[inherit] object-cover"
                      src="https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?&w=128&h=128&dpr=2&q=80"
                      //src={session?.user?.image!}
                      alt="?"
                    ></Avatar.Image>
                    <Avatar.Fallback
                      className="text-violet-500 leading-1 flex h-full w-full items-center justify-center bg-zinc-200 font-medium"
                      delayMs={600}
                    >
                      A
                    </Avatar.Fallback>
                  </Avatar.Root>
                  <span>{userGmail}</span>
                  {/* <span>{session?.user?.name}</span> */}
                </DropdownMenu.Item>
                <DropdownMenu.Separator className="h-[1px] bg-slate-200  m-[5px]" />
                <Link href="/api/auth/signout">
                  <DropdownMenu.Item className="text-[13px] dark:data-[highlighted]:bg-zinc-800 leading-none rounded-[3px] flex items-center h-[25px] px-[5px] relative pl-[25px] select-none outline-none data-[disabled]:text-zinc-200 data-[disabled]:pointer-events-none data-[highlighted]:bg-slate-100 space-x-1">
                    <span>Profile Settings</span>
                  </DropdownMenu.Item>
                </Link>
                <Link href="/api/auth/signout">
                  <DropdownMenu.Item className="text-[13px] dark:data-[highlighted]:bg-zinc-800 leading-none rounded-[3px] flex items-center h-[25px] px-[5px] relative pl-[25px] select-none outline-none data-[disabled]:text-zinc-200 data-[disabled]:pointer-events-none data-[highlighted]:bg-slate-100 space-x-1">
                    <span>Account and Billing</span>
                  </DropdownMenu.Item>
                </Link>
                <DropdownMenu.Separator className="h-[1px] bg-slate-200  m-[5px]" />
                <Link href="/api/auth/signout">
                  <DropdownMenu.Item className="text-[13px]  dark:data-[highlighted]:bg-zinc-800 leading-none rounded-[3px] flex items-center h-[25px] px-[5px] relative pl-[25px] select-none outline-none data-[disabled]:text-zinc-200 data-[disabled]:pointer-events-none data-[highlighted]:bg-slate-100 space-x-1">
                    <span>Notifications</span>
                  </DropdownMenu.Item>
                </Link>
                <Link href="/api/auth/signout">
                  <DropdownMenu.Item className="text-[13px] dark:data-[highlighted]:bg-zinc-800 leading-none rounded-[3px] flex items-center h-[25px] px-[5px] relative pl-[25px] select-none outline-none data-[disabled]:text-zinc-200 data-[disabled]:pointer-events-none data-[highlighted]:bg-slate-100 space-x-1">
                    <span>Help Center</span>
                  </DropdownMenu.Item>
                </Link>
                <DropdownMenu.Separator className="h-[1px] bg-slate-200  m-[5px]" />
                <DropdownMenu.Item className="text-[13px] dark:data-[highlighted]:bg-zinc-800 justify-between leading-none rounded-[3px] flex items-center h-[25px] px-[5px] relative pl-[25px] select-none outline-none data-[disabled]:text-zinc-200 data-[disabled]:pointer-events-none data-[highlighted]:bg-slate-100">
                  <span>Dark color theme</span>

                </DropdownMenu.Item>
                <DropdownMenu.Sub>
                  <DropdownMenu.SubTrigger className="text-[13px] dark:data-[highlighted]:bg-zinc-800 leading-none rounded-[3px] flex items-center h-[25px] px-[5px] relative pl-[25px] select-none outline-none data-[disabled]:text-cyan-800 data-[disabled]:pointer-events-none data-[highlighted]:bg-slate-100">
                    Language
                    <div className="ml-auto pl-[20px] text-mauve11 group-data-[highlighted]:text-white group-data-[disabled]:text-mauve8">
                      <ChevronRightIcon />
                    </div>
                    <DropdownMenu.Portal>
                      <DropdownMenu.SubContent
                        className="cursor-pointer min-w-[220px]   bg-white dark:bg-black  border rounded-md p-[5px]  will-change-[opacity,transform] data-[side=top]:animate-slideDownAndFade data-[side=right]:animate-slideLeftAndFade data-[side=bottom]:animate-slideUpAndFade data-[side=left]:animate-slideRightAndFade"
                        sideOffset={3}
                        alignOffset={-5}
                      >
                        <DropdownMenu.Item className=" group text-[13px] leading-none rounded-[3px] flex items-center h-[25px] px-[5px] relative pl-[25px] select-none outline-none data-[disabled]:text-cyan-800 data-[disabled]:pointer-events-none hover:bg-slate-100 dark:hover:bg-zinc-800">
                          english
                        </DropdownMenu.Item>
                        <DropdownMenu.Item className=" group text-[13px]  leading-none rounded-[3px] flex items-center h-[25px] px-[5px] relative pl-[25px] select-none outline-none data-[disabled]:text-cyan-800 data-[disabled]:pointer-events-none hover:bg-slate-100 dark:hover:bg-zinc-800">
                          persian
                        </DropdownMenu.Item>
                      </DropdownMenu.SubContent>
                    </DropdownMenu.Portal>
                  </DropdownMenu.SubTrigger>
                </DropdownMenu.Sub>
                <DropdownMenu.Separator className="h-[1px] bg-slate-200  m-[5px]" />
                <Link href="/api/auth/signout">
                  <DropdownMenu.Item className="text-[13px] dark:data-[highlighted]:bg-zinc-800 leading-none rounded-[3px] flex items-center h-[25px] px-[5px] relative pl-[25px] select-none outline-none data-[disabled]:text-zinc-200 data-[disabled]:pointer-events-none data-[highlighted]:bg-slate-100 space-x-1">
                    <span>log out</span>
                  </DropdownMenu.Item>
                </Link>
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
          Authenticated={true}
          theme="Light"
        ></SideBar>
      )}
    </>
  );
};

export default Navbar;
