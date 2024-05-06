import React from "react";
import "./style.scss";

import List from "../../List";

const Nav = () => {
  return (
    <nav className="navigation">
      <List
        items={["Sobre", "Habilidades", "Portifólio", "Contato"]}
        className="items-nav"
      />
    </nav>
  );
};

export default Nav;
