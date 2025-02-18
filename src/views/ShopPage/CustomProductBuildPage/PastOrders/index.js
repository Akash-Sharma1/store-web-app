import React, { useEffect } from "react";
import { mobxify } from 'utils/hoc';

import Warning from "@material-ui/icons/Warning";
import Listing from './Listing';

function TrackCustomProducts({ CustomProductStore: store, AppStore }) {

  useEffect(() => {
    store.clearProduct();
    getProducts();
    return () => store.clearProduct();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[store]);

  const getProducts = () => {
    store.getProducts().then()
    .catch(err => {
      AppStore.setNotificationItem("open", false);
      AppStore.setNotification({
        color: "danger",
        title: "Error",
        body: err.toString(),
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
        maxxPage={store.maxxPage}
        activeTab={store.currPage}
        setActiveTab={store.setCurrPage}
      />
    </>
  );
}

export default mobxify('CustomProductStore', 'AppStore')(TrackCustomProducts);
