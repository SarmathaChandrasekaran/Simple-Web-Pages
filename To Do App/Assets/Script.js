let button=document.getElementById('add');
let input=document.getElementById('input');
let todoList=document.getElementById('todoList');

let todos=[];
window.onload = ()=>{
    todos = JSON.parse(localStorage.getItem('todos')) || []
    todos.forEach(todo=>addtodo(todo))
}

button.addEventListener('click',()=>{
    let inputValue=input.value.trim();
    if(inputValue===''){
        return;
    }
    todos.push(input.value)
    localStorage.setItem('todos',JSON.stringify(todos))
    addtodo(input.value)
    input.value=''
})

function addtodo(todo){
    let para = document.createElement('p');
    para.innerHTML=todo+ "<button> delete</button>";
    todoList.appendChild(para);
    let deleteButton = para.querySelector('button');
    deleteButton.addEventListener('click',()=>{
                remove(todo);
                todoList.removeChild(para)

            })
}

function remove(todo){
        let index = todos.indexOf(todo)
        if (index > -1) {
            todos.splice(index, 1);
          }
        localStorage.setItem('todos',JSON.stringify(todos))
        
    }




























// let button = document.getElementById('add')
// let todoList = document.getElementById('todoList')
// let input = document.getElementById('input');
// //local storage,cookies
// let todos = [];
// window.onload = ()=>{
//     todos = JSON.parse(localStorage.getItem('todos')) || []
//     todos.forEach(todo=>addtodo(todo))
// }

// button.addEventListener('click',()=>{
//     todos.push(input.value)
//     localStorage.setItem('todos',JSON.stringify(todos))
//     addtodo(input.value)
//     input.value=''
// })

// function addtodo(todo){
//     let para = document.createElement('p');
//     para.innerText = todo;
//     todoList.appendChild(para)
    
//     para.addEventListener('click',()=>{
//         para.style.textDecoration = 'line-through'
//         remove(todo)
//     })
//     para.addEventListener('dblclick',()=>{
//         todoList.removeChild(para)
//         remove(todo)
//     })
// }

// function remove(todo){
//     let index = todos.indexOf(todo)
//     if (index > -1) {
//         todos.splice(index, 1);
//       }
//     localStorage.setItem('todos',JSON.stringify(todos))
// }