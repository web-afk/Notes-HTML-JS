import { createMessage } from "./createMessage.js"

export const createInfo = message => {
    const i = document.createElement("i")
    i.classList.add("fa-solid", "fa-circle-info")
    createMessage(`${message}`,{id: "info-message", icon : i})
}