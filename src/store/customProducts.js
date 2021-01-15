import {
  action, makeObservable, observable, flow
} from 'mobx';
import { gql } from '@apollo/client';

import {ProductStoreClass} from './products';
import client from "utils/graphql"

class customProductsStore extends ProductStoreClass {

  ADD_CUSTOM_PRODUCT = gql`
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

  GET_ALL_CUSTOM_PRODUCTS = gql`
    query GetCustomProducts($userId: Long!) {
      customProducts(
        userId: $userId
      ) {
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

  GET_CUSTOM_PRODUCT = gql`
    query GetCustomProduct($userId: Long!, $id: Long!) {
      customProduct(
        userId: $userId,
        id: $id
      ) {
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

  UPDATE_CUSTOM_PRODUCT = gql`
    mutation UpdateCustomProduct(
      $id: Long!, $max_days: Int!, $min_days: Int!,
      $min_price: Float!, $max_price: Float!, $description: String!, $size: Float!
    ) {
      updateCustomProduct(
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

  isLoading = false;

  loadingError = false;

  addProduct = flow(function * () {
    var res = yield client.mutate({
      mutation: this.ADD_CUSTOM_PRODUCT,
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
    return res;
  })

  product = {};

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