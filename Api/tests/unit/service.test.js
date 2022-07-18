const sinon = require('sinon');
const { expect } = require('chai');

const resultApi = require('../mocks/resultApi');
const dataFilterMock = require('../mocks/resultFormated');

const model = require('../../model/repositories');
const service = require('../../services/repositories');

describe('Service Sucess', async () => {
  before(async () => {
    sinon
      .stub(model, 'repositories')
      .resolves({ status: 200, data: resultApi });
  });

  after(() => {
    model.repositories.restore();
  });

  describe('Testa se trás os repositórios corretamente', async () => {
    it('', async () => {
      const { dataFilter, code } = await service.repositories();

      expect(dataFilter).to.be.deep.equal(dataFilterMock);
      expect(code).to.be.equal(200);
    });
  });
});

describe('Service Status 307', async () => {
  before(async () => {
    sinon
      .stub(model, 'repositories')
      .resolves({ status: 307, message: { error: "Temporary Redirect" } });
  });

  after(() => {
    model.repositories.restore();
  });

  describe('Testa se trás o status code corretamente em caso de error', async () => {
    it('', async () => {
      const { error, code } = await service.repositories();

      expect(error).to.be.equal('Temporary Redirect');
      expect(code).to.be.equal(307);
    });
  });
});
