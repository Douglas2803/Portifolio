import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
} from "@chakra-ui/accordion";
import { IoIosArrowDropdown } from "react-icons/io";
import Content from "../../Content";
import check from "../../assets/icon/check-icon.png";

import "./style.scss";

interface IPropsAcordion {
  title: string;
  items: string[];
  src: string;
  src2?: string;
  alt: string;
  alt2?: string;
}
const Acordion: React.FC<IPropsAcordion> = ({
  title,
  items,
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
        <h3 className="title-icon">{title}</h3>
      </AccordionButton>
      <AccordionPanel className="text">
        <article>
          {items && (<ul className= "a-list">
        {items && items.map((item, index) => (
          <li key={index}>
            <img src={check} alt="icone de check list" className="a-check-icon"/>
            {item}
          </li>
        ))}
      </ul>
      )}
        </article>
      </AccordionPanel>
    </AccordionItem>
  );
};

export default Acordion;
