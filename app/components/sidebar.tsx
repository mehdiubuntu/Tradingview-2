import Link from "next/link";
import React, {
  Dispatch,
  RefObject,
  SetStateAction,
  useEffect,
  useRef,
  useState,
} from "react";
import { RiInstagramFill } from "react-icons/ri";
import { Sidebar } from "../statics/objects";
interface prop {
  sidebarStatus: boolean;
  setSidebarStatus: Dispatch<SetStateAction<boolean>>;
  SidebarBtnRef: RefObject<HTMLButtonElement>;
  Authenticated: boolean;
  theme: string;
}

const SideBar = ({
  sidebarStatus,
  setSidebarStatus,
  SidebarBtnRef,
  Authenticated,
  theme,
}: prop) => {
  const asideRef = useRef<HTMLElement>(null);

  useEffect(() => {
    let handler = (event: { target: any }) => {
      if (
        !asideRef.current?.contains(event.target) &&
        !SidebarBtnRef.current?.contains(event.target)
      ) {
        setSidebarStatus(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });

  return (
    <>
      {theme === "Dark" ? (
        <aside
          ref={asideRef}
          id="logo-sidebar"
          aria-label="Sidebar"
          className="fixed md:hidden  z-30 w-64 h-screen pt-20 shadow-lg transition-transform -translate-x-full bg-black  border-r  border-white max-lg:translate-x-0 dark:bg-black dark:border-white"
        >
          <div className="h-full px-3 pb-4 overflow-y-auto hide-scrollbar dark:bg-black">
            <ul className="space-y-2 font-medium">
              {Sidebar.map(
                (item) =>
                  item.authenticated == Authenticated && (
                    <li key={item.id}>
                      <Link
                        href={item.href}
                        className="flex  justify-between items-center p-2 text-white rounded-lg dark:text-white hover:bg-zinc-800 dark:hover:bg-gray-800  group"
                      >
                        <div className="flex items-center">
                          <span className="text-2xl">{item.logo}</span>
                          <span className="ms-3 text-sm">{item.title}</span>
                        </div>
                        {item.notification && (
                          <span className="inline-flex items-center justify-center w-3 h-3 p-3 ms-3 text-sm font-medium text-black bg-white rounded-full dark:bg-white dark:text-black">
                            {item.notification}
                          </span>
                        )}
                      </Link>
                    </li>
                  )
              )}
            </ul>
          </div>
        </aside>
      ) : (
        <aside
          ref={asideRef}
          id="logo-sidebar"
          aria-label="Sidebar"
          className="fixed md:hidden  z-30 w-64 h-screen pt-24 shadow-lg transition-transform -translate-x-full bg-white  border-r  border-zinc-300 max-lg:translate-x-0 dark:bg-black dark:border-white"
        >
          <div className="h-full px-3 pb-4 overflow-y-auto hide-scrollbar dark:bg-black">
            <ul className="space-y-2 font-medium">
              {Sidebar.map(
                (item) =>
                  item.authenticated == Authenticated && (
                    <li key={item.id}>
                      <Link
                        href={item.href}
                        className="flex  justify-between items-center p-2 text-black rounded-lg dark:text-white hover:bg-zinc-200 dark:hover:bg-gray-800  group"
                      >
                        <div className="flex items-center">
                          <span className="text-2xl">{item.logo}</span>
                          <span className="ms-3 text-sm">{item.title}</span>
                        </div>
                        {item.notification && (
                          <span className="inline-flex items-center justify-center w-3 h-3 p-3 ms-3 text-sm font-medium text-white bg-black rounded-full dark:bg-white dark:text-black">
                            {item.notification}
                          </span>
                        )}
                      </Link>
                    </li>
                  )
              )}
            </ul>
          </div>
        </aside>
      )}
    </>
  );
};

export default SideBar;
