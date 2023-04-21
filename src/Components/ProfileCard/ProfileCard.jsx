import React from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import profilebg from '../../Assets/AuthAssets/profilecardbg.svg'
import profileimg from '../../Assets/AuthAssets/profileimg.svg'
import classes from "./profileCard.module.css"
import phoneIcon from "../../Assets/Common/phoneIcon.svg"
import mailIcon from "../../Assets/Common/mailIcon.svg"
import messageIcon from '../../Assets/Common/messageIcon.svg'
import google from "../../Assets/Common/google.png"
import linkedin from "../../Assets/Common/linkedin.png"
import fb from '../../Assets/Common/fb.png'
import star from '../../Assets/Common/star.svg'


const ProfileCard = () => {

    return (
        <>
        

            <Card className={classes.profileCard}>
                <CardMedia
                    sx={{ height: 100 }}
                    image={profilebg}
                    title="green iguana"
                />
                <CardContent>
                   <div className={classes.ProfileImg}>
                    <img src={profileimg} alt="" srcset="" />
                   </div>
                  <div className={classes.userName}>
                    <h4>Wade Warren</h4>
                  </div>
                  <div className={classes.rating}>
                    <p> <span> <img src={star} alt="" srcset="" /> 4.5 rating</span></p>
                  </div>
                  <div className={classes.propertyhosted}>
                    <p> <span>10 Property Hosted</span></p>
                  </div>
                  <div className={classes.contentDetails}>
                    <p> <span>It has survived not only five centuries, but also the leap into electronic typesetting.</span></p>
                  </div>
                  <div className={classes.icons}>
                   <img src={phoneIcon} alt="" />
                   <img src={mailIcon} alt="" />
                   <img src={messageIcon} alt="" />

                  </div>
                  <div className={classes.moreDetail}>
                   <div className={classes.location}>
                    <p className={classes.name}>Location</p>
                     <p className={classes.city}>Manhattan Cozy</p>
                   </div>
                   <div className={classes.location}>
                   <p className={classes.name}>Experience</p>
                     <p className={classes.city}>6Yrs</p>
                    </div>

                   

                  </div>
                </CardContent>
                <div className={classes.cardBottomIcons}>
                        <img src={google} alt="" />
                        <img src={linkedin} alt="" />
                        <img src={fb} alt="" />

                    </div>
            </Card>
          
        </>
    )
}

export default ProfileCard;