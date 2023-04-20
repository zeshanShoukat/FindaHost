import { Grid } from "@mui/material";
import React from "react";
import addicon from "../../Assets/DashboardAssets/addicon.svg";
import DashboardFirstComp from "../../Components/Dashboard/DashboardFirstComp";
import DashboardFourthComp from "../../Components/Dashboard/DashboardFourthComp";
import DashboardSecComp from "../../Components/Dashboard/DashboardSecComp";
import DashboardThirdComp from "../../Components/Dashboard/DashboardThirdComp";
import Navbar from "../../Components/Navbar/Navbar";
import Sidebar from "../../Components/Sidebar/Sidebar";
import classes from "./Dashboard.module.css";
const DashboardScreen = () => {
  return (
    <>
      <Navbar />
      <div className={classes.main_container}>
        <Sidebar />
        <div className={classes.right_container}>
          <div className={classes.welcome_container}>
            <span>Welcome Jamie Darren</span>
            <div className={classes.button}>
              <img src={addicon} alt="error" />
              <button>Create New Listing</button>
            </div>
          </div>
          <div className={classes.right_sub_container}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={12} md={12} lg={4}>
                <DashboardFirstComp />
              </Grid>
              <Grid item xs={12} sm={12} md={12} lg={4}>
                <DashboardSecComp />
              </Grid>
              <Grid item xs={12} sm={12} md={12} lg={4}>
                <DashboardThirdComp />
              </Grid>
            </Grid>
            {/* <div> */}
              <DashboardFourthComp />
            {/* </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardScreen;
