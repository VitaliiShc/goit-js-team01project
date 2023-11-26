import axios from 'axios';

export class FoodApi {
  constructor() {
    this.URL = `https://food-boutique.b.goit.study/api`;
    this.searchQuery = '';
    this.category = '';
    this.currentPage = 1;
    this.perPage = this.calculatePerPage();
    
    window.addEventListener('resize', () => {
      this.perPage = this.calculatePerPage();
    });
  }

  encodeParams(params) {
    return Object.entries(params)
      .map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(value)}`)
      .join('&');
  }

  calculatePerPage() {
    if (window.matchMedia('(min-width: 1440px)').matches) {
      return 9;
    } else if (window.matchMedia('(min-width: 768px)').matches) {
      return 8;
    } else {
      return 6;
    }
  }

  getFoodList() {
    const params = {
      keyword: this.searchQuery,
      category: this.category,
      page: this.currentPage,
      limit: this.perPage,
    };

    const encodedParams = this.encodeParams(params);

    return axios
      .get(`${this.URL}/products?${encodedParams}`)
      .then(response => {
        return response.data;
      });
  }

  getCategories() {
    return axios.get(`${this.URL}/products/categories`).then(response => {
      console.log(response.data);
      return response.data;
    });
  }
}
  