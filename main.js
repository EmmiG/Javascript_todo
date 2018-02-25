

function todoLists() {
    var item = document.getElementById("todoInput").value /* variabeln item innehåller dokument elementet todoInput som hämtas från index filen, skapar en ruta där man kan skriva inuti  */
    var text = document.createTextNode(item) /* variabeln text, skapar textnod som vidareförmedlar data , den hämtar variabeln item , är till för att användaren ska kunna skriva in valfri text i todoInput fältet */
    var todoList = document.getElementById("todoList");  /* variabeln todoList innehåller dokument elementet todoList, <ul> som hämtas från index filen, för att kunna lägga till element på <ul>*/
    var newItem = document.createElement("li")  /* variabeln newItem innehåller dokument elementet li , skapar li element som kan läggas till */
    
    newItem.appendChild(text)   /* hämtar variabeln newItem, lägger till text i todoInput fältet med hjälp av variablen text vi skapa tidigare*/
    //när man väl har skirvit in något i todoInput  lägger till barnet */
    document.getElementById("todoList").appendChild(newItem)
    
    //console.log(todoLists);
    
    
    const todo = document.getElementById('todoList');/* Hämta elementet med id todoList*/
const done = document.getElementById('done') /* Hämta elementet med id done*/
const listItems = document.querySelectorAll('li'); /* välj alla li taggar*/
done.style.color='forestgreen'; /* gör så att när den är väl checkad så kommer den till done listan och texten blir grön */
 
 
  newItem.onclick = function() {
        //console.log(this)
        todoList.removeChild(this);         /* ta bort todo barnet*/
        done.appendChild(this);         /* skapas istället under done*/

    }
  if (todoList.childElementCount == 0) {  //using if/else statement to add items to top of list
    todoList.appendChild(newItem); // will add if count of ul children is 0 otherwise add before first item
      
  }
  else {
    todoList.insertBefore(newItem, todoList.firstChild);
  }
}



/* TODOLIST   unchecked */

function removeElementTodoList() {
  
 
    todoList.removeChild(todoList.lastElementChild);
    
    
  
 
}




/* NYTT ALL ITEMS REMOVE*/

function removeAllItemsTodoList() {
 
 var todoList = document.getElementById("todoList"); 
    todoList.innerHTML = '';
 
}


/* NYTT ALL ITEMS REMOVE SLUT */

 /* TODOLIST uncheck SLUT*/




/* DONE  checked */

function removeElementDoneList() {
  
 
    done.removeChild(done.lastElementChild);
    
    
  
 
}




/* NYTT ALL ITEMS REMOVE*/

function removeAllItemsDoneList() {
 
  var done = document.getElementById("done");  
    done.innerHTML = '';
 
}


/* DONE checked slut*/










