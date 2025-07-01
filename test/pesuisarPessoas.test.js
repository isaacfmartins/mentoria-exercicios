const { pesquisarPessoas } = require("../src/pesquisarPessoas.js");
const assert = require("assert");

describe("pesquisarPessoas", () => {
    it("deve retornar a pessoa com o CPF informado", () => {
        const pessoas = [
            {
                nome: "Maria da Silva",
                cpf: "123.456.789-00",
                frutasPreferidas: ["banana", "maçã", "laranja"]
            },
            {
                nome: "Luiza Pereira",
                cpf: "987.654.321-00",
                frutasPreferidas: ["uva", "pera", "abacaxi"]
            }
        ];

        const pessoa =  pesquisarPessoas(pessoas[0].cpf);
        assert.strictEqual(pessoa.cpf, pessoas[0].cpf);
        assert.strictEqual(pessoa.nome, pessoas[0].nome);
        assert.strictEqual(pessoa.frutasPreferidas[0], pessoas[0].frutasPreferidas[0]);
        assert.strictEqual(pessoa.frutasPreferidas[1], pessoas[0].frutasPreferidas[1]);
        assert.strictEqual(pessoa.frutasPreferidas[2], pessoas[0].frutasPreferidas[2]);

        const pessoa2 =  pesquisarPessoas(pessoas[1].cpf);
        assert.strictEqual(pessoa2.cpf, pessoas[1].cpf);
        assert.strictEqual(pessoa2.nome, pessoas[1].nome);
        assert.strictEqual(pessoa2.frutasPreferidas[0], pessoas[1].frutasPreferidas[0]);
        assert.strictEqual(pessoa2.frutasPreferidas[1], pessoas[1].frutasPreferidas[1]);
        assert.strictEqual(pessoa2.frutasPreferidas[2], pessoas[1].frutasPreferidas[2]);
    });

    it("deve retornar 'Pessoa não encontrada' se o CPF não existir", () => {
        const dadosPessoaipessoas =
        {
            cpf: "000.000.000-00",
            mensagem: "Pessoa não encontrada"
        }
            ;
        const pessoa = pesquisarPessoas(dadosPessoaipessoas.cpf);
        assert.strictEqual(pessoa, dadosPessoaipessoas.mensagem);
    });
});