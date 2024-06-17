const localName = "Notes_Apps"
let notesData = []

if(localStorage.getItem(localName) === null) localStorage.setItem(localName,"[]")
else notesData = JSON.parse(localStorage.getItem(localName))

export {notesData, localName}