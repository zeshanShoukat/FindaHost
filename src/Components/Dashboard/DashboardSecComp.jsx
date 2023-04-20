import React from "react";
import arrowrighticon from "../../Assets/DashboardAssets/arrowrighticon.svg";
import profile4 from "../../Assets/DashboardAssets/profile4.png";
import profile5 from "../../Assets/DashboardAssets/profile5.png";
import profile6 from "../../Assets/DashboardAssets/profile6.png";
import profile7 from "../../Assets/DashboardAssets/profile7.png";
import classes from "./styles/styletwo.module.css";
const DashboardSecComp = () => {
  const browseHostList = [
    {
      image: profile7,
      name: "Ahmad rizaldi",
      email: "Ahmadrizaldi@gmail.com",
    },
    {
      image: profile6,
      name: "wadreen joyuk",
      email: "wadreenjoyuk12@gmail.com",
    },
    {
      image: profile5,
      name: "Ahmad rizaldi",
      email: "Ahmadrizaldi@gmail.com",
    },
    {
      image: profile4,
      name: "wadreen joyuk",
      email: "wadreenjoyuk12@gmail.com",
    },
  ];
  return (
    <div className={classes.main_container}>
      <div className={classes.head_container}>
        <h2>Browse Host</h2>
        <span>View All</span>
      </div>

      {browseHostList.map((e) => (
        <div className={classes.wrapper}>
          <div className={classes.wrapper_text}>
            <img src={e.image} alt="error" />
            <div className={classes.text_container}>
              <p>{e.name}</p>
              <span>{e.email}</span>
            </div>
          </div>
          <div className={classes.view_container}>
            <span>View</span>
            <div className={classes.view_wrapper}>
              <img src={arrowrighticon} alt="error" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DashboardSecComp;
