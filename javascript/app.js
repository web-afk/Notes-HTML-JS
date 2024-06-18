import { notesData, localName } from "./localStorage.js"
import { getNotes, updateNotes } from "./misc.js"
import { $, render} from "./dom.js"

import { handlingInputSearchUp, 
        handlingInputSearchDown,
        handlingInputSearchChange } from "./events/inputSearch.js"

const __init__ = () => {
    //const section_links = $(".section")

    const inputSearchNotes = $(".search-input")
    inputSearchNotes.addEventListener("focus", handlingInputSearchUp)
    inputSearchNotes.addEventListener("focusout", handlingInputSearchDown)
    inputSearchNotes.addEventListener("input", handlingInputSearchChange)
}

document.addEventListener("DOMContentLoaded", __init__ )
