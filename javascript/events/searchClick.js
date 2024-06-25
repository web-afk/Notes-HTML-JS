import { localName } from "../DB/localStorage.js"
import { getNotes } from "../misc.js"
import { setFullNotes } from "../DOM/fullNotes.js"
import { $ } from "../dom.js"
import { createAlert } from "../DOM/createAlert.js"
import { createInfo } from "../DOM/createInfo.js"

let counterID = 0
let counterColor = 0

export const handlingSearchClick = event => {
    const searchInput = $(".search-input")

    if(searchInput.value.length === 0){
        setFullNotes("Total Notes Found: ", getNotes(localName))
        return
    }

    if(searchInput.id === "CustomSearch"){
        handleCustomSearch(searchInput.value)
    }
}

const lookSimilarString = (str1, str2) => str1.toLowerCase().includes(str2.toLowerCase().trim())

const isNumber = str => !isNaN(Number(str))

const handleCustomSearch = search => {
    const [searchKey, searchValue] = search.split(":")
    const notes = getNotes(localName)
    let searchResult = null
    if(searchKey === "id"){
        if(isNumber(searchValue)){
            searchResult = notes.find(note => note.id == searchValue)
            if(searchResult === undefined) searchResult = []
            else searchResult = [searchResult]
            setFullNotes(`Result Found With ID: "#${searchValue}"`, searchResult, `No Note(s) Found With ID: "#${searchValue}"`)
        }else{
            createAlert("Invalid Search ID Value")
            if(counterID === 0){
                createInfo(`Please enter a number or a text "even" or "odd"`)
                counterID++
            }
        }     
    }

    else if(searchKey === "title"){
        searchResult = notes.filter(note => lookSimilarString(note.title, searchValue))
        setFullNotes(`Result(s) Found With Title "${searchValue}": `, searchResult, `No Note(s) Found With Title: ${searchValue}`)
    }

    else if(searchKey === "content"){
        searchResult = notes.filter(note => lookSimilarString(note.content, searchValue))
        setFullNotes(`Result(s) Found With Content "${searchValue}": `, searchResult, `No Note(s) Found With Content: ${searchValue}`)
    }

    else if(searchKey === "author"){
        searchResult = notes.filter(note => lookSimilarString(note.author, searchValue))
        setFullNotes(`Result(s) Found With Author "${searchValue}": `, searchResult, `No Note(s) Found With Author: ${searchValue}`)
    }

    else if(searchKey === "color"){
        const colors = ["red", "purple", "green", "blue", "pink", "orange", "yellow", "blank"]
        if(colors.includes(searchValue)){
            if(searchValue === "blank"){
                searchResult = notes.filter(note => note.color === undefined)
            }else{
                searchResult = notes.filter(note => note.color === searchValue)
            }
            setFullNotes(`Result(s) Found With Color "${searchValue}": `, searchResult, `No Note(s) Found With Color: ${searchValue}`)
        }
        else{
            createAlert("Please enter a valid color")
            if(counterColor === 0){
                createInfo("Valid Colors: red, purple, green, blue, pink, orange, yellow, blank")
                counterColor++
            }
        }
    }

    else {
        createAlert("Invalid Search Key")
    }
    
}