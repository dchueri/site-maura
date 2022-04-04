import React from "react";
import "./Menu.css";
import { Link } from "react-scroll/modules";

const Menu = () => {
  return (
    <div className="menu" id="Menu">
      <div className="m-esquerda">
        <div className="m-nome">Maura Chueri</div>
      </div>
      <div className="m-direita">
        <div className="m-lista">
          <ul>
            <Link spy={true} to="Menu" smooth={true} activeClass="activeClass">
              <li>Início</li>
            </Link>
            <Link spy={true} to="Servicos" smooth={true}>
              <li>Seviços</li>
            </Link>
            <Link spy={true} to="Portifolio" smooth={true}>
              <li>Portifólio</li>
            </Link>
          </ul>
        </div>
        <Link spy={true} to="Contato" smooth={true}>
          <button className="button m-botao">Entre em contato</button>
        </Link>
      </div>
    </div>
  );
};

export default Menu;
