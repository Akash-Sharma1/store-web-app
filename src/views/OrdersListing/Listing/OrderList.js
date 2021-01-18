import React from "react";

import GridContainer from "components/common/Grid/GridContainer.js";
import GridItem from "components/common/Grid/GridItem.js";
import OrderTile from "./OrderTile";
import Button from "components/common/CustomButtons/Button.js";
import "assets/scss/shop/shop.scss";

function OrderList(props) {  
  const orderTiles = props.orders.map(o => {
    return <GridItem
      className="listing__item"
      key={o.id} xs={12} sm={4} md={3}
    >
      <Button
        href={`/order/${o.id}`}
        color="transparent"
        style={{
          display:"block",
          margin:0,
          padding:0
        }}
      >
        <OrderTile order={o}/>
      </Button>
    </GridItem>
  });

  return(
    <div>
      <GridContainer
        className="listing__container"
      >
        {orderTiles}
      </GridContainer>
    </div>
  );
}

export default OrderList;
