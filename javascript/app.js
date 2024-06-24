import { notesData, localName } from "./DB/localStorage.js"
import { getNotes, updateNotes } from "./misc.js"
import { $, render} from "./dom.js"
import { setFullNotes } from "./DOM/fullNotes.js"
import { handlingInputSearchUp, 
        handlingInputSearchDown,
        handlingInputSearchChange,
        handlingInputKeyPress} from "./events/inputSearch.js"

import { handlingSearchClick } from "./events/searchClick.js"

const __init__ = () => {
    //const section_links = $(".section")
    const searchInput = $(".search-btn")

    const inputSearchNotes = $(".search-input")
    inputSearchNotes.addEventListener("focus", handlingInputSearchUp)
    inputSearchNotes.addEventListener("focusout", handlingInputSearchDown)
    inputSearchNotes.addEventListener("input", handlingInputSearchChange)
    inputSearchNotes.addEventListener("keydown", handlingInputKeyPress)
    searchInput.addEventListener("click", handlingSearchClick)

    //const notes = getNotes(localName)
    setFullNotes("Total Notes Found: ", getNotes(localName))

}

document.addEventListener("DOMContentLoaded", __init__ )
