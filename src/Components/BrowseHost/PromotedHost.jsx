import React from "react";
import profilesquare1 from "../../Assets/BrowseHostAssets/profilesquare1.png";
import staryellow from "../../Assets/BrowseHostAssets/staryellow.svg";
import homeline from "../../Assets/DashboardAssets/homeline.svg";
import locationicon from "../../Assets/DashboardAssets/locationicon.svg";
import classes from "./style/PromotedHost.module.css";
const PromotedHost = () => {
  return (
    <div className={classes.main_container}>
      <div className={classes.header}>
        <p>Promoted Host</p>
        <span>View All</span>
      </div>
      <div className={classes.profile_container}>
        <div className={classes.wrapper}>
          <img src={profilesquare1} alt="" />
          <div className={classes.text_container}>
            <h2>Jane Cooper</h2>
            <span>janecooper7@gmail.com</span>
            <div className={classes.location_container}>
              <img src={locationicon} alt="" />
              <p>23 St, Manhattan Cozy</p>
            </div>
          </div>
        </div>
        <div className={classes.rating}>
          <img src={staryellow} alt="" />
          <span>4.5</span>
        </div>
      </div>
      <img src={homeline} alt="" className={classes.homeline} />

      <div className={classes.profile_container}>
        <div className={classes.wrapper}>
          <img src={profilesquare1} alt="" />
          <div className={classes.text_container}>
            <h2>Jane Cooper</h2>
            <span>janecooper7@gmail.com</span>
            <div className={classes.location_container}>
              <img src={locationicon} alt="" />
              <p>23 St, Manhattan Cozy</p>
            </div>
          </div>
        </div>
        <div className={classes.rating}>
          <img src={staryellow} alt="" />
          <span>4.5</span>
        </div>
      </div>
      <img src={homeline} alt="" className={classes.homeline} />

      <div className={classes.profile_container}>
        <div className={classes.wrapper}>
          <img src={profilesquare1} alt="" />
          <div className={classes.text_container}>
            <h2>Jane Cooper</h2>
            <span>janecooper7@gmail.com</span>
            <div className={classes.location_container}>
              <img src={locationicon} alt="" />
              <p>23 St, Manhattan Cozy</p>
            </div>
          </div>
        </div>
        <div className={classes.rating}>
          <img src={staryellow} alt="" />
          <span>4.5</span>
        </div>
      </div>
      <img src={homeline} alt="" className={classes.homeline} />

      <div className={classes.profile_container}>
        <div className={classes.wrapper}>
          <img src={profilesquare1} alt="" />
          <div className={classes.text_container}>
            <h2>Jane Cooper</h2>
            <span>janecooper7@gmail.com</span>
            <div className={classes.location_container}>
              <img src={locationicon} alt="" />
              <p>23 St, Manhattan Cozy</p>
            </div>
          </div>
        </div>
        <div className={classes.rating}>
          <img src={staryellow} alt="" />
          <span>4.5</span>
        </div>
      </div>
      <img src={homeline} alt="" className={classes.homeline} />

      <div className={classes.profile_container}>
        <div className={classes.wrapper}>
          <img src={profilesquare1} alt="" />
          <div className={classes.text_container}>
            <h2>Jane Cooper</h2>
            <span>janecooper7@gmail.com</span>
            <div className={classes.location_container}>
              <img src={locationicon} alt="" />
              <p>23 St, Manhattan Cozy</p>
            </div>
          </div>
        </div>
        <div className={classes.rating}>
          <img src={staryellow} alt="" />
          <span>4.5</span>
        </div>
      </div>
      <img src={homeline} alt="" className={classes.homeline} />

      <div className={classes.profile_container}>
        <div className={classes.wrapper}>
          <img src={profilesquare1} alt="" />
          <div className={classes.text_container}>
            <h2>Jane Cooper</h2>
            <span>janecooper7@gmail.com</span>
            <div className={classes.location_container}>
              <img src={locationicon} alt="" />
              <p>23 St, Manhattan Cozy</p>
            </div>
          </div>
        </div>
        <div className={classes.rating}>
          <img src={staryellow} alt="" />
          <span>4.5</span>
        </div>
      </div>
      <img src={homeline} alt="" className={classes.homeline} />
    </div>
  );
};

export default PromotedHost;
