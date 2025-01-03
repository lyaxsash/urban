// первая задача
let number = -5;
const result1 = number >=0 ? (number === 0 ? "Число равно 0" : "Число положительное") : "Число отрицательное";
console.log (result1);

// вторая задача
let number1 = 10; 
let number2 = 20;
let operator = "/";
let result2=null;

if (operator=="+"){
	result2=number1+number2;
} else if (operator=="-") {
	result2=number1-number2;
} else if (operator=="/") {
	result2=number1/number2;
}else if (operator=="*") {
	result2=number1*number2;
} else {
	result2 = null
}
console.log(result2);

// третья задача
let time = null
function getTimeOfDay (hour) {
	if (hour >= 6 && hour <=11) {
		time = "Утро";
	} else if (hour >= 12 && hour <=17) {
		time = "День";
	} else if (hour >= 18 && hour <=23) {
		time = "Вечер";
	} else if (hour >= 0 && hour <=5) {
		time = "Ночь";
	} else {
		time = "Некорректное время";
	}
}
getTimeOfDay(17)
time += ";)"
console.log(time)


// или
// function getTimeOfDay (hour) {
// 	switch (true) {
// 		case hour >= 6 && hour <=11:
// 			console.log("Утро");
// 		  break;
// 		case hour >= 12 && hour <=17:
// 			console.log("День")
// 			break;
// 	  case hour >= 18 && hour <=23:
// 			console.log("Вечер")
// 			break;
// 		case hour >= 0 && hour <=5:
// 			console.log("Ночь")
// 		  break;
// 		default :
// 		  console.log("Некорректное время")
// 	}
// }
// getTimeOfDay(16) 

// или
// function getTimeOfDay (hour) {
// 	switch (true) {
// 		case hour >= 6 && hour <=11:
// 			return "Утро";
// 		case hour >= 12 && hour <=17:
// 			return "День"
// 	  case hour >= 18 && hour <=23:
// 			return "Вечер"
// 		case hour >= 0 && hour <=5:
// 			return "Ночь"
// 		default :
// 		  return "Некорректное время"
// 	}
// }

// const smile = getTimeOfDay(10) + ";)";
// console.log(smile);
