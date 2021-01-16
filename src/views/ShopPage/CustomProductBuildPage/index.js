import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import classNames from "classnames";

import "assets/scss/landing-page/landing-page.scss";

import MainBanner  from "views/Common/Ui/Banners/MainBanner";
import SectionTabs  from "./SectionTabs";

import styles from "assets/jss/material-kit-react/views/landingPage.js";
const useStyles = makeStyles(styles);

function CustomProductPage() {
  const classes = useStyles();
  return(
    <div>
      <MainBanner
        image = {require("assets/img/moorti/yogesh-pedamkar-lmeBk-i3_PI-unsplash.jpg")}
        noButton
        title = "Transform imagination into reality"
      />
      <div className={classNames(classes.main, classes.mainRaised)}>
        <SectionTabs />
      </div>
    </div>
  );
}

export default CustomProductPage;
