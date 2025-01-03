// неяявное преобразование - за счёт строки; если + все остальные элементы становятся строкой
const result = "10" + 10
console.log (result);

// при остальных операциях они становятся числами:
const resalt = "15" - 10 
console.log (resalt);
// true = 1, false = 0;

// Явное преобразование
String(10) // "10"
String(10, 12, 14) // "10"
String([1,2,3,4]) // массив, получаем "1,2,3,4"
String({key: 123}) // "object object" Строка не переводи объект в строку нормально

// если буль = 0, "", null, undefined, NaN - будет false, всё остальное true
Boolean()
const resylt = Boolean (12);
console.log(resylt);

Number("123"); // 123
Number("12,34"); // NaN из-за запятой
Number(""); //0
Number(              123             ); // 123
Number(function(){}) // NaN
Number([]) // 0
Number([1,3,4,6]) // NaN из-за запятой
Number({}) // объекты NaN

// через унарный плюс:
+"10" //10
+true //1

// оставить только целое число
const re = parseInt("12331.12313");
const re1 = parseFloat ("1231.123123") // сохранит всё число, с остатком
console.log(re);

let a = "10"
let b = true
// либо
a=Number(a)
b=Number(b)
// либо:
const resuult = +a + +b
console.log(resuult)