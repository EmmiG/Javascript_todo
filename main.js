function todoList() {
    var item = document.getElementById("todoInput").value
    var text = document.createTextNode(item)
    var newItem = document.createElement("li")
    newItem.appendChild(text)
    document.getElementById("todoList").appendChild(newItem)
}

/* varje gång du klickar på ett <li>-element tas de bort från sidan.*/



const listItems = document.querySelectorAll('li');  /* välj alla li taggar*/      

for(const item of listItems){
    item.addEventListener('click', function(){  /* vid klick */
        this.parentElement.removeChild(this);  /* ta bort båda föräldrar, UL + barn elementet, li */ 
    })
}


/* NYTT */




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
