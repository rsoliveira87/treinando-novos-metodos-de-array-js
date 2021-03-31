const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

// do array numbers quero retornar a soma de todos os números

// fazendo um exemplo com for

let count = 0;

for(const number of numbers) {
    count += number;
}

console.log('Exemplo com for', count);
// 210

// fazendo o mesmo exemplo usando reduce

const some = numbers.reduce((previous, current) => previous + current, 0);

console.log('Exemplo com reduce', some);

console.log('Debugando para entender o reduce');
const initialValue = 0;
const someWithReduce = numbers.reduce((previous, current) => {
    console.log('previous', previous);
    console.log('current', current);
    return previous + current;
}, initialValue);

console.log('Debugando para entender o reduce', someWithReduce);
/* 
previous 0
current 1
previous 1
current 2
previous 3
current 3
previous 6
current 4
previous 10
current 5
previous 15
current 6
previous 21
current 7
previous 28
current 8
previous 36
current 9
previous 45
current 10
previous 55
current 11
previous 66
current 12
previous 78
current 13
previous 91
current 14
previous 105
current 15
previous 120
current 16
previous 136
current 17
previous 153
current 18
previous 171
current 19
previous 190
current 20
Debugando para entender o reduce 210
*/

// retornar a média dos números
const mediaWithReduce = numbers.reduce((previous, current) => previous + current, initialValue) / numbers.length;

console.log('Exemplo com reduce 2', mediaWithReduce);
// 10.5