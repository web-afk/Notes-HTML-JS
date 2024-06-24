const localName = "Notes_Apps"
import {Notes} from "./notes.js"
localStorage.setItem(localName, JSON.stringify(Notes))
let notesData = []

if(localStorage.getItem(localName) === null) localStorage.setItem(localName,"[]")
else notesData = JSON.parse(localStorage.getItem(localName))

export {notesData, localName}