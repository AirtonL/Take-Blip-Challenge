const base = 'https://api.github.com/orgs/takenet/repos';
const filters = '?per_page=5&sort=created&language=c23&direction=asc'

const api = {
  baseUrl: `${base}${filters}`,
  client_id: '',
  client_secret: '',
}

module.exports = api;