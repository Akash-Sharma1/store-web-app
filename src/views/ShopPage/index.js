import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import classNames from "classnames";

import "assets/scss/landing-page/landing-page.scss";

import MainBanner  from "./Banners/MainBanner";
import Listing  from "./Listing";

import styles from "assets/jss/material-kit-react/views/landingPage.js";
const useStyles = makeStyles(styles);

function ShopPage() {
  const classes = useStyles();
  return(
    <div>
      <MainBanner />
      <div className={classNames(classes.main, classes.mainRaised)}>
        <Listing />
      </div>
    </div>
  );
}

export default ShopPage;
