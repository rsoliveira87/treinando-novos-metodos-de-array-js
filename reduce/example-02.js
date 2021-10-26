const numbers = [19, 8, 15, 28, 32, 14, 16, 33, 41, 30, 82, 56, 4, 23, 41, 65, 36, 21, 19]

// do array numbers quero retornar o maior valor

// fazendo o exemplo com for

let acc = 0;

for(const number of numbers) {
    if(number > acc) acc = number;
}

console.log(`O maior valor do array usando for é ${acc}`);

// fazendo o mesmo exemplo com reduce

const highValue = numbers.reduce((acc, curr) => curr > acc ? curr : acc, 0);

console.log(`O maior valor do array usando reduce é ${highValue}`);