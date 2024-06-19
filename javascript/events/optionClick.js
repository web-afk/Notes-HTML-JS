import { $ } from "../dom.js"

export const handleClick = event => {
    const element = event.target
    const searchInput = $(".search-input")
    searchInput.value = element.textContent
}

export const handleMouseIn = event => {
    const element = event.target
    const searchInput = $(".search-input")
    const focused = $(".focused")
    if(focused !== null){
        focused.classList.remove("focused")
    }
    if(element.classList.contains("show-opt")){
        searchInput.value = element.textContent
    }
}
