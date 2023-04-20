import { useState } from "react";

// Active Link Icon Assets------------------
import activeline from "../../Assets/SidebarAssets/activeline.svg";
import bookingactiveicon from "../../Assets/SidebarAssets/bookingactiveicon.svg";
import browseactiveicon from "../../Assets/SidebarAssets/browseactiveicon.svg";
import dashboardactiveicon from "../../Assets/SidebarAssets/dashboardactiveicon.svg";
import listingactiveicon from "../../Assets/SidebarAssets/listingactiveicon.svg";
import marketplaceactiveicon from "../../Assets/SidebarAssets/marketplaceactiveicon.svg";
import messageactiveicon from "../../Assets/SidebarAssets/messageactiveicon.svg";
import schedualeactiveicon from "../../Assets/SidebarAssets/schedualeactiveicon.svg";

// Non Active Link Icon Assets
import bookingicon from "../../Assets/SidebarAssets/bookingicon.svg";
import browseicon from "../../Assets/SidebarAssets/browseicon.svg";
import dashboardicon from "../../Assets/SidebarAssets/dashboardicon.svg";
import listingicon from "../../Assets/SidebarAssets/listingicon.svg";
import marketplaceicon from "../../Assets/SidebarAssets/marketplaceicon.svg";
import messageicon from "../../Assets/SidebarAssets/messageicon.svg";
import schedualeicon from "../../Assets/SidebarAssets/schedualeicon.svg";
import supporticon from "../../Assets/SidebarAssets/supporticon.svg";

// stylesheet-----------
import classes from "./Sidebar.module.css";

const Sidebar = () => {
  const [isLinkActive, setIsLinkActive] = useState("Dashboard");
  const sidebar_links = [
    {
      path: "",
      link_text: "Dashboard",
      link_image: dashboardicon,
      link_active_image: dashboardactiveicon,
    },
    {
      path: "",
      link_text: "Browse host",
      link_image: browseicon,
      link_active_image: browseactiveicon,
    },
    {
      path: "",
      link_text: "My Listing",
      link_image: listingicon,
      link_active_image: listingactiveicon,
    },
    {
      path: "",
      link_text: "My booking",
      link_image: bookingicon,
      link_active_image: bookingactiveicon,
    },
    {
      path: "",
      link_text: "Schedule",
      link_image: schedualeicon,
      link_active_image: schedualeactiveicon,
    },
    {
      path: "",
      link_text: "Message",
      link_image: messageicon,
      link_active_image: messageactiveicon,
    },
    {
      path: "",
      link_text: "Market place",
      link_image: marketplaceicon,
      link_active_image: marketplaceactiveicon,
    },
  ];
  return (
    <div className={classes.sidebar_container}>
      {sidebar_links.map((e) => (
        <div
          className={
            isLinkActive === e.link_text
              ? classes.sidebar_active_wrapper
              : classes.sidebar_wrapper
          }
          onClick={() => setIsLinkActive(e.link_text)}
          key={e.link_text}
        >
          {isLinkActive === e.link_text && (
            <img src={activeline} alt="error" className={classes.activeline} />
          )}
          <img
            src={
              isLinkActive === e.link_text ? e.link_active_image : e.link_image
            }
            alt="error"
            className={classes.link_image}
          />{" "}
          <span>{e.link_text}</span>
        </div>
      ))}
      <div className={classes.support_container}>
        <div className={classes.sidebar_wrapper}>
          <img src={supporticon} alt="error" /> <span>Help & Support</span>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
