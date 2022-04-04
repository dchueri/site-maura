import React from "react";
import "./Card.css"

const Card = ({ imagem, titulo, detalhes }) => {
  return (
    <div className="card">
      <img src={imagem} alt="" />
      <span>{titulo}</span>
      <p>{detalhes}</p>
      <button className="button">Veja mais!</button>
    </div>
  );
};

export default Card;
