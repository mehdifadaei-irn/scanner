"use client";
import React, { useEffect, useState } from "react";
import api from "@/config/baseApi";

import CircularProgress from "@/components/custom/CircularProgress";
import BugRepForm from "@/components/temp/BugRepForm";
import CopyClip from "@/components/temp/CopyClip";
import MiniNavbar from "@/components/temp/MiniNavbar";

import { useMutation } from "@tanstack/react-query";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  CheckboxIcon,
  CheckIcon,
  CopyIcon,
  DownloadIcon,
  ExclamationTriangleIcon,
  PlusIcon,
  SymbolIcon,
} from "@radix-ui/react-icons";
import Link from "next/link";
import { url } from "inspector";
import { Skeleton } from "@/components/ui/Skeleton";
import { MockData } from "@/constants/mockData";

const STATUCONTENT = [
  "Checking for missing HTTP header - X-Content-Type-Options...",
  "Checking for missing HTTP header - Referrer...",
  "Checking for missing HTTP header - Strict-Transport-Security...",
  "Checking for missing HTTP header - Content Security Policy...",
  "Checking for website technologies...",
  "Starting the scan...",
  "Checking for vulnerabilities of server-side software...",
  "Checking for client access policies...",
  "Checking for robots.txt file...",
  "Checking for absence of the security.txt file...",
  "Checking for use of untrusted certificates...",
  "Checking for enabled HTTP debug methods...",
  "Checking for enabled HTTP OPTIONS method...",
  "Checking for secure communication...",
  "Checking for directory listing...",
  "Checking for domain too loose set for cookies...",
  "Checking for HttpOnly flag of cookie...",
  "Checking for Secure flag of cookie...",
  "Checking for unsafe HTTP header Content Security Policy...",
];

