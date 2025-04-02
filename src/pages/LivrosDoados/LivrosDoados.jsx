import style from "../LivrosDoados/livrosdoados.module.scss";
import Livrodoado from "../../assets/livrodoado.png";
import axios from "axios";
import { useState, UseEffect, useEffect } from "react";

export default function About() {
  const [livros, setLivros] = useState([]);
  const pegarLivros = async () => {
    const resposta = await axios.get("https://api-ilql.onrender.com/livros");
    setLivros(resposta.data);
  };

  useEffect(() => {
    pegarLivros();
  }, []);

  return (
    <section className={style.LivrosdoadosContainer}>
      <span>Livros Doados</span>

      <div className={style.livroscard}>
        <div className={style.cardconteudo}>
          {livros.map((livro) => (
            <div>
              <h3>{livro.titulo}</h3>
              <img src="{livro.image_url}" alt="" />
              <h6>{livro.autor}</h6>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
