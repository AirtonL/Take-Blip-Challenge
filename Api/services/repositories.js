const model = require('../model/repositories');
const verifyInvalidStatusCode = require('../utils/verifyStatusCode');

const repositories = async () => {
  const repos = await model.repositories();

  const code = repos.status;

  if (code !== 200) return verifyInvalidStatusCode(code);

  const data = repos.data.map((repo, index) => ({
    [`challenge${index + 1}`]: {
      full_name: repo.full_name,
      description: repo.description,
      avatar_url: repo.owner.avatar_url,
    }
  }));

  const dataFilter = Object.assign({}, ...data);

  return { dataFilter, code };
};

module.exports = { repositories };