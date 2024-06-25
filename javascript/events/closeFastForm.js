import { fastForm } from "../DOM/fastForm.js"
import { hideFastForm } from "../DOM/fastFormLogic.js"

export const  HandlingCloseFastForm = event => {
    hideFastForm()
    const child = fastForm.children[0]
    setTimeout(() => {
        fastForm.classList.add("not-visible")
        fastForm.classList.remove("remove-opacity-layer-fast-form")
        child.classList.remove("slide-down-fast-form")
        if(fastForm.contains(child)){
            fastForm.removeChild(child)
        }
        setTimeout(() => {
            if(!fastForm.contains(child)){
                fastForm.appendChild(child)
            }
        })
    }, 1000)
}