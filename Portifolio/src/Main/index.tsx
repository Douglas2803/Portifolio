import Title from "./Title";
import Section from "../Section";
import Profile from "./Profile";
import Rectangle from "./Rectangle/index";
import Subtitle from "./Subtitle";
import Acordion from "./Acordion";
import List from "../List";
import Form from "./Form";
import { Accordion } from "@chakra-ui/accordion";
import { FiArrowDownRight } from "react-icons/fi";
import HBox from "./HBox";
import html from "../assets/icon/html-icon.png";
import css from "../assets/icon/css-icon.png";
import sass from "../assets/icon/sass-icon.png";
import js from "../assets/icon/js-icon.png";
import ts from "../assets/icon/tp-icon.png";
import react from "../assets/icon/React.png";
import bootstrap from "../assets/icon/bootstrap.png";
import figma from "../assets/icon/figma-icon.png";
import Avatar1 from "../assets/img/Ellipse-vermelha-grande.webp";
import Avatar2 from "../assets/img/Ellipse-laranja-pequena.webp";

import "./style.scss";

const Main = () => {
  return (
    <main>
      <h2 className="subtittle-main">
        <span className="subtittle-main-G">Olá,</span>me chamo{" "}
        <span className="subtittle-main-G">Douglas </span>seu
      </h2>
      <a href="#contato" className="link-contact">
        <Subtitle subtitle="Contato" className="subtitle-contact">
          <FiArrowDownRight className="arrow" />
        </Subtitle>
      </a>
      <Title />
      <img src={Avatar1} alt="Elipse vermelha" className="elipse-vermelha" />
      <img src={Avatar2} alt="Elipse laranja" className="elipse-laranja" />
      <p className="sub-text">
        Desenvolvimento de sites criativos e eficientes
        <br /> para seu negócio.
      </p>
      <Rectangle />
      <Profile />
      <Section className="section-acordion" id="habilidades">
        <Subtitle
          subtitle="Habilidades"
          className="subtitle-skills-portifolio"
        />
        <Accordion allowToggle className="accordion">
          <Acordion
            title="HTML"
            items={[
              "Melhor ranqueamento;",
              "Experiência de usuário (UX);",
              "Segurança;",
              "Acessibilidade;",
            ]}
            src={html}
            alt="icone de html"
          />
          <Acordion
            title="CSS/SASS"
            items={[
              "Experiência de usuário (UX);",
              "Responsividade;",
              "Mobile first;",
            ]}
            src={css}
            src2={sass}
            alt="icone css"
            alt2="icone css"
          />
          <Acordion
            title="JS/TS"
            items={[
              "Amplamente utilizado no mercado, com suporte facilitado;",
              "Interatividade na Web;",
              "Ecosistema de bibliotecas e frameworks ricos;",
              "Segurança e robustez (TS);",
              "Desenvolvimento escalável (TS);",
            ]}
            src={js}
            src2={ts}
            alt="icone javascript"
            alt2="icone typescrit"
          />
          <Acordion
            title="React"
            items={[
              "Biblioteca js/ts mais utilizadas pelo mercado;",
              "Amplamente conhecido e estabelecido pelas empresas;",
              "Consequentemente suporte facilitado;",
            ]}
            src={react}
            alt="icone do react"
          />
          <Acordion
            title="Bootstrap"
            items={[
              "Um dos framework de estilo mais utilizados;",
              "Amplamente estabelicido e conhecido pelo mercado;",
              "Consequentemente suporte facilitado;",
            ]}
            src={bootstrap}
            alt="icone do bootstrap"
          />
          <Acordion
            title="Figma"
            items={[
              "Layouts focados em UI/UX design;",
              "Pensados para a responsividade de dispositivos;",
            ]}
            src={figma}
            alt="icone do figma"
          />
        </Accordion>
        <article className="h-box">
          <HBox
            title="html"
            className="title-box-h"
            items={[
              "Melhor ranqueamento;",
              "Experiência de usuário (UX);",
              "Segurança;",
              "Acessibilidade;",
            ]}
          />
          <HBox
            title="CSS/SASS"
            className="title-box-h"
            items={[
              "Experiência de usuário (UX);",
              "Responsividade;",
              "Mobile first;",
            ]}
          />
          <HBox
            title="JS/TS"
            className="title-box-h"
            items={[
              "Amplamente utilizado no mercado, com suporte facilitado;",
              "Interatividade na Web;",
              "Ecosistema de bibliotecas e frameworks ricos;",
              "Segurança e robustez (TS);",
              "Desenvolvimento escalável (TS);",
            ]}
          />
          <HBox
            title="React"
            className="title-box-h"
            items={[
              "Biblioteca js/ts mais utilizadas pelo mercado;",
              "Amplamente conhecido e estabelecido pelas empresas;",
              "Consequentemente suporte facilitado;",
            ]}
          />
          <HBox
            title="Bootstrap"
            className="title-box-h"
            items={[
              "Um dos framework de estilo mais utilizados;",
              "Amplamente estabelicido e conhecido pelo mercado;",
              "Consequentemente suporte facilitado;",
            ]}
          />
          <HBox
            title="Figma"
            className="title-box-h"
            items={[
              "Layouts focados em UI/UX design;",
              "Pensados para a responsividade de dispositivos;",
            ]}
          />
        </article>
      </Section>
      <Section className="section-portifolio" id="portifolio">
        <Subtitle
          subtitle="Portifólio"
          className="subtitle-skills-portifolio"
        />
        <aside className="box-items">
          <HBox title="Em breve" className="title-box-p" />
          <HBox title="Em breve" className="title-box-p" />
          <HBox title="Em breve" className="title-box-p" />
          <HBox title="Em breve" className="title-box-p" />
        </aside>
      </Section>
      <Section className="section-contatc" id="contato">
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
