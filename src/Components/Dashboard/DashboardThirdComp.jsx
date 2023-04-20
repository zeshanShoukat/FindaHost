import React from "react";
import profile1 from "../../Assets/DashboardAssets/profile1.png";
import profile2 from "../../Assets/DashboardAssets/profile2.png";
import profile3 from "../../Assets/DashboardAssets/profile3.png";
import profile4 from "../../Assets/DashboardAssets/profile4.png";
import classes from "./styles/stylethree.module.css";
const DashboardThirdComp = () => {
  const browseHostList = [
    {
      image: profile4,
      name: "Robert Fox",
      message: "Hi Jamie, i think i can buy one",
      notification: 3,
    },
    {
      image: profile3,
      name: "Fazariel Pratma",
      message: "heyy Jamie,How about £300 as",
      notification: 1,
    },
    {
      image: profile2,
      name: "Ahmad rizaldi",
      message: "Tomorrow i will talk to you for this",
      notification: 0,
    },
    {
      image: profile1,
      name: "Ahmad rizaldi",
      message: "Can you just send the all info",
      notification: 0,
    },
  ];
  return (
    <div className={classes.main_container}>
      <div className={classes.head_container}>
        <h2>Messages</h2>
        <span>View All</span>
      </div>

      {browseHostList.map((e) => (
        <div className={classes.wrapper}>
          <div className={classes.wrapper_text}>
            <img src={e.image} alt="error" />
            <div className={classes.text_container_2}>
              <p>{e.name}</p>
              <span
                className={
                  e.notification !== 0 ? classes.message_pop : classes.message
                }
              >
                {e.message.slice(0, 25).concat("...")}
              </span>
            </div>
          </div>
          {e.notification !== 0 && (
            <div className={classes.view_container_2}>
              <span>{e.notification}</span>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default DashboardThirdComp;
