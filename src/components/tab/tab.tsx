import React, { PropsWithChildren, MouseEvent } from "react";
import classNames from "classnames";
import defaultStyles from "./tab.module.scss";

interface PropsT extends PropsWithChildren {
  label: string;
  isActive?: boolean;
  onClick?: () => void;
  onCustomClick?: () => void;
  customContainerStyle?: string;
  customLabelStyle?: string;
  customActiveLabelStyle?: string;
}

const TabComponent: React.FC<PropsT> = ({
  label,
  isActive,
  onClick,
  onCustomClick = null,
  customContainerStyle,
  customLabelStyle,
  customActiveLabelStyle,
}) => {
  const handleTabClick = (event: MouseEvent) => {
    event.preventDefault();
    onCustomClick ? onCustomClick() : onClick!();
  };

  const containerStyles = classNames(
    defaultStyles.container,
    customContainerStyle
  );
  const labelStyles = classNames(defaultStyles.label, customLabelStyle, {
    [defaultStyles.active]: isActive,
    ...(customActiveLabelStyle && { [customActiveLabelStyle]: isActive }),
  });

  return (
    <div className={containerStyles}>
      <a href="/" className={labelStyles} onClick={handleTabClick}>
        {label}
      </a>
    </div>
  );
};

export default TabComponent;
