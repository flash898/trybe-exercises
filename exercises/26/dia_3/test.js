const fs = require('fs');
const sinon = require('sinon');
const { expect } = require('chai');

const testaNumeros = require('./testaNumeros');
const writeContent = require('./writeContent');


describe('Testando a função "testaNumeros"', () => {  
  describe('Testando números', () => {

    describe('a resposta', () => {
      it('é uma string', () => {
        const response = testaNumeros(1);
        expect(response).to.be.a('string');
      });
      it('quando é positivo', () => {
        const response = testaNumeros(1);
        expect(response).to.be.equals('positivo');
      });
    })
    
    describe('a resposta', () => {
      it('é uma string', () => {
        const response = testaNumeros(-1);
        expect(response).to.be.a('string');
      });
      it('quando é negativo', () => {
        const response = testaNumeros(-1);
        expect(response).to.be.equals('negativo');
      });
    })

    describe('a resposta', () => {
      it('é uma string', () => {
        const response = testaNumeros(0);
        expect(response).to.be.a('string');
      });
      it('quando é neutro', () => {
        const response = testaNumeros(0);
        expect(response).to.be.equals('neutro');
      });
    })
  });

  describe('o parametro', () => {
    it('é uma string', () => {
      const response = testaNumeros('1');
      expect(response).to.be.a('string');
    });
    it('não é um número', () => {
      const response = testaNumeros('1');
      expect(response).to.be.equals('o valor deve ser um número');
    })
  })
});


describe('Testando a função "writeContent"', () => {
  describe('quando o arquivo existe', () => {
    before(() => {
      sinon.stub(fs, 'writeFileSync');
    });

    after(() => {
      fs.writeFileSync.restore();
    });

    describe('a resposta', () => {

      it('é uma string', ()=> {
        const response = writeContent('arquivo.txt', 'teste');
        expect(response).to.be.a('string');
      });
      it('o retorno é "ok"', ()=> {
        const response = writeContent('arquivo.txt', 'teste');
        expect(response).to.be.equals('ok')
      });
    });
  });
});
