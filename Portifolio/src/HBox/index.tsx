import React from "react";

import "./style.scss";

interface IpropsHBox {
  title: string;
}

const HBox: React.FC<IpropsHBox> = ({ title }) => {
  return <aside className="box"><h3 className="title-box">{title}</h3></aside>;
};

export default HBox;
