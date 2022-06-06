"use strict";

let input = document.getElementById("input");
let btn = document.getElementById("btn-get-result");
let result = document.getElementById("result");

let arrOfNum = [];
let smol1;
let smol2;

btn.addEventListener("click", function () {
  result.innerHTML = calc(input.value);
});

function calc(str) {
  //исключаю пустую строку
  if (str === "") {
    return "Введите хоть что-то";
  }

  //проверяю, чтобы было задано больше одного элемента
  if (str.length === 1) return "Введите минимум два числа";

  let arr = str.split(",");

  // проверяю, всё ли из введённого -- числа через запятую
  for (let i = 0; i < arr.length; i++) {
    if (!isFinite(arr[i])) {
      return "Введите числа через запятую";
    }
  }
  // делаю содержимое массива числами
  arrOfNum = arr.map((e) => +e);

  //сортирую массив по возрастанию, чтобы получить два самых маленьких числа
  arrOfNum.sort((a, b) => a - b);
  return arrOfNum[0] + arrOfNum[1];
}

//TEST
function test(inp, out) {
  const result = calc(inp);
  if (result === out) {
    console.log(`${inp}, ${out}, "Исправно"`);
  } else {
    console.log(`${inp}, ${out} "Неисправно"`);
  }
}

test("0,1,2,3", 1);
test("5, 4, 6, 2", 6);
test("-2, 1,-3", -5);
test("", "Введите хоть что-то");
test("ghbdtn", "Введите числа через запятую");
