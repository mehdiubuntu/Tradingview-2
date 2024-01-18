"use client";
import React, { useEffect, useRef } from "react";

const tradingPage = () => {
  const container = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";
    script.type = "text/javascript";
    script.async = true;
    script.innerHTML = `
          {
            "autosize": true,
            "symbol": "FX:EURUSD",
            "interval": "D",
            "timezone": "Etc/UTC",
            "theme": "light",
            "style": "1",
            "locale": "en",
            "enable_publishing": false,
            "hide_legend": true,
            "allow_symbol_change": true,
            "save_image": false,
            "watchlist": [
              "FX:EURUSD",
              "FX:GBPUSD",
              "FX:USDJPY",
              "FX:AUDUSD",
              "OANDA:NZDUSD"
            ],
            "studies": [
              "STD;MACD"
            ],
            "support_host": "https://www.tradingview.com"
          }`;
    container.current!.appendChild(script);
  }, []);
  return (
    <section className="border-red-500 mx-auto   max-h-screen min-h-screen relative transition-all  ">
      <div
        className="tradingview-widget-container  absolute"
        ref={container}
        style={{ height: "100%", width: "100%" }}
      >
        <div
          className="tradingview-widget-container__widget"
          style={{ height: "calc(100% - 32px)", width: "100%" }}
        ></div>
        <div className="tradingview-widget-copyright">
          <a
            href="https://www.tradingview.com/"
            rel="noopener nofollow"
            target="_blank"
          ></a>
        </div>
      </div>
    </section>
  );
};

export default tradingPage;
