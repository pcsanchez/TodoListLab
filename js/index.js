

function postFunctionality() {

    let form = document.getElementById('todoForm');

    form.addEventListener('submit', (event)=> {
        event.preventDefault();

        let todoText = document.getElementById('todoInput').value;
        let todoDisplay = document.getElementById('todoDisplay');

        let newElement = document.createElement('div');
        let nodeText = document.createElement('p');
        let checkbox = document.createElement('input');

        checkbox.type = 'checkbox';
        
        
        newElement.classList.add('todoItem');
        nodeText.appendChild(document.createTextNode(todoText));
        newElement.appendChild(nodeText);
        todoDisplay.appendChild(newElement);
        todoDisplay.appendChild(checkbox);

    });
}

function init() {
    postFunctionality();
}

init();