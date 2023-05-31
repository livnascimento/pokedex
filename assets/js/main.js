input = document.getElementsByTagName('input')
text = document.getElementsByClassName('text')
body = document.getElementsByTagName('body')
cards = document.getElementsByClassName('pokemon')
type = document.getElementsByClassName('type')
id = document.getElementsByClassName('id')

input[0].addEventListener("click", () => {
    body[0].classList.toggle("dark-mode")
    for (let i = 0 ; i < cards.length ; i++) {
        cards[i].classList.toggle("dark-mode")
    }
    for (let i = 0 ; i < id.length ; i++) {
        id[i].classList.toggle("dark-mode")
    }
})