import {
  action, makeObservable, observable
} from 'mobx';

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