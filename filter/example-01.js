const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

// do array numbers quero criar um novo array somente dos números pares

// fazendo um exemplo com for

const evenFor = [];

for(const number of numbers) {
    if(number % 2 === 0) {
        evenFor.push(number);
    }
}

console.log('Exemplo com for 1', evenFor);
// [ 2,  4,  6,  8, 10, 12, 14, 16, 18, 20 ]

// fazendo o mesmo exemplo com filter
const evenFilter1 = numbers.filter(number => {
    if(number % 2 === 0) {
        return number;
    }
    return;
});

console.log('Exemplo com filter 1', evenFilter1);
// [ 2,  4,  6,  8, 10, 12, 14, 16, 18, 20 ]

// fazendo de uma forma mais reduzida
const evenFilter2 = numbers.filter(number => {
    return number % 2 === 0;
});

console.log('Exemplo com filter 2', evenFilter2);
// [ 2,  4,  6,  8, 10, 12, 14, 16, 18, 20 ]

// fazendo de uma forma ainda mais reduzida
const evenFilter3 = numbers.filter(number => number % 2 === 0);

console.log('Exemplo com filter 3', evenFilter3);
// [ 2,  4,  6,  8, 10, 12, 14, 16, 18, 20 ]

// para retornar os números ímpares basta alterar a condição
const odd = numbers.filter(number => number % 2 === 1);

console.log('Exemplo com filter 4', odd);
// [ 1,  3,  5,  7,  9, 11, 13, 15, 17, 19 ]

// retornar apenas os números maiores que 10
const filterNumbers = numbers.filter(number => number > 10);

console.log('Exemplo com filter 5', filterNumbers);
// [ 11, 12, 13, 14, 15, 16, 17, 18, 19, 20 ]