import { $ } from "../dom.js"

export const handlingCloseMessage = event => {
    const messageStack = $(".message-stack")
    const parent = event.target.parentElement
    parent.classList.remove("popUp-message")
    parent.classList.add("popOut-message")
    setTimeout(() => {
        messageStack.removeChild(parent)
    },500)
}