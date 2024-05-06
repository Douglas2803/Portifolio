import React from "react";

import "./style.scss";

interface ListProps {
  items: string[];
  className?: string;
}

const List: React.FC<ListProps> = ({ items, className }) => {
  return (
    <ul className={className}>
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
};

export default List;
