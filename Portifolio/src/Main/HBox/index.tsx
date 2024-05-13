import React from "react";

import "./style.scss";

interface IpropsHBox {
  title: string;
}

const HBox: React.FC<IpropsHBox> = ({ title }) => {
  return <div className="box"><h3 className="title-box">{title}</h3></div>;
};

export default HBox;
