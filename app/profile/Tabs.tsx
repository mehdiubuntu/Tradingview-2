"use client";
import React, { Dispatch, SetStateAction, useState } from "react";
import "../globals.css";
import * as Tabs from '@radix-ui/react-tabs';
import AvatarTemplate from "./avatar";
import { Cross1Icon } from "@radix-ui/react-icons";



const TabsComponent = () => {

    return (
        <div className="relative">

            <Tabs.Root
                defaultValue={"symbols"}
                className=" w-full   "
            >
                <Tabs.List className=" gap-4 py-3   font-semibold  flex border-b border-zinc-300  dark:text-zinc-400   ">
                    {HedearLables.map((item) => <Headers key={item} header={item} />)}
                </Tabs.List>
                <div className=" bg-slate-50    dark:bg-zinc-900 ">
                    {SubHeaderLables.map((item) => <SubHeaders key={item.lable} lable={item.lable} SubHeadersLable={item.SubHeadersLable} />)}
                </div>
            </Tabs.Root>
            <div className="relative w-full md:space-x-5 pb-5 h-auto md:flex mt-3  ">
                <PublicInfo />
                <PrivateInfoSelector />
            </div>
        </div>

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
            <div className="flex space-x-4 ">
                {SubHeadersLable.map((lable) => (
                    <button key={lable} className="capitalize antialiased p-2 tracking-tight md:tracking-normal min-w-auto  text-sm font-light text-gray-700 dark:text-gray-400  transition-all hover:text-sky-400  focus:text-sky-500 ">
                        {lable}
                    </button>))}
            </div>
        </Tabs.Content>
    )
}



export const CustomInputs = ({ lable, id, type, size }: { lable: string, id: string, type: string, size?: string }) => {
    return (
        <div className="flex  justify-between ">
            <label
                htmlFor={id}
                className="block  text-sm font-light  dark:text-zinc-300"
            >
                {lable}
            </label>
            <input
                type={type}
                id={id}
                className={size == "big" ? " border w-3/4 h-24 border-gray-300 text-gray-900 dark:bg-black dark:text-white text-sm rounded-sm   block  p-2.5  dark:border-gray-600 "
                    : " border w-3/4  border-gray-300 text-gray-900 dark:bg-black dark:text-white text-sm rounded-sm   block  p-2.5  dark:border-gray-600 "}
            />
        </div>
    )
}

export const CustomInputs2 = ({ lable, id, type, size }: { lable: string, id: string, type: string, size?: string }) => {
    return (
        <div className="  justify-between  ">
            <label
                htmlFor={id}
                className="block  text-sm font-light  dark:text-zinc-300"
            >
                {lable}
            </label>
            <input
                type={type}
                id={id}
                className={size == "big" ? " border w-full h-24 border-gray-300 text-gray-900 dark:bg-black dark:text-white text-sm rounded-md   block  p-2.5  dark:border-gray-600 "
                    : " w-full border border-gray-300 text-gray-900 dark:bg-black dark:text-white text-sm rounded-md   block  p-2.5  dark:border-gray-600 "}
            />
        </div>
    )
}

export const CustomCheckbox = ({ lable, id, type }: { lable: string, id: string, type: string }) => {
    return (
        <div className="flex items-center justify-between  ">
            <label
                htmlFor={id}
                className="block  text-sm font-light  dark:text-zinc-300"
            >
                {lable}
            </label>
            <div className=" w-3/4 pl-2">
                <input
                    type={type}
                    id={id}
                />

            </div>
        </div>
    )
}
export const CustomAvatarChange = ({ lable, id }: { lable: string, id: string }) => {
    const [confirmationDelete, setConfirmationDelete] = useState<boolean>(false);
    return (
        <div className="flex  justify-between ">
            <label
                htmlFor={id}
                className="block  text-sm font-light  dark:text-zinc-300"
            >
                {lable}
            </label>
            {confirmationDelete ? (

                <div className="w-3/4 h-24 rounded-xl   flex-row bg-zinc-200 dark:bg-zinc-800">
                    <div className="flex justify-center pt-2">

                        <span className="font-semibold" >Confirmation</span>
                    </div>
                    <div className="w-full flex justify-center items-end font-semibold space-x-3 h-1/2 ">
                        <button onClick={() => setConfirmationDelete(false)} className="rounded-md  py-1 px-2 text-black  bg-white">
                            Cancel
                        </button>
                        <button className="bg-red-500 px-2 py-1 rounded-md text-white">
                            Delete
                        </button>
                    </div>
                </div>

            ) : (
                <div className="flex w-3/4  space-x-4 tracking-tight items-center ">
                    <div className="size-24">
                        <AvatarTemplate />
                    </div>
                    <div className="flex-row text-sm">
                        <span>JPG, GIF or PNG </span>
                        <div className="flex dark:text-violet-300 text-blue-600 space-x-4">
                            <div>
                                <label htmlFor="upload-photo " className="cursor-pointer">Upload</label>
                                <input type="file" name="photo" id="upload-photo" hidden />
                            </div>
                            <button onClick={() => setConfirmationDelete(true)}>
                                Delete
                            </button>
                        </div>
                    </div>
                </div >
            )}
        </div >
    )
}


