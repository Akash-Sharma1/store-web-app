import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import "assets/scss/landing-page/landing-page.scss"

import Button from "components/common/CustomButtons/Button.js";
import Parallax from "components/common/Parallax/Parallax.js";

import styles from "assets/jss/material-kit-react/views/landingPage.js";
const useStyles = makeStyles(styles);

export default function MainBanner(props) {
  const classes = useStyles();
  return (
    <Parallax
      small={props.small}
      filter
      image={props.image}
      id="home-banner"
    >
      <div className={classes.container}>
        <div className="landing-page__container">
          <div className="landing-page__item">
            <h1 className={classes.title}>{props.title}</h1>
            <br />
            {!props.noButton &&
              <Button
                color="danger"
                size="lg"
                href={props.buttonRoute}
                rel="noopener noreferrer"
              >
                <i className="fas fa-play" />
                {props.buttonText}
              </Button>

            }
          </div>
        </div>
      </div>
  </Parallax>
  );
}
