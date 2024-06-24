import { localName } from "../DB/localStorage.js"
import { getNotes } from "../misc.js"
import { setFullNotes } from "../DOM/fullNotes.js"
import { $ } from "../dom.js"

export const handlingSearchClick = event => {
    const searchInput = $(".search-input")

    if(searchInput.value.length === 0){
        setFullNotes("Total Notes Found: ", getNotes(localName))
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
    let searchResults = []
    if(searchKey === "id"){
        if(isNumber(searchValue)){
            searchResult = notes.find(note => note.id == searchValue)
            if(searchResult === undefined) searchResult = []
            else searchResult = [searchResult]
            setFullNotes("Result Found With ID: ", searchResult, "No Notes Found With ID:")
        }else{
            console.error("Invalid ID")
        }     
    }

    else if(searchKey === "title"){
        searchResult = notes.filter(note => lookSimilarString(note.title, searchValue))
        setFullNotes(`NResult Found With Title "${searchValue}": `, searchResult, "No Notes Found With Title:")
    }

    else if(searchKey === "content"){
        searchResult = notes.filter(note => lookSimilarString(note.content, searchValue))
        setFullNotes(`Result Found With Content "${searchValue}": `, searchResult, "No Notes Found With Content:")
    }

    else if(searchKey === "author"){
        searchResult = notes.filter(note => lookSimilarString(note.author, searchValue))
        setFullNotes(`Result Found With Author "${searchValue}": `, searchResult, "No Notes Found With Author:")
    }

    else {
        console.error("Invalid Search Key")
    }
    
}