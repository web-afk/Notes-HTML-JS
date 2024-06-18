const $ = selector => {
    return document.querySelector(selector)
}

const $$ = selector => {
    return document.querySelectorAll(selector)
}

const render = () => {

}

export {$, $$, render}