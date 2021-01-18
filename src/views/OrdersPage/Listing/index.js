import React from "react";

import OrderList from "./OrderList";
import Pagination from "components/common/Pagination/Pagination.js";

function Listing({ orders, getOrders, maxxPage, activeTab, setActiveTab }) {

  function nothingUi() {
    return (
      <div className="custom-p__no-show">
        <h2>Nothing to show</h2>
      </div>
    );
  }

  let content = nothingUi();
  
  if (orders && orders.length > 0) {
    content = <OrderList
      orders={orders}
    />
  }

  return (
    <>
      <div
        className="custom-p__list-container"
      >
        {content}
      </div>
      <br/><br/>
      <div
        className="custom-p__paginate-container"
      >
        <Pagination
          forceActivePage={activeTab}
          setForceActivePage={setActiveTab}
          onClickAction={getOrders}
          color="info"
          maxx={maxxPage}
          scrollTo={400}
        />
      </div>
    </>
  );
}

export default Listing;
