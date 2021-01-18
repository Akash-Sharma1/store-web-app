import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import { mobxify } from 'utils/hoc';
import Header from "components/common/Header/Header.js";

import Button from "components/common/CustomButtons/Button.js";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";

import AccountCircle from "@material-ui/icons/AccountCircle";
import Explore from "@material-ui/icons/Explore";
import styles from "assets/jss/material-kit-react/views/componentsSections/navbarsStyle.js";

import Notify from "views/Common/Ui/Notify"

const useStyles = makeStyles(styles);

function HeaderFixed({ AppStore: store}) {
  const classes = useStyles();

  return (
    <>
      {
        store.notification.open ?
          <Notify />
          :
          <Header
          color={store.headerColor}
          setColor={store.setHeaderColor}
          brand="Mahendra Moorti Kalakar"
          rightLinks={
            <List className={classes.list}>
              <ListItem className={classes.listItem}>
                <Button
                  href="/"
                  className={classes.navLink + " " + classes.navLinkActive}
                  color="transparent"
                >
                  <Explore className={classes.icons} /> Home
                </Button>
              </ListItem>
              <ListItem className={classes.listItem}>
                <Button
                  href="/profile"
                  className={classes.navLink}
                  color="transparent"
                >
                  <AccountCircle className={classes.icons} /> Profile
                </Button>
              </ListItem>
              <ListItem className={classes.listItem}>
                <Button
                  href="/shop"
                  className={classes.navLink}
                  color="transparent"
                >
                  Shop
                </Button>
              </ListItem>
              <ListItem className={classes.listItem}>
                <Button
                  href="/shop/custom-products"
                  className={classes.navLink}
                  color="transparent"
                >
                  Build
                </Button>
              </ListItem>
              <ListItem className={classes.listItem}>
                <Button
                  href="/orders"
                  className={classes.navLink}
                  color="transparent"
                >
                  Orders
                </Button>
              </ListItem>
              <ListItem className={classes.listItem}>
                <Button
                  href="/orders/cart"
                  className={classes.navLink}
                  color="transparent"
                >
                  Cart
                </Button>
              </ListItem>
              <ListItem className={classes.listItem}>
                <Button
                  href="/shop"
                  className={classes.navLink}
                  color="transparent"
                >
                  Contact us
                </Button>
              </ListItem>
            </List>
          }
          fixed
          changeColorOnScroll={{
            height: 50,
            color: "white"
          }}
        />
    }
  </>
  );
}

export default mobxify('AppStore')(HeaderFixed);
