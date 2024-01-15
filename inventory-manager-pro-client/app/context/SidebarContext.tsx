import React, { createContext, useContext, useEffect, useState } from "react";

interface SidebarContextType {
  isCollapsed: boolean;
  setCollapsed: React.Dispatch<React.SetStateAction<boolean>>;
  width: number;
}

const SidebarContext = createContext<SidebarContextType | undefined>(undefined);

const useSidebar = (): SidebarContextType => {
  const [isCollapsed, setCollapsed] = useState(false);
  const [width, setWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 0
  );

  const handleResize = () => {
    const newWidth = typeof window !== "undefined" ? window.innerWidth : 0;
    setWidth(newWidth);
    setCollapsed(newWidth < 576);
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("resize", handleResize);
      handleResize(); // Initialize based on the current width
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }
  }, []);

  return {
    isCollapsed,
    setCollapsed,
    width,
  };
};

const SidebarContextProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => (
  <SidebarContext.Provider value={useSidebar()}>
    {children}
  </SidebarContext.Provider>
);

export default SidebarContextProvider;

export const useSidebarContext = (): SidebarContextType => {
  const context = useContext(SidebarContext);

  if (!context) {
    throw new Error(
      "useTimeInterval must be used within a TimeIntervalContextProvider"
    );
  }

  return context;
};
