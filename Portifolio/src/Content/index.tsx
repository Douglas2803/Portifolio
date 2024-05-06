import React from "react";

import "./style.scss";

interface IContentProps {
  text: string;
}

const Content: React.FC<IContentProps> = ({ text }) => {
  return <p className="content">{text}</p>;
};

export default Content;
