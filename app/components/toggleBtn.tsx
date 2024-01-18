import React from "react";

const ToggleButton = () => {
  return (
    <label className=" relative inline-flex items-center cursor-pointer peer ">
      <input type="checkbox" value="" className="sr-only peer "></input>
      <div
        className="w-8 h-4 peer bg-gray-200 peer-focus:outline-none rounded-full dark:bg-gray-700 peer-checked:after:translate-x-full 
        after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full 
        after:h-3 after:w-3 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600 rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white"
      ></div>
    </label>
  );
};

export default ToggleButton;
