import { ReactNode } from "react";
import {
  Tooltip as TooltipRoot,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./primitive";

type TooltipProps = {
  children: ReactNode;
  content: string | number | ReactNode;
};

export const Tooltip = ({ children, content }: TooltipProps) => {
  return (
    <TooltipProvider>
      <TooltipRoot delayDuration={300}>
        <TooltipTrigger asChild>{children}</TooltipTrigger>
        <TooltipContent>
          <p>{content}</p>
        </TooltipContent>
      </TooltipRoot>
    </TooltipProvider>
  );
};
