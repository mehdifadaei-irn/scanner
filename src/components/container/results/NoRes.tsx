import { ViewNoneIcon } from "@radix-ui/react-icons";
import React from "react";

const NoRes = () => {
  return (
    <div className="flex justify-center h-72 items-center bg-[#F5F5F5] flex-col rounded-lg font-[family-name:var(--font-geist-sans)]">
      <ViewNoneIcon className="w-7 h-7" />
      <p className="font-[family-name:var(--font-yekan-mono)]  mt-2 text-lg text-slate-700 ">
        .هیچ یافته ای برای این دسته خطر یافت نشد
      </p>
    </div>
  );
};

export default NoRes;
