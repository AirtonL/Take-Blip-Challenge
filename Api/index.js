require('dotenv/config');

const express = require('express');
const router = require('./routes');
const error = require('./middlewares/error');

const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.json());

app.use('/', router.repositories);

app.use(error);

app.listen(PORT, () => console.log(`ouvindo porta ${PORT}`));
