import React from "react";
import { MdArrowOutward } from "react-icons/md";

import "./style.scss";
const Main = () => {
  return (
    <main>
      <h2 className="subtitle">
        Contato
        <MdArrowOutward className="arrow" />
      </h2>
      <h1 className="title">
        <span className="name">Douglas Giacomelli</span>
        <span className="role">Desenvolvedor Frontend</span>
      </h1>
    </main>
  );
};

export default Main;
