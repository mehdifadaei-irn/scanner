"use client";
import React from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";
import { Button } from "../ui/button";
import { CheckIcon, CopyIcon } from "@radix-ui/react-icons";
import { useCopyToClipboard } from "@/hooks/useCopyToClipboard";

const CopyClip = ({ url }: { url: string }) => {
  const { isCopied, copyToClipboard } = useCopyToClipboard();

  return (
    <TooltipProvider>
      <Tooltip delayDuration={10}>
        <TooltipTrigger asChild>
          <Button
            variant={"link"}
            className="!p-0 !m-0 relative"
            onClick={() => copyToClipboard(url)}
          >
            <CopyIcon className="w-6 h-6" />
            <CheckIcon
              className={`absolute left-2 top-3 ${
                isCopied ? "block" : "hidden"
              } `}
            />
          </Button>
        </TooltipTrigger>
        <TooltipContent side="bottom">
          <p>{isCopied ? "Copied!" : "Copy to Clipboard"}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default CopyClip;
