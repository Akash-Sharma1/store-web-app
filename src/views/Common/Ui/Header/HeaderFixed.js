import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import Header from "components/common/Header/Header.js";

import Button from "components/common/CustomButtons/Button.js";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";

import Icon from "@material-ui/core/Icon";
import AccountCircle from "@material-ui/icons/AccountCircle";
import Explore from "@material-ui/icons/Explore";
import styles from "assets/jss/material-kit-react/views/componentsSections/navbarsStyle.js";

const useStyles = makeStyles(styles);

export default function HeaderFixed(props) {
  const classes = useStyles();
  return (
    <>
      <Header
      color="transparent"
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
              <Icon className={classes.icons}>settings</Icon> Shop
            </Button>
          </ListItem>
        </List>
      }
      fixed
      changeColorOnScroll={{
        height: 150,
        color: "white"
      }}
    />
  </>
  );
}
