"use client";

import { PropsWithChildren } from "react";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { Toaster } from "sonner";

const client = new QueryClient();

const Providers = ({ children }: PropsWithChildren<{}>) => {
  return (
    <>
      <QueryClientProvider client={client}>
        {children}
        <Toaster richColors={true} position={"top-center"} theme="system" />
      </QueryClientProvider>
    </>
  );
};

export default Providers;
