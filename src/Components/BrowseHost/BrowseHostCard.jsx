import React from "react";
import profile1 from "../../Assets/BrowseHostAssets/profile1.png";
import starblack from "../../Assets/BrowseHostAssets/starblack.svg";
import homeline from "../../Assets/DashboardAssets/homeline.svg";
import locationicon from "../../Assets/DashboardAssets/locationicon.svg";
import classes from "./style/BrowseHostCard.module.css";
const BrowseHostCard = () => {
  return (
    <div className={classes.card_container}>
      <div className={classes.header}>
        <img src={profile1} alt="" />
        <div className={classes.rating}>
          <img src={starblack} alt="" />
          <span>4.5</span>
        </div>
      </div>
      <h2>Jane Copper</h2>
      <span>Jane Cooper7@gmail.com</span>
      <img src={homeline} alt="" />
      <div className={classes.location}>
        <img src={locationicon} alt="" />
        <span>23 St, Manhattan Cozy</span>
      </div>
    </div>
  );
};

export default BrowseHostCard;
