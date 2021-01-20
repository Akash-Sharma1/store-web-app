import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { mobxify } from 'utils/hoc';

import GridContainer from "components/common/Grid/GridContainer.js";
import GridItem from "components/common/Grid/GridItem.js";
import Button from "components/common/CustomButtons/Button.js";
import Popover from "@material-ui/core/Popover";

import "assets/scss/shop/shop.scss";
import styles from "assets/jss/material-kit-react/views/componentsSections/navbarsStyle.js";
import stylesJS from "assets/jss/material-kit-react/views/componentsSections/javascriptStyles.js";
const useStyles = makeStyles(styles);
const useStylesJS = makeStyles(stylesJS);

function DetailsLayout({
  AppStore, OrderStore: store,
  productId, ELIGIBLE, images, specifications, disabledMessage
}) {
  const classes = useStyles();
  const classesJS = useStylesJS();
  const [anchorElTop, setAnchorElTop] = React.useState(null);

  if(!productId) {
    return <></>
  }

  const failedBar = (err) => {
    store.setIsLoading(false);
    AppStore.setNotification({
      color: "danger",
      title: "Submission Failed",
      body: "Something failed try again!",
      icon: "Warning",
    });
  } 

  const orderNow = (event, addTo) => {
    if(!ELIGIBLE) {
      setAnchorElTop(event.currentTarget);
      return;
    }

    const orderFunction = async() => {
      if (addTo === 'cart') {
        await store.addToCart(productId).catch(failedBar);
      } else {
        await store.addOrder(productId).catch(failedBar);
      }
    }

    let redirectRoute = null;
    let body = null;
    let btnText = null;

    if (addTo === 'cart') {
      redirectRoute = '/orders/cart';
      body = <>
        <span>
          Are you sure you want to <b>Add</b> the product to cart.<br/>
          Click on <b>Add To Cart</b> to confirm or <b>Close</b> to cancel.
        </span>
      </>;
      btnText = 'Add To Cart';
    } else {
      redirectRoute = '/orders';
      body = <>
        <span>
          Are you sure you want to <b>Order</b> the product.<br/>
          Click on <b>Order Now</b> to confirm or <b>Close</b> to cancel.
        </span>
      </>;
      btnText = 'Order Now';
    }

    const btnList = [
      { text: "Close", color: 'info' },
      {
        text: btnText,
        color: 'danger',
        onClick: orderFunction,
        async: true,
        redirect: redirectRoute,
        triggerLoading: true,
      }
    ];
    AppStore.setModal({ open: false });
    AppStore.setModal({
      open: true,
      defaultText: body,
      buttonList: btnList,
    });
  }

  return(
    <div>
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
                onClick={(e) => orderNow(e, "cart")}
              >
                Add to cart
              </Button>
              {'  '}
              <Button
                color={ELIGIBLE ? "warning" : "transparent"}
                onClick={(e) => orderNow(e, "order")}
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

export default mobxify('OrderStore', 'AppStore')(DetailsLayout);
