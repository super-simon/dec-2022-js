// ВСЕ ЗРОБИТИ СТРІЛОЧНИМИ ФУНКЦІЯМИ!
// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
console.log(
  "створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б"
);
const rectangleArea = (a, b) => a * b;
console.log(rectangleArea(3, 4));

// - створити функцію яка обчислює та повертає площу кола з радіусом r
console.log(
  "створити функцію яка обчислює та повертає площу кола з радіусом r"
);
const circleArea = (r) => Math.PI * r * r;
console.log(circleArea(5));

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
console.log(
  "створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r"
);
const cylinderArea = (r, h) => 2 * Math.PI * r * h + 2 * Math.PI * r * r;
console.log(cylinderArea(3, 4));

// - створити функцію яка приймає масив та виводить кожен його елемент
console.log(
  "створити функцію яка приймає масив та виводить кожен його елемент"
);
const arr = [1, 3, "4", false, undefined, 6];
const arrayElements = (arr) => {
  for (const i of arr) {
    console.log(i);
  }
};
arrayElements(arr);

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
document.write(
  "<p>створити функцію яка створює параграф з текстом. Текст задати через аргумент</p>"
);
const createP = (text) => `<p>${text}</p>`;
document.write(createP("hello"));

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
document.write(
  "<p>створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий</p>"
);
const getLI = (text) => `<li>${text}</li>`;
const getTrippleUL = (text) =>
  "<ul>" + getLI(text) + getLI(text) + getLI(text) + "</ul>";
document.write(getTrippleUL("hello"));

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
document.write(
  "<p>створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)</p>"
);

const getUL = (text, n) => {
  let result = "<ul>";
  while (n > 0) {
    result += getLI(text);
    n--;
  }
  result += "</ul>";
  return result;
};
document.write(getUL("hello", 5));

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
document.write(
  "створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список"
);
const getArrUL = (arr) => {
  let result = "<ul>";
  for (const i of arr) {
    result += getLI(i);
  }
  result += "</ul>";
  return result;
};
document.write(getArrUL(arr));

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
const users = [
  {
    id: 1,
    name: "Sanja",
    age: 38,
  },
  {
    id: 2,
    name: "Viktor",
    age: "65",
  },
  {
    id: 3,
    name: "Olia",
    age: 36,
  },
];
document.write(
  "створити функцію яка приймає масив об'єктів з наступними полями id, name, age, та виводить їх в документ.Для кожного об'єкту окремий блок."
);
const getUser = (user) =>
  `<div>id: ${user.id} name: ${user.name} age: ${user.age}</div>`;
const getUsers = (users) => {
  for (const user of users) {
    document.write(getUser(user));
  }
};
getUsers(users);

// - створити функцію яка повертає найменьше число з масиву
console.log("створити функцію яка повертає найменьше число з масиву");
const numArr = [1, 32, 644, 2, -8, 3];
const getMin = (numArr) => {
  if (numArr.length === 0) {
    return undefined;
  }
  let min = numArr[0];
  for (const num of numArr) {
    if (num < min) {
      min = num;
    }
  }
  return min;
};
console.log(getMin(numArr));

// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13
console.log(
  "створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13"
);
const getSum = (arr, i) => {
  if (i === arr.length) {
    return 0;
  } else {
    return arr[i] + getSum(arr, ++i);
  }
};
console.log(getSum(numArr, 0));

// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]
console.log(
  "створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах"
);

const swap = (arr, index1, index2) => {
  const tmp = arr[index1];
  arr[index1] = arr[index2];
  arr[index2] = tmp;
  return arr;
};
console.log(numArr);
console.log(swap(numArr, 1, 2));

// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250
console.log(
  "Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)"
);
const currencyValues = [
  { currency: "USD", value: 40 },
  { currency: "EUR", value: 42 },
];
const exchange = (sumUAH, currencyValues, exchangeCurrency) => {
  let rate = 1;
  for (let currency of currencyValues) {
    if (currency.currency === exchangeCurrency) {
      rate = currency.value;
    }
  }
  return sumUAH / rate;
};
console.log(exchange(10000, currencyValues, "USD"));
