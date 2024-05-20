import "./style.scss";

const Form = () => {
  return (
    <form action="#" method="post" className="form">
      <input
        type="text"
        placeholder="Seu nome"
        name="nome"
        id="nome"
        className="form-items"
        required
      />
      <input
        type="email"
        name="email"
        placeholder="Seu e-mail"
        id="email"
        className="form-items"
        required
      />
      <textarea
        placeholder="Seu assunto aqui"
        name="assunto"
        id="assunto"
        className="form-items"
      >
      </textarea>
      <input type="submit" className="form-items" />
    </form>
  );
};

export default Form;
