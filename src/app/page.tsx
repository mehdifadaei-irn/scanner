import WebsiteScannerForm from "@/components/container/WebsiteScannerForm";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import Image from "next/image";
//font-[family-name:var(--font-geist-sans)]
//--font-miras-mono
export default function Home() {
  return (
    <main className="pt-[58px] w-full h-full min-h-screen">
      <div className="w-full flex items-center justify-center mt-10">
        <h1 className="font-[family-name:var(--font-yekan-mono)] text-black text-3xl tracking-wide font-bold">
          آزمون تست نفوذ
        </h1>
      </div>
      <WebsiteScannerForm />
    </main>
  );
}
