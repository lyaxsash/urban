// = - присваивание значения как в let a = 10; == - сравнение как в value1 == value2. Не строгое равенство, поэтому при сравнении разных типов он будет пытаться привести их к одному как true == 1. При ===(строгом равенстве) сравниваются типы.
let a = 10
let b = 5
console.log(a==b);

let c = true
let d = "1"
console.log(c==d);

// нестрогое неравенство
console.log (c!=d);

// строгое неравенство:
console.log (c!==d);

// приоритет оператора сравнения (==, ===, >, <, >= etc.) больше чем оператора присваивания (=)