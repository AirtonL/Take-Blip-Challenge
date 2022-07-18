const { expect } = require('chai');
const sinon = require('sinon');

const dataFilterMock = require('../mocks/resultFormated');

const Controller = require('../../controllers/repositories');
const service = require('../../services/repositories');

describe('Controller Sucess', async () => {
  const req = {};
  const res = {};

  before(async () => {
    sinon
      .stub(service, 'repositories')
      .resolves({ dataFilterMock, code: 200 });
      res.json = sinon.stub().returns(dataFilterMock);
      res.status = sinon.stub().returns(res);
  });

  after(() => {
    service.repositories.restore();
  });

  describe('Testa se trás os repositórios corretamente', async () => {
    it('', async () => {
      const data = await Controller.getRepos(req, res);

      expect(data).to.be.deep.equal(dataFilterMock);
      expect(res.status.calledWith(200)).to.be.equal(true);
    });
  });
});

describe('Controller reject', async () => {
  const req = {};
  const res = {};
  let next = () => ({});

  before(async () => {
    sinon
      .stub(service, 'repositories')
      .throws();
      next = sinon.stub().returns({ message: 'Server error' });
  });

  after(() => {
    service.repositories.restore();
  });

  describe('Testa quando gera um erro de servidor', async () => {
    it('Gera erro para cair no next', async () => {

      const data = await Controller.getRepos(req, res, next);

      expect(data).to.be.deep.equal({ message: 'Server error' });
    });
  });
});

describe('Controller reject', async () => {
  const req = {};
  const res = {};

  before(async () => {
    sinon
      .stub(service, 'repositories')
      .resolves({ error: 'Forbidden', code: 403 });
      res.json = sinon.stub().returns({ error: 'Forbidden' });
      res.status = sinon.stub().returns(res);

  });

  after(() => {
    service.repositories.restore();
  });

  describe('Testa quando retorna algum erro do service', async () => {
    it('', async () => {
      const data = await Controller.getRepos(req, res);

      expect(data).to.be.deep.equal({ error: 'Forbidden' });
      expect(res.status.calledWith(403)).to.be.equal(true);
    });
  });
});
