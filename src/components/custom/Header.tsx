"use client";
import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";
import MenuIcon from "@/../assets/svgs/Menu.svg";
import PersonIcon from "@/../assets/svgs/Person.svg";
import DropDownIcon from "@/../assets/svgs/Drop-down.svg";
import LogoIcon from "@/../assets/imgs/logo3.png";
import { toast } from "sonner";
import { EnvelopeOpenIcon, LightningBoltIcon } from "@radix-ui/react-icons";
import { useRouter } from "next/navigation";

const Header = () => {
  const router = useRouter();
  return (
    <header className="h-[58px] bg-neutral-800 fixed w-full font-vazir-bold z-20">
      <div className="w-full flex-row-reverse items-center h-full justify-between flex">
        <div className="flex flex-row-reverse h-full ">
          <Button
            variant={"link"}
            className="border-l border-neutral-600 !rounded-none p-0 h-full px-3 z-20"
          >
            <Image alt="menu" className="w-8 h-8" src={MenuIcon} />
          </Button>
          <Button
            variant={"link"}
            className="flex flex-row h-full w-full items-center "
            onClick={() => router.replace("/")}
          >
            <h2 className="text-slate-200 font-bold text-lg translate-x-8">
              ابزار تست نفوذ
            </h2>
            <Image
              alt="menu"
              className="w-[85px] h-[85px] translate-x-5 z-0"
              src={LogoIcon}
              priority
            />
          </Button>
        </div>

        <div className="flex flex-row items-center h-full ">
          <Button
            variant={"link"}
            className="border-r focus-visible:border-2 focus-visible:border-slate-400 border-neutral-600 gap-x-2 !rounded-none p-0 h-full px-3 z-20 active:ring-1 active:ring-slate-400"
          >
            <Image alt="menu" className="w-6 h-6" src={PersonIcon} />
            <Image alt="menu" className="w-5 h-5" src={DropDownIcon} />
          </Button>
          <Button
            className="ml-5"
            variant={"secondary"}
            onClick={() => router.replace("/")}
          >
            <LightningBoltIcon className="mr-1 h-4 w-4" /> آزمون جدید
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
