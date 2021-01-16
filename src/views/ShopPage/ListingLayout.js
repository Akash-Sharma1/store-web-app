import React, { useEffect, useState }  from "react";
import { makeStyles } from "@material-ui/core/styles";

import { mobxify } from 'utils/hoc';
import GridContainer from "components/common/Grid/GridContainer.js";
import GridItem from "components/common/Grid/GridItem.js";
import Listing from "./Listing"
import "assets/scss/shop/shop.scss";
import Warning from "@material-ui/icons/Warning";

import Pagination from "components/common/Pagination/Pagination.js";
import styles from "assets/jss/material-kit-react/views/componentsSections/pillsStyle.js";
const useStyles = makeStyles(styles);

function ListingLayout({ ProductStore: store, AppStore }) {
  const classes = useStyles();
  const [maxxPage, setMaxxPage] = useState(100);

  const getProducts = (page = null) => {
    store.getProducts(page).then(res => {
      store.setProducts(res.data.products);
      if(res.data.products.length === 0 && page > 1) {
        setMaxxPage(page-1);
        getProducts(page-1);
      }
    }).catch(err => {
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
    getProducts()
  },[]);

  return(
    <div className={classes.section}>
      <div className={classes.container}>
        <div className={classes.title}>
          <div className="landing-page__heading">
            Explore all Products
          </div>
        </div>
        <div>
          <h4>
            <small>
              Use filters for limiting search results
            </small>
          </h4>
        </div>
        <GridContainer className="listing">
          <GridItem xs={false} sm={3} md={3}>
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
          <GridItem xs={12} sm={12} md={12}>
            <div
              className="shop__paginate-container"
            >
              <Pagination
                onClickAction={getProducts}
                color="info"
                maxx={maxxPage}
                scrollTo={300}
              />
            </div>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}

export default mobxify('ProductStore', 'AppStore')(ListingLayout);
