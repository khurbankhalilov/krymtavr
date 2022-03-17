let modalBtn = document.getElementById("modal-ac")
let modalBtn2 = document.getElementById("modal-ac2")
let modal = document.querySelector(".modal")
let modal2 = document.querySelector(".modal-2")
let modalKapat = document.getElementById("modal-kapat")
let modalKapat2 = document.getElementById("modal-kapat2")
let faqBtn1 = document.getElementById("acilir-menu")
let faqBtn2 = document.getElementById("acilir-menu2")
let faqBtn3 = document.getElementById("acilir-menu3")
let faqBtn4 = document.getElementById("acilir-menu4")
let faqBtn5 = document.getElementById("acilir-menu5")
let faqBtn6 = document.getElementById("acilir-menu6")
let openFaq1 = document.getElementById("ac1")
let openFaq2 = document.getElementById("ac2")
let openFaq3 = document.getElementById("ac3")
let openFaq4 = document.getElementById("ac4")
let openFaq5 = document.getElementById("ac5")
let openFaq6 = document.getElementById("ac6")
let logo = document.querySelector('.container')
let menu = document.querySelector('.menu')
modalBtn2.addEventListener("click", () =>{
    modal2.style.display = "flex"
})
modalKapat2.addEventListener("click", () =>{
    modal2.style.display = "none"
})
modalBtn.addEventListener("click", () =>{
    modal.style.display = "flex"
})
modalKapat.addEventListener("click", () =>{
    modal.style.display = "none"
})
openFaq1.addEventListener("click", () =>{
        faqBtn1.style.display = "block"
})
openFaq1.addEventListener("dblclick", () =>{
        faqBtn1.style.display = "none"
})
openFaq2.addEventListener("click", () =>{
    faqBtn2.style.display = "block"
})
openFaq2.addEventListener("dblclick", () =>{
    faqBtn2.style.display = "none"
})
openFaq3.addEventListener("click", () =>{
    faqBtn3.style.display = "block"
})
openFaq3.addEventListener("dblclick", () =>{
    faqBtn3.style.display = "none"
})
openFaq4.addEventListener("click", () =>{
    faqBtn4.style.display = "block"
})
openFaq4.addEventListener("dblclick", () =>{
    faqBtn4.style.display = "none"
})
openFaq5.addEventListener("click", () =>{
    faqBtn5.style.display = "block"
})
openFaq5.addEventListener("dblclick", () =>{
    faqBtn5.style.display = "none"
})
openFaq6.addEventListener("click", () =>{
    faqBtn6.style.display = "block"
})
openFaq6.addEventListener("dblclick", () =>{
    faqBtn6.style.display = "none"
})
logo.addEventListener("click", () =>{
    menu.classList.toggle('showmenu')
})