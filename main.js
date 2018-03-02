/* i kommentarerna kommer jag att skriva * runt de element som jag har ett eget namn på och då kommer jag prata antigen om en variabel eller ett element i sig */

function todoLists() {
    var item = document.getElementById("todoInput").value /* variabeln *item* innehåller dokument elementet med id *todoInput* som hämtas från index filen, skapar en ruta där man kan skriva inuti  */
    var text = document.createTextNode(item) /* variabeln *text*, skapar textnod som vidareförmedlar data , den hämtar variabeln *item* , är till för att användaren ska kunna skriva in valfri text i *todoInput* fältet */
    var todoList = document.getElementById("todoList"); /* variabeln *todoList* innehåller dokument elementet med id *todoList*, ul som hämtas från index filen, för att kunna lägga till element på ul*/
    var newItem = document.createElement("li") /* variabeln *newItem* innehåller dokument elementet li , skapar li element som kan läggas till som hämtas från index filen */

    newItem.appendChild(text) /* hämtar variabeln *newItem*, lägger till text i *todoInput* fältet med hjälp av variablen *text* vi skapa tidigare, när man väl har skrivit in något i *todoInput* så kommer den texten att skrivas ut*/

    document.getElementById("todoList").appendChild(newItem) /* hämtar elementet med id *todolist* från indexen , appendchild lägger till ett nytt "barn" , vi använder oss av variabeln *newItem* för att kunna gå in i ul elementet så att texten vi skriver kommer hamna som en lista  */




    // const är en bestående variabel form som ej kan raderas
    const todo = document.getElementById('todoList'); /* skapar variabeln *todo* , hämtar elementet med id *todoList* från indexen*/
    const done = document.getElementById('done') /* skapar variabeln *done* , hämtar elementet med id *done* från indexen*/
    const listItems = document.querySelectorAll('li'); /* skapar variabeln *listItems* , querySelectorAll kommer att välja alla, inuti paranteserna är att alla li taggar ska beröras*/
    done.style.color = 'forestgreen'; /* gör så att när den är väl checkad så kommer den till *done* listan och texten blir grön */


    newItem.onclick = function () { /* använder mig av variabeln *newItem*, onclick betyder att när man klickar på det som man har skrivit in, så kommer det hända något och då använder man sig av en funktion som talar om vad som ska hända*/

        todoList.removeChild(this); /* ta bort text som är inuti *todoList*, texten i ul kommer att tas bort, *this* betyder att det endast kommer att hända inuti denna funktion */
        done.appendChild(this); /* texten kommer att istället skapas och läggas till under *done* */

    }
    if (todoList.childElementCount == 0) { /* använder mig av if/else statement för att lägga till objekt högst upp på *todoList* listan */
        todoList.appendChild(newItem); /* denna kommer att läggas till om räkningen  av ul barnen är 0 , när man lägger till ny text */

    } else {
        todoList.insertBefore(newItem, todoList.firstChild); /* annars läggas till innan första objektet , använder oss av variabeln *newItem* för det handlar om li, samt använder variabeln *todoList* och checkar om det är första barnet eller inte om inte kommer det att läggas på yttligare ett objekt ovanpå det första objektet i listan  */
    }
}



/*------ TodoList  unchecked ------*/

/* ett objekt raderas */

function removeElementTodoList() { /* skapar en funktion som kommer att radera ett objekt i *todoList*, jag skapade en knapp i htmlen vid namn *removeElementTodoList* */


    todoList.removeChild(todoList.lastElementChild); /* när man klickar på den knappen så kommer sista objektet i listan att raderas i *todoList* */

    
}




/* Alla objekt raderas */

function removeAllItemsTodoList() { /* skapar en funktion som kommer att radera alla objekt i *todoList*, jag skapade en knapp i htmlen vid namn *removeAllItemsTodoList* */

    var todoList = document.getElementById("todoList"); /* skapar åter igen variabeln *todoList* för att den ska gälla i denna funktionen, hämtar elementet med id *todoList* från index filen  */
    todoList.innerHTML = ''; /* all ul inuti *todoList* som är inuti body htmlen, med andra ord all text som är skrivet kommer att raderas om man trycker på knappen  */

}



/*------ todoList uncheck slut ------*/




/*------ done checked ------*/

/* ett objekt raderas */

function removeElementDoneList() { /* skapar en funktion som kommer att radera ett objekt i *done*, jag skapade en knapp i htmlen vid namn *removeElementDoneList* */


    done.removeChild(done.lastElementChild); /* när man klickar på den knappen så kommer sista objektet i listan att raderas i *done* */




}




/*  alla objekt raderas */

function removeAllItemsDoneList() { /* skapar en funktion som kommer att radera alla objekt i *done*, jag skapade en knapp i htmlen vid namn *removeAllItemsDoneList* */

    var done = document.getElementById("done"); /* skapar åter igen variabeln *done* för att den ska gälla i denna funktionen, hämtar elementet *done* från index filen  */
    done.innerHTML = ''; /* all ul inuti *done* som är inuti body htmlen, med andra ord all text som är skrivet kommer att raderas om man trycker på knappen  */


}


/*------ done checked slut ------*/
