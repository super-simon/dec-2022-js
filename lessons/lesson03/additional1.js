// --створити масив з:
// - з 5 числових значень
let arrInt = [1, 2, 3, 4, 5];
console.log(arrInt);

// - з 5 стічкових значень
let arrStr = ["1", "2", "3", "4", "5"];
console.log(arrStr);

// - з 5 значень стрічкового, числового та булевого типу
let arr = [1, 2, "3", "4", true];
console.log(arr);

// - та вивести його в консоль

// -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль
let arr2 = [];
arr[0] = 1;
arr[1] = 2;
arr[2] = 3;
arr[3] = 4;
arr[4] = 5;

// - є масив [2,17,13,6,22,31,45,66,100,-18] :
let arr3 = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
// 1. перебрати його циклом while
console.log("1. перебрати його циклом while");
let i = 0;
while (i < arr3.length) {
  console.log(arr3[i]);
  i++;
}

// 2. перебрати його циклом for
console.log("2. перебрати його циклом for");
for (const item of arr3) {
  console.log(item);
}

// 3. перебрати циклом while та вивести  числа тільки з непарним індексом
console.log(
  "3. перебрати циклом while та вивести  числа тільки з непарним індексом"
);
i = 1;
while (i < arr3.length) {
  console.log(arr3[i]);
  i += 2;
}

// 4. перебрати циклом for та вивести  числа тільки з непарним індексом
console.log(
  "4. перебрати циклом for та вивести  числа тільки з непарним індексом"
);
for (i in arr3) {
  if (i % 2) {
    console.log(arr3[i]);
  }
}

// 5. перебрати циклом while та вивести  числа тільки парні  значення
console.log(
  "5. перебрати циклом while та вивести  числа тільки парні  значення"
);
i = 0;
while (i < arr3.length) {
  if (!(arr3[i] % 2)) {
    console.log(arr3[i]);
  }
  i++;
}

// 6. перебрати циклом for та вивести  числа тільки парні  значення
console.log("6. перебрати циклом for та вивести  числа тільки парні  значення");
for (i of arr3) {
  if (!(i % 2)) {
    console.log(i);
  }
}

// 7. замінити кожне число кратне 3 на слово "okten"
console.log('7. замінити кожне число кратне 3 на слово "okten"');
for (i in arr3) {
  if (!(arr3[i] % 3)) {
    arr3[i] = "okten";
  }
}
console.log(arr3);

// 8. вивести масив в зворотньому порядку.
console.log("8. вивести масив в зворотньому порядку.");
i = arr3.length - 1;
while (i >= 0) {
  console.log(arr3[i]);
  i--;
}

// 9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)
console.log(
  "9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)"
);

// - є масив [2,17,13,6,22,31,45,66,100,-18] :
arr3 = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
// 1. перебрати його циклом while
console.log("9.1. перебрати його циклом while");
i = arr3.length - 1;
while (i >= 0) {
  console.log(arr3[i]);
  i--;
}

// 2. перебрати його циклом for
console.log("9.2. перебрати його циклом for");
for (let i = arr3.length - 1; i >= 0; i--) {
  console.log(arr3[i]);
}

// 3. перебрати циклом while та вивести  числа тільки з непарним індексом
console.log(
  "9.3. перебрати циклом while та вивести  числа тільки з непарним індексом"
);
i = arr3.length - 1;
while (i >= 0) {
  console.log(arr3[i]);
  i -= 2;
}

// 4. перебрати циклом for та вивести  числа тільки з непарним індексом
console.log(
  "9.4. перебрати циклом for та вивести  числа тільки з непарним індексом"
);
for (let i = arr3.length - 1; i >= 0; i--) {
  if (i % 2) {
    console.log(arr3[i]);
  }
}

// 5. перебрати циклом while та вивести  числа тільки парні  значення
console.log(
  "9.5. перебрати циклом while та вивести  числа тільки парні  значення"
);
i = arr3.length - 1;
while (i >= 0) {
  if (!(arr3[i] % 2)) {
    console.log(arr3[i]);
  }
  i--;
}

// 6. перебрати циклом for та вивести  числа тільки парні  значення
console.log(
  "9.6. перебрати циклом for та вивести  числа тільки парні  значення"
);
for (let i = arr3.length - 1; i >= 0; i--) {
  if (!(arr3[i] % 2)) {
    console.log(arr3[i]);
  }
}

// 7. замінити кожне число кратне 3 на слово "okten"
console.log('9.7. замінити кожне число кратне 3 на слово "okten"');
for (let i = arr3.length - 1; i >= 0; i--) {
  if (!(arr3[i] % 3)) {
    arr3[i] = "okten";
  }
}
console.log(arr3);

// - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.
console.log(
  "Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі."
);
let arrInt2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (const i of arrInt2) {
  console.log(i);
}

// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.
console.log(
  "Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі."
);
let arrStr2 = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
for (const i of arrStr2) {
  console.log(i);
}

// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.
console.log(
  "Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі."
);
let arrAny = [1, "two", true, false, undefined, null, NaN, 8, "nine", -10];
for (const i of arrAny) {
  console.log(i);
}

