import style from "../LivrosDoados/livrosdoados.module.scss";
import Livrodoado from "../../assets/livrodoado.png";

export default function About() {
  return (
    <div>
      <section className={style.LivrosdoadosContainer}>
        <span>Livros Doados</span>
        <div className={style.livroscard}>
          <div className={style.cardconteudo}>
            <img src={Livrodoado} alt="Livro o Protagonista" />
            <p>O protagonista</p>
            <p>Susanne Andrade</p>
            <p>Ficção</p>
          </div>
        </div>
      </section>
    </div>
  );
}
