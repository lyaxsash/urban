// (true) ? действие1 : действие2 - где действие1 - елси тру, и действие2 - если фолс

let num = 4
let result1 = null; // вводим переменную, в которой ничего нет
if (num > 10) {
  result1 = "num больше 10"; // вместо console.log ("Число больше 10")
}	else {
  result1 = "num меньше или равно 10";
} 
console.log(result1) // единожды выводим консоль

// тернарный оператор

// num > 10 
//   ? console.log ("Число больше 10") 
// 	: console.log ("Число меньше 10");
let pup = 65
const result2 = pup>10 ? "pup больше 10" : "pup меньше или равно 10"
console.log (result2)

let name = null
if (name) {
	console.log (`Hi ${name}`)
} else {
	console.log ("Hi, stranger")
}

// обычная функция
function sayHello (name) {
	if (name) { // name существует
		return `Привет ${name}`
	} else {
		return "Привет, незнакомец" 
	}
}
console.log(sayHello(null))

// тернарный оператор:
function sayHi(name1) {
	return name1? `Привет, ${name1}` : "Привет, незнакомец";
 }

console.log(sayHi("Boris"));

// ещё пример:
let io = 0.9
let pups = null
if (io > 10) {
	pups = "io больше 10"
} else if (io === 10 ){
	pups = "io равно 10"
} else {
	pups = "io меньше 10"
}

console.log(pups)

let ios = 11
const pups1 = 
  ios > 10  
	  ? "ios больше 10" 
		: ios === 10 
		? "ios равно 10" 
		: "ios меньше 10"
console.log(pups1)

// то же самое через вложенность в тернарном операторе:
let nu = 7
let result5 = nu >= 10 ? (nu === 10 ? "nu равно 10" : "nu больше 10") : "nu меньше 10";
console.log(result5)



let k = 167
let result4 = k <= 100 ? (k === 100 ? "k равен 100" : "k меньше 100") : "k больше 100";
console.log(result4)