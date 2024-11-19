import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import Inicio from "../../pages/Inicio/Inicio";
import LivrosDoados from "../../pages/LivrosDoados/LivrosDoados";
import QueroDoar from "../../pages/QueroDoar/QueroDoar";
import Logo from "../../assets/logo.png";
import Lupa from "../../assets/search.svg";
import style from "./header.module.scss";
export default function Header() {
  return (
    <BrowserRouter>
      <header className={style.header}>
        <section className={style.logoHeader}>
          <img src={Logo} alt="Imagem de um livro aberto" />
          <h1>Livros Vai Na Web</h1>
        </section>
        <nav className={style.navHeader}>
          <ul>
            <li>
              <Link className={style.link} to="/">
                Início
              </Link>
            </li>
            <li>
              <Link className={style.link} to="/LivrosDoados">
                Livros Doados
              </Link>
            </li>
            <li>
              <Link className={style.link} to="/QueroDoar">
                Quero Doar
              </Link>
            </li>
          </ul>
        </nav>
        <section className={style.inputHeader}>
          <input type="search" name="" id="" placeholder="O que você procura?" />
          <button>
            <img src={Lupa} alt="imagem de lupa branca" className={style.imgHeader} />
          </button>
        </section>
      </header>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/LivrosDoados" element={<LivrosDoados />} />
        <Route path="/QueroDoar" element={<QueroDoar />} />
      </Routes>
    </BrowserRouter>
  );
}
