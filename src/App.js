import "./App.css";
import Sobre from "./components/Sobre/Sobre";
import Menu from "./components/Menu/Menu";
import Servicos from "./components/Servicos/Servicos";
import Portifolio from "./components/Portifolio/Portifolio";
import Contato from "./components/Contato/Contato";
import Footer from "./components/Footer/Footer";
import { VscChevronDown } from "react-icons/vsc";
import { Link } from "react-scroll/modules";

function App() {
  return (
    <>
      <div className="App">
        <Menu />
        <Sobre />
        <Link spy={true} to="Servicos" smooth={true}>
          <VscChevronDown className="seta" />
        </Link>
        <Servicos />
        <Link spy={true} to="Portifolio" smooth={true}>
          <VscChevronDown className="seta" />
        </Link>
        <Portifolio />
        <Link spy={true} to="Contato" smooth={true}>
          <VscChevronDown className="seta" />
        </Link>
        <Contato />
      </div>
      <Footer />
    </>
  );
}

export default App;
