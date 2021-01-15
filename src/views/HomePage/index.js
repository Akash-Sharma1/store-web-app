import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import classNames from "classnames";

import "assets/scss/landing-page/landing-page.scss";

import MainBanner  from "views/Common/Ui/Banners/MainBanner";
import StaticBanner from 'views/Common/Ui/Banners/StaticBanner';
import SectionTabs from "./SectionFeatured/SectionTabs";
import SectionProductDisplay from './SectionProductDisplay';

import styles from "assets/jss/material-kit-react/views/landingPage.js";
const useStyles = makeStyles(styles);

function HomePage() {
  const classes = useStyles();
  return(
    <div>
      <MainBanner
        image = {require("assets/img/moorti/yogesh-pedamkar-lmeBk-i3_PI-unsplash.jpg")}
        buttonText = "Shop now"
        buttonRoute = "/shop"
        title = "Your one marketplace for all stone products."
      />
      <div className={classNames(classes.main, classes.mainRaised)}>
        <SectionTabs />
      </div>
      <StaticBanner
        image = {require("assets/img/moorti/yogesh-pedamkar-lmeBk-i3_PI-unsplash.jpg").default}
        buttonText = "Explore now"
        buttonRoute = "/shop/custom-product"
        title = "Build custom products."
      />
      <SectionProductDisplay />
    </div>
  );
}

export default HomePage;
