"use client";
import React from "react";
import "../globals.css";
import { Tabs } from "@radix-ui/themes";



const TabsComponent = () => {
    return (
        <Tabs.Root
            defaultValue={"symbols"}
            className=" w-full   "
        >
            <Tabs.List className=" gap-4 py-3   font-semibold  flex border-b border-zinc-300  dark:text-zinc-400   ">
                {HedearLables.map((item) =>
                    <Headers key={item} header={item} />
                )}
            </Tabs.List>
            <div className="py-2 bg-slate-50   dark:bg-zinc-900 ">
                {SubHeaderLables.map((item) => <SubHeaders key={item.lable} lable={item.lable} SubHeadersLable={item.SubHeadersLable} />)}
            </div>
        </Tabs.Root>


    );
};

export default TabsComponent;





const HedearLables = [
    "IDEAS",
    "SCRIPTS",
    "FOLLOWERS",
    "FOLLOWING",
    "SETTINGS",
]
export const Headers = ({ header }: { header: string }) => {
    return (
        <Tabs.Trigger
            value={header}
            className="data-[state=active]:text-sky-500 group  hover:text-sky-500  dark:data-[state=active]:text-white "
        >
            {header}
            <div
                className=" h-0.5  group-focus:bg-sky-500   rounded-full   "
            >
            </div>
        </Tabs.Trigger>
    )
}

const SubHeaderLables = [
    { lable: "IDEAS", SubHeadersLable: ["PUBLISHED", "COMMENTED", "FOLLOWING", "BOOSTED"] },
    { lable: "SCRIPTS", SubHeadersLable: ["PUBLISHED", "COMMENTED", "BOOSTED"] },
    { lable: "FOLLOWERS", SubHeadersLable: [] },
    { lable: "FOLLOWING", SubHeadersLable: [] },
    { lable: "SETTINGS", SubHeadersLable: ["PROFILE", "ACCOUNT AND BILLING", "NOTIFICATION", "PRIVACY AND SECURITY"] }

]


export const SubHeaders = ({ lable, SubHeadersLable }: { lable: string, SubHeadersLable: string[] }) => {
    return (
        <Tabs.Content value={lable}>
            <div className="flex space-x-8 ">
                {SubHeadersLable.map((lable) => (
                    <button key={lable} className="capitalize min-w-10 text-gray-700  transition-all hover:text-sky-400  focus:text-sky-500 ">
                        {lable}
                    </button>))}
            </div>
        </Tabs.Content>
    )
}

