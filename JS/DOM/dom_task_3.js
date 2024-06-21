// Задание № 3

/*
В файле task_3.html создайте базовый HTML-код и подключите к нему JavaScript-файл task_3.js. 
Создайте массив объектов студентов. Создайте функцию с названием createStudentsList() в файле task_3.js, принимающую один параметр listArr.
Функция должна создавать список ul с карточками студентов, основанный на переданном в функцию массиве студентов. Для решения задачи лучше всего использовать цикл внутри функции createStudentsList(). 
При желании можно украсить элементы CSS-стилизацией.
*/

let allStudents=[
    {name: 'Валя', age: 11},
    {name: 'Таня',age: 24},
    {name: 'Рома',age: 21},
    {name: 'Надя', age: 34},
    {name: 'Антон', age: 7}
   ]

function createStudentsList(studentsList) {
    let ul = document.createElement("ul");
    document.body.append(ul);

    for ({name: nameStudent, age:ageStudent} of studentsList) {
        let li = document.createElement("li");
        
        
        let h2 = document.createElement("h2");

        h2.textContent = nameStudent;

        let span = document.createElement("span");

        span.textContent = `Возраст студента: ${ageStudent}`;

        li.prepend(span);
        li.prepend(h2);
        
        ul.prepend(li);
    }



}

createStudentsList(allStudents);