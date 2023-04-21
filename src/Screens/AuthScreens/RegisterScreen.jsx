import { Grid } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

// Assets---------------
import loginellipse from "../../Assets/AuthAssets/loginellipse.png";

// stylesheet--------------
import classes from "./Auth.module.css";

const RegisterScreen = () => {
  const navigate = useNavigate();
  return (
    <>
      <Grid container>
        <Grid item xs={12} sm={12} md={12} lg={6}>
          <div className={classes.left_container}>
            <img src={loginellipse} alt="error" />
            <div className={classes.left_wrapper_2}>
              <span className={classes.findahosttext}>FindaHost</span>
              <div className={classes.login_heading_container}>
                <h2>Welcome to</h2>
                <h3>Find Host</h3>
              </div>
              <span className={classes.login_text}>
                Lorem Ipsum is simply dummy text of the printing and <br />
                typesetting industry. Lorem Ipsum has been the industry's <br />
                standard dummy text ever since the 1500s
              </span>
            </div>
          </div>
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={6}>
          <div className={classes.right_container}>
            <div className={classes.right_wrapper}>
              <div className={classes.right_sub_container}>
                <h2 className={classes.logintext}>Register</h2>
                <span className={classes.fillinfo_text}>
                  Please fill your information below
                </span>

                <div className={classes.field_container}>
                  <span className={classes.field_text}>Name</span>
                  <input
                    type="text"
                    placeholder="Enter you Name"
                    className={classes.input_field}
                  />
                  <span className={classes.field_text_password}>User Name</span>
                  <input
                    type="text"
                    placeholder="Enter you User name"
                    className={classes.input_field}
                  />
                  <span className={classes.field_text_password}>Email</span>
                  <input
                    type="email"
                    placeholder="Enter your Email"
                    className={classes.input_field}
                  />
                </div>
                <button className={classes.register_button_2}>Register</button>
                <div className={classes.dontaccount_container_2}>
                  <span className={classes.dontaccount_text}>
                    Already have an account?
                  </span>
                  <span
                    className={classes.register_text}
                    onClick={() => navigate("/login")}
                  >
                    Login
                  </span>
                </div>
              </div>
            </div>
          </div>
        </Grid>
      </Grid>
    </>
  );
};

export default RegisterScreen;
