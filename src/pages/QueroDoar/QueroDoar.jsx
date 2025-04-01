import style from "../QueroDoar/querodoar.module.scss";
import formImg from "../../assets/formimg.png";
import axios from "axios";
import { useState } from "react";

export default function QueroDoar() {
  const [título, setTítulo] = useState("");
  const [categoria, setCategoria] = useState("");
  const [autor, setAutor] = useState("");
  const [image_url, setImage_url] = useState("");

  const pegarTítulo = (e) => {
    setTítulo(e.target.value);
  };
  const pegarCategoria = (e) => {
    setCategoria(e.target.value);
  };
  const pegarAutor = (e) => {
    setAutor(e.target.value);
  };
  const pegarImage_url = (e) => {
    setImage_url(e.target.value);
  };

  const envioDados = async () => {
    const dadosParaEnviar = {
      título,
      categoria,
      autor,
      image_url,
    };
    await axios.post("https://api-ilql.onrender.com/doar", dadosParaEnviar);
  };

  return (
    <div>
      <span className={style.formtitle}>
        Por favor, preencha o formulário com suas informações e as informações
        do livro.
      </span>
      <section className={style.formcontainer}>
        <form className={style.form} onSubmit={(e) => [e.preventDefault()]}>
          <div className={style.formmaintext}>
            {" "}
            <img src={formImg} alt="Imagem de um Livro" />
            <p>Informações do Livro</p>
          </div>
          <input
            className={style.forminput}
            type="text"
            placeholder="Título"
            onChange={pegarTítulo}
            required
          />
          <input
            className={style.forminput}
            type="text"
            placeholder="Categoria"
            onChange={pegarCategoria}
            required
          />
          <input
            className={style.forminput}
            type="text"
            placeholder="Autor"
            onChange={pegarAutor}
            required
          />
          <input
            className={style.forminput}
            type="text"
            placeholder="Link da Imagem"
            onChange={pegarImage_url}
            required
          />
          <button
            className={style.formbutton}
            type="submit"
            onClick={envioDados}
          >
            Doar
          </button>
        </form>
      </section>
    </div>
  );
}
