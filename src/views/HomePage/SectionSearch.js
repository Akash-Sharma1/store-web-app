import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";


import styles from "assets/jss/material-kit-react/views/componentsSections/tabsStyle.js";
import SectionCarousel from "./SectionCarouselModifed";

const images = [
  {
    image: require("assets/img/moorti/pexels-artem-beliaikin-1485630-flippped.jpg"),
    description: "image 1",
  },
  {
    image: require("assets/img/moorti/pexels-artem-beliaikin-1485630.jpg"),
    description: "image 1",
  }, 
];
const useStyles = makeStyles(styles);



export default function SectionTabs() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <div className={classes.container}>
        
        
      </div>
    </div>
  );
}
