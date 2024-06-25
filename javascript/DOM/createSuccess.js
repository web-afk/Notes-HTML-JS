import { createMessage } from "./createMessage.js"

export const createSuccess = message => {
    const i = document.createElement("i")
    i.classList.add("fa-solid","fa-check")
    createMessage(message, {id : "success-message", icon: i})
}