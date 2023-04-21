import React from "react";
import bedicon from "../../Assets/DashboardAssets/bedicon.svg";
import guesticon from "../../Assets/DashboardAssets/guesticon.svg";
import homeline from "../../Assets/DashboardAssets/homeline.svg";
import house1 from "../../Assets/DashboardAssets/house1.png";
import house2 from "../../Assets/DashboardAssets/house2.png";
import house3 from "../../Assets/DashboardAssets/house3.png";
import house4 from "../../Assets/DashboardAssets/house4.png";
import house5 from "../../Assets/DashboardAssets/house5.png";
import locationicon from "../../Assets/DashboardAssets/locationicon.svg";
import tabline from "../../Assets/DashboardAssets/tabline.svg";
import classes from "./styles/stylefour.module.css";

import { Grid } from "@mui/material";
const DashboardFourthComp = () => {
  const [isTabActive, setIsTabActive] = React.useState("Top Listing");
  const tabs = ["Top Listing", "New Requests", "Reviews"];
  const house_data = [
    {
      image: house5,
      price: "£86/Night",
      name: "Graha Turnyo Mension",
      place: "Manhattan,UK",
      bedroom: 2,
      guests: 2,
    },
    {
      image: house4,
      price: "£1,000/Night",
      name: "Yew Tree House",
      place: "Manchester,UK",
      bedroom: 1,
      guests: 3,
    },
    {
      image: house3,
      price: "£500/Night",
      name: "Limestone Grange",
      place: "Birmingham,UK",
      bedroom: 6,
      guests: 2,
    },
    {
      image: house2,
      price: "£200/Night",
      name: "Ebrington Manor",
      place: "Manhattan,UK",
      bedroom: 2,
      guests: 1,
    },
    {
      image: house1,
      price: "£150/Night",
      name: "River Valley House",
      place: "Bristol,UK",
      bedroom: 5,
      guests: 6,
    },
  ];
  return (
    <div className={classes.main_container}>
      <div className={classes.wrapper}>
        <div className={classes.tabs_container}>
          {tabs.map((e) => (
            <div className={classes.sub_tab_container}>
              <span
                onClick={() => setIsTabActive(e)}
                className={
                  e === isTabActive ? classes.tab_text_active : classes.tab_text
                }
              >
                {e}
              </span>
              {e === isTabActive && <img src={tabline} alt="error" />}
            </div>
          ))}
        </div>
        <span>View All</span>
      </div>
      <Grid container spacing={2}>
        {house_data.map((e) => (
          <Grid item xs={12} sm={12} md={6} lg={2.4}>
            <div className={classes.home_container}>
              <img src={e.image} alt="error" />
              <h2>{e.price}</h2>
              <p>{e.name}</p>
              <div className={classes.home_wrapper}>
                <img src={locationicon} alt="error" />
                <span>{e.place}</span>
              </div>
              <img src={homeline} alt="error" className={classes.line_image} />
              <div className={classes.last_container}>
                <div className={classes.sub_container}>
                  <img src={bedicon} alt="error" />
                  <span>{e.bedroom} bedrooms</span>
                </div>
                <div className={classes.sub_container}>
                  <img src={guesticon} alt="error" />
                  <span>{e.guests} Guests</span>
                </div>
              </div>
            </div>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default DashboardFourthComp;
