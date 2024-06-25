import { $ } from "../dom.js"
import { handleOnSubmitFastForm } from "../events/submitFastForm.js"

export const fastForm = $(".fast-form-layer")
fastForm.addEventListener("submit",handleOnSubmitFastForm)
export const closeFastForm = $(".close-fast-form")