const button = document.querySelector("#btn-add")
const submit = document.querySelector('#submit-btn')
const form = document.querySelector('.form-container')
const main = document.querySelector('.card-container')
const cardHeader = document.querySelector('.card-header')
const removeElement = document.querySelector('.card')
const cardContainer = document.querySelector('.card-container')

function Books(){
    this.title = title
    this.author = author
    this.pages = pages
    this.isRead = isRead
}

const book = new Books

function changeDisplay(){
    form.classList.remove('d-none')
    form.classList.add('d-block')
    main.style.opacity = "0.1"
    cardHeader.style.opacity = "0.3"

}


function renderCard(){
    return `<div class="card">
    <h2 class="title">${book.title}</h2>
    <h3>${book.author}</h3>
    <p>
        ${book.pages} pages
    </p>
    <p 
    class="not-read" 
    style="background-color:${book.isRead?"9fff9c":"red"}">
    ${book.isRead?"Read complely":"Not Read yet"}
    </p>
    <button class="btn-delete" >Delete</button>
</div>`
}


let fullName = []

const addMe = (ev)=>{
    ev.preventDefault()
    book.title =  document.querySelector('#title').value,
    book.author =  document.querySelector('#author').value,
    book.pages =  document.querySelector('#pages').value,
    book.isRead =  document.querySelector('#isRead').checked,
    fullName.push(book)
    document.querySelector('form').reset()
    localStorage.setItem("fullName", JSON.stringify(fullName))
    cardContainer.innerHTML += renderCard()
    form.classList.remove('d-block')
    form.classList.add('d-none')
    main.style.opacity = "1"
    cardHeader.style.opacity = "1"

}

submit.addEventListener('click', addMe)
button.addEventListener('click', changeDisplay)
