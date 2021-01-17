import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import classNames from "classnames";

import "assets/scss/landing-page/landing-page.scss";

import styles from "assets/jss/material-kit-react/views/landingPage.js";
import MainBanner from "views/Common/Ui/Banners/MainBanner";
const useStyles = makeStyles(styles);

export default function NotFound404() {
  const classes = useStyles();
  return (
    <>
      <MainBanner
        small
        image = {require("assets/img/moorti/yogesh-pedamkar-lmeBk-i3_PI-unsplash.jpg")}
        buttonText = "Lets go"
        buttonRoute = "/"
        title = "Visit our store"
      />
      <div className={classNames(classes.main, classes.mainRaised, "shop__align-c")}>
        <br/>
        <br/>
        <br/>
        <h1><small>404 Not Found</small></h1>
        <br/>
        <br/>
        <br/>
      </div>
    </>
  );
}
