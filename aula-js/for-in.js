let pessoa = {
    nome: "Rodolpho",
    idade: "29",
    sexo: "masculino",
    peso: "85"
}

console.log(pessoa["sexo"])
console.log(pessoa.sexo)

for (let p in pessoa) {
    console.log('dados da pessoa', p, pessoa[p]) //chave es: nome
    console.log('dados da pessoa', pessoa[p]) //valor ex: rodolpho
}

//Para varrer objetos