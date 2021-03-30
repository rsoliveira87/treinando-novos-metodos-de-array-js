const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

// do array numbers quero criar um novo array de números multiplicados por 2

// fazendo um exemplo com for

const doubleWithFor = [];

for(const number of numbers) {
    doubleWithFor.push(number * 2);
}

console.log('Exemplo com for', doubleWithFor);

// fazendo o mesmo usando map
const doubleWithMap = numbers.map(number => {
    return number * 2;    
})

console.log('Exemplo com map 1', doubleWithMap);

// não é necessário return, então posso fazer de uma forma ainda mais reduzida
const doubleWithMap2 = numbers.map(number => number * 2);

console.log('Exemplo com map 2', doubleWithMap2);

// Resultado esperado para todos os exemplos [2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,36,38,40]