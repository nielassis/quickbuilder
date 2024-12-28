import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import { InfoSideBar } from "./infos-sidebar";
import { ResumeContent } from "./resume-content";
import { StructureSideBar } from "./structure-sidebar";

export const ResumePage = () => {
  return (
    <main className="w-full h-screen overflow-hidden">
      <ResizablePanelGroup direction="horizontal" className="h-full w-full">
        <ResizablePanel minSize={20} maxSize={40} defaultSize={30}>
          <InfoSideBar />
        </ResizablePanel>

        <ResizableHandle withHandle />

        <ResizablePanel>
          <ResumeContent />
        </ResizablePanel>
        <ResizableHandle withHandle />

        <ResizablePanel minSize={20} maxSize={35} defaultSize={25}>
          <StructureSideBar />
        </ResizablePanel>
      </ResizablePanelGroup>
    </main>
  );
};
