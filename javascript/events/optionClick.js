import { $ } from "../dom.js"

export const handleClick = event => {
    const element = event.target
    const searchInput = $(".search-input")
    searchInput.value += element.textContent
}
