import {$, render} from "../dom.js"
import { createNote } from "./createNote.js"
import { messageTittle, messageCount } from "./notesFound.js"

export const setFullNotes = (messageTittleText, notes, messageTittleTextEmpty = "No Notes Found: ") => {

    const notesContainer = $(".full-notes")
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
        const noteElement = createNote(note.id, note.title, note.content, note.author)
        render(notesContainer, noteElement)
    }
    render(notesContainer, addNote)

}