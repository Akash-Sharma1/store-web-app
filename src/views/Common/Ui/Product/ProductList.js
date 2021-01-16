import React from "react";

import GridContainer from "components/common/Grid/GridContainer.js";
import GridItem from "components/common/Grid/GridItem.js";
import ProductTile from "./ProductTile";
import CustomProductTile from "./CustomProductTile";
import Button from "components/common/CustomButtons/Button.js";
import "assets/scss/shop/shop.scss";

function ProductList(props) {  
  const productTiles = props.products.map(p => {
    let product = null;
    let buttonRoute = null;
    if(props.productType === "CustomProduct") {
      product = <CustomProductTile product={p}/>
    } else {
      product = <ProductTile product={p}/>  
    }

    if (props.productType === "CustomProduct") {
      buttonRoute = `/shop/custom-product/${p.id}`;
    } else {
      buttonRoute = `/shop/product/${p.id}`;
    }

    return <GridItem
      className="listing__item"
      key={p.id} xs={12} sm={4} md={3}
    >
      <Button
        href={buttonRoute}
        color="transparent"
        style={{
          display:"block",
          margin:0,
          padding:0
        }}
      >
        {product}
      </Button>
    </GridItem>
  });

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

export default ProductList;
