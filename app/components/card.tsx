import "../globals.css";
import React, { useEffect, useState } from "react";
import Chart from "./miniChart";
import Image from "next/image";
import axios from "axios";
import type { Stock } from "@prisma/client";

interface prop {
  StockDataLable: string;
}

const Cardcomponent = ({ StockDataLable }: prop) => {
  const [StockData, setStockData] = useState<Stock[]>([]);
  useEffect(() => {
    const Data = async () => {
      const StockData = await axios.get<Stock[]>("/api/Stock");
      setStockData(StockData.data);
    };
    Data();
  }, []);

  return (
    <>
      {StockData!.map((item) => (
        <div
          key={item.id}
          className="  max-md:gap-2 max-md:h-36 min-w-44 md:flex 
        flex-col justify-start md:items-start md:justify-center  md:gap-3 md:min-w-72  md:shadow-md rounded-2xl  border md:max-h-14"
        >
          <div className="flex gap-3 md:gap-6  p-3  ">
            <div className=" md:min-w-9 min-w-6 max-h-6 md:max-h-9 relative ">
              <Image
                className="rounded-full "
                src={"/pexels-jane-doan-1024248.jpg"}
                fill
                alt={item.stockName.charAt(0).toUpperCase()}
              />
            </div>
            <div className=" md:flex-col max-md:flex-row gap-1 w-full  ">
              <p className="text-md">{item.stockName}</p>
              <p className=" text-sm font-light">{item.price} eur</p>
              {/* <div className="md:flex max-md:flex-col gap-5"> */}
              {/* </div> */}
            </div>
            <p className=" text-sm  text-red-200">{item.growth}%</p>
          </div>
          <div className=" md:hidden w-full  h-16 ">
            <Chart></Chart>
          </div>
        </div>
      ))}
    </>
  );
};

export default Cardcomponent;
