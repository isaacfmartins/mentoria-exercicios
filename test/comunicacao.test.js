const {comunicacaoDosAnimais} = require('../src/comunicacao.js');
const { expect } = require('chai');
const assert = require('assert');

const animais = {
    cachorro: 'au au',
    gato: 'miau',
    vaca: 'muu',
    ovelha: 'meee'
}

const comoSeComunicamOsCachoros = comunicacaoDosAnimais(animais.cachorro);
const comoSeComunicamOsGatos = comunicacaoDosAnimais(animais.gato);
const comoSeComunicamAsVacas = comunicacaoDosAnimais(animais.vaca);
const comoSeComunicamAsOvelhas = comunicacaoDosAnimais(animais.ovelha);
const comoSeComunicamOsAnimais = comunicacaoDosAnimais('não sei');

describe('Teste de comunicação dos animais', () => {
    it('Cachorro deve comunicar "au au"', () => {
        // expect(comunicacaoDosAnimais('cachorro')).to.equal('au au');
        assert.strictEqual(comunicacaoDosAnimais('cachorro'), 'au au');
    });

    it('Gato deve comunicar "miau"', () => {
        expect(comunicacaoDosAnimais('gato')).to.equal('miau');
    });

    it('Vaca deve comunicar "muu"', () => {
        expect(comunicacaoDosAnimais('vaca')).to.equal('muu');
    });

    it('Ovelha deve comunicar "meee"', () => {
        expect(comunicacaoDosAnimais('ovelha')).to.equal('meee');
    });

    it('Animal desconhecido deve comunicar "Não conheço esse animal"', () => {
        expect(comunicacaoDosAnimais('não sei')).to.equal('Não conheço esse animal');
    });
});