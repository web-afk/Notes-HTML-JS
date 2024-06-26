import { showFastForm } from "../DOM/fastFormLogic.js"
import { addNavLink } from "../DOM/createNewLink.js"

export const handlingFastNoteForm = () => {
    showFastForm()
    addNavLink(
        {
            className: "nav-link",
            href: "#",
            title: "Add Fast Form Note Page",
            id: "full-note-form",
            text: "Add Fast Note Form"
        }
    )
}