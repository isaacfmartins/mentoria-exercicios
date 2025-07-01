const {comunicacaoDosAnimais} = require('../src/comunicacao.js');
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
        assert.strictEqual(comunicacaoDosAnimais('cachorro'), animais.cachorro);
    });

    it('Gato deve comunicar "miau"', () => {
        assert.strictEqual(comunicacaoDosAnimais('gato'), animais.gato);
    });

    it('Vaca deve comunicar "muu"', () => {
        assert.strictEqual(comunicacaoDosAnimais('vaca'), animais.vaca);
    });

    it('Ovelha deve comunicar "meee"', () => {
        assert.strictEqual(comunicacaoDosAnimais('ovelha'), animais.ovelha);
    });

    it('Animal desconhecido deve comunicar "Não conheço esse animal"', () => {
        assert.strictEqual(comunicacaoDosAnimais('não sei'), 'Não conheço esse animal');
    });
});