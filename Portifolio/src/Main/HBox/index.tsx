import React from "react";
import check from "../../assets/icon/check-icon.png";


import "./style.scss";

interface IpropsHBox {
  title: string;
  className?: string;
  items?: string[];
}

const HBox: React.FC<IpropsHBox> = ({ title, className, items }) => {
  return (
    <div className="box">
      <h3 className={className}>{title}</h3>   
      {items && (<ul className= "h-list">
        {items && items.map((item, index) => (
          <li key={index}>
            <img src={check} alt="icone de check list" className="check-icon"/>
            {item}
          </li>
        ))}
      </ul>
      )}
    </div>
  );
};

export default HBox;
