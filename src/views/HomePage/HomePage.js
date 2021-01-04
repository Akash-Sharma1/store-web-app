import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import classNames from "classnames";

import "assets/scss/landing-page/landing-page.scss";

import HeaderFixed from "views/Common/Ui/Header/HeaderFixed.js";
import Footer from "components/common/Footer/Footer.js";
import SectionBanner  from "./SectionBanner";
import SectionTabs from "./SectionTabs";
import SectionEnquire from "./SectionEnquire";

import styles from "assets/jss/material-kit-react/views/landingPage.js";
const useStyles = makeStyles(styles);

function HomePage() {
  const classes = useStyles();
  return(
    <div>
      <HeaderFixed/>
      <SectionBanner/>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <SectionTabs />
        <SectionEnquire />
      </div>
      <Footer />
    </div>
  );
}

export default HomePage;
