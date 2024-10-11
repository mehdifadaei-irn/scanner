import CopyClip from "@/components/temp/CopyClip";
import { Skeleton } from "@/components/ui/Skeleton";
import { ExclamationTriangleIcon, PlusIcon, SymbolIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import React from "react";

const loading = ({
  params,
  searchParams,
}: {
  params: any;
  searchParams: any;
}) => {
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
            <span className="font-semibold text-base">......</span>
            <CopyClip url={".........."} />
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
};

export default loading;
