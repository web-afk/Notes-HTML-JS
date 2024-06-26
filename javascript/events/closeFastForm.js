import { fastForm } from "../DOM/fastForm.js"
import { hideFastForm } from "../DOM/fastFormLogic.js"
import { deleteLink } from "../DOM/deleteLink.js"
import { $ } from "../dom.js"

export const  HandlingCloseFastForm = () => {
    hideFastForm()
    const child = fastForm.children[0]
    const linksContainer = $(".navigation")
    const link = linksContainer.children[linksContainer.children.length - 1]
    link.classList.remove("slide-from-right")
    link.classList.add("slide-to-right")

    setTimeout(() => {
        fastForm.classList.add("not-visible")
        fastForm.classList.remove("remove-opacity-layer-fast-form")
        child.classList.remove("slide-down-fast-form")
        deleteLink()
        if(fastForm.contains(child)){
            fastForm.removeChild(child)
        }
        setTimeout(() => {
            if(!fastForm.contains(child)){
                fastForm.appendChild(child)
            }
        },500)
    }, 1000)
}