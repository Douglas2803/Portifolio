import React, { ReactNode } from "react";
import "./style.scss";

interface IPropsSubtitle {
  subtitle: string;
  className?: string;
  children?: ReactNode;
}

const Subtitle: React.FC<IPropsSubtitle> = ({ subtitle, className, children }) => {
  return (
    <h2 className={`subtitle ${className}`}>
      {subtitle}
      {children}
    </h2>
  );
};

export default Subtitle;