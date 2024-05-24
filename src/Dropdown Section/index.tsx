import React, { useState } from "react";
import "./style.scss";

interface ListItem {
  title: string;
  paragraph: string;
}

interface IPropsDropdownSection {
  items: ListItem[];
}

const DropdownSection: React.FC<IPropsDropdownSection> = ({ items }) => {
  const [openDropdownIndex, setOpenDropdownIndex] = useState<number | null>(
    null
  );

  const toggleDropdown = (index: number) => {
    setOpenDropdownIndex(index === openDropdownIndex ? null : index);
  };

  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>
          <button onClick={() => toggleDropdown(index)} aria-label="Botão do dropdown">
            {item.title}
          </button>
          {openDropdownIndex === index && <p>{item.paragraph}</p>}
        </li>
      ))}
    </ul>
  );
};

export default DropdownSection;
