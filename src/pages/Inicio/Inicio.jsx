import imagemMain from "../../assets/main.png";
import imagemCard1 from "../../assets/card1.png";
import imagemCard2 from "../../assets/card2.png";
import imagemCard3 from "../../assets/card3.png";
import imagemCard4 from "../../assets/card4.png";
import style from "../Inicio/inicio.module.scss";

export default function Inicio() {
  return (
    <div>
      <section className={style.imagemContainer}>
        <img src={imagemMain} className={style.mainImg} alt="Imagem de alguns livros" />
        <span className={style.imagemTexto}>VENHA FAZER PARTE DA MAIOR REDE DE DOAÇÃO</span>
      </section>

      <div className={style.cardSection}>
        <span className={style.spanCard}>Por que devo doar?</span>

        <section className={style.cardContainer}>
          <div className={style.card}>
            <img src={imagemCard1} className={style.imagemCard1} alt="Icone de pessoas interligadas" />
            <p className={style.cardText}>
              {" "}
              Oferece livros a quem não tem acesso, ajudando a reduzir a exclusão social.
            </p>
          </div>
          <div className={style.card}>
            <img src={imagemCard2} className={style.imagemCard1} alt="Icone de uma pessoa segurando um livro" />
            <p className={style.cardText}> Estimula o hábito da leitura e o aprendizado contínuo.</p>
          </div>
          <div className={style.card}>
            <img src={imagemCard3} className={style.imagemCard1} alt="Icone de uma mào com pessoas ligadas" />
            <p className={style.cardText}>
              Fornece conhecimento e inspiração, permitindo que indivíduos transformem suas vidas.
            </p>
          </div>
          <div className={style.card}>
            <img src={imagemCard4} className={style.imagemCard1} alt="Icone de uma balança" />
            <p className={style.cardText}>
              {" "}
              Garante que todos, independentemente de sua condição, tenham oportunidades de aprendizado.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
