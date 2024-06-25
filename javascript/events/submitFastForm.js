import { $ } from "../dom.js"
import { updateNotes, getNotes} from "../misc.js"
import { localName} from "../DB/localStorage.js"
import { getID } from "../DB/notesFunc.js"
import { HandlingCloseFastForm } from "./closeFastForm.js"
import { setFullNotes } from "../DOM/fullNotes.js"
import { createSuccess } from "../DOM/createSuccess.js"

export const handleOnSubmitFastForm = event => {
    event.preventDefault()
    const title = $("#title").value
    const content = $("#content").value
    const author = $("#author").value
    const notes = getNotes(localName)
    const id = getID(notes)
    const color = "purple"
    const newNote = {id, title, content, author, color}
    notes.push(newNote)
    updateNotes(localName, notes)
    $("#title").value = ""
    $("#content").value = ""
    $("#author").value = "app-note@guest.com"

    createSuccess(`Note ID#${id} was created`)
    HandlingCloseFastForm()
    setFullNotes("Total Notes Found: ", getNotes(localName))
}
