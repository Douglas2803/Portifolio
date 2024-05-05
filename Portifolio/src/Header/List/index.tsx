import React from "react";
import "./style.scss";

const List = () => {
  const list: string[] = ["Sobre", "Habilidades", "Portifólio"];

  return (
    <nav className="navigation">
      <ul>
        {list.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </nav>
  );
};

export default List;
