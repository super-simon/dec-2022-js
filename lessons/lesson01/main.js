// - Створити змінні. Присвоїти кожному з них значення: 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false.

let var01 = "hello";
let var02 = "owu";
let var03 = "com";
let var04 = "ua";
let var05 = 1;
let var06 = 10;
let var07 = -999;
let var08 = 123;
let var09 = 3.14;
let var10 = 2.7;
let var11 = 16;
let var12 = true;
let var13 = false;

// Вивести кожну змінну за допомогою: console.log

console.log(var01);
console.log(var02);
console.log(var03);
console.log(var04);
console.log(var05);
console.log(var06);
console.log(var07);
console.log(var08);
console.log(var09);
console.log(var10);
console.log(var11);
console.log(var12);
console.log(var13);

// - Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ. З'єднати їх в одну змінну person (Не об'єкт, просто за допомоги конкатенації)

let firstName = "Oleksandr",
  middleName = "Viktorovych",
  lastName = "Stetsiuk";

let person = firstName + " " + middleName + " " + lastName;

console.log(person);

// - За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.
//   let a = 100; let b = '100'; let c = true;

let a = 100;
let b = "100";
let c = true;

console.log(typeof a, typeof b, typeof c);

// Додаткове для тих хто цікавився prompt`oм
// - За допомогою 3х різних prompt() отримати 3 слова які являються вашими Імям, По-Батькові та роками. та вивести в консоль

firstName = prompt("Enter your first name");
middleName = prompt("Enter your middle name");
lastName = prompt("Enter your last name");

console.log(firstName, middleName, lastName);
