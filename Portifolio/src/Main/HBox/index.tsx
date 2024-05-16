import React from "react";

import "./style.scss";

interface IpropsHBox {
  title: string;
  className?: string;
}

const HBox: React.FC<IpropsHBox> = ({ title, className }) => {
  return <div className= "box"><h3 className={className}>{title}</h3></div>;
};

export default HBox;
