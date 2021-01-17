import {
  action, makeObservable, flow
} from 'mobx';

import {ProductStoreClass} from './products';
import client from "utils/graphql"

import {GET_PRODUCT, GET_PRODUCTS, ADD_PRODUCT} from "api/customProduct"

class customProductsStore extends ProductStoreClass {

  getProduct = flow(function * (id) {
    this.isLoading = true;
    this.loadingError = null;
    var res = yield client.query({
      query: GET_PRODUCT,
      variables:{ id },
    });
    this.isLoading = false;
    return res;
  })

  getProducts = flow(function * (page = null) {
    this.isLoading = true;
    this.loadingError = null;
    var res = yield client.query({
      query: GET_PRODUCTS,
      variables:{ userId : 1, page },
    });
    this.isLoading = false;
    return res;
  })

  addProduct = flow(function * () {
    this.isLoading = true;
    this.loadingError = null;
    var res = yield client.mutate({
      mutation: ADD_PRODUCT,
      variables: {
        userId: 1,
        max_price: this.product.budget[0],
        min_price: this.product.budget[1],
        min_days: this.product.days[0],
        max_days: this.product.days[1],
        description: this.product.description,
        size: this.product.size,
      }
    })
    this.isLoading = false;
    return res;
  })

  clearProduct() {
    let temp = {
      description: '',
      size: '',
      budget: [5000, 20000],
      days: [7, 45],  
    };
    this.product = temp;
  }

  constructor() {
    super();
    this.clearProduct();
    makeObservable(this, {
      addProduct: action.bound,
      clearProduct: action.bound,
    });
  }
}

const CustomProductStore = new customProductsStore();

export default CustomProductStore;