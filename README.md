# Apresenta-o-Manipula-o-de-Arrays
Aplicação web interativa que demonstra o uso de map, filter e reduce em JavaScript para manipulação de arrays. Permite filtrar produtos por preço, aplicar descontos automaticamente e calcular o valor total. Ideal para aprender conceitos de programação funcional e manipulação de dados com JavaScript.
# Projeto: Separação de Pilotos por Facção

Este projeto é um exemplo de código que demonstra como utilizar o método `filter()` em JavaScript para separar objetos de um array com base em uma propriedade específica. No caso deste projeto, os objetos representam pilotos que pertencem a duas facções: **Rebeldes** e **Império**. O código divide os pilotos em dois arrays distintos de acordo com a facção.

## Funcionalidades

- Separação de pilotos de acordo com sua facção (Rebeldes ou Império).
- Uso de funções `filter()` e **arrow functions** em JavaScript para filtrar os dados.
  
## Estrutura do Projeto

O projeto consiste em um único arquivo JavaScript com a seguinte estrutura:

```javascript
var pilots = [
  {
    id: 2,
    nome: "Wedge Antilles",
    facção: "Rebeldes",
  },
  {
    id: 8,
    nome: "Ciena Ree",
    facção: "Império",
  },
  {
    id: 40,
    nome: "Iden Versio",
    facção: "Império",
  },
  {
    id: 66,
    nome: "Thane Kyrell",
    facção: "Rebeldes",
  }
];

// Separando pilotos rebeldes
var rebeldes = pilots.filter(function (piloto) {
  return piloto.facção === "Rebeldes";
});

// Separando pilotos imperiais
var imperio = pilots.filter(function (piloto) {
  return piloto.facção === "Império";
});

// Exibindo os resultados no console
console.log("Rebeldes:", rebeldes);
console.log("Império:", imperio);
