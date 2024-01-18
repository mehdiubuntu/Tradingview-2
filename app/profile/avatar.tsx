"use client"
import React, { useEffect, useState } from 'react'
import * as Avatar from "@radix-ui/react-avatar";

const AvatarTemplate = () => {
    const [gmail, setGmail] = useState<string | null>("");
    useEffect(() => {
        let gmail = localStorage.getItem("gmail");
        setGmail(gmail)
    }, []);

    return (

        <Avatar.Root className="  select-none  ">
            <Avatar.Image
                className="h-full w-full rounded-md  object-cover"
                src="/skyscreaper.jpg"
                alt="?"
            ></Avatar.Image>
            <Avatar.Fallback
                className="text-violet-500 rounded-md  h-full w-full flex items-center justify-center  bg-zinc-200 font-semibold text-7xl"
                delayMs={600}
            >
                {gmail?.charAt(0).toUpperCase()}
            </Avatar.Fallback>
        </Avatar.Root>
    )
}

export default AvatarTemplate