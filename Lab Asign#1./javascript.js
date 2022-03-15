const classNames = {
    TODO_ITEM: "todo-container",
    TODO_CHECKBOX: "todo-checkbox",
    TODO_TEXT: "todo-text",
    TODO_DELETE: "todo-delete",
  };
  
  const list = document.getElementById("todo-list");
  const itemCountSpan = document.getElementById("item-count");
  const uncheckedCountSpan = document.getElementById("unchecked-count");
  Count=0;
  
  function newTodo(){
    const Add_Task=window.prompt("Add Task")
    const ToDos=document.createElement("ToDos")
    ToDos.setAttribute('Task_Num',Add_Task)
    ToDos.appendChild(document.createTextNode(Add_Task))
  
    list.appendChild(ToDos)
    Count++
  
    itemCountSpan.innerHTML =Count;
    uncheckedCountSpan.innerHTML =Count;
  }
  function removeTodo(){
    list.removeChild(list.lastElementChild)
    if (Count ==0) {
        itemCountSpan.innerHTML =Count
    }
  
     else {
        Count--
  
  
        itemCountSpan.innerHTML =Count
        uncheckedCountSpan.innerHTML =Count
    }
  }