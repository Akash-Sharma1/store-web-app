import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";

import GridContainer from "components/common/Grid/GridContainer.js";
import GridItem from "components/common/Grid/GridItem.js";
import Button from "components/common/CustomButtons/Button.js";
import Popover from "@material-ui/core/Popover";
import Modals from './Modals';

import "assets/scss/shop/shop.scss";
import styles from "assets/jss/material-kit-react/views/componentsSections/navbarsStyle.js";
import stylesJS from "assets/jss/material-kit-react/views/componentsSections/javascriptStyles.js";
const useStyles = makeStyles(styles);
const useStylesJS = makeStyles(stylesJS);

function DetailsLayout({
  productId, ELIGIBLE, images, specifications, disabledMessage
}) {
  const classes = useStyles();
  const classesJS = useStylesJS();

  const [cartModalOpen, setCartModalOpen] = useState(false);
  const [orderModalOpen, setOrderModalOpen] = useState(false);
  const [anchorElTop, setAnchorElTop] = React.useState(null);

  const openCartModal = (event) => {
    if(!ELIGIBLE) {
      setAnchorElTop(event.currentTarget);
      return;
    }
    setCartModalOpen(true);
  }

  const openOrderModal = (event) => {
    if(!ELIGIBLE) {
      setAnchorElTop(event.currentTarget);
      return;
    }
    setOrderModalOpen(true);
  }

  return(
    <div>
      <Modals
        productId={productId}
        cartModalOpen={cartModalOpen}
        orderModalOpen={orderModalOpen}
        setCartModalOpen={setCartModalOpen}
        setOrderModalOpen={setOrderModalOpen}
      />
      <GridContainer className="listing">
        <GridItem xs={12} sm={6} md={6}>
          {images}
        </GridItem>
        <GridItem xs={12} sm={6} md={6}>
          {specifications}
          <GridContainer>
            <GridItem xs={12} sm={12} md={12}>
              <br />
              <Popover
                classes={{
                  paper: classesJS.popover
                }}
                open={Boolean(anchorElTop)}
                anchorEl={anchorElTop}
                onClose={() => setAnchorElTop(null)}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "center"
                }}
                transformOrigin={{
                  vertical: "bottom",
                  horizontal: "center"
                }}
              >
                <h3 className={classesJS.popoverHeader}>{disabledMessage.title}</h3>
                <div className={classesJS.popoverBody}>
                  {disabledMessage.text}
                </div>
              </Popover>

              <Button
                color={ELIGIBLE ? "info" : "transparent"}
                onClick={openCartModal}
              >
                Add to cart
              </Button>
              {'  '}
              <Button
                color={ELIGIBLE ? "warning" : "transparent"}
                onClick={openOrderModal}
              >
                Order now
              </Button>
            </GridItem>

            <GridItem xs={12} sm={12} md={12}>
              <br/>
              <h6>
                <small>
                  Want to know more?
                  <a
                    style={{
                      width:"fit-content",
                      textTransform:"capitalize"
                    }}
                    href="/contact-us"
                    className={classes.navLink + " " + classes.navLinkActive}
                    color="transparent"
                  >
                    contact us
                  </a>
                  </small>
              </h6>
            </GridItem>

          </GridContainer>
        </GridItem>
      </GridContainer>
    </div>
  );
}

export default DetailsLayout;
