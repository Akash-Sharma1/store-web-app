import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import Carousel from "react-slick";
import GridContainer from "components/common/Grid/GridContainer.js";
import GridItem from "components/common/Grid/GridItem.js";
import Card from "components/common/Card/Card.js";

import styles from "assets/jss/material-kit-react/views/componentsSections/carouselStyle.js";

const useStyles = makeStyles(styles);

export default function SectionCarousel(props) {
  const classes = useStyles();
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false
  };

  function imageUi(c) {
    return (
      <div key={c.image.default}>
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

  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <GridContainer>
          <GridItem xs={12} sm={12} md={12} className={classes.marginAuto}>
            <Card carousel>
              <Carousel {...settings}>
                {images}
              </Carousel>
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
