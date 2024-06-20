// Модуль "DOM"

// Задание № 1

/*
В файле task_1.html создайте базовый HTML-код и подключите к нему JavaScript-файл task_1.js. 
Создайте функцию с названием createStudentCard() в файле task_1.js, принимающую два параметра: name и age. Функция должна создавать карточку студента внутри элемента body HTML-страницы.
Карточка студента представляет собой DOM-элемент, а именно тег div, внутри которого находится заголовок h2 с именем студента из параметра name и span под заголовком с возрастом студента (age). При желании можно украсить элементы CSS-стилизацией.
*/

function createStudentCard(name, age) {
    let div = document.createElement("div");
     
    document.body.append(div);

    let h2 = document.createElement("h2");

    h2.textContent = name;

    let span = document.createElement("span");

    span.textContent = `Возраст студента: ${age}`;

    div.prepend(span);
    div.prepend(h2);

}

createStudentCard("Игорь", 17);
