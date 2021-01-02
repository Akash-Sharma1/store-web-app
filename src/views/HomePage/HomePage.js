import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import classNames from "classnames";
import "assets/scss/landing-page/landing-page.scss"

import HeaderFixed from "views/Common/Ui/Header/HeaderFixed.js";
import Footer from "components/common/Footer/Footer.js";
import SectionBanner  from "./SectionBanner";
import SectionTabs from "./SectionTabs";

import styles from "assets/jss/material-kit-react/views/landingPage.js";
const useStyles = makeStyles(styles);

export default function LandingPage(props) {
  const classes = useStyles();
  return(
    <div>
      <HeaderFixed/>
      <SectionBanner/>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <SectionTabs />
      </div>
      <Footer />
    </div>
  );
}
