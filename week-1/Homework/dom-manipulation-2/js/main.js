/*
## Part 1

Open `index.html` in your browser. Notice there are 3 buttons: blue, orange and green.
Edit the file `./js/main.js` and add the following functionality:

Clicking on the buttons should change the "theme" of the website:

- When clicking **blue** it should change:

  - **Jumbotron** background color to `#588fbd`
  - **Donate a bike** button background color to `#ffa500`
  - **Volunteer** button background color to `black` and text color to `white`


  - When clicking **orange** it should change:

  - **Jumbotron** background color to `#f0ad4e`
  - **Donate a bike** button background color to `#5751fd`
  - **Volunteer** button background color to `#31b0d5` and text color to `white`


- When clicking **green** it should change:
  - **Jumbotron** background color to `#87ca8a`
  - **Donate a bike** button background color to `black`
  - **Volunteer** button background color to `#8c9c08`
  */

  const blueBotton = document.querySelector("#blueBtn")
  const jumbotronBox = document.querySelector(".jumbotron")
  const donateButton = document.querySelector(".btn.btn-primary.btn-lrg")
  const volunteerButton = document.querySelector(".btn.btn-secondary.btn-lrg")

  function changeBlue() {
  jumbotronBox.style.backgroundColor = "#588fbd"
  donateButton.style.backgroundColor = "#ffa500"
  volunteerButton.style.backgroundColor = "black"
  volunteerButton.style.color =   "white"
}
blueBotton.addEventListener("click", changeBlue)





const orangeButton = document.querySelector("#orangeBtn")
  const jumbotronBoxOrange = document.querySelector(".jumbotron")
  const donateButtonOrange = document.querySelector(".btn.btn-primary.btn-lrg")
  const volunteerButtonOrange = document.querySelector(".btn.btn-secondary.btn-lrg")

  function changeOrange() {
  jumbotronBoxOrange.style.backgroundColor = "#f0ad4e"
  donateButtonOrange.style.backgroundColor = "#5751fd"
  volunteerButtonOrange.style.backgroundColor = "#31b0d5"
  volunteerButtonOrange.style.color =   "white"
}
orangeButton.addEventListener("click", changeOrange)




const greenButton = document.querySelector("#greenBtn")
  const jumbotronBoxGreen = document.querySelector(".jumbotron")
  const donateButtonGreen = document.querySelector(".btn.btn-primary.btn-lrg")
  const volunteerButtonGreen = document.querySelector(".btn.btn-secondary.btn-lrg")

  function changeGreen() {
  jumbotronBoxGreen.style.backgroundColor = "#87ca8a"
  donateButtonGreen.style.backgroundColor = "`black"
  volunteerButtonGreen.style.backgroundColor = "#8c9c08"
  
}
greenButton.addEventListener("click", changeGreen)


/*## Part 2

Just below the buttons, there's a form called **Register with us**.

Continue working in `./js/main.js` to add the following functionality:

When the submit button is pressed, it should check that all the form fields are valid:

- The **Your name**, **Email** and **Describe yourself** fields need to be non-empty (Hint: their `value` length has to be greater than zero)
- For the **Email** field also check if it contains the `@` character

For all the fields that invalid, it should make their background color `red`.
IF all the fields are valid, when you click **Submit** it should:

- Display an alert to thank you for filling out the form
- Blank out (make empty) all the text fields
*/

const email = document.querySelector("#exampleInputEmail1")
const name = document.querySelector("#example-text-input")
const description = document.querySelector("#exampleTextarea")
const formulario = document.querySelector("#form")

const verificarInputs = (input) => input.value.length == 0

formulario.addEventListener("submit", (e)=> {
    e.preventDefault()
    if (!verificarInputs (email) && !verificarInputs(name) && !verificarInputs(description) && email.value.includes("@")){
        const inputs = [email,name,description]
        inputs.forEach((input) =>{
            input.style.backgroundColor = "white"
            input.value = ""
        })
    alert("thank you for filling out the form")    
    }else {
        if (verificarInputs(email)|| !email.value.includes("@")){
            email.style.backgroundColor = "red"
        }
        if (verificarInputs(name)){
            name.style.backgroundColor = "red"
        }  
        if (verificarInputs(description)){
            description.style.backgroundColor = "red"
        }       
        }
    });


