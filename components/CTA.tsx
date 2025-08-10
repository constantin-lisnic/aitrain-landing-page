"use client";

import React from "react";
import { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";

export const CallToAction = ({ headerText, bodyText }: any) => {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: "30min" });
      cal("ui", {
        theme: "light",
        cssVarsPerTheme: {
          light: { "cal-brand": "#5dd5ff" },
          dark: { "cal-brand": "#5dd5ff" },
        },
        hideEventTypeDetails: false,
        layout: "month_view",
      });
    })();
  }, []);

  return (
    <div className="relative rounded-2xl bg-slate-800   mb-20 mt-20 text-gray-100 max-w-6xl  xl:mx-auto min-h-96 h-full  overflow-hidden pb-4">
      <div
        className="absolute inset-0 top-0  bg-grid-slate-700/50"
        style={{
          maskImage:
            "linear-gradient(to bottom, transparent, white, transparent)",
          WebkitMaskImage:
            "linear-gradient(to bottom, transparent, white, transparent)",
        }}
      ></div>

      <div className=" lg:grid lg:grid-cols-1 gap-10 p-2 md:p-8 relative z-20">
        <div className="text-center lg:text-left">
          <h2 className="text-2xl md:text-4xl font-bold my-4  text-center">
            {headerText || `Let's automate your business today!`}
          </h2>
          <p className="my-4 text-base text-gray-300 md:text-lg tracking-wide font-light  text-center max-w-lg mx-auto">
            {bodyText ||
              `Book a free consult — we'll map quick-win automations and a clear ROI plan within 24 hours.`}
          </p>

          <div className="flex justify-center">
            <button
              className="inline-flex justify-center rounded-lg text-sm font-semibold py-3 px-4 bg-white/0 text-white ring-1 ring-slate-100 hover:bg-white/25 hover:ring-slate-900/15 mx-auto"
              data-cal-namespace="30min"
              data-cal-link="michaelelliott/30min"
              data-cal-config='{"layout":"month_view","theme":"light"}'
            >
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
