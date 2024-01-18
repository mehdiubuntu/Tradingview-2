"use client";
import React from "react";
import "../globals.css";
import { Box, Flex, Tabs } from "@radix-ui/themes";
import { tabsTitleHomePage } from "../statics/objects";
import Cardcomponent from "./card";
import SliderBTN from "../components/sliderBTN"

const TabsComponent = () => {


  return (
    <Box className="space-y-4 ">
      <Tabs.Root defaultValue={"Stocks"}>
        <Tabs.List>
          {tabsTitleHomePage.map((item) => (
            <Tabs.Trigger key={item} value={item}>
              {item}
            </Tabs.Trigger>
          ))}
        </Tabs.List>
        <Box className="p-2 relative">
          <div className="absolute left-6 top-1/3 z-20">
            <SliderBTN
              Direction="left"
              ElementID="slider"
              BgColor="">
            </SliderBTN>
          </div>
          {tabsTitleHomePage.map((item) => (
            <Tabs.Content key={item} value={item}>
              <Flex
                id="slider"
                gap={"5"}
                className="z-20  overflow-x-auto hide-scrollbar scroll-smooth  scroll-mr-10 py-3 pr-3"
              >
                <Cardcomponent StockDataLable={item}></Cardcomponent>
              </Flex>
            </Tabs.Content>
          ))}
          <div className="absolute right-6 top-1/3 z-20 ">
            <SliderBTN
              Direction="right"
              ElementID="slider"
              BgColor="">
            </SliderBTN>
          </div>
        </Box>
      </Tabs.Root>
    </Box>
  );
};

export default TabsComponent;
