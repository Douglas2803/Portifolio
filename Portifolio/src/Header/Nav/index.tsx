import { useEffect, useState } from "react";
import List from "../../List";
import "./style.scss";

interface IPropsNav {
  className?: string;
}

const Nav: React.FC<IPropsNav> = ({ className }) => {

  return (
    <nav className={`navigation ${className}`}>
      <ul>
        <li>
          <a href="#sobre">Sobre</a>
        </li>
        <li>
          <a href="#habilidades">Habilidades</a>
        </li>
        <li>
          <a href="#portifolio">Portifólio</a>
        </li>
        <li>
          <a href="#contato">Contato</a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
