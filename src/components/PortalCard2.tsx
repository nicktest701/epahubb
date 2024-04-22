import { cn } from "../utils/cn";
import wave from "../assets/svg/wave-bg-red.svg";
import share from "../assets/images/share.png";
import withdrawal from "../assets/images/withdrawal.png";
import man from "../assets/svg/man.svg";

function PortalCard2() {
  return (
    <div
      className={cn(
        "bg-orange-500 relative w-full max-w-screen-md  overflow-hidden rounded-md border border-opacity-35 flex flex-col md:flex-row justify-between items-start lg:items-center p-8 "
      )}
    >
      <img src={wave} alt="" className="absolute inset-0 w-full" />

      <div className="flex flex-col justify-between h-full w-full">
        <h3 className="font-medium text-xl md:text-[26px] leading-8 whitespace-nowrap">
          Upgrade Your Plan
        </h3>

        <div className="flex justify-between items-start gap-3 py-8">
          <div className="flex items-center justify-start gap-1">
            <div className="rounded-full size-10 bg-[rgba(255,255,255,0.1)] ">
              <img src={share} alt="" />
            </div>
            <div>
              <a href="#" className="block text-[11px]">
                Share
              </a>
              <span className="text-[12px]">N/A</span>
            </div>
          </div>
          <div className="flex items-center justify-start gap-1">
            <div className="rounded-full size-10 bg-[rgba(255,255,255,0.1)] ">
              <img src={withdrawal} alt="" />
            </div>
            <div>
              <a href="#" className="block text-[11px] whitespace-nowrap">
                Next Widthdrawal
              </a>
              <span className="text-[12px]">N/A</span>
            </div>
          </div>
        </div>

        <div>
          <a
            href="#"
            className="bg-[rgba(255,255,255,0.1)] px-5 py-3 rounded-md "
          >
            Request Withdrawal
          </a>
        </div>
      </div>
      <div className="w-full mx-auto">
        <img src={man} alt="" width="200" className="w-fit" />
      </div>
    </div>
  );
}

export default PortalCard2;
