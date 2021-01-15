import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import GridContainer from "components/common/Grid/GridContainer.js";
import GridItem from "components/common/Grid/GridItem.js";
import Listing from "./Listing"
import "assets/scss/shop/shop.scss";

import styles from "assets/jss/material-kit-react/views/componentsSections/pillsStyle.js";
const useStyles = makeStyles(styles);

function Divider() {
  const classes = useStyles();

  return(
    <div className={classes.section}>
      <div className={classes.container}>
        <div className={classes.title}>
          <div className="landing-page__heading">
            Building Custom Products
          </div>
        </div>
        <div>
          <h4>
            <small>
              Can't find what your'e looking for - We can build it for you
            </small>
          </h4>
        </div>
        <GridContainer className="listing">
          <GridItem xs={"false"} sm={3} md={3}>
            <GridContainer>
              <GridItem xs={12} sm={12} md={12}>
                <div className="shop__align-c">
                  <h6 className="shop__text-c">Filters</h6>
                </div>
              </GridItem>
            </GridContainer>
          </GridItem>
          <GridItem xs={12} sm={9} md={9}>
            <Listing />
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}

export default Divider;
