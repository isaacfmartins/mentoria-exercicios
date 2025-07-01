const pesssoas = [
    {
        nome: "Maria da Silva",
        cpf: "123.456.789-00",
        frutasPreferidas: ["banana", "maçã", "laranja"]
    },
    {
        nome: "Luiza Pereira",
        cpf: "987.654.321-00",
        frutasPreferidas: ["uva", "pera", "abacaxi"]
    },
    {
        nome: "Ana Souza",
        cpf: "456.789.123-00",
        frutasPreferidas: ["manga", "kiwi", "morango"]
    },
    {
        nome: "Ana Oliveira",
        cpf: "321.654.987-00",
        frutasPreferidas: ["caju", "goiaba", "uva"]
    }
];

function pesquisarPessoas(CPF) {

    for (let i = 0; i < pesssoas.length; i++) {
        if (pesssoas[i].cpf === CPF) {
            return pesssoas[i];
        }
    }

    return "Pessoa não encontrada";

}

module.exports = {
    pesquisarPessoas
};