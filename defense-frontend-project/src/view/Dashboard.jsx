import Card from "../components/Card";
import Nav from "../components/Nav";
import SideBar from "../components/SideBar";
import "../css/dashboard.css";
const Dashboard = () => {
  return (
    <>
      <div className="main">
        <div className="main-left">
          <SideBar />
        </div>
        <div className="main-right" style={{overflowY: 'none'}}>
          <Nav />
          <Card />
        </div>
      </div>
    </>
  );
};
export default Dashboard;
