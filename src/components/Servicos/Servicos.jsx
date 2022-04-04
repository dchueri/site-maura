import React from "react";
import Card from "../Card/Card";
import "./Servicos.css";
import imagemMenino from "../../assets/img-lembranca2.jpg";
import imagemMenina from "../../assets/img-topodebolo.jpg";
import imagemDecoracao from "../../assets/img-decoracao2.jpg";
import { motion } from "framer-motion";

const Servicos = () => {
  const transicao = { duration: 3, type: "spring" };
  return (
    <div className="servicos" id="Servicos">
      <div className="meus-servicos">
        <div className="s-cabecalho">
          <h1>Meus principais</h1>
          <h2>serviços</h2>
          <p>
            Realizo desde a criação de peças decorativas para festas e decoração
            domésticas <br />
            até restaurações e representações para mostroários em comércios
            diversos
          </p>
        </div>
        <div className="blur se-blur1"></div>
      </div>
      <motion.div
        whileInView={{ left: "0%" }}
        initial={{ left: "-80%" }}
        transition={transicao}
        className="cards"
      >
        <div>
          <Card
            imagem={imagemMenino}
            titulo={"Lembranças"}
            detalhes={"Para a sua casa ou presentear pessoas queridas"}
          />
        </div>
        <div>
          <Card
            imagem={imagemMenina}
            titulo={"Topos de bolo"}
            detalhes={"Para dar um toque especial na sua festa"}
          />
        </div>
        <div>
          <Card
            imagem={imagemDecoracao}
            titulo={"Decoração"}
            detalhes={"Dê vida aos seus personagens favoritos"}
          />
        </div>
      </motion.div>
    </div>
  );
};

export default Servicos;
