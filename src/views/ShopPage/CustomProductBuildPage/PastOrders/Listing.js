import React from "react";

import ProductList from "views/Common/Ui/Product/ProductList";
import Pagination from "components/common/Pagination/Pagination.js";

function Listing({ products, getProducts, maxxPage, activeTab, setActiveTab }) {

  function nothingUi() {
    return (
      <div className="custom-p__no-show">
        <h2>Nothing to show</h2>
      </div>
    );
  }

  let content = nothingUi();
  
  if (products && products.length > 0) {
    content = <ProductList
      productType="CustomProduct"
      products={products}
      onClickAction={() => setActiveTab(1)}
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
          forceActiveTab={activeTab}
          setForceActiveTab={setActiveTab}
          onClickAction={getProducts}
          color="info"
          maxx={maxxPage}
          scrollTo={400}
        />
      </div>
    </>
  );
}

export default Listing;
