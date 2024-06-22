export const updateNotes = (localName, notes) => {
    localStorage.setItem(localName, JSON.stringify(notes))
}

export const getNotes = (localName) => {
    return JSON.parse(localStorage.getItem(localName))
}

export const fastElement = (element, text) => {
    const newElement = document.createElement(element)
    newElement.classList.add(className)
    newElement.textContent = text
    return newElement
}

export const fastClass = (element, className) => {
    const newElement = document.createElement(element)
    newElement.classList.add(className)
    return newElement
}

export const fastClassText = (element, className, text) => {
    const newElement = document.createElement(element)
    newElement.classList.add(className)
    newElement.textContent = text
    return newElement
}


