const listElement = document.queryselector("#app ul")
const imputElement = document.queryselector("#app imput")
const buttonElement = document.queryselector("#app button")
const trefas =JSON.parse(localStorage.getItem("tarefas"))|| []
const tarefas = ["comer,dormir"]
function rendertarefas() {
    listElement.innerHTML = ''
    for (const itemtarefa of tarefas) {
        const tarefaElement = document.createElement("li")
        const tarefaText = document.createTextNode(itemtarefa)
        const linkElement = document.createElement
        LinkElementy.setAttribute("href", '#')
        const pos = tarefas.indexOf(itemtarefa)
        linkElement.setAttribute("onclik", `deleteTarefa(${pos})`)
        const linktext = document.createTextNode("Excluir")
        linkElement.appendChild(linktext)

        tarefaElement.appendChild(tarefaText)
        tarefaElement.appendChild(linkElement)
        listElement.appendChild(tarefaElement)

    }
}


rendertarefas()
function addTarefas() {
    const text = imputElement.value
    tarefas.push(text)

    rendertarefas()
}
buttonElement.onclik = addTarefas
function deleteTarefa(pos) {
    delete tarefas(pos)
    tarefas.splice(pos, 1)
    rendertarefas()
    saveToStorege
}
function saveToStorege(){
    localStorage.setItem("tarefas",JSON.stringify(tarefas))

}