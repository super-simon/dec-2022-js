// additional3;
// 1. Створити пустий масив та :
console.log("1. Створити пустий масив та");
let arr = [];
//        a. заповнити його 50 парними числами за допомоги циклу.
for (let i = 0; i < 50; i++) {
  arr[arr.length] = i * 2;
}

//        b. заповнити його 50 непарними числами за допомоги циклу.
for (let i = 0; i < 50; i++) {
  arr[arr.length] = i * 2 + 1;
}

//        c. Заповнити масив 20ма рандомними числами. (Google: Generate random number JS)
for (let i = 0; i < 20; i++) {
  arr[arr.length] = Math.random();
}

//        d. Заповнити масив 20ма рандомними чисалами в діапазоні від 8 до 732 (Google: Generate random number JS)
for (let i = 0; i < 20; i++) {
  arr[arr.length] = Math.random() * (732 - 8 + 1) + 8;
}

console.log(arr);

//  2. Вивести за допомогою console.log кожен третій елемен
console.log("2. Вивести за допомогою console.log кожен третій елемен");
for (let i = 0; i < arr.length; i += 3) {
  console.log(arr[i]);
}

//  3. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним.
console.log(
  "3. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним."
);
for (let i = 0; i < arr.length; i += 3) {
  if (!(arr[i] % 2)) {
    console.log(arr[i]);
  }
}

//  4. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним та записати їх в новий масив
console.log(
  "4. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним та записати їх в новий масив"
);
let arr2 = [];
for (let i = 0; i < arr.length; i += 3) {
  if (!(arr[i] % 2)) {
    console.log(arr[i]);
    arr2[arr2.length] = arr[i];
  }
}
console.log(arr2);

//  5. Вивести кожен елемент масиву, сусід справа якого є парним
//   EXAMPLE: [ 1, 2, 3, 5, 7, 9, 56, 8, 67 ] -> Має бути виведено 1, 9, 56
console.log("Вивести кожен елемент масиву, сусід справа якого є парним");
for (let i = 0; i < arr.length - 1; i += 3) {
  if (!(arr[i + 1] % 2)) {
    console.log(arr[i]);
  }
}

//  6. Є масив з числами [100,250,50,168,120,345,188], Які характеризують вартість окремої покупки. Обрахувати середній чек.
console.log(
  "6. Є масив з числами [100,250,50,168,120,345,188], Які характеризують вартість окремої покупки. Обрахувати середній чек."
);
let arr3 = [100, 250, 50, 168, 120, 345, 188];
let sum = 0;
for (const i of arr3) {
  sum += i;
}
console.log(sum / arr3.length);

//  7. Створити масив з рандомними значеннями, помножити всі його елементи на 5 та перемістити їх в інший масив.
console.log(
  "7. Створити масив з рандомними значеннями, помножити всі його елементи на 5 та перемістити їх в інший масив."
);
let arr4 = [],
  arr5 = [];
for (const i of [1, 2, 3, 4, 5]) {
  arr4.push(Math.random());
}
console.log(arr4);
// console.log(arr4);
while (arr4.length) {
  arr5.push(arr4.shift() * 5);
}
console.log(arr4);
console.log(arr5);

//  8. Створити масив з будь якими значеннями (стрінги, числа, і тд...). пройтись по ньому, і якщо елемент є числом - додати його в інший масив.
console.log(
  "8. Створити масив з будь якими значеннями (стрінги, числа, і тд...). пройтись по ньому, і якщо елемент є числом - додати його в інший масив."
);
let arr6 = [1, "two", true, false, undefined, null, NaN, 8, "nine", -10];
let arr7 = [];
for (const i of arr6) {
  if (typeof i === "number" && !isNaN(i)) {
    arr7.push(i);
  }
}
console.log(arr7);

// - Дано 2 масиви з рівною кількістю об'єктів.
// Масиви:
let usersWithId = [
  { id: 1, name: "vasya", age: 31, status: false },
  { id: 2, name: "petya", age: 30, status: true },
  { id: 3, name: "kolya", age: 29, status: true },
  { id: 4, name: "olya", age: 28, status: false },
];

let citiesWithId = [
  { user_id: 3, country: "USA", city: "Portland" },
  { user_id: 1, country: "Ukraine", city: "Ternopil" },
  { user_id: 2, country: "Poland", city: "Krakow" },
  { user_id: 4, country: "USA", city: "Miami" },
];

// З'єднати в один об'єкт користувача та місто з відповідними "id" та "user_id" .
// Записати цей об'єкт в новий масив
// Example:
// let usersWithCities = [
//     {
//         id: 1, // <===
//         name: 'vasya',
//         age: 31,
//         status: false,
//         address: {
//             user_id: 1, // <===
//             country: 'Ukraine',
//             city: 'Ternopil'
//         }
//     },
//     // TO BE CONTINUED .....
// ]
console.log(
  'З\'єднати в один об\'єкт користувача та місто з відповідними "id" та "user_id" .'
);
let usersWithCities = [];
for (const user of usersWithId) {
  for (const city of citiesWithId) {
    if (user.id === city.user_id) {
      user.address = city;
    }
  }
  usersWithCities.push(user);
}
console.log(usersWithCities);

// - Взяти масив з 10 чисел або створити його. Вивести в консоль тільки ті елементи, значення яких є парними.
console.log(
  "Взяти масив з 10 чисел або створити його. Вивести в консоль тільки ті елементи, значення яких є парними."
);
let arr8 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (const i of arr8) {
  if (!(i % 2)) {
    console.log(i);
  }
}

// - Взяти масив з 10 чисел або створити його. Створити 2й порожній масив. За допомогою будь-якого циклу скопіювати значення одного масиву в інший.
console.log(
  "Взяти масив з 10 чисел або створити його. Створити 2й порожній масив. За допомогою будь-якого циклу скопіювати значення одного масиву в інший."
);
let arr9 = [];
for (const i of arr8) {
  arr9[arr9.length] = i;
}
console.log(arr9);

// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for зібрати всі букви в слово.
console.log(
  "Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for зібрати всі букви в слово."
);
let arr10 = ["a", "b", "c"];
let word01 = "";
for (let i = 0; i < arr10.length; i++) {
  word01 += arr10[i];
}
console.log(word01);

// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу while зібрати всі букви в слово.
console.log(
  "Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу while зібрати всі букви в слово."
);
let word02 = "";
let i = 0;
while (i < arr10.length) {
  word02 += arr10[i];
  i++;
}
console.log(word02);

// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for of зібрати всі букви в слово.
let word03 = "";
console.log(
  "Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу while зібрати всі букви в слово."
);
for (const i of arr10) {
  word03 += i;
}
console.log(word03);
