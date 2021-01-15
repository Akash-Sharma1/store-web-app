import React from "react";

import { mobxify } from 'utils/hoc';
import GridContainer from "components/common/Grid/GridContainer.js";
import GridItem from "components/common/Grid/GridItem.js";
import ProductTile from "./ProductTile";
import Button from "components/common/CustomButtons/Button.js";

import { useQuery } from '@apollo/client';

import "assets/scss/shop/shop.scss";

function Listing({ ProductStore: store }) {

  const { loading, error, data } = useQuery(store.GET_PRODUCTS);

  if(loading) {
    return (
      <div  className="shop__align-c">
        <h1><small>Loading..</small></h1>
      </div>
    );
  } else {
    store.setProducts(data.products);
  }
  if(error) {
    alert(error);
    return <h1><small>Failed to load, reload..</small></h1>
  }

  const productTiles = store.products.map(p => (
    <GridItem
      className="listing__item"
      key={p.id} xs={12} sm={4} md={3}
    >
      <Button
        href={`/shop/product/${p.id}`}
        color="transparent"
        style={{
          display:"block",
          margin:0,
          padding:0
        }}
      >
        <ProductTile product={p}/>
      </Button>
    </GridItem>
  ));

  return(
    <div>
      <GridContainer
        className="listing__container"
      >
        {productTiles}
      </GridContainer>
    </div>
  );
}

export default mobxify('ProductStore')(Listing);

