const { Router } = require('express');

const Controller = require('../controllers/repositories');

const repositories = Router();

repositories.get('/repositories', Controller.getRepos);

module.exports = { repositories };
