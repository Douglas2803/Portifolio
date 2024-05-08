import React from "react";

import "./style.scss";

interface ListProps {
  items: string[];
  className?: string;
  link?: string[];
  textLink?: string[];
}

const List: React.FC<ListProps> = ({ items, className, link, textLink }) => {
  return (
    <ul className={className}>
      {items.map((item, index) => (
        <li key={index}>
          {link && textLink ? (
            <>
              <span className="name-item">{item}<br/></span>
              <a href={link[index]}>{textLink[index]}</a>
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
