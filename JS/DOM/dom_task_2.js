// Задание № 2 
/*
Скопируйте код из файлов task_1.html и task_1.js в файлы task_2.html и файл task_2.js соответственно.
Доработайте функцию createStudentCard() так, чтобы она принимала не два параметра с информацией о студенте, а один — student, который является объектом с информацией о студенте.
Функция делает то же самое, что и в первой задаче, — создаёт карточку студента.
*/

function createStudentCardVersion2(studentObject){
    let div = document.createElement("div");
     
    document.body.append(div);

    let h2 = document.createElement("h2");

    h2.textContent = studentObject.name;

    let span = document.createElement("span");

    span.textContent = `Возраст студента: ${studentObject.age}`;

    div.prepend(span);
    div.prepend(h2);


}
let studentObj={
    name: 'Игорь',
    age: 17
   }

createStudentCardVersion2(studentObj);