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
              href="#home-banner"
              className={classes.navLink + " " + classes.navLinkActive}
              onClick={e => e.preventDefault()}
              color="transparent"
            >
              <Explore className={classes.icons} /> Discover
            </Button>
          </ListItem>
          <ListItem className={classes.listItem}>
            <Button
              href="#pablo"
              className={classes.navLink}
              onClick={e => e.preventDefault()}
              color="transparent"
            >
              <AccountCircle className={classes.icons} /> Profile
            </Button>
          </ListItem>
          <ListItem className={classes.listItem}>
            <Button
              href="#pablo"
              className={classes.navLink}
              onClick={e => e.preventDefault()}
              color="transparent"
            >
              <Icon className={classes.icons}>settings</Icon> Settings
            </Button>
          </ListItem>
        </List>
      }
      fixed
      changeColorOnScroll={{
        height: 100,
        color: "white"
      }}
    />
  </>
  );
}
