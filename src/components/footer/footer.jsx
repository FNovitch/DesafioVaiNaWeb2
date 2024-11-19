import style from "../footer/footer.module.scss";
import facebookIcon from "../../assets/facebookicon.png";
import twitterIcon from "../../assets/twittericon.png";
import youtubeIcon from "../../assets/youtubeicon.png";
import linkedinIcon from "../../assets/linkedinicon.png";
import instagramIcon from "../../assets/instagramicon.png";
export default function Footer() {
  return (
    <div>
      <footer className={style.footer}>
        <div className={style.primeiroFooter}>
          <span>4002-8922</span>
          <div className={style.iconsFooter}>
            <img src={facebookIcon} alt="Icone do Facebook" />
            <img src={twitterIcon} alt="Icone do Twitter" />
            <img src={youtubeIcon} alt="Icone do Youtube" />
            <img src={linkedinIcon} alt="Icone do Linkedin" />
            <img src={instagramIcon} alt="Icone do Instagram" />
          </div>
        </div>

        <div className={style.segundoFooter}>
          <span>Layout desenvolvido pela Vai Na Web para fins educativos - 2024 </span>
        </div>
      </footer>
    </div>
  );
}
