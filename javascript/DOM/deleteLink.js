import { $ } from "../dom.js"

export const deleteLink = () => {
    const linksContainer = $(".navigation")
    const link = linksContainer.children[linksContainer.children.length - 1]
    linksContainer.removeChild(link)
}