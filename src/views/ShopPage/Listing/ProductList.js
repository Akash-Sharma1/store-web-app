import React from "react";

import { mobxify } from 'utils/hoc';
import ProductList from "views/Common/Ui/Product/ProductList";
import "assets/scss/shop/shop.scss";

function Listing({ ProductStore: store }) {
  if(store.isLoading) {
    return (
      <div  className="shop__align-c">
        <h1><small>Loading..</small></h1>
      </div>
    );
  }

  if(store.products.length === 0) {
    return <>
      <h1><small>Nothing To show</small></h1>
      <h4><small>Try to change applied filters and
        {' '}if you cant find your likings then check out our custom build page</small></h4>
    </>
  }
  return (
    <ProductList products={store.products}/>
  );
}

export default mobxify('ProductStore')(Listing);

