import React from "react";
import Nav from "../Nav";
import { IoMdCloseCircleOutline } from "react-icons/io";
import "./style.scss";

interface IPropsSidebar {
  active: boolean;
  setActive: React.Dispatch<React.SetStateAction<boolean>>;
}

const Sidebar: React.FC<IPropsSidebar> = ({ active, setActive }) => {
  
  const toggleSidebar = () => {
    setActive(false);
  };

  if (!active) {
    return null;
  }

  return (
    <aside className={active ? "sidebar" : "sidebar-close"}>
      <button className="button-close" onClick={toggleSidebar}>
        <IoMdCloseCircleOutline className="close" />
      </button>
      <Nav setActive={setActive} />
    </aside>
  );
};

export default Sidebar;
