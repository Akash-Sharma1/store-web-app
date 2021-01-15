import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import "assets/scss/landing-page/landing-page.scss"

import Button from "components/common/CustomButtons/Button.js";

import styles from "assets/jss/material-kit-react/views/landingPage.js";
const useStyles = makeStyles(styles);

export default function StaticBanner(props) {
  const classes = useStyles();
  return (
    <div
      className="landing-page__non-parrallal-banner"
      style={{
        backgroundImage: (
          "url(" +
          props.image
          + ")"
        )
        ,
      }}
    >
      <div className="landing-page__banner-overlay">
        <div className={classes.container}>
          <div className="landing-page__container">
            <div className="landing-page__item">
              <h1 className={classes.title}>{props.title}</h1>
              <br />
              <Button
                color="danger"
                href={props.buttonRoute}
                rel="noopener noreferrer"
              >
                <i className="fas fa-play" />
                {props.buttonText}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

