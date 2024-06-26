import Avatar from "../../assets/img/Douglas-avatar 1.png";
import List from "../../List";
import Content from "../../Content";
import html from "../../assets/icon/html-icon.png";
import css from "../../assets/icon/css-icon.png";
import sass from "../../assets/icon/sass-icon.png";
import js from "../../assets/icon/js-icon.png";
import ts from "../../assets/icon/tp-icon.png";
import react from "../../assets/icon/React.png";
import bootstrap from "../../assets/icon/bootstrap.png";
import figma from "../../assets/icon/figma-icon.png";

import "./style.scss";

const Profile = () => {
  return (
    <section className="section-perfil" id="sobre">
      <div className="rectangle-avatar">
        <img src={Avatar} alt="Douglas em avatar" className="douglas-avatar" />
      </div>
      <article className="article-perfil">
        <List
          items={[
            ":Douglas Giacomelli da Silva",
            ":30",
            ":Rio Grande do Sul, Caxias do Sul",
            ":(54)981229448",
          ]}
          className="items-content"
        />
      </article>
      <article className="article-content">
        <Content
          text="Sou graduando Análise e Desenvolvimento de Sistemas e tenho me dedicado ao desenvolvimento web 
          com uma ênfase especial na otimização de busca e na experiência do usuário (UI/UX design). Minha paixão
          é criar soluções que não apenas atendam às necessidades funcionais, mas que também proporcionem uma 
          experiência envolvente e intuitiva para o usuário final."
        />
      </article>
      <aside className="icons-items">
        <img src={html} alt="icone html" className="icon-item" />
        <img src={css} alt="icone css" className="icon-item" />
        <img src={sass} alt="icone sass" className="icon-item" />
        <img src={js} alt="icone js" className="icon-item" />
        <img src={ts} alt="icone ts" className="icon-item" />
        <img src={react} alt="icone react" className="icon-item" />
        <img src={bootstrap} alt="icone bootstrap" className="icon-item" />
        <img src={figma} alt="icone figma" className="icon-item" />
      </aside>
      <div className="background-profile"></div>
    </section>
  );
};

export default Profile;