export const CustomButtonFill = ({ lable, type, width, Ofunction }: { lable: string, type?: "button" | "submit" | "reset", width?: string, Ofunction?: () => void }) => {
    return (
        <button onClick={Ofunction} type={type} className={`${width} first-letter:capitalize rounded-md px-6 py-1.5 transition-all text-white hover:bg-blue-800 bg-blue-700`}>
            {lable}
        </button>
    )
}
export const CustomButtonNotFill = ({ lable, type, width, Ofunction }: { lable: string, type?: "button" | "submit" | "reset", width?: string, Ofunction?: () => void }) => {
    return (
        <button onClick={Ofunction} type={type} className={`${width}  first-letter:capitalize rounded-md px-6 py-1.5 transition-all border text-blue-700 hover:bg-blue-700 hover:text-white border-blue-700`}>
            {lable}
        </button>
    )
}

export const CustomChangeBox = ({ lable, id, buttonLable, width, open }: { lable: string, id: string, buttonLable: string, width?: string, open?: () => void }) => {
    return (
        <div className="flex items-center justify-between  ">
            <label
                htmlFor={id}
                className="block  text-sm font-light  dark:text-zinc-300 first-letter:capitalize"
            >
                {lable}
            </label>
            <div className=" w-3/4 ">
                <CustomButtonFill lable={buttonLable} Ofunction={open} type="button" width={width} />
            </div>
        </div>
    )
}



export const DeleteAccountForm = ({ setAccountDeletion }: { setAccountDeletion: Dispatch<SetStateAction<boolean>> }) => {
    return (
        <div className="container mx-auto absolute md:-top-56">
            <div className="h-[720px] w-[425px] mx-auto bg-white shadow-md dark:bg-zinc-700 flex-row space-y-3 p-4 px-8 rounded-lg">
                <div className="flex justify-end "> <button onClick={() => setAccountDeletion(false)}><Cross1Icon /> </button></div>
                <div> <p className="font-bold text-2xl">Confirm account deletion</p></div>
                <div className=" flex-row space-y-3">
                    <p>Your personal data will be deleted after 30 days. Note that this process can be reversed if you change your mind during 30 days. Simply click Cancel Account Deletion at the bottom of the screen to cancel data deletion.</p>
                    <p>All your personal data will be deleted and your public profile will be anonymized (your username and avatar will be changed to a default one making you unidentifiable). We will delete your phone number, but for security reasons you may be restricted from re-entering this number for another account. That applies even if this account is then deleted. Please note that all public content (ideas and scripts, comments, public and private chat messages) you posted prior to deleting your account will still be visible to others according to our Terms of Use.</p>
                    <p>Are you sure you want to delete your account?</p>
                    <p>Please note this action will log you out of TradingView from every device that you're currently logged in on and all unsaved data on your charts will be lost.</p>
                </div>
                <div className="flex justify-end items-center space-x-3 ">
                    <button onClick={() => setAccountDeletion(false)} className="border  hover:bg-zinc-200 hover:border-zinc-200 dark:hover:bg-zinc-600 transition-all rounded-md py-1 px-1.5 border-zinc-500 dark:hover:border-zinc-600">No</button>
                    <button className="bg-blue-600 hover:bg-blue-700 text-white rounded-md px-2 transition-all py-1 border  border-blue-600 hover:border-blue-700 ">Yes, delete account</button>
                </div>


            </div>
        </div >
    )
}

export const ChangePasswordForm = ({ Cfunction }: { Cfunction?: () => void }) => {
    return (
        <div className=" md:border flex-col px-2 pb-5 space-y-5 md:space-y-10  md:w-1/2 rounded-lg pt-3  md:px-5">
            <div >
                <p className="font-bold text-xl tracking-tight ">CHANGE PASSWORD</p>
            </div>
            <form className="flex-row space-y-5  ">
                <CustomInputs2 lable="Current Password" id="currentpassword" type="password" />
                <CustomInputs2 lable="New Password" id="newpassword" type="password" />
                <CustomInputs2 lable="Confirm New Password" id="confirmnewpassword" type="password" />

                <div className=" flex justify-between pt-10 space-x-4">
                    <CustomButtonNotFill type="button" lable=" Cancel" width="w-1/2" Ofunction={Cfunction} />
                    <CustomButtonFill type="submit" lable=" Save changes" width="w-1/2" Ofunction={Cfunction} />
                </div>

            </form>
        </div>
    )
}

