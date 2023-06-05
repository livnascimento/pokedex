input = document.getElementsByTagName('input')
text = document.getElementsByClassName('text')
body = document.getElementsByTagName('body')
cards = document.getElementsByClassName('pokemon')
type = document.getElementsByClassName('type')
id = document.getElementsByClassName('id')
let name = document.getElementsByClassName('name')

let darkMode = false

input[0].addEventListener("click", () => {

    darkMode ? darkMode = false : darkMode = true

    body[0].classList.toggle("dark-mode")
    for (let i = 0 ; i < cards.length ; i++) {
        cards[i].classList.toggle("dark-mode")
    }
    for (let i = 0 ; i < type.length ; i++) {
        type[i].classList.toggle("dark-mode")
    }
    for (let i = 0 ; i < id.length ; i++) {
        id[i].classList.toggle("dark-mode")
        name[i].classList.toggle("dark-mode")
    }

})

