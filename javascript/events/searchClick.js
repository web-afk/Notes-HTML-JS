import { localName } from "../DB/localStorage.js"
import { getNotes } from "../misc.js"
import { setFullNotes } from "../DOM/fullNotes.js"
import { $ } from "../dom.js"
import { createAlert } from "../DOM/createAlert.js"
import { createInfo } from "../DOM/createInfo.js"

let counter = 0

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
            setFullNotes("Result Found With ID: ", searchResult, "No Note(s) Found With ID:")
        }else{
            createAlert("Invalid Search ID Value")
            if(counter === 0){
                createInfo(`Please enter a number or a text "even" or "odd"`)
                counter++
            }
        }     
    }

    else if(searchKey === "title"){
        searchResult = notes.filter(note => lookSimilarString(note.title, searchValue))
        setFullNotes(`Result(s) Found With Title "${searchValue}": `, searchResult, "No Note(s) Found With Title:")
    }

    else if(searchKey === "content"){
        searchResult = notes.filter(note => lookSimilarString(note.content, searchValue))
        setFullNotes(`Result(s) Found With Content "${searchValue}": `, searchResult, "No Note(s) Found With Content:")
    }

    else if(searchKey === "author"){
        searchResult = notes.filter(note => lookSimilarString(note.author, searchValue))
        setFullNotes(`Result(s) Found With Author "${searchValue}": `, searchResult, "No Note(s) Found With Author:")
    }

    else {
        createAlert("Invalid Search Key")
    }
    
}