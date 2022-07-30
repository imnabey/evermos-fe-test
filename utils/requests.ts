const BASE_URL = 'https://cors-anywhere.herokuapp.com/http://makeup-api.herokuapp.com';

const requests = {
  fetchCampaign: `${BASE_URL}/api/v1/products.json?brand=maybelline`,
};

export default requests;
