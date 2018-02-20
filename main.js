function todoLists() {
    var item = document.getElementById("todoInput").value
    var text = document.createTextNode(item)
    var todoList = document.getElementById("todoList");  //getting element <ul> to add element to
    var newItem = document.createElement("li")  //creating li element to add
    
    newItem.appendChild(text)
    document.getElementById("todoList").appendChild(newItem)
    
    console.log(todoLists);
    
    
    const todo = document.getElementById('todoList');/* Hämta elementet med id todoList*/
const done = document.getElementById('done') /* Hämta elementet med id done*/
const listItems = document.querySelectorAll('li'); /* välj alla li taggar*/
done.style.color='forestgreen'; /* gör så att när den är väl checkad så kommer den till done listan och texten blir grön */
 
 
  newItem.onclick = function() {
        console.log(this)
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



/* remove items NYTT */
function removeElementTodoList() {
  console.log(todoList); 
 
    todoList.removeChild(todoList.lastElementChild);
  
 
}

/* remove NYTT Slut */



/* NYTT NU */

 


/* NYTT NU SLUT */








/* NYTT */

//Övning 6 - Stryk mig inte, flytta mig tack
/*Använd samma HTML som i förra övningen. Du ska istället för att ta bort elementet när du klickar på det, flytta det till listan med id="done". Så vid klick så tas det bort från första listan och läggs i den andra listan.*/






/* SLUT NYTT */

/* NYTT 2 */


