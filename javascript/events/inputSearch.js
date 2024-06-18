import { render, $ } from "../dom.js"
import { fastElement } from "../misc.js"
import { handleClick } from "./optionClick.js"

export const handlingInputSearchUp = event => {

    const parent = event.target.parentElement
    const valueSearched = event.target.value

    const inputList = document.createElement("article")
    inputList.classList.add("input-list")
    inputList.addEventListener("click", handleClick, {once: true})

    const optionID = fastElement("span", "id:")
    const optionTitle = fastElement("span", "title:")
    const optionContent = fastElement("span","content:")
    const optionDateCreated = fastElement("span", "date.created:")
    const optionDateUpdated = fastElement("span", "date.updated:")
    const optionDateFinished = fastElement("span", "date.finished:")
    const optionAutoFinished = fastElement("span", "auto.finished:")
    const optionAutoDeleted = fastElement("span", "auto.deleted:")
    const optionDeleted = fastElement("span", "deleted:")
    const optionFinished = fastElement("span", "finished:")
    const optionCompleted = fastElement("span", "completed:")
    const optionStatus = fastElement("span", "status:")
    optionID.classList.add("show-opt")
    optionTitle.classList.add("show-opt")
    optionContent.classList.add("show-opt")
    optionDateCreated.classList.add("show-opt")
    optionDateUpdated.classList.add("show-opt")
    optionDateFinished.classList.add("show-opt")
    optionAutoFinished.classList.add("show-opt")
    optionAutoDeleted.classList.add("show-opt")
    optionDeleted.classList.add("show-opt")
    optionFinished.classList.add("show-opt")
    optionCompleted.classList.add("show-opt")
    optionStatus.classList.add("show-opt")

    render(inputList, optionID)
    render(inputList, optionTitle)
    render(inputList, optionContent)
    render(inputList, optionDateCreated)
    render(inputList, optionDateUpdated)
    render(inputList, optionDateFinished)
    render(inputList, optionAutoFinished)
    render(inputList, optionAutoDeleted)
    render(inputList, optionDeleted)
    render(inputList, optionFinished)
    render(inputList, optionCompleted)
    render(inputList, optionStatus)

    render(parent, inputList);

    [...inputList.children].forEach(option => {
        const val = option.textContent.substring(0, valueSearched.length)
        if(val === valueSearched){
            const beginSpan = fastElement("span",val)
            beginSpan.classList.add("highlight-opt")
            const endSpan = fastElement("span",option.textContent.substring(valueSearched.length))
            option.textContent = ""
            option.appendChild(beginSpan)
            option.appendChild(endSpan)
            option.classList.add("show-opt")
            option.classList.remove("hide-opt")
        }else{
            option.classList.add("hide-opt")
            option.classList.remove("show-opt")
        }
    })
}

export const handlingInputSearchDown = event => {
    const element = event.target.parentElement
    const inputList = $(".input-list")
    setTimeout(() => {
        if(element.contains(inputList)){
            element.removeChild(inputList)
        }
    }, 125)
}

export const handlingInputSearchChange = event => {
    const input = event.target
    const inputList = $(".input-list")
    const valueSearched = input.value;
    [...inputList.children].forEach(option => {
        const val = option.textContent.substring(0, valueSearched.length)
        if(val === valueSearched){
            const beginSpan = fastElement("span",val)
            beginSpan.classList.add("highlight-opt")
            const endSpan = fastElement("span",option.textContent.substring(valueSearched.length))
            option.textContent = ""
            option.appendChild(beginSpan)
            option.appendChild(endSpan)
            option.classList.add("show-opt")
            option.classList.remove("hide-opt")
        }else{
            option.classList.add("hide-opt")
            option.classList.remove("show-opt")
        }
    })
}