import { useState } from "react";

interface UseTabBar {
  defaultTab: number | undefined;
}

// TODO: point to improve - move tab controling to Context to control it outside
export const useTabBar = ({ defaultTab }: UseTabBar) => {
  const [currentTabId, setCurrentTabId] = useState(defaultTab || 0);

  return {
    currentTabId,
    setCurrentTabId,
  };
};
