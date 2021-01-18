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
  order, NOTPENDING, images, specifications, disabledMessage
}) {
  const classes = useStyles();
  const classesJS = useStylesJS();

  const [anchorElTop, setAnchorElTop] = React.useState(null);

  if(!order.id) {
    return <>
    Loading
    </>
  }

  const failedBar = (err) => {
    console.log(err.toString())
    store.setIsLoading(false);
    AppStore.setNotification({
      color: "danger",
      title: "Submission Failed",
      body: err.toString(),
      icon: "warning",
    });
  } 

  const cancelOrderModal = (event) => {
    if(NOTPENDING) {
      setAnchorElTop(event.currentTarget);
      return;
    }

    let redirectRoute = null;
    if (NOTPENDING) {
      redirectRoute = '/orders';
    } else {
      redirectRoute = '/orders/cart';
    }

    const cancelFunction = async() => {
      await store.removeOrder(order.id).catch(failedBar);
    }

    AppStore.setModal({
      open: true,
      defaultText: <>
        <span>
          Are you sure you want to <b>cancel</b> the order.<br/>
          Click on <b>Cancel Order</b> or <b>Close</b> to cancel.
        </span>
      </>,
      buttonList: [
        { text: "Close", color: 'info' },
        {
          text: "Cancel Order",
          color: 'danger',
          onClick: cancelFunction,
          async: true,
          redirect: redirectRoute,
          triggerLoading: true,
        }
      ],
    });
  }

  const moveToOrders = () => {
    if(NOTPENDING) {
      return;
    }

    const moveFunction = async() => {
      await store.moveToOrders(order.id).catch(failedBar);
    }
    AppStore.setModal({ open : false });
    AppStore.setModal({
      open: true,
      defaultText: <>
        <span>
          Are you sure you want to <b>Order</b>.<br/>
          Click on <b>Order</b> or <b>Close</b> to cancel.
        </span>
      </>,
      buttonList: [
        { text: "Close", color: 'info' },
        {
          text: "Order",
          color: 'warning',
          onClick: moveFunction,
          async: true,
          redirect: '/orders',
          triggerLoading: true,
        }
      ],
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
              { !NOTPENDING && <>
                  <Button
                    color={"success"}
                    onClick={moveToOrders}
                  >
                    {"Order"}
                  </Button>
                  <br/>
                </>
              }
              <br/><br/>
              <Button
                color={"info"}
                href={`/shop/product/${order.id}`}
                size="sm"
              >
                Got to Product
              </Button>
              <Button
                color={NOTPENDING ? "danger" : "transparent"}
                onClick={cancelOrderModal}
                size="sm"
              >
                {NOTPENDING ? "Cancel order" : "Remove from cart"}
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
                    color="info"
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
