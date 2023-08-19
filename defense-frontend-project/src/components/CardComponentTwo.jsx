import "../css/card.css"
import { FaUser} from "react-icons/fa";
import {FaArrowTrendDown} from "react-icons/fa6";
import {LuTimer} from 'react-icons/lu';
import {MdOutlineBedtime} from 'react-icons/md';
import {BsCloudSun} from 'react-icons/bs';
import ComponentTwoSub from "./ComponentTwoSub";
import CardComponentOne from "./CardComponentOne";

const CardComponentTwo = () =>{ 
    return (
      <>
        <div className="components-two">
          <CardComponentOne />
          <div className="components-two-sub">
            <div className="components-two-element">
              <ComponentTwoSub
                number="452"
                icon={<FaUser />}
                status="Total Employees"
                icon2="+"
                message="2 new employees added"
              />
              <ComponentTwoSub
                number="360"
                icon={<LuTimer />}
                status="On Time"
                icon2={<FaArrowTrendDown />}
                message="-10% Less than yesterday"
              />
              <ComponentTwoSub
                number="30"
                icon={<BsCloudSun />}
                status="Absent"
                icon2={<FaArrowTrendDown />}
                message="+3% Less than yesterday"
              />
            </div>
            <div className="components-two-element">
              <ComponentTwoSub
                number="360"
                icon={<LuTimer />}
                status="On Time"
                icon2={<FaArrowTrendDown />}
                message="-10% Less than yesterday"
              />
              <ComponentTwoSub
                number="62"
                icon={<LuTimer />}
                status="Late Arrival"
                icon2={<FaArrowTrendDown />}
                message="-3% Less than yesterday"
              />
              <ComponentTwoSub
                number="6"
                icon={<LuTimer />}
                status="Early Departure"
                icon2={<MdOutlineBedtime />}
                message="-10% Less than yesterday"
              />
            </div>
          </div>
        </div>
      </>
    );
}
export default CardComponentTwo;