export const ChangeEmailForm = ({ Cfunction }: { Cfunction?: () => void }) => {
    return (
        <div className=" md:border flex-col px-2 pb-5 space-y-5 md:space-y-10  md:w-1/2 rounded-lg pt-3  md:px-5">
            <div className="flex-row space-y-3" >
                <p className="font-bold text-xl tracking-tight ">VERIFICATION OPTIONS</p>
                <p className=" text-sm tracking-tight">To change your email, we need to send you a confirmation code. You'll then need to enter it in at the next step. Please select how you'd like to get this code:</p>
                <p>{localStorage.getItem("gmail")}</p>
            </div>

            <div className=" flex-row  space-y-4">
                <CustomButtonNotFill type="button" lable=" Cancel" width="w-full" Ofunction={Cfunction} />
                <CustomButtonFill type="submit" lable=" Send code" width="w-full" Ofunction={Cfunction} />
            </div>


        </div>
    )
}


export const PrivateInfoSelector = () => {
    const [ChangePassword, setChangePassword] = useState<boolean>(false);
    const [ChangeEmail, setChangeEmail] = useState<boolean>(false);
    if (ChangePassword) {
        return <ChangePasswordForm Cfunction={() => setChangePassword(false)} />

    } else if (ChangeEmail) {
        return <ChangeEmailForm Cfunction={() => setChangeEmail(false)} />

    } else
        return (
            <div className=" md:border flex-col px-2 pb-5 space-y-5 md:space-y-10  md:w-1/2 rounded-lg pt-3  md:px-5">
                <div className="flex-row">
                    <div><p className="font-bold text-xl tracking-tight ">PRIVATE DETAILS</p></div>
                    <div><p className="text-sm ">This information will not be publicly displayed.</p></div>
                </div>
                <form className="flex-row space-y-5  ">
                    <CustomChangeBox lable="email" buttonLable=" change email" id="email" open={() => setChangeEmail(true)} />
                    <CustomChangeBox lable="password" buttonLable=" change password" id="password" open={() => setChangePassword(true)} />
                    <CustomInputs lable="Firstname" id="firstname" type="text" />
                    <CustomInputs lable="Lastname" id="lastname" type="text" />
                    <CustomInputs lable="Phone" id="phone" type="number" />

                    <div className=" flex justify-end">
                        <CustomButtonFill type="submit" lable=" Save changes" />
                    </div>

                </form>
            </div>)
}

export const PublicInfo = () => {
    const [accountDeletion, setAccountDeletion] = useState<boolean>(false);

    return (
        <>
            {accountDeletion && <DeleteAccountForm setAccountDeletion={setAccountDeletion} />}
            <div className=" md:border flex-col px-2 pb-2  space-y-5 md:space-y-10 md:w-1/2 rounded-lg pt-3 md:px-5">
                <div className="flex-row">
                    <div><p className="font-bold text-xl tracking-tight ">PUBLIC INFO</p></div>
                    <div><p className="text-sm ">This information will be publicly displayed and visible for all users.</p></div>
                </div>
                <form className="flex-row space-y-5  ">
                    <CustomInputs lable="Username" id="username" type="username" />
                    <CustomAvatarChange lable="Avatar" id="avatar" />
                    <CustomInputs lable="About me" id="aboutme" type="text" size="big" />
                    <CustomCheckbox lable="My online status" id="myonlinestatus" type="checkbox" />
                    <div className=" flex justify-end">
                        <CustomButtonFill type="submit" lable=" Save changes" />
                    </div>
                    <div className="border-t h-[0px]   " />
                    <div className="flex justify-between md:pb-3  w-full  text-sm font-light  dark:text-zinc-300 ">
                        <div className="w-1/4 select-none">
                            <p>Delete</p>
                        </div>
                        <div className="w-3/4">
                            <p>
                                Learn more about <button type="button" onClick={() => setAccountDeletion(!accountDeletion)} className="text-red-400 font-semibold"> account deletion</button>
                            </p>

                        </div>

                    </div>
                    <div className="border-t h-[0] md:hidden " />

                </form>
            </div>
        </>
    )
}