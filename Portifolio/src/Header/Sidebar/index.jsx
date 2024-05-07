import React from "react";
import Nav from "../Nav";
import { IoMdCloseCircleOutline } from "react-icons/io";
import "./style.scss";

const Sidebar = (props) => {
  const closeSidebar = () => {
    props.active(false);
  };

  return (
    <aside className={props.active ? "sidebar" : "sidebar-close"}>
      <button className="button-close">
        <IoMdCloseCircleOutline onClick={closeSidebar} className="close" />
      </button>
      <Nav />
    </aside>
  );
};

export default Sidebar;
