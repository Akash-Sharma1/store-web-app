import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import classNames from "classnames";

import "assets/scss/landing-page/landing-page.scss";

import MainBanner  from "views/Common/Ui/Banners/MainBanner";
import StaticBanner from 'views/Common/Ui/Banners/StaticBanner';
import ListingLayout  from "./ListingLayout";

import styles from "assets/jss/material-kit-react/views/landingPage.js";
const useStyles = makeStyles(styles);

function ShopPage() {
  const classes = useStyles();
  return(
    <div>
      <MainBanner
        image = {require("assets/img/moorti/yogesh-pedamkar-lmeBk-i3_PI-unsplash.jpg")}
        buttonText = "Explore Categories"
        buttonRoute = "/categories"
        title = "We have something of everthing"
      />
      <div className={classNames(classes.main, classes.mainRaised)}>
        <ListingLayout />
      </div>
      <StaticBanner
        image = {require("assets/img/moorti/yogesh-pedamkar-lmeBk-i3_PI-unsplash.jpg").default}
        buttonText = "Explore now"
        buttonRoute = "/shop/custom-product"
        title = "Build custom products."
      />
    </div>
  );
}

export default ShopPage;
