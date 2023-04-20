// Assets-----------
import findahostlogo from "../../Assets/Common/findahostlogo.svg";
import arrowdown from "../../Assets/NavbarAssets/arrowdown.svg";
import bellicon from "../../Assets/NavbarAssets/bellicon.svg";
import bellnotification from "../../Assets/NavbarAssets/bellnotification.svg";
import navbarprofile from "../../Assets/NavbarAssets/navbarprofile.svg";
import searchicon from "../../Assets/NavbarAssets/searchicon.svg";
import signouticon from "../../Assets/NavbarAssets/signouticon.svg";
// stylesheet------------
import classes from "./Navbar.module.css";

const Navbar = () => {
  return (
    <div className={classes.navbar_container}>
      <div className={classes.first_container}>
        <img src={findahostlogo} alt="error" />
        <div className={classes.search_container}>
          <img src={searchicon} alt="error" />
          <input type="text" placeholder="Search here..." />
        </div>
      </div>
      <div className={classes.second_container}>
        <div className={classes.bell_container}>
          <img src={bellicon} alt="error" className={classes.bell_image_one} />
          <img
            src={bellnotification}
            alt="error"
            className={classes.bell_image_two}
          />
        </div>
        <div className={classes.profile_container}>
          <img
            src={navbarprofile}
            alt="error"
            className={classes.profile_image_one}
          />
          <img
            src={arrowdown}
            alt="error"
            className={classes.profile_image_two}
          />
        </div>
        <div className={classes.logout_container}>
          <img src={signouticon} alt="error" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
