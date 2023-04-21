import { Grid } from "@mui/material";
import React from "react";
import ad from "../../Assets/BrowseHostAssets/ad.png";
import arrowdownicon from "../../Assets/BrowseHostAssets/arrowdownicon.svg";
import BrowseHostCard from "../../Components/BrowseHost/BrowseHostCard";
import PromotedHost from "../../Components/BrowseHost/PromotedHost";
import Navbar from "../../Components/Navbar/Navbar";
import Sidebar from "../../Components/Sidebar/Sidebar";
import classes from "./BrowseHost.module.css";
const BrowseHostScreen = () => {
  return (
    <>
      <Navbar />
      <div className={classes.main_container}>
        <Sidebar />
        <div className={classes.right_container}>
          <div className={classes.welcome_container}>
            <span>My Booking</span>
            <div className={classes.dropdown_container}>
              <div className={classes.dropdown_wrapper}>
                <span>Sort by</span>
                <img src={arrowdownicon} alt="" />
              </div>
              <div className={classes.dropdown_wrapper}>
                <span>All Listing</span>
                <img src={arrowdownicon} alt="" />
              </div>
            </div>
          </div>

          <div className={classes.right_sub_container}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={12} md={12} lg={8}>
                <div className={classes.left_wrapper_text}>
                  <p>Top Rated Host</p>
                  <span>View All</span>
                </div>
                <div className={classes.left_wrapper}>
                  <Grid container spacing={1.8}>
                    <Grid item xs={12} sm={12} md={6} lg={3}>
                      <BrowseHostCard />
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} lg={3}>
                      <BrowseHostCard />
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} lg={3}>
                      <BrowseHostCard />
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} lg={3}>
                      <BrowseHostCard />
                    </Grid>
                  </Grid>
                </div>
                <div className={classes.left_wrapper_text_2}>
                  <p>Host Near Me</p>
                  <span>View All</span>
                </div>
                <div className={classes.left_wrapper}>
                  <Grid container spacing={1.8}>
                    <Grid item xs={12} sm={12} md={6} lg={3}>
                      <BrowseHostCard />
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} lg={3}>
                      <BrowseHostCard />
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} lg={3}>
                      <BrowseHostCard />
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} lg={3}>
                      <BrowseHostCard />
                    </Grid>
                  </Grid>
                </div>
              </Grid>
              <Grid item xs={12} sm={12} md={12} lg={4}>
                <PromotedHost />
                <div className={classes.adimage_container}>
                  <img src={ad} alt="" />
                </div>
              </Grid>
            </Grid>
          </div>
        </div>
      </div>
    </>
  );
};

export default BrowseHostScreen;