let arr4 = [1, "two", true, false, undefined, null, NaN, 8, "nine", -10];
// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи
console.log("За допомогою if та typeof вивести тільки булеві елементи");
for (const item of arr4) {
  if (typeof item === "boolean") {
    console.log(item);
  }
}
// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи
console.log("За допомогою if та typeof вивести тільки числові елементи");
for (const item of arr4) {
  if (typeof item === "number") {
    console.log(item);
  }
}

// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи
console.log("За допомогою if та typeof вивести тільки рядкові елементи");
for (const item of arr4) {
  if (typeof item === "string") {
    console.log(item);
  }
}

// - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.
console.log(
  "Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі."
);
let arr5 = [];
arr5[0] = 0;
arr5[1] = "one";
arr5[2] = false;
arr5[3] = true;
arr5[4] = undefined;
arr5[5] = 5;
arr5[6] = "six";
arr5[7] = NaN;
arr5[8] = null;
arr5[9] = "nine";
for (const item of arr5) {
  console.log(item);
}

// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
console.log(
  "Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write"
);
document.write(
  "<h3>Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write</h3>"
);
for (let i = 0; i < 10; i++) {
  console.log(i);
  document.write(i);
}

// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
console.log(
  "Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write"
);
document.write(
  "<h3>Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write</h3>"
);
for (let i = 0; i < 100; i++) {
  console.log(i);
  document.write(i);
}

// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write
console.log(
  "Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write"
);
document.write(
  "<h3>Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write</h3>"
);
for (let i = 0; i < 100; i += 2) {
  console.log(i);
  document.write(i);
}

// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
console.log(
  "Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write"
);
document.write(
  "<h3>Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write</h3>"
);
for (let i = 0; i < 100; i++) {
  if (!(i % 2)) {
    console.log(i);
    document.write(i);
  }
}

// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write
console.log(
  "Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write"
);
document.write(
  "<h3>Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write</h3>"
);
for (let i = 0; i < 100; i++) {
  if (i % 2) {
    console.log(i);
    document.write(i);
  }
}

// стоврити масив книжок (назва, кількість сторінок, автори , жанри).
const books = [
  {
    title: "Енеїда",
    pageCount: 300,
    authors: ["Котляревський"],
    genres: ["Комедія"],
  },
  {
    title: "Катерина",
    pageCount: 50,
    authors: ["Шевченко"],
    genres: ["Журба"],
  },
  {
    title: "Хіба ревуть воли як ясла повні",
    pageCount: 323,
    authors: ["Мирний"],
    genres: ["Фікшн"],
  },
  {
    title: "Алгоритми кожен день",
    pageCount: 300,
    authors: ["Саня", "Андрюха"],
    genres: ["Наука", "Роздуми"],
  },
  {
    title: "Java Script та інші веселі пригоди програмістів",
    pageCount: 50,
    authors: ["Недописаний Іван Степанович", "Дописаний Степан Іванович"],
    genres: ["Комедія"],
  },
  {
    title: "Патерни проектування в повсякденному житті кота",
    pageCount: 323,
    authors: ["Прямий Василь Васильович", "Кривий Василь Васильович"],
    genres: ["Журба", "Наука"],
  },
];

// -знайти наібльшу книжку.
console.log("знайти наібльшу книжку.");
let maxPages = 0;
let maxPagesBook = undefined;
for (book of books) {
  if (book.pageCount > maxPages) {
    maxPages = book.pageCount;
    maxPagesBook = book;
  }
}
console.log(maxPagesBook);

// - знайти книжку/ки з найбільшою кількістю жанрів
console.log("знайти книжку/ки з найбільшою кількістю жанрів");
let maxGenres = 0;
let maxGenresBooks = [];
for (book of books) {
  if (book.genres.length > maxGenres) {
    maxGenres = book.genres.length;
    maxGenresBooks = [];
  }
  if (book.genres.length === maxGenres) {
    maxGenresBooks.push(book);
  }
}
console.log(maxGenresBooks);

// - знайти книжку/ки з найдовшою назвою
console.log("знайти книжку/ки з найдовшою назвою");
let maxTitle = 0;
let maxTitleBooks = [];
for (book of books) {
  if (book.title.length > maxTitle) {
    maxTitle = book.title.length;
    maxTitleBooks = [];
  }
  if (book.title.length === maxTitle) {
    maxTitleBooks.push(book);
  }
}
console.log(maxTitleBooks);

// - знайти книжку/ки які писали 2 автори
console.log("знайти книжку/ки які писали 2 автори");
let twoAuthorBooks = [];
for (book of books) {
  if (book.authors.length === 2) {
    twoAuthorBooks.push(book);
  }
}
console.log(twoAuthorBooks);

// - знайти книжку/ки які писав 1 автор
console.log("знайти книжку/ки які писав 1 автор");
let oneAuthorBooks = [];
for (book of books) {
  if (book.authors.length === 1) {
    oneAuthorBooks.push(book);
  }
}
console.log(oneAuthorBooks);
