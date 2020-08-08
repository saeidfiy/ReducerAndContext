import React,{createContext,useReducer,useEffect} from 'react'
import {BookReducer} from "../reducer/booksReducer"

export const BookContext = createContext()

function BookContextProvider(props)
{
    const[books,dispatch] = useReducer(BookReducer,[],()=>{
        const booksData = localStorage.getItem("books")
        console.log(booksData)
        return booksData ? JSON.parse(booksData) : []
    })

    useEffect(()=>{
        localStorage.setItem('books',JSON.stringify(books))
    },[books])

    return(
        <BookContext.Provider value={{books,dispatch}}>
            {props.children}
        </BookContext.Provider>
    )

}

export default BookContextProvider