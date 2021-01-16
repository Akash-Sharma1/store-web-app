import {
  action, makeObservable, observable, flow
} from 'mobx';
import { gql } from '@apollo/client';

import client from "utils/graphql"

class productStore {

  GET_PRODUCTS = gql`
    query GetProduct($page: Long) {
      products(page : $page){
        id
        name
        price
        availablity
      }
    }
  `;

  GET_PRODUCT = gql`
    query GetProduct($id: Long!) {
      product (id : $id) {
        id
        name
        price
        description
        availablity
      }
    }
  `;

  isLoading = false;

  loadingError = null;

  products = [];

  product = {
    name: '',
    description: '',
    size: '',
    price: '',
    reviews: '',
    images: '',
  };

  setIsLoading(value) {
    this.isLoading = value;
  }

  setProduct(product) {
    let temp = {
      name: '',
      description: '',
      size: '',
      price: '',
      reviews: '',
      images: '',
    };

    temp.name = product.name;
    temp.description = product.description;
    temp.size = product.size;
    temp.price = product.price;
    temp.reviews = product.reviews;
    
    temp.images = [
      {
        image: require('assets/img/moorti/yogesh-pedamkar-lmeBk-i3_PI-unsplash.jpg'),
        description: 'image 1',
      },
      {
        image: require('assets/img/moorti/yogesh-pedamkar-x_oOzJMRUd4-unsplash.jpg'),
        description: 'image 1',
      },
      {
        image: require('assets/img/moorti/pexels-niko-cezar-3731615.jpg'),
        description: 'image 1',
      },
    ];

    this.product = temp;
  }

  setProducts(value) {
    this.products = value;
  }

  setProductItem(item, value) {
    let temp = this.product;
    temp[item] = value;
    this.product = temp;
  }

  getProducts = flow(function * (page = null) {
    this.isLoading = true;
    var res = yield client.query({
      query: this.GET_PRODUCTS,
      variables:{ page },
    });
    this.isLoading = false;
    return res;
  })

  constructor() {
    makeObservable(this, {
      products: observable,
      product: observable,
      isLoading: observable,
      loadingError: observable,
      setProduct: action.bound,
      setProducts: action.bound,
      setProductItem: action.bound,
      setIsLoading: action.bound
    });
  }
}

const ProductStore = new productStore();

export let ProductStoreClass = productStore;
export default ProductStore;

