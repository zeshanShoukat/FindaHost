import bookingicon from "../../Assets/DashboardAssets/bookingicon.png";
import earningicon from "../../Assets/DashboardAssets/earningicon.png";
import requesticon from "../../Assets/DashboardAssets/requesticon.png";
import classes from "./styles/styleone.module.css";
const DashboardFirstComp = () => {
  return (
    <>
      <div className={classes.main_container}>
        <div className={classes.wrapper}>
          <div className={classes.text_container}>
            <h2>30</h2>
            <span>New Bookings</span>
          </div>
          <img src={bookingicon} alt="error" />
        </div>
        <div className={classes.wrapper_reverse}>
          <div className={classes.text_container}>
            <h2>29K</h2>
            <span>Total Earning</span>
          </div>
          <img src={earningicon} alt="error" />
        </div>
        <div className={classes.wrapper_last}>
          <div className={classes.text_container}>
            <h2>24</h2>
            <span>New Requests</span>
          </div>
          <img src={requesticon} alt="error" />
        </div>
      </div>
    </>
  );
};

export default DashboardFirstComp;
