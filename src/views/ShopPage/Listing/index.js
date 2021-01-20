import React, { useEffect }  from "react";
import { makeStyles } from "@material-ui/core/styles";
import { mobxify } from 'utils/hoc';
import GridContainer from "components/common/Grid/GridContainer.js";
import GridItem from "components/common/Grid/GridItem.js";
import Warning from "@material-ui/icons/Warning";
import Pagination from "components/common/Pagination/Pagination.js";

import ProductList from "./ProductList"
import Filters from "./Filters"

import "assets/scss/shop/shop.scss";

import styles from "assets/jss/material-kit-react/views/componentsSections/pillsStyle.js";
const useStyles = makeStyles(styles);

function Listing({ ProductStore: store, AppStore }) {
  const classes = useStyles();

  const getProducts = () => {
    store.getProducts().then().catch(err => {
      AppStore.setNotificationItem("open", false);
      AppStore.setNotification({
        color: "danger",
        title: "Error",
        body: "Something failed try again!",
        icon: Warning,
      });
      store.setIsLoading(false);
    })
  }

  useEffect(() => {
    getProducts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[]);

  return(
    <div className={classes.section}>
      <div className={classes.container}>
        <div className={classes.title}>
          <div className="landing-page__heading">
            Explore all Products
          </div>
        </div>
        <GridContainer className="listing">
          <GridItem xs={12} sm={12} md={2}>
            <Filters />
          </GridItem>
          <GridItem xs={12} sm={12} md={10}>
            <ProductList />
          </GridItem>
          <GridItem xs={12} sm={12} md={12}>
            <div
              className="shop__paginate-container"
            >
              <Pagination
                onClickAction={getProducts}
                color="info"
                maxx={store.maxxPage}
                forceActivePage={store.currPage}
                setForceActivePage={store.setCurrPage}
                scrollTo={300}
              />
            </div>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}

export default mobxify('ProductStore', 'AppStore')(Listing);
