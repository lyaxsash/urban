if (true) {
	// выполнится, если false - не выполнится
}

let name = "Alex";
if (name === "Bob") { 	// === - строго равно
	alert("Привет, Боб!")
 } // else {
// 	alert("Привет, хуй!")
// }
else if (name === "Alex") {
	alert("Привет, Алекс!")
}

// можно совмещать два условия  - логическое "и"
let age = 18
if (age >= 18 && age <= 100) {}

// логическое "или"
if (age === 18 || age === 19){}

// switch
switch(age) {
	case 18:
		console.log("Вам есть 18");
		break; // иначе он выдаст все последующие, после того, который ему подходит
	case 19:
		console.log("Вам есть 19");
		break;
	default:
		console.log("Я не знаю ваш возраст");
}