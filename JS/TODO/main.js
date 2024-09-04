
(function () {
    
    function createAppTitle(title) {
        let appTitle = document.createElement("h2");
        appTitle.innerHTML = title;
        return appTitle;
    }

    function createTodoItemForm( ) {
      let form = document.createElement("form");
      let input = document.createElement("input");
      let buttonWrapper = document.createElement("div");
      let button = document.createElement("button");
      
      form.classList.add('input-group', 'mb-3');
      input.classList.add('form-control');
      input.placeholder = "Введите название нового дела";
      buttonWrapper.classList.add('input-group-append');
      button.classList.add('btn', 'btn-primary');
      button.textContent = "Добавить дело";

      buttonWrapper.append(button);
      form.append(input);
      form.append(buttonWrapper);

      return {
        form,
        input,
        button,
      };
    }

    function createTodoList() {
        let list = document.createElement('ul');
        list.classList.add('list-group');
        return list;
    }

    function createTodoItem(ObjectItem = {id : number, name: string, done: boolean}) { // Этап № 1 - изменил атрибут, вместо переменной name, стал обрабатывать объект Object
        let item = document.createElement('li');
        
        let buttonGroup = document.createElement('div');
        let doneButton = document.createElement('button');
        let deleteButton = document.createElement('button');

        item.classList.add('list-group-item', 'd-flex', 'justify-content-between', 'align-items-center');
        item.textContent = ObjectItem.name;

        buttonGroup.classList.add('btn-group', 'btn-group-sm');
        doneButton.classList.add('btn', 'btn-success');
        doneButton.textContent = 'Готово';
        deleteButton.classList.add('btn', 'btn-danger');
        deleteButton.textContent = 'Удалить';

        buttonGroup.append(doneButton);
        buttonGroup.append(deleteButton);
        item.append(buttonGroup);

        return {
            item,
            doneButton,
            deleteButton,
        }
    }

    function getTodoStorage() {
        return localStorage.getItem('todoList');
    }

    function setTodoStorage(data) {
        localStorage.setItem('todoList', data);
    }

    function dataToJSON(data) {
        return JSON.stringify(data);
    }

    function jsonToData(data) {
        return JSON.parse(data);
    }

    function addToCart(product) {
        let cart = getTodoStorage();

        cart = cart ? jsonToData(cart) : [];
        cart.push(product);
        setTodoStorage(dataToJSON(cart));
    }

    function removeFromCart(id) {
        let cart = jsonToData(getTodoStorage());
        
        let newcart = [];

        for (let i = 0; i < cart.length; i++) {
            if (cart[i].id!== id) {
                newcart.push(cart[i]);
            }
        }

        setTodoStorage(dataToJSON(newcart));
    }

    let ObjectList = [];

    
    document.addEventListener("DOMContentLoaded", function () {
        let container = document.getElementById('todo-app');

        let todoAppTitle = createAppTitle('Список дел');
        let todoItemForm = createTodoItemForm();
        let todoList = createTodoList();


        container.append(todoAppTitle);
        container.append(todoItemForm.form);
        container.append(todoList);

        todoItemForm.button.disabled = true; // Изменение,которая позволяет отключить кнопку "Добавить дело"



        todoItemForm.input.addEventListener('input', function(){ // Добавил обработчик при вводе в поле ввода он отключает кнопку "Добавить дело"
            // Проверка на наличие значения
            if (todoItemForm.input.value === '') {
                // Включение кнопки, если есть значение
                todoItemForm.button.disabled = true;
            } else {
                // Отключение кнопки, если строка пустая
                todoItemForm.button.disabled = false;
            }
        });
        
        todoItemForm.form.addEventListener('submit', function(event){
            todoItemForm.button.disabled = true; // Это добавление которая при нажатии ентера отключает кнопку
            event.preventDefault();

            
            if (!todoItemForm.input.value) {
                return;
            }

            let count = 1;
            
            
            
            let todoItem = createTodoItem(ObjectItem = {id : count, name: todoItemForm.input.value, done: false});
            ObjectList.push({id : count, name : todoItemForm.input.value, done : false});
            count++;

            todoItem.doneButton.addEventListener('click', function() {
                todoItem.item.classList.toggle('list-group-item-success');
                let item = this.todoItem.id;
                const objectIndex = ObjectList.findIndex(obj => obj.id === item.id);
                ObjectList[objectIndex].done = true;
            });
            
            todoItem.deleteButton.addEventListener('click', function() {
                if (confirm('Вы уверены?')) {
                    todoItem.item.remove();
                    const item = this.todoItem.id; // Получаем родительский элемент кнопки
                    const objectIndex = ObjectList.findIndex(obj => obj.id === item.id);
                    ObjectList.splice(objectIndex, 1);
                }
            });
            
            todoList.append(todoItem.item);

            todoItemForm.input.value = '';
            
        });
    });

})();

