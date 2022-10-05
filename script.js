let todoArray = [];
//let id = 0;

function addTodo() {
    // Push new todo into empty array
    let input = document.getElementById("todo").value;
    todoArray.push(input); // Push id to array - will track todo

    // Create a new div and append textnode
    let newTodo = document.createElement("div");
    let newTodoContent = document.createTextNode(input);
    //newTodo.dataset.id = id; 
   //id++; // Increment id for next todo
    newTodo.appendChild(newTodoContent);

    // Add function and class
    newTodo.onclick = function() {newTodo.classList.toggle("marked")};

    // Add todo to todofield
    let field = document.getElementById("todo-field");
    field.appendChild(newTodo);

    console.log(todoArray);
}

// Check if task is marked and delete id out of todoArray;
function deleteMarked() {
    let deleteArray = [];
    // Get all elements with class "marked" and check if their innerHTML is found in the array
    let marked = document.getElementsByClassName("marked");
    for (let i = 0; i < marked.length; i++) {
        let value = marked[i].innerHTML;
        for(let j = 0; j < todoArray.length; j++) {
            if(value == todoArray[j]) {
                todoArray.splice(j,1);
                deleteArray.push(marked[i]);
            }
        }
    }
    for (let i = 0; i < deleteArray.length; i++) {
        deleteArray[i].remove();
    }

    console.log(todoArray);
}



