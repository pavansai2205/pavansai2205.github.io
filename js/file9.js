//arrays
// const score = [2, 1, 7, 5, 3];
// console.log(score);
// console.log(score[0]);
// score.push(9);
// console.log(score);
// console.log(score.length);
// const score1 = [7,8,9]
// const  newScore = [...score,...score1]
// console.log(newScore);
// const cart = {
//   1: 5,
//   5: 3,
// };
// const newCart = { ...cart, 2: 1 };
// console.log(newCart);

// let cart = {};
// const products = [
//     {id:1, name:"Product 1", price: 25},
//     {id:2, name:"Product 2", price: 50},
//     {id:3, name:"Product 3", price: 75},
// ];
//const newProducts = [...products,{id:4,name:"Product 4",price: 100}]
// console.log(products[0]);
// function addToCart(id) {
//     cart = {...cart,[id]:1};
// }

// addToCart(1);
// console.log(cart);
// addToCart(3);
// console.log(cart);

const score = [2, 1, 7, 5, 3];
// score.forEach((value)=>{
//     console.log(value);
// });

// score.map((value)=>{
//     console.log(value);
// });

// const newScore = score.map((value) => {
//   return value + 5;
// });
// console.log(newScore);

// const newScore = score.filter((value) => {
//   return value > 2;
// });
// console.log(newScore);


// const newScore = score.find((value) => {
//   return value > 2;
// });
// console.log(newScore);


// const newScore = score.reduce((sum,value) => sum + value,0);
// console.log(newScore);


const newScore = score.filter((value) => value === 2);
console.log(newScore);
