import React from "react";
import Subtitle from "../Subtitle";
import { MdArrowOutward } from "react-icons/md";
import "./style.scss";

const Title = () => {
  return (
    <>
      <h1 className="title">
        <span className="name">Douglas Giacomelli</span>
        <span className="role">Desenvolvedor Frontend</span>
        <Subtitle subtitle="Contato" className="subtitle-contact">
          <MdArrowOutward className="arrow" />
        </Subtitle>
      </h1>
    </>
  );
};

export default Title;
