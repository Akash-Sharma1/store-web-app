import React  from "react";

import "assets/scss/shop/shop.scss";
import { makeStyles } from "@material-ui/core/styles";
import { Drawer, Hidden } from "@material-ui/core";
import Button from "components/common/CustomButtons/Button.js";
import FilterItemList from "./FilterItemList"

import styles from "assets/jss/material-kit-react/components/headerStyle.js";
const useStyles = makeStyles(styles);

export default function Filters() {
  const classes = useStyles();

  const [mobileOpen, setMobileOpen] = React.useState(false);
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const menuButton = <>
    <div>
      <Button
        color="info"
        size="sm"
        className="shop__full-wh"
        onClick={handleDrawerToggle}
      >
        Open Filters
      </Button>
    </div>
    <br/>
    <br/>
  </>

  return(
    <div>
      <Hidden smDown implementation="css">
        <FilterItemList />
      </Hidden>
      <Hidden mdUp>
        {menuButton}
      </Hidden>
      <Hidden mdUp implementation="js">
        <Drawer
          variant="temporary"
          anchor={"left"}
          open={mobileOpen}
          classes={{
            paper: classes.drawerPaper
          }}
          onClose={handleDrawerToggle}
        >
          <div className={classes.appResponsive}>
            <FilterItemList />
          </div>
        </Drawer>
      </Hidden>
    </div>
  );
}
