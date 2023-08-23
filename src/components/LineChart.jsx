import { Line } from "react-chartjs-2";
import Chart from "chart.js/auto";
import { FaListUl } from "react-icons/fa";

const labels = [
  "01 Aug",
  "02 Aug",
  "03 Aug",
  "04 Aug",
  "05 Aug",
  "06 Aug",
  "07 Aug",
  "08 Aug",
  "09 Aug",
  "10 Aug",
  "11 Aug",
  "12 Aug",
  
];

const data = {
  labels: labels,
  datasets: [
    {
     
      lineTension: 0.5,
      backgroundColor: "#3354F4",
      data: [60, 75, 60, 78, 91, 58, 75, 40, 20, 50, 78, ,],
    },
  ],
};

const LineChart = () => {
  return (
    <div className="chart-line">
      <div className="chart-line-header">
        <h4>Attendance Comparison Chart</h4>
        <div className="chart-date-container">
          <div className="chart-date">
            <div className="dot"></div>
            <span>Daily</span>
          </div>
          <div className="chart-date">
            <div className="dots"></div>
            <span>Monthly</span>
          </div>
          <div className="chart-date">
            <div className="dots"></div>
            <span>Yearly</span>
          </div>
          <div className="fa-menu">
            <FaListUl />
          </div>
        </div>
      </div>
      <Line data={data} />
    </div>
  );
};

export default LineChart;
