const $ = (selector, parent = document) => {
    return parent.querySelector(selector)
}

const $$ = (selector, parent = document) => {
    return parent.querySelectorAll(selector)
}

const render = (parent, child) => {
    parent.appendChild(child)
}

export {$, $$, render}