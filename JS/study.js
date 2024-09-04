// Модуль 2 переменные 
// Задание № 1
function module_1_Question_1(){
    console.log("Задание № 1");
    let number_x1 = 2;
    let number_y1 = 3;

    let number_x2 = 10;
    let number_y2 = 5;

    console.log((number_x2 - number_x1) * (number_y2 - number_y1));
}
// Задание № 2
function module_1_Question_2(){
console.log("Задание № 2");
let a = 13.123456789;
let b = 2.123

let n = 5;

result_a = Math.floor(Math.fround(a % 1) * Math.pow(10, n));
result_b = Math.floor(Math.fround(b % 1) * Math.pow(10, n));
console.log(result_a, result_b);

console.log(result_a > result_b);
console.log(result_a < result_b);
console.log(result_a >= result_b);
console.log(result_a <= result_b);
console.log(result_a === result_b);
console.log(result_a != result_b);

}

// Задание № 3
function module_1_Question_3(){
console.log("Задание № 3");
let k = 100;
let m = -5;

min_num = Math.min(k,m);

num_1 = Math.round(Math.random() * Math.abs(m - k));

result_num_1 = min_num + num_1;

num_2 = Math.round(Math.random() * Math.abs(m - k));

result_num_2 = min_num + num_2;


console.log(result_num_1, result_num_2);

console.log(result_num_1 > result_num_2);
console.log(result_num_1 < result_num_2);
console.log(result_num_1 >= result_num_2);
console.log(result_num_1 <= result_num_2);
console.log(result_num_1 === result_num_2);
console.log(result_num_1 != result_num_2);

}
//Модуль № 2

// Задание № 1
function module_2_Question_1(){
let password = "12-";

if (password.includes("-" || "_" ) && password.length > 4) {
    console.log("Пароль надёжный");
}
else {
    console.log("Пароль недостаточно надёжный");
}
}


// Задание № 2

function module_2_Question_2(){

let userName = "аРтЁм".toLowerCase();
let userSurname = "ивАноВ".toLowerCase();

let first_symbol_userName = userName.substring(0,1);

let first_symbol_userSurname = userSurname.substring(0,1);

let result_userName = first_symbol_userName.toUpperCase() + userName.substring(1, userName.length);
let result_userSurname = first_symbol_userSurname.toUpperCase() + userSurname.substring(1, userSurname.length);


userName != result_userName && userSurname != result_userSurname ? console.log("Имя было преобразовано") : console.log("Имя осталось без изменений");
}


// Задание № 3


function module_2_Question_3(){
let number = 3;

number % 2 == 0 ? console.log("Число чётное") : console.log("Число нечётное");

}

// МОДУЛЬ 3


// задание № 1


function module_3_Question_1(){
let start_num = 0;
let end_num = 100;

let minn_num = Math.min(start_num, end_num);

let s = [];

let count = 100;

for (let i = 0; i < count; ++i) {
    random_num = Math.round(Math.random() * Math.abs( end_num - start_num ));
    result_num = minn_num + random_num;
    s.push(result_num);
}
console.log(s);}


// задание № 2


function module_3_Question_1(){
let count = 5;
s = [];

for (let i = 1; i < count + 1; ++i) {
    s.push(i);
}

for (let i in s) {
    min_num = Math.min(0, count-1);
    random_index = Math.round(Math.random() * Math.abs((count - 1) - 0));
    result_index = min_num + random_index;
    console.log(result_index);
    temp = s[i];
    s[i] = s[result_index];
    s[result_index] = temp;
}
}


// задание № 3


function module_3_Question_3(){
number = 3;
count = 0
console.log(s);
for (let i of s) {
    if (i == number) {
        console.log(`индекс элемента = ${count}`);
    }
    else {
        count++;
    }
}
}


// задание № 4


function module_3_Question_4(){
arr_1 = [2, 2, 17, 21, 45, 12, 54, 31, 53]
arr_2 = [12, 44, 23, 5]

for (let i of arr_2) {
    arr_1.push(i);
}
console.log(arr_1);
}

// Модуль № 4  "Функции"

//Задание № 1
function module_4_Question_1(age) {
    let CurrentDate = new Date();
    let CurrentYear = CurrentDate.getFullYear();

    return CurrentYear - age;
}

// Задание № 2
function filter() {
    let whiteList = ['my-email@gmail.ru', 'jsfunc@mail.ru', 'annavkmail@vk.ru', 'fullname@skill.ru', 'goodday@day.ru'];

    let blackList = ['jsfunc@mail.ru','goodday@day.ru'];

    clearList = [];

    for (let element of whiteList){
        if (blackList.includes(element)){
            continue;
        }
        else{
            clearList.push(element);
        }

    }
    return clearList;
}


// задание № 3

function arrSort(mass){
    for (let index = 0; index < mass.length; index++) {
        for (let secondIndex = 0;  secondIndex < mass.length - 1; secondIndex++){
            if (mass[secondIndex] > mass[secondIndex + 1]){
                let temp = mass[secondIndex];
                mass[secondIndex] = mass[secondIndex+1];
                mass[secondIndex+1] = temp;
                
            }
        }
    }
    return mass;
}
let mass = [2,5,1,3,4];
console.log(arrSort(mass));


