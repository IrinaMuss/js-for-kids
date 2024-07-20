// МАССИВЫ



/*
let age = 11;
let accompanied = true;
age>= 12 || accompanied;
*/

/*
let shopList = [
	"bread",
	"tomato",
	"milk",
	"juice"
];
shopList[4] = "apple";
shopList[0] = "cake";
shopList[33] = "cucumber";
console.log(shopList);
*/

/*let list = [
	"bread",
	"tomato",
	"milk",
	"juice",
	[
		"one",
		"two",
		"three",
		10
	],
	135,
];
// console.log(list);
// console.log(list[4][0]);
// console.log(list.length);
// console.log(list[list.length-1]);*/

/*
let animalMass = [];
animalMass.push('dog');
animalMass.push('cat');
animalMass.push('rabbit');
animalMass.push('tiger');
animalMass.unshift('monkey');
animalMass.unshift('fish');

console.log(animalMass);
let lastAnimal = animalMass.pop();
console.log(lastAnimal);
console.log(animalMass);
animalMass.pop();
console.log(animalMass);
animalMass.unshift(lastAnimal);
console.log(animalMass);
let firstAnimal = animalMass.shift();
console.log(firstAnimal);
console.log(animalMass);
*/
/*
let animalMass = [];
animalMass.push('dog');
animalMass.push('cat');
animalMass.push('rabbit');
animalMass.push('tiger');
animalMass.unshift('monkey');
animalMass.unshift('fish');

let shopList = [
	"bread",
	"tomato",
	"milk",
	"juice"
];

let numberMass = [
	'1',
	'2',
	'3',
	'44',
]

let newConcatMass1 = animalMass.concat(shopList);
console.log(newConcatMass1);

let newConcatMass2 = animalMass.concat(shopList, numberMass);

console.log(newConcatMass2);
*/
/*
let colors = [
	'blue',
	'red',
	'white',
	'green',
	'white'
];
console.log(colors.indexOf('white'));
console.log(colors.indexOf('blue'));
console.log(colors.indexOf('yellow')); //вернет -1(ошибка)

console.log(colors.join());
console.log(colors.join('-'));
console.log(colors.join('+'));
console.log(colors.join(' and '));
*/

// console.log(Math.floor(Math.random()*4));
/*
let randomWords = ["Пещера", "Взрыв", "Принцесса", "Карандаш"];
randomIndex = [Math.floor(Math.random()*randomWords.length)];
console.log(randomIndex);
*/


	// УПРАЖНЕНИЕ 1 (СТР 69)


let randomBodyParts = ['голова', 'нога', 'попа'];
let randomAdjectives = ['тухлая', 'угрюмая', 'жирная'];
let randomAnimalBodyParts = ['хвост', 'уши', 'лапа', 'усы'];
let randomWords = ['коровы', 'суслика', 'мартышки','бегемота','хомяка'];

// 1 вариант(без создания переменных)
/*

randomInsult = [
	"Твоя", 
	randomBodyParts[Math.floor(Math.random()*randomBodyParts.length)], randomAdjectives[Math.floor(Math.random() * randomAdjectives.length)], "как", 
	randomWords[Math.floor(Math.random() * randomWords.length)] + 
	"!!!"].join(" ");
console.log(randomInsult);
*/

// 2 вариант с созданием переменных

let randomBodyPart = randomBodyParts [Math.floor(Math.random()* randomBodyParts.length)];
let randomAdjective = randomAdjectives [Math.floor(Math.random()* randomAdjectives.length)];
let randomAnimalBodyPart = randomAnimalBodyParts [Math.floor(Math.random()* randomAnimalBodyParts.length)];
let randomWord = randomWords [Math.floor(Math.random()* randomWords.length)];
/*
randomInsult = [ 
	"У тебя",
	randomBodyPart,
	"еще более",
	randomAdjective + " ,",            без запятой
	"чем",
	randomAnimalBodyPart,
	"у",
	randomWord
].join(" ");
*/



// вариант с +
/*
console.log("У тебя" + " " + randomBodyPart + " " + "еще более" + " " + randomAdjective + "," + " " + "чем" + " " + randomAnimalBodyPart + " " + "у" + " " + randomWord);
*/


// вариант с join
/*
randomInsult = [ 
	"У тебя",
	randomBodyPart,
	"еще более",
	randomAdjective + ",",
	"чем",
	randomAnimalBodyPart,
	"у",
	randomWord
].join(" ");
console.log(randomInsult);
*/

let someNumbers = [3,2,1];

let newString = [
	someNumbers[0],
	"больше, чем",
	someNumbers[1],
	"больше, чем",
	someNumbers[2]
].join(' ');

console.log(newString);
