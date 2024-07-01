import { $ } from "../dom.js"

export const handlingFullFormChange = event => {
    const card_preview = $(".card-preview-full-form")
    const fullForm = $(".full-form")

    const title = $(".full-form-input-title",fullForm)
    const content = $(".full-form-input-content",fullForm)
    const author = $(".full-form-input-author",fullForm)

    const titleValue = title.value
    const contentValue = content.value
    const authorValue = author.value

    const titleText = $(".note-title", card_preview)
    const contentText = $(".note-content", card_preview)
    const authorText = $(".note-author", card_preview)

    titleText.textContent = !titleValue.length ? `"Title"` : titleValue
    contentText.textContent = !contentValue.length ? `"Content"` : contentValue
    authorText.textContent = `Author: ${!authorValue.length ? `"enrique2016flores@gmail.com"` : authorValue}`
}