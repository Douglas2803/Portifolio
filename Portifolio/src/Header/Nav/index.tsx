import React from "react";
import "./style.scss";
import List from "../../List";

interface IPropsNav {
  className?: string;
}

const Nav: React.FC<IPropsNav> = ({ className }) => {
  return (
    <nav className={`navigation ${className}`}>
      <ul>
        <li><a href="#">Sobre</a></li>
        <li><a href="#">Habilidades</a></li>
        <li><a href="#">Portifólio</a></li>
        <li><a href="#">Contato</a></li>
      </ul>
    </nav>
  );
};

export default Nav;
