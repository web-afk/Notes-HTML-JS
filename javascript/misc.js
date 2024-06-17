const updateNotes = (localName, notes) => {
    localStorage.setItem(localName, JSON.stringify(notes))
}

const getNotes = (localName) => {
    return JSON.parse(localStorage.getItem(localName))
}

export {updateNotes,getNotes}
