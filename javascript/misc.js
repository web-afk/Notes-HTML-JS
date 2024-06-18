const updateNotes = (localName, notes) => {
    localStorage.setItem(localName, JSON.stringify(notes))
}

const getNotes = (localName) => {
    return JSON.parse(localStorage.getItem(localName))
}

const fastElement = (element, text) => {
    const newElement = document.createElement(element)
    newElement.textContent = text
    return newElement
}

export {updateNotes,getNotes,fastElement}
