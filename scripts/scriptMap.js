// O que você tem 
var officers = [ 
    { id: 20, name: 'Capitão Piett' }, 
    { id: 24, name: 'General Veers' }, 
    { id: 56, name: 'Almirante Ozzel' }, 
    { id: 88, name: 'Comandante Jerjerrod' } 
  ];
  // O que você precisa 
//   [20, 24, 56, 88]

// var officersIds = [];
// officers.forEach(função (oficial) { 
// //   officersIds.push(oficial.id); 
// // });

// var officersIds = officers.map(function (oficial) { 
//     return oficial.id 
//   });

// const officersIds = officers.map(oficial => oficial.id);

// console.log(officersIds)

const matriz = [[1, 2], [3, 4], [5, 6]];

// Somando 1 a cada elemento em cada array interno
const novaMatriz = matriz.map(array => array.map(num => num *0.03));

console.log(novaMatriz); 
// Resultado: [[2, 3], [4, 5], [6, 7]]
