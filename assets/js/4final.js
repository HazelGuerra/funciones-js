let color = "black"


document.addEventListener('keydown', function (event) {
    if (event.key === 'a') {
        color ="red"
    } else if (event.key === 's') {
        color = "yellow"
    } else if (event.key === 'd') {
       color = "brown"
    }
})
    

let uno = document.querySelector("#azul")
let dos = document.querySelector("#rosa")
let tres = document.querySelector("#naranja")
let cuatro = document.querySelector("#verde")

uno.addEventListener("click", () => uno.style.backgroundColor = color)
dos.addEventListener("click", () => dos.style.backgroundColor = color)
tres.addEventListener("click", () => tres.style.backgroundColor = color)
cuatro.addEventListener("click", () => cuatro.style.backgroundColor = color)