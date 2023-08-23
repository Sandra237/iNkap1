import "../css/componentTwoSub.css";
const ComponentTwoSub = ({number, icon, status,icon2,message}) => {
  return (
    <>
      <div className="sections">
        <div className="numb-icon">
          <h1>{number}</h1>
          <div className="fa-user">
            {icon}
          </div>
        </div>
        <div className="detail">
          <h2 >{status}</h2>
          <div className="message">
            <div className="signature">
              {icon2}
            </div>

            <span>{message}</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default ComponentTwoSub;
