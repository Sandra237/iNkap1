import "../css/card.css";
import BarChart from "./BarChart";
import CardComponentTwo from "./CardComponentTwo";
import LineChart from "./LineChart";
import Search from "./Search";
import { FaCaretDown } from "react-icons/fa";
const Card = () => {
  return (
    <>
      <div className="title">
        <p>DashBoard <FaCaretDown /></p>
        <span>Attendance Insights <FaCaretDown /></span>
      </div>
      <div className="card">
        <div className="components">
          <CardComponentTwo />
        </div>
        <div className="chart">
          <LineChart />
          <BarChart />
        </div>
        <Search />
      </div>
    </>
  );
};

export default Card;
