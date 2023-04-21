const pizzas = document.querySelectorAll('.pizzaItem')
const recommendForm = document.querySelector('form')
const pizzaName = document.querySelector('#pizza-name')
const pizzaPicture = document.querySelector('#pizza-picture')
let pizzaDisplay = document.querySelector('#pizza-display')

let pizzaArr = [...pizzas]

const pizzaAlert = (evt) => {
    const pizza = evt.target.getAttribute('value')
    // console.log(evt.target.getAttribute('value'))
    alert(`you like ${pizza}`)
}

const formSubmit = (evt) => {
    evt.preventDefault()
    let newSection = document.createElement('section')
    newSection.classList.add('pizzaItem')
    newSection.setAttribute('value',pizzaName.value)
    let newPizzaImg = document.createElement('img')
    newPizzaImg.setAttribute('src',pizzaPicture.value)
    newPizzaImg.setAttribute('value',pizzaName.value)
    newSection.appendChild(newPizzaImg)
    let pizzaTitle = document.createElement('p')
    pizzaTitle.setAttribute('value',pizzaName.value)
    pizzaTitle.textContent = pizzaName.value
    newSection.appendChild(pizzaTitle)
    pizzaDisplay.appendChild(newSection)
}

pizzaArr.map(el => el.addEventListener('click',pizzaAlert))
recommendForm.addEventListener('submit',formSubmit)