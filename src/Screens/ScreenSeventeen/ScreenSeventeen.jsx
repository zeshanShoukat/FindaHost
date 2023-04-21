import { Grid } from "@mui/material";
import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Sidebar from "../../Components/Sidebar/Sidebar";
import classes from "./screenSeventeen.module.css";
import ProfileCard from "../../Components/ProfileCard/ProfileCard";
import productimg from "../../Assets/Common/productimg.svg";
import productimg1 from "../../Assets/Common/productimg1.svg";
import productimg2 from "../../Assets/Common/productimg2.svg";
import ratingstar from "../../Assets/Common/ratingStars.svg";
import host1 from '../../Assets/Common/host1.svg'
import host2 from '../../Assets/Common/host2.svg'
import host3 from '../../Assets/Common/host3.svg'
import host4 from '../../Assets/Common/host4.svg'
import host5 from '../../Assets/Common/host5.png'
import host6 from '../../Assets/Common/host6.svg'



const ScreenSeventeen = () => {
    const data = [
        { id: 1, hotelImage: host1, name: 'River Valley House', price: '150/Month', location: 'Bristol,UK', peopleImg: '', bathImg: '', bedImg: '', people: 'People', bedroom: 'bedroom', Bathroom: 'Bathroom', Delete: 'Delete', Accept: 'Accept' },
        { id: 2, hotelImage: host2, name: ' Yew Tree House', price: '150/Month', location: 'Bristol,UK', peopleImg: '', bathImg: '', bedImg: '', people: 'People', bedroom: 'bedroom', Bathroom: 'Bathroom', Delete: 'Delete', Accept: 'Accept' },
        { id: 3, hotelImage: host3, name: 'Limestone Grange', price: '150/Month', location: 'Bristol,UK', peopleImg: '', bathImg: '', bedImg: '', people: 'People', bedroom: 'bedroom', Bathroom: 'Bathroom', Delete: 'Delete', Accept: 'Accept' },
        { id: 4, hotelImage: host4, name: 'Ebrington Manor', price: '150/Month', location: 'Bristol,UK', peopleImg: '', bathImg: '', bedImg: '', people: 'People', bedroom: 'bedroom', Bathroom: 'Bathroom', Delete: 'Delete', Accept: 'Accept' },
        { id: 5, hotelImage: host5, name: 'Graha Turnyo Mension', price: '150/Month', location: 'Bristol,UK', peopleImg: '', bathImg: '', bedImg: '', people: 'People', bedroom: 'bedroom', Bathroom: 'Bathroom', Delete: 'Delete', Accept: 'Accept' },
        { id: 6, hotelImage: host6, name: 'River Valley House', price: '150/Month', location: 'Bristol,UK', peopleImg: '', bathImg: '', bedImg: '', people: 'People', bedroom: 'bedroom', Bathroom: 'Bathroom', Delete: 'Delete', Accept: 'Accept' },
    ];

    return (
        <>
            <Navbar />
            <div className={classes.main_container}>
                <Sidebar />
                <div className={classes.right_container}>
                    <div className={classes.welcome_container}>
                        <span>New Requests</span>
                        <div className={classes.header}>
                            <select name="" id="">
                                <option value="Landlord">All    </option>
                                <option value="1">1</option>
                                <option value="2">2</option>

                            </select>
                        </div>
                    </div>
                    <div className={classes.right_sub_container}>

                        <Grid container spacing={1}>
                            <Grid item xs={12} sm={12} md={6} lg={8}>
                                <div className={classes.HostcardsWrapper}>
                                    {data.map(item => (
                                       
                                            <Grid container item xs={12} sm={12} md={6} lg={4} className={classes.ratingdetailwrapper}>
                                                <Card className={classes.profileCard}>
                                                    <CardMedia
                                                        sx={{ height: 140 }}
                                                        image={item.hotelImage}
                                                        title="green iguana"
                                                    />
                                                    <CardContent>
                                                        <div className={classes.ProfileImg}>
                                                            {/* <img src={profileimg} alt="" srcset="" /> */}
                                                        </div>
                                                        <div className={classes.userName}>
                                                            <h4>{item.title}</h4>
                                                        </div>
                                                        <div className={classes.rating}>
                                                            {/* <p> <span> <img src={star} alt="" srcset="" /> 4.5 rating</span></p> */}
                                                        </div>
                                                        <div className={classes.propertyhosted}>
                                                            <p> <span>10 Property Hosted</span></p>
                                                        </div>
                                                        <div className={classes.contentDetails}>
                                                            <p> <span>It has survived not only five centuries, but also the leap into electronic typesetting.</span></p>
                                                        </div>
                                                        <div className={classes.icons}>
                                                            {/* <img src={phoneIcon} alt="" />
                                                            <img src={mailIcon} alt="" />
                                                            <img src={messageIcon} alt="" /> */}

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
                                                        {/* <img src={google} alt="" />
                                                        <img src={linkedin} alt="" />
                                                        <img src={fb} alt="" /> */}

                                                    </div>
                                                </Card>
                                            </Grid >

                                    ))}
                                </div>
                            </Grid>
                            <Grid item xs={12} sm={12} md={6} lg={4}>
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

export default ScreenSeventeen;