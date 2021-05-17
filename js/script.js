contactList = Array.from( document.querySelectorAll('li') )
//contactList.map( contactList => console.log( contactList ) )
console.log(contactList.length);

// Calculate the pages needed to display the contact list
pagesNeed = Math.floor(contactList.length/10);
console.log(pagesNeed);

