import {$, render} from "../dom.js"
import { createNote } from "./createNote.js"
import { messageTittle, messageCount } from "./notesFound.js"
import { handlingFastNoteForm } from "../events/clickFastNote.js"
import { createInfo } from "./createInfo.js"

export const setFullNotes = (messageTittleText, notes, messageTittleTextEmpty = "No Notes Found: ") => {

    const notesContainer = $(".dashboard-full-notes")
    if(!notesContainer.classList.contains("show-block")) return
    const addNote = $(".add-note")

    notesContainer.textContent = ""
    if(notes.length > 0){
        messageCount.textContent = `(${notes.length})`
        messageTittle.textContent = messageTittleText
    }else{
        messageTittle.textContent = messageTittleTextEmpty
        messageCount.textContent = `(0)`
    }
    render(messageTittle, messageCount)
    for(const note of notes){
        const noteElement = createNote(note.id, note.title, note.content, note.author, note)
        render(notesContainer, noteElement)
    }
    createInfo("You are logged as guest")
    createInfo("You can only filter by id, title, content, author and color")
    createInfo("More filters will be available soon")
    render(notesContainer, addNote)
    addNote.addEventListener("click", handlingFastNoteForm)
}