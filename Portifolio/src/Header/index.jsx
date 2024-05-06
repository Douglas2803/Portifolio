import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import Button from "../Button";
import Sidebar from "./Sidebar";

import "./style.scss";
import "../variables/variables.scss";

const Header = () => {
    const [sidebar, setSidebar] = useState(false);

    const toggleSidebar = () => {
      setSidebar(!sidebar);
    };

  return (
    <header>
      <Button text="Download CV" className="button-header" />
      <button className="button-hamburguer" onClick={toggleSidebar}>
        <GiHamburgerMenu className="icon-menu" />
      </button>
      {sidebar && <Sidebar active={setSidebar}/>}
    </header>
  );
};

export default Header;
