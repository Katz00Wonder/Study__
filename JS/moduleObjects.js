// Модуль "Объекты"
//Задание № 1
/*
Создайте в файле task_1.js функцию с названием getOlderUser(), которая будет определять, кто из двух пользователей старше. Аргументами функции являются два пользователя в виде двух объектов. 
Функция должна вернуть с помощью команды return имя старшего пользователя.
Созданную функцию нужно вызвать, передав ей два объекта: user1 и user2. Результат, который вернёт функция, необходимо вывести в консоль.
*/

function getOlderUser(user1, user2) {
    if (user1.age > user2.age) {
        return user1.name;
    }
    else {
        return user2.name;
    }
}

let user1={
    name: 'Игорь',
    age: 17
   }
let user2={
    name: 'Оля',
    age: 21
   }

let result = getOlderUser(user1, user2);
console.log(result);

//Задание № 2
/*
Для получения большей практики вы можете попробовать определить старшего пользователя из массива пользователей.

Напишите в файле task_1.js функцию getOlderUserArray(), в которую будете передавать массив объектов с пользователями. Функция должна вернуть имя старшего пользователя.
*/
function getOlderUserArray(arrayObject){
    let nameArray = [];
    let ageArray = [];
    for (let {name: name_element, age: age_element} of arrayObject){
        nameArray.push(name_element);
        ageArray.push(age_element);
    }

    let index = ageArray.indexOf(Math.max.apply(null,ageArray));

    return nameArray[index];
}

let allUsers=[
    {name: 'Валя', age: 11},
    { name: 'Таня',age: 24},
    {name: 'Рома',age: 21},
    {name: 'Надя', age: 34},
    {name: 'Антон', age: 7}
   ]

console.log(getOlderUserArray(allUsers));


//Задание № 3

/*
Напишите в файле task_2.js функцию filter(), фильтрующую массив объектов по значению свойства. Массив, название свойства и нужное значение должны передаваться в качестве аргументов.
*/

function filter(arrayObject, key, value){
    resultArray = [];
    for (let index of arrayObject){
        if (Object.keys(index).includes(key) && Object.values(index).includes(value)){
            resultArray.push(index);
        }
        
    }
    return resultArray;
}

let objects = [
    { name: 'Василий', surname: 'Васильев' },
    { name: 'Иван', surname: 'Иванов' },
    { name: 'Пётр', surname: 'Петров' }
   ]


let resultArrayObjects = filter(objects, 'name', 'Иван');
console.log(resultArrayObjects);
