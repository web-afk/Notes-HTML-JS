import { createMessage } from "./createMessage.js"

export const createAlert = message => {
    const i = document.createElement("i")
    i.classList.add("fa-solid", "fa-triangle-exclamation")
    createMessage(`${message}`, {id: "alert-message", icon: i})
}