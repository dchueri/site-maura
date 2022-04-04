import React, { useRef, useState } from "react";
import "./Contato.css";
import emailjs from "@emailjs/browser";
import { Link } from "react-scroll/modules";

const Contato = () => {
  const form = useRef();

  const [enviado, setEnviado] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_5utp39z",
        "template_prerx8h",
        form.current,
        "54rRNC3JULB_O63qn"
      )
      .then(
        (result) => {
          console.log(result.text);
          setEnviado(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="form-contato" id="Contato">
      <div className="c-esqueda">
        <div className="contato">
          <h1>Fale comigo</h1>
          <h2>Agora mesmo!</h2>
        </div>
      </div>
      <div className="c-direita">
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="nome"
            className="usuario"
            placeholder="Nome"
          />
          <input
            type="email"
            name="email"
            className="usuario"
            placeholder="E-mail"
          />
          <input
            type="text"
            name="telefone"
            className="usuario"
            placeholder="Telefone para contato"
          />
          <textarea
            name="mensagem"
            className="usuario"
            placeholder="Mensagem"
          />
          <input type="submit" value="Enviar" className="button" />
          <span>
            {enviado && "Obrigada pela mensagem, já já irei te responder :)"}
          </span>
        </form>
      </div>
      <Link spy={true} to="Menu" smooth={true}>
        <div className="voltar">Voltar para o início</div>
      </Link>
    </div>
  );
};

export default Contato;
