import React, {
  Fragment,
  cloneElement,
  Children,
  PropsWithChildren,
} from "react";
import { useTabBar } from "./use-tab-bar";

import defaultStyles from "./tab-bar.module.scss";

interface PropsT extends PropsWithChildren {
  defaultTab?: number | undefined;
}

const TabBarComponent: React.FC<PropsT> = ({ children, defaultTab = 0 }) => {
  const { currentTabId, setCurrentTabId } = useTabBar({ defaultTab });

  const childrenData: React.ReactNode[] = Children.toArray(children);

  return (
    <div className={defaultStyles.container}>
      <div className={defaultStyles.buttonsWrapper}>
        {childrenData?.length &&
          childrenData.map((child: any, index) => {
            return (
              <Fragment key={index}>
                {cloneElement(child, {
                  onClick: () => setCurrentTabId(index),
                  isActive: currentTabId === index,
                  children: null,
                })}
              </Fragment>
            );
          })}
      </div>
      <div className={defaultStyles.panel}>
        {/* @ts-ignore */}
        {childrenData?.[currentTabId]?.props?.children}
      </div>
    </div>
  );
};

export default TabBarComponent;
