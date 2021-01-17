import React, { useState, useEffect } from "react";
import { mobxify } from 'utils/hoc';

import Warning from "@material-ui/icons/Warning";
import Listing from './Listing';

function TrackCustomProducts({ CustomProductStore: store, AppStore }) {
  const [activePage, setActivePage] = useState(1);
  const [maxxPage, setMaxxPage] = useState(100);

  useEffect(() => {
    store.clearProduct();
    getProducts();
    return () => store.clearProduct();
  },[store]);

  const getProducts = (page = null) => {
    store.getProducts(page).then(res => {
      console.log(res);
      store.setProducts(res.data.customProducts);
      if(res.data.customProducts.length === 0) {
        if(page > 1){
          setMaxxPage(page-1);
          getProducts(page-1);
        } else {
          setMaxxPage(1);
        }
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

  return (
    <>
      <br/>
      <Listing
        products={store.products}
        getProducts={getProducts}
        maxxPage={maxxPage}
        activeTab={activePage}
        setActiveTab={setActivePage}
      />
    </>
  );
}

export default mobxify('CustomProductStore', 'AppStore')(TrackCustomProducts);
