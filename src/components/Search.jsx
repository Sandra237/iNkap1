import '../css/search.css';
import {
  FaSistrix,
  FaCalendar,
  FaList,
  FaCaretDown,
} from "react-icons/fa";
const Search = () => {
  return (
    <div className="search-section">
      <div className="search-header">
        <div className="search-title">
          <h2>Attendance Overview</h2>
        </div>
        <div className="search-content">
          <div className="bottom-search">
            <FaSistrix />
            <input type="text" name="" placeholder="Quick search..." />
          </div>
          <div className="july">
            <FaCalendar />
            <p>29 July 2023</p>
          </div>
          <div className="advance-filter">
            <FaList />
            <span>Advanced Filters</span>
          </div>
        </div>
      </div>

      <div className="search-info">
        <p>ID</p>
        <p>Employee</p>
        <p>
          Role
          <span>
            <FaCaretDown />
          </span>
        </p>
        <p>
        
          <span>
            <FaCaretDown />
          </span>
        </p>
        <p>Date</p>
        <p>
          status
          <span>
            <FaCaretDown/>
          </span>
        </p>
        <p>Check-in</p>
        <p>Check-out</p>
        <p>Work hours</p>
      </div>
    </div>
  );
};

export default Search;
