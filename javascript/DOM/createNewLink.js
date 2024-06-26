import { $, render} from "../dom.js"
import { fastClass } from "../misc.js"

export const addNavLink = ({className, href, title, id ,text}) => {
    const navLink = fastClass("a", className)
    const navContainer = fastClass("section", "nav-section")
    const span = document.createElement("span")
    const linksContainer = $(".navigation")
    span.textContent = " > "
    navLink.setAttribute("href", href)
    navLink.setAttribute("title", title)
    navLink.id = id
    navLink.textContent = text
    navContainer.classList.add("slide-from-right")
    render(navContainer, span)
    render(navContainer, navLink)
    render(linksContainer, navContainer)
}