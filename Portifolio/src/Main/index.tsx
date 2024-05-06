import React from "react";
import Title from "./Title";
import Section from "./Section Perfil";
import Rectangle from "./Rectangle/intedx";
import { MdArrowOutward } from "react-icons/md";

import "./style.scss";
const Main = () => {
  return (
    <main>
      <h2 className="subtitle">
        Contato
        <MdArrowOutward className="arrow" />
      </h2>
      <Title />
      <Rectangle/>
      <Section />
    </main>
  );
};

export default Main;
