// // 1
// // Необходимо с помощью цикла for вывести следующие 11 строк в консоль:
// // 0 – это ноль
// // 1 – нечетное число
// // 2 – четное число
// // 3 – нечетное число
// // …
// // 10 – четное число

for (let i = 0; i <= 10; i++) {
  if (i == 0) {
    console.log(`${i} - это ноль`);
  } else if (i % 2 == 0) {
    console.log(`${i} - четное число`);
  } else {
    console.log(`${i} - нечетное число`);
  }
}

// Дан массив [1, 2, 3, 4, 5, 6, 7]
//Сделайте из этого массива следующий [1, 2, 3, 6, 7]

const arrayFirst = [1, 2, 3, 4, 5, 6, 7];
arrayFirst.splice(3, 2);
console.log(arrayFirst);

// // Используя Math.random() вам необходимо генерировать цифры от 0 до 9, и создать массив состоящий из 5 таких элементов
// // 1. Рассчитать сумму элементов этого массива
// // 2. Найти минимальное число
// // 3. Найти есть ли в этом массиве число 3

const GenerateArray = (length, max) =>
  [...new Array(length)].map(() => Math.round(Math.random() * max));

const arrayThird = GenerateArray(5, 9);

let summ = 0;
for (let i = 0; i < arrayThird.length; i++) {
  summ = summ + arrayThird[i];
}
let minNumber = 10;
for (let j = 0; j < arrayThird.length; j++) {
  if (arrayThird[j] < minNumber) {
    minNumber = arrayThird[j];
  }
}
let count = 0;
for (let index = 0; index < arrayThird.length; index++) {
  if (arrayThird[index] == 3) {
    count++;
  }
}
if (count > 0) {
  console.log("в массиве есть число 3");
} else {
  console.log("в массиве нет числа 3");
}
console.log(`сгенерированный массив: [${arrayThird}]`);
console.log(`сумма элементов = ${summ}`);
console.log(`минимальное число = ${minNumber}`);

// Необязательное задание.
// Необходимо вывести горку в консоль (используя цикл for), как показано на
// рисунке, только у вашей горки должно быть 20 рядов, а не 5:

// x
// xx
// xxx
// xxxx
// xxxxx

for (let x = 0; x < 20; x++) {
  let str = "";
  for (let y = 0; y <= x; y++) {
    str += "*";
  }
  console.log(str);
}
