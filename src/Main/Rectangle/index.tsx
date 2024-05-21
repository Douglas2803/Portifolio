import Avatar1 from "../../assets/img/rectangle-sm.webp";
import Avatar2 from "../../assets/img/Rectangle.webp";

import "./style.scss";

const Rectangle = () => {
  return (
    <>
      <img src={Avatar1} alt="Retângulo colorido" className="rectangle-small" />
      <img src={Avatar2} alt="Retângulo colorido" className="rectangle" />
    </>
  );
};

export default Rectangle;
