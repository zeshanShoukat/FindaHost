import { Grid } from "@mui/material";
import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Sidebar from "../../Components/Sidebar/Sidebar";
import classes from "./screenFourteen.module.css";
import ProfileCard from "../../Components/ProfileCard/ProfileCard";
import productimg from "../../Assets/Common/productimg.svg";
import productimg1 from "../../Assets/Common/productimg1.svg";
import productimg2 from "../../Assets/Common/productimg2.svg";
import ratingstar from "../../Assets/Common/ratingStars.svg";
import client from '../../Assets/Common/client.svg'


const ScreenFourteen = () => {
    const data = [
        { id: 1, clientImage: client, name: 'Antonio reese', date: 'Apr 5 ,2023', description: 'The Apartment is so easy to travel to from the airport, very easy to find. Would recommend to anyone looking for a central base to explore the city.', ratingImage: ratingstar, image: productimg, image1: productimg1, image2: productimg2 },
        { id: 2, clientImage: client, name: 'Antonio reese', date: 'Apr 5 ,2023', description: 'The Apartment is so easy to travel to from the airport, very easy to find. Would recommend to anyone looking for a central base to explore the city.', ratingImage: ratingstar, image: productimg1, image1: productimg1, image2: productimg2 },
        { id: 3, clientImage: client, name: 'Antonio reese', date: 'Apr 5 ,2023', description: 'The Apartment is so easy to travel to from the airport, very easy to find. Would recommend to anyone looking for a central base to explore the city.', ratingImage: ratingstar, image: productimg2, image1: productimg1, image2: productimg2 },
    ];

    return (
        <>
            <Navbar />
            <div className={classes.main_container}>
                <Sidebar />
                <div className={classes.right_container}>
                    <div className={classes.welcome_container}>
                        <span>Host Profile</span>
                    </div>
                    <div className={classes.right_sub_container}>

                        <Grid container spacing={1}>
                            <Grid item xs={12} sm={12} md={6} lg={4}>
                                <ProfileCard />
                            </Grid>
                            <Grid item xs={12} sm={12} md={6} lg={8}>
                                <div className={classes.rightContent}>
                                    <div className={classes.description}>
                                        <h4 className={classes.descriptionTitle}>Description</h4>
                                    </div>
                                    <div className={classes.descriptionDetail}>
                                        <p>With its clean, angular architecture and indoor-outdoor feel, Latimer Grand Oaks is West Coast mid-century modernism at its bestInside, the home's
                                            minimal bones have been boosted by modern touches, from the contemporary furnishings - like the curved sofa in the living room - to bold artwork and
                                            vibrant rugs and wallpapers, while strategically placed skylights create natural spotlights from above.</p>
                                    </div>

                                    <div className={classes.rating_reviews}>

                                        <div className={classes.header}>
                                            <h4>Rating & Reviews</h4>

                                            <select name="" id="">
                                                <option value="Landlord">Landlord</option>
                                                <option value="1"></option>
                                                <option value="2"></option>

                                            </select>
                                        </div>
                                        <div className={classes.ratingDetailWrspper}>
                                            {data.map(item => (
                                                <div key={item.id}>
                                                    <Grid container spacing={1} className={classes.ratingdetailwrapper}>
                                                        <Grid item xs={12} sm={12} md={12} lg={4}>

                                                            <div className={classes.clientbox}>
                                                                <div className={classes.clientimg}>
                                                                    <img src={item.clientImage} alt="" srcset="" />
                                                                </div>
                                                                <div className={classes.clientDetail}>
                                                                    <h3>{item.name}</h3>
                                                                    <img src={item.ratingImage} alt="" srcset="" />
                                                                    <p>{item.date}</p>
                                                                </div>
                                                            </div>


                                                        </Grid>

                                                        <Grid item xs={12} sm={12} md={12} lg={8}>
                                                            <p className={classes.description}>{item.description}</p>
                                                            <div className={classes.descriptionImages}>
                                                            <img src={item.image} alt={item.name} />
                                                            <img src={item.image1} alt={item.name} />
                                                            <img src={item.image2} alt={item.name} />
                                                            </div>

                                                        </Grid>
                                                    </Grid >




                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </Grid>
                        </Grid>



                    </div>
                </div>

            </div>
        </>
    )
}

export default ScreenFourteen;