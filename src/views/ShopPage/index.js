import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import classNames from "classnames";

import "assets/scss/landing-page/landing-page.scss";

import MainBanner  from "views/Common/Ui/Banners/MainBanner";
import StaticBanner from 'views/Common/Ui/Banners/StaticBanner';
import Listing  from "./Listing";

import styles from "assets/jss/material-kit-react/views/landingPage.js";
const useStyles = makeStyles(styles);

function ShopPage() {
  const classes = useStyles();
  return(
    <div>
      <MainBanner
        small
        image = {require("assets/img/moorti/yogesh-pedamkar-lmeBk-i3_PI-unsplash.jpg")}
        title = "We have something of everthing"
        noButton
      />
      <div className={classNames(classes.main, classes.mainRaised)}>
        <Listing />
      </div>
      <StaticBanner
        image = {require("assets/img/moorti/yogesh-pedamkar-lmeBk-i3_PI-unsplash.jpg").default}
        buttonText = "Explore now"
        buttonRoute = "/shop/custom-products"
        title = "Build custom products."
      />
    </div>
  );
}

export default ShopPage;
