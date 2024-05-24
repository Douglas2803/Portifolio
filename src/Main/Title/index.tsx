import Subtitle from "../Subtitle";
import { FiArrowDownRight } from "react-icons/fi";
import "./style.scss";

const Title = () => {
  return (
    <>
      <h1 className="title">
        <span className="name">Douglas Giacomelli</span>
        <span className="role">
          Desenvolvedor Frontend
          <a href="#contato" aria-label="contato">
            <Subtitle subtitle="Contato" className="subtitle-contact-desktop">
              <FiArrowDownRight className="arrow-d" />
            </Subtitle>
          </a>
        </span>
      </h1>
    </>
  );
};

export default Title;
