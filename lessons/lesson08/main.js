// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)
console.log(
  `- Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone`
);
function User(id, name, surname, email, phone) {
  this.id = id;
  this.name = name;
  this.surname = surname;
  this.email = email;
  this.phone = phone;
}
console.log(User);
console.log(
  `створити пустий масив, наповнити його 10 об'єктами new User(....)`
);
const users = [];
users.push(
  new User(3, "Oleksandr", "Stetsiuk", "oleksandr@email.com", "+380123456780"),
  new User(2, "Taras", "Shevchenko", "taras@email.com", "+380123456781"),
  new User(1, "Lesia", "Ukrainka", "lesia@email.com", "+380123456782"),
  new User(4, "Ivan", "Franko", "ivan@email.com", "+380123456783"),
  new User(8, "Hryhoriy", "Skovoroda", "hryhoriy@email.com", "+380123456784"),
  new User(
    5,
    "Ivan",
    "Kotliarevskiy",
    "kotliarevskiy@email.com",
    "+380123456785"
  ),
  new User(7, "Ostap", "Vyshnia", "ostap@email.com", "+380123456786"),
  new User(6, "Les", "Podervianskiy", "les@email.com", "+380123456787"),
  new User(9, "Lina", "Kostenko", "lina@email.com", "+380123456788"),
  new User(10, "Pavlo", "Tychyna", "pavlo@email.com", "+380123456789")
);
console.log(users);

// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
console.log(
  `Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)`
);
const evenUsers = users.filter((user) => !(user.id % 2));
console.log(evenUsers);

// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
console.log(
  `Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)`
);
const sortedUsers = users.sort(({ id }, { id: id2 }) => id - id2);
console.log(sortedUsers);

// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
console.log(
  `створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)`
);
class Client {
  constructor(id, name, surname, email, phone, order) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
    this.order = order;
  }
}
console.log(Client);

// створити пустий масив, наповнити його 10 об'єктами Client
console.log(`створити пустий масив, наповнити його 10 об'єктами Client`);
const clients = [];
clients.push(
  new Client(
    1,
    "Solomiya",
    "Krushelnytska",
    "solomiya@emainl.com",
    "+380991234560",
    ["dress", "water"]
  ),
  new Client(3, "Tarash", "Chubai", "taras.c@emainl.com", "+380991234561", [
    ["guitar", "paper"],
  ]),
  new Client(2, "Mykola", "Lysenko", "mykola@emainl.com", "+380991234562", [
    "pants",
    "pen",
    "horse",
  ]),
  new Client(
    4,
    "Volodymyr",
    "Ivasiuk",
    "volodymyr.i@emainl.com",
    "+380991234563",
    ["shirt", "apple"]
  ),
  new Client(
    5,
    "Mykola",
    "Leontovych",
    "mykola.l@emainl.com",
    "+380991234564",
    ["egg"]
  ),
  new Client(6, "Ivan", "Kozlovsky", "ivan.k@emainl.com", "+380991234565", [
    "pencil",
    "water",
  ]),
  new Client(7, "Ivo", "Bobul", "ivo@emainl.com", "+380991234566", [
    "vse zoloto svitu",
  ]),
  new Client(8, "Oleh", "Skrypka", "oleh.s@emainl.com", "+380991234567", [
    "guitar",
    "mic",
  ]),
  new Client(
    9,
    "Serhiy",
    "Kuzminskiy",
    "serhiy.k@emainl.com",
    "+380991234568",
    [
      "verhovyna",
      "verhovyna",
      "verhovyna",
      "verhovyna",
      "verhovyna",
      "verhovyna",
      "verhovyna",
      "verhovyna",
      "verhovyna",
      "verhovyna",
      "verhovyna",
      "verhovyna",
      "verhovyna",
      "verhovyna",
      "verhovyna",
      "verhovyna",
      "verhovyna",
      "verhovyna",
      "verhovyna",
      "verhovyna",
      "verhovyna",
      "verhovyna",
      "verhovyna",
      "verhovyna",
      "verhovyna",
      "verhovyna",
      "verhovyna",
      "verhovyna",
      "verhovyna",
      "verhovyna",
      "verhovyna",
      "verhovyna",
      "verhovyna",
      "verhovyna",
      "verhovyna",
      "verhovyna",
      "verhovyna",
      "verhovyna",
      "verhovyna",
      "verhovyna",
    ]
  ),
  new Client(10, "Stepan", "Hiha", "hiha@emainl.com", "+380991234569", [
    "hypnotic drug",
  ])
);
console.log(clients);

// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
console.log(
  `Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)`
);
const sortedClients = clients.sort((c1, c2) => {
  return c1.order.length - c2.order.length;
});
console.log(sortedClients);

// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
//     -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
//     -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
//     -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
//     -- changeYear (newValue) - змінює рік випуску на значення newValue
//     -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
console.log(
  `Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:`
);
function Car(model, manufacturer, year, maxSpeed, engineVolume) {
  this.model = model;
  this.manufacturer = manufacturer;
  this.year = year;
  this.maxSpeed = maxSpeed;
  this.engineVolume = engineVolume;
  this.drive = function () {
    console.log(`їдемо зі швидкістю ${maxSpeed} на годину`);
  };
  this.info = function () {
    for (const i in this) {
      if (Object.hasOwn(this, i) && typeof this[i] !== "function") {
        if (typeof this[i] === "object") {
          console.log(this[i]);
        } else {
          console.log(`${i} - ${this[i]}`);
        }
      }
    }
  };
  this.increaseMaxSpeed = function (newSpeed) {
    this.maxSpeed += newSpeed;
  };
  this.changeYear = function (newYear) {
    this.year = newYear;
  };
  this.addDriver = function (driver) {
    this.driver = driver;
  };
}
const greenCar = new Car("Focus", "Ford", 2016, 170, 2);
greenCar.drive();
greenCar.info();
greenCar.increaseMaxSpeed(20);
greenCar.changeYear(2017);
greenCar.addDriver({ name: "Oleksandr", year: 1984 });
greenCar.info();

// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
//     -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
//     -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
//     -- changeYear (newValue) - змінює рік випуску на значення newValue
//     -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
console.log(`(Те саме, тільки через клас)`);
class ClassCar {
  constructor(model, manufacturer, year, maxSpeed, engineVolume) {
    this.model = model;
    this.manufacturer = manufacturer;
    this.year = year;
    this.maxSpeed = maxSpeed;
    this.engineVolume = engineVolume;
  }

  drive = function () {
    console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`);
  };
  info = function () {
    for (const i in this) {
      if (Object.hasOwn(this, i) && typeof this[i] !== "function") {
        if (typeof this[i] === "object") {
          console.log(this[i]);
        } else {
          console.log(`${i} - ${this[i]}`);
        }
      }
    }
  };
  increaseMaxSpeed = function (newSpeed) {
    this.maxSpeed += newSpeed;
  };
  changeYear = function (newYear) {
    this.year = newYear;
  };
  addDriver = function (driver) {
    this.driver = driver;
  };
}
const yellowCar = new ClassCar("Focus", "Ford", 2016, 170, 2);
yellowCar.drive();
yellowCar.info();
yellowCar.increaseMaxSpeed(20);
yellowCar.changeYear(2017);
yellowCar.addDriver({ name: "Oleksandr", year: 1984 });
yellowCar.info();

// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
console.log(
  `створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.`
);
function Cinderella(name, age, footSize) {
  this.name = name;
  this.age = age;
  this.footSize = footSize;
}
const cinderellas = [
  new Cinderella("Kateryna", 20, 7),
  new Cinderella("Oksana", 19, 6.8),
  new Cinderella("Yuliia", 23, 6),
  new Cinderella("Mariia", 21, 7.5),
  new Cinderella("Ivanna", 18, 8),
  new Cinderella("Sofiia", 24, 8.5),
  new Cinderella("Anastasiia", 22, 8),
  new Cinderella("Daria", 19, 6.5),
  new Cinderella("Larysa", 22, 9.5),
  new Cinderella("Iryna", 20, 8),
];
console.log(cinderellas);

console.log(
  `Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.`
);
class Prince {
  constructor(name, age, shoeSize) {
    this.name = name;
    this.age = age;
    this.shoeSize = shoeSize;
  }
}
const thePrince = new Prince("Oleksandr", 38, 8);
console.log(thePrince);

// За допомоги циклу знайти яка попелюшка повинна бути з принцом.
console.log(`За допомоги циклу знайти яка попелюшка повинна бути з принцом.`);
for (const cinderella of cinderellas) {
  if (thePrince.shoeSize === cinderella.footSize) {
    console.log(cinderella);
    break;
  }
}

// Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку
console.log(
  `Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку`
);
const theCinderella = cinderellas.find(
  ({ footSize }) => footSize === thePrince.shoeSize
);
console.log(theCinderella);
