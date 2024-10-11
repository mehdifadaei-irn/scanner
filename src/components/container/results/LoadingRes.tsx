import React from 'react'

const LoadingRes = () => {
  return (
    <div className="bg-[#F5F5F5] flex flex-col rounded-lg font-[family-name:var(--font-geist-sans)]">
      <div className="flex justify-between ml-5 mr-4 h-20 items-center">
        <div className="flex gap-x-3">
          <div className="bg-slate-500  font-bold text-sm flex justify-center items-center pt-1 text-white  rounded-full w-8 h-6">
            L
          </div>
          <h3 className="font-medium font-[family-name:var(--font-geist-sans)]">
            
          </h3>
        </div>

        <div className="border-2 px-2 border-slate-600 h-6 rounded-xl flex justify-center items-center tracking-wide">
          <span className="text-xs">Pending</span>
        </div>
      </div>
      <div className="bg-white m-[3px]">
        <h3 className="mt-7 ml-7 ">Pending.....</h3>
        <div className="bg-[#F5F5F5] flex flex-col py-3  rounded-lg justify-center px-3 mx-7 mt-7">
          <span className="text-muted-foreground text-sm">URL</span>
          <a className="font-medium font-[family-name:var(--font-geist-sans)] text-blue-500">
            ......
          </a>
        </div>
        <p className="mt-7 mb-8 ml-8">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque, illum.</p>
        <div>
          <div className="border-b-2 my-3 border-blue-500 w-fit ml-9 ">
            <p>Request/Response</p>
          </div>
          <div className=" rounded-lg h-72  mx-9 mt-6 mb-8 bg-slate-300 animate-pulse">
            {/* HTMLBOX */}
            
          </div>
          <div className="border-t-2 border-slate-200 flex items-center px-3 h-16 cursor-pointer transition-all duration-150 hover:bg-slate-50">
            <p>Detail</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoadingRes