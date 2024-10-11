"use client";
import React from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { MagicWandIcon, QuestionMarkCircledIcon } from "@radix-ui/react-icons";
import CustomeDialog from "../custom/CustomeDialog";
import PulsatingButton from "../ui/PulsatingBtn";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

const formSchema = z.object({
  target: z.string().url(),
  type: z.enum(["Recon", "XSS", "SQLI"], {
    required_error: "You need to select a Vulnerability type.",
  }),
});
const WebsiteScannerForm = () => {
  const router = useRouter();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      target: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
    // router.replace(`/website-scan?url=${values.target}&type=${values.type}`);
    router.push(`/website-scan?url=${values.target}&type=${values.type}`);
    // toast.success("val");
  }
  //font-[family-name:var(--font-yekan-mono)]
  return (
    <div className="w-full flex justify-center h-[40vh] ">
      <div className="!w-[40rem] bg-sla">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="target"
              render={({ field }) => (
                <FormItem className="flex justify-between w-full items-start">
                  <FormLabel className=" font-bold text-xl mt-2.5">
                    Target
                  </FormLabel>
                  <div className="w-[87%]">
                    <FormControl className="w-full">
                      <Input
                        placeholder="https://www.example.com"
                        className="w-full ring-1 ring-gray-500 focus-visible:border-none rounded-none border"
                        {...field}
                      />
                    </FormControl>
                    {/* <FormDescription>
                      This is your public display name.
                    </FormDescription> */}
                    <FormMessage />
                  </div>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="type"
              render={({ field }) => (
                <FormItem className="space-y-1 w-[70%] mx-auto">
                  {/* <FormLabel>Notify me about...</FormLabel> */}
                  <FormControl>
                    <RadioGroup
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                      className="flex flex-col space-y-1"
                    >
                      <FormItem className="flex items-center space-x-3 space-y-0">
                        <FormControl>
                          <RadioGroupItem value="Recon" id={"Recon"} />
                        </FormControl>
                        <FormLabel
                          htmlFor="Recon"
                          className="font-normal flex gap-x-3"
                        >
                          Recon
                          <CustomeDialog header="Recon">
                            Lorem ipsum dolor, sit amet consectetur adipisicing
                            elit. Quas sed, quae consequuntur optio atque sit
                            maxime debitis? Facilis quo, necessitatibus
                            temporibus, minus accusamus autem ducimus vitae
                            quidem, at repellat modi!
                          </CustomeDialog>
                        </FormLabel>
                      </FormItem>
                      <FormItem className="flex items-center space-x-3 space-y-0">
                        <FormControl>
                          <RadioGroupItem value="XSS" id={`XSS`} />
                        </FormControl>
                        <FormLabel
                          className="font-normal flex gap-x-3"
                          htmlFor="XSS"
                        >
                          XSS
                          <CustomeDialog header="XSS">
                            Lorem ipsum dolor, sit amet consectetur adipisicing
                            elit. Quas sed, quae consequuntur optio atque sit
                            maxime debitis? Facilis quo, necessitatibus
                            temporibus, minus accusamus autem ducimus vitae
                            quidem, at repellat modi!
                          </CustomeDialog>
                        </FormLabel>
                      </FormItem>
                      <FormItem className="flex items-center space-x-3 space-y-0">
                        <FormControl>
                          <RadioGroupItem value="SQLI" id="SQLI" />
                        </FormControl>
                        <FormLabel
                          htmlFor="SQLI"
                          className="font-normal flex gap-x-3"
                        >
                          SQLI
                          <CustomeDialog header="SQLI">
                            Lorem ipsum dolor, sit amet consectetur adipisicing
                            elit. Quas sed, quae consequuntur optio atque sit
                            maxime debitis? Facilis quo, necessitatibus
                            temporibus, minus accusamus autem ducimus vitae
                            quidem, at repellat modi!
                          </CustomeDialog>
                        </FormLabel>
                      </FormItem>
                    </RadioGroup>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="w-full !mt-20 text-lg  flex justify-center items-center font-[family-name:var(--font-yekan-mono)] tracking-wide font-medium">
              {/* <Button type="submit">Submit</Button> */}
              <PulsatingButton
                type="submit"
                className="flex flex-row gap-x-1 hover:!bg-secondary"
              >
                <MagicWandIcon className="w-5 h-5" />
                <span>شروع تست</span>
              </PulsatingButton>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default WebsiteScannerForm;
