'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

const displayMovements = function (movements) {
  containerMovements.innerHTML = '';
  movements.forEach((mov, i) => {
    const type = mov > 0 ? 'deposit' : 'withdrawal';

    const html = `
    <div class="movements__row">
    <div class="movements__type movements__type--${type}">${i + 1}${type}</div>
    <div class="movements__value">${mov}</div>
  </div>
    `;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};
displayMovements(account1.movements);

const createUsername = function (accs) {
  accs.forEach(function(acc){
    acc.username = acc.owner
    .toLowerCase()
    .split(' ')
    .map(name => name[0])
    .join('');
  })

};


createUsername(accounts)

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////
// let arr = ['a','b','c','d','e']

// //create a shallow copy of an array
// console.log(arr.slice(2));
// //mutates the original array by deleting the position and count of delete
// console.log(arr.splice(1,2));

// //Reverse mutates the original array
// let arr2 = ['j','i','h','g','f']
// console.log(arr2);
// console.log(arr2.reverse());

// //Concat
// let arr1 = ['a','b','c','d','e']
// const letters = arr1.concat(arr2)
// console.log(letters);
// console.log(...arr1, ...arr2);

// const arr = [23,11,64]
// console.log(arr[0]);
// console.log(arr.at(0));

// //getting last array element
// console.log(arr[arr.length -1]);
// console.log(arr.slice(-1)[0]);
// console.log(arr.at(-1));

// //Coding challenge 1
// const julia1 = [3, 5, 2, 12, 7];
// const kate1 = [4, 1, 15, 8, 3];

// const julia2 = [9, 16, 6, 8, 3];
// const kate2 = [10, 5, 6, 1, 4];
// //1.
// const juliaCorrect = julia1.slice().splice(1,3)
// console.log(juliaCorrect);
// //2.
// const allData = juliaCorrect.concat(kate1)
// console.log(allData);

// //3.
// allData.forEach((data,i)=>{
//   if(data >= 3){
//     console.log(`Dog number ${i+1} is an adult, and is ${data} years old`);
//   }else{
//     console.log(`Dog number ${i+1} is still a puppy `);
//   }

// })
// //4
// juliaCorrect.forEach(data=>{
//   console.log("julia",data);
// })

// kate2.forEach(data=>{
//   console.log("kate0",data);
// })
// const eurToUsd = 1.1
// const movementsUSD = movements.map((mov) => mov * eurToUsd)
// console.log(movements);
// console.log(movementsUSD);

// const movementsDescriptions = movements.map((mov,i,arr)=>
//   `Movement ${i+1}: You ${mov > 0?'deposited':'withdrew'}${Math.abs(mov)}`
// )
// movementsDescriptions.forEach(data=>{
//   console.log(data);
// })
