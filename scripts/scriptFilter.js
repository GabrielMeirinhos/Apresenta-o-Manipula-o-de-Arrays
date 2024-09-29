var pilots = [
  {
    id: 2,
    nome: "Wedge Antilles",
    faccao: "Rebeldes",
  },
  {
    id: 8,
    nome: "Ciena Ree",
    faccao: "Império",
  },
  {
    id: 40,
    nome: "Iden Versio",
    faccao: "Império",
  },
  {
    id: 66,
    nome: "Thane Kyrell",
    faccao: "Rebeldes",
  }
];

// Utilizando a função filter para separar os pilotos por facção
var rebeldes = pilots.filter(function (piloto) {
  return piloto.faccao === "Rebeldes";
});

var imperio = pilots.filter(function (piloto) {
  return piloto.faccao === "Império";
});

// OU com arrow functions
// const rebeldesArrow = pilots.filter(piloto => piloto.faccao === "Rebeldes");
// const imperioArrow = pilots.filter(piloto => piloto.faccao === "Império");

console.log("Rebeldes:", rebeldes);
console.log("Império:", imperio);

// const matriz = [[1, 2], [3, 4], [5, 6]];

// // Filtrando os arrays internos que têm a soma maior que 5
// const matrizFiltrada = matriz.filter(array => array.reduce((acc, num) => acc + num, 0) > 5);

// console.log(matrizFiltrada); 
// // Resultado: [[3, 4], [5, 6]]