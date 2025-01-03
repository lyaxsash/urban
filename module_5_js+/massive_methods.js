let array = ["first", "second", 123, false]

const arrayy = new Array("first", "second");
console.log(array)

let list = ["banana", "orange", "apple", "tomato"] // порядок элементов - 0, 1, 2, 3
console.log(list.length) // определяет длину массива
console.log(list [1])

// можно перезаписать значение
list[0] = "cucumber";
console.log(list[0])

const lastItem = list.lenght -1
list[lastItem] = "peach"
console.log(list)

// методы: 1. изменяющие массив
let list1 = ["watermelon", "pear", "lemon", "papaya"]
list1.push("banana") // добавляет элементы в конец массива
list.unshift ("blackberry", "strawberry") // добавляет элементы в начало массива
console.log(list1)

list.pop() // удаляет 1 элемент с конца
list.shift() // удаляет с начала
list.sort() // сортировка в алф. порядке. Если числа, то по первой цифре. [1, 102, 25, 3, 36]. т.к. делает из низ строки

// сортировка чисел по порядку возрастания
let list2 = [4, 546, 65, 23, 123, 1, 5, 3, 4]
list2.sort((a,b)=> a - b);
console.log(list2)

// методы 2

// forEach
const fruit = ["apple", "banana", "orange", "lemon"]
fruit.forEach((item, index, array)=>{ 	// выполняет действия для каждого элемента, перебирая их. Действия могут быть разными. Он не возвращает никакие результаты в отличие от map
	console.log(`Элемент ${item} имеет индекс ${index} в массиве ${array}`)
})

// map
const fruits = ["pikaya", "kuska", "soshi", "jeez"]
console.log(fruits)

const result = fruits.map ((item, index)=>{ 	// map по сути формирует новый массив. Тоже выполняет действия для каждого элемента
	return `Фрукт номер ${index} имеет название ${item}`
})
console.log(result)

//можно сократить так: 
// const result = fruits.map ((item, index)=>{`Фрукт номер ${index} имеет название ${item}`
// })

// reduce - каждый раз возвращает сложенные элементы массива: в первый раз - 1 и второй, потом получившийся и третий, потом получившийся и 4 и т.д. В итоге будет их общая сумма.
const fruitz = ["SISikaya", "SISkuska", "SISsoshi", "SISjeez"]
const fin = fruitz.reduce((acc, item, index, array)=>{
	return acc + item
})
console.log(fin)

GIN.reduce()