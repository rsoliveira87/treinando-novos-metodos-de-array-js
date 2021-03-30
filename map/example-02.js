const persons = [
    {
        name : 'Robson Oliveira',
        age : 33,
        telphone : '99 99999 9999'
    },
    {
        name : 'Priscila Guedes Oliveira',
        age : 41,
        telphone : '99 98756 4321'
    },
    {
        name : 'Luisa Guedes Oliveira',
        age : 4,
        telphone : '99 91234 5678'
    }
]

const docs = [
    {
        cpf : '111.222.333-44'
    },
    {
        cpf : '222.333.444-55'
    },
    {
        cpf : '333.444.555-66'
    }
];

// do array persons quero criar um novo array somente com os nomes

// fazendo um exemplo com for
const personsFor = [];

for(const person of persons) {
    personsFor.push(person.name);
}

console.log('Exemplo com for', personsFor);

// fazendo o mesmo exemplo com map
const personsMap = persons.map(person => person.name);

console.log('Exemplo com map 1', personsMap);
// [ 'Robson Oliveira', 'Priscila Guedes Oliveira', 'Luisa Guedes Oliveira' ]

// retornando nome e idade no mesmo índice
const personsMap2 = persons.map(person => `${person.name} - ${person.age}`);

console.log('Exemplo com map 2', personsMap2);
// [ 'Robson Oliveira - 33', 'Priscila Guedes Oliveira - 41', 'Luisa Guedes Oliveira - 4' ]

// retornando a idade dobrada
const personsMap3 = persons.map(person => person.age * 2);

console.log('Exemplo com map 3', personsMap3);
// [ 66, 82, 8 ]

// retorna os telefones sem espaços
const personsMap4 = persons.map(person => person.telphone.replace(/\s/g, ''));

console.log('Exemplo com map 4', personsMap4);
// [ '99999999999', '99987564321', '99912345678' ]

// mesclando com o array de documentos
const personsMap5 = persons.map((person, index) => {
    return {
        name : person.name,
        age : person.age,
        cpf : docs[index].cpf
    };
});

console.log('Exemplo com map 5', personsMap5);
// [ { name: 'Robson Oliveira', age: 33, cpf: '111.222.333-44' }, { name: 'Priscila Guedes Oliveira', age: 41, cpf: '222.333.444-55' }, { name: 'Luisa Guedes Oliveira', age: 4, cpf: '333.444.555-66' } ]