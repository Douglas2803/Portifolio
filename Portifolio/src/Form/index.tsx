import React from "react";

import "./style.scss";

const Form = () => {
  return (
    <form action="#" method="post" className="form">
      <input type="text" placeholder="Seu nome" name="nome" id="nome" className="form-items"/>
      <input type="email" name="email" placeholder="Seu e-mail" id="email" className="form-items"/>
      <input
        type="content"
        name="content"
        placeholder="Assunto"
        className="form-items"
      />
      <input type="submit" className="form-items"/>
    </form>
  );
};

export default Form;
