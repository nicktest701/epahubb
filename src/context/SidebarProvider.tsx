import React, { ReactElement, createContext, useState } from "react";

type SidebarContextProps = {
  children: ReactElement;
};

type SidebarContextType = {
  showSidebar: boolean;
  setShowSidebar: React.Dispatch<React.SetStateAction<boolean>>;
};

export const CustomContext = createContext<SidebarContextType>({
  showSidebar: false,
  setShowSidebar: () => {},
});

function SidebarProvider({ children }: SidebarContextProps) {
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <CustomContext.Provider
      value={{
        showSidebar,
        setShowSidebar,
      }}
    >
      {children}
    </CustomContext.Provider>
  );
}

export default SidebarProvider;
