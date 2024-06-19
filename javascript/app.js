import { notesData, localName } from "./DB/localStorage.js"
import { getNotes, updateNotes } from "./misc.js"
import { $, render} from "./dom.js"

import { handlingInputSearchUp, 
        handlingInputSearchDown,
        handlingInputSearchChange,
        handlingInputKeyPress} from "./events/inputSearch.js"

const __init__ = () => {
    //const section_links = $(".section")

    const inputSearchNotes = $(".search-input")
    inputSearchNotes.addEventListener("focus", handlingInputSearchUp)
    inputSearchNotes.addEventListener("focusout", handlingInputSearchDown)
    inputSearchNotes.addEventListener("input", handlingInputSearchChange)
    inputSearchNotes.addEventListener("keydown", handlingInputKeyPress)
}

document.addEventListener("DOMContentLoaded", __init__ )
