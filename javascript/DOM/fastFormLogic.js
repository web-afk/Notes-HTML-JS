import { fastForm, closeFastForm} from "./fastForm.js"
import {HandlingCloseFastForm} from "../events/closeFastForm.js"

export const showFastForm = () => {
    const parent = fastForm
    const child = parent.children[0]
    child.classList.add("slide-up-fast-form")
    parent.classList.add("add-opacity-layer-fast-form")
    parent.classList.remove("not-visible")

    closeFastForm.addEventListener("click", HandlingCloseFastForm)
    parent.addEventListener("click", HandlingCloseFastForm)
}

export const hideFastForm = () => {
    const parent = fastForm
    const child = parent.children[0]
    child.classList.remove("slide-up-fast-form")
    parent.classList.remove("add-opacity-layer-fast-form")
    child.classList.add("slide-down-fast-form")
    parent.classList.add("remove-opacity-layer-fast-form")
}

