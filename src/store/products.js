import {
  action, makeObservable, observable
} from 'mobx';
import { gql } from '@apollo/client';

class productStore {

  GET_PRODUCTS = gql`
    {
      products{
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

  products = [];

  product = {
    name: '',
    description: '',
    size: '',
    price: '',
    reviews: '',
    images: '',
  };

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

  constructor() {
    makeObservable(this, {
      products: observable,
      product: observable,
      setProduct: action.bound,
      setProducts: action.bound,
      setProductItem: action.bound
    });
  }
}

const ProductStore = new productStore();

export let ProductStoreClass = productStore;
export default ProductStore;

