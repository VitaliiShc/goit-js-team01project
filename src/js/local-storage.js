export class LocalStorage {
  updateLocalStorageWithFoodList(data, options) {
    if (!localStorage.getItem('options')) {
      this.defaultApiOptions();
    }
      localStorage.setItem('products', JSON.stringify(data.results));
      localStorage.setItem('options', JSON.stringify(options));
    
  }

  defaultApiOptions() {
    const defaultOptions = {
      keyword: null,
      category: null,
      page: 1,
      
  
limit: 6,
    };
    localStorage.setItem('options', JSON.stringify(defaultOptions));
  }
}