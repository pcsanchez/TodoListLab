

function postFunctionality() {

    let form = document.getElementById('todoForm');

    form.addEventListener('submit', (event)=> {
        event.preventDefault();

        let todoText = document.getElementById('todoInput').value;

        if(todoText !== ''){
            let todoDisplay = document.getElementById('todoDisplay');

            let newElement = document.createElement('div');
            let nodeText = document.createElement('p');
            let checkbox = document.createElement('input');

            checkbox.type = 'checkbox';
        
            newElement.classList.add('todoItem');
            nodeText.appendChild(document.createTextNode(todoText));
            newElement.appendChild(nodeText);
            newElement.appendChild(checkbox);
            todoDisplay.appendChild(newElement);

            document.getElementById('todoInput').value = '';
        }

        
    });
}

function deleteFunctionality() {

    let clearButton = document.getElementById('deleteButton');

    clearButton.addEventListener('click', ()=> {
        let todoDisplay = document.getElementById('todoDisplay');
        todoDisplay.innerHTML = "";
    });

}

function markFunctionality() {
    
    let markButton = document.getElementById('markButton');

    markButton.addEventListener('click', ()=> {
        let todoDisplay = document.getElementById('todoDisplay');
        
        let children = todoDisplay.children;

        for(let i = 0; i < children.length; ++i) {
            children[i].children[1].checked = true;
        }
    });
}

function clearFunctionality() {

    let clearButton = document.getElementById('clearButton');

    clearButton.addEventListener('click', ()=> {
        let todoDisplay = document.getElementById('todoDisplay');

        let children = todoDisplay.children;

        for(let i = 0;i < children.length; ++i) {
            children[i].children[1].checked = false;
        }
    });
}

function init() {
    postFunctionality();
    deleteFunctionality();
    clearFunctionality();
    markFunctionality();
}

init();