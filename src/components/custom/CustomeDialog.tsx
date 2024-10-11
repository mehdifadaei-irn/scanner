import React, { PropsWithChildren } from "react";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { QuestionMarkCircledIcon } from "@radix-ui/react-icons";

const CustomeDialog = ({
  children,
  header,
}: PropsWithChildren<{ header: string }>) => {
  return (
    <Dialog>
      <DialogTrigger>
        <QuestionMarkCircledIcon
          color="#fff"
          className="bg-slate-700 w-3 h-3 rounded-full"
        />
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{header}</DialogTitle>
          <DialogDescription>{children}</DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default CustomeDialog;
