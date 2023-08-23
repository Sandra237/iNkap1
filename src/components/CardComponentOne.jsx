import "../css/card.css";
import { BsSun, BsFillPaletteFill } from "react-icons/bs";
const CardComponentOne = () => {
  return (
    <>
      <div className="card-component-one">
        <div className="header">
          <span id="sun">
            <BsSun />
          </span>
          <div className="word">
            <h1>8:02:09 AM</h1>
            <p>RealTime Insight</p>
          </div>
        </div>
        <div className="date">
          <h2>
            Today: <br />
            2nd August 2023
          </h2>
        </div>
        <div className="button">
          <button>
            <span
              type="button"
              value="Advanced Configuration"
            >
              <BsFillPaletteFill />
              Advanced Configuration
            </span>
          </button>
        </div>
      </div>
    </>
  );
};

export default CardComponentOne;
