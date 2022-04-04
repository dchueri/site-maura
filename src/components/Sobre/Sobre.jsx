import React from "react";
import "./Sobre.css";
import {
  AiOutlineInstagram,
  AiFillFacebook,
  AiOutlineWhatsApp,
} from "react-icons/ai";
import { motion } from "framer-motion";
import { Link } from "react-scroll/modules";

const Sobre = () => {
  return (
    <div className="sobre">
      <div className="s-esquerda">
        <motion.div whileHover={{ scale: 1.1 }} className="s-nome">
          <h1>Olá! Eu sou a</h1>
          <h2>Maura Chueri</h2>
          <p>
            Artesã especializada na criação de esculturas em biscuit.
          </p>
          <Link spy={true} to="Contato" smooth={true}>
            <button className="button s-botao">Vamos conversar!</button>
          </Link>
        </motion.div>
        <div className="div s-icones">
            <a
              href="https://www.instagram.com/maurachueri/"
              target="_blank"
              rel="noreferrer"
            >
              <AiOutlineInstagram />
            </a>
            <a
              href="https://www.facebook.com/maurachueri"
              target="_blank"
              rel="noreferrer"
            >
              <AiFillFacebook />
            </a>
            <a
              href="https://api.whatsapp.com/send?phone=5521993255478&text=Ol%C3%A1%2C%20gostaria%20de%20solicitar%20um%20or%C3%A7amento."
              target="_blank"
              rel="noreferrer"
            >
              <AiOutlineWhatsApp />
            </a>
          </div>
      </div>
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{
          type: "spring",
          duration: 2,
        }}
        className="s-direita"
      >
        <div className="s-img1"></div>
        <div className="s-img2"></div>
      </motion.div>
    </div>
  );
};

export default Sobre;
