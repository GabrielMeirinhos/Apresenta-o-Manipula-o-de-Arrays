var pilots = [ 
  { 
    id: 10, 
    nome: "Poe Dameron", 
    anos: 14, 
  }, 
  { 
    id: 2, 
    nome: "Temmin 'Snap' Wexley", 
    anos: 30, 
  }, 
  { 
    id: 41, 
    nome: "Tallissan Lintra", 
    anos: 16, 
  }, 
  { 
    id: 99, 
    nome: "Ello Asty", 
    anos: 22, 
  } 
];

// Modo 1: Usando função tradicional
var totalYearsArrow = pilots.reduce(function (acumulador, piloto) { 
  return acumulador + piloto.anos; 
}, 0);


// // Modo 2: Usando arrow function
// var totalYearsArrow = pilots.reduce((acumulador, piloto) => acumulador + piloto.anos, 0);

console.log("Total de anos (arrow function):", totalYearsArrow);

// const matriz = [[1, 2], [3, 4], [5, 6]];

// // Somando todos os números de todos os arrays internos
// const somaTotal = matriz.reduce((acc, array) => acc + array.reduce((acc2, num) => acc2 + num, 0), 0);

// console.log(somaTotal); 
// // Resultado: 21