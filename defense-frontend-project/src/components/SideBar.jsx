import "../css/SideBar.css";
import {
  FaBell,
  FaSuitcase,
  FaMicrosoft,
  FaSignature,
  FaUser,
  FaSitemap,
  FaMedkit,
  FaCalendar,
  FaSun,
  FaShieldAlt,
  FaArrowAltCircleRight,
} from "react-icons/fa";
const SideBar = () => {
  return (
    <>
      <div className="side-bar">
        <div className="one">
          <FaBell />
          <FaSuitcase />
        </div>
        <div className="two">
          <FaMicrosoft />
          <FaSignature />
          <div className="user-icon">
            <div className="blue-line">
              <FaUser />
              <span id="blue-line"></span>
            </div>
          </div>
          <FaSitemap />
          <FaMedkit />
          <FaCalendar />
          <div className="lin"></div>
          <FaSun />
          <FaShieldAlt />
        </div>
        <div className="three">
          <div className="lin"></div>
          <FaArrowAltCircleRight />
        </div>
      </div>
    </>
  );
};

export default SideBar;
