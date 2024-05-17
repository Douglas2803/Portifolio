import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import Button from "../Button";
import Nav from "./Nav";
import Sidebar from "./Sidebar";

import "./style.scss";
import "../variables/variables.scss";

const Header = () => {
  const [sidebarActive, setSidebarActive] = useState(false);

  const toggleSidebar = () => {
    setSidebarActive(!sidebarActive);
  };

  return (
    <header>
      <Nav className="navigation-desktop" />
      <Button text="BAIXAR CURRICULO" className="button-header" />
      <button className="button-hamburguer" onClick={toggleSidebar}>
        <GiHamburgerMenu className="icon-menu" />
      </button>
      <Sidebar active={sidebarActive} setActive={setSidebarActive} />
    </header>
  );
};

export default Header;
