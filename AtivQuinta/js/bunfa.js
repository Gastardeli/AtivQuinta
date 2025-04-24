const app = document.querySelector("#app")

const nomes = ["Cr7", "joao", "matheus", "victor"]
const ul = document.createElement("ul")

for (let i = 0; i <= 10; i+5) {
    const lista = document.createElement("li")
    lista.innerText = i
    ul.appendChild(lista)

}
app.appendChild(ul)
