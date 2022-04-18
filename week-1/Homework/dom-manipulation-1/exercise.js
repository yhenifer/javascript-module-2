
/*
Task 1
=======
Write JavaScript below that logs:
    1. all the "p" element nodes of the document,
    --> should log a list of nodes with a length of 6

    2. the first div element node
    --> should log the ".site-header" node

    3. the element with id "jumbotron-text"
    --> should log the "#jumbotron-text" node

    4. all the "p" elements of contained inside  the .primary-content element node
    --> should log a list of nodes with a length of 3

*/
const paragraph = document.querySelectorAll("p")
console.log(paragraph);

const div = document.querySelector("div")
console.log(div);

const jumbotron = document.querySelector("#jumbotron-text")
console.log(jumbotron);

const pPrimary = document.querySelectorAll(".primary-content p")
console.log(pPrimary);

/*
Task 2
======

When a user clicks the 'ALERT' button, an alert box should pop up with the text "Thanks for visiting Bikes for Refugees!"
*/

const buttonAlert = document.querySelector("#alertBtn");
function alertBtn() {
    alert("Thanks for visiting Bikes for Refugees!")
}
buttonAlert.addEventListener("click", alertBtn)


/*
Task 3
=======

Write JavaScript below that changes the background colour of the page when the 'Change colour' button is clicked.
*/

/*const buttonChangecolour = document.querySelector("#bgrChangeBtn");
function bgrChangeBtn() {
    document.querySelector("body").style.backgroundColor = "blue"
}
buttonChangecolour.addEventListener("click", bgrChangeBtn)
*/


/*
Task 4
======

When a user clicks the ‘Add some text’ button, a new paragraph should be added inside the section that says “LEARN MORE”
*/

const buttonAddtext = document.querySelector("#addTextBtn");
const learnMore = document.querySelector ("#mainArticles");
function addTextBtn() {
    learnMore.innerHTML=learnMore.innerHTML+"Me gustan la bike"
}
buttonAddtext.addEventListener("click", addTextBtn)




/*
Task 5
======

When the 'Larger links!' button is clicked, the text of all links on the page should increase.
*/

const buttonLargerlinks = document.querySelector("#largerLinksBtn");
const allLinks = document.querySelectorAll("a")
function increaseLink () {
    allLinks.forEach ((link)=>{link.style.fontSize="2em"})
}

buttonLargerlinks.addEventListener("click", increaseLink)



/*
Task 6
======

Using the same function in Task 4,
When the 'Add' button is clicked, get the text inside the input field and create a new paragraph in the "LEARN MORE" section
Also clear the text inside the input field
*/

const addParagraph= document.querySelector("#addArticleBtn");
const addInput = document.querySelector("input.form-control.addArticle");
function addText() {
    learnMore.innerHTML=learnMore.innerHTML+"<article><p>"+addInput.value+"</p></article>"
    addInput.value=""
}
addParagraph.addEventListener("click", addText)


/*
Task 7
======

Create an array of 5 different colors.
Using the same function in Task 3, every time the 'Change colour' button is clicked, the background color will be changed with the next color in the array.
The next color when you are in the last color of the array will be the first color again.
*/

const colors = ["green", "red", "blue", "black", "yellow"];
let index = 0;
console.log(colors[index]);

const buttonChangecolour = document.querySelector("#bgrChangeBtn");
function bgrChangeBtn() {
    document.querySelector("body").style.backgroundColor = colors[index]
    index = index+1
    if (index === 5) {index = 0}
}
buttonChangecolour.addEventListener("click", bgrChangeBtn)
