// задание № 4

/*
Скопируйте код из файлов task_3.html и task_3.js в файлы task_4.html и файл task_4.js соответственно.
Отличие задачи в том, что новый список студентов должен быть отображён на странице после клика по заранее созданной кнопке. 
Создайте кнопку button с текстом внутри «Показать список».
Привяжите к кнопке событие клика. При клике должна быть вызвана ранее созданная функция createStudentsList() и под кнопкой должен появиться список студентов.
*/


document.addEventListener("DOMContentLoaded", function() {
    let allStudents=[
        {name: 'Валя', age: 11},
        {name: 'Таня',age: 24},
        {name: 'Рома',age: 21},
        {name: 'Надя', age: 34},
        {name: 'Антон', age: 7}
       ]
    
    let incrementButton = document.querySelector("button");
    
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
    incrementButton.addEventListener('click',() => createStudentsList(allStudents));
});



