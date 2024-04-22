import { NavLink } from "react-router-dom";

import failed from "../assets/svg/failed.svg";
import location from "../assets/svg/location.svg";
import settings from "../assets/svg/settings.svg";
import chats from "../assets/svg/chats.svg";
import profile from "../assets/images/profile.png";
import { useContext } from "react";
import { CustomContext } from "../context/SidebarProvider";

import logo from "../assets/svg/logo.svg";
function Header() {
  const { showSidebar, setShowSidebar } = useContext(CustomContext);

  return (
    <header className="py-2 flex items-center sticky top-0 z-40 bg-secondary500 md:bg-secondary500  px-4">
      <div
        className="lg:hidden size-12 space-y-2 cursor-pointer pt-2 flex-grow "
        onClick={() => setShowSidebar(!showSidebar)}
      >
        <span className="block w-8 h-[1px] bg-white"></span>
        <span className="block w-8 h-[1px] bg-white"></span>
        <span className="block w-8 h-[1px] bg-white"></span>
      </div>
      <img src={logo} alt="" className="size-[28px] md:size-[36px] " />
      <nav className="hidden container max-w-screen-lg md:flex items-center justify-end gap-4 bg-secondary500">
        <NavLink to="">failed</NavLink>
        <NavLink to="">
          <img src={failed} alt="" className="me-4 size-8" />
        </NavLink>
        <NavLink to="">
          <img src={location} alt="location" />
        </NavLink>
        <NavLink to="">
          <img src={settings} alt="settings" />
        </NavLink>
        <NavLink to="">
          <img src={chats} alt="chats" />
        </NavLink>
        <NavLink to="">
          <img src={profile} alt="profile" className="ml-4 size-8" />
        </NavLink>
      </nav>
    </header>
  );
}

export default Header;
