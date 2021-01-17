import {
  action, makeObservable, observable, flow, computed
} from 'mobx';

import {GET_PRODUCT, GET_PRODUCTS} from "api/product";

import client from 'utils/graphql'

class productStore {

  isLoading = false;

  loadingError = null;

  products = [];

  product = {
    id:'',
    name: '',
    description: '',
    size: '',
    price: '',
    reviews: '',
    images: '',
  };

  filters_MATERIAL = {
    'Marble': null,
    'Clay': null,
    'Sandstone': null,
    'Makrana Marble': null,
    'Italian Marble': null,
  }

  filters_CATEGORY = {
    'Radha Krishna': null,
    'Sita Ram': null,
    'Ganesh Ji': null,
    'Mandir': null,
    'Hanuman Ji': null,
    'Shankar Ji': null,
  }

  get filteredProducts() {
    return this.products;
  }

  setFilterItem(parent, item, value) {
    if(parent === "MATERIAL") {
      let temp = this.filters_MATERIAL;
      temp[item] = value;
      this.filters_MATERIAL = temp;
    } else if(parent === "CATEGORY") {
      let temp = this.filters_CATEGORY;
      temp[item] = value;
      this.filters_CATEGORY = temp;
    }
  }

  setIsLoading(value) {
    this.isLoading = value;
  }

  setLoadingError(value) {
    this.loadingError = value;
  }

  setProduct(product) {
    let temp = {};
    for(var key in product) {
      temp[key] = product[key];
    }
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
    if(value == null) return;
    this.products = value;
  }

  setProductItem(item, value) {
    let temp = this.product;
    temp[item] = value;
    this.product = temp;
  }

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
      variables:{ page },
    });
    this.isLoading = false;
    return res;
  })

  constructor() {
    makeObservable(this, {
      filters_MATERIAL: observable,
      filters_CATEGORY: observable,
      products: observable,
      product: observable,
      isLoading: observable,
      loadingError: observable,
      setProduct: action.bound,
      setProducts: action.bound,
      setProductItem: action.bound,
      setIsLoading: action.bound,
      setLoadingError: action.bound,
      setFilterItem: action.bound,
      filteredProducts: computed
    });
  }
}

const ProductStore = new productStore();

export let ProductStoreClass = productStore;
export default ProductStore;

