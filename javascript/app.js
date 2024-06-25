import { localName } from "./DB/localStorage.js"
import { getNotes } from "./misc.js"
import { $} from "./dom.js"
import { setFullNotes } from "./DOM/fullNotes.js"
import { handlingInputSearchUp, 
        handlingInputSearchDown,
        handlingInputSearchChange,
        handlingInputKeyPress} from "./events/inputSearch.js"
import { handlingFastNoteForm } from "./events/clickFastNote.js"

import { handlingSearchClick } from "./events/searchClick.js"
import { createInfo } from "./DOM/createInfo.js"

const __init__ = () => {
    //const section_links = $(".section")
    const searchInput = $(".search-btn")
    const fastNote = $(".add-f-btn")

    const inputSearchNotes = $(".search-input")
    inputSearchNotes.addEventListener("focus", handlingInputSearchUp)
    inputSearchNotes.addEventListener("focusout", handlingInputSearchDown)
    inputSearchNotes.addEventListener("input", handlingInputSearchChange)
    inputSearchNotes.addEventListener("keydown", handlingInputKeyPress)
    searchInput.addEventListener("click", handlingSearchClick)
    fastNote.addEventListener("click", handlingFastNoteForm)

    //const notes = getNotes(localName)
    setFullNotes("Total Notes Found: ", getNotes(localName))
    createInfo("You are logged as guest")
}

document.addEventListener("DOMContentLoaded", __init__ )
