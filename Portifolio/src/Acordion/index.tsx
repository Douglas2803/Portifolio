import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
} from "@chakra-ui/accordion";
import { IoIosArrowDropdown } from "react-icons/io";
import Content from "../Content";

import "./style.scss";

interface IPropsAcordion {
  title: string;
  paragraph: string;
  src: string;
  src2?: string;
  alt: string;
  alt2?: string;
}
const Acordion: React.FC<IPropsAcordion> = ({
  title,
  paragraph,
  src,
  src2,
  alt,
  alt2,
}) => {
  return (
    <AccordionItem className="accordion-item">
      <AccordionButton className="button-accordion">
        <IoIosArrowDropdown className="down-arrow" />
        <img src={src} alt={alt} className="img-icons" />
        {src2 && <img src={src2} alt={alt2} className="img-icons" />}
        <h3>{title}</h3>
      </AccordionButton>
      <AccordionPanel className="text">
        <Content text={paragraph} className="content-skills" />
      </AccordionPanel>
    </AccordionItem>
  );
};

export default Acordion;
