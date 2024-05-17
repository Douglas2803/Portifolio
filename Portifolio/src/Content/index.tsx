import React from "react";

import "./style.scss";

interface IContentProps {
  text: string;
  className?: string;
}

const Content: React.FC<IContentProps> = ({ text ,className}) => {
  return (
    <p className={`content ${className}`}>
      {text}
    </p>
  );
};

export default Content;
