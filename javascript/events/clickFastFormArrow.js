import { $ } from "../dom.js"

export const handleClickFastFormArrow = event => {
    const target = $(".change", event.target)
    target.classList.toggle("rotate-up")
    target.classList.toggle("rotate-down")
}