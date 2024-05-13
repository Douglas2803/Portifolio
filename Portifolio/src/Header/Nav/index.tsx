import React from "react";
import "./style.scss";
import List from "../../List";

interface IPropsNav {
  className?: string;
}

const Nav: React.FC<IPropsNav> = ({className}) => {
  return (
    <nav className={`navigation ${className}`}>
      <List
        items={["Sobre", "Habilidades", "Portifólio", "Contato"]}
        className="items-nav"
      />
    </nav>
  );
};

export default Nav;
