"use client";
import { cn } from "@/lib/utils";
import React from "react";
//@ts-ignore
import Progress from "react-circle-progress-bar";

interface CircularProgressProp {
  resultMain: { info: number; high: number; medium: number; low: number };
}

const CircularProgress = ({ resultMain }: CircularProgressProp) => {
  const active = Object.entries(resultMain).reduce((maxKey, [key, value]) => {
    //@ts-ignore
    return value > resultMain[maxKey] ? key : maxKey;
  }, "info");

  const maxLength = Object.entries(resultMain).reduce((counter, courent) => {
    return counter + courent[1];
  }, 0);


  return (
    <div className="flex  !w-full">
      <div className="!w-full  gap-x-1 justify-between lg:flex hidden border border-slate-300 rounded-xl py-3 ">
        {/*  */}
        <div
          className={cn(
            "relative flex items-center justify-center w-[23%]   ",
            {
              "border-8 border-red-400 rounded-lg py-3 px5": active === "high",
            }
          )}
        >
          {active === "high" && (
            <div className="absolute -top-5 text-slate-100 w-[106%] rounded-t-lg h-7 bg-red-400 flex justify-center font-[family-name:var(--font-yekan-mono)] ">
              <span className="translate-y-px">میزان ریسک کلی</span>
            </div>
          )}
          <Progress
            progress={(resultMain.high / maxLength) * 100}
            hideValue={true}
            gradient={[
              { stop: 0.0, color: "#f87171" },
              { stop: 1, color: "#dc2626" },
            ]}
            hideBall={true}
            reduction={0.25}
            strokeWidth={8}
            className={"!p-0 !mx-8"}
          />

          <div className="absolute z-10 flex flex-col gap-y-1 items-center justify-center">
            <span className="font-bold text-2xl  "> {resultMain.high}</span>
            <span className="text-muted-foreground font-[family-name:var(--font-yekan-mono)] text-xl tracking-wide">
              ریسک بالا
            </span>
          </div>
        </div>
        {/*  */}
        <div
          className={cn(
            "relative flex items-center justify-center w-[23%]   ",
            {
              "border-8 border-orange-400 rounded-lg py-3 px5":
                active === "medium",
            }
          )}
        >
          {active === "medium" && (
            <div className="absolute -top-5 text-slate-100 w-[106%] rounded-t-lg h-7 bg-orange-400 flex justify-center font-[family-name:var(--font-yekan-mono)] ">
              <span className="translate-y-px">میزان ریسک کلی</span>
            </div>
          )}
          <Progress
            progress={(resultMain.medium / maxLength) * 100}
            hideValue={true}
            gradient={[
              { stop: 0.0, color: "#fb923c" },
              { stop: 1, color: "#fb923c" },
            ]}
            hideBall={true}
            reduction={0.25}
            strokeWidth={8}
            className={"!p-0 !mx-8"}
          />
          <div className="absolute z-10 flex flex-col gap-y-1 items-center justify-center">
            <span className="font-bold text-2xl  ">{resultMain.medium}</span>
            <span className="font-[family-name:var(--font-yekan-mono)] text-muted-foreground text-xl tracking-wide">
              ریسک متوسط
            </span>
          </div>
        </div>
        {/*  */}
        {/*  */}
        <div
          className={cn(
            "relative flex items-center justify-center w-[23%]   ",
            {
              "border-8 border-blue-400 rounded-lg py-3 px5": active === "low",
            }
          )}
        >
          {active === "low" && (
            <div className="absolute -top-5 text-slate-100 w-[106%] rounded-t-lg h-7 bg-blue-400 flex justify-center font-[family-name:var(--font-yekan-mono)] ">
              <span className="translate-y-px">میزان ریسک کلی</span>
            </div>
          )}
          <Progress
            progress={(resultMain.low / maxLength) * 100}
            hideValue={true}
            gradient={[
              { stop: 0.0, color: "#38bdf8" },
              { stop: 1, color: "#38bdf8" },
            ]}
            hideBall={true}
            reduction={0.25}
            strokeWidth={8}
            className={"!p-0 !mx-8"}
          />
          <div className="absolute z-10 flex flex-col gap-y-1 items-center justify-center">
            <span className="font-bold text-2xl  ">{resultMain.low}</span>
            <span className="font-[family-name:var(--font-yekan-mono)] text-muted-foreground text-xl tracking-wide">
              کم خطر
            </span>
          </div>
        </div>
        {/* border-8 border-red-400 rounded-lg py-10 px5 */}
        <div
          className={cn(
            "relative flex items-center justify-center w-[23%]   ",
            {
              "border-8 border-green-400 rounded-lg py-3 px5":
                active === "info",
            }
          )}
        >
          {active === "info" && (
            <div className="absolute -top-5 text-slate-100 w-[106%] rounded-t-lg h-7 bg-green-400 flex justify-center font-[family-name:var(--font-yekan-mono)] ">
              <span className="translate-y-px">میزان ریسک کلی</span>
            </div>
          )}

          <Progress
            progress={(resultMain.info / maxLength) * 100}
            hideValue={true}
            gradient={[
              { stop: 0.0, color: "#4ade80" },
              { stop: 1, color: "#4ade80" },
            ]}
            hideBall={true}
            reduction={0.25}
            strokeWidth={8}
            className={"!p-0 !mx-8"}
          />
          <div className="absolute z-10 flex flex-col gap-y-1 items-center justify-center">
            <span className="font-bold text-2xl  ">{resultMain.info}</span>
            <span className="font-[family-name:var(--font-yekan-mono)] text-muted-foreground text-xl tracking-wide">
              بی اثر
            </span>
          </div>
        </div>
      </div>

      {/*  */}

      <div className="w-full rounded-lg flex flex-col gap-y-3 lg:hidden ">
        <div className="border w-full border-blue-600 flex flex-col rounded-lg  ">
          {/* <div className="w-full bg-red-500 rounded-t-lg text-center text-slate-100 ">
            <span className="translate-y-px font-[family-name:var(--font-yekan-mono)] text-base  ">
              میزان ریسک کلی
            </span>
          </div> */}
          <div className="w-full flex justify-between px-4 py-2 ">
            <div className="bg-red-500  font-bold text-sm flex justify-center items-center pt-1 text-white  rounded-full w-8 h-6">
              H
            </div>
            <span className="font-bold text-lg">{resultMain.high}</span>
          </div>
        </div>
        <div className="border w-full border-blue-600 flex flex-col rounded-lg  ">
          {/* <div className="w-full bg-orange-500 rounded-t-lg text-center text-slate-100 ">
            <span className="translate-y-px font-[family-name:var(--font-yekan-mono)] text-base  ">
              میزان ریسک کلی
            </span>
          </div> */}
          <div className="w-full flex justify-between px-4 py-2 ">
            <div className="bg-orange-500  font-bold text-sm flex justify-center items-center pt-1 text-white  rounded-full w-8 h-6">
              M
            </div>
            <span className="font-bold text-lg">{resultMain.medium}</span>
          </div>
        </div>
        <div className="border w-full border-blue-600 flex flex-col rounded-lg  ">
          {/* <div className="w-full bg-blue-500 rounded-t-lg text-center text-slate-100 ">
            <span className="translate-y-px font-[family-name:var(--font-yekan-mono)] text-base  ">
              میزان ریسک کلی
            </span>
          </div> */}
          <div className="w-full flex justify-between px-4 py-2 ">
            <div className="bg-blue-500  font-bold text-sm flex justify-center items-center pt-1 text-white  rounded-full w-8 h-6">
              L
            </div>
            <span className="font-bold text-lg">{resultMain.low}</span>
          </div>
        </div>
        <div className="border w-full border-blue-600 flex flex-col rounded-lg  ">
          <div className="w-full bg-green-500 rounded-t-lg text-center text-slate-100 ">
            <span className="translate-y-px font-[family-name:var(--font-yekan-mono)] text-base  ">
              میزان ریسک کلی
            </span>
          </div>
          <div className="w-full flex justify-between px-4 py-2 ">
            <div className="bg-green-500  font-bold text-sm flex justify-center items-center pt-1 text-white  rounded-full w-8 h-6">
              I
            </div>
            <span className="font-bold text-lg">{resultMain.info}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CircularProgress;
