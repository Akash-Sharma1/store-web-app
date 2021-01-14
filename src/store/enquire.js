import {
  action, makeObservable, observable
} from 'mobx';
import { gql, useQuery, useMutation} from '@apollo/client';

const ADD_CUSTOM_PRODUCT = gql`
  mutation AddCustomProduct(
    $userId: Long!, $maxd: Int!, $mind: Int!,
    minp: Float!, maxp: Float!, desc: String!, size: Float
  ) {
    addCustomProduct()(
      $userId: $userId,
      $max_price: $maxp,
      $min_price: $minp
      $min_days: $mind
      $max_days: $maxd
      $description: $desc
      $size: $size
    ) {
      id
    }
  }
`;

const GET_CUSTOM_PRODUCT = gql`
  mutation AddCustomProduct($userId: Long!, id: Long!) {
    addCustomProduct()(
      $userId: $userId,
      $id: $userId
    ) {
      description
      max_price
      min_price
      max_days
      min_days
      size
      status
    }
  }
`;

class Enquire {
  enquiryNumber = '';

  enquiryExists = false;

  userDetails = {
    phone: '',
    email: '',
    name: '',
  };

  requirements = {
    description: '',
    size: '',
    image: '',
  }

  sliders = {
    budget: [5000, 20000],
    time: [7, 45],
  }

  setEnquiryNumber(value) {
    this.enquiryNumber = value;
  }

  setUserDetails(item, value) {
    let temp = this.userDetails;
    temp[item] = value;
    this.userDetails = temp;
  }

  setSliders(item, value) {
    let temp = this.sliders;
    temp[item] = value;
    this.sliders = temp;
  }

  setRequirements(item, value) {
    let temp = this.requirements;
    temp[item] = value;
    this.requirements = temp;
  }

  constructor() {
    makeObservable(this, {
      enquiryExists: observable,
      enquiryNumber: observable,
      userDetails: observable,
      sliders: observable,
      requirements: observable,
      setEnquiryNumber: action.bound,
      setSliders: action.bound,
      setUserDetails: action.bound,
      setRequirements: action.bound,
    });
  }
}

const EnquireStore = new Enquire();

export default EnquireStore;