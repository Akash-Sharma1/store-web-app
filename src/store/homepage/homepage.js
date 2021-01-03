import {
  action, makeObservable, observable, computed
} from 'mobx';

class HomePage {
  userDetails = {
    phone: '',
    email: '',
    name: '',
  };

  budgetSlider = [5000, 20000];
  timeSlider = [7, 45];

  requirementsDescription = '';

  tagTitles = ['All', 'Faces', 'Marble', 'Painting'];

  imageList = [
    {
      image: require('assets/img/moorti/pexels-artem-beliaikin-1485630-flippped.jpg'),
      tags: ['All'],
      description: 'image 1',
    },
    {
      image: require('assets/img/moorti/pexels-artem-beliaikin-1485630.jpg'),
      tags: ['All', 'Marble'],
      description: 'image 1',
    },
    {
      image: require('assets/img/moorti/yogesh-pedamkar-lmeBk-i3_PI-unsplash.jpg'),
      tags: ['Marble'],
      description: 'image 1',
    },
    {
      image: require('assets/img/moorti/yogesh-pedamkar-x_oOzJMRUd4-unsplash.jpg'),
      tags: ['Marble'],
      description: 'image 1',
    },
    {
      image: require('assets/img/moorti/pexels-niko-cezar-3731615.jpg'),
      tags: ['Faces'],
      description: 'image 1',
    },
    {
      image: require('assets/img/moorti/Ganpati-murti_white-colour.jpg'),
      tags: ['Faces'],
      description: 'image 1',
    },
    {
      image: require('assets/img/moorti/beautiful-radha-krishna-images.jpg'),
      tags: ['Painting'],
      description: 'image 1',
    },
    {
      image: require('assets/img/moorti/pexels-sonika-agarwal-5621872.jpg'),
      tags: ['Painting'],
      description: 'image 1',
    }
  ];

  filterImagesByTag(_tag) {
    return this.imageList.filter(d => d.tags.find(tag => tag === _tag) );
  }

  get ImageTags() {
    return this.tagTitles;
  }

  setUserDetails(item, value) {
    let temp = this.userDetails;
    temp[item] = value;
    this.userDetails = temp;
  }

  setBudgetSlider(value) {
    this.budgetSlider = value;
  }

  setTimeSlider(value) {
    this.timeSlider = value;
  }

  setRequirementDescription(value) {
    this.requirementsDescription = value;
  }

  constructor() {
    makeObservable(this, {
      userDetails: observable,
      budgetSlider: observable,
      timeSlider: observable,
      setBudgetSlider: action.bound,
      setTimeSlider: action.bound,
      setUserDetails: action.bound,
      setRequirementDescription: action.bound,
      ImageTags: computed,
    });
  }
}

const HomePageStore = new HomePage();

export default HomePageStore;