const page = async ({
  params,
  searchParams,
}: {
  params: any;
  searchParams: any;
}) => {
  const [isClient, setIsClient] = useState(false);

  let date = Date.now();
  let dateFormat = new Intl.DateTimeFormat("fa", {
    year: "2-digit",
    month: "numeric",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
  }).format(date);
  let dateFormatAfter = new Intl.DateTimeFormat("fa", {
    year: "2-digit",
    month: "numeric",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
  }).format(date + 188 * 1000);
  // console.log(searchParams);
  //   let data = await fetch("https://api.vercel.app/blog");
  //   let posts = await data.json();

  const { mutate, isPending, isError, data } = useMutation({
    mutationKey: ["getData"],
    mutationFn: async ({ targetUrl }: { targetUrl: string }) => {
      let mainRes;
      try {
        // const response = await fetch(
        //   "http://15.204.246.162:1256/api/v1/nuclei/url/scan",
        //   {
        //     method: "POST",
        //     headers: {
        //       Accept: "application/json",
        //       "Content-Type": "application/json",
        //     },
        //     body: JSON.stringify({
        //       url: "https://water.ca.gov",
        //     }),
        //   }
        // );

        // if (!response.ok) {
        //   throw new Error(`HTTP error! status: ${response.status}`);
        // }

        // mainRes = await response.json();
        const res = await api.post(
          "api/v1/nuclei/url/scan",
          {
            url: targetUrl,
          },
          {
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
          }
        );
        return res.data;
      } catch (error) {
        console.log("error occourd! Register", error);
        return error;
      }

      return mainRes;
    },
  });

  useEffect(() => {
    setIsClient(true);
    mutate({ targetUrl: searchParams.url });
  }, []);

  const resultMain = data?.data?.reduce(
    //@ts-ignore
    (accumulator, currentValue) => {
      if (currentValue.info.severity === "info") accumulator.info++;
      if (currentValue.info.severity === "high") accumulator.high++;
      if (currentValue.info.severity === "low") accumulator.low++;
      if (currentValue.info.severity === "medium") accumulator.medium++;

      return accumulator;
    },
    {
      info: 0,
      low: 0,
      high: 0,
      medium: 0,
    }
  );

  // const maxLength = Object.entries(resultMain).reduce((counter, courent) => {
  //   //@ts-ignore
  //   return counter + courent[1];
  // }, 0);
  // useEffect(() => {
  //   mutate({ targetUrl: "https://water.ca.gov" });
  // }, []);

  if (isError) {
    return (
      <main className="pt-[58px] w-full h-full min-h-screen">
        <div className="w-full flex justify-center items-center h-80  mx-auto">
          <h1>Error happend</h1>
        </div>
      </main>
    );
  }

  if (!isClient) {
    return (
      <main className="pt-[58px] w-full h-full min-h-screen">
        <div className="w-full h-full mx-auto">
          <div className="w-full px-10 flex flex-row-reverse justify-between mt-8">
            <h1 className="font-[family-name:var(--font-yekan-mono)] font-semibold text-2xl tracking-wide text-neutral-700">
              تست آسیب پذیری وب سایت
            </h1>
            <div className="flex gap-x-5 items-center">
              <div className="flex !border-2 rounded-xl px-2.5 !border-slate-500 justify-center items-center flex-row gap-x-1">
                <span className="font-[family-name:var(--font-yekan-mono)] text-slate-500 font-semibold text-[15px]">
                  ... در حال انجام
                </span>
              </div>
            </div>
          </div>
          {/* وب سایت در حال بررسی می باشد؛ لطفا شکیبا باشید.
           */}
          <div className=" mt-7 px-7 mx-10  flex flex-col  py-2 gap-y-4 bg-white rounded-lg">
            <span className="font-[family-name:var(--font-yekan-mono)] text-end font-bold tracking-wide text-base ">
              آدرس{" "}
            </span>
            <div className="flex justify-between items-center flex-row">
              <span className="font-semibold text-base">
                {searchParams.url}
              </span>
              <CopyClip url={searchParams.url as string} />
            </div>
          </div>
          <div className="h-10  mx-10 my-3   rounded-lg  border-4 border-white">
            <div className="bg-blue-300 h-full w-full !animate-pulse rounded-sm "></div>
          </div>
          {/*  */}
          <div className="flex px-10 flex-row-reverse items-center mt-6 justify-between">
            <div></div>
            <div className="flex gap-x-3">
              <Link
                href={"/"}
                target="_blank"
                className="flex gap-x-1 items-center transition-all duration-200 hover:bg-neutral-300 py-2 px-2 rounded-sm "
              >
                <PlusIcon />
                <span className="font-[family-name:var(--font-yekan-mono)] text-[16px] font-medium">
                  تست جدید{" "}
                </span>
              </Link>

              <div className="flex gap-x-2 items-center transition-all duration-200 hover:bg-neutral-300 py-2 px-2 rounded-sm cursor-pointer">
                <SymbolIcon />
                <span className="font-[family-name:var(--font-yekan-mono)] text-[15px]">
                  تست دوباره
                </span>
              </div>

              <div className="flex gap-x-2 items-center transition-all duration-200 hover:bg-neutral-300 py-2 px-2 rounded-sm cursor-pointer">
                <ExclamationTriangleIcon color="#000" className="w-4 h-4" />
                <span className="font-[family-name:var(--font-yekan-mono)] text-[15px]">
                  گزارش تست نادرست
                </span>
              </div>
            </div>
          </div>
          <div className=" mt-20 mx-10 flex-col  md:flex hidden  py-2 gap-y-4 bg-white rounded-lg">
            <div className="w-full flex 2xl:flex-row flex-col 2xl:gap-y-0 gap-y-3">
              <div className="2xl:w-2/3 w-full flex justify-between px-3 ">
                <Skeleton className="w-[180px] h-[180px] rounded-full" />
                <Skeleton className="w-[180px] h-[180px] rounded-full" />
                <Skeleton className="w-[180px] h-[180px] rounded-full" />
                <Skeleton className="w-[180px] h-[180px] rounded-full" />
              </div>
              <div className="2xl:w-1/3 2xl:gap-x-0 gap-x-3 max-2xl:h-20  w-full flex  2xl:flex-col flex-row gap-y-5">
                <div className="flex justify-between h-full w-full gap-x-4 ">
                  <Skeleton className="w-full h-[80px] rounded-lg" />
                  <Skeleton className="w-full h-[80px] rounded-lg" />
                </div>
                <div className="flex justify-between h-full w-full gap-x-4 ">
                  <Skeleton className=" w-full h-[80px] rounded-lg" />
                  <Skeleton className="w-full h-[80px] rounded-lg" />
                </div>
              </div>
            </div>
            <div className="flex justify-between gap-x-11">
              <Skeleton className="w-full h-[30px] rounded-lg" />
              <Skeleton className="w-full h-[30px] rounded-lg" />
              <Skeleton className="w-full h-[30px] rounded-lg" />
              <Skeleton className="w-full h-[30px] rounded-lg" />
            </div>
            <Skeleton className="w-full h-[300px] rounded-lg" />
          </div>
        </div>
      </main>
    );
  }

  if (isPending) {
    return (
      <main className="pt-[58px] w-full h-full min-h-screen">
        <div className="w-full h-full mx-auto">
          <div className="w-full px-10 flex flex-row-reverse justify-between mt-8">
            <h1 className="font-[family-name:var(--font-yekan-mono)] font-semibold text-2xl tracking-wide text-neutral-700">
              تست آسیب پذیری وب سایت
            </h1>
            <div className="flex gap-x-5 items-center">
              <div className="flex !border-2 rounded-xl px-2.5 !border-slate-500 justify-center items-center flex-row gap-x-1">
                <span className="font-[family-name:var(--font-yekan-mono)] text-slate-500 font-semibold text-[15px]">
                  ... در حال انجام
                </span>
              </div>
            </div>
          </div>
          {/* وب سایت در حال بررسی می باشد؛ لطفا شکیبا باشید.
           */}
          <div className=" mt-7 px-7 mx-10  flex flex-col  py-2 gap-y-4 bg-white rounded-lg">
            <span className="font-[family-name:var(--font-yekan-mono)] text-end font-bold tracking-wide text-base ">
              آدرس{" "}
            </span>
            <div className="flex justify-between items-center flex-row">
              <span className="font-semibold text-base">
                {searchParams.url}
              </span>
              <CopyClip url={searchParams.url as string} />
            </div>
          </div>
          <div className="h-10  mx-10 my-3   rounded-lg  border-4 border-white">
            <div className="bg-blue-300 h-full w-full !animate-pulse rounded-sm "></div>
          </div>
          {/*  */}
          <div className="flex px-10 flex-row-reverse items-center mt-6 justify-between">
            <div></div>
            <div className="flex gap-x-3">
              <Link
                href={"/"}
                target="_blank"
                className="flex gap-x-1 items-center transition-all duration-200 hover:bg-neutral-300 py-2 px-2 rounded-sm "
              >
                <PlusIcon />
                <span className="font-[family-name:var(--font-yekan-mono)] text-[16px] font-medium">
                  تست جدید{" "}
                </span>
              </Link>

              <div className="flex gap-x-2 items-center transition-all duration-200 hover:bg-neutral-300 py-2 px-2 rounded-sm cursor-pointer">
                <SymbolIcon />
                <span className="font-[family-name:var(--font-yekan-mono)] text-[15px]">
                  تست دوباره
                </span>
              </div>

              <div className="flex gap-x-2 items-center transition-all duration-200 hover:bg-neutral-300 py-2 px-2 rounded-sm cursor-pointer">
                <ExclamationTriangleIcon color="#000" className="w-4 h-4" />
                <span className="font-[family-name:var(--font-yekan-mono)] text-[15px]">
                  گزارش تست نادرست
                </span>
              </div>
            </div>
          </div>
          <div className=" mt-20 mx-10 flex-col  md:flex hidden  py-2 gap-y-4 bg-white rounded-lg">
            <div className="w-full flex 2xl:flex-row flex-col 2xl:gap-y-0 gap-y-3">
              <div className="2xl:w-2/3 w-full flex justify-between px-3 ">
                <Skeleton className="w-[180px] h-[180px] rounded-full" />
                <Skeleton className="w-[180px] h-[180px] rounded-full" />
                <Skeleton className="w-[180px] h-[180px] rounded-full" />
                <Skeleton className="w-[180px] h-[180px] rounded-full" />
              </div>
              <div className="2xl:w-1/3 2xl:gap-x-0 gap-x-3 max-2xl:h-20  w-full flex  2xl:flex-col flex-row gap-y-5">
                <div className="flex justify-between h-full w-full gap-x-4 ">
                  <Skeleton className="w-full h-[80px] rounded-lg" />
                  <Skeleton className="w-full h-[80px] rounded-lg" />
                </div>
                <div className="flex justify-between h-full w-full gap-x-4 ">
                  <Skeleton className=" w-full h-[80px] rounded-lg" />
                  <Skeleton className="w-full h-[80px] rounded-lg" />
                </div>
              </div>
            </div>
            <div className="flex justify-between gap-x-11">
              <Skeleton className="w-full h-[30px] rounded-lg" />
              <Skeleton className="w-full h-[30px] rounded-lg" />
              <Skeleton className="w-full h-[30px] rounded-lg" />
              <Skeleton className="w-full h-[30px] rounded-lg" />
            </div>
            <Skeleton className="w-full h-[300px] rounded-lg" />
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="pt-[58px] w-full h-full min-h-screen">
      {/* <Button onClick={() => console.log(data)}>Loggggggggg</Button> */}

      <div className="w-full   h-full mx-auto">
        <div className="w-full px-10 flex flex-row-reverse justify-between mt-8">
          <h1 className="font-[family-name:var(--font-yekan-mono)] font-semibold text-2xl tracking-wide text-neutral-700">
            تست آسیب پذیری وب سایت
          </h1>
          <div className="flex gap-x-5 items-center">
            <TooltipProvider>
              <Tooltip delayDuration={10}>
                <TooltipTrigger asChild>
                  <div className="rounded-full !p-2 ring-2 ring-neutral-400 cursor-pointer w-5 h-5 flex justify-center items-center font-bold hover:bg-neutral-400">
                    <span className="text-xs">IP</span>
                  </div>
                </TooltipTrigger>
                <TooltipContent side="bottom">
                  <p>178.79.163.66</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
            <div className="flex !border-2 rounded-xl px-2.5 !border-green-600 justify-center items-center flex-row gap-x-1">
              <CheckIcon color="#166534" />
              <span className="font-[family-name:var(--font-yekan-mono)] text-green-700 font-semibold text-[15px]">
                انجام شده
              </span>
            </div>
          </div>
        </div>
        {/* وب سایت در حال بررسی می باشد؛ لطفا شکیبا باشید.
         */}
        <div className=" mt-7 px-7 mx-10 flex flex-col  py-2 gap-y-4 bg-white rounded-lg">
          <span className="font-[family-name:var(--font-yekan-mono)] text-end font-bold tracking-wide text-base ">
            آدرس{" "}
          </span>
          <div className="flex justify-between items-center flex-row">
            <span className="font-semibold text-base">{searchParams.url}</span>
            <CopyClip url={searchParams.url as string} />
          </div>
        </div>
        {/*  */}
        <div className="flex px-10 flex-row-reverse items-center mt-6 justify-between">
          <Button variant={"secondary"} className="flex items-center gap-x-2">
            <DownloadIcon className="w-[18px] h-[18px]" />
            <span className="font-[family-name:var(--font-yekan-mono)] text-[15px]">
              دریافت نتیجه
            </span>
          </Button>
          <div className="flex gap-x-3">
            <Link
              href={"/"}
              target="_blank"
              className="flex gap-x-1 items-center transition-all duration-200 hover:bg-neutral-300 py-2 px-2 rounded-sm "
            >
              <PlusIcon />
              <span className="font-[family-name:var(--font-yekan-mono)] text-[16px] font-medium">
                تست جدید{" "}
              </span>
            </Link>

            <div className="flex gap-x-2 items-center transition-all duration-200 hover:bg-neutral-300 py-2 px-2 rounded-sm cursor-pointer">
              <SymbolIcon />
              <span className="font-[family-name:var(--font-yekan-mono)] text-[15px]">
                تست دوباره
              </span>
            </div>

            <Dialog>
              <DialogTrigger>
                <div className="flex gap-x-2 items-center transition-all duration-200 hover:bg-neutral-300 py-2 px-2 rounded-sm cursor-pointer">
                  <ExclamationTriangleIcon color="#000" className="w-4 h-4" />
                  <span className="font-[family-name:var(--font-yekan-mono)] text-[15px]">
                    گزارش تست نادرست
                  </span>
                </div>
              </DialogTrigger>
              <DialogContent className="font-[family-name:var(--font-yekan-mono)]">
                <DialogHeader>
                  <DialogTitle className="text-center">
                    {" "}
                    گزارش تست نادرست
                  </DialogTitle>
                  <DialogDescription>
                    <p className="text-end">
                      {" "}
                      لطفا اگر این اسکن تنایج نادرست نشان داد، به ما اطلاع دهید
                    </p>
                    <BugRepForm />
                  </DialogDescription>
                </DialogHeader>
              </DialogContent>
            </Dialog>
          </div>
        </div>
        {/*  */}
        <section className=" bg-white mt-6 w-full">
          {/* Summary */}
          <div className="py-4 px-7">
            <h2 className=" text-end mb-12 font-bold text-2xl tracking-wide font-[family-name:var(--font-yekan-mono)]">
              خلاصه
            </h2>
            <div className="flex gap-x-4 justify-between mt-5 2xl:flex-row flex-col 2xl:gap-y-0 gap-y-3 ">
              <div className="2xl:w-2/3 w-full  flex   ">
                <div className=" w-full">
                  <CircularProgress resultMain={resultMain} />
                </div>
              </div>
              <div className="2xl:w-1/3 2xl:gap-x-0 gap-x-3 max-2xl:h-20  w-full flex  2xl:flex-col flex-row gap-y-5  font-[family-name:var(--font-geist-sans)]">
                <div className="flex justify-between h-full w-full gap-x-4 ">
                  <div className="bg-[#F5F5F5] flex justify-center w-full pl-4 pr-3 rounded-xl flex-col gap-y-1">
                    <span className="text-muted-foreground text-sm ">
                      Start time
                    </span>
                    <span className="text-sm text-slate-600 font-bold font-[family-name:var(--font-yekan-mono)] ">
                      {/* 1403-07-06 20:05:38 -- */}
                      {dateFormat}
                    </span>
                  </div>
                  <div className="bg-[#F5F5F5] flex justify-center w-full pl-4 pr-3 rounded-xl flex-col gap-y-1">
                    <span className="text-muted-foreground text-sm">
                      Finish time
                    </span>
                    <span className="text-sm text-slate-600 font-bold font-[family-name:var(--font-yekan-mono)]">
                      {dateFormatAfter}
                    </span>
                  </div>
                </div>
                <div className="flex justify-between h-full w-full gap-x-4 ">
                  <div className="bg-[#F5F5F5] flex justify-center w-full pl-4 pr-3 rounded-xl flex-col gap-y-1">
                    <span className="text-muted-foreground text-sm">
                      Scan duration
                    </span>
                    <span className="text-sm text-slate-600 font-medium">
                      03:08
                    </span>
                  </div>
                  <div className="bg-[#F5F5F5] flex justify-center w-full pl-4 pr-3 rounded-xl flex-col gap-y-1">
                    <span className="text-muted-foreground text-sm">
                      Tests performed
                    </span>
                    <span className="text-sm text-slate-600 font-medium">
                      {Object.entries(resultMain).reduce((counter, courent) => {
                        //@ts-ignore
                        return counter + courent[1];
                      }, 0)}
                      /
                      {Object.entries(resultMain).reduce((counter, courent) => {
                        //@ts-ignore
                        return counter + courent[1];
                      }, 0)}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*  */}
        <section className=" bg-white pt-6 w-full">
          <div className="py-4 px-7">
            <h2 className=" text-end mb-12 font-bold text-2xl tracking-wide font-[family-name:var(--font-yekan-mono)]">
              تنایج اصلی
            </h2>
            <div className="flex flex-row gap-x-2 font-[family-name:var(--font-yekan-mono)] w-full justify-between">
              <MiniNavbar
                url={searchParams.url}
                //@ts-ignore
                mainData={data?.data}
              />
            </div>
          </div>
        </section>
        {/*  */}

        <section className=" bg-white pt-6 w-full">
          <div className="py-4 px-7">
            <h2 className=" text-end mb-12 flex items-center flex-row-reverse gap-x-2 font-bold text-2xl tracking-wide font-[family-name:var(--font-yekan-mono)]">
              <span>تست های انجام شده</span>
              <span className="text-xl">{`  (19/19)  `}</span>
            </h2>
            <div className="flex flex-row gap-x-2 font-[family-name:var(--font-yekan-mono)] w-full justify-between">
              {/* <MiniNavbar url={searchParams.url} /> */}
              <ul className="w-full flex flex-col gap-y-4">
                {STATUCONTENT.map((cont, i) => (
                  <div key={i} className="flex gap-x-3 items-center ">
                    <CheckIcon className="w-5 h-5 text-blue-600" />
                    <li>{cont}</li>
                  </div>
                ))}
              </ul>
            </div>
          </div>
        </section>
        {/*  */}
        <section className=" bg-white pt-6 w-full">
          <div className="py-4 px-7">
            <h2 className=" text-end mb-12 flex items-center flex-row-reverse gap-x-2 font-bold text-2xl tracking-wide font-[family-name:var(--font-yekan-mono)]">
              <span>آمار تست ها</span>
            </h2>
            <div className="flex flex-row-reverse  gap-x-2 font-[family-name:var(--font-geist-sans)] w-full justify-between">
              {/* <MiniNavbar url={searchParams.url} /> */}
              <ul className="w-full flex gap-y-4 gap-x-5 flex-row-reverse">
                <li className="flex gap-x-3 gap-y-2 w-52  bg-[#F5F5F5]  flex-col items-start justify-center py-3 rounded-lg px-2 ">
                  <span className="text-muted-foreground">Target</span>
                  <span>{searchParams.url}</span>
                </li>
                <li className="flex gap-x-3 gap-y-2 w-52  bg-[#F5F5F5]  flex-col items-start justify-center py-3 rounded-lg px-2 ">
                  <span className="text-muted-foreground">Scan type</span>
                  <span>{searchParams.type}</span>
                </li>
                <li className="flex gap-x-3 gap-y-2 w-52  bg-[#F5F5F5]  flex-col items-start justify-center py-3 rounded-lg px-2 ">
                  <span className="text-muted-foreground">Authentication</span>
                  <span>False</span>
                </li>
                {/* <li className="flex gap-x-3 gap-y-2 w-52  bg-[#F5F5F5]  flex-col items-start justify-center py-3 rounded-lg px-2 ">
                  <span className="text-muted-foreground">Source IP</span>
                  <span>{ipUrl}</span>
                </li> */}
              </ul>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default page;
