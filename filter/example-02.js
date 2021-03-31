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
];

// do array persons quero criar um novo array somente com os Guedes

// fazendo um exemplo com for
const personsFor = [];

for(const person of persons) {
    if(person.name.includes('Guedes')) {
        personsFor.push(person);
    }
}

console.log('Exemplo com for', personsFor);
// [ { name: 'Priscila Guedes Oliveira', age: 41, telphone: '99 98756 4321' }, { name: 'Luisa Guedes Oliveira', age: 4, telphone: '99 91234 5678' } ]

// fazendo o mesmo exemplo usando filter, por mais que a verificação seja no nome, o filter retorna o objeto inteiro e não apenas o nome
const personsFilter1 = persons.filter(person => person.name.includes('Guedes'));

console.log('Exemplo com filter 1', personsFilter1);
// [ { name: 'Priscila Guedes Oliveira', age: 41, telphone: '99 98756 4321' }, { name: 'Luisa Guedes Oliveira', age: 4, telphone: '99 91234 5678' } ]

// retornando apenas os que tem menos de 40 anos
const personsFilter2 = persons.filter(person => person.age < 40);

console.log('Exemplo com filter 2', personsFilter2);
// [ { name: 'Robson Oliveira', age: 33, telphone: '99 99999 9999' }, { name: 'Luisa Guedes Oliveira', age: 4, telphone: '99 91234 5678' } ]

// retornando apenas quem não tem Guedes no nome
const personsFilter3 = persons.filter(person => !person.name.includes('Guedes'));

console.log('Exemplo com filter 3', personsFilter3);
// [ { name: 'Robson Oliveira', age: 33, telphone: '99 99999 9999' } ]