import { IoCloseOutline, IoSearchOutline } from "react-icons/io5";
import React, { Dispatch, SetStateAction, useEffect, useRef } from "react";
import * as Tabs from "@radix-ui/react-tabs";
import * as Avatar from "@radix-ui/react-avatar";

interface props {
  trigger: boolean;
  setTrigger: Dispatch<SetStateAction<boolean>>;
}

const Searchbar = (props: props) => {
  const searchRef = useRef<HTMLDivElement>(null);
  const searchRef1 = useRef<HTMLDivElement>(null);

  useEffect(() => {

    let handler = (event: { target: any }) => {
      if (
        !searchRef.current?.contains(event.target) &&
        !searchRef1.current?.contains(event.target)
      ) {
        props.setTrigger(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });

  return props.trigger ? (
    <section className=" lg:bg-zinc-500/40 bg-white dark:bg-black h-screen w-full fixed  z-50 ">
      <nav ref={searchRef1} className=" w-full h-16 px-4  pt-3">
        <div
          className="  h-10 w-auto   flex rounded-full place-content-center md:max-w-screen-md md:mx-auto
            bg-zinc-100 text-slate-600"
        >
          <button className="justify-self-start place-items-center text-xl   ml-2 ">
            <IoSearchOutline></IoSearchOutline>
          </button>
          <input
            type="text"
            placeholder="Symbol,eg.EURUSD"
            className="justify-self-start grow text-left bg-inherit p-3 foc"
          ></input>
          <button
            onClick={() => props.setTrigger(false)}
            className="justify-self-end place-items-center mr-2 text-xl "
          >
            <IoCloseOutline></IoCloseOutline>
          </button>
        </div>
      </nav>
      <div
        ref={searchRef}
        className="  shadow-md container space-y-3 mx-auto w-auto max-h-screen    px-4 md:py-3 md:mt-2  lg:border lg:rounded-2xl  md:max-w-screen-md md:h-3/4   "
      >
        <Tabs.Root
          defaultValue={"symbols"}
          className="flex flex-col w-full  b-2"
        >
          <Tabs.List className=" gap-4 font-bold shrink-0 flex  border-zinc-300 text-gray-400 dark:text-zinc-400   ">
            <Tabs.Trigger
              value="symbols"
              className="data-[state=active]:text-sky-600 group  hover:text-sky-500  dark:data-[state=active]:text-white     "
            >
              Symbols
              <div
                className=" h-1  group-focus:bg-sky-600   rounded-full   "
              >
              </div>
            </Tabs.Trigger>
            <Tabs.Trigger
              value="ideas"
              className="data-[state=active]:text-sky-600 hover:text-sky-500 group  transition-all dark:data-[state=active]:text-white     "
            >
              Ideas
              <div
                className=" h-1  group-focus:bg-sky-600 transition-all  rounded-full   "
              >
              </div>
            </Tabs.Trigger>
            <Tabs.Trigger
              value="people"
              className="data-[state=active]:text-sky-600 group hover:text-sky-500 dark:data-[state=active]:text-white     "
            >
              People
              <div
                className=" h-1  group-focus:bg-sky-600   rounded-full   "
              >
              </div>
            </Tabs.Trigger>
            <Tabs.Trigger
              value="sparks"
              className="data-[state=active]:text-sky-600 group hover:text-sky-500 dark:data-[state=active]:text-white     "
            >
              Sparks
              <div
                className=" h-1  group-focus:bg-sky-600   rounded-full   "
              >
              </div>
            </Tabs.Trigger>
          </Tabs.List>

          <div className="mt-3 ">
            <Tabs.Content value={"symbols"}>
              <div className="flex gap-3 ">
                <button className="capitalize min-w-10  rounded-full  bg-zinc-100 dark:bg-zinc-800 dark:hover:bg-zinc-700  hover:bg-zinc-300 focus:bg-black focus:text-white ">
                  All
                </button>

                <button className="capitalize  rounded-full px-2 bg-zinc-100 dark:bg-zinc-800   dark:hover:bg-zinc-700 hover:bg-zinc-300 focus:bg-black focus:text-white ">
                  Stocks
                </button>
                <button className="capitalize rounded-full px-2 bg-zinc-100 dark:bg-zinc-800 dark:hover:bg-zinc-700  hover:bg-zinc-300 focus:bg-black focus:text-white ">
                  Forex
                </button>
                <button className="capitalize rounded-full px-2 bg-zinc-100 dark:bg-zinc-800 dark:hover:bg-zinc-700  hover:bg-zinc-300 focus:bg-black focus:text-white ">
                  Crypto
                </button>
                <button className="capitalize rounded-full px-2 bg-zinc-100 dark:bg-zinc-800 dark:hover:bg-zinc-700  hover:bg-zinc-300 focus:bg-black focus:text-white ">
                  Futures
                </button>
              </div>
            </Tabs.Content>
            <Tabs.Content value={"ideas"}>
              <div className="flex gap-3 ">
                <button className="capitalize min-w-10  rounded-full  bg-zinc-100 dark:bg-zinc-800 dark:hover:bg-zinc-700  hover:bg-zinc-300 focus:bg-black focus:text-white ">
                  All
                </button>

                <button className="capitalize  rounded-full px-2 bg-zinc-100 dark:bg-zinc-800  dark:hover:bg-zinc-700 hover:bg-zinc-300 focus:bg-black focus:text-white ">
                  Stocks
                </button>
                <button className="capitalize rounded-full px-2 bg-zinc-100 dark:bg-zinc-800 dark:hover:bg-zinc-700  hover:bg-zinc-300 focus:bg-black focus:text-white ">
                  Forex
                </button>
                <button className="capitalize rounded-full px-2 bg-zinc-100 dark:bg-zinc-800 dark:hover:bg-zinc-700  hover:bg-zinc-300 focus:bg-black focus:text-white ">
                  Crypto
                </button>
                <button className="capitalize rounded-full px-2 bg-zinc-100 dark:bg-zinc-800 dark:hover:bg-zinc-700  hover:bg-zinc-300 focus:bg-black focus:text-white ">
                  Futures
                </button>
              </div>
            </Tabs.Content>
          </div>
        </Tabs.Root>
        <SearchbarItems />
        <SearchbarItems />
        <SearchbarItems />
        <SearchbarItems />
        <SearchbarItems />
        <SearchbarItems />
        <SearchbarItems />
      </div>
    </section>
  ) : (
    ""
  );
};

export default Searchbar;






const SearchbarItems = () => {
  return (
    <div className=" flex-row w-full h-full  border-sky-950  ">
      <div className=" group flex justify-between gap-2 place-items-center px-3 py-2 border-b w-full hover:bg-zinc-100 dark:hover:bg-zinc-800 ">
        <Avatar.Root className="bg-blackA1  inline-flex h-[30px] w-[30px] select-none items-center justify-center overflow-hidden rounded-full align-middle">
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
            EU
          </Avatar.Fallback>
        </Avatar.Root>
        <div className="flex-row lg:flex lg:gap-2 lg:items-center   grow cursor-default  ">
          <p>EURUSD</p>
          <p className="uppercase text-zinc-600 font-light text-sm">
            EURO FX/U.U. DOLLAR x
          </p>{" "}
        </div>
        <div>
          <button className="capitalize rounded-md px-3 py-1  bg-white dark:bg-black dark:group-hover:text-white group-hover:bg-blue-600 dark:text-black   text-white">
            Launch chart
          </button>
        </div>
      </div>

    </div>
  )
}

