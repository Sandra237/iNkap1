import Chart from "chart.js/auto";
import { Bar } from "react-chartjs-2";
import '../css/card.css';
import { FaListUl } from "react-icons/fa";

const BarChart = () => {
  const labels = ["Sales", "IT", "Marketing", "Legal", "API"];
  const data = {
    labels: labels,
    datasets: [
      {
        label: [""],
        backgroundColor: "#E6EEF5",
        borderColor: "rgb(255, 99, 132)",
        data: [ 40, 60, 86, 60, 20],
      },
    ],
  };
  return (
    <div className="bar-chart">
        <div className="bar-chart-header">
          <h3>Weekly Attendance</h3>
          <span><FaListUl /></span>
        </div>
        <Bar data={data} />
   
    </div>
  );
};

export default BarChart;
