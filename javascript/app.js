import { localName } from "./DB/localStorage.js"
import { getNotes } from "./misc.js"
import { $, $$} from "./dom.js"
import { setFullNotes } from "./DOM/fullNotes.js"
import { handlingInputSearchUp, 
        handlingInputSearchDown,
        handlingInputSearchChange,
        handlingInputKeyPress} from "./events/inputSearch.js"
import { handlingFastNoteForm } from "./events/clickFastNote.js"
import { handleAllFullFormArrows } from "./DOM/changeArrowFullForm.js"
import { handlingSearchClick } from "./events/searchClick.js"
import { handlingFullFormChange } from "./events/changeFullForm.js"


const __init__ = () => {
    const searchInput = $(".search-btn")
    const fastNote = $(".add-f-btn")
    const tabFullFormArrows = $$(".summary-label")
    const fullForm = $(".full-form")

    const inputSearchNotes = $(".search-input")
    inputSearchNotes.addEventListener("focus", handlingInputSearchUp)
    inputSearchNotes.addEventListener("focusout", handlingInputSearchDown)
    inputSearchNotes.addEventListener("input", handlingInputSearchChange)
    inputSearchNotes.addEventListener("keydown", handlingInputKeyPress)
    searchInput.addEventListener("click", handlingSearchClick)
    fastNote.addEventListener("click", handlingFastNoteForm)
    fullForm.addEventListener("input", handlingFullFormChange)

    setFullNotes("Total Notes Found: ", getNotes(localName))
    handleAllFullFormArrows(tabFullFormArrows)
}

document.addEventListener("DOMContentLoaded", __init__ )
