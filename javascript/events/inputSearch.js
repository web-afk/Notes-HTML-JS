import { render, $, $$} from "../dom.js"
import { fastElement } from "../misc.js"
import { handleClick, handleMouseIn } from "./optionClick.js"
import { setFullNotes } from "../DOM/fullNotes.js"
import { getNotes } from "../misc.js"
import { localName } from "../DB/localStorage.js"

export const handlingInputSearchUp = event => {

    const parent = event.target.parentElement
    const valueSearched = event.target.value
    const width = event.target.offsetWidth

    const inputList = document.createElement("article")
    inputList.classList.add("input-list")
    inputList.addEventListener("click", handleClick, {once: true})
    inputList.addEventListener("mouseover",handleMouseIn)

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
    const optionColor = fastElement("span", "color:")
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
    render(inputList, optionColor)

    inputList.style.width = `${width}px`
    render(parent, inputList);
    
    [...$$(".input-list > span")].forEach(option => {
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
        }
        
        if(val !== valueSearched || val === option.textContent){
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
    const inputList = [...$$(".input-list > span")]
    const valueSearched = input.value
    if(valueSearched.length === 0) setFullNotes("Total Notes Found: ", getNotes(localName))
    inputList.forEach(option => {
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
        }else if(val !== valueSearched || val === option.textContent){
            option.classList.add("hide-opt")
            option.classList.remove("show-opt")
        }
    })
}

export const handlingInputKeyPress = event => {
    const code = event.keyCode
    const input = $(".search-input")
    const options = $(".input-list")
    const activeOption = [...$$(".show-opt")]
    if(activeOption.length === 0) return
    const focused = activeOption.map((opt, index) => [opt.classList.contains("focused"), index]).filter(opt => opt.at(0)).pop()
    input.setSelectionRange(input.value.length, input.value.length)
    if(code === 40){
        if(focused === undefined){
            activeOption[0].classList.add("focused")
            activeOption[0].scrollIntoView(false)
        }else{
            const next = activeOption[focused.at(-1) + 1]
            if(next === undefined) return
            activeOption[focused.at(-1)].classList.remove("focused")
            next.classList.add("focused")
            next.scrollIntoView(false)
        }
    }
    if(code === 38){
        if(focused === undefined){
            activeOption[activeOption.length - 1].classList.add("focused")
            activeOption[activeOption.length - 1].scrollIntoView(false)
        }else{
            const prev = activeOption[focused.at(-1) - 1]
            if(prev === undefined) return
            activeOption[focused.at(-1)].classList.remove("focused")
            prev.classList.add("focused")
            prev.scrollIntoView(false)
        }
    }
    if(code === 9){
        event.preventDefault()
        if(focused === undefined) return
        input.value = activeOption[focused.at(-1)].textContent
        input.setSelectionRange(input.value.length, input.value.length)
        const parent = input.parentElement
        parent.removeChild(options)       
    }
}