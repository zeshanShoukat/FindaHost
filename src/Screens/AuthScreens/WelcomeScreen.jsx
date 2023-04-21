import { Grid } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

// Assets--------------------
import welcomehome from "../../Assets/AuthAssets/welcomehome.png";
import findahostlogo from "../../Assets/Common/findahostlogo.svg";

// stylesheet-----------------
import classes from "./Auth.module.css";

const WelcomeScreen = () => {
  const navigate = useNavigate();
  return (
    <>
      <Grid container>
        <Grid item xs={12} sm={12} md={6} lg={8}>
          <div className={classes.welcome_left_container}>
            <img src={findahostlogo} alt="error" className={classes.logo} />
            <img src={welcomehome} alt="error" className={classes.homeimage} />
          </div>
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={4}>
          <div className={classes.welcome_right_container}>
            <div className={classes.heading_container}>
              <h2>Welcome to</h2>
              <h3>Find Host</h3>
            </div>
            <span className={classes.text}>
              List your Property And Let Hosts Bid on It for Best Offer.
            </span>
            <div className={classes.button_container}>
              <button
                className={classes.signup_button}
                onClick={() => navigate("/register")}
              >
                Sign Up
              </button>
              <button
                className={classes.login_button}
                onClick={() => navigate("/login")}
              >
                Log In
              </button>
            </div>
          </div>
        </Grid>
      </Grid>
    </>
  );
};

export default WelcomeScreen;
