"use client";
import React from "react";
interface ToggleCartContextProps {
  showCartInfo: boolean;
  setShowCartInfo: React.Dispatch<React.SetStateAction<boolean>>;
}
const ToggleCartDetailsContext = React.createContext<
  undefined | ToggleCartContextProps
>(undefined);
export default function ToggleCartDetailsProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [showCartInfo, setShowCartInfo] = React.useState(false);
  const value = { showCartInfo, setShowCartInfo };
  return (
    <ToggleCartDetailsContext.Provider value={value}>
      {children}
    </ToggleCartDetailsContext.Provider>
  );
}

export function useToggleCartDetailsContext() {
  const context = React.useContext(ToggleCartDetailsContext);
  if (!context) {
    throw Error(
      "Toggle cart context should be available only inside ToggleCartDetailsProvider"
    );
  } else {
    return context;
  }
}
