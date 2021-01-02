import React from "react";
// react component for creating beautiful carousel
import Carousel from "react-slick";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
// core components
import GridContainer from "components/common/Grid/GridContainer.js";
import GridItem from "components/common/Grid/GridItem.js";
import Card from "components/common/Card/Card.js";

import styles from "assets/jss/material-kit-react/views/componentsSections/carouselStyle.js";

const useStyles = makeStyles(styles);

export default function SectionCarousel(props) {
  const classes = useStyles();
  function imageUi(c) {
    return (
      <div>
        <img
          src={c.image.default}
          alt={c.title}
          className="landing-page__carausal-image"
        />
        <div className="slick-caption">
          <h4>
            {c.title}
          </h4>
        </div>
      </div>
    );
  }

  const images = props.content.map(c => imageUi(c));

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true
  };

  return (
    <div className="landing-page__carausal">
      <div className={classes.container}>
        <Card carousel>
          <Carousel {...settings}>
            {images}
          </Carousel>
        </Card>
      </div>
    </div>
  );
}
