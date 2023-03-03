// - створити блок,
const div = document.createElement("div");
div.innerText = "Hello!";
// - додати йому класи wrap, collapse, alpha, beta
div.classList.add("collapse", "alpha", "beta");
// - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
div.style.backgroundColor = "yellow";
div.style.color = "darkblue";
div.style.fontSize = "1.5rem";
// - додати цей блок в body.
document.body.appendChild(div);
// - клонувати його повністю, та додати клон в body.
const divClone = div.cloneNode(true);
document.body.appendChild(divClone);

// - Є масив:
// ['Main','Products','About us','Contacts']
// Зробити ul в середині якої будуть лежати елементи масиву (кожен в своєму li)
const arr = ["Main", "Products", "About us", "Contacts"];
const ul = document.createElement("ul");
for (const el of arr) {
  const li = document.createElement("li");
  li.innerText = el;
  ul.appendChild(li);
}
document.body.append(ul);

// - Є масив
// let coursesAndDurationArray = [
//   { title: "JavaScript Complex", monthDuration: 5 },
//   { title: "Java Complex", monthDuration: 6 },
//   { title: "Python Complex", monthDuration: 6 },
//   { title: "QA Complex", monthDuration: 4 },
//   { title: "FullStack", monthDuration: 7 },
//   { title: "Frontend", monthDuration: 4 },
// ];
// Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
// Завдання робити через цикли.
let containerEl = document.createElement("div");
containerEl.classList.add("container");

for (const el of coursesAndDurationArray) {
  const div = document.createElement("div");
  div.classList.add("item");
  const title = document.createElement("div");
  title.innerText = el.title;
  const monthDuration = document.createElement("div");
  monthDuration.innerText = el.monthDuration;
  div.append(title, monthDuration);
  containerEl.appendChild(div);
}

document.body.appendChild(containerEl);

// =========================

// - Є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];

// За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,  в якому буде <h1 class='heading'>  з title  елементу, та <p class='description'> з monthDuration елементу.
// Завдання робити через цикли.

// Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
// Завдання робити через цикли.
containerEl = containerEl.cloneNode();

for (const el of coursesAndDurationArray) {
  const div = document.createElement("div");
  div.classList.add("item");

  const title = document.createElement("h1");
  title.classList.add("heading");
  title.innerText = el.title;

  const monthDuration = document.createElement("p");
  monthDuration.classList.add("description");
  monthDuration.innerText = el.monthDuration;

  div.append(title, monthDuration);
  containerEl.appendChild(div);
}
document.body.appendChild(containerEl);

// ==========================

// - є масив simpsons, котрий лежить в arrays.js (на цей момент ви вже знаєте де він знаходиться)
// Проітерувати його, створиши для кожного об'єкту  масиву <div class='member'> та наповнити його данними з об'єкту.
// Якщо людською мовою: під кожного члена родини зробити блок та наповнити його інформацією з цього об'єкту
containerEl = containerEl.cloneNode();

for (const el of simpsons) {
  const divEl = document.createElement("div");
  divEl.classList.add("member");

  const imgEl = document.createElement("img");
  imgEl.setAttribute("src", el.photo);
  const nameEl = document.createElement("h2");
  nameEl.innerText = el.name + " " + el.surname + ", " + el.age;
  const infoEl = document.createElement("p");
  infoEl.innerText = el.info;

  divEl.append(imgEl, nameEl, infoEl);
  containerEl.appendChild(divEl);
}
document.body.appendChild(containerEl);

// =========================
// Цикл в циклі
// - Є масив coursesArray котрий лежить в arrays.js (на цей момент ви вже знаєте де він знаходиться)

// Створити для кожного елементу масиву свій блок, блок розділити блоками, в яких будуть зберігатись значення окремих властивостей, для властивості modules зробити список з елементами
// Приклад структири знаходиться у файлі example.png який лежить в папці з поточним фйлом
// ------------------
containerEl = containerEl.cloneNode();

for (const course of coursesArray) {
  const courseEl = document.createElement("div");
  courseEl.classList.add("item");

  const titleEl = document.createElement("h2");
  titleEl.innerText = course.title;

  const durationEl = document.createElement("p");

  const monthDurationEl = document.createElement("span");
  monthDurationEl.classList.add("duration");
  monthDurationEl.innerText = "Months: " + course.monthDuration;

  const hourDurationEl = document.createElement("span");
  hourDurationEl.classList.add("duration");
  hourDurationEl.innerText = "Hours: " + course.hourDuration;

  durationEl.append(monthDurationEl, hourDurationEl);

  const modulesEl = document.createElement("ul");
  for (const module of course.modules) {
    const moduleEl = document.createElement("li");
    moduleEl.innerText = module;
    modulesEl.appendChild(moduleEl);
  }

  courseEl.append(titleEl, durationEl, modulesEl);
  containerEl.appendChild(courseEl);
}
document.body.appendChild(containerEl);

// - Створити довільний елемент з id = text та створити кнопку.Використовуючи JavaScript, зробіть так, щоб при натисканні на кнопку зникав елемент з id="text".
const textEl = document.createElement("p");
textEl.setAttribute("id", "text");
textEl.innerText = "Text Element";
const deleteTextElButton = document.createElement("button");
deleteTextElButton.innerHTML = "Delete text element";
document.body.append(textEl, deleteTextElButton);

deleteTextElButton.onclick = function () {
  document.getElementById("text").remove();
};

// - створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача
const inputEl = document.createElement("input");
inputEl.setAttribute("placeholder", "Your Age");
inputEl.setAttribute("type", "number");
const messageDiv = document.createElement("div");
const checkAgeButton = document.createElement("button");
checkAgeButton.innerHTML = "Check age";

document.body.append(
  document.createElement("br"),
  inputEl,
  messageDiv,
  checkAgeButton
);

checkAgeButton.onclick = function () {
  const message =
    +inputEl.value < 18
      ? "<p>Тобі меньше ніж 18</p>"
      : "<p>Тобі 18 або більше</p>";
  messageDiv.innerHTML = message;
};

// *** Створити 3 інпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
// При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// (Додатковачастина для завдання)

const inputEl1 = document.createElement("input");
inputEl1.setAttribute("type", "number");
inputEl1.setAttribute("placeholder", "Rows");
const inputEl2 = document.createElement("input");
inputEl2.setAttribute("type", "number");
inputEl2.setAttribute("placeholder", "Cols");
const inputEl3 = document.createElement("input");
inputEl3.setAttribute("placeholder", "Content");
const createTableButton = document.createElement("button");
createTableButton.innerHTML = "Create Table";

document.body.append(
  document.createElement("br"),
  inputEl1,
  inputEl2,
  inputEl3,
  createTableButton
);

containerEl = containerEl.cloneNode();

createTableButton.onclick = function () {
  const tableEl = document.createElement("table");
  tableEl.setAttribute("id", "table");
  for (let i = 0; i < +inputEl1.value; i++) {
    const rowEl = document.createElement("tr");
    for (let i = 0; i < +inputEl2.value; i++) {
      const cellEl = document.createElement("td");
      cellEl.innerText = inputEl3.value;
      rowEl.appendChild(cellEl);
    }
    tableEl.appendChild(rowEl);
  }

  containerEl.innerHTML = "";
  containerEl.appendChild(tableEl );
};
document.body.appendChild(containerEl);
