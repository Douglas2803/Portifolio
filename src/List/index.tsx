import React from "react";

import "./style.scss";

interface IListProps {
  items: string[];
  className?: string;
  link?: string[];
  textLink?: string[];
}

const List: React.FC<IListProps> = ({ items, className, link, textLink }) => {
  return (
    <ul className={className}>
      {items.map((item, index) => (
        <li key={index}>
          {link && textLink ? (
            <>
              <span className="name-item">{item}<br/></span>
              <a href={link[index]} aria-label="Lista">{textLink[index]}</a>
            </>
          ) : (
            item
          )}
        </li>
      ))}
    </ul>
  );
};

export default List;
