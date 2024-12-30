import Link from "next/link";
import Logo from "@/assets/logo.svg";
import { AIgenerationDropdown } from "./ai-generation-dropdown";
import { Separator } from "@/components/ui/separator";
import { BasicInfoSection } from "./sections/basic-info";
import { SummarySection } from "./sections/summary";
import { MultipleSections } from "./sections/multiple";

export const InfoSideBar = () => {
  return (
    <aside className="w-full h-full p-6 overflow-y-auto">
      <div className="w-full flex items-center justify-between">
        <Link href="/dashboard/resumes">
          <Logo className="w-full max-w-[80px]" />
        </Link>

        <AIgenerationDropdown />
      </div>
      <Separator className="my-5" />

      <BasicInfoSection />

      <Separator className="my-5" />

      <SummarySection />
      <MultipleSections />
    </aside>
  );
};
