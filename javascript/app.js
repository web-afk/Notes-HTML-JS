import { notesData, localName } from "./DB/localStorage.js"
import { getNotes, updateNotes } from "./misc.js"
import { $, render} from "./dom.js"

import { handlingInputSearchUp, 
        handlingInputSearchDown,
        handlingInputSearchChange,
        handlingInputKeyPress} from "./events/inputSearch.js"
import { createNote } from "./DOM/createNote.js"
import { Notes } from "./DB/notes.js"

const __init__ = () => {
    //const section_links = $(".section")
    const notesContainer = $(".full-notes")
    const addNote = $(".add-note")

    const inputSearchNotes = $(".search-input")
    inputSearchNotes.addEventListener("focus", handlingInputSearchUp)
    inputSearchNotes.addEventListener("focusout", handlingInputSearchDown)
    inputSearchNotes.addEventListener("input", handlingInputSearchChange)
    inputSearchNotes.addEventListener("keydown", handlingInputKeyPress)

    //const notes = getNotes(localName)
    notesContainer.textContent = ""
    for(const note of notesData){
        const noteElement = createNote(note.id, note.title, note.content, note.author)
        render(notesContainer, noteElement)
    }
    render(notesContainer, addNote)

}

document.addEventListener("DOMContentLoaded", __init__ )
