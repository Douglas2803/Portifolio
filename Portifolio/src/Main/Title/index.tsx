import Subtitle from "../Subtitle";
import { MdArrowOutward } from "react-icons/md";
import "./style.scss";

const Title = () => {
  return (
    <>
      <h1 className="title">
        <span className="name">Douglas Giacomelli</span>
        <span className="role">
          Desenvolvedor Frontend
          <Subtitle subtitle="Contato" className="subtitle-contact-desktop">
            <MdArrowOutward className="arrow" />
          </Subtitle>
        </span>
      </h1>
    </>
  );
};

export default Title;
