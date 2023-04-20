import React from "react";
import homeline from "../../Assets/DashboardAssets/homeline.svg";
import profile1 from "../../Assets/MyBookingAssets/profile1.png";
import classes from "./style/BookingCardCom.module.css";
const BookingCardComp = () => {
  return (

    
    <div className={classes.card}>
      <div className={classes.card_header}>
        <div className={classes.card_profile}>
          <img src={profile1} alt="error" />
          <span>Raphel</span>
        </div>
        <div className={classes.status}><span>Active Booking</span></div>
      </div>


      {/* ------------- */}
      <div className={classes.check_container}>
        <div className={classes.sub_check_container}>
          <span>Check-in</span>
          <p>Jan 8, Friday</p>
          <h3>02:00 PM</h3>
        </div>

        <div className={classes.sub_check_container}>
          <span>Check-out</span>
          <p>Jan 8, Friday</p>
          <h3>02:00 PM</h3>
        </div>
      </div>



      {/* ------------- */}
      <div className={classes.last_container}>
        <div className={classes.last_left_container}>
          <span>Property: </span>
          <p>Yew Tree House</p>
        </div>
        <h2>£500.12</h2>
      </div>
    </div>
  );
};

export default BookingCardComp;
