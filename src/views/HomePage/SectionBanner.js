import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import "assets/scss/landing-page/landing-page.scss"

import Button from "components/common/CustomButtons/Button.js";
import Parallax from "components/common/Parallax/Parallax.js";

import styles from "assets/jss/material-kit-react/views/landingPage.js";
const useStyles = makeStyles(styles);

export default function LandingPage(props) {
  const classes = useStyles();
  return (
    <Parallax
      filter
      image={require("assets/img/moorti/yogesh-pedamkar-lmeBk-i3_PI-unsplash.jpg")}
      id="home-banner"
    >
        <div className={classes.container}>
          <div className="landing-page__container">
            <div className="landing-page__item">
              <h1 className={classes.title}>Your one marketplace for all stone products.</h1>
              <br />
              <Button
                color="danger"
                size="lg"
                href="#home-banner"
                // target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fas fa-play" />
                Shop Now
              </Button>
            </div>
          </div>
        </div>
    </Parallax>
  );
}

