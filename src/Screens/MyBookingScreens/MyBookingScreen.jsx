import { Grid } from "@mui/material";
import React from "react";
import addicon from "../../Assets/DashboardAssets/addicon.svg";
import DashboardFirstComp from "../../Components/Dashboard/DashboardFirstComp";
import DashboardFourthComp from "../../Components/Dashboard/DashboardFourthComp";
import DashboardSecComp from "../../Components/Dashboard/DashboardSecComp";
import DashboardThirdComp from "../../Components/Dashboard/DashboardThirdComp";
import BookingCardComp from "../../Components/MyBooking/BookingCardComp";
import BookingRightComp from "../../Components/MyBooking/BookingRightComp";
import Navbar from "../../Components/Navbar/Navbar";
import Sidebar from "../../Components/Sidebar/Sidebar";
import classes from "./MyBooking.module.css";
const MyBookingScreen = () => {
  return (
    <>
      <Navbar />
      <div className={classes.main_container}>
        <Sidebar />
        <div className={classes.right_container}>
          <div className={classes.welcome_container}>
            <span>My Booking</span>
          </div>
          <div className={classes.right_sub_container}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={12} md={12} lg={8.4}>
                <div className={classes.left_wrapper}>
                  <Grid container spacing={1}>
                    <Grid item xs={12} sm={12} md={6} lg={4}>
                      <BookingCardComp />
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} lg={4}>
                      <BookingCardComp />
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} lg={4}>
                      <BookingCardComp />
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} lg={4}>
                      <BookingCardComp />
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} lg={4}>
                      <BookingCardComp />
                    </Grid>
                  </Grid>
                </div>
              </Grid>
              <Grid item xs={12} sm={12} md={12} lg={3.6}>
                <BookingRightComp />
              </Grid>
            </Grid>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyBookingScreen;
