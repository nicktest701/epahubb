import { SIDE_BAR_ITEMS } from "../constants";
import SidebarItem from "./SidebarItem";

import logo from "../assets/svg/logo.svg";
import close from "../assets/svg/close.svg";
import { CustomContext } from "../context/SidebarProvider";
import { useContext } from "react";
import { cn } from "../utils/cn";
function Sidebar() {
  const { showSidebar, setShowSidebar } = useContext(CustomContext);

  return (
    <aside
      className={cn(
        "block fixed left-0 right-0 bottom-0 z-50 md:sticky top-0  bg-[#0d0e12] min-h-[100svh]  w-full md:w-[280px] py-8 px-4 transition-all duration-200 ease-in-out overflow-y-scroll lg:overflow-y-auto",
        showSidebar ? "block" : "hidden md:block"
      )}
    >
      <div className="w-full flex justify-start items-center gap-4 ">
        <img src={logo} alt="" className="size-[36px]" />
        <p className="font-extrabold text-[24px] text-primary500">Owusu</p>
        <div className="md:hidden flex-grow flex w-full cursor-pointer">
          <img
            src={close}
            alt=""
            className="size-[28px] ml-auto"
            onClick={() => setShowSidebar(!showSidebar)}
          />
        </div>
      </div>
      <div className="py-8 space-y-1 w-full ">
        {SIDE_BAR_ITEMS.map(({ icon, to, title }) => (
          <SidebarItem title={title} icon={icon} to={to} />
        ))}
      </div>
    </aside>
  );
}

export default Sidebar;
