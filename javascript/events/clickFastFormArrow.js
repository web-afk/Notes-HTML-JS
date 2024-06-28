import { $ } from "../dom.js"

export const handleClickFastFormArrow = event => {
    if(event.target.classList.contains("change")){
        event.target.classList.toggle("rotate-down")
        event.target.classList.toggle("rotate-up")
    }else if(event.target.classList.contains("icon-title")){
        const parent = event.target.parentElement.parentElement
        const target = $(".change", parent)
        target.classList.toggle("rotate-down")
        target.classList.toggle("rotate-up")
    }else{
        const target = $(".change", event.target.parentElement)
        target.classList.toggle("rotate-down")
        target.classList.toggle("rotate-up")
    }
    //console.log({icon: target, parent: event.target.parentElement})
}
