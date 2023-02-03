// Масиви та об'єкти:
// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль

const arr = [1, 2, 3, "hello", 5, "6", "7", false, null, undefined];
console.log(
  arr[0],
  arr[1],
  arr[2],
  arr[3],
  arr[4],
  arr[5],
  arr[6],
  arr[7],
  arr[8],
  arr[9]
);

// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.

const book1 = {
  title: "Енеїда",
  pageCount: 300,
  genre: "Комедія",
};
const book2 = {
  title: "Катерина",
  pageCount: 50,
  genre: "Журба",
};
const book3 = {
  title: "Хіба ревуть воли як ясла повні",
  pageCount: 323,
  genre: "Фікшн",
};

console.log(book1, book2, book3);

// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - являється  масивом. Кожен автор має поля name та age.

const book4 = {
  title: "Алгоритми кожен день",
  pageCount: 300,
  genre: "Наука",
  authors: [
    {
      name: "Саня",
      age: 38,
    },
    { name: "Андрюха", age: 28 },
  ],
};
const book5 = {
  title: "Java Script та інші веселі пригоди програмістів",
  pageCount: 50,
  genre: "Комедія",
  authors: [
    {
      name: "Недоисаний Іван Степанович",
      age: 38,
    },
    { name: "Дописаний Степан Іванович", age: 28 },
  ],
};
const book6 = {
  title: "Патерни проектування в повсякденному житті",
  pageCount: 323,
  genre: "Журба",
  authors: [
    {
      name: "Прямий Василь Васильович",
      age: 38,
    },
    { name: "Кривий Василь Васильович", age: 28 },
  ],
};

console.log(book4, book5, book6);

// - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача

const tenUsers = [
  { name: "Олександр", username: "oleksandr", password: "123" },
  { name: "Степан", username: "stepan", password: "234" },
  { name: "Іван", username: "ivan", password: "456" },
  { name: "Андрій", username: "andriy", password: "567" },
  { name: "Сергій", username: "serhiy", password: "678" },
  { name: "Максим", username: "maksym", password: "789" },
  { name: "Володимир", username: "volodymyr", password: "910" },
  { name: "Ольга", username: "olha", password: "101" },
  { name: "Галина", username: "halyna", password: "112" },
  { name: "Катерина", username: "kateryna", password: "123" },
];

for (const user of tenUsers) {
  console.log(user.password);
}

// Логічні розгалуження:
// - Є змінна х, якій ви надаєте довільне числове значення.
// Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3

let x = -3;
if (x !== 0) {
  console.log("Вірно");
} else {
  console.log("Невірно");
}

// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).

const time = 14;
console.log((time + 15 - (time % 15)) / 15);

// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).

const day = 31;
if (day <= 10) {
  console.log(1);
} else if (day <= 20) {
  console.log(2);
} else {
  console.log(3);
}

// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).

const dayOfWeek = 7;
switch (dayOfWeek) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("Thursday");
    break;
  case 5:
    console.log("Friday");
    break;
  case 6:
    console.log("Saturday");
    break;
  case 7:
    console.log("Sunday");
    break;
}

// - Користувач вводить або має два числа.
// Потрібно знайти та вивести максимальне число з тих двох .
// Також потрібно врахувати коли введені рівні числа.

const x1 = 8,
  x2 = 8;

if (x1 > x2) {
  console.log(x1);
} else if (x1 < x2) {
  console.log(x2);
} else {
  console.log("They are equal.");
}

// - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
// за допомоги  оператора || буде присвоювати змінній х значення "default"  якщо значення змінної х являється falsy (хибноподібні, тобто приводиться до false)

x = NaN;
x = x || "default";
console.log(x);

// - з файлу arrays.js (лежить в папці 2023 plan ) взяти масив coursesAndDurationArray. За допомоги іф перевірити кожен його елемент на тривалість навчання.
// У випадку якщо тривалість довша за 5 місяців вивести в консоль "Супер".
for (course of coursesAndDurationArray) {
  if (course.monthDuration > 5) {
    console.log("Супер");
  }
}
