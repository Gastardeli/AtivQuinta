const app = document.querySelector("#app")
const nomes = ["Cr7", "joao", "matheus", "victor"]
const idades = [21,43,56,100,52,19,40, 16, 80, 97]
const ul = document.createElement("ul")
const tamanho = nomes.length - 1
// for (let i = 0; i <= tamanho; i + 5) {
//     const lista = document.createElement("li")
//     lista.innerText = nomes[i]
//     ul.appendChild(lista)

// }
// for(const pos in nomes) {
//     const lista = document.createElement("li")
//     lista.innerText = nomes[pos]
//      ul.appendChild(lista)
// }
// for (const pos of nomes) {
//     const lista = document.createElement("li")
//     lista.innerText = nomes[pos]
//     ul.appendChild(lista)
//     }
for(const idade of idades){
    if(idade > 35 || idade % 2 == 1){
        break
    }
    
    const lista = document.createElement("li")
    lista.innerText = idade
    ul.appendChild(lista)
   
}
    app.appendChild(ul)