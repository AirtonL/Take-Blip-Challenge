const axios = require('axios');
const api = require('../utils/url');

const repositories = async () => {
  const resultApi = await axios.get(api.baseUrl);

  return resultApi;
};

module.exports = { repositories };
