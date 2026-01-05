"use client";
import React from "react";
interface SideBarContextProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
export const SideBarContext = React.createContext<
  SideBarContextProps | undefined
>(undefined);
export default function SidebarProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [open, setOpen] = React.useState(false);
  const value = { open, setOpen };
  return (
    <SideBarContext.Provider value={value}>{children}</SideBarContext.Provider>
  );
}

// make consuming easy with a custom hook
export function useSidebar() {
  const context = React.useContext(SideBarContext);
  if (context === undefined) {
    throw Error("useSidebar should only be used inside a context provider");
  } else {
    return context;
  }
}
