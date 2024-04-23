let diccionario = ["CLASE", "GLOBO", "ARBOL", "TEXTO", "HUESO", "PIEZA",
"BAILE", "ABRIL", "AMIGO", "ARAÑA", "IMAGEN" ]
let jugadas = 6
let verde = "#00f5d4"
let rosa = "#219ebc"
let azul = "#c1121f"
const BUTTON = document.getElementById("guess-button")
BUTTON.addEventListener("click", intentar)

function obtenerPalabra(){
    let aleatorio = Math.floor(Math.random()*diccionario.length)
    return diccionario[aleatorio]
}
let palabraoculta = obtenerPalabra()
let incorrectas = ""


function intentar() {
    const INTENTO = (document.getElementById("guess-input").value.toUpperCase())
    jugadas--
      
    if (jugadas == 0) {
        terminar("PERDISTE!😖")
    }
      
    if (palabraoculta == INTENTO) {
        terminar("GANASTE!😀")
    }
      //algoritmo para mostrar letras 
    let fila = document.createElement("div")
    fila.className = "row"
    for (const i in INTENTO) {
        let letra = document.createElement("span")
        letra.className = "letter"
        letra.innerText = INTENTO[i]
        fila.appendChild(letra)
        if (INTENTO[i] == palabraoculta[i]) {
            letra.style.background = verde
        } else if (palabraoculta.includes(INTENTO[i])) {
            letra.style.background = rosa
        } else {
            letra.style.background = azul
            incorrectas = incorrectas + INTENTO[i]
            console.log(incorrectas)
        }
    }
    let grilla = document.getElementById("grid")
    grilla.appendChild(fila)
}



function terminar(mensaje) {
    const input = document.getElementById("guess-input");
    input.disabled = true;
    BUTTON.disabled = true;
    let p = document.getElementById("guesses")
    p.innerHTML = "<h1>" + mensaje + "</h1>"
}







