import { Grid } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

// Assets---------------
import apple from "../../Assets/AuthAssets/apple.svg";
import eyeclose from "../../Assets/AuthAssets/eyeclose.svg";
import eyeopen from "../../Assets/AuthAssets/eyeopen.svg";
import facebook from "../../Assets/AuthAssets/facebook.svg";
import google from "../../Assets/AuthAssets/google.svg";
import googleoutline from "../../Assets/AuthAssets/googleoutline.svg";
import loginellipse from "../../Assets/AuthAssets/loginellipse.png";
import twitter from "../../Assets/AuthAssets/twitter.svg";

// stylesheet--------------
import classes from "./Auth.module.css";

const LoginScreen = () => {
  const [isShow, setIsShow] = useState(false);
  const navigate = useNavigate();
  return (
    <>
      <Grid container>
        <Grid item xs={12} sm={12} md={12} lg={6}>
          <div className={classes.left_container}>
            <img src={loginellipse} alt="error" />
            <div className={classes.left_wrapper}>
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
              <span className={classes.login_with_text}>
                Login with social media link
              </span>

              <div className={classes.links_container}>
                <div className={classes.link_wrapper}>
                  <img src={google} alt="error" />
                </div>
                <div className={classes.link_wrapper}>
                  <img src={facebook} alt="error" />
                </div>

                <div className={classes.link_wrapper}>
                  <img src={twitter} alt="error" />
                </div>
              </div>
            </div>
          </div>
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={6}>
          <div className={classes.right_container}>
            <div className={classes.right_wrapper}>
              <div className={classes.right_sub_container}>
                <h2 className={classes.logintext}>Log in</h2>
                <span className={classes.fillinfo_text}>
                  Please fill your information below
                </span>

                <div className={classes.field_container}>
                  <span className={classes.field_text}>Email</span>
                  <input
                    type="text"
                    placeholder="Enter you Email"
                    className={classes.input_field}
                  />
                  <span className={classes.field_text_password}>Password</span>
                  <input
                    type={isShow ? "text" : "password"}
                    placeholder="Enter your Password"
                    className={classes.input_field}
                  />
                  <img
                    src={isShow ? eyeopen : eyeclose}
                    alt="error"
                    onClick={() => setIsShow(!isShow)}
                  />
                </div>

                <span className={classes.forgot_text}>Forgot Password?</span>
                <button className={classes.login_button_2}   onClick={() => navigate("/dashboard")}>Log in</button>
                <span className={classes.orlogin_text}>or Login with</span>
                <div className={classes.login_links_container}>
                  <div className={classes.login_links_wrapper}>
                    <img src={googleoutline} alt="error" />
                  </div>
                  <div className={classes.login_links_wrapper}>
                    <img src={apple} alt="error" />
                  </div>
                </div>

                <div className={classes.dontaccount_container}>
                  <span className={classes.dontaccount_text}>
                    Don't have an account yet?
                  </span>
                  <span
                    className={classes.register_text}
                    onClick={() => navigate("/register")}
                  >
                    Register
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

export default LoginScreen;
