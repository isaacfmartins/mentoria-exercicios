function comunicacaoDosAnimais(nomeDoAnimal){
    if (nomeDoAnimal === "cachorro") {
        return "au au";
    } else if (nomeDoAnimal === "gato") {
        return "miau";
    } else if (nomeDoAnimal === "vaca") {
        return "muu";
    } else if (nomeDoAnimal === "ovelha") {
        return "meee";
    } else {
        return "Não conheço esse animal";
    }

}

// const aninal = comunicacaoDosAnimais("cachorro");
// console.log(aninal); // "au au"

module.exports = {
    comunicacaoDosAnimais
}

