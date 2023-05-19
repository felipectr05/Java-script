const listElement = document.queryselector("#app ul")
const imputElement = document.queryselector("#app imput")
const buttonElement = document.queryselector("#app button")

const tarefas = ["comer,dormir"]

for (const itemtarefa of tarefas) {
    const tarefaElement = document.createElement("li")
    const tarefaText = document.createTextNode(itemtarefa)

    tarefaElement.appendChild (tarefaText)
    listElement.appendChild(tarefaElement)
}