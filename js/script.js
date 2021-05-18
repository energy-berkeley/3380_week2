// ####### find the number of pages needed

contactList = Array.from( document.querySelectorAll('li') );
//contactList.map( contactList => console.log( contactList ) )
console.log(contactList.length);

// Calculate the pages needed to display the contact list
pagesNeed = Math.ceil(contactList.length/10)+1;
if(contactList.length%10 ==0 ) pagesNeed--;
console.log(pagesNeed);


// #### adding buttons as needed


pages = document.getElementById('pagination');

// create the buttons according to the pages needed.
var i;
for (i = 1; i < pagesNeed; i++) {
    pages.innerHTML += '<button type="button">' + i + '</button>';
}


function DisplayContacts(pageNumber){
    for (i = 0; i < 10; i++) {
        var itemToDisplay = (pageNumber - 1)*10 + i;
        subList = contactList[itemToDisplay]
        subList.style.display = "block";
    }
}

function HideAllContacts(){
    for (i = 0; i < contactList.length; i++) {
        contactList[i].style.display = "none";
    }
}

function MovePage(e){
    HideAllContacts()
    DisplayContacts(this.innerText);
    e.preventDefault()
}

// First display none of the elements
var currentPageNumber = 1;

//Hide all contacts first
HideAllContacts()

//default show first page
DisplayContacts(1)

// Create the event which on click the page changed.

buttons =  Array.from( document.querySelectorAll('button') );

buttons.map( buttons => buttons.addEventListener('click', MovePage) )

