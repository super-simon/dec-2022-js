// Стоврити форму з трьома полями для name,sruname,age та кнопкою. При натисканні на кнопку зчитати данні з полів, та вивести об'єкт в документ. Іншими словами : заповниои форму, натиснули кнопку, під формою з'явився блок з вашим об'єктом
const userDataForm = document.getElementById("user-data-form");
userDataForm.addEventListener("submit", function (eo) {
  eo.preventDefault();
  const formData = JSON.stringify(
    Object.fromEntries(new FormData(this).entries())
  );
  const formDataOutput = document.getElementById("form-data-output");
  formDataOutput.innerText = formData;
});

// ==========================
// є сторінка, на якій є блок, я кому знаходиьтся цифра. написати код, який при кожному перезавантажені сторінки буде додавати до неї +1
let number = localStorage.getItem("number") ?? 0;
number = +number + 1;
localStorage.setItem("number", number);
const numberSection = document.getElementById("number");
numberSection.innerText = number;

// ==========================
// Є сторінка index.html (назва довільна), при відвідуванні якої в локальне сховще, в масив sessions зберігається інформація про дату та час відвідування сторінки. Є ще сторінка sessions.html (назва довільна), при відвідуванні якої потрібно відмалювати всю інформацію про відвідування сторінки index.html. Інфу НЕ виводити в консоль, а побудувати дом структуру під кожну сессію
let sessions = JSON.parse(localStorage.getItem("sessions")) ?? [];
sessions.push(new Date());
localStorage.setItem("sessions", JSON.stringify(sessions));

// =========================
// зробити масив на 100 об'єктів та дві кнопки prev next
// при завантажені сторінки з'являються перші 10 об'єктів.
// При натисканні next виводяться настпні 10 об'єктів
// При натисканні prev виводяться попередні 10 об'єктів
const arr = [];
for (i = 1; i <= 85; i++) {
  arr.push(i);
}
let page = 1;
const prevButton = document.getElementById("prev");
const nextButton = document.getElementById("next");

function showItems(arr, page) {
  const itemsEl = document.getElementById("items");
  itemsEl.innerHTML = "";
  for (i = (page - 1) * 10; i < page * 10; i++) {
    if (i > arr.length - 1) {
      break;
    }
    const item = document.createElement("div");
    item.innerText = arr[i];
    itemsEl.appendChild(item);
  }
}

function prepareButtons(arr, page) {
  prevButton.disabled = page === 1;
  nextButton.disabled = page === Math.ceil(arr.length / 10);
}

showItems(arr, 1);
prepareButtons(arr, 1);

prevButton.addEventListener("click", function () {
  page--;
  showItems(arr, page);
  prepareButtons(arr, page);
});

nextButton.addEventListener("click", function () {
  page++;
  showItems(arr, page);
  prepareButtons(arr, page);
});

// *** Створити 3 інпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
// При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// (Додатковачастина для завдання)
// Виконано в домашці дев'ятого уроку.
