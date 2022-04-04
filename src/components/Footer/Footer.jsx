import React from "react";
import "./Footer.css";
import svg from "../../assets/footer.svg";
import svg2 from "../../assets/footer2.svg";
import {
  AiOutlineInstagram,
  AiFillFacebook,
  AiOutlineWhatsApp,
} from "react-icons/ai";
import { motion } from "framer-motion";

const Footer = () => {
  const transicao = { duration: 3, type: "spring" };
  return (
    <div className="footer">
      <motion.img
        src={svg}
        whileInView={{ scaleY: "100%" }}
        initial={{ scaleY: "0%" }}
        transition={transicao}
      />
      <img src={svg2} />

      <div className="f-conteudo">
        <p>maurachueri@gmail.com</p>
        <div className="f-icones">
          <a href="https://www.instagram.com/maurachueri/" target="_blank">
            <AiOutlineInstagram />
          </a>
          <a href="https://www.facebook.com/maurachueri" target="_blank">
            <AiFillFacebook />
          </a>
          <a
            href="https://api.whatsapp.com/send?phone=5521993255478&text=Ol%C3%A1%2C%20gostaria%20de%20solicitar%20um%20or%C3%A7amento."
            target="_blank"
          >
            <AiOutlineWhatsApp />
          </a>
        </div>
        <span>&copy; 2022 - Maura Chueri</span>
      </div>
    </div>
  );
};

export default Footer;
