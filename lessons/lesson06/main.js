// - Знайти та вивести довижину настипних стрінгових значень
//     'hello world', 'lorem ipsum', 'javascript is cool'
console.log("Знайти та вивести довижину настипних стрінгових значень");
console.log(
  "hello world".length,
  "lorem ipsum".length,
  "javascript is cool".length
);

// - Перевести до великого регістру наступні стрінгові значення
//       'hello world', 'lorem ipsum', 'javascript is cool'
console.log("Перевести до великого регістру наступні стрінгові значення");
console.log(
  "hello world".toUpperCase(),
  "lorem ipsum".toUpperCase(),
  "javascript is cool".toUpperCase()
);

// - Перевести до нижнього регістру настипні стрінгові значення
//       'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
console.log("Перевести до нижнього регістру настипні стрінгові значення");
console.log(
  "HELLO WORLD".toLowerCase(),
  "LOREM IPSUM".toLowerCase(),
  "JAVASCRIPT IS COOL".toLowerCase()
);

// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
console.log(
  `Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.`
);
console.log(" dirty string   ".replaceAll(" ", ""));

// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Ревуть воли як ясла повні';
//     let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']
console.log(
  "Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів."
);
stringToarray = (str) => str.split(" ");
console.log(stringToarray("Ревуть воли як ясла повні"));

// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map  перетворити всі об'єкти в масиві на стрінгові.
console.log(
  `є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map  перетворити всі об'єкти в масиві на стрінгові.`
);
console.log([10, 8, -7, 55, 987, -1011, 0, 1050, 0].map((n) => n + ""));

// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
// let nums = [11,21,3];
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]
console.log(
  "створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction."
);
const sortNums = (nums, direction) => {
  return nums.sort((a, b) => (direction === "ascending" ? a - b : b - a));
};
let nums = [11, 21, 3];
console.log(sortNums(nums, "ascending"));
console.log(sortNums(nums, "descending"));

// ==========================
// - є масив
// let coursesAndDurationArray = [
//   { title: "JavaScript Complex", monthDuration: 5 },
//   { title: "Java Complex", monthDuration: 6 },
//   { title: "Python Complex", monthDuration: 6 },
//   { title: "QA Complex", monthDuration: 4 },
//   { title: "FullStack", monthDuration: 7 },
//   { title: "Frontend", monthDuration: 4 },
// ];
//  -- відсортувати його за спаданням за monthDuration
//  -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
//  -- за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}
console.log("є масив");
console.log(coursesAndDurationArray);
console.log("відсортувати його за спаданням за monthDuration");
console.log(
  coursesAndDurationArray.sort((c1, c2) => c2.monthDuration - c1.monthDuration)
);
console.log(
  "відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців"
);
console.log(coursesAndDurationArray.filter((value) => value.monthDuration > 5));
console.log(
  "за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}"
);
console.log(
  coursesAndDurationArray.map((value, index) => {
    return { ...value, id: index + 1 };
  })
);

//  =========================
//  описати колоду карт (від 6 до туза без джокерів)
//  - знайти піковий туз
//  - всі шістки
//  - всі червоні карти
//  - всі буби
//  - всі трефи від 9 та більше

// {
//     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//     value: '', // '6'-'10', 'ace','jack','queen','king','joker'
//     color:'', // 'red','black'
// }
console.log("описати колоду карт (від 6 до туза без джокерів)");
cardValues = ["6", "7", "8", "9", "10", "jack", "queen", "king", "ace"];
cardSuits = ["spades", "diamonds", "hearts", "clubs"];
cards = [];
for (value of cardValues) {
  for (suit of cardSuits) {
    cards.push({
      value,
      suit,
      color: suit === "spades" || suit === "clubs" ? "black" : "red",
    });
  }
}
console.log(cards);
console.log("знайти піковий туз");
console.log(
  cards.find((card) => card.value === "ace" && card.suit === "spades")
);
console.log("всі шістки");
console.log(cards.filter((card) => card.value === "6"));
console.log("всі червоні карти");
console.log(cards.filter((card) => card.color === "red"));
console.log("всі буби");
console.log(cards.filter((card) => card.suit === "diamonds"));
console.log("всі трефи від 9 та більше");
console.log(
  cards.filter(
    (card) =>
      card.suit === "clubs" &&
      ["9", "10", "jack", "queen", "king", "ace"].includes(card.value)
  )
);

// =========================

// Взяти описану колоду карт, та за допомоги reduce упакувати всі карти по "мастях" в об'єкт
console.log(
  `Взяти описану колоду карт, та за допомоги reduce упакувати всі карти по "мастях" в об'єкт`
);
const deck = {
  spades: [],
  diamonds: [],
  hearts: [],
  clubs: [],
};
console.log(
  cards.reduce((deck, card) => {
    deck[card.suit].push(card);
    return deck;
  }, deck)
);

// =========================
// взяти з arrays.js (який лежить в папці 2023 plan) масив coursesArray
// --написати пошук всіх об'єктів, в який в modules є sass
// --написати пошук всіх об'єктів, в який в modules є docker
console.log(
  "взяти з arrays.js (який лежить в папці 2023 plan) масив coursesArray"
);
console.log(coursesArray);
console.log("написати пошук всіх об'єктів, в який в modules є sass");
console.log(coursesArray.filter((course) => course.modules.includes("sass")));
console.log("написати пошук всіх об'єктів, в який в modules є docker");
console.log(coursesArray.filter((course) => course.modules.includes("docker")));
