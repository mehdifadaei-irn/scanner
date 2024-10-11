import React from "react";

interface ResProps {
  header: string;
  url: string;
  reqRes: any;
  subHead: string;
  infoList: string[];
}

const InfoRes = ({ header, reqRes, url, subHead, infoList }: ResProps) => {
  return (
    <div className="bg-[#F5F5F5] flex flex-col rounded-lg font-[family-name:var(--font-geist-sans)]">
      <div className="flex justify-between ml-5 mr-4 h-20 items-center">
        <div className="flex gap-x-3">
          <div className="bg-green-500  font-bold text-sm flex justify-center items-center text-white  rounded-full w-8 h-6">
            I
          </div>
          <h3 className="font-medium font-[family-name:var(--font-geist-sans)]">
            {header}
          </h3>
        </div>

        <div className="border-2 px-2 border-green-600 h-6 rounded-xl flex justify-center items-center tracking-wide">
          <span className="text-xs">Confirmed</span>
        </div>
      </div>
      <ul className="bg-white m-[3px] flex flex-col gap-y-5 pl-3 py-4 ">
        {infoList.map((info, i) => (
          <div key={i} className="flex gap-x-4 items-center ">
            <div className="rounded-full bg-green-500 ring-2 ring-blue-200 w-3 h-3 shadow-lg" />
            <li className="">{info}</li>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default InfoRes;
