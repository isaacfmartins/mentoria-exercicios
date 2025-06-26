const {comunicacaoDosAnimais} = require('../src/comunicacao.js');
const { expect } = require('chai');
const assert = require('assert');

const comoSeComunicamOsCachoros = comunicacaoDosAnimais('cachorro');
const comoSeComunicamOsGatos = comunicacaoDosAnimais('gato');
const comoSeComunicamAsVacas = comunicacaoDosAnimais('vaca');
const comoSeComunicamAsOvelhas = comunicacaoDosAnimais('ovelha');
const comoSeComunicamOsAnimais = comunicacaoDosAnimais('não sei');



// console.log(comoSeComunicamOsCachoros); // "au au"
// console.log(comoSeComunicamOsGatos); // "miau"
// console.log(comoSeComunicamAsVacas); // "muu"
// console.log(comoSeComunicamAsOvelhas); // "meee"    
// console.log(comoSeComunicamOsAnimais); // "Não conheço esse animal"

describe('Teste de comunicação dos animais', () => {
    it('Cachorro deve comunicar "au au"', () => {
        // expect(comunicacaoDosAnimais('cachorro')).to.equal('au au');
        assert.equal(comunicacaoDosAnimais('cachorro'), 'au au');
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