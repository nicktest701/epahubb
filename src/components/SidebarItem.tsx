import { NavLink, useNavigate } from "react-router-dom";
import { cn } from "../utils/cn";
import { CSSProperties, useContext } from "react";
import { CustomContext } from "../context/SidebarProvider";
// import { cn } from "../utils/cn";

type SidebarItemProps = {
  icon: string;
  title: string;
  to: string | "/";
};

type stylesProps = {
  isActive: boolean;
} & CSSProperties;

const styles = ({ isActive }: stylesProps) => {
  return {
    backgroundColor: isActive ? "rgba(255,255,255,0.05)" : "",
  };
};

function SidebarItem({ icon, title, to }: SidebarItemProps) {
  const navigate = useNavigate();
  const { setShowSidebar } = useContext(CustomContext);

  const handleNavigate = (path: string) => {
    navigate(path);
    setShowSidebar(false);
  };

  return (
    <NavLink
      to={to}
      onClick={() => handleNavigate(to)}
      className={cn(
        "flex items-center justify-start gap-4 text-white py-3 px-2 w-full transition-all duration-300 ease-in-out",
        "hover:bg-secondary200 rounded-md"
      )}
      style={styles}
    >
      <img src={icon} alt="item" width="24" height="24" />
      <span className="text-sm text-gray-400 whitespace-nowrap">{title}</span>
    </NavLink>
  );
}

export default SidebarItem;
