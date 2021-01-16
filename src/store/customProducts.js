import {
  action, makeObservable, observable, flow
} from 'mobx';
import { gql } from '@apollo/client';

import {ProductStoreClass} from './products';
import client from "utils/graphql"

class customProductsStore extends ProductStoreClass {

  ADD_PRODUCT = gql`
    mutation AddCustomProduct(
      $userId: Long!, $max_days: Int!, $min_days: Int!,
      $min_price: Float!, $max_price: Float!, $description: String!, $size: Float!
    ) {
      addCustomProduct(
        userId: $userId
        max_price: $max_price
        min_price: $min_price
        min_days: $min_days
        max_days: $max_days
        description: $description
        size: $size
      ) {
        id
      }
    }
  `;

  GET_PRODUCTS = gql`
    query GetCustomProducts($userId: Long!, $page: Long) {
      customProducts(
        userId: $userId,
        page: $page,
      ) {
        id
        description
        size
        max_price
        min_price
        max_days
        min_days
        req_status
        req_text
      }
    }
  `;

  GET_PRODUCT = gql`
    query GetCustomProduct($userId: Long!, $id: Long!) {
      customProduct(
        userId: $userId,
        id: $id
      ) {
        id
        description
        size
        max_price
        min_price
        max_days
        min_days
        req_status
        req_text
      }
    }
  `;

  getProducts = flow(function * (page = null) {
    this.isLoading = true;
    var res = yield client.query({
      query: this.GET_PRODUCTS,
      variables:{ userId : 1, page },
    });
    this.isLoading = false;
    return res;
  })

  addProduct = flow(function * () {
    this.isLoading = true;
    var res = yield client.mutate({
      mutation: this.ADD_PRODUCT,
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