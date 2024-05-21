import React from "react";
import Avatar from "../../assets/img/Douglas avatar.png";
import Button from "../../Button";
import List from "../../List";
import Content from "../../Content";

import "./style.scss";

const Section = () => {
  return (
    <section className="section-perfil">
      <div className="rectangle-avatar">
        <img src={Avatar} alt="Douglas em avatar" className="douglas-avatar" />
      </div>
      <Button text="Contacte-me" className="button-profile" />
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
          text="Lorem ipsum dolor sit amet. Et do
            lorum reiciendis nam voluptatem 
            doloribus ingalisum excepturi aut
            mollitia laboriosam et quia exped
            ita est deserunt rerum ut eveniet 
            quas. Qui officiis amet sit velit vol
            uptas qui ullam mollitia."
        />
      </article>
    </section>
  );
};

export default Section;
