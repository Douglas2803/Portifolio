import { useEffect, useState } from "react";
import List from "../../List";
import "./style.scss";

interface IPropsNav {
  className?: string;
  setActive?: React.Dispatch<React.SetStateAction<boolean>>;
}

const Nav: React.FC<IPropsNav> = ({ className, setActive }) => {
  const handleClick = () => {
    if (setActive) {
      setActive((prevActive) => !prevActive); 
    }
  };

  return (
    <nav className={`navigation ${className}`}>
      <ul>
        <li>
          <a href="#sobre" onClick={handleClick}>
            Sobre
          </a>
        </li>
        <li>
          <a href="#habilidades" onClick={handleClick}>
            Habilidades
          </a>
        </li>
        <li>
          <a href="#portifolio" onClick={handleClick}>
            Portfólio
          </a>
        </li>
        <li>
          <a href="#contato" onClick={handleClick}>
            Contato
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
