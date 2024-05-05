import React from "react";
import List from "../List/index";
import { IoMdCloseCircleOutline } from "react-icons/io";
import "./style.scss";

const Sidebar = (props) => {
  const closeSidebar = () => {
    props.active(false);
  };

  return (
    <aside className={props.active ? "sidebar" : "sidebar-close"}>
      <button>
        <IoMdCloseCircleOutline onClick={closeSidebar} className="close" />
      </button>
      <List />
    </aside>
  );
};

export default Sidebar;
