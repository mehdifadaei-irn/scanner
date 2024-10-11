"use client";
import { cn } from "@/lib/utils";
import React, { useState, useTransition } from "react";
import HighRes from "../container/results/HighRes";
import MediumRes from "../container/results/MediumRes";
import LowRes from "../container/results/LowRes";
import InfoRes from "../container/results/InfoRes";
import NoRes from "../container/results/NoRes";
import { ViewNoneIcon } from "@radix-ui/react-icons";
import LoadingRes from "../container/results/LoadingRes";
import ResultBox from "../container/results/ResultBox";

const TABS = ["همه", "ریسک بالا", "ریسک متوسط", "کم خطر", "بی اثر"];
const COLORS = ["#2563eb", "#ef4444", "#f97316", "#3b82f6", "#22c55e"];

interface MiniNav {
  url: string;
  mainData: any[];
  // data:any
}

const MiniNavbar = ({ url, mainData }: MiniNav) => {
  const [isPending, startTransition] = useTransition();
  const [activeNav, setActiveNav] = useState<number>(0);
  return (
    <section className="w-full">
      <nav className="flex">
        {TABS.map((tab, i) => (
          <div
            key={i}
            className={cn(
              "w-full flex justify-between  transition-all duration-75 cursor-pointer border-blue-400",
              {
                "border-b-2 ": activeNav === i,
                "hover:border-b-2 hover:!border-slate-300": activeNav !== i,
              }
            )}
            // style={{
            //   borderColor: `${activeNav == i ? COLORS[i] : "#cbd5e1"} ]`,
            // }}
            onClick={() => {
              startTransition(() => {
                setActiveNav(i);
              });
            }}
          >
            <div></div>
            <p className="">{tab}</p>
            <div className="border-2 border-slate-300 bg-slate-100 rounded-full w-6 flex justify-center items-center h-6">
              <span className="-translate-y-px -translate-x-px text-slate-600 tracking-tight ">
                19
              </span>
            </div>
          </div>
        ))}
      </nav>

      {isPending ? (
        <LoadingRes />
      ) : (
        <>
          {activeNav == 0 && (
            <div className="flex flex-col pt-5 gap-y-5">
              {mainData.map((res, i) => {
                return (
                  <div key={res["extracted-results"]}>
                    <ResultBox
                      header={res["template-id"]}
                      url={url}
                      reqRes={`${res["request"]} \n ${res["response"]}`}
                      subHead={res["info"]["description"]}
                      extractedResults={res["extracted-results"] || []}
                      port={res["port"]}
                      scheme={res["scheme"]}
                      severity={res["info"]["severity"]}
                    />
                  </div>
                );
              })}
              {mainData.length === 0 && <NoRes />}

              {/* <InfoRes
                header="15 informational findings"
                url={url}
                reqRes={""}
                subHead={
                  "Response headers do not include the X-Content-Type-Options HTTP security header"
                }
                infoList={[
                  "Info Website is accessible",
                  "Nothing was found for website technologies.",
                  "Nothing was found for client access policies.",
                  "Nothing was found for website technologies.",
                  "Info Nothing was found for absence of the security.txt file.",
                  "Nothing was found for enabled HTTP OPTIONS method.",
                  "Info Nothing was found for secure communication.",
                  "Nothing was found for domain too loose set for cookies.",
                  "Nothing was found for HttpOnly flag of cookie.",
                  "Info Nothing was found for Secure flag of cookie.",
                  "Info Nothing was found for unsafe HTTP header Content Security Policy.",
                ]}
              /> */}
              {/* <InfoRes /> */}
            </div>
          )}
          {activeNav == 1 && (
            <div className="flex flex-col">
              {mainData
                .filter((res) => res["info"]["severity"] === "high")
                .map((res, i) => {
                  return (
                    <div key={res["extracted-results"]}>
                      <ResultBox
                        header={res["template-id"]}
                        url={url}
                        reqRes={`${res["request"]} \n ${res["response"]}`}
                        subHead={res["info"]["description"]}
                        extractedResults={res["extracted-results"] || []}
                        port={res["port"]}
                        scheme={res["scheme"]}
                        severity={res["info"]["severity"]}
                      />
                    </div>
                  );
                })}
              {mainData.filter((res) => res["info"]["severity"] === "high")
                .length === 0 && <NoRes />}
            </div>
          )}
          {activeNav == 2 && (
            <div className="flex flex-col">
              {mainData
                .filter((res) => res["info"]["severity"] === "medium")
                .map((res, i) => {
                  return (
                    <div key={res["extracted-results"]}>
                      <ResultBox
                        header={res["template-id"]}
                        url={url}
                        reqRes={`${res["request"]} \n ${res["response"]}`}
                        subHead={res["info"]["description"]}
                        extractedResults={res["extracted-results"] || []}
                        port={res["port"]}
                        scheme={res["scheme"]}
                        severity={res["info"]["severity"]}
                      />
                    </div>
                  );
                })}
              {mainData.filter((res) => res["info"]["severity"] === "medium")
                .length === 0 && <NoRes />}
            </div>
          )}
          {activeNav == 3 && (
            <div className="flex flex-col">
              {mainData
                .filter((res) => res["info"]["severity"] === "low")
                .map((res, i) => {
                  return (
                    <div key={res["extracted-results"]}>
                      <ResultBox
                        header={res["template-id"]}
                        url={url}
                        reqRes={`${res["request"]} \n ${res["response"]}`}
                        subHead={res["info"]["description"]}
                        extractedResults={res["extracted-results"] || []}
                        port={res["port"]}
                        scheme={res["scheme"]}
                        severity={res["info"]["severity"]}
                      />
                    </div>
                  );
                })}
              {mainData.filter((res) => res["info"]["severity"] === "low")
                .length === 0 && <NoRes />}
            </div>
          )}
          {activeNav == 4 && (
            <div className="flex flex-col">
              {mainData
                .filter((res) => res["info"]["severity"] === "info")
                .map((res, i) => {
                  return (
                    <div key={res["extracted-results"]}>
                      <ResultBox
                        header={res["template-id"]}
                        url={url}
                        reqRes={`${res["request"]} \n ${res["response"]}`}
                        subHead={res["info"]["description"]}
                        extractedResults={res["extracted-results"] || []}
                        port={res["port"]}
                        scheme={res["scheme"]}
                        severity={res["info"]["severity"]}
                      />
                    </div>
                  );
                })}
              {mainData.filter((res) => res["info"]["severity"] === "info")
                .length === 0 && <NoRes />}
            </div>
          )}
        </>
      )}
    </section>
  );
};

export default MiniNavbar;
