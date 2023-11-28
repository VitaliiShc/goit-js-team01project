import axios from 'axios';

export class FoodApi {
  constructor() {
    this.URL = `https://food-boutique.b.goit.study/api`;
    this.searchQuery = '';
    this.category = '';
    this.currentPage = 1;
    this.perPage = 90;
    
  }

  encodeParams(params) {
    return Object.entries(params)
      .map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(value)}`)
      .join('&');
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
  