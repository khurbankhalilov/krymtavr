let modalBtn = document.getElementById("modal-ac")
let modalBtn2 = document.getElementById("modal-ac2")
let modal = document.querySelector(".modal")
let modal2 = document.querySelector(".modal-2")
let modalKapat = document.getElementById("modal-kapat")
let modalKapat2 = document.getElementById("modal-kapat2")
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