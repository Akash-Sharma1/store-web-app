import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import "assets/scss/landing-page/landing-page.scss"

import Button from "components/common/CustomButtons/Button.js";

import styles from "assets/jss/material-kit-react/views/landingPage.js";
const useStyles = makeStyles(styles);

export default function ParallaxBanner(props) {
  const classes = useStyles();
  return (
    <div
      className="landing-page__non-parrallal-banner"
      style={{
        backgroundImage: (
          "url(" +
          require("assets/img/moorti/yogesh-pedamkar-lmeBk-i3_PI-unsplash.jpg").default
          + ")"
        )
        ,
      }}
    >
      <div className="landing-page__banner-overlay">
        <div className={classes.container}>
          <div className="landing-page__container">
            <div className="landing-page__item">
              <h1 className={classes.title}>Explore our Product categories</h1>
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
      </div>
    </div>
  );
}

