const app = document.querySelector("#app")
const campo = document.getElementById("numero")
campo.addEventListener("keyup", () => {
    const numero = Number(event.target.value)
    do {
        console.group("número válido")
    } while (numero <= 0)

    while (true) {
        if (numero % 2 == 0) {
            break
        }
        console.log(numero)
        if (numero > 678) {
            break
        }
    }
})

const nomes = ["Cr7", "joao", "matheus", "victor"]
const idades = [21, 43, 56, 100, 52, 19, 40, 16, 80, 97]
let numero = 100

