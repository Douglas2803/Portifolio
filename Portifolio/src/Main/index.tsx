import React from "react";
import Title from "./Title";
import Section from "../Section";
import Profile from "./Profile";
import Rectangle from "./Rectangle/intedx";
import Subtitle from "./Subtitle";
import Acordion from "./Acordion";
import List from "../List";
import Form from "./Form";
import { Accordion } from "@chakra-ui/accordion";
import { MdArrowOutward } from "react-icons/md";
import HBox from "./HBox";
import html from "../assets/icon/html-icon.png";
import css from "../assets/icon/css-icon.png";
import sass from "../assets/icon/sass-icon.png";
import js from "../assets/icon/js-icon.png";
import ts from "../assets/icon/tp-icon.png";
import react from "../assets/icon/React.png";
import bootstrap from "../assets/icon/bootstrap.png";
import figma from "../assets/icon/figma-icon.png";

import "./style.scss";
const Main = () => {
  return (
    <main>
      <Subtitle subtitle="Contato" className="subtitle-contact">
        <MdArrowOutward className="arrow" />
      </Subtitle>
      <Title />
      <Rectangle />
      <Profile />
      <Section className="section-acordion">
        <Subtitle
          subtitle="Habilidades"
          className="subtitle-skills-portifolio"
        />
        <Accordion allowToggle className="accordion">
          <Acordion
            title="HTML"
            paragraph="skaopskaopskaopskaposaksopak"
            src={html}
            alt="icone de html"
          />
          <Acordion
            title="CSS/SASS"
            paragraph="skaopskaopskaopskaposaksopak"
            src={css}
            src2={sass}
            alt="icone css"
            alt2="icone css"
          />
          <Acordion
            title="JS/TS"
            paragraph="skaopskaopskaopskaposaksopak"
            src={js}
            src2={ts}
            alt="icone javascript"
            alt2="icone typescrit"
          />
          <Acordion
            title="React"
            paragraph="skaopskaopskaopskaposaksopak"
            src={react}
            alt="icone do react"
          />
          <Acordion
            title="Bootstrap"
            paragraph="skaopskaopskaopskaposaksopak"
            src={bootstrap}
            alt="icone do bootstrap"
          />
          <Acordion
            title="Figma"
            paragraph="skaopskaopskaopskaposaksopak"
            src={figma}
            alt="icone do figma"
          />
        </Accordion>
      </Section>
      <Section className="section-portifolio">
        <Subtitle
          subtitle="Portifólio"
          className="subtitle-skills-portifolio"
        />
        <aside className="box-items">
          <HBox title="Em breve" />
          <HBox title="Em breve" />
          <HBox title="Em breve" />
          <HBox title="Em breve" />
        </aside>
      </Section>
      <Section className="section-contatc">
        <Subtitle subtitle="Contato" className="subtitle-skills-portifolio" />
        <article className="contatct">
          <List
            items={["WhatsApp: ", "GitHub: ", "Linkedin: "]}
            link={[
              "https://wa.me/5554981229448",
              "https://github.com/Douglas2803",
              "https://www.linkedin.com/in/douglasgiacomelli/",
            ]}
            textLink={[
              "(54)981229448",
              "https://github.com/Douglas2803",
              "https://www.linkedin.com/in/douglasgiacomelli/",
            ]}
            className="items-contact"
          />
        </article>
        <Form />
      </Section>

    </main>
  );
};

export default Main;
