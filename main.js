function todoList() {
    var item = document.getElementById("todoInput").value
    var text = document.createTextNode(item)
    var todoList = document.getElementById("todoList");  //getting element <ul> to add element to
    var newItem = document.createElement("li")  //creating li element to add
    
    newItem.appendChild(text)
    document.getElementById("todoList").appendChild(newItem)

    const todo = document.getElementById('todoList');/* Hämta elementet med id todo*/
const done = document.getElementById('done') /* Hämta elementet med id done*/
const listItems = document.querySelectorAll('li'); /* välj alla li taggar*/
done.style.color='forestgreen'; /* gör så att när den är väl checkad så kommer den till done listan och texten blir grön */
 
 
  newItem.onclick = function() {
   
      for(const item of listItems){
    item.addEventListener('click', function(){  /* vid click*/
        todo.removeChild(this);         /* ta bort todo barnet*/
        done.appendChild(this);         /* skapas istället under done*/
    })
}
  }
  if (todoList.childElementCount == 0) {  //using if/else statement to add items to top of list
    todoList.appendChild(newItem); // will add if count of ul children is 0 otherwise add before first item
  }
  else {
    todoList.insertBefore(newItem, todoList.firstChild);
  }
}



/* remove items NYTT */
function removeElementTodoList() {
  
 
    document.body.removeChild(document.body.todoList.li.lastElementChild);
   
 
}

/* remove NYTT Slut */









/* NYTT */

//Övning 6 - Stryk mig inte, flytta mig tack
/*Använd samma HTML som i förra övningen. Du ska istället för att ta bort elementet när du klickar på det, flytta det till listan med id="done". Så vid klick så tas det bort från första listan och läggs i den andra listan.*/






/* SLUT NYTT */

/* NYTT 2 */

window.onload=function() {
  var button = document.getElementById("submitButton");
  button.onclick = addItem;
}   

function addItem() {
  var textInput = document.getElementById("item");  //getting text input
  var text = textInput.value;   //getting value of text input element
  var ul = document.getElementById("ul");  //getting element <ul> to add element to
  var li = document.createElement("li");  //creating li element to add
  li.innerHTML = text;    //inserting text into newly created <li> element
  li.onclick = function() {
    this.parentNode.removeChild(this);
    // or this.remove(); if supported
  }
  if (ul.childElementCount == 0) {  //using if/else statement to add items to top of list
    ul.appendChild(li); // will add if count of ul children is 0 otherwise add before first item
  }
  else {
    ul.insertBefore(li, ul.firstChild);
  }
}
/* NYTT 2 SLUTAR */

