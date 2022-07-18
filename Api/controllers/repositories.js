const service = require('../services/repositories');

const getRepos = async (_req, res, next) => {
  try {
    const { dataFilter, code, error } = await service.repositories();

    if (error) return res.status(code).json({ error });
  
    return res.status(code).json(dataFilter);
  } catch (error) {
    return next(error);
  }
};

module.exports = { getRepos };