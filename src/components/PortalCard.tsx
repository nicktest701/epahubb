import  { ReactElement } from "react";
import wave from "../assets/svg/wave-bg-red.svg";
import { cn } from "../utils/cn";

type PortalCardProps = {
  bgcolor: string;
  icon: string;
  footerText: string;
  children: ReactElement;
};

function PortalCard({ bgcolor, icon, footerText, children }: PortalCardProps) {
  return (
    <div
      className={cn(
        "bg-primary500 relative min-w-full sm:min-w-[230px] overflow-hidden rounded-md border border-opacity-35 grid grid-rows-3",
        bgcolor
      )}
    >
      <img src={wave} alt="" className="absolute inset-0 w-full min-h-full" />
      <div className="w-full my-auto px-8">
        <div className=" flex items-center justify-center border-2 border-dotted border-opacity-5 rounded-full size-16 bg-[rgba(0,0,0,0.2)] ">
          <img src={icon} alt="" />
        </div>
      </div>

      {children}

      <div className="bg-[rgba(0,0,0,0.2)]  px-8 flex justify-start items-end pb-8">
        <p className="text-gray-300 bg-transparent">{footerText}</p>
      </div>
    </div>
  );
}

export default PortalCard;
