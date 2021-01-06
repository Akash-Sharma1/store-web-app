import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import classNames from "classnames";

import "assets/scss/landing-page/landing-page.scss";

import MainBanner  from "./Banners/MainBanner";
import SectionTabs from "./SectionFeatured/SectionTabs";
import SectionEnquire from "./SectionEnquire";
import SectionProductDisplay from './SectionProductDisplay';

import styles from "assets/jss/material-kit-react/views/landingPage.js";
const useStyles = makeStyles(styles);

function HomePage() {
  const classes = useStyles();
  return(
    <div>
      <MainBanner/>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <SectionTabs />
        <SectionEnquire />
      </div>
      <SectionProductDisplay />
    </div>
  );
}

export default HomePage;
