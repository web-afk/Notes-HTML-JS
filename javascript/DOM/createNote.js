import { fastClassText, fastClass } from "../misc.js"
import { render } from "../dom.js"

const colors = ["red", "purple", "green", "blue", "pink", "orange"]

export const createNote = (id, title, content, author) => {

    const colorID = Math.floor( Math.random() * colors.length )
    const currentColor = colors[colorID]

    const note = fastClass("section", "note")
    note.id = `note:${id}`
    note.classList.add(`note-${currentColor}`)
    const noteHeader = fastClass("header","note-header")
    noteHeader.classList.add(`note-header-${currentColor}`)
    const noteTitle = fastClassText("p","note-title", title)
    render(note, noteHeader)
    render(noteHeader, noteTitle)

    const noteBody = fastClass("section", "note-body")
    const noteButton = fastClass("button","note-options")
    const noteSymbol = fastClassText("span", "note-symbol", "Full Note Information \u{2605}")
    render(noteButton, noteSymbol)
    render(noteBody, noteButton)
    const noteContent = fastClassText("p", "note-content", content)
    render(note, noteBody)
    render(noteBody, noteContent)

    const noteFooter = fastClass("footer", "note-footer")
    const noteAuthor = fastClassText("span", "note-author", `Author: ${author}`)
    render(note, noteFooter)
    render(noteFooter, noteAuthor)
    
    return note
}