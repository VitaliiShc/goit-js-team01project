import axios from 'axios';

const axiosFirst = axios.create({
  baseURL: 'https://food-boutique.b.goit.study/api/products',
  params: {
    page: '1',
    limit: '90',
  },
});

export class searchFirstAPI {
  async getFirstSearch(page, limit) {
    try {
      const res = await axiosFirst.get('', {
        params: { page: page, limit: limit },
      });
      localStorage.setItem('res.data', JSON.stringify(res.data.results));
    } catch (error) {
      throw error;
    }
  }
}

const apiInstance = new searchFirstAPI();

const page = 1;
const limit = 90;

apiInstance
  .getFirstSearch(page, limit)
  .then(() => {
    console.log('Дані успішно отримані та збережені в localStorage');
  })
  .catch(error => {
    console.error('Помилка отримання даних:', error);
  });
