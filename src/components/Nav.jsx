import "../css/nav.css";
import {FaCaretRight} from 'react-icons/fa';
import Image1 from "../assets/images/Avatar.png";
import { FaSistrix, FaObjectUngroup } from "react-icons/fa";
import DarkMode from "./DarkMode";

const Nav = () => {
  return (
    <>
      <div className="navbar">
        <h1>
          Dashboard <FaCaretRight />
        </h1>
        <div className="info">
          <div className="search">
            <FaSistrix />
            <input type="text" name="" placeholder="Quick search" />
          </div>
          <div className="admin-info">
            <span id="icon">
              <FaObjectUngroup />
            </span>
            <div className="line"></div>
            <img src={Image1} />
            <div className="description">
              <p>Admin</p>
              <p>admin@admin</p>
              <DarkMode />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Nav;
