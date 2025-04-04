import style from "../LivrosDoados/livrosdoados.module.scss";
import axios from "axios";
import { useState, useEffect } from "react";

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
        {livros.map((livro) => (
          <div className={style.card} key={livro.id}>
            <h3>{livro.titulo}</h3>
            <h6 className={style.categoria}>{livro.categoria}</h6>
            <img src={livro.image_url} alt="" />
            <h6>{livro.autor}</h6>
          </div>
        ))}
      </div>
    </section>
  );
}
