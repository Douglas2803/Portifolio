import { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";

import { ToastContainer,toast } from "react-toastify";

import 'react-toastify/dist/ReactToastify.css';

import "./style.scss";

const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const regexname = /^[A-Za-z\s]+$/;
  const regexemail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  function validateFields() {
    return regexname.test(name) && regexemail.test(email) && message !== "";
  }

  const notify = (message: string, type: "success" | "error") => toast(message,{type});

  function sendEmail(e: any) {
    e.preventDefault();

    if (!validateFields()) return;

    const templateParams = {
      from_name: name,
      message: message,
      email: email,
    };

    emailjs
      .send(
        "service_rpsqfcn",
        "template_lx6ixga",
        templateParams,
        "TGpHPJTJFebg_rh9k"
      )
      .then((response) => {
        console.log("email enviado", response);
        setEmail("");
        setName("");
        setMessage("");
        notify("Enviado com sucesso","success");
      })
      .catch((err) => {
        console.log("ERRO: ", err);
        notify("Enviado com sucesso","error");
      });
  }

  return (
    <div className="form-group">
      <form action="#" method="post" className="form" onSubmit={sendEmail}>
        <input
          type="text"
          placeholder="Seu nome"
          name="name"
          id="name"
          className="form-items"
          required
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
        <input
          type="email"
          name="email"
          placeholder="Seu e-mail"
          id="email"
          className="form-items"
          required
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <textarea
          placeholder="Sua mensagem aqui"
          name="message"
          id="message"
          className="form-items"
          value={message}
          onChange={(event) => setMessage(event.target.value)}
        />
        <input type="submit" className="form-items" />
      </form>
      <ToastContainer />
    </div>
  );
};

export default Form;