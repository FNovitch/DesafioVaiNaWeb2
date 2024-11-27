import style from "../QueroDoar/querodoar.module.scss";
import formImg from "../../assets/formimg.png";

export default function Contact() {
  return (
    <div>
      <span className={style.formtitle}>
        Por favor, preencha o formulário com suas informações e as informações do livro.
      </span>
      <section className={style.formcontainer}>
        <form className={style.form}>
          <div className={style.formmaintext}>
            {" "}
            <img src={formImg} alt="Imagem de um Livro" />
            <p>Informações do Livro</p>
          </div>
          <input className={style.forminput} type="text" placeholder="Título" required />
          <input className={style.forminput} type="text" placeholder="Categoria" required />
          <input className={style.forminput} type="text" placeholder="Autor" required />
          <input className={style.forminput} type="text" placeholder="Link da Imagem" required />
          <button className={style.formbutton} type="submit">
            Doar
          </button>
        </form>
      </section>
    </div>
  );
}
