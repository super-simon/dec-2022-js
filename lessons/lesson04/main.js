// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
const a = 2,
  b = 4,
  r = 5,
  h = 6;

function rectangleSquare(a, b) {
  return a * b;
}
console.log(
  "створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б"
);
console.log(rectangleSquare(a, b));

// - створити функцію яка обчислює та повертає площу кола з радіусом r
function circleSquare(r) {
  return Math.PI * r * r;
}
console.log(
  "створити функцію яка обчислює та повертає площу кола з радіусом r"
);
console.log(circleSquare(r));

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
function cylinderSquare(r, h) {
  return 2 * Math.PI * r * h + 2 * Math.PI * r * r;
}
console.log(
  "створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r"
);
console.log(cylinderSquare(r, h));

const arr = ["asdf", "fdas", 3, false, undefined, 6];
// - створити функцію яка приймає масив та виводить кожен його елемент
function echoArray(arr) {
  for (const i of arr) {
    console.log(i);
  }
}
console.log(
  "створити функцію яка приймає масив та виводить кожен його елемент"
);
echoArray(arr);

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
function getP(text) {
  return `<p>${text}</p>`;
}
document.write(
  "<p>створити функцію яка створює параграф з текстом. Текст задати через аргумент</p>"
);
document.write(getP("hello"));

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
function getLI(text) {
  return `<li>${text}</li>`;
}
function getTrippleUL(text) {
  return "<ul>" + getLI(text) + getLI(text) + getLI(text) + "</ul>";
}
document.write(
  "<p>створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий</p>"
);
document.write(getTrippleUL("hello"));

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
function getUL(text, n) {
  let result = "<ul>";
  while (n > 0) {
    result += getLI(text);
    n--;
  }
  result += "</ul>";
  return result;
}
document.write(
  "<p>створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)</p>"
);
document.write(getUL("hello", 5));

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
function getArrUL(arr) {
  let result = "<ul>";
  for (const i of arr) {
    result += getLI(i);
  }
  result += "</ul>";
  return result;
}
document.write(
  "створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список"
);
document.write(getArrUL(arr));

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
// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
function getUser(user) {
  return `<div>id: ${user.id} name: ${user.name} age: ${user.age}</div>`;
}
function getUsers(users) {
  for (const user of users) {
    document.write(getUser(user));
  }
}
document.write(
  "створити функцію яка приймає масив об'єктів з наступними полями id, name, age, та виводить їх в документ.Для кожного об'єкту окремий блок."
);
getUsers(users);

// - створити функцію яка повертає найменьше число з масиву
const numArr = [1, 32, 644, 2, -8, 3];
function getMin(numArr) {
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
}
console.log("створити функцію яка повертає найменьше число з масиву");
console.log(getMin(numArr));

// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13
function getSum(arr) {
  let sum = 0;
  for (const num of arr) {
    sum += num;
  }
  return sum;
}
console.log(
  "створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13"
);
console.log(getSum(numArr));

// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]
function swap(arr, index1, index2) {
  const tmp = arr[index1];
  arr[index1] = arr[index2];
  arr[index2] = tmp;
  return arr;
}
console.log(
  "створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах"
);
console.log(numArr);
console.log(swap(numArr, 1, 2));

// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250
const currencyValues = [
  { currency: "USD", value: 40 },
  { currency: "EUR", value: 42 },
];
function exchange(sumUAH, currencyValues, exchangeCurrency) {
  let rate = 1;
  for (let currency of currencyValues) {
    if (currency.currency === exchangeCurrency) {
      rate = currency.value;
    }
  }
  return sumUAH / rate;
}
console.log(
  "Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)"
);
console.log(exchange(10000, currencyValues, "USD"));
