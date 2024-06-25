import { render , $} from "../dom.js"
import { fastClass , fastClassText} from "../misc.js"
import { handlingCloseMessage } from "../events/closeMessage.js"

export const createMessage = (message, type) => {
    const container = fastClass("article", "message-to-cx")
    container.id = type.id
    container.classList.add("popUp-message")
    const text = fastClassText("p", "message-text-to-cx", message)
    render(container, type.icon)
    render(container, text)
    const X = fastClassText("span", "close", "✕")
    render(container, X)
    X.addEventListener("click", handlingCloseMessage)
    const messageStack = $(".message-stack")
    render(messageStack, container)

    setTimeout(() => {
        container.classList.remove(".popUp-Element")
        container.classList.add("popOut-message")
        setTimeout(() => {
            if(messageStack.contains(container)){
                messageStack.removeChild(container)
            }
        },500)
    },10000)
}