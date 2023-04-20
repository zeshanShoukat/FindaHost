import React from "react";
import house3 from "../../Assets/DashboardAssets/house3.png";
import locationicon from "../../Assets/DashboardAssets/locationicon.svg";
import callicon from "../../Assets/MyBookingAssets/callicon.svg";
import messageicon from "../../Assets/MyBookingAssets/messageicon.svg";
import profile1 from "../../Assets/MyBookingAssets/profile1.png";
import classes from "./style/BookingRightComp.module.css";
const BookingRightComp = () => {
  return (
    <div className={classes.right_container}>
      <div className={classes.right_first_container}>
        <div className={classes.profile_header}>
          <img src={profile1} alt="" />
          <div className={classes.profile_text}>
            <p>Wade Warren</p>
            <span>Landlord</span>
          </div>
        </div>
        <div className={classes.commu_container}>
          <div className={classes.call_container}>
            <img src={callicon} alt="" />
          </div>
          <div className={classes.message_container}>
            <img src={messageicon} alt="" />
          </div>
        </div>
      </div>

      {/* ----------------- */}
      <div className={classes.right_second_container}>
        <h2>Booking Details</h2>
        <div className={classes.house_container}>
          <img src={house3} alt="" />
          <div className={classes.house_wrapper}>
            <div className={classes.status_container}>
              <span>Active Booking</span>
            </div>
            <h2>Yew Tree House</h2>
            <div className={classes.location_container}>
              <img src={locationicon} alt="" />
              <span>Bristol,UK</span>
            </div>
            <span>£150/Night</span>
          </div>
        </div>

        <div className={classes.sub_container}>
          <div className={classes.place_container}>
            <span>Bid Placed:&nbsp;</span>
            <p>12 Mar, 2023</p>
          </div>

          <div className={classes.place_container_2}>
            <span>Booking No:&nbsp;</span>
            <p>#2214</p>
          </div>
        </div>

        <div className={classes.check_container}>
          <div className={classes.sub_check_container}>
            <p>Jan 8, Friday</p>
            <h3>02:00 PM</h3>
            <span>Check-in</span>
          </div>

          <div className={classes.sub_check_container}>
            <p>Jan 8, Friday</p>
            <h3>02:00 PM</h3>
            <span>Checkout</span>
          </div>
        </div>

        <div className={classes.last_container}>
          <div className={classes.last_left_container}>
            <p>Total Cost</p>
          </div>
          <h2>£500.12</h2>
        </div>
      </div>
      <div className={classes.button_container}>
        <button className={classes.first_button}>Modify booking</button>
        <button className={classes.second_button}>Done</button>
      </div>
    </div>
  );
};

export default BookingRightComp;
