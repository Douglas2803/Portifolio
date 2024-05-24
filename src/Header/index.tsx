import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import Nav from "./Nav";
import Sidebar from "./Sidebar";

import "./style.scss";
import "../variables/variables.scss";

const Header = () => {
  const [sidebarVisible, setSidebarVisible] = useState(false);

  const toggleSidebar = () => {
    setSidebarVisible(!sidebarVisible);
  };

  return (
    <header>
      <Nav className="navigation-desktop" />
      <a
        href="src/assets/files/Currículo Tecnologia da Informação Moderno Azul.pdf"
        download
        className="button button-header"
      >Download Curriculo</a>
      <button
        className="button-hamburguer"
        onClick={toggleSidebar}
        aria-label="Botão hamburguer"
      >
        <GiHamburgerMenu className="icon-menu" />
      </button>
      <Sidebar active={sidebarVisible} setActive={setSidebarVisible} />
    </header>
  );
};

export default Header;